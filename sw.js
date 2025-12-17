const CACHE_NAME = 'hab-life-v1';
const assets = ['./', './index.html']; // Ensure your filename matches

self.addEventconst CACHE_NAME = 'h-life-cache-v1';
// IMPORTANT: If your file is named H-Life_251126.html, change it here:
const assets = [
  './',
  './H-Life_251126.html', 
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});Listener('install', e => {
    e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => response || fetch(e.request))
    );
});
