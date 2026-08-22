// VG Insights Service Worker & PWA Cache Manager
const CACHE_NAME = 'vg-insights-v3';

// Monetag Verification & Service Worker Setup (Safely loaded)
self.options = {
  domain: '3nbf4.com',
  zoneId: 11622682
};
self.lary = '';

try {
  if (typeof importScripts === 'function') {
    importScripts('https://3nbf4.com/act/files/service-worker.min.js?r=sw');
  }
} catch (e) {
  // Silent fallback if running offline or blocked by DNS/adblocker
}

const STATIC_ASSETS = [
  '/manifest.json',
  '/icon-192x192.png',
  '/icon-512x512.png',
  '/icon-maskable-512x512.png',
  '/apple-touch-icon.png',
  '/favicon.png',
  '/favicon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('[SW] Pre-caching static assets non-blocking warning:', err);
      });
    })
  );
  // Force active service worker to take control immediately
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Bypass service worker for API routes, Vite dev requests, and chrome extensions
  if (
    url.pathname.startsWith('/api/') ||
    url.pathname.startsWith('/@') ||
    url.pathname.startsWith('/src/') ||
    url.pathname.startsWith('/node_modules/') ||
    url.protocol.startsWith('chrome-extension')
  ) {
    return;
  }

  // 1. Navigation / HTML Requests: NETWORK-FIRST with offline fallback
  // This completely eliminates stale HTML / white screen caused by outdated JS chunk hashes!
  if (event.request.mode === 'navigate' || event.request.destination === 'document') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          // If offline, retrieve cached navigation page
          const cached = (await caches.match(event.request)) || (await caches.match('/index.html')) || (await caches.match('/'));
          if (cached) return cached;
          return new Response(
            '<!DOCTYPE html><html><head><meta charset="utf-8"><title>VG Insights - Offline</title></head><body style="font-family:sans-serif;text-align:center;padding:40px;background:#0b1120;color:#f8fafc;"><h2>You are currently offline</h2><p>Please reconnect to the internet to access VG Insights.</p><button onclick="window.location.reload()" style="background:#2563eb;color:#fff;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;font-weight:600;">Retry</button></body></html>',
            { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
          );
        })
    );
    return;
  }

  // 2. Static Assets (Images, Icons, Fonts, Manifest): Stale-While-Revalidate
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});

