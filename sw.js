// This is a basic Service Worker for Muskan Fashion
self.addEventListener('install', (event) => {
  console.log('Muskan App Service Worker: Installed');
});

self.addEventListener('activate', (event) => {
  console.log('Muskan App Service Worker: Activated');
});

self.addEventListener('fetch', (event) => {
  // This empty fetch handler is the minimum required to make the app installable
});
