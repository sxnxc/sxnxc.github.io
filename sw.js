const t=(()=>{let t,e=new Promise(e=>t=e);return{complete:e=>t(e),join:()=>e}})();let teams,offline;const cacheName="c-0.0.363",offlineCache="o-0.0.363";caches.open(cacheName).then(e=>t.complete(e));let forever=["/","/index.html","/manifest.json","/favicon.ico","https://cdn.jsdelivr.net/npm/zlibjs@0.3.1/bin/rawdeflate.min.js","https://cdn.jsdelivr.net/npm/zlibjs@0.3.1/bin/rawinflate.min.js","https://cdn.jsdelivr.net/npm/1r@0.0.363/0.js","https://cdn.jsdelivr.net/npm/1r@0.0.363/0.css"];function isgood(e){return e&&200==e.status&&0<e.headers.get("content-length")&&e.headers.get("content-type").includes("image")}function sleeprd(t){return new Promise(e=>setTimeout(e,Math.random()*t))}async function fetchimage(t,a,s=!1,i=0,n=void 0){try{let e;var o,r;return 0===i?e=t:0<i?e=t.replace("_360.",`_${i}.`):i<0&&(e=t.replace("/files-tmb/","/files-pri/").replace("_360.","."),o=e.split("/files-pri/")[1].split("/")[0].split("-")[2],e=e.replace("-"+o,""),n&&(r=e.split("/").pop(),e=e.replace(r,n))),s&&(e+="?"+Math.floor(10*Math.random())+1),await fetch("https://slack.us.workers.dev/?"+e,{headers:{"x-cors-headers":JSON.stringify({Authorization:"Bearer "+a})}})}catch(e){return}}self.addEventListener("install",e=>{console.log("[sw] install"),self.skipWaiting(),e.waitUntil((async()=>{let e=await t.join();await e.addAll(forever)})())}),self.addEventListener("fetch",l=>{l.respondWith((async()=>{if(await t.join(),!l.request.url.includes("dist/0.js")&&!l.request.url.includes("style.css")&&!l.request.url.includes("livereload")){var e=await caches.match(l.request);if(e&&200==e.status&&e.body)return e}offline=offline||await caches.open(offlineCache);try{if(teams&&"GET"===l.request.method&&l.request.url.startsWith("https://files.slack.com")){var a=l.request.url.indexOf("?");let e=l.request.url.substr(a+1);e=e.split("&");var s=e[0],i=e[1],n=l.request.url.slice(0,a),o=teams[s].token;let t=await fetchimage(n,o);for(let e=0;e<3&&!isgood(t);e++)await sleeprd(100),t=await fetchimage(n,o,!0);for(let e=0;e<3&&!isgood(t);e++)await sleeprd(5e3),t=await fetchimage(n,o,0<e,-1,i);return isgood(t)||(await sleeprd(100),t=await fetchimage(n,o,!0,480)),isgood(t)||(await sleeprd(100),t=await fetchimage(n,o,!0,720)),isgood(t)&&offline.put(l.request,t.clone()),t}const r=await fetch(l.request,{referrerPolicy:"no-referrer"});return"GET"===l.request.method&&200==r.status&&r.body&&offline.put(l.request,r.clone()),r}catch(e){return offline.match(l.request)}})())}),self.addEventListener("notificationclick",e=>{const t=e.notification;var a=e.action,e=t.data["chanid"];"close"===a?t.close():"open"===a?clients.openWindow("/#"+ntob(e)):(clients.openWindow("/#"+ntob(e)),t.close())}),self.addEventListener("message",e=>{teams=e.data,console.log(teams)}),self.addEventListener("notificationclose",e=>{e=e.notification;console.log("closed notification",e.data)}),self.addEventListener("push",e=>{console.log(e);var{title:t,txt:a,chatid:s,chanid:i,by:n}=e.data.json();e.waitUntil(self.registration.showNotification(t,{body:a,tag:i,icon:"/icon-256.png",vibrate:[100,50,100],data:{chatid:s,chanid:i,by:n},requireInteraction:!1,actions:[{action:"open",title:"open message"}]}))}),self.addEventListener("activate",async e=>{console.log("[sw] activate"),clients.claim(),e.waitUntil((async()=>{let e=await caches.keys();return Promise.all(e.filter(e=>e!==cacheName&&e!==offlineCache).map(e=>caches.delete(e)))})()),clients.matchAll().then(e=>{e.forEach(e=>e.postMessage({reload:!0}))})});const alphabet="0VMZYpdgCGL3iKAzDHwocTt97e1hasO2mJNjExq4PvR6XyWSFbIn-5B_8fUukQlr",b2s=alphabet.split(""),s2b=new Array(123);for(let e=0;e<alphabet.length;e++)s2b[alphabet.charCodeAt(e)]=e;function ntob(e){if(e<0)return"-"+ntob(-e);let t=e>>>0,a=e/4294967296>>>0,s="";for(;0<a;)s=b2s[63&t]+s,t>>>=6,t|=(63&a)<<26,a>>>=6;let i="";for(;i=b2s[63&t]+i,t>>>=6,0<t;);return i+s}