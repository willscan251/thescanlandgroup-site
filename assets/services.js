/* Services page: tabs for service areas.
   Without JavaScript, every section stays visible and the tab bar works as jump links. */
(function () {
  var bar = document.querySelector('.service-jump');
  if (!bar) return;

  var tabs = Array.prototype.slice.call(bar.querySelectorAll('a[href^="#"]'));
  var panels = tabs.map(function (t) { return document.getElementById(t.getAttribute('href').slice(1)); });
  var ids = panels.map(function (p) { return p.id; });

  document.documentElement.classList.add('svc-tabs-on');
  bar.setAttribute('role', 'tablist');

  tabs.forEach(function (tab, i) {
    var panel = panels[i];
    tab.setAttribute('role', 'tab');
    tab.id = 'tab-' + panel.id;
    tab.setAttribute('aria-controls', panel.id);
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tab.id);
    panel.tabIndex = -1;

    tab.addEventListener('click', function (e) {
      e.preventDefault();
      select(panel.id, { hash: true });
    });

    tab.addEventListener('keydown', function (e) {
      var next = null;
      if (e.key === 'ArrowRight') next = (i + 1) % tabs.length;
      if (e.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
      if (e.key === 'Home') next = 0;
      if (e.key === 'End') next = tabs.length - 1;
      if (next !== null) {
        e.preventDefault();
        select(ids[next], { hash: true });
        tabs[next].focus();
      }
    });
  });

  function select(id, opts) {
    opts = opts || {};
    var index = ids.indexOf(id);
    if (index === -1) return;
    tabs.forEach(function (tab, i) {
      var on = i === index;
      tab.setAttribute('aria-selected', on ? 'true' : 'false');
      tab.tabIndex = on ? 0 : -1;
      tab.classList.toggle('is-active', on);
      panels[i].hidden = !on;
      panels[i].classList.remove('is-entering');
    });
    void panels[index].offsetWidth; // restart the fade-in
    panels[index].classList.add('is-entering');
    if (opts.hash && history.replaceState) history.replaceState(null, '', '#' + id);

    // Keep the active tab visible when the tab bar scrolls sideways on phones
    var t = tabs[index];
    bar.scrollLeft = t.offsetLeft - (bar.clientWidth - t.offsetWidth) / 2;

    if (opts.scroll) {
      var header = document.querySelector('.navbar');
      var offset = (header ? header.offsetHeight : 0) + bar.offsetHeight + 16;
      var top = panels[index].getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  }

  // Open the tab named in the URL (for example /services#technology), otherwise the first one.
  function fromHash(scroll) {
    var id = location.hash.slice(1);
    if (ids.indexOf(id) !== -1) select(id, { scroll: scroll });
    else select(ids[0]);
  }
  fromHash(true);
  window.addEventListener('hashchange', function () { fromHash(true); });


})();
