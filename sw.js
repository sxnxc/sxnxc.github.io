!function(){"use strict";const e="0VMZYpdgCGL3iKAzDHwocTt97e1hasO2mJNjExq4PvR6XyWSFbIn-5B_8fUukQlr",t=e.split(""),s=new Array(123);for(let t=0;t<e.length;t++)s[e.charCodeAt(t)]=t;const n=e=>{if(e<0)return`-${n(-e)}`;let s=e>>>0,i=e/4294967296>>>0,a="";for(;i>0;)a=t[63&s]+a,s>>>=6,s|=(63&i)<<26,i>>>=6;let r="";do{r=t[63&s]+r,s>>>=6}while(s>0);return r+a};var i={ntob:n,bton:e=>{let t=0;for(let n=0;n<e.length;n++)t=64*t+s[e.charCodeAt(n)];return t}};function a(e){return new Promise((t=>setTimeout(t,Math.random()*e)))}let r,l,c=(()=>{let e,t=new Promise((t=>e=t));return{complete:t=>e(t),join:()=>t,reset:()=>t=new Promise((t=>e=t))}})();caches.open("c0.0.392").then((e=>c.complete(e)));const o=new Set(["/","/index.html","/manifest.json","/favicon.ico","https://cdn.jsdelivr.net/npm/zlibjs@0.3.1/bin/rawdeflate.min.js","https://cdn.jsdelivr.net/npm/zlibjs@0.3.1/bin/rawinflate.min.js","https://cdn.jsdelivr.net/npm/1r@0.0.392/0.js","https://cdn.jsdelivr.net/npm/1r@0.0.392/0.css"]);function d(e){return e&&!e.redirected&&200==e.status&&Number(e.headers.get("content-length"))>0&&e.headers.get("content-type").includes("image")}async function u(e,t,s=!1,n=0,i){try{let a;if(0===n)a=e;else if(n>0)a=e.replace("_360.",`_${n}.`);else if(n<0){a=e.replace("/files-tmb/","/files-pri/").replace("_360.",".");let t=a.split("/files-pri/")[1].split("/")[0].split("-")[2];if(a=a.replace("-"+t,""),i){let e=a.split("/").pop();a=a.replace(e,i)}}return s&&(a+="?"+Math.floor(10*Math.random())+1),await fetch("https://slack.us.workers.dev/?"+a,{headers:{"x-cors-headers":JSON.stringify({Authorization:"Bearer "+t})}})}catch(e){return}}self.addEventListener("install",(e=>{self.skipWaiting(),e.waitUntil((async()=>{let e=await c.join();await e.addAll(o)})())})),self.addEventListener("fetch",(e=>{e.respondWith((async()=>{if(await c.join(),!(e.request.url.includes("dist/0.js")||e.request.url.includes("dist/s.js")||e.request.url.includes("style.css")||e.request.url.includes("livereload"))){let t=await caches.match(e.request);if(t&&200==t.status&&t.body)return t}l||(l=await caches.open("o0.0.392"));try{if(r&&"GET"===e.request.method&&e.request.url.startsWith("https://files.slack.com")){const t=e.request.url.indexOf("?");let s=e.request.url.substr(t+1).split("&"),n=s[0],i=s[1];const c=e.request.url.slice(0,t),o=r[n].token;let h=await u(c,o);for(let e=0;e<3&&!d(h);e++)await a(100),h=await u(c,o,!0);for(let e=0;e<3&&!d(h);e++)await a(100),h=await u(c,o,e>0,-1,i);return d(h)||(await a(100),h=await u(c,o,!0,480)),d(h)||(await a(100),h=await u(c,o,!0,720)),d(h)&&l.put(e.request,h.clone()),h}const t=await fetch(e.request,{referrerPolicy:"no-referrer"});return"GET"===e.request.method&&200==t.status&&t.body&&l.put(e.request,t.clone()),t}catch(t){return l.match(e.request)}})())})),self.addEventListener("notificationclick",(e=>{const t=e.notification,s=e.action,{chanid:n}=t.data;"close"===s?t.close():"open"===s?clients.openWindow(`/#${i.ntob(n)}`):(clients.openWindow(`/#${i.ntob(n)}`),t.close())})),self.addEventListener("message",(({data:e})=>{r=e})),self.addEventListener("push",(e=>{const{title:t,txt:s,chatid:n,chanid:i,by:a}=e.data.json();e.waitUntil(self.registration.showNotification(t,{body:s,tag:i,icon:"/icon-256.png",vibrate:[100,50,100],data:{chatid:n,chanid:i,by:a},requireInteraction:!1,actions:[{action:"open",title:"open message"}]}))})),self.addEventListener("activate",(async e=>{clients.claim(),e.waitUntil((async()=>{let e=await caches.keys();return Promise.all(e.filter((e=>"c0.0.392"!==e&&"o0.0.392"!==e)).map((e=>caches.delete(e))))})()),clients.matchAll().then((e=>{e.forEach((e=>e.postMessage({reload:!0})))}))}))}();
