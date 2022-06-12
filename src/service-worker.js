/* eslint-disable no-restricted-globals */

const statics = self.__WB_MANIFEST;

self.addEventListener("install", function (event) {
  event.waitUntil();
  // event.waitUntil(
  //   // caches.open("ithsDashboard").then(function (cache) {
  //   //   return cache.addAll(statics.map((url) => url.url));
  //   // })
  // );
  self.skipWaiting();
});

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

self.addEventListener("fetch",(event) =>{
  if(!navigator.onLine){
    event.respondWith(
        new Response(
            '<h1> Hijacked!!</h1>',
            {headers: { 'Content-Type': 'text/html'}}
        )
    )
  }else{
    event.respondWith(fetch(event.request))
  }

})