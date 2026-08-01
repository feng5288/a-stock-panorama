(function(){
  const link=document.querySelector('a[href="market-radar.html"]');
  if(!link)return;
  link.target='_blank';
  link.rel='noopener noreferrer';
  link.title='在新窗口打开市场重大事件雷达';
  link.setAttribute('aria-label','市场重大事件雷达（在新窗口打开）');
})();
