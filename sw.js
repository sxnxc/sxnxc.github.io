const t=(()=>{let t,e=new Promise(e=>t=e);return{complete:e=>t(e),join:()=>e}})();let offline;const cacheName="c-0.0.229",offlineCache="o-0.0.229";caches.open(cacheName).then(e=>t.complete(e));let forever=["/","/index.html","/manifest.json","/favicon.ico","/icon-256.png","https://cdn.jsdelivr.net/npm/zlibjs@0.3.1/bin/zlib.min.js","https://cdn.jsdelivr.net/npm/1r@0.0.229/0.js","https://cdn.jsdelivr.net/npm/1r@0.0.229/0.css"];self.addEventListener("install",e=>{console.log("[sw] install"),self.skipWaiting(),e.waitUntil((async()=>{let e=await t.join();await e.addAll(forever)})())}),self.addEventListener("fetch",a=>{a.respondWith((async()=>{let e=await t.join();var n=await e.match(a.request);if(n)return n;offline=offline||await caches.open(offlineCache);try{const i=await fetch(a.request);return offline.put(a.request,i.clone()),i}catch(e){return offline.match(a.request)}})())}),self.addEventListener("notificationclick",e=>{const t=e.notification;var n=e.action,{chanid:e}=t.data;"close"===n?t.close():"open"===n?clients.openWindow(`/#${ntob(e)}`):(clients.openWindow(`/#${ntob(e)}`),t.close())}),self.addEventListener("notificationclose",e=>{e=e.notification;console.log("closed notification",e.data)}),self.addEventListener("push",e=>{console.log(e);var{title:t,txt:n,chatid:i,chanid:a,by:o}=e.data.json();e.waitUntil(self.registration.showNotification(t,{body:n,tag:a,icon:"https://tests.peter.sh/resources/icons/4.png",vibrate:[100,50,100],data:{chatid:i,chanid:a,by:o},requireInteraction:!1,actions:[{action:"open",title:"open message"}]}))}),self.addEventListener("activate",e=>{console.log("[sw] activate"),clients.claim(),e.waitUntil((async()=>{let e=await caches.keys();return Promise.all(e.filter(e=>e!==cacheName&&e!==offlineCache).map(e=>caches.delete(e)))})())});const alphabet="0VMZYpdgCGL3iKAzDHwocTt97e1hasO2mJNjExq4PvR6XyWSFbIn-5B_8fUukQlr",b2s=alphabet.split(""),s2b=new Array(123);for(let e=0;e<alphabet.length;e++)s2b[alphabet.charCodeAt(e)]=e;function ntob(e){if(e<0)return`-${ntob(-e)}`;let t=e>>>0,n=e/4294967296>>>0,i="";for(;0<n;)i=b2s[63&t]+i,t>>>=6,t|=(63&n)<<26,n>>>=6;let a="";for(;a=b2s[63&t]+a,t>>>=6,0<t;);return a+i}