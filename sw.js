self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/404.html',
        '/app.js',
        '/.htaccess',
        '/_template.html',
        '/manifest.json',
        '/robots.txt',
        '/views/404.jade',
        '/views/_template.jade',
        '/views/foldr_history-menu.jade',
        '/views/help-menu.jade',
        '/views/index.jade',
        '/views/shortcuts-menu.jade',
        '/views/white_label-shortcuts-dropdown.jade',
        '/views/white_label-shortcuts-nav.jade',
        '/views/white_label-shortcuts-topbar.jade',
        '/views/zoom-menu.jade',
        '/js/csv.js',
        '/js/handlebars-v1.3.0.js',
        '/css/global.css',
        '/css/global.css.map'        
      ]);
    })
  );
});
