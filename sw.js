const t=(()=>{let t,e=new Promise(e=>t=e);return{complete:e=>t(e),join:()=>e}})();let offline;const cacheName="c-vv",offlineCache="o-vv";caches.open(cacheName).then(e=>t.complete(e));let forever=["/","/index.html","/manifest.json","/favicon.ico","/icon-256.png","https://cdn.jsdelivr.net/npm/zlibjs@0.3.1/bin/zlib.min.js"];self.addEventListener("install",e=>{console.log("[sw] install"),self.skipWaiting(),e.waitUntil((async()=>{let e=await t.join();await e.addAll(forever)})())}),self.addEventListener("fetch",o=>{o.respondWith((async()=>{let e=await t.join();var i=await e.match(o.request);if(i)return i;offline=offline||await caches.open(offlineCache);try{const n=await fetch(o.request);return offline.put(o.request,n.clone()),n}catch(e){return offline.match(o.request)}})())}),self.addEventListener("notificationclick",e=>{const t=e.notification;var i=e.action,{chatid:n,chanid:o,by:e}=t.data;"close"===i?(console.log("action close for notification",t.data),t.close()):"open"===i?(console.log("action open for notification",t.data),clients.openWindow(`https://hyze.io/#${o}/${n}/${e}`)):(clients.openWindow(`https://hyze.io/#${o}/${n}/${e}`),t.close())}),self.addEventListener("notificationclose",e=>{e=e.notification;console.log("closed notification",e.data)}),self.addEventListener("push",e=>{console.log(e);var{title:t,txt:i,chatid:n,chanid:o,by:a}=e.data.json();e.waitUntil(self.registration.showNotification(t,{body:i,tag:o,icon:"https://tests.peter.sh/resources/icons/4.png",vibrate:[100,50,100],data:{chatid:n,chanid:o,by:a},requireInteraction:!1,actions:[{action:"open",title:"open message"}]}))}),self.addEventListener("activate",e=>{console.log("[sw] activate"),clients.claim(),e.waitUntil((async()=>{let e=await caches.keys();return Promise.all(e.filter(e=>e!==cacheName&&e!==offlineCache).map(e=>caches.delete(e)))})())});