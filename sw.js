self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('calc-cache').then(cache =>
      cache.addAll(['./', './index.html', './css.css', './js.js', './unnamed (2).png'])

    )
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});