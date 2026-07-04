(function(){
  const map = window.CPO_NODE_STOCK_MAP;
  if (!map || !Array.isArray(map.nodes) || !Array.isArray(map.companies)) return;

  const byId = new Map(map.nodes.map(node => [node.id, node]));
  const seenCompanies = new Set();
  function companiesFor(node) {
    seenCompanies.clear();
    return map.companies
      .filter(company => node.routes.includes(company.route))
      .filter(company => {
        const key = company.code + ':' + company.route;
        if (seenCompanies.has(key)) return false;
        seenCompanies.add(key);
        return true;
      })
      .sort((a, b) => (a.rank || 999) - (b.rank || 999));
  }

  function makeDrawer() {
    const drawer = document.createElement('aside');
    drawer.className = 'cpo-stock-drawer';
    drawer.id = 'cpoStockDrawer';
    drawer.setAttribute('aria-hidden', 'true');
    drawer.innerHTML = '<div class="cpo-stock-drawer__panel"><button class="cpo-stock-drawer__close" type="button" aria-label="关闭">×</button><div id="cpoStockDrawerBody"></div></div>';
    document.body.appendChild(drawer);
    drawer.addEventListener('click', event => {
      if (event.target === drawer || event.target.classList.contains('cpo-stock-drawer__close')) closeDrawer();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeDrawer();
    });
    return drawer;
  }

  function closeDrawer() {
    const drawer = document.getElementById('cpoStockDrawer');
    if (!drawer) return;
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
  }

  function reportAction(company) {
    if (company.reportPath) {
      return '<a class="cpo-stock-card__report" href="' + company.reportPath + '" target="_blank" rel="noopener">打开公司报告</a>';
    }
    return '<span class="cpo-stock-card__pending">公司报告暂未生成</span>';
  }

  function stockCard(company) {
    return '<article class="cpo-stock-card">' +
      '<div class="cpo-stock-card__top"><b>' + company.name + '</b><span>' + company.code + '</span></div>' +
      '<div class="cpo-stock-card__meta"><span>#' + company.rank + '</span><span>' + company.route + '</span><span>' + company.level + '</span></div>' +
      '<p><b>产业节点：</b>' + company.node + '</p>' +
      '<p><b>初步角色：</b>' + company.role + '</p>' +
      '<div class="cpo-stock-card__actions">' + reportAction(company) + '</div>' +
    '</article>';
  }

  function openDrawer(nodeId) {
    const node = byId.get(nodeId);
    if (!node) return;
    const drawer = document.getElementById('cpoStockDrawer') || makeDrawer();
    const body = document.getElementById('cpoStockDrawerBody');
    const companies = companiesFor(node);
    body.innerHTML =
      '<div class="cpo-stock-drawer__eyebrow">产业链节点公司映射</div>' +
      '<h2>' + node.title + '</h2>' +
      '<p class="cpo-stock-drawer__note">' + node.note + '</p>' +
      '<div class="cpo-stock-drawer__chips">' + node.routes.map(route => '<span>' + route + '</span>').join('') + '</div>' +
      '<div class="cpo-stock-drawer__summary"><b>' + companies.length + '</b><span>相关样本公司</span></div>' +
      '<div class="cpo-stock-drawer__list">' + (companies.map(stockCard).join('') || '<p class="cpo-stock-drawer__note">当前节点暂无公司池样本。</p>') + '</div>' +
      '<div class="cpo-stock-drawer__footer"><a href="./CPO公司池观察样本排序表.html">查看 CPO 公司池全表</a><span>' + map.note + '</span></div>';
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
  }

  function matchNode(text) {
    const clean = String(text || '').replace(/\s+/g, '');
    let best = null;
    for (const node of map.nodes) {
      for (const alias of node.aliases || []) {
        const a = String(alias).replace(/\s+/g, '');
        if (a && (clean.includes(a) || a.includes(clean))) {
          if (!best || a.length > best.aliasLength) best = { id: node.id, aliasLength: a.length };
        }
      }
    }
    return best && best.id;
  }

  function markElement(el, nodeId, label) {
    if (!nodeId || el.dataset.cpoNodeId) return;
    el.dataset.cpoNodeId = nodeId;
    el.classList.add('cpo-node-clickable');
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.setAttribute('title', '查看相关公司');
    const mark = document.createElement('span');
    mark.className = 'cpo-node-stock-mark';
    mark.textContent = label || '看公司';
    const markHost = el.tagName === 'TR' ? (el.querySelector('td:nth-child(2)') || el.querySelector('td') || el) : el;
    markHost.appendChild(mark);
    const handler = event => {
      event.stopPropagation();
      openDrawer(nodeId);
    };
    el.addEventListener('click', handler);
    el.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openDrawer(nodeId);
      }
    });
  }

  function annotatePage() {
    document.querySelectorAll('.node').forEach(nodeEl => {
      const title = nodeEl.querySelector('b')?.textContent || nodeEl.textContent;
      markElement(nodeEl, matchNode(title), '公司');
    });
    document.querySelectorAll('.stage').forEach(stageEl => {
      const title = stageEl.querySelector('strong')?.textContent || stageEl.textContent;
      markElement(stageEl, matchNode(title), '相关公司');
    });
    document.querySelectorAll('#bottleneck tbody tr, #market .step').forEach(row => {
      markElement(row, matchNode(row.textContent), '公司');
    });
    const sidebox = document.querySelector('.sidebox');
    if (sidebox) {
      sidebox.textContent = '点击图中的高亮环节，可以查看对应公司池样本，并从公司卡片进入个股报告。';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', annotatePage);
  } else {
    annotatePage();
  }
})();
