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
        '/css/global.css.map',
        '/assets/jquery-ui/1.11.0.custom/index.html',
        '/assets/jquery-ui/1.11.0.custom/jquery-ui.css',
        '/assets/jquery-ui/1.11.0.custom/jquery-ui.js',
        '/assets/jquery-ui/1.11.0.custom/jquery-ui.min.css',
        '/assets/jquery-ui/1.11.0.custom/jquery-ui.min.js',
        '/assets/jquery-ui/1.11.0.custom/jquery-ui.structure.css',
        '/assets/jquery-ui/1.11.0.custom/jquery-ui.structure.min.css',
        '/assets/jquery-ui/1.11.0.custom/external/jquery/jquery.js',
        '/assets/jquery/jquery-2.1.1.min.js',
        '/assets/jquery/1.10.2/jquery-1.10.2.min.map',
        '/assets/jquery/1.10.2/jquery.js',
        '/assets/jquery/1.10.2/jquery.min.js',
        '/assets/semantic-ui/0.19.0/css/semantic.css',
        '/assets/semantic-ui/0.19.0/css/semantic.min.css',
        '/assets/semantic-ui/0.19.0/fonts/basic.icons.eot',
        '/assets/semantic-ui/0.19.0/fonts/basic.icons.svg',
        '/assets/semantic-ui/0.19.0/fonts/basic.icons.ttf',
        '/assets/semantic-ui/0.19.0/fonts/basic.icons.woff',
        '/assets/semantic-ui/0.19.0/fonts/icons.eot',
        '/assets/semantic-ui/0.19.0/fonts/icons.otf',
        '/assets/semantic-ui/0.19.0/fonts/icons.svg',
        '/assets/semantic-ui/0.19.0/fonts/icons.ttf',
        '/assets/semantic-ui/0.19.0/fonts/icons.woff',
        '/assets/semantic-ui/0.19.0/images/loader-large-inverted.gif',
        '/assets/semantic-ui/0.19.0/images/loader-large.gif',
        '/assets/semantic-ui/0.19.0/images/loader-medium.gif',
        '/assets/semantic-ui/0.19.0/images/loader-mini-inverted.gif',
        '/assets/semantic-ui/0.19.0/images/loader-mini.gif',
        '/assets/semantic-ui/0.19.0/images/loader-small-inverted.gif',
        '/assets/semantic-ui/0.19.0/images/loader-small.gif',
        '/assets/semantic-ui/0.19.0/javascript/semantic.js',
        '/assets/tabletop/tabletop.js'        
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();
        
        caches.open('v1').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/sw-test/gallery/myLittleVader.jpg');
      });
    }
  }));
});
