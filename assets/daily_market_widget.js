(function(){
  function escapeHtml(value){
    return String(value == null ? '' : value).replace(/[&<>"']/g, function(ch){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch];
    });
  }
  function pctClass(value){ return value > 0 ? 'up' : value < 0 ? 'down' : 'flat'; }
  function pctText(value){ return value == null ? '--' : (Number(value) > 0 ? '+' : '') + Number(value).toFixed(2) + '%'; }
  function amountText(value){ return value == null ? '--' : Number(value).toFixed(2) + '亿'; }
  function renderRows(rows){
    if(!rows || !rows.length) return '<div class="dm-empty">暂无收盘数据</div>';
    return rows.slice(0, 6).map(function(row){
      return '<div class="dm-row"><div class="dm-name">' + escapeHtml(row.name) +
        '<span>' + escapeHtml(row.code) + '</span></div><div class="dm-pct ' +
        pctClass(row.pct_chg || 0) + '">' + pctText(row.pct_chg) + '</div><div class="dm-amount">' +
        amountText(row.amount_yi) + '</div></div>';
    }).join('');
  }
  function renderMissing(topic){
    var list = topic.missing_companies || [];
    if(!list.length) return '';
    var names = list.map(function(item){ return escapeHtml(item.name) + ' <span>' + escapeHtml(item.code) + '</span>'; }).join('、');
    return '<div class="dm-missing"><b>当日未返回行情：</b>' + names +
      '<p>通常是停牌、无交易或数据源暂未覆盖，不代表该公司被移出专题公司池。</p></div>';
  }
  function renderWidget(root, payload){
    var topicId = root.getAttribute('data-topic-id');
    var topic = payload && payload.topics && payload.topics[topicId];
    if(!topic) throw new Error('missing topic data: ' + topicId);
    var s = topic.summary || {};
    var fallbackNote = payload.extended_metric_partial ? '<div class="dm-note">估值、换手率等扩展指标待下一轮数据补充；收盘价、涨跌幅、成交额已更新。</div>' : '';
    root.innerHTML = '<section class="daily-market-widget">' +
      '<div class="dm-head"><div><div class="dm-title">每日收盘观察</div><div class="dm-note">读取专题公司池最新收盘数据，用于观察板块表现、涨跌分布和样本公司活跃度。</div></div><div class="dm-date">' + escapeHtml(payload.trade_date_text || '最近收盘') + '</div></div>' +
      '<div class="dm-kpis">' +
        '<div class="dm-kpi"><b>' + pctText(s.avg_pct_chg) + '</b><span>平均涨跌幅</span></div>' +
        '<div class="dm-kpi"><b>' + (s.up_count || 0) + ' / ' + (s.down_count || 0) + '</b><span>上涨 / 下跌</span></div>' +
        '<div class="dm-kpi"><b>' + topic.covered_count + ' / ' + topic.company_count + '</b><span>覆盖公司</span></div>' +
        '<div class="dm-kpi"><b>' + amountText(s.total_amount_yi) + '</b><span>合计成交额</span></div>' +
      '</div>' +
      renderMissing(topic) + fallbackNote +
      '<div class="dm-lists"><div class="dm-list"><h3>涨幅靠前</h3>' + renderRows(topic.top_gainers) + '</div><div class="dm-list"><h3>成交额靠前</h3>' + renderRows(topic.top_amount) + '</div></div>' +
      '<div class="dm-note dm-risk">' + escapeHtml(payload.note || '基于公开行情数据整理，仅用于产业链研究交流，不构成投资建议、买卖依据或收益承诺。') + '</div>' +
      '</section>';
  }
  function renderFallback(root){
    root.innerHTML = '<section class="daily-market-widget"><div class="dm-head"><div><div class="dm-title">每日收盘观察</div><div class="dm-note">运行每日更新脚本后显示最新收盘数据。</div></div><div class="dm-date">数据待更新</div></div></section>';
  }
  function loadAll(){
    var roots = Array.from(document.querySelectorAll('[data-daily-market-widget]'));
    if(!roots.length) return;
    fetch('../../data/daily_market_latest.json?v=' + Date.now())
      .then(function(res){ if(!res.ok) throw new Error('daily data not ready'); return res.json(); })
      .then(function(payload){ roots.forEach(function(root){ renderWidget(root, payload); }); })
      .catch(function(){ roots.forEach(renderFallback); });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', loadAll);
  else loadAll();
})();