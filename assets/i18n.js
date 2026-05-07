(function () {
  var LANG_KEY = 'dt_lang';
  var THEME_KEY = 'dt_theme';
  var translations = {};
  var currentLang = 'en';

  function getBrowserLang() {
    var lang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    return lang.startsWith('sv') ? 'sv' : 'en';
  }

  function getBrowserTheme() {
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }

  // Replaces element content with trusted developer-authored HTML from translations.json.
  // Content is static, repo-controlled, never user-supplied.
  function setTrustedHTML(el, html) {
    while (el.firstChild) el.removeChild(el.firstChild);
    var range = document.createRange();
    range.selectNodeContents(el);
    var fragment = range.createContextualFragment(html);
    el.appendChild(fragment);
  }

  function applyTranslations(lang) {
    var t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) setTrustedHTML(el, t[key]);
    });

    document.documentElement.lang = lang;

    var langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.textContent = lang === 'en' ? 'SV' : 'EN';

    var pageKey = window.__pageKey;
    if (pageKey && t['page_title_' + pageKey]) {
      document.title = t['page_title_' + pageKey];
    }

    currentLang = lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  function toggleLang() {
    applyTranslations(currentLang === 'en' ? 'sv' : 'en');
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var icon = document.querySelector('.theme-icon');
    if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  function init() {
    var savedTheme;
    try { savedTheme = localStorage.getItem(THEME_KEY); } catch (e) {}
    applyTheme(savedTheme || getBrowserTheme());

    var langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.addEventListener('click', toggleLang);

    var themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    var privacyLangLink = document.getElementById('privacy-lang-link');
    if (privacyLangLink) {
      privacyLangLink.addEventListener('click', function (e) {
        e.preventDefault();
        toggleLang();
      });
    }

    var urlLang, savedLang;
    try {
      var urlParams = new URLSearchParams(window.location.search);
      urlLang = urlParams.get('lang');
      savedLang = localStorage.getItem(LANG_KEY);
    } catch (e) {}

    var lang = (urlLang && translations[urlLang]) ? urlLang
             : savedLang ? savedLang
             : getBrowserLang();
    applyTranslations(lang);

    var yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = '©' + new Date().getFullYear();
  }

  var basePath = (function () {
    var scripts = document.querySelectorAll('script[src]');
    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].src.indexOf('i18n.js') !== -1) {
        return scripts[i].src.replace('assets/i18n.js', '');
      }
    }
    return '';
  })();

  fetch(basePath + 'locales/translations.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      translations = data;
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
      } else {
        init();
      }
    })
    .catch(function (err) { console.error('i18n load failed:', err); });
})();
