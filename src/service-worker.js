/* eslint-disable no-restricted-globals */

const statics = self.__WB_MANIFEST;
const CACHE_NAME = "ithsDashboard";
const URLS_TO_CACHE = [
  "/",
  statics.map((url) => url.url),
  "https://api.openweathermap.org/data/2.5/weather?q=liljeholmen&appid=f5d83d5afb5aa05f7dfcec59980e030f&&units=metric",
  "https://api.resrobot.se/v2.1/departureBoard?id=740004046&duration=10&format=json&accessId=59519168-7120-412f-b818-6ae87a631fd1",
  "/iths-logo.png",
  "/manifest.json",
  "/offline.html"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    // Try the network
    fetch(event.request)
      .then(function (response) {
        return caches.open(CACHE_NAME).then(function (cache) {
          // Put in cache if succeeds
          cache.put(event.request.url, response.clone());
          return response;
        });
      })
      .catch(function (err) {
        // Fallback to cache
        return caches.match(event.request).then(function (res) {
          if (res === undefined) {
            // get and return the offline page
            console.log("fetching offline page")
            return caches.match("/offline.html")
          }
          return res;
        });
      })
  );
});

