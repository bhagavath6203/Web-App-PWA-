const CACHE_NAME = 'pwa-resume-cache-v1';
const assetsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js'
];

// Install Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(assetsToCache);
        })
    );
});

// Activate Service Worker
self.addEventListener('activate', event => {
    console.log('Service worker activated');
});

// Fetch resources and serve from cache
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
