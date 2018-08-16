this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        'index.html'
      ]);
    })
  );
});


this.addEventListener('fetch', function(event) {
  console.log('fetch');
});