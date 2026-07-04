(function(){
  var RISK_NOTE = '基于公开资料整理，仅用于产业链研究交流，不构成投资建议、买卖依据或收益承诺。';

  function esc(value){
    return String(value == null ? '' : value).replace(/[&<>"']/g, function(ch){
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[ch];
    });
  }

  function normalizeCode(code){
    return String(code || '').replace(/\D/g, '').padStart(6, '0').slice(-6);
  }

  function pctText(value){
    if(value == null || value === '') return '--';
    var num = Number(value);
    if(Number.isNaN(num)) return '--';
    return (num > 0 ? '+' : '') + num.toFixed(1) + '%';
  }

  function materialLabel(item){
    if(!item) return '资料整理中';
    if(item.report_status === 'new') return '深度资料';
    if(item.report_status === 'historical') return '公司资料';
    return item.report_label || '资料整理中';
  }

  function materialClass(item){
    if(item && item.report_status === 'new') return 'blue';
    if(item && item.report_status === 'historical') return 'gold';
    return 'gray';
  }

  function uniqueStrings(values){
    var seen = {};
    return (values || []).map(function(value){
      return String(value == null ? '' : value).trim();
    }).filter(function(value){
      if(!value || seen[value]) return false;
      seen[value] = true;
      return true;
    });
  }

  function topTags(item){
    var tags = (item && item.tags || []).map(function(tag){
      return typeof tag === 'string' ? tag : (tag.name || tag.node_name || '');
    });
    return uniqueStrings(tags).slice(0, 10);
  }

  function tracks(item){
    return uniqueStrings(item && item.secondary_tracks || []).slice(0, 4);
  }

  function showFallback(code){
    if(typeof window.__AStockOriginalOpenStockModal === 'function'){
      window.__AStockOriginalOpenStockModal(code);
    }
  }

  function closeModal(){
    var modal = document.getElementById('stockModal');
    if(modal) modal.hidden = true;
    document.body.style.overflow = '';
  }

  function renderCompanyModal(item){
    var body = document.getElementById('stockModalBody');
    var modal = document.getElementById('stockModal');
    if(!body || !modal) return false;
    var finance = item.financial_signal || {};
    var itemTracks = tracks(item);
    var itemTags = topTags(item);
    var hasMaterial = !!item.report_path;
    var material = materialLabel(item);
    var materialTone = materialClass(item);
    body.innerHTML =
      '<div class="modal-top">' +
        '<div><div class="modal-title">' + esc(item.name || item.code) + ' <span class="modal-sub">' + esc(item.code) + '</span></div>' +
        '<div class="modal-sub">' + esc(item.primary_industry || '资料整理中') + (itemTracks.length ? ' · ' + esc(itemTracks.join(' / ')) : '') + '</div></div>' +
        '<button class="modal-close" id="modalCloseBtn" aria-label="关闭">×</button>' +
      '</div>' +
      '<div class="modal-grid">' +
        '<div class="modal-fact"><b>' + esc(finance.net_profit_yi == null ? '--' : finance.net_profit_yi + '亿') + '</b><span>净利润</span></div>' +
        '<div class="modal-fact"><b>' + esc(pctText(finance.yoy_parent_net_income_pct)) + '</b><span>净利润同比</span></div>' +
        '<div class="modal-fact"><b>' + esc(finance.improvement_status || '待资料完善') + '</b><span>财务变化</span></div>' +
      '</div>' +
      '<div class="modal-section"><h3>产业归属</h3><div class="modal-tags">' +
        '<span class="chip blue">' + esc(item.primary_industry || '资料整理中') + '</span>' +
        (itemTracks.length ? itemTracks.map(function(name){ return '<span class="chip">' + esc(name) + '</span>'; }).join('') : '') +
      '</div></div>' +
      '<div class="modal-section"><h3>概念标签</h3><div class="modal-tags">' +
        (itemTags.length ? itemTags.map(function(name){ return '<span class="chip">' + esc(name) + '</span>'; }).join('') : '<span class="chip gold">标签整理中</span>') +
      '</div></div>' +
      '<div class="modal-section"><h3>资料状态</h3><div class="modal-tags">' +
        '<span class="chip ' + esc(materialTone) + '">' + esc(material) + '</span>' +
        '<span class="chip">' + esc(hasMaterial ? '可查看公司资料' : '资料整理中') + '</span>' +
      '</div></div>' +
      '<div class="modal-actions">' +
        (hasMaterial ? '<a class="report-link" target="_blank" rel="noopener" href="' + esc(item.report_path) + '">查看公司资料</a>' : '<span class="muted-link">资料整理中</span>') +
        '<button class="report-link secondary" id="modalCloseAction" type="button">继续浏览概念</button>' +
      '</div>' +
      '<div class="risk-note">' + esc(RISK_NOTE) + '</div>';
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
    var closeAction = document.getElementById('modalCloseAction');
    if(closeAction) closeAction.addEventListener('click', closeModal);
    return true;
  }

  function resolveAndOpen(code){
    var normalized = normalizeCode(code);
    if(!window.AStockCompanyIngress || !window.AStockCompanyIngress.resolve){
      showFallback(normalized);
      return;
    }
    window.AStockCompanyIngress.resolve(normalized).then(function(item){
      if(!item){
        showFallback(normalized);
        return;
      }
      renderCompanyModal(item);
    }).catch(function(){
      showFallback(normalized);
    });
  }

  function enhanceIngressCards(){
    document.addEventListener('click', function(event){
      var card = event.target.closest && event.target.closest('[data-ingress-stock]');
      if(!card) return;
      if(event.target.closest('a')) return;
      resolveAndOpen(card.getAttribute('data-ingress-stock'));
    });
  }

  function interceptStockCards(){
    document.addEventListener('click', function(event){
      if(!event.target.closest) return;
      var stockCard = event.target.closest('[data-stock]');
      if(stockCard && !event.target.closest('a')){
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        resolveAndOpen(stockCard.getAttribute('data-stock'));
        return;
      }
      var codeNode = event.target.closest('[data-code]');
      if(codeNode){
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        resolveAndOpen(codeNode.getAttribute('data-code'));
      }
    }, true);
  }

  function init(){
    if(typeof window.openStockModal === 'function' && !window.__AStockOriginalOpenStockModal){
      window.__AStockOriginalOpenStockModal = window.openStockModal;
      window.openStockModal = resolveAndOpen;
    }
    if(typeof window.closeStockModal === 'function' && !window.__AStockOriginalCloseStockModal){
      window.__AStockOriginalCloseStockModal = window.closeStockModal;
      window.closeStockModal = closeModal;
    }
    enhanceIngressCards();
    interceptStockCards();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
