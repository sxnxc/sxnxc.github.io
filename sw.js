const Task=()=>{let e,t=new Promise(t=>e=t);return{complete:t=>e(t),join:()=>t}},ft=Task(),ot=Task(),fcn="f-0.0.202",ocn="o-0.0.202";caches.open(fcn).then(t=>ft.complete(t)),caches.open(ocn).then(t=>ot.complete(t));const forever=["manifest.json","/favicon.ico","/icon-256.png","https://cdn.jsdelivr.net/npm/zlibjs@0.3.1/bin/zlib.min.js"];self.addEventListener("install",t=>{console.log("[sw] install"),self.skipWaiting(),t.waitUntil((async()=>{let t=await ft.join();await t.addAll(forever)})())}),self.addEventListener("fetch",i=>{i.respondWith((async()=>{let t=await ft.join();var e=await t.match(i.request);if(e)return e;try{const n=await fetch(i.request);let t=await ot.join();return t.put(i.request,n.clone()),n}catch(t){return caches.match(i.request)}})())}),self.addEventListener("notificationclick",t=>{const e=t.notification;var n=t.action,{chatid:i,chanid:o,by:t}=e.data;"close"===n?(console.log("action close for notification",e.data),e.close()):"open"===n?(console.log("action open for notification",e.data),clients.openWindow(`https://hyze.io/#${o}/${i}/${t}`)):(clients.openWindow(`https://hyze.io/#${o}/${i}/${t}`),e.close())}),self.addEventListener("notificationclose",t=>{t=t.notification;console.log("closed notification",t.data)}),self.addEventListener("push",t=>{console.log(t);var{title:e,txt:n,chatid:i,chanid:o,by:a}=t.data.json();t.waitUntil(self.registration.showNotification(e,{body:n,tag:o,icon:"https://tests.peter.sh/resources/icons/4.png",vibrate:[100,50,100],data:{chatid:i,chanid:o,by:a},requireInteraction:!1,actions:[{action:"open",title:"open message"}]}))}),self.addEventListener("activate",t=>{console.log("[sw] activate"),clients.claim(),t.waitUntil((async()=>{let t=await caches.keys();return Promise.all(t.filter(t=>t!==fcn&&t!=ocn).map(t=>caches.delete(t)))})())});