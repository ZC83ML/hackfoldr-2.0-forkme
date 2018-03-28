self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/404.html',
        '/app.js',
        '/robots.txt',
        '/js/csv.js',
        '/js/handlebars-v1.3.0.js',
        '/css/global.css',
        '/css/global.css.map'        
      ]);
    })
  );
});
