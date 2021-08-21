const CACHE_NAME = 'XS-FILE-CACHE'
let filesToCache = [
    '/',
    '/img/',
    '/js/*.js',
    '/css/*.css',
    '/icons/*.png',
]

// Service Worker Install (Web Resource Caching)
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => { return cache.addAll(filesToCache) })
            .catch(error => console.error(error))
    )
})