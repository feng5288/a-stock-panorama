(function(){
  var manifestCache = null;
  var externalCache = null;

  function escapeHtml(value){
    return String(value == null ? '' : value).replace(/[&<>"']/g, function(ch){
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[ch];
    });
  }

  function pctText(value){
    if(value == null || value === '') return '--';
    var num = Number(value);
    if(Number.isNaN(num)) return '--';
    return (num > 0 ? '+' : '') + num.toFixed(1) + '%';
  }

  function normalizeCode(code){
    return String(code || '').replace(/\D/g, '').padStart(6, '0').slice(-6);
  }

  function embeddedFallback(){
    if(typeof EMBEDDED_DATA === 'undefined') return null;
    var stocks = EMBEDDED_DATA.full && EMBEDDED_DATA.full.stocks_by_code || {};
    var v2 = EMBEDDED_DATA.v2 && EMBEDDED_DATA.v2.reports_by_code || {};
    var legacyRows = EMBEDDED_DATA.legacy && EMBEDDED_DATA.legacy.rows || [];
    var legacy = {};
    legacyRows.forEach(function(row){ legacy[normalizeCode(row.code)] = row; });
    var codes = {};
    Object.keys(stocks).forEach(function(code){ codes[normalizeCode(code)] = true; });
    Object.keys(v2).forEach(function(code){ codes[normalizeCode(code)] = true; });
    Object.keys(legacy).forEach(function(code){ codes[normalizeCode(code)] = true; });
    var companies = {};
    Object.keys(codes).forEach(function(code){
      var stock = stocks[code] || {};
      var old = legacy[code] || {};
      var report = v2[code] ? { status:'new', label:'深度资料', path:v2[code].relative_path } :
        old ? { status:'historical', label:'历史资料', path:old.html_report_path } :
        { status:'pending', label:'资料整理中', path:'' };
      companies[code] = {
        code: code,
        name: stock.name || old.name || code,
        primary_industry: stock.primary_industry || '数据整理中',
        secondary_tracks: stock.secondary_tracks || [],
        tags: (stock.tags || []).slice(0, 8),
        report_status: report.status,
        report_label: report.label,
        report_path: report.path,
        classification_status: stock.tags && stock.tags.length ? '已归类' : '待归类',
        financial_signal: stock.financial_signal || {}
      };
    });
    var values = Object.keys(companies).map(function(code){ return companies[code]; });
    return {
      schema_version: 1,
      source: 'embedded_runtime_fallback',
      summary: {
        companies_total: values.length,
        embedded_company_count: Object.keys(stocks).length,
        historical_material_count: legacyRows.length,
        new_report_count: Object.keys(v2).length,
        with_report_count: values.filter(function(item){ return item.report_status !== 'pending'; }).length,
        pending_report_count: values.filter(function(item){ return item.report_status === 'pending'; }).length,
        classified_count: values.filter(function(item){ return item.classification_status === '已归类'; }).length,
        pending_classification_count: values.filter(function(item){ return item.classification_status !== '已归类'; }).length
      },
      companies: companies
    };
  }

  function loadJson(url){
    return fetch(url + '?v=' + Date.now()).then(function(res){
      if(!res.ok) throw new Error(url + ' not ready');
      return res.json();
    });
  }

  function mergeExternal(base, external){
    if(!external) return base;
    var merged = JSON.parse(JSON.stringify(base));
    if(external.company_master && Array.isArray(external.company_master.companies)){
      external.company_master.companies.forEach(function(item){
        var code = normalizeCode(item.code);
        merged.companies[code] = Object.assign({}, merged.companies[code] || {}, item, { code: code });
      });
    }
    if(external.report_status && Array.isArray(external.report_status.reports)){
      external.report_status.reports.forEach(function(item){
        var code = normalizeCode(item.code);
        merged.companies[code] = Object.assign({}, merged.companies[code] || { code: code }, {
          report_status: item.status || merged.companies[code]?.report_status || 'pending',
          report_label: item.label || merged.companies[code]?.report_label || '资料整理中',
          report_path: item.path || merged.companies[code]?.report_path || ''
        });
      });
    }
    if(external.classification_mapping && Array.isArray(external.classification_mapping.mappings)){
      external.classification_mapping.mappings.forEach(function(item){
        var code = normalizeCode(item.code);
        merged.companies[code] = Object.assign({}, merged.companies[code] || { code: code }, {
          primary_industry: item.primary_industry || merged.companies[code]?.primary_industry || '数据整理中',
          secondary_tracks: item.secondary_tracks || merged.companies[code]?.secondary_tracks || [],
          tags: item.tags || merged.companies[code]?.tags || [],
          classification_status: item.status || '已归类'
        });
      });
    }
    var values = Object.keys(merged.companies).map(function(code){ return merged.companies[code]; });
    merged.summary.companies_total = values.length;
    merged.summary.with_report_count = values.filter(function(item){ return item.report_status !== 'pending'; }).length;
    merged.summary.pending_report_count = values.filter(function(item){ return item.report_status === 'pending'; }).length;
    merged.summary.classified_count = values.filter(function(item){ return item.classification_status === '已归类'; }).length;
    merged.summary.pending_classification_count = values.filter(function(item){ return item.classification_status !== '已归类'; }).length;
    merged.source = external.used?.length ? 'external_files_plus_manifest' : merged.source;
    merged.external_used = external.used || [];
    return merged;
  }

  function loadExternalFiles(){
    var files = [
      ['company_master', 'data/company_master.json'],
      ['report_status', 'data/report_status.json'],
      ['classification_mapping', 'data/classification_mapping.json']
    ];
    return Promise.all(files.map(function(pair){
      return loadJson(pair[1]).then(function(data){ return [pair[0], data]; }).catch(function(){ return [pair[0], null]; });
    })).then(function(results){
      var out = { used: [] };
      results.forEach(function(pair){
        if(pair[1]){ out[pair[0]] = pair[1]; out.used.push(pair[0]); }
      });
      return out;
    });
  }

  function loadIngress(){
    if(manifestCache) return Promise.resolve(manifestCache);
    return loadJson('data/company_ingress_manifest.json')
      .catch(function(){ return embeddedFallback(); })
      .then(function(base){
        if(!base) throw new Error('company ingress data unavailable');
        return loadExternalFiles().then(function(external){ return mergeExternal(base, external); });
      })
      .then(function(data){ manifestCache = data; return data; });
  }

  function search(data, query){
    var q = String(query || '').trim().toLowerCase();
    if(!q) return [];
    return Object.keys(data.companies).map(function(code){ return data.companies[code]; })
      .filter(function(item){
        return item.code.indexOf(q) >= 0 ||
          String(item.name || '').toLowerCase().indexOf(q) >= 0 ||
          String(item.primary_industry || '').toLowerCase().indexOf(q) >= 0 ||
          (item.secondary_tracks || []).join(' ').toLowerCase().indexOf(q) >= 0;
      })
      .slice(0, 20);
  }

  function statusClass(status){
    if(status === 'new') return 'ready';
    if(status === 'historical') return 'hist';
    return 'pending';
  }

  function renderResult(item){
    var reportButton = item.report_path ?
      '<a class="ingress-open" href="' + escapeHtml(item.report_path) + '" target="_blank" rel="noopener">打开资料</a>' :
      '<span class="ingress-open disabled">暂未生成</span>';
    var tracks = (item.secondary_tracks || []).slice(0, 3).map(escapeHtml).join(' / ') || '数据整理中';
    var finance = item.financial_signal || {};
    return '<article class="ingress-result" data-ingress-stock="' + escapeHtml(item.code) + '">' +
      '<div><b>' + escapeHtml(item.name) + '</b><span>' + escapeHtml(item.code) + '</span></div>' +
      '<p>' + escapeHtml(item.primary_industry || '数据整理中') + ' · ' + tracks + '</p>' +
      '<p class="ingress-fin">净利润：' + (finance.net_profit_yi == null ? '--' : escapeHtml(finance.net_profit_yi) + '亿') +
      '　同比：' + pctText(finance.yoy_parent_net_income_pct) +
      '　状态：' + escapeHtml(finance.improvement_status || '待资料完善') + '</p>' +
      '<footer><span class="ingress-pill ' + statusClass(item.report_status) + '">' + escapeHtml(item.report_label || '资料整理中') + '</span>' + reportButton + '</footer>' +
    '</article>';
  }

  function renderPanel(data){
    if(document.getElementById('companyIngressLayer')) return;
    var host = document.createElement('section');
    host.id = 'companyIngressLayer';
    host.className = 'company-ingress-layer';
    var s = data.summary || {};
    host.innerHTML =
      '<div class="ingress-head"><div><span>公司库</span><h2>A股公司资料库</h2><p>可按公司名称、代码、行业或概念检索，查看产业归属、财务信号和资料状态。</p></div><div class="ingress-source">' +
      (data.external_used && data.external_used.length ? '资料库已更新' : '资料已接入') +
      '</div></div>' +
      '<div class="ingress-kpis">' +
        '<div><b>' + (s.companies_total || 0) + '</b><span>公司记录</span></div>' +
        '<div><b>' + (s.historical_material_count || 0) + '</b><span>公司资料</span></div>' +
        '<div><b>' + (s.new_report_count || 0) + '</b><span>深度资料</span></div>' +
        '<div><b>' + (s.pending_report_count || 0) + '</b><span>资料整理中</span></div>' +
      '</div>' +
      '<div class="ingress-search"><input id="companyIngressSearch" type="search" placeholder="搜索公司名称、代码、行业或概念"><span id="companyIngressHint">输入后显示匹配公司</span></div>' +
      '<div id="companyIngressResults" class="ingress-results"><div class="ingress-empty">输入公司名称、股票代码、行业或概念后显示匹配结果。</div></div>';

    var target = document.querySelector('main');
    if(target && target.firstElementChild) target.insertBefore(host, target.firstElementChild.nextSibling);
    else document.body.appendChild(host);

    var input = host.querySelector('#companyIngressSearch');
    var results = host.querySelector('#companyIngressResults');
    input.addEventListener('input', function(){
      var matches = search(data, input.value);
      host.querySelector('#companyIngressHint').textContent = input.value.trim() ? '匹配 ' + matches.length + ' 条' : '输入后显示匹配公司';
      results.innerHTML = matches.length ? matches.map(renderResult).join('') : '<div class="ingress-empty">没有匹配公司。可尝试输入股票代码、公司简称或更宽泛的行业关键词。</div>';
    });
  }

  function injectStyles(){
    if(document.getElementById('companyIngressLayerStyle')) return;
    var style = document.createElement('style');
    style.id = 'companyIngressLayerStyle';
    style.textContent = '.company-ingress-layer{width:min(1280px,calc(100% - 36px));margin:14px auto 18px;border:1px solid rgba(82,168,255,.28);border-radius:10px;background:linear-gradient(180deg,rgba(13,23,37,.94),rgba(8,13,22,.96));padding:16px;color:#e6edf3;box-shadow:0 18px 46px rgba(0,0,0,.22)}.ingress-head{display:flex;align-items:flex-start;justify-content:space-between;gap:14px}.ingress-head span{display:inline-flex;border:1px solid rgba(125,211,252,.42);border-radius:999px;padding:3px 9px;color:#9edcff;font-size:12px;font-weight:800}.ingress-head h2{margin:9px 0 6px;font-size:22px;color:#fff}.ingress-head p{margin:0;color:#aebdca;line-height:1.65;font-size:13px}.ingress-source{border:1px solid rgba(148,163,184,.24);border-radius:8px;background:rgba(255,255,255,.04);padding:9px 10px;color:#cbd5e1;font-size:12px;white-space:nowrap}.ingress-kpis{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin:14px 0}.ingress-kpis div{border:1px solid rgba(148,163,184,.24);border-radius:8px;background:rgba(255,255,255,.04);padding:10px}.ingress-kpis b{display:block;color:#fff;font-size:22px}.ingress-kpis span{display:block;color:#94a3b8;font-size:12px;margin-top:4px}.ingress-search{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:center}.ingress-search input{height:40px;border:1px solid rgba(148,163,184,.3);border-radius:8px;background:#07111e;color:#f8fafc;padding:0 12px;font-size:14px}.ingress-search span{color:#94a3b8;font-size:12px}.ingress-results{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:12px}.ingress-result,.ingress-empty{border:1px solid rgba(148,163,184,.22);border-radius:8px;background:rgba(255,255,255,.035);padding:12px}.ingress-result{cursor:pointer}.ingress-result:hover{border-color:rgba(88,166,255,.58);background:rgba(255,255,255,.055)}.ingress-result b{font-size:16px;color:#fff}.ingress-result div span{margin-left:8px;color:#94a3b8;font-size:12px}.ingress-result p{margin:7px 0 0;color:#aebdca;line-height:1.55;font-size:12px}.ingress-fin{color:#dbeafe!important}.ingress-result footer{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:10px}.ingress-pill,.ingress-open{display:inline-flex;align-items:center;height:26px;border-radius:999px;border:1px solid rgba(148,163,184,.28);padding:0 9px;font-size:12px;color:#dbeafe}.ingress-pill.ready{border-color:rgba(125,211,252,.45);color:#a5f3fc;background:rgba(14,165,233,.1)}.ingress-pill.hist{border-color:rgba(210,153,34,.45);color:#f7d48b;background:rgba(210,153,34,.1)}.ingress-pill.pending{border-color:rgba(148,163,184,.28);color:#cbd5e1}.ingress-open{color:#9edcff;text-decoration:none}.ingress-open.disabled{color:#94a3b8}.ingress-empty{grid-column:1/-1;color:#94a3b8;line-height:1.7;font-size:13px}@media(max-width:900px){.ingress-head,.ingress-search{grid-template-columns:1fr;display:grid}.ingress-source{white-space:normal}.ingress-kpis,.ingress-results{grid-template-columns:1fr}.company-ingress-layer{width:min(100% - 24px,1280px)}}';
    document.head.appendChild(style);
  }

  function init(){
    injectStyles();
    loadIngress().then(renderPanel).catch(function(){
      var fallback = embeddedFallback();
      if(fallback) renderPanel(fallback);
    });
  }

  window.AStockCompanyIngress = {
    load: loadIngress,
    search: function(query){ return loadIngress().then(function(data){ return search(data, query); }); },
    resolve: function(code){ return loadIngress().then(function(data){ return data.companies[normalizeCode(code)] || null; }); }
  };

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
