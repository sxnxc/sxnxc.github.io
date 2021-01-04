!function(){"use strict";const e=[];function t(t){let n={};return function(){const i=e.slice.call(arguments),o=i.map((e=>{if(a(e)||Array.isArray(e)){let t={};for(let n in e)t[n]=r(e[n]);return t}return r(e)})),s=JSON.stringify(o);let l=n[s];return void 0===l&&(l=t.apply(this,i),l&&11===l.nodeType&&(l=e.slice.call(l.childNodes)),n[s]=l),l}}let n=0;function r(e){return"function"==typeof e||e instanceof Node?(e.$m||(e.$m=++n),{$m:e.$m}):e}function a(e){if("object"!=typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var s,l,c=o((function(e,t){function n(e){var t=e>>3;return e%8!=0&&t++,t}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){void 0===e&&(e=0);var r=null==t?void 0:t.grow;this.grow=r&&isFinite(r)&&n(r)||r||0,this.buffer="number"==typeof e?new Uint8Array(n(e)):e}return e.prototype.get=function(e){var t=e>>3;return t<this.buffer.length&&!!(this.buffer[t]&128>>e%8)},e.prototype.set=function(e,t){void 0===t&&(t=!0);var n=e>>3;if(t){if(this.buffer.length<n+1){var r=Math.max(n+1,Math.min(2*this.buffer.length,this.grow));if(r<=this.grow){var a=new Uint8Array(r);a.set(this.buffer),this.buffer=a}}this.buffer[n]|=128>>e%8}else n<this.buffer.length&&(this.buffer[n]&=~(128>>e%8))},e.prototype.forEach=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=8*this.buffer.length);for(var r=t,a=r>>3,i=128>>r%8,o=this.buffer[a];r<n;r++)e(!!(o&i),r),i=1===i?(o=this.buffer[++a],128):i>>1},e}();t.default=r}(l={path:s,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&l.path)}},l.exports),l.exports));let u,d=[];function f(e){let t=u,n=()=>{};u=n,m(n);let r=e((()=>{p(n),u=void 0}));return u=t,r}function h(e){function t(n){if(0===arguments.length)return u&&!t.__o.has(u)&&(t.__o.add(u),u.u.push(t)),e;e=n;let r=u;return u=void 0,t.o=new Set(t.__o),t.o.forEach((e=>e.i=!1)),t.o.forEach((e=>{e.i||e()})),u=r,e}return t.$o=1,t.__o=new Set,t.t=d,t}function p(e){e.__c.forEach(p),e.u.forEach((t=>{t.__o.delete(e),t.o&&t.o.delete(e)})),e.l.forEach((e=>e())),m(e)}function m(e){e.u=[],e.__c=[],e.l=[]}const w=(e,t)=>e.reduce(((e,t)=>(e.set(t.id,t),e)),t),y=()=>window.scrollTo(0,document.body.scrollHeight),g=t((e=>t(((t,n)=>f((()=>e(t,n))))))),v=e=>(t,...n)=>()=>g(e())(t,n),b=e=>{e.length||e.byteLength},C=(e,t)=>{let n=0,r=0;for(;n<e.length;)r>=t.length&&(r=0),e.set([e[n]^t[r]],n),n++,r++},E=(e,t)=>(C(e,t),L(e,t)),S=e=>{let{a:t,k:n}=A(e);return C(t,n),{a:t,k:n}},A=e=>{let t=e[0],n=e.subarray(1,t+1);return{a:e.subarray(t+1),k:n}},L=(e,t)=>{let n=new Uint8Array(1+t.length+e.length);return n[0]=t.length,n.set(t,1),n.set(e,1+t.length),n},T=(e,t)=>(e=Math.ceil(e),Math.floor(Math.random()*(Math.floor(t)-e)+e)),U=(e,t)=>{let n=new Uint8Array(e.length+t.length);return n.set(e,0),n.set(t,e.length),n},N=(e,t=64,n=8)=>E(e,crypto.getRandomValues(new Uint8Array(T(n,t)))),k=()=>{let e,t=new Promise((t=>e=t));return{complete:t=>e(t),join:()=>t}},x=navigator.vendor.includes("Apple")?{transaction:()=>{}}:openDatabase("sonic","1.0","Test DB",1073741824);function O(e,t){}function I(e,t){}x.transaction((e=>{e.executeSql("CREATE TABLE IF NOT EXISTS users (\n            id integer NOT NULL PRIMARY KEY,\n            name varchar(50) NOT NULL\n        )",[],O,I),e.executeSql("CREATE TABLE IF NOT EXISTS userchans (\n            id integer NOT NULL PRIMARY KEY\n        )",[],O,I),e.executeSql("CREATE TABLE IF NOT EXISTS chans (\n            id integer NOT NULL PRIMARY KEY,\n            name varchar(50) NOT NULL,\n            fullname varchar(150) NOT NULL,\n            mom integer NOT NULL,\n            by integer NOT NULL,\n            dir text NOT NULL,\n            timestamp datetime NOT NULL DEFAULT CURRENT_TIMESTAMP\n        )",[],O,I),e.executeSql("CREATE TABLE IF NOT EXISTS chats (\n            id integer NOT NULL PRIMARY KEY,\n            txt text NOT NULL,\n            by integer NOT NULL,\n            re integer NOT NULL,\n            nor integer NOT NULL DEFAULT '0',\n            chanid integer NOT NULL,\n            dir text NOT NULL,\n            timestamp datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,\n            star boolean\n        )",[],O,I),e.executeSql("CREATE TABLE IF NOT EXISTS chanchats (\n            chanid integer NOT NULL,\n            chatid integer NOT NULL,\n            PRIMARY KEY (chanid, chatid)\n        )",[],O,I)})),window._qd=()=>{x.transaction((e=>{e.executeSql("SELECT * FROM sqlite_master WHERE type = 'table' AND name NOT LIKE '\\_%' escape '\\'",[],((e,t)=>{var n,r,a,i;function o(){--a<0&&x.changeVersion(x.version,"",console.log,console.error)}for(n=t.rows,a=r=n.length;r--;)i=n.item(r).name,e.executeSql("DROP TABLE "+i,[],o,console.error);o()}),console.error)}))},window._q=(e,t=[])=>{x.transaction((n=>{n.executeSql(e,t,((e,t)=>{}),console.error)}))};const j=k(),R="sonic",_=["session","chats","users","chans","ranges","chanchats"];let D;window._d=()=>P(R);let M=indexedDB.open(R,1);function P(e){var t=window.indexedDB.deleteDatabase(e);t.onerror=e=>{},t.onsuccess=e=>{}}M.onsuccess=e=>{D=M.result,function(e){let t=e.objectStoreNames;for(const e of _)if(!t.contains(e))return void P(R)}(D),j.complete(D),M.open?M.open():M.open=!0},M.onerror=e=>{j.complete()},M.onblocked=e=>{},M.onupgradeneeded=e=>{D=M.result;let t=D.objectStoreNames;if(!t.contains("session")){D.createObjectStore("session")}if(!t.contains("ranges")){D.createObjectStore("ranges")}if(!t.contains("chats")){let e=D.createObjectStore("chats",{keyPath:"id"});e.createIndex("chanid",["chanid","id"],{unique:!1}),e.createIndex("re",["re","id"],{unique:!1}),e.createIndex("by",["by","id"],{unique:!1})}if(!t.contains("users")){D.createObjectStore("users",{keyPath:"id"})}if(!t.contains("chans")){D.createObjectStore("chans",{keyPath:"id"}).createIndex("mom",["mom","id"],{unique:!1})}if(!t.contains("chanchats")){D.createObjectStore("chanchats",{keyPath:["chanid","chatid"]})}for(const e of _)D.objectStoreNames.contains(e)||D.createObjectStore(e)};const B=async(e,t)=>{let n=await j.join();n&&(b(t),n.transaction(["session"],"readwrite").objectStore("session").put(t,e))},q=async(e,t)=>{let n=await j.join();if(!n)return;let r=n.transaction([e],"readwrite").objectStore(e);t.forEach((e=>{"string"==typeof e.timestamp&&(e.timestamp=new Date(e.timestamp)),r.add(e)})),x.transaction((n=>{t.forEach((t=>{let r=Object.keys(t),a=`INSERT OR REPLACE INTO ${e} (${r.join(",")}) VALUES (${Array(r.length).fill("?").join(",")})`;n.executeSql(a,Object.values(t).map((e=>"function"==typeof e?e():e)),O,I)}))}))},K=async(e,t)=>{let n=await j.join();n&&(n.transaction([e],"readwrite").objectStore(e).add(t),x.transaction((n=>{let r=Object.keys(t),a=`INSERT OR REPLACE INTO ${e} (${r.join(",")}) VALUES (${Array(r.length).fill("?").join(",")})`;n.executeSql(a,Object.values(t).map((e=>"function"==typeof e?e():e)),O,I)})))},H=async(e,t)=>{let n=await j.join();if(!n)return{value:[],missed:t};if(0===t.length)return{value:[],missed:[]};performance.now();let r=[],a=new Set,i=n.transaction([e],"readonly").objectStore(e),o=0;return new Promise((e=>{t.forEach((n=>{let s=i.get(n);s.onsuccess=i=>{if(s.result?r.push(s.result):a.add(n),++o===t.length){let t={value:r,missed:Array.from(a)};e(t)}}}))}))},$=async(e,t,n,r,a,i,o)=>{let s=await j.join();if(!s)return;performance.now();let l=[],c=s.transaction([e],"readonly"),[u,d]=i?i(c.objectStore(e),t,r,a):[c.objectStore(e),null],f=0;return new Promise((e=>{u.openCursor(d,o).onsuccess=t=>{var r=t.target.result;if(r){if(l.push(r.value),++f===n)return e(l);r.continue()}else e(l)}}))},F=(e,t,n,r)=>{let a=n?IDBKeyRange.upperBound(n,r):null;if(!t)return[e,a];let i=n||99999;switch(t.tag){case"Chanid":a=IDBKeyRange.bound([t.value],[t.value,i],!1,r)}return[e,a]},Y=(e,t,n,r)=>{let a=n?IDBKeyRange.upperBound(n,r):null,i=n||99999;switch(t.tag){case"Chanid":e=e.index("mom"),a=IDBKeyRange.bound([t.value],[t.value,i],!1,r)}return[e,a]},J=async(e,t,n=30,r=!0)=>(await $("chanchats",e,n,t,r,F,"prev")).map((e=>e.chatid)),V=async(e,t,n)=>{let r=await j.join();if(!r)return;let a=r.transaction(["ranges"],"readwrite").objectStore("ranges"),i=a.get(e);i.onsuccess=async r=>{if(i.result){if(n)return a.put([i.result[0],i.result[1],n],e);t[0]<i.result[0]&&(t[0]=i.result[0]),t[1]>i.result[0]&&(t[1]=i.result[1])}a.put(t,e)}},z=e=>X(e,"ranges"),G=e=>X(e,"session"),X=async(e,t)=>{let n=await j.join();if(!n)return;let r=n.transaction([t],"readonly").objectStore(t);return new Promise((t=>{let n=r.get(e);n.onsuccess=e=>t(n.result)}))};var W,Z,Q;!function(e){e.Id=function(e){return{tag:"Id",value:e}},e.Chanid=function(e){return{tag:"Chanid",value:e}},e.By=function(e){return{tag:"By",value:e}}}(W||(W={})),function(e){e.ChatScan=function(e){return{tag:"ChatScan",value:e}},e.ChanScan=function(e){return{tag:"ChanScan",value:e}},e.AddChat=function(e){return{tag:"AddChat",value:e}},e.AddUser=function(e){return{tag:"AddUser",value:e}},e.Login=function(e){return{tag:"Login",value:e}},e.Logout=function(e){return{tag:"Logout",value:e}},e.Users=function(e){return{tag:"Users",value:e}},e.Chans=function(e){return{tag:"Chans",value:e}},e.Chats=function(e){return{tag:"Chats",value:e}},e.ChanJoin=function(e){return{tag:"ChanJoin",value:e}}}(Z||(Z={})),function(e){e.ChatScan=function(e){return{tag:"ChatScan",value:e}},e.ChanScan=function(e){return{tag:"ChanScan",value:e}},e.Chats=function(e){return{tag:"Chats",value:e}},e.Chans=function(e){return{tag:"Chans",value:e}},e.Users=function(e){return{tag:"Users",value:e}},e.Chat=function(e){return{tag:"Chat",value:e}},e.Chan=function(e){return{tag:"Chan",value:e}},e.User=function(e){return{tag:"User",value:e}},e.Login=function(e){return{tag:"Login",value:e}},e.ChanJoin=function(e){return{tag:"ChanJoin",value:e}}}(Q||(Q={}));const ee=(e,t=0,n=!0)=>({pos:t,littleEndian:n,view:new DataView(e)}),te=(e,t)=>{const{view:{buffer:n},pos:r}=e,a=n.byteLength;if(a-r>t)return e;const i=Math.max(2*a,a+t),o=new Uint8Array(i);return o.set(new Uint8Array(n)),ee(o.buffer,r,e.littleEndian)},ne=(e,t)=>{e=te(e,1);const{view:n,pos:r}=e;return n.setUint8(r,t),e.pos+=1,e},re=(e,t)=>{e=te(e,4);const{view:n,pos:r,littleEndian:a}=e;return n.setUint32(r,t,a),e.pos+=4,e};function ae(e,t){const{view:n,pos:r,littleEndian:a}=e;return n.setUint32(a?r:r+4,t,a),n.setUint32(a?r+4:r,0,a),e.pos+=8,e}const ie=(e,t)=>{e=te(e,4);const{view:n,pos:r,littleEndian:a}=e;return n.setInt32(r,t,a),e.pos+=4,e},oe=new TextEncoder,se="encodeInto"in oe?(e,t)=>oe.encodeInto(e,t).written:(e,t)=>{const n=oe.encode(e);return t.set(n),n.length},le=(e,t)=>{e=te(e,3*t.length+8);const n=se(t,new Uint8Array(e.view.buffer,e.pos+8));return(e=ae(e,n)).pos+=n,e},ce=e=>(t,n)=>n.reduce(e,((e,t)=>ae(te(e,8),t))(t,n.length)),ue=e=>(t,n)=>null===n?ne(t,0):e(ne(t,1),n),de=e=>{const{pos:t,view:n}=e;return e.pos+=1,n.getUint8(t)},fe=e=>{const{pos:t,view:n,littleEndian:r}=e;return e.pos+=4,n.getUint32(t,r)},he=e=>{const{view:t,pos:n,littleEndian:r}=e;return e.pos+=8,t.getUint32(r?n:n+4,r)},pe=e=>{const{pos:t,view:n,littleEndian:r}=e;return e.pos+=4,n.getInt32(t,r)},me=e=>t=>1===de(t)?e(t):null,we=e=>t=>{const n=he(t),r=new Array;for(let a=0;a<n;a++)r.push(e(t));return r},ye=new TextDecoder,ge=e=>{const t=he(e),{pos:n,view:{buffer:r}}=e,a=ye.decode(new Uint8Array(r,n,t));return e.pos+=t,a};var ve=ue(le),be=ce(ie),Ce=ue((function(e,t){switch(t.tag){case"Id":return ie(re(e,0),t.value);case"Chanid":return ie(re(e,1),t.value);case"By":return ie(re(e,2),t.value)}})),Ee=ue(ie),Se=ue(((e,t)=>{e=te(e,2);const{view:n,pos:r,littleEndian:a}=e;return n.setUint16(r,t,a),e.pos+=2,e})),Ae=ce(ne),Le=(ue(be),function(e,t){var n=t.id,r=t.txt,a=t.by,i=t.re,o=t.nor,s=t.chanid,l=t.dir,c=t.timestamp;return le(be(ie(ie(ie(ie(le(ie(e,n),r),a),i),o),s),l),c)}),Te=(ce(Le),function(e,t){var n=t.id,r=t.name,a=t.fullname,i=t.mom,o=t.by,s=t.dir,l=t.timestamp;return le(be(ie(ie(le(le(ie(e,n),r),a),i),o),s),l)}),Ue=(ce(Te),ce((function(e,t){var n=t.id,r=t.name;return le(ie(e,n),r)})),ue(Le),ue(Te),ue((function(e,t){var n=t.id,r=t.name,a=t.email,i=t.emailverified,o=t.fullname,s=t.key,l=t.picture,c=t.timestamp;return le(ve(le(le(((e,t)=>ne(e,t?1:0))(le(le(ie(e,n),r),a),i),o),s),l),c)})),ue((function(e,t){var n=t.data,r=t.chans;return be(Ae(e,n),r)})),function(e,t){var n=t.filter,r=t.kw,a=t.ub,i=t.lb,o=t.limit;return Se(Ee(Ee(ve(Ce(e,n),r),a),i),o)}),Ne=function(e,t){switch(t.tag){case"ChatScan":return Ue(re(e,0),t.value);case"ChanScan":return Ue(re(e,1),t.value);case"AddChat":return function(e,t){var n=t.txt,r=t.re,a=t.chname;return ve(Ee(le(e,n),r),a)}(re(e,2),t.value);case"AddUser":return function(e,t){var n=t.email,r=t.name,a=t.key;return Ae(le(le(e,n),r),a)}(re(e,3),t.value);case"Login":return function(e,t){var n=t.email,r=t.key;return Ae(le(e,n),r)}(re(e,4),t.value);case"Logout":return Ae(re(e,5),t.value);case"Users":return be(re(e,6),t.value);case"Chans":return be(re(e,7),t.value);case"Chats":return be(re(e,8),t.value);case"ChanJoin":return ie(re(e,9),t.value)}},ke=me(ge),xe=we(pe),Oe=(me((function(e){switch(fe(e)){case 0:return W.Id(pe(e));case 1:return W.Chanid(pe(e));case 2:return W.By(pe(e))}throw new Error("bad variant index for Filter")})),me(pe)),Ie=(me((e=>{const{pos:t,view:n,littleEndian:r}=e;return e.pos+=2,n.getUint16(t,r)})),we(de)),je=me(xe),Re=function(e){return{id:pe(e),txt:ge(e),by:pe(e),re:pe(e),nor:pe(e),chanid:pe(e),dir:xe(e),timestamp:ge(e)}},_e=we(Re),De=function(e){return{id:pe(e),name:ge(e),fullname:ge(e),mom:pe(e),by:pe(e),dir:xe(e),timestamp:ge(e)}},Me=we(De),Pe=we((function(e){return{id:pe(e),name:ge(e)}})),Be=me(Re),qe=me(De),Ke=me((function(e){return{id:pe(e),name:ge(e),email:ge(e),emailverified:(e=>1===de(e))(e),fullname:ge(e),key:ge(e),picture:ke(e),timestamp:ge(e)}})),He=me((function(e){return{data:Ie(e),chans:xe(e)}})),$e=function(e){switch(fe(e)){case 0:return Q.ChatScan(je(e));case 1:return Q.ChanScan(je(e));case 2:return Q.Chats(_e(e));case 3:return Q.Chans(Me(e));case 4:return Q.Users(Pe(e));case 5:return Q.Chat(Be(e));case 6:return Q.Chan(qe(e));case 7:return Q.User(Ke(e));case 8:return Q.Login(He(e));case 9:return Q.ChanJoin(Oe(e))}throw new Error("bad variant index for Response")},Fe=ee(new ArrayBuffer(512)),Ye=function(e,t){return Fe.pos=0,Fe=t(Fe,e),new Uint8Array(Fe.view.buffer).slice(0,Fe.pos)},Je=function(e,t){return t(ee(e))},Ve=function(e){return Je(e.buffer,$e)},ze=function(e){return Ye(e,Ne)};const Ge=e=>new Zlib.Inflate(e).decompress(),Xe=e=>new Zlib.Deflate(e).compress(),We=async(e,t,n)=>await crypto.subtle.encrypt({name:"AES-GCM",iv:n},t,e),Ze=async(e,t,n)=>await crypto.subtle.decrypt({name:"AES-GCM",iv:n},t,e);let Qe={},et=[];function tt(e){return this.t&&this.t[e.type](e)}Qe.h=(...e)=>{let t,n=r=>{if(null==r);else if("string"==typeof r)t?Qe.add(t,r):t=Qe.s?document.createElementNS("http://www.w3.org/2000/svg",r):document.createElement(r);else if(Array.isArray(r))t||(t=document.createDocumentFragment()),r.forEach(n);else if(r instanceof Node)t?Qe.add(t,r):t=r;else if("object"==typeof r)Qe.property(t,r,null,Qe.s);else if("function"==typeof r)if(t){let e=Qe.add(t,"");Qe.insert(t,r,e)}else t=r.apply(null,e.splice(1));else Qe.add(t,""+r)};return e.forEach(n),t},Qe.insert=(e,t,n,r,a)=>(e=n&&n.parentNode||e,a=a||r instanceof Node&&r,t===r||(r&&"string"!=typeof r||!("string"==typeof t||"number"==typeof t&&(t+=""))?"function"==typeof t?Qe.subscribe((()=>{r=Qe.insert(e,t.call({el:e,endMark:n}),n,r,a)})):(n?r&&(a||(a=r.o&&r.o.nextSibling||n.previousSibling),Qe.rm(e,a,n)):e.textContent="",r=null,t&&!0!==t&&(r=Qe.add(e,t,n))):(null!=r&&e.firstChild?n?(n.previousSibling||e.lastChild).data=t:e.firstChild.data=t:n?Qe.add(e,t,n):e.textContent=t,r=t)),r),Qe.property=(e,t,n,r,a)=>{if(null!=t)if(!n||"attrs"===n&&(r=!0))for(n in t)Qe.property(e,t[n],n,r,a);else"o"!==n[0]||"n"!==n[1]||t.$o?"function"==typeof t?Qe.subscribe((()=>{Qe.property(e,t.call({el:e,name:n}),n,r,a)})):a?e.style.setProperty(n,t):r||"data-"===n.slice(0,5)||"aria-"===n.slice(0,5)?e.setAttribute(n,t):"style"===n?"string"==typeof t?e.style.cssText=t:Qe.property(e,t,null,r,!0):("class"===n&&(n+="Name"),e[n]=t):((e,t,n)=>{t=t.slice(2).toLowerCase(),n?e.addEventListener(t,tt):e.removeEventListener(t,tt),(e.t||(e.t={}))[t]=n})(e,n,t)},Qe.add=(e,t,n)=>{let r=(e=>{const{childNodes:t}=e;if(t&&11===e.nodeType)return t.length<2?t[0]:{o:Qe.add(e,"",t[0])}})(t=(e=>"string"==typeof e?document.createTextNode(e):e instanceof Node?e:Qe.h(et,e))(t))||t;return e.insertBefore(t,n&&n.parentNode&&n),r},Qe.rm=(e,t,n)=>{for(;t&&t!==n;){let n=t.nextSibling;e===t.parentNode&&e.removeChild(t),t=n}},Qe.subscribe=function(e){return function(e,t){function n(){let r=u;return u&&u.__c.push(n),p(n),n.i=!0,u=n,t=e(t),u=r,t}function r(){return n.i?u&&n.u.forEach((e=>e())):t=n(),t}e.s=n,m(n),n(),r.$o=1}(e),()=>p(e.s)},Qe.cleanup=function(e){return u&&u.l.push(e),e},Qe.root=f,Qe.sample=function(e){let t=u;u=void 0;let n=e();return u=t,n},Qe.hs=(...e)=>{let t=Qe.s;Qe.s=!0;let n=nt(...e);return Qe.s=t,n};let nt=(...e)=>Qe.h.apply(Qe.h,e);const rt=new Map,at=(e,t)=>{let n=rt.get(e)||[];n.push(t),rt.set(e,n)},it=(e,t)=>rt.has(e)?rt.get(e).forEach((e=>e(t))):void 0,ot={},st=e=>(e&&(Object.assign(ot,e),it("config",ot)),ot),lt=h(void 0),ct={id:h(0),name:h(""),chans:h([])};async function ut(){let e=await G("a");if(!e||e.byteLength<53)return;let t=new Uint8Array(e,0,16),n=new Uint8Array(e,16,32);t&&16===t.length&&(ct.salt=t),n&&32===n.length&&(ct.sskey=await crypto.subtle.importKey("raw",n,"AES-GCM",!1,["encrypt","decrypt"]));let r=new Uint8Array(e,48,4),a=new Uint8Array(e,52),i=new DataView(r.buffer).getInt32(r,!1),o=(new TextDecoder).decode(a);i&&o&&(ct.id(i),ct.name(o));let s=await G("c");return s&&s instanceof Array&&ct.chans(s),ct.salt}async function dt(e,t){let n=new TextEncoder,r=await ft(n.encode(e),n.encode(t));return await crypto.subtle.exportKey("raw",r)}async function ft(e,t){let n=await crypto.subtle.importKey("raw",e,"PBKDF2",!1,["deriveBits","deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:1e5,hash:"SHA-256"},n,{name:"AES-GCM",length:256},!0,["encrypt","decrypt"])}const ht=document.location.hash.substr(1).match(/^ip\/(?<ip>[\:\.\d]+)$/);let pt="wss://"+(ht?ht.groups.ip:"192.168.100.11:443");window._ws=e=>(e&&("string"==typeof e&&(pt="wss://"+e),Ot(!0)),pt),window._ws=()=>wt,window._pc=()=>bt,window._dc=()=>Lt;let mt,wt,yt,gt,vt,bt,Ct,Et,St,At,Lt,Tt=500,Ut=0,Nt=new Set,kt={recv:e=>Nt.add(e)};Ot(),It();const xt=k();function Ot(e){mt=performance.now(),wt=new WebSocket(pt),wt.binaryType="arraybuffer",wt.onopen=()=>{e?It():vt&&_t()},wt.onmessage=async e=>{let t=new Uint8Array(e.data),{a:n,k:r}=S(t);st((e=>{const t=new c(e);return{z:t.get(0),m:t.get(1),c:t.get(2),d:t.get(3)}})(n));var a,i,o;r=await(a=r,crypto.subtle.importKey("raw",a,{name:"ECDH",namedCurve:"P-256"},!0,[])),At=await(i=gt.privateKey,o=r,crypto.subtle.deriveKey({name:"ECDH",namedCurve:"P-256",public:o},i,{name:"AES-GCM",length:256},!0,["encrypt","decrypt"])),St=new Uint8Array(await crypto.subtle.exportKey("raw",At));let s=JSON.parse((e=>(new TextDecoder).decode(Ge(e)))(n.slice(1))),l=s.answer?s.answer:s;if(await bt.setRemoteDescription(new RTCSessionDescription(l)),!s.candidate)return;const u=new RTCIceCandidate({candidate:s.candidate,sdpMid:0,sdpMLineIndex:0});await bt.addIceCandidate(u)},wt.onclose=e=>{Ut++,Tt+=T(0,Ut<16?200:3e3),setTimeout((()=>{Ot(!0)}),Tt)},wt.onerror=e=>{}}function It(){Ct=!1,bt=new RTCPeerConnection({iceServers:[{urls:["stun:stun.l.google.com:19302"]}]}),bt.onicecandidate=e=>{e.candidate},bt.onconnectionstatechange=e=>{bt.connectionState},bt.oniceconnectionstatechange=e=>{bt.iceConnectionState},Lt=bt.createDataChannel("cu",{}),Lt.binaryType="arraybuffer",kt.send=jt,Lt.onopen=e=>{xt.complete(Lt)},Lt.onmessage=Rt,Lt.onclose=e=>{},Lt.onerror=e=>{},async function(){const e=async()=>{let e=await bt.createOffer();return await bt.setLocalDescription(e),Xe((new TextEncoder).encode(bt.localDescription.sdp))},t=async()=>{if(Et)return Et;gt=await(async()=>await crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!1,["deriveKey"]))();let e=await crypto.subtle.exportKey("raw",gt.publicKey);return Et=new Uint8Array(e),Et};vt=await(async(e,t,n)=>{let[r,a,i]=await Promise.all([e(),t(),n()]);return i?E(E(r,a),i):N(E(r,a),64,24)})(e,t,ut),1===wt.readyState&&_t()}()}async function jt(e){await xt.join(),e=ze(e),b(e);let{z:t,m:n,c:r,d:a}=st();if(t&&(e=Xe(e)),n&&(e=N(e,e.length),C(e,St)),r){const t=crypto.getRandomValues(new Uint8Array(12));C(e,t),e=U(t,new Uint8Array(await We(e,At,t)))}if(a){const t=crypto.getRandomValues(new Uint8Array(12));C(e,t),e=U(t,new Uint8Array(await We(e,ct.sskey,t)))}Lt.send(e),yt=performance.now()}async function Rt(e){let t=new Uint8Array(e.data),n=t.length,{z:r,m:a,c:i,d:o}=st();if(o){let e=t.subarray(0,12);t=new Uint8Array(await Ze(t.subarray(12),ct.sskey,e)),C(t,e)}if(i){let e=t.subarray(0,12);t=new Uint8Array(await Ze(t.subarray(12),At,e)),C(t,e)}if(a){C(t,St);let{a:e}=S(t);t=new Uint8Array(e)}r&&(t=Ge(t));(100*n/t.length).toFixed(2);let s=Dt(t);Nt.forEach((e=>e(s)))}const _t=()=>{Ct||(wt.send(vt),Ct=!0)},Dt=e=>Ve(e);function Mt(e,t,n){const{root:r,subscribe:a,sample:i,cleanup:o}=Qe;null==n&&(n=!t.$t);let s=Qe.h([]),l=Qe.add(s,""),c=new Map,u=new Map,d=new Set;function f(e,a){if(null==e)return;let i=u.get(e);return 1===a?(d.delete(e),i||(i=n?r((n=>(c.set(e,n),t(e.$v||e)))):t(e.$v||e),11===i.nodeType&&(i=(e=>{const{childNodes:t}=e,{length:n}=t;if(n<2)return t[0];let r=Array.from(t);return{nodeType:111,t:r[0],o:r[n-1],l(){if(t.length!==n){let t=0;for(;t<n;)e.appendChild(r[t++])}return e}}})(i)||i),u.set(e,i))):-1===a&&d.add(e),((e,t)=>111===e.nodeType?1/t<0?t?Qe.rm(e.t.parentNode,e.t.nextSibling,e.o.nextSibling)||e.t:e.o:t?e.l():e.t:e)(i,a)}function h(e){let t=c.get(e);t&&(t(),c.delete(e)),u.delete(e)}return o(a((t=>{let n=e();return i((()=>{d.clear();let e=Array.from(function(e,t,n,r,a){let i,o,s=new Map,l=new Map;for(i=0;i<t.length;i++)s.set(t[i],i);for(i=0;i<n.length;i++)l.set(n[i],i);for(i=o=0;i!==t.length||o!==n.length;){var c=t[i],u=n[o];if(null===c)i++;else if(n.length<=o)e.removeChild(r(t[i],-1)),i++;else if(t.length<=i)e.insertBefore(r(u,1),r(t[i],0)||a),o++;else if(c===u)i++,o++;else{var d=l.get(c),f=s.get(u);void 0===d?(e.removeChild(r(t[i],-1)),i++):void 0===f?(e.insertBefore(r(u,1),r(t[i],0)||a),o++):(e.insertBefore(r(t[f],1),r(t[i],0)||a),t[f]=null,f>i+1&&i++,o++)}}return n}(l.parentNode,t||[],n,f,l));return d.forEach(h),e}))}))),o((function(){c.forEach((e=>e())),c.clear(),u.clear(),d.clear()})),s}window._b=kt;const Pt="0VMZYpdgCGL3iKAzDHwocTt97e1hasO2mJNjExq4PvR6XyWSFbIn-5B_8fUukQlr",Bt=Pt.split(""),qt=new Array(123);for(let e=0;e<Pt.length;e++)qt[Pt.charCodeAt(e)]=e;const Kt=e=>{if(e<0)return"-"+Kt(-e);let t=e>>>0,n=e/4294967296>>>0,r="";for(;n>0;)r=Bt[63&t]+r,t>>>=6,t|=(63&n)<<26,n>>>=6;let a="";do{a=Bt[63&t]+a,t>>>=6}while(t>0);return a+r};var Ht={ntob:Kt,bton:e=>{let t=0;for(let n=0;n<e.length;n++)t=64*t+qt[e.charCodeAt(n)];return t}};const $t=[];function Ft(){!function(e){for(const t of $t)t(e)}(document.location.hash.substr(1))}window.addEventListener("hashchange",Ft),setTimeout(Ft);const Yt=[0,0,"🏠",0],Jt=(()=>{let e=Yt;const t=h([e]),n=t=>e=t;return{path:t=>e[t],paths:t,len:()=>t().length,setpath:n,same:t=>t===e,cd:e=>{let r=t();r[e[0]]!==e&&(r[e[0]]=e),r.splice(e[0]+1),t(r),n(e),location.hash=e[0]>0?Ht.ntob(e[3]):""},route:e=>{t([Yt,...e]),n(e[e.length-1])}}})(),Vt=new Map,zt=new Map,Gt=new Map,Xt=e=>(t,n)=>{if(!t)return e;let r=e.get(t);return n?r?r[n]:void 0:r},Wt=h([]),Zt=h([]),Qt=h(0),en=h(0),tn=h(0),nn=h(0),rn=h(""),an=h(""),on=Xt(Vt),sn=Xt(zt),ln=Xt(Gt),cn=((...e)=>{const t={},n={};return{create:e=>n[e]=new Promise((n=>t[e]=n)),complete:(e,n)=>t[e]?t[e](n):null,join:e=>n[e],joinall:()=>Promise.all(e.map((e=>n[e]))),select:()=>Promise.race(e.map((e=>n[e])))}})("users","chans");kt.recv((async e=>{switch(e.tag){case"Login":if(!e.value)return void lt(void 0);!async function({data:e,chans:t}){let n=new Uint8Array(e.slice(16,20)),r=new Uint8Array(e.slice(20)),a=new DataView(n.buffer).getInt32(n,!1),i=(new TextDecoder).decode(r);ct.id(a),ct.name(i),ct.salt=new Uint8Array(e.slice(0,16)),ct.sskey=await ft(lt(),ct.salt),lt(void 0);let o=new Uint8Array(await crypto.subtle.exportKey("raw",ct.sskey)),s=ct.salt.length,l=new Uint8Array(s+o.length+n.length+n.length+r.length);l.set(ct.salt),l.set(o,s),l.set(n,s+o.length),l.set(r,s+o.length+n.length),B("a",l.buffer),st({d:!0}),B("c",t),K("users",{id:a,name:i})}(e.value);break;case"Users":q("users",e.value),cn.complete("users",e.value);break;case"Chans":q("chans",e.value),cn.complete("chans",e.value);break;case"Chat":let t=Zt();if(t.includes(e.value.id))return;let n=window.scrollY+window.innerHeight===document.body.scrollHeight;await K("chats",e.value);let r=new Set(ln().has(e.value.by)?[]:[e.value.by]),a=e.value.dir.filter((e=>!on(e))),i=new Set(a);await hn(r,i),e.value.nor=h(0),e.value.star=h(!1),sn().set(e.value.id,e.value),t.push(e.value.id),Zt(t),n&&y();break;case"Chats":if(0===e.value.length)return;q("chats",e.value),cn.complete("chats",e.value);break;case"ChatScan":let o=e.value,s=Qt();if(!o||0===o.length)return void V(s,null,!0);V(s,[o[0],o[o.length-1]]);let l=o.map((e=>({chanid:s,chatid:e})));q("chanchats",l),cn.complete("chats",o);break;case"ChanScan":let c=e.value||[];0!==c.length||an()?await mn(c):it("nochan"),cn.complete("chanscan",c);break;case"ChanJoin":cn.complete("chanjoin",e.value)}}));const un="/"+Pt;(e=>{$t.push(e)})((async e=>{if(!e||!un.includes(e[0]))return Qt(0),pn([0]),document.title="sonic",Cn();if("/"===e[0]){let t=Ht.bton(e.slice(1));en(t),await fn([t]),Cn();let n=sn(t).dir;return await mn(n),pn(n)}let t=Ht.bton(e);Qt(t),Cn(),await mn([t]);let n=on(t).dir;await mn(n),pn([...n,t]),document.title=on(Qt(),"fullname")+" - sonic"}));const dn=async(e,t=null)=>{await fn(e);let n=e[0],r=new Set,a=new Set,i=Zt(),o=new Set;switch(e.forEach((e=>{let t=sn(e);t.nor=h(t.nor),t.star=h(!1),"string"==typeof t.timestamp&&(t.timestamp=new Date(t.timestamp)),ln().has(t.by)||r.add(t.by),t.dir.forEach((e=>{on().has(e)||a.add(e)})),o.has(e),o.add(e)})),o=new Set,i.forEach((e=>{o.has(e),o.add(e)})),await hn(r,a),e.reverse(),t){case"re":Zt(e);break;case"pre":Zt(i.concat(e));break;default:Zt(e.concat(i))}o=new Set,Zt().forEach((e=>{o.has(e),o.add(e)})),n&&it("reload",n)},fn=async e=>{if(0===(e=e.filter((e=>!sn().has(e)))).length)return;let{value:t,missed:n}=await H("chats",e);if(w(t,sn()),n.length>0){let e=await cn.create("chats",kt.send(Z.Chats(n)));w(e,sn())}},hn=async(e,t)=>{let n=await H("users",Array.from(e)),r=await H("chans",Array.from(t));w(n.value,ln()),w(r.value,on()),n.missed.length>0&&cn.create("users",kt.send(Z.Users(n.missed))),r.missed.length>0&&cn.create("chans",kt.send(Z.Chans(r.missed)));let[a,i]=await cn.joinall();a&&w(a,ln()),i&&w(i,on())},pn=e=>{let t=e.map(((e,t)=>{let n=on(e)||{};return[t+1,n.mom,n.name,e]}));Jt.route(t)},mn=async e=>{if(0===(e=e.filter((e=>!on().has(e)))).length)return;let{value:t,missed:n}=await H("chans",e);if(w(t,on()),n.length>0){let e=await cn.create("chans",kt.send(Z.Chans(n)));w(e,on())}};let wn=null;const yn=(e,t=null,n=null,r=null,a=null)=>{t&&an(t);let i=Z.ChanScan({filter:vn(e),kw:t,ub:n,lb:r,limit:a});kt.send(i)},gn=async(e,t=30)=>{performance.now();let n=vn(e),r=(await((e,t,n,r)=>$("chans",e,t,n,r,Y))(n,t)).map((e=>(on().set(e.id,e),e.id)));Wt(r);let a=await cn.create("chanscan",yn(e));Wt(a)},vn=e=>(wn=e,"number"==typeof e?W.Chanid(e):null),bn=(e=null,t=null,n=null)=>{let r=Z.ChatScan({filter:en()>0?W.Id(en()):Qt()>0?W.Chanid(Qt()):null,kw:null,ub:e,lb:t,limit:n});kt.send(r)};async function Cn(){nn(!1),tn(0);let e=Qt();performance.now();let t=(await z(e)||[])[0]||null,n=await J(W.Chanid(e),null,30);await dn(n,"re"),nn(!0);let r=await cn.create("chats",bn(null,t))||[];await dn(r,30===r.length||0===n.length?"re":"pre")}window._chn=()=>Array.from(Vt.values()),window._ch=()=>Array.from(zt.values()),window._us=()=>Array.from(Gt.values()),window._chns=()=>Wt().map((e=>Vt.get(e))),window._chs=()=>Zt().map((e=>zt.get(e))),window._chnid=Qt,window._chid=en,window._curid=tn,window._curtxt=rn,window._chnkw=an;const En=()=>{const e=document.createElement("div");e.contentEditable=!0,e.className="s-c",e.oninput=({target:{firstChild:t}})=>{var n,r,a,i;(n=function(){let t=e.textContent;t.length>50||(async e=>{let t=await cn.create("chanscan",yn(Jt.path(3),e));Wt(t)})(t)},r=100,function(){var e=this,t=arguments,o=function(){i=null,a||n.apply(e,t)},s=a&&!i;clearTimeout(i),i=setTimeout(o,r),s&&n.apply(e,t)})()},e.onkeydown=e=>{"Enter"!==e.key||e.shiftKey||e.preventDefault()};const t=(e,t)=>{(async e=>{let t=await cn.create("chanjoin",kt.send(Z.ChanJoin(e)));if(!t)return;let n=ct.chans();n.includes(t)||(n.push(t),ct.chans(n),B("c",n))})(t),e.stopPropagation()};return nt([nt("div",{class:"s"},e),nt("div",{class:"tbl"},nt("table",null,nt("tbody",null,Mt(Wt,(e=>{let n=on(e);return nt("tr",{onclick:()=>(async({id:e,mom:t,name:n})=>{await gn(e),Jt.cd([Jt.path(0)+1,t,n,e])})(n)},nt("td",null,"#"),nt("td",null,n.name),nt("td",null,n.fullname),nt("td",null,nt("button",{onclick:n=>t(n,e)},"JOIN")))}))))),nt("div",{class:"grid"},nt("div",{class:"container"},nt("ol",{class:"bc"},nt("li",null,nt("a",{href:"#"},"#")," ",nt("a",{href:"#"},"rust")),nt("li",{class:"active relative drop-container"},nt("a",null,"general"),nt("div",{class:"drop"},nt("ul",{class:"list"},nt("li",null,nt("a",{href:"#"},"security")),nt("li",null,nt("a",{href:"#"},"random")),nt("li",null,nt("a",{href:"#"},"backend")),nt("li",null,nt("a",{href:"#"},"compiler")),nt("li",null,nt("a",{href:"#"},"gamedev"))))))))])};var Sn={date:"1/4/2021, 9:57:12 PM",build:"5519c33",ver:"0.0.27"};async function An(){await kt.send(Z.Logout(Array.from(ct.salt))),(async()=>{let e=await j.join();e&&e.transaction(["session"],"readwrite").objectStore("session").clear()})(),st({d:!1}),ct.id(0),ct.name(""),ct.sskey=void 0,ct.salt=void 0}at("config",(({d:e})=>Nn(e?Un:Tn)));const Ln=()=>nt("div",{class:"login"},nt(v(Nn),null),nt("div",{class:"v"},Sn.ver," ",Sn.build)),Tn=()=>nt([nt("h2",null,"Login"),nt("form",{onsubmit:function(e){e.preventDefault();let{m:t,p:n}=e.target;!async function(e,t){let n=await dt(t,e),r={email:e,key:Array.from(new Uint8Array(n))};lt(n),kt.send(Z.Login(r))}(t.value,n.value)}},nt("input",{type:"text",name:"m",placeholder:"email",required:!0,autocomplete:"true"}),nt("input",{type:"password",name:"p",placeholder:"password",required:!0,autocomplete:"true"}),nt("button",{type:"submit"},"Login")),nt("h2",null,"Register"),nt("form",{onsubmit:function(e){e.preventDefault();let{m:t,n:n,p:r}=e.target;!async function(e,t,n){let r=await dt(n,e),a={email:e,name:t,key:Array.from(new Uint8Array(r))};lt(r),kt.send(Z.AddUser(a))}(t.value,n.value,r.value)}},nt("input",{type:"text",name:"m",placeholder:"email",required:!0,autocomplete:"true"}),nt("input",{type:"text",name:"n",placeholder:"name",required:!0,autocomplete:"true"}),nt("input",{type:"password",name:"p",placeholder:"password",required:!0,autocomplete:"true"}),nt("button",{type:"submit"},"Register"))]),Un=()=>nt([nt("div",null,"You have logged in as ",nt("b",null,ct.name)),nt("button",{onclick:()=>{An()}},"Logout")]),Nn=h((()=>null));window._v=()=>Sn;const kn="defaultParagraphSeparator",xn="formatBlock",On=(e,t,n)=>e.addEventListener(t,n),In=(e,t)=>e.appendChild(t),jn=e=>document.createElement(e),Rn=e=>document.queryCommandState(e),_n=(e,t=null)=>document.execCommand(e,!1,t),Dn={bold:{icon:"<b>B</b>",title:"Bold",state:()=>Rn("bold"),result:()=>_n("bold")},italic:{icon:"<i>I</i>",title:"Italic",state:()=>Rn("italic"),result:()=>_n("italic")},underline:{icon:"<u>U</u>",title:"Underline",state:()=>Rn("underline"),result:()=>_n("underline")},strikethrough:{icon:"<strike>S</strike>",title:"Strike-through",state:()=>Rn("strikeThrough"),result:()=>_n("strikeThrough")},heading1:{icon:"<b>H1</b>",title:"Heading 1",result:()=>_n(xn,"<h1>")},heading2:{icon:"<b>H2</b>",title:"Heading 2",result:()=>_n(xn,"<h2>")},quote:{icon:"&#8220;&#8221;",title:"Quote",result:()=>_n(xn,"<blockquote>")},olist:{icon:"1.",title:"Ordered List",result:()=>_n("insertOrderedList")},ulist:{icon:"&#8226;",title:"Unordered List",result:()=>_n("insertUnorderedList")},code:{icon:"&lt;&gt;",title:"Code",result:()=>_n(xn,"<pre>")},line:{icon:"&#8213;",title:"Horizontal Line",result:()=>_n("insertHorizontalRule")},link:{icon:"&#128279;",title:"Link",result:()=>{const e=window.prompt("Enter the link URL");e&&_n("createLink",e)}},image:{icon:"&#128247;",title:"Image",result:()=>{const e=window.prompt("Enter the image URL");e&&_n("insertImage",e)}}},Mn={actionbar:"e-a",button:"e-b",content:"e-c",selected:"e-bs",topic:"e-t"},Pn=({topic:e,content:t})=>{if(!ct.id())return void alert("you are not login!");if(!t.textContent.trim())return;let n=tn()||Zt()[Zt().length-1],r=null;if(!n||e.textContent!==rn()){if(r=e.textContent,0===r.trim().length)return alert("topic should not be empty"),!1;n=null}let a=t.innerHTML.trim();kt.send(Z.AddChat({txt:a,re:n,chname:r})),t.textContent="",Bn({},{topic:e})},Bn=({id:e,txt:t},{topic:n})=>{if(!e||tn()===e)return n.textContent="",rn(""),void tn(0);n.innerHTML=t,n.textContent=n.textContent,rn(n.textContent),tn(e)};at("reload",(e=>{window.scrollY<100&&setTimeout((()=>document.getElementById(Ht.ntob(e)).scrollIntoView()))}));const qn=()=>{const e=(e=>{const t=e.actions?e.actions.map((e=>"string"==typeof e?Dn[e]:Dn[e.name]?{...Dn[e.name],...e}:e)):Object.keys(Dn).map((e=>Dn[e])),n={...Mn,...e.classes},r=e.defaultParagraphSeparator||"div",a=e.element.topic=jn("div");a.contentEditable=!0,a.className=n.topic,a.onkeydown=e=>{"Enter"===e.key&&(i.focus(),e.preventDefault())},In(e.element,a);const i=e.element.content=jn("div");i.contentEditable=!0,i.className=n.content,i.onfocus=()=>{let t=window.scrollY+window.innerHeight===document.body.scrollHeight;e.element.classList.add("sticky"),t&&setTimeout((()=>y()))},i.onblur=()=>{setTimeout((()=>{e.element.contains(document.activeElement)||e.element.classList.remove("sticky")}))},i.oninput=({target:{firstChild:t}})=>{e.oninput(i.innerHTML)},i.onkeydown=t=>{"Enter"!==t.key||t.shiftKey||(e.onsend({topic:a,content:i}),t.preventDefault())},In(e.element,i);const o=jn("div");return o.className=n.actionbar,In(e.element,o),t.forEach((e=>{const t=jn("button");if(t.className=n.button,t.innerHTML=e.icon,t.title=e.title,t.setAttribute("type","button"),t.onclick=()=>e.result()&&i.focus(),e.state){const r=()=>t.classList[e.state()?"add":"remove"](n.selected);On(i,"keyup",r),On(i,"mouseup",r),On(t,"click",r)}In(o,t)})),e.styleWithCSS&&_n("styleWithCSS"),_n(kn,r),e.element})({element:nt("div",{class:"e"}),oninput:e=>{},onsend:Pn}),t=e=>{let{id:t,txt:a,by:o,chanid:s,re:l,star:c,nor:u}=e,d=Zt(),f=on(s),h=[f.id,...f.dir.slice(Jt.len()-1)],p=d[d.indexOf(t)-1],m=sn(p)||{},w=m.by!==o,y=!l||h.length>0&&m.chanid!==s;y&&0==h.length&&(h=[f.id]);let g=Ht.ntob(t);const v=()=>{n("#/"+g,g)};return nt("div",{id:g,class:function(){return"c"+(()=>(c()?" star":"")+(y?" t":"")+(tn()===t?" cur":"")).call(this)},onclick:t=>r(t,e)},y?nt("div",{class:"tn"+(l?" re":" nw")},h.map((e=>{let t=Ht.ntob(e);return nt("span",null,nt("a",{href:function(){return"#"+("function"==typeof t?t.call(this):t)},onclick:e=>((e,t)=>{n("#"+t,t),e.preventDefault()})(e,t),innerHTML:on(e,"fullname")}))}))):null,w||y?nt("div",{class:"by"},ln(o).name):null,nt("div",{onclick:e=>e.stopPropagation()},(()=>{let e=u();if(1!==e||t!==sn(Zt()[i+1]).re)return e>0?nt([nt("span",{class:"rep",onclick:v},e," 💬")," "]):void 0}),(e=>document.createRange().createContextualFragment(e))(a)))},n=(e,t)=>{let n=screen.width/2-300,r=screen.height/2-300;window.open(e,t,`toolbar=yes,location=yes,status=no,menubar=yes,scrollbars=yes,resizable=yes,width=600,height=600,top=${r}, left=${n}`)},r=(e,t)=>{e.x<18&&e.offsetY<22&&a(t)},a=({id:e,star:t})=>{const n=Zt().filter((t=>t===e))[0],r=sn(n);r.star?r.star(!t()):r.star=h(!1)},o=nt("div",null);return setTimeout((function(){new IntersectionObserver((e=>{if(e[0].intersectionRatio<=0||!nn())return;let t=Zt()[0];!t||t<=1||setTimeout((()=>(async e=>{let t=Qt();performance.now();let n=await z(t)||[];if(n[2]&&e===n[1])return;let r=await J(W.Chanid(t),e,30);if(n[2]||30===r.length)return void await dn(r);let a=await cn.create("chats",bn(e));a.length>0&&await dn(a)})(t)))}),{}).observe(o)})),nt([o,nt("div",null,Mt(Zt,(e=>t(sn(e))))),e])},Kn=()=>{},Hn=h(Kn);document.querySelector(".a").append((()=>{at("nochan",(()=>Hn(Kn)));const e=e=>{Hn()!==En?e[0]===Jt.len()-1?Hn(En):Jt.cd(e):Jt.same(e)&&Hn(Kn),Jt.setpath(e),Hn()===En&&(async e=>{wn!==e[3]&&gn(e[3])})(e)};return nt([nt("div",{class:"n"},nt("div",null,nt("ol",{class:"bc"},(()=>Mt(Jt.paths,(t=>nt("li",null,nt("a",{onclick:n=>e(t)},t[2])))))),nt("div",{class:"m"},nt("a",{onclick:e=>{Hn()===Ln?Hn(Kn):Hn(Ln)}},(()=>ct.name()||"login")))),nt(v(Hn),null)),qn])})())}();
