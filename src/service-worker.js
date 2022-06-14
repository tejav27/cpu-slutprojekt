/* eslint-disable no-restricted-globals */

const statics = self.__WB_MANIFEST;
const CACHE_NAME = "ithsDashboard";

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(statics.map((url) => url.url));
      cache.add("https://api.openweathermap.org/data/2.5/weather?q=liljeholmen&appid=f5d83d5afb5aa05f7dfcec59980e030f&&units=metric")
      cache.add("https://api.resrobot.se/v2.1/departureBoard?id=740004046&duration=10&format=json&accessId=59519168-7120-412f-b818-6ae87a631fd1")
      cache.add("/favicon.ico")
      cache.add("/logo192.png")
      return cache.add("/manifest.json");
    })
  );
  self.skipWaiting();
});

// self.addEventListener("activate", (event) => {
//   console.log("service-worker now ready to handle fetches");
//   event.waitUntil(caches.open(CACHE_NAME).then(() => self.clients.claim()));
// });

// self.addEventListener("fetch", (event) => {
//   event.respondWith(fetch(event.request))
//   // if (!navigator.onLine) {
//   //   const markup = "<h1>Seems you are offline!.</h1>";
//   //   const headers = { "Content-Type": "text/html" };
//   //   const offlineResponse = new Response(markup, { headers });
//   //   event.respondWith(
//   //     caches.match(event.request).then((response) => {
//   //       console.log("cache response ::",response)
//   //       if (response) {
//   //         return response;
//   //       }
//   //     })
//   //     );
//   //     return offlineResponse;
//   // } else {
//   //   event.respondWith(fetch(event.request));
//   // }
// });

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        console.log("Found in cache");
        console.log(event.request);
        console.log(response);
        return response;
      }
      console.log("Not found in cache");
      console.log(event.request);
      return fetch(event.request);
    })
  );
});

// self.addEventListener('fetch', (event) => {
//     event.respondWith(
//         caches.match(event.request)
//             .then(() => {
//                 return fetch(event.request)
//                     .catch(() => caches.match('offline.html'))
//             })
//     )
// });
