self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('v1').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/music.html',
       '/now.html',
       '/reading.html',
       '/thoughts.html',
       '/work.html',
       '/css/normalize.min.css',
       '/css/main.css'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});