!function(){"use strict";const e=[];function t(t){let n={};return function(){const i=e.slice.call(arguments),o=i.map((e=>{if(r(e)||Array.isArray(e)){let t={};for(let n in e)t[n]=a(e[n]);return t}return a(e)})),s=JSON.stringify(o);let l=n[s];return void 0===l&&(l=t.apply(this,i),l&&11===l.nodeType&&(l=e.slice.call(l.childNodes)),n[s]=l),l}}let n=0;function a(e){return"function"==typeof e||e instanceof Node?(e.$m||(e.$m=++n),{$m:e.$m}):e}function r(e){if("object"!=typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var s,l,c=o((function(e,t){function n(e){var t=e>>3;return e%8!=0&&t++,t}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){void 0===e&&(e=0);var a=null==t?void 0:t.grow;this.grow=a&&isFinite(a)&&n(a)||a||0,this.buffer="number"==typeof e?new Uint8Array(n(e)):e}return e.prototype.get=function(e){var t=e>>3;return t<this.buffer.length&&!!(this.buffer[t]&128>>e%8)},e.prototype.set=function(e,t){void 0===t&&(t=!0);var n=e>>3;if(t){if(this.buffer.length<n+1){var a=Math.max(n+1,Math.min(2*this.buffer.length,this.grow));if(a<=this.grow){var r=new Uint8Array(a);r.set(this.buffer),this.buffer=r}}this.buffer[n]|=128>>e%8}else n<this.buffer.length&&(this.buffer[n]&=~(128>>e%8))},e.prototype.forEach=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=8*this.buffer.length);for(var a=t,r=a>>3,i=128>>a%8,o=this.buffer[r];a<n;a++)e(!!(o&i),a),i=1===i?(o=this.buffer[++r],128):i>>1},e}();t.default=a}(l={path:s,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&l.path)}},l.exports),l.exports));let u,d=[];function f(e){let t=u,n=()=>{};u=n,m(n);let a=e((()=>{p(n),u=void 0}));return u=t,a}function h(e){function t(n){if(0===arguments.length)return u&&!t.__o.has(u)&&(t.__o.add(u),u.u.push(t)),e;e=n;let a=u;return u=void 0,t.o=new Set(t.__o),t.o.forEach((e=>e.i=!1)),t.o.forEach((e=>{e.i||e()})),u=a,e}return t.$o=1,t.__o=new Set,t.t=d,t}function p(e){e.__c.forEach(p),e.u.forEach((t=>{t.__o.delete(e),t.o&&t.o.delete(e)})),e.l.forEach((e=>e())),m(e)}function m(e){e.u=[],e.__c=[],e.l=[]}const w=(e,t)=>e.reduce(((e,t)=>(e.set(t.id,t),e)),t),y=()=>window.scrollTo(0,document.body.scrollHeight),g=t((e=>t(((t,n)=>f((()=>e(t,n))))))),v=e=>(t,...n)=>()=>g(e())(t,n),b=(e,t)=>{let n=0,a=0;for(;n<e.length;)a>=t.length&&(a=0),e.set([e[n]^t[a]],n),n++,a++},C=(e,t)=>(b(e,t),A(e,t)),E=e=>{let{a:t,k:n}=S(e);return b(t,n),{a:t,k:n}},S=e=>{let t=e[0],n=e.subarray(1,t+1);return{a:e.subarray(t+1),k:n}},A=(e,t)=>{let n=new Uint8Array(1+t.length+e.length);return n[0]=t.length,n.set(t,1),n.set(e,1+t.length),n},L=(e,t)=>(e=Math.ceil(e),Math.floor(Math.random()*(Math.floor(t)-e)+e)),T=(e,t)=>{let n=new Uint8Array(e.length+t.length);return n.set(e,0),n.set(t,e.length),n},U=(e,t=64,n=8)=>C(e,crypto.getRandomValues(new Uint8Array(L(n,t)))),N=()=>{let e,t=new Promise((t=>e=t));return{complete:t=>e(t),join:()=>t}},x=navigator.vendor.includes("Apple")?{transaction:()=>{}}:openDatabase("sonic","1.0","Test DB",1073741824);function k(e,t){}function O(e,t){}x.transaction((e=>{e.executeSql("CREATE TABLE IF NOT EXISTS users (\n            id integer NOT NULL PRIMARY KEY,\n            name varchar(50) NOT NULL\n        )",[],k,O),e.executeSql("CREATE TABLE IF NOT EXISTS userchans (\n            id integer NOT NULL PRIMARY KEY\n        )",[],k,O),e.executeSql("CREATE TABLE IF NOT EXISTS chans (\n            id integer NOT NULL PRIMARY KEY,\n            name varchar(50) NOT NULL,\n            fullname varchar(150) NOT NULL,\n            mom integer NOT NULL,\n            by integer NOT NULL,\n            dir text NOT NULL,\n            timestamp datetime NOT NULL DEFAULT CURRENT_TIMESTAMP\n        )",[],k,O),e.executeSql("CREATE TABLE IF NOT EXISTS chats (\n            id integer NOT NULL PRIMARY KEY,\n            txt text NOT NULL,\n            by integer NOT NULL,\n            re integer NOT NULL,\n            nor integer NOT NULL DEFAULT '0',\n            chanid integer NOT NULL,\n            dir text NOT NULL,\n            timestamp datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,\n            star boolean\n        )",[],k,O),e.executeSql("CREATE TABLE IF NOT EXISTS chanchats (\n            chanid integer NOT NULL,\n            chatid integer NOT NULL,\n            PRIMARY KEY (chanid, chatid)\n        )",[],k,O)})),window._qd=()=>{x.transaction((e=>{e.executeSql("SELECT * FROM sqlite_master WHERE type = 'table' AND name NOT LIKE '\\_%' escape '\\'",[],((e,t)=>{var n,a,r,i;function o(){--r<0&&x.changeVersion(x.version,"",console.log,console.error)}for(n=t.rows,r=a=n.length;a--;)i=n.item(a).name,e.executeSql("DROP TABLE "+i,[],o,console.error);o()}),console.error)}))},window._q=(e,t=[])=>{x.transaction((n=>{n.executeSql(e,t,((e,t)=>{}),console.error)}))};const j=N(),I="sonic",R=["session","chats","users","chans","ranges","chanchats"];let _;window._d=()=>D(I);let M=indexedDB.open(I,1);function D(e){var t=window.indexedDB.deleteDatabase(e);t.onerror=e=>{},t.onsuccess=e=>{}}M.onsuccess=e=>{_=M.result,function(e){let t=e.objectStoreNames;for(const e of R)if(!t.contains(e))return void D(I)}(_),j.complete(_),M.open?M.open():M.open=!0},M.onerror=e=>{j.complete()},M.onblocked=e=>{},M.onupgradeneeded=e=>{_=M.result;let t=_.objectStoreNames;if(!t.contains("session")){_.createObjectStore("session")}if(!t.contains("ranges")){_.createObjectStore("ranges")}if(!t.contains("chats")){let e=_.createObjectStore("chats",{keyPath:"id"});e.createIndex("chanid",["chanid","id"],{unique:!1}),e.createIndex("re",["re","id"],{unique:!1}),e.createIndex("by",["by","id"],{unique:!1})}if(!t.contains("users")){_.createObjectStore("users",{keyPath:"id"})}if(!t.contains("chans")){_.createObjectStore("chans",{keyPath:"id"}).createIndex("mom",["mom","id"],{unique:!1})}if(!t.contains("chanchats")){_.createObjectStore("chanchats",{keyPath:["chanid","chatid"]})}for(const e of R)_.objectStoreNames.contains(e)||_.createObjectStore(e)};const P=async(e,t)=>{let n=await j.join();n&&n.transaction(["session"],"readwrite").objectStore("session").put(t,e)},B=async()=>{let e=await j.join();e&&(e.transaction(["session"],"readwrite").objectStore("session").clear(),await G([0]),await q([0]))},K=async(e,t)=>{let n=await j.join();if(!n)return;let a=n.transaction([e],"readwrite").objectStore(e);t.forEach((e=>{"string"==typeof e.timestamp&&(e.timestamp=new Date(e.timestamp)),a.add(e)})),x.transaction((n=>{t.forEach((t=>{let a=Object.keys(t),r=`INSERT OR REPLACE INTO ${e} (${a.join(",")}) VALUES (${Array(a.length).fill("?").join(",")})`;n.executeSql(r,Object.values(t).map((e=>"function"==typeof e?e():e)),k,O)}))}))},q=async e=>{let t=await j.join();t&&(function(e){let n=t.transaction(["chanchats"],"readwrite").objectStore("chanchats");e.forEach((e=>{let t=IDBKeyRange.bound([e],[e,Number.MAX_VALUE]);n.delete(t)}))}(e),function(e){let n=t.transaction(["chats"],"readwrite").objectStore("chats"),a=n.index("chanid");e.forEach((e=>{let t=IDBKeyRange.bound([e],[e,Number.MAX_VALUE]);a.openCursor(t).onsuccess=e=>{var t=e.target.result;t&&(n.delete(t.primaryKey),t.continue())}}))}(e.filter((e=>e>0))))},H=async(e,t)=>{let n=await j.join();n&&(n.transaction([e],"readwrite").objectStore(e).add(t),x.transaction((n=>{let a=Object.keys(t),r=`INSERT OR REPLACE INTO ${e} (${a.join(",")}) VALUES (${Array(a.length).fill("?").join(",")})`;n.executeSql(r,Object.values(t).map((e=>"function"==typeof e?e():e)),k,O)})))},$=async(e,t)=>{let n=await j.join();if(!n)return{value:[],missed:t};if(0===t.length)return{value:[],missed:[]};performance.now();let a=[],r=new Set,i=n.transaction([e],"readonly").objectStore(e),o=0;return new Promise((e=>{t.forEach((n=>{let s=i.get(n);s.onsuccess=i=>{if(s.result?a.push(s.result):r.add(n),++o===t.length){let t={value:a,missed:Array.from(r)};e(t)}}}))}))},F=async(e,t,n,a,r,i,o)=>{let s=await j.join();if(!s)return;performance.now();let l=[],c=s.transaction([e],"readonly"),[u,d]=i?i(c.objectStore(e),t,a,r):[c.objectStore(e),null],f=0;return new Promise((e=>{u.openCursor(d,o).onsuccess=t=>{var a=t.target.result;if(a){if(l.push(a.value),++f===n)return e(l);a.continue()}else e(l)}}))},Y=(e,t,n,a)=>{let r=n?IDBKeyRange.upperBound(n,a):null;if(!t)return[e,r];let i=n||Number.MAX_VALUE;switch(t.tag){case"Chanid":r=IDBKeyRange.bound([t.value],[t.value,i],!1,a)}return[e,r]},V=(e,t,n,a)=>{let r=n?IDBKeyRange.upperBound(n,a):null,i=n||Number.MAX_VALUE;switch(t.tag){case"Chanid":e=e.index("mom"),r=IDBKeyRange.bound([t.value],[t.value,i],!1,a)}return[e,r]},J=async(e,t,n=30,a=!0)=>(await F("chanchats",e,n,t,a,Y,"prev")).map((e=>e.chatid)),X=async(e,t,n)=>{let a=await j.join();if(!a)return;let r=a.transaction(["ranges"],"readwrite").objectStore("ranges"),i=r.get(e);i.onsuccess=async a=>{if(i.result){if(n)return r.put([i.result[0],i.result[1],n],e);t[0]<i.result[0]&&(t[0]=i.result[0]),t[1]>i.result[0]&&(t[1]=i.result[1])}r.put(t,e)}},z=e=>Z(e,"ranges"),G=async e=>{let t=await j.join();if(!t)return;let n=t.transaction(["ranges"],"readwrite").objectStore("ranges");e.forEach((e=>n.delete(e)))},W=e=>Z(e,"session"),Z=async(e,t)=>{let n=await j.join();if(!n)return;let a=n.transaction([t],"readonly").objectStore(t);return new Promise((t=>{let n=a.get(e);n.onsuccess=e=>t(n.result)}))};var Q,ee,te;!function(e){e.Id=function(e){return{tag:"Id",value:e}},e.Chanid=function(e){return{tag:"Chanid",value:e}},e.By=function(e){return{tag:"By",value:e}}}(Q||(Q={})),function(e){e.ChatScan=function(e){return{tag:"ChatScan",value:e}},e.ChanScan=function(e){return{tag:"ChanScan",value:e}},e.AddChat=function(e){return{tag:"AddChat",value:e}},e.AddUser=function(e){return{tag:"AddUser",value:e}},e.Login=function(e){return{tag:"Login",value:e}},e.Logout=function(e){return{tag:"Logout",value:e}},e.Users=function(e){return{tag:"Users",value:e}},e.Chans=function(e){return{tag:"Chans",value:e}},e.Chats=function(e){return{tag:"Chats",value:e}},e.ChanJoin=function(e){return{tag:"ChanJoin",value:e}},e.ChanLeave=function(e){return{tag:"ChanLeave",value:e}}}(ee||(ee={})),function(e){e.ChatScan=function(e){return{tag:"ChatScan",value:e}},e.ChanScan=function(e){return{tag:"ChanScan",value:e}},e.Chats=function(e){return{tag:"Chats",value:e}},e.Chans=function(e){return{tag:"Chans",value:e}},e.Users=function(e){return{tag:"Users",value:e}},e.Chat=function(e){return{tag:"Chat",value:e}},e.Chan=function(e){return{tag:"Chan",value:e}},e.User=function(e){return{tag:"User",value:e}},e.Login=function(e){return{tag:"Login",value:e}},e.ChanJoin=function(e){return{tag:"ChanJoin",value:e}}}(te||(te={}));const ne=(e,t=0,n=!0)=>({pos:t,littleEndian:n,view:new DataView(e)}),ae=(e,t)=>{const{view:{buffer:n},pos:a}=e,r=n.byteLength;if(r-a>t)return e;const i=Math.max(2*r,r+t),o=new Uint8Array(i);return o.set(new Uint8Array(n)),ne(o.buffer,a,e.littleEndian)},re=(e,t)=>{e=ae(e,1);const{view:n,pos:a}=e;return n.setUint8(a,t),e.pos+=1,e},ie=(e,t)=>{e=ae(e,4);const{view:n,pos:a,littleEndian:r}=e;return n.setUint32(a,t,r),e.pos+=4,e};function oe(e,t){const{view:n,pos:a,littleEndian:r}=e;return n.setUint32(r?a:a+4,t,r),n.setUint32(r?a+4:a,0,r),e.pos+=8,e}const se=(e,t)=>{e=ae(e,4);const{view:n,pos:a,littleEndian:r}=e;return n.setInt32(a,t,r),e.pos+=4,e},le=new TextEncoder,ce="encodeInto"in le?(e,t)=>le.encodeInto(e,t).written:(e,t)=>{const n=le.encode(e);return t.set(n),n.length},ue=(e,t)=>{e=ae(e,3*t.length+8);const n=ce(t,new Uint8Array(e.view.buffer,e.pos+8));return(e=oe(e,n)).pos+=n,e},de=e=>(t,n)=>n.reduce(e,((e,t)=>oe(ae(e,8),t))(t,n.length)),fe=e=>(t,n)=>null===n?re(t,0):e(re(t,1),n),he=e=>{const{pos:t,view:n}=e;return e.pos+=1,n.getUint8(t)},pe=e=>{const{pos:t,view:n,littleEndian:a}=e;return e.pos+=4,n.getUint32(t,a)},me=e=>{const{view:t,pos:n,littleEndian:a}=e;return e.pos+=8,t.getUint32(a?n:n+4,a)},we=e=>{const{pos:t,view:n,littleEndian:a}=e;return e.pos+=4,n.getInt32(t,a)},ye=e=>t=>1===he(t)?e(t):null,ge=e=>t=>{const n=me(t),a=new Array;for(let r=0;r<n;r++)a.push(e(t));return a},ve=new TextDecoder,be=e=>{const t=me(e),{pos:n,view:{buffer:a}}=e,r=ve.decode(new Uint8Array(a,n,t));return e.pos+=t,r};var Ce=fe(ue),Ee=de(se),Se=fe((function(e,t){switch(t.tag){case"Id":return se(ie(e,0),t.value);case"Chanid":return se(ie(e,1),t.value);case"By":return se(ie(e,2),t.value)}})),Ae=fe(se),Le=fe(((e,t)=>{e=ae(e,2);const{view:n,pos:a,littleEndian:r}=e;return n.setUint16(a,t,r),e.pos+=2,e})),Te=de(re),Ue=(fe(Ee),function(e,t){var n=t.id,a=t.txt,r=t.by,i=t.re,o=t.nor,s=t.chanid,l=t.dir,c=t.timestamp;return ue(Ee(se(se(se(se(ue(se(e,n),a),r),i),o),s),l),c)}),Ne=(de(Ue),function(e,t){var n=t.id,a=t.name,r=t.fullname,i=t.mom,o=t.by,s=t.dir,l=t.timestamp;return ue(Ee(se(se(ue(ue(se(e,n),a),r),i),o),s),l)}),xe=(de(Ne),de((function(e,t){var n=t.id,a=t.name;return ue(se(e,n),a)})),fe(Ue),fe(Ne),fe((function(e,t){var n=t.id,a=t.name,r=t.email,i=t.emailverified,o=t.fullname,s=t.key,l=t.picture,c=t.timestamp;return ue(Ce(ue(ue(((e,t)=>re(e,t?1:0))(ue(ue(se(e,n),a),r),i),o),s),l),c)})),fe((function(e,t){var n=t.data,a=t.chans;return Ee(Te(e,n),a)})),function(e,t){var n=t.filter,a=t.kw,r=t.ub,i=t.lb,o=t.limit;return Le(Ae(Ae(Ce(Se(e,n),a),r),i),o)}),ke=function(e,t){switch(t.tag){case"ChatScan":return xe(ie(e,0),t.value);case"ChanScan":return xe(ie(e,1),t.value);case"AddChat":return function(e,t){var n=t.txt,a=t.re,r=t.chname;return Ce(Ae(ue(e,n),a),r)}(ie(e,2),t.value);case"AddUser":return function(e,t){var n=t.email,a=t.name,r=t.key;return Te(ue(ue(e,n),a),r)}(ie(e,3),t.value);case"Login":return function(e,t){var n=t.email,a=t.key;return Te(ue(e,n),a)}(ie(e,4),t.value);case"Logout":return Te(ie(e,5),t.value);case"Users":return Ee(ie(e,6),t.value);case"Chans":return Ee(ie(e,7),t.value);case"Chats":return Ee(ie(e,8),t.value);case"ChanJoin":return se(ie(e,9),t.value);case"ChanLeave":return se(ie(e,10),t.value)}},Oe=ye(be),je=ge(we),Ie=(ye((function(e){switch(pe(e)){case 0:return Q.Id(we(e));case 1:return Q.Chanid(we(e));case 2:return Q.By(we(e))}throw new Error("bad variant index for Filter")})),ye(we)),Re=(ye((e=>{const{pos:t,view:n,littleEndian:a}=e;return e.pos+=2,n.getUint16(t,a)})),ge(he)),_e=ye(je),Me=function(e){return{id:we(e),txt:be(e),by:we(e),re:we(e),nor:we(e),chanid:we(e),dir:je(e),timestamp:be(e)}},De=ge(Me),Pe=function(e){return{id:we(e),name:be(e),fullname:be(e),mom:we(e),by:we(e),dir:je(e),timestamp:be(e)}},Be=ge(Pe),Ke=ge((function(e){return{id:we(e),name:be(e)}})),qe=ye(Me),He=ye(Pe),$e=ye((function(e){return{id:we(e),name:be(e),email:be(e),emailverified:(e=>1===he(e))(e),fullname:be(e),key:be(e),picture:Oe(e),timestamp:be(e)}})),Fe=ye((function(e){return{data:Re(e),chans:je(e)}})),Ye=function(e){switch(pe(e)){case 0:return te.ChatScan(_e(e));case 1:return te.ChanScan(_e(e));case 2:return te.Chats(De(e));case 3:return te.Chans(Be(e));case 4:return te.Users(Ke(e));case 5:return te.Chat(qe(e));case 6:return te.Chan(He(e));case 7:return te.User($e(e));case 8:return te.Login(Fe(e));case 9:return te.ChanJoin(Ie(e))}throw new Error("bad variant index for Response")},Ve=ne(new ArrayBuffer(512)),Je=function(e,t){return Ve.pos=0,Ve=t(Ve,e),new Uint8Array(Ve.view.buffer).slice(0,Ve.pos)},Xe=function(e,t){return t(ne(e))},ze=function(e){return Xe(e.buffer,Ye)},Ge=function(e){return Je(e,ke)};const We=e=>new Zlib.Inflate(e).decompress(),Ze=e=>new Zlib.Deflate(e).compress(),Qe=async(e,t,n)=>await crypto.subtle.encrypt({name:"AES-GCM",iv:n},t,e),et=async(e,t,n)=>await crypto.subtle.decrypt({name:"AES-GCM",iv:n},t,e);let tt={},nt=[];function at(e){return this.t&&this.t[e.type](e)}tt.h=(...e)=>{let t,n=a=>{if(null==a);else if("string"==typeof a)t?tt.add(t,a):t=tt.s?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a);else if(Array.isArray(a))t||(t=document.createDocumentFragment()),a.forEach(n);else if(a instanceof Node)t?tt.add(t,a):t=a;else if("object"==typeof a)tt.property(t,a,null,tt.s);else if("function"==typeof a)if(t){let e=tt.add(t,"");tt.insert(t,a,e)}else t=a.apply(null,e.splice(1));else tt.add(t,""+a)};return e.forEach(n),t},tt.insert=(e,t,n,a,r)=>(e=n&&n.parentNode||e,r=r||a instanceof Node&&a,t===a||(a&&"string"!=typeof a||!("string"==typeof t||"number"==typeof t&&(t+=""))?"function"==typeof t?tt.subscribe((()=>{a=tt.insert(e,t.call({el:e,endMark:n}),n,a,r)})):(n?a&&(r||(r=a.o&&a.o.nextSibling||n.previousSibling),tt.rm(e,r,n)):e.textContent="",a=null,t&&!0!==t&&(a=tt.add(e,t,n))):(null!=a&&e.firstChild?n?(n.previousSibling||e.lastChild).data=t:e.firstChild.data=t:n?tt.add(e,t,n):e.textContent=t,a=t)),a),tt.property=(e,t,n,a,r)=>{if(null!=t)if(!n||"attrs"===n&&(a=!0))for(n in t)tt.property(e,t[n],n,a,r);else"o"!==n[0]||"n"!==n[1]||t.$o?"function"==typeof t?tt.subscribe((()=>{tt.property(e,t.call({el:e,name:n}),n,a,r)})):r?e.style.setProperty(n,t):a||"data-"===n.slice(0,5)||"aria-"===n.slice(0,5)?e.setAttribute(n,t):"style"===n?"string"==typeof t?e.style.cssText=t:tt.property(e,t,null,a,!0):("class"===n&&(n+="Name"),e[n]=t):((e,t,n)=>{t=t.slice(2).toLowerCase(),n?e.addEventListener(t,at):e.removeEventListener(t,at),(e.t||(e.t={}))[t]=n})(e,n,t)},tt.add=(e,t,n)=>{let a=(e=>{const{childNodes:t}=e;if(t&&11===e.nodeType)return t.length<2?t[0]:{o:tt.add(e,"",t[0])}})(t=(e=>"string"==typeof e?document.createTextNode(e):e instanceof Node?e:tt.h(nt,e))(t))||t;return e.insertBefore(t,n&&n.parentNode&&n),a},tt.rm=(e,t,n)=>{for(;t&&t!==n;){let n=t.nextSibling;e===t.parentNode&&e.removeChild(t),t=n}},tt.subscribe=function(e){return function(e,t){function n(){let a=u;return u&&u.__c.push(n),p(n),n.i=!0,u=n,t=e(t),u=a,t}function a(){return n.i?u&&n.u.forEach((e=>e())):t=n(),t}e.s=n,m(n),n(),a.$o=1}(e),()=>p(e.s)},tt.cleanup=function(e){return u&&u.l.push(e),e},tt.root=f,tt.sample=function(e){let t=u;u=void 0;let n=e();return u=t,n},tt.hs=(...e)=>{let t=tt.s;tt.s=!0;let n=rt(...e);return tt.s=t,n};let rt=(...e)=>tt.h.apply(tt.h,e);const it=new Map,ot=(e,t,n=!1)=>{let a=it.get(e)||[];n?a=[t]:a.push(t),it.set(e,a)},st=(e,t)=>it.has(e)?it.get(e).forEach((e=>e(t))):void 0,lt={},ct=e=>(e&&(Object.assign(lt,e),st("config",lt)),lt),ut=h(void 0),dt={id:h(0),name:h(""),chans:h([])};async function ft(){let e=await W("a");if(!e||e.byteLength<53)return;let t=new Uint8Array(e,0,16),n=new Uint8Array(e,16,32);t&&16===t.length&&(dt.salt=t),n&&32===n.length&&(dt.sskey=await crypto.subtle.importKey("raw",n,"AES-GCM",!1,["encrypt","decrypt"]));let a=new Uint8Array(e,48,4),r=new Uint8Array(e,52),i=new DataView(a.buffer).getInt32(48,!1),o=(new TextDecoder).decode(r);i&&o&&(dt.id(i),dt.name(o));let s=await W("c");return s&&s instanceof Array&&dt.chans(s),dt.salt}async function ht(e,t){let n=new TextEncoder,a=await pt(n.encode(e),n.encode(t));return await crypto.subtle.exportKey("raw",a)}async function pt(e,t){let n=await crypto.subtle.importKey("raw",e,"PBKDF2",!1,["deriveBits","deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:1e5,hash:"SHA-256"},n,{name:"AES-GCM",length:256},!0,["encrypt","decrypt"])}const mt=document.location.hash.substr(1).match(/^ip\/(?<ip>[\:\.\d]+)$/);let wt="wss://"+(mt?mt.groups.ip:"192.168.100.11:443");window._ws=e=>(e&&("string"==typeof e&&(wt="wss://"+e),It(!0)),wt),window._ws=()=>gt,window._pc=()=>Et,window._dc=()=>Ut;let yt,gt,vt,bt,Ct,Et,St,At,Lt,Tt,Ut,Nt=500,xt=0,kt=new Set,Ot={recv:e=>kt.add(e)};It(),Rt();const jt=N();function It(e){yt=performance.now(),gt=new WebSocket(wt),gt.binaryType="arraybuffer",gt.onopen=()=>{e?Rt():Ct&&Dt()},gt.onmessage=async e=>{let t=new Uint8Array(e.data),{a:n,k:a}=E(t);ct((e=>{const t=new c(e);return{z:t.get(0),m:t.get(1),c:t.get(2),d:t.get(3)}})(n));var r,i,o;a=await(r=a,crypto.subtle.importKey("raw",r,{name:"ECDH",namedCurve:"P-256"},!0,[])),Tt=await(i=bt.privateKey,o=a,crypto.subtle.deriveKey({name:"ECDH",namedCurve:"P-256",public:o},i,{name:"AES-GCM",length:256},!0,["encrypt","decrypt"])),Lt=new Uint8Array(await crypto.subtle.exportKey("raw",Tt));let s=JSON.parse((e=>(new TextDecoder).decode(We(e)))(n.slice(1))),l=s.answer?s.answer:s;if(await Et.setRemoteDescription(new RTCSessionDescription(l)),!s.candidate)return;const u=new RTCIceCandidate({candidate:s.candidate,sdpMid:0,sdpMLineIndex:0});await Et.addIceCandidate(u)},gt.onclose=e=>{xt++,Nt+=L(0,xt<16?200:3e3),setTimeout((()=>{It(!0)}),Nt)},gt.onerror=e=>{}}function Rt(){St=!1,Et=new RTCPeerConnection({iceServers:[{urls:["stun:stun.l.google.com:19302"]}]}),Et.onicecandidate=e=>{e.candidate},Et.onconnectionstatechange=e=>{Et.connectionState},Et.oniceconnectionstatechange=e=>{Et.iceConnectionState},Ut=Et.createDataChannel("cu",{}),Ut.binaryType="arraybuffer",Ot.send=_t,Ut.onopen=e=>{jt.complete(Ut)},Ut.onmessage=Mt,Ut.onclose=e=>{},Ut.onerror=e=>{},async function(){const e=async()=>{let e=await Et.createOffer();return await Et.setLocalDescription(e),Ze((new TextEncoder).encode(Et.localDescription.sdp))},t=async()=>{if(At)return At;bt=await(async()=>await crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!1,["deriveKey"]))();let e=await crypto.subtle.exportKey("raw",bt.publicKey);return At=new Uint8Array(e),At};Ct=await(async(e,t,n)=>{let[a,r,i]=await Promise.all([e(),t(),n()]);return i?C(C(a,r),i):U(C(a,r),64,24)})(e,t,ft),1===gt.readyState&&Dt()}()}async function _t(e){await jt.join(),(e=>{e.length||e.byteLength})(e=Ge(e));let{z:t,m:n,c:a,d:r}=ct();if(t&&(e=Ze(e)),n&&(e=U(e,e.length),b(e,Lt)),a){const t=crypto.getRandomValues(new Uint8Array(12));b(e,t),e=T(t,new Uint8Array(await Qe(e,Tt,t)))}if(r){const t=crypto.getRandomValues(new Uint8Array(12));b(e,t),e=T(t,new Uint8Array(await Qe(e,dt.sskey,t)))}Ut.send(e),vt=performance.now()}async function Mt(e){let t=new Uint8Array(e.data),n=t.length,{z:a,m:r,c:i,d:o}=ct();if(o){let e=t.subarray(0,12);t=new Uint8Array(await et(t.subarray(12),dt.sskey,e)),b(t,e)}if(i){let e=t.subarray(0,12);t=new Uint8Array(await et(t.subarray(12),Tt,e)),b(t,e)}if(r){b(t,Lt);let{a:e}=E(t);t=new Uint8Array(e)}a&&(t=We(t));(100*n/t.length).toFixed(2);let s=Pt(t);kt.forEach((e=>e(s)))}const Dt=()=>{St||(gt.send(Ct),St=!0)},Pt=e=>ze(e);function Bt(e,t,n){const{root:a,subscribe:r,sample:i,cleanup:o}=tt;null==n&&(n=!t.$t);let s=tt.h([]),l=tt.add(s,""),c=new Map,u=new Map,d=new Set;function f(e,r){if(null==e)return;let i=u.get(e);return 1===r?(d.delete(e),i||(i=n?a((n=>(c.set(e,n),t(e.$v||e)))):t(e.$v||e),11===i.nodeType&&(i=(e=>{const{childNodes:t}=e,{length:n}=t;if(n<2)return t[0];let a=Array.from(t);return{nodeType:111,t:a[0],o:a[n-1],l(){if(t.length!==n){let t=0;for(;t<n;)e.appendChild(a[t++])}return e}}})(i)||i),u.set(e,i))):-1===r&&d.add(e),((e,t)=>111===e.nodeType?1/t<0?t?tt.rm(e.t.parentNode,e.t.nextSibling,e.o.nextSibling)||e.t:e.o:t?e.l():e.t:e)(i,r)}function h(e){let t=c.get(e);t&&(t(),c.delete(e)),u.delete(e)}return o(r((t=>{let n=e();return i((()=>{d.clear();let e=Array.from(function(e,t,n,a,r){let i,o,s=new Map,l=new Map;for(i=0;i<t.length;i++)s.set(t[i],i);for(i=0;i<n.length;i++)l.set(n[i],i);for(i=o=0;i!==t.length||o!==n.length;){var c=t[i],u=n[o];if(null===c)i++;else if(n.length<=o)e.removeChild(a(t[i],-1)),i++;else if(t.length<=i)e.insertBefore(a(u,1),a(t[i],0)||r),o++;else if(c===u)i++,o++;else{var d=l.get(c),f=s.get(u);void 0===d?(e.removeChild(a(t[i],-1)),i++):void 0===f?(e.insertBefore(a(u,1),a(t[i],0)||r),o++):(e.insertBefore(a(t[f],1),a(t[i],0)||r),t[f]=null,f>i+1&&i++,o++)}}return n}(l.parentNode,t||[],n,f,l));return d.forEach(h),e}))}))),o((function(){c.forEach((e=>e())),c.clear(),u.clear(),d.clear()})),s}window._b=Ot;const Kt="0VMZYpdgCGL3iKAzDHwocTt97e1hasO2mJNjExq4PvR6XyWSFbIn-5B_8fUukQlr",qt=Kt.split(""),Ht=new Array(123);for(let e=0;e<Kt.length;e++)Ht[Kt.charCodeAt(e)]=e;const $t=e=>{if(e<0)return"-"+$t(-e);let t=e>>>0,n=e/4294967296>>>0,a="";for(;n>0;)a=qt[63&t]+a,t>>>=6,t|=(63&n)<<26,n>>>=6;let r="";do{r=qt[63&t]+r,t>>>=6}while(t>0);return r+a};var Ft={ntob:$t,bton:e=>{let t=0;for(let n=0;n<e.length;n++)t=64*t+Ht[e.charCodeAt(n)];return t}};const Yt=[];function Vt(){!function(e){for(const t of Yt)t(e)}(document.location.hash.substr(1))}window.addEventListener("hashchange",Vt),setTimeout(Vt);const Jt=[0,null,"🏠",0],Xt=(()=>{let e=Jt;const t=h([e]),n=t=>e=t;return{path:t=>e[t],paths:t,len:()=>t().length,setpath:n,same:t=>t===e,cd:e=>{let a=t();a[e[0]]!==e&&(a[e[0]]=e),a.splice(e[0]+1),t(a),n(e),location.hash=e[0]>0?Ft.ntob(e[3]):""},update:e=>{t([Jt,...e]),n(e[e.length-1])}}})(),zt=new Map,Gt=new Map,Wt=new Map,Zt=e=>(t,n)=>{if(!t)return e;let a=e.get(t);return n?a?a[n]:void 0:a},Qt=h([]),en=h([]),tn=h(0),nn=h(0),an=h(0),rn=h(0),on=h(""),sn=h(""),ln=Zt(zt),cn=Zt(Gt),un=Zt(Wt),dn=((...e)=>{const t={},n={};return{create:e=>n[e]=new Promise((n=>t[e]=n)),complete:(e,n)=>t[e]?t[e](n):null,join:e=>n[e],joinall:()=>Promise.all(e.map((e=>n[e]))),select:()=>Promise.race(e.map((e=>n[e])))}})("users","chans");Ot.recv((async e=>{switch(e.tag){case"Login":if(!e.value)return ut(void 0),void st("login",!1);await async function({data:e,chans:t}){let n=new Uint8Array(e.slice(16,20)),a=new Uint8Array(e.slice(20)),r=new DataView(n.buffer).getInt32(0,!1),i=(new TextDecoder).decode(a);dt.id(r),dt.name(i),dt.chans(t),dt.salt=new Uint8Array(e.slice(0,16)),dt.sskey=await pt(ut(),dt.salt),ut(void 0);let o=new Uint8Array(await crypto.subtle.exportKey("raw",dt.sskey)),s=dt.salt.length,l=new Uint8Array(s+o.length+n.length+a.length);l.set(dt.salt),l.set(o,s),l.set(n,s+o.length),l.set(a,s+o.length+n.length),P("a",l.buffer),ct({d:!0}),P("c",t),H("users",{id:r,name:i})}(e.value),st("login",!0);break;case"Users":K("users",e.value),dn.complete("users",e.value);break;case"Chans":K("chans",e.value),dn.complete("chans",e.value);break;case"Chat":let t=en();if(t.includes(e.value.id))return;let n=window.scrollY+window.innerHeight===document.body.scrollHeight;await H("chats",e.value);let a=new Set(un().has(e.value.by)?[]:[e.value.by]),r=e.value.dir.filter((e=>!ln(e))),i=new Set(r);await mn(a,i),e.value.nor=h(0),e.value.star=h(!1),cn().set(e.value.id,e.value),t.push(e.value.id),en(t),n&&y();break;case"Chats":if(0===e.value.length)return;K("chats",e.value),dn.complete("chats",e.value);break;case"ChatScan":let o=e.value,s=tn();if(!o||0===o.length)return void X(s,null,!0);X(s,[o[0],o[o.length-1]]);let l=o.map((e=>({chanid:s,chatid:e})));K("chanchats",l),dn.complete("chats",o);break;case"ChanScan":let c=e.value||[];0!==c.length||sn()?await yn(c):st("nochan");let u=dt.chans();c.sort(((e,t)=>u.includes(t)?1:u.includes(e)?-1:0)),dn.complete("chanscan",c);break;case"ChanJoin":dn.complete("chanjoin",e.value)}}));const fn="/"+Kt;(e=>{Yt.push(e)})((async e=>{if(!e||!fn.includes(e[0]))return tn(0),wn([]),document.title="sonic",An(),void(document.getElementsByClassName("tbl").length>0&&En(0));if("/"===e[0]){let t=Ft.bton(e.slice(1));nn(t),await pn([t]),An();let n=cn(t).dir;return await yn(n),wn(n),void(document.title=ln(tn(),"fullname")+" - sonic")}let t=Ft.bton(e);tn(t),An(),await yn([t]);let n=ln(t).dir;await yn(n),wn([...n,t]),document.getElementsByClassName("tbl").length>0&&En(Xt.path(3)),document.title=ln(tn(),"fullname")+" - sonic"}));const hn=async(e,t=null)=>{await pn(e);let n=e[0],a=new Set,r=new Set,i=en(),o=new Set;switch(e.forEach((e=>{let t=cn(e);t.nor=h(t.nor),t.star=h(!1),"string"==typeof t.timestamp&&(t.timestamp=new Date(t.timestamp)),un().has(t.by)||a.add(t.by),t.dir.forEach((e=>{ln().has(e)||r.add(e)})),o.has(e),o.add(e)})),o=new Set,i.forEach((e=>{o.has(e),o.add(e)})),await mn(a,r),e.reverse(),t){case"re":en(e);break;case"pre":en(i.concat(e));break;default:en(e.concat(i))}o=new Set,en().forEach((e=>{o.has(e),o.add(e)})),n&&st("reload",n)},pn=async e=>{if(0===(e=e.filter((e=>!cn().has(e)))).length)return;let{value:t,missed:n}=await $("chats",e);if(w(t,cn()),n.length>0){let e=await dn.create("chats",Ot.send(ee.Chats(n)));w(e,cn())}},mn=async(e,t)=>{let n=await $("users",Array.from(e)),a=await $("chans",Array.from(t));w(n.value,un()),w(a.value,ln()),n.missed.length>0&&dn.create("users",Ot.send(ee.Users(n.missed))),a.missed.length>0&&dn.create("chans",Ot.send(ee.Chans(a.missed)));let[r,i]=await dn.joinall();r&&w(r,un()),i&&w(i,ln())},wn=e=>{let t=e.map(((e,t)=>{let n=ln(e)||{};return[t+1,n.mom,n.name,e]}));Xt.update(t)},yn=async e=>{if(0===(e=e.filter((e=>!ln().has(e)))).length)return;let{value:t,missed:n}=await $("chans",e);if(w(t,ln()),n.length>0){let e=await dn.create("chans",Ot.send(ee.Chans(n)));w(e,ln())}};let gn=null;const vn=(e,t=null,n=null,a=null,r=null)=>{t&&sn(t);let i=ee.ChanScan({filter:Cn(e),kw:t,ub:n,lb:a,limit:r});Ot.send(i)},bn=async e=>{performance.now();let t=Cn(e),n=(await((e,t=30,n,a)=>F("chans",e,t,n,a,V,"prev"))(t)).map((e=>(ln().set(e.id,e),e.id)));Qt(n);let a=await dn.create("chanscan",vn(e));Qt(a)},Cn=e=>(gn=e,"number"==typeof e?Q.Chanid(e):null),En=async e=>{gn!==e&&bn(e)},Sn=(e=null,t=null,n=null)=>{let a=ee.ChatScan({filter:nn()>0?Q.Id(nn()):tn()>0?Q.Chanid(tn()):dt.id()>0?Q.By(dt.id()):null,kw:null,ub:e,lb:t,limit:n});Ot.send(a)};async function An(){rn(!1),an(0);let e=tn();performance.now();let t=(await z(e)||[])[0]||null,n=await J(Q.Chanid(e),null,30);await hn(n,"re"),rn(!0);let a=await dn.create("chats",Sn(null,t))||[];await hn(a,30===a.length||0===n.length?"re":"pre")}window._chn=()=>Array.from(zt.values()),window._ch=()=>Array.from(Gt.values()),window._us=()=>Array.from(Wt.values()),window._chns=()=>Qt().map((e=>zt.get(e))),window._chs=()=>en().map((e=>Gt.get(e))),window._chnid=tn,window._chid=nn,window._curid=an,window._curtxt=on,window._chnkw=sn;const Ln=()=>{const e=document.createElement("div");e.contentEditable=!0,e.className="s-c",e.oninput=({target:{firstChild:t}})=>{var n,a,r,i;(n=function(){let t=e.textContent;t.length>50||(async e=>{let t=Xt.path(3);performance.now();let n=await dn.create("chanscan",vn(t,e));Qt(n)})(t)},a=100,function(){var e=this,t=arguments,o=function(){i=null,r||n.apply(e,t)},s=r&&!i;clearTimeout(i),i=setTimeout(o,a),s&&n.apply(e,t)})()},e.onkeydown=e=>{"Enter"!==e.key||e.shiftKey||e.preventDefault()};const t=(e,t)=>{if(e.stopPropagation(),!dt.id())return alert("you are not login!");dt.chans().includes(t)?(async e=>{performance.now();let t=await dn.create("chanjoin",Ot.send(ee.ChanLeave(e)));if(!t)return;let n=dt.chans();if(!n.includes(t))return;const a=n.indexOf(t);a>-1&&n.splice(a,1),dt.chans(n),await P("c",n),await G([0,e]),await q([0,e]),An()})(t):(async e=>{performance.now();let t=await dn.create("chanjoin",Ot.send(ee.ChanJoin(e)));if(!t)return;let n=dt.chans();n.includes(t)||(n.push(t),dt.chans(n),await P("c",n),await G([0]),await q([0]),An())})(t)};return rt([rt("div",{class:"s"},e),rt("div",{class:"tbl"},rt("table",null,rt("tbody",null,Bt(Qt,(e=>{let n=ln(e);return rt("tr",{onclick:()=>(async({id:e,mom:t,name:n})=>{await bn(e),Xt.cd([Xt.path(0)+1,t,n,e])})(n)},rt("td",null,"#"),rt("td",null,n.name),rt("td",null,n.fullname),rt("td",null,rt("button",{onclick:n=>t(n,e)},(()=>dt.chans().includes(e)?"✅":"➕"))))}))))),rt("div",{class:"grid"},rt("div",{class:"container"},rt("ol",{class:"bc"},rt("li",null,rt("a",{href:"#"},"#")," ",rt("a",{href:"#"},"rust")),rt("li",{class:"active relative drop-container"},rt("a",null,"general"),rt("div",{class:"drop"},rt("ul",{class:"list"},rt("li",null,rt("a",{href:"#"},"security")),rt("li",null,rt("a",{href:"#"},"random")),rt("li",null,rt("a",{href:"#"},"backend")),rt("li",null,rt("a",{href:"#"},"compiler")),rt("li",null,rt("a",{href:"#"},"gamedev"))))))))])};var Tn={date:"1/5/2021, 6:41:33 AM",build:"882f769",ver:"0.0.31"};async function Un(){await Ot.send(ee.Logout(Array.from(dt.salt))),await B(),ct({d:!1}),dt.id(0),dt.name(""),dt.chans([]),dt.sskey=void 0,dt.salt=void 0,An()}ot("config",(({d:e})=>On(e?kn:xn)));const Nn=()=>rt("div",{class:"login"},rt(v(On),null),rt("div",{class:"v"},Tn.ver," ",Tn.build)),xn=()=>rt([rt("h2",null,"Login"),rt("form",{onsubmit:function(e){e.preventDefault();let{m:t,p:n}=e.target;!async function(e,t){performance.now(),await B();let n=await ht(t,e),a={email:e,key:Array.from(new Uint8Array(n))};ut(n),Ot.send(ee.Login(a)),ot("login",(e=>{e&&An()}),!0)}(t.value,n.value)}},rt("input",{type:"text",name:"m",placeholder:"email",required:!0,autocomplete:"true"}),rt("input",{type:"password",name:"p",placeholder:"password",required:!0,autocomplete:"true"}),rt("button",{type:"submit"},"Login")),rt("h2",null,"Register"),rt("form",{onsubmit:function(e){e.preventDefault();let{m:t,n:n,p:a}=e.target;!async function(e,t,n){performance.now(),await B();let a=await ht(n,e),r={email:e,name:t,key:Array.from(new Uint8Array(a))};ut(a),Ot.send(ee.AddUser(r)),ot("login",(e=>{e&&An()}),!0)}(t.value,n.value,a.value)}},rt("input",{type:"text",name:"m",placeholder:"email",required:!0,autocomplete:"true"}),rt("input",{type:"text",name:"n",placeholder:"name",required:!0,autocomplete:"true"}),rt("input",{type:"password",name:"p",placeholder:"password",required:!0,autocomplete:"true"}),rt("button",{type:"submit"},"Register"))]),kn=()=>rt([rt("div",null,"You have logged in as ",rt("b",null,dt.name)),rt("button",{onclick:()=>{Un()}},"Logout")]),On=h((()=>null));window._v=()=>Tn;const jn="defaultParagraphSeparator",In="formatBlock",Rn=(e,t,n)=>e.addEventListener(t,n),_n=(e,t)=>e.appendChild(t),Mn=e=>document.createElement(e),Dn=e=>document.queryCommandState(e),Pn=(e,t=null)=>document.execCommand(e,!1,t),Bn={bold:{icon:"<b>B</b>",title:"Bold",state:()=>Dn("bold"),result:()=>Pn("bold")},italic:{icon:"<i>I</i>",title:"Italic",state:()=>Dn("italic"),result:()=>Pn("italic")},underline:{icon:"<u>U</u>",title:"Underline",state:()=>Dn("underline"),result:()=>Pn("underline")},strikethrough:{icon:"<strike>S</strike>",title:"Strike-through",state:()=>Dn("strikeThrough"),result:()=>Pn("strikeThrough")},heading1:{icon:"<b>H1</b>",title:"Heading 1",result:()=>Pn(In,"<h1>")},heading2:{icon:"<b>H2</b>",title:"Heading 2",result:()=>Pn(In,"<h2>")},quote:{icon:"&#8220;&#8221;",title:"Quote",result:()=>Pn(In,"<blockquote>")},olist:{icon:"1.",title:"Ordered List",result:()=>Pn("insertOrderedList")},ulist:{icon:"&#8226;",title:"Unordered List",result:()=>Pn("insertUnorderedList")},code:{icon:"&lt;&gt;",title:"Code",result:()=>Pn(In,"<pre>")},line:{icon:"&#8213;",title:"Horizontal Line",result:()=>Pn("insertHorizontalRule")},link:{icon:"&#128279;",title:"Link",result:()=>{const e=window.prompt("Enter the link URL");e&&Pn("createLink",e)}},image:{icon:"&#128247;",title:"Image",result:()=>{const e=window.prompt("Enter the image URL");e&&Pn("insertImage",e)}}},Kn={actionbar:"e-a",button:"e-b",content:"e-c",selected:"e-bs",topic:"e-t"},qn=({topic:e,content:t})=>{if(!dt.id())return alert("you are not login!");if(!t.textContent.trim())return;let n=an()||en()[en().length-1],a=null;if(!n||e.textContent!==on()){if(a=e.textContent,0===a.trim().length)return alert("topic should not be empty"),!1;n=null}let r=t.innerHTML.trim();Ot.send(ee.AddChat({txt:r,re:n,chname:a})),t.textContent="",Hn({},{topic:e})},Hn=({id:e,txt:t},{topic:n})=>{if(!e||an()===e)return n.textContent="",on(""),void an(0);n.innerHTML=t,n.textContent=n.textContent,on(n.textContent),an(e)};ot("reload",(e=>{window.scrollY<100&&setTimeout((()=>document.getElementById(Ft.ntob(e)).scrollIntoView()))}));const $n=()=>{const e=(e=>{const t=e.actions?e.actions.map((e=>"string"==typeof e?Bn[e]:Bn[e.name]?{...Bn[e.name],...e}:e)):Object.keys(Bn).map((e=>Bn[e])),n={...Kn,...e.classes},a=e.defaultParagraphSeparator||"div",r=e.element.topic=Mn("div");r.contentEditable=!0,r.className=n.topic,r.onkeydown=e=>{"Enter"===e.key&&(i.focus(),e.preventDefault())},_n(e.element,r);const i=e.element.content=Mn("div");i.contentEditable=!0,i.className=n.content,i.onfocus=()=>{let t=window.scrollY+window.innerHeight===document.body.scrollHeight;e.element.classList.add("sticky"),t&&setTimeout((()=>y()))},i.onblur=()=>{setTimeout((()=>{e.element.contains(document.activeElement)||e.element.classList.remove("sticky")}))},i.oninput=({target:{firstChild:t}})=>{e.oninput(i.innerHTML)},i.onkeydown=t=>{"Enter"!==t.key||t.shiftKey||(e.onsend({topic:r,content:i}),t.preventDefault())},_n(e.element,i);const o=Mn("div");return o.className=n.actionbar,_n(e.element,o),t.forEach((e=>{const t=Mn("button");if(t.className=n.button,t.innerHTML=e.icon,t.title=e.title,t.setAttribute("type","button"),t.onclick=()=>e.result()&&i.focus(),e.state){const a=()=>t.classList[e.state()?"add":"remove"](n.selected);Rn(i,"keyup",a),Rn(i,"mouseup",a),Rn(t,"click",a)}_n(o,t)})),e.styleWithCSS&&Pn("styleWithCSS"),Pn(jn,a),e.element})({element:rt("div",{class:"e"}),oninput:e=>{},onsend:qn}),t=e=>{let{id:t,txt:r,by:o,chanid:s,re:l,star:c,nor:u}=e,d=en(),f=ln(s),h=[...f.dir.slice(Xt.len()-1)],p=d[d.indexOf(t)-1],m=cn(p)||{},w=m.by!==o,y=!l||h.length>0&&m.chanid!==s,g=Ft.ntob(t),v=Ft.ntob(f.id);const b=()=>{n("#/"+g,g)},C=(e,t)=>{n("#"+t,t),e.preventDefault()};return rt("div",{id:g,class:function(){return"c"+(()=>(c()?" star":"")+(y?" t":"")+(an()===t?" cur":"")).call(this)},onclick:t=>a(t,e)},y?rt("div",{class:"tn"+(l?" re":" nw")},rt("a",{href:function(){return"#"+("function"==typeof v?v.call(this):v)},onclick:e=>C(e,v),innerHTML:ln(f.id,"fullname")}),rt("div",{class:"dr"},h.map((e=>{let t=Ft.ntob(e);return rt("span",null,rt("a",{href:function(){return"#"+("function"==typeof t?t.call(this):t)},onclick:e=>C(e,t),innerHTML:ln(e,"fullname")}))})))):null,w||y?rt("div",{class:"by"},un(o).name):null,rt("div",{onclick:e=>e.stopPropagation()},(()=>{let e=u();if(1!==e||t!==cn(en()[i+1]).re)return e>0?rt([rt("span",{class:"rep",onclick:b},e," 💬")," "]):void 0}),(e=>document.createRange().createContextualFragment(e))(r)))},n=(e,t)=>{let n=screen.width/2-300,a=screen.height/2-300;window.open(e,t,`toolbar=yes,location=yes,status=no,menubar=yes,scrollbars=yes,resizable=yes,width=600,height=600,top=${a}, left=${n}`)},a=(e,t)=>{e.x<18&&e.offsetY<22&&r(t)},r=({id:e,star:t})=>{const n=en().filter((t=>t===e))[0],a=cn(n);a.star?a.star(!t()):a.star=h(!1)},o=rt("div",null);return setTimeout((function(){new IntersectionObserver((e=>{if(e[0].intersectionRatio<=0||!rn())return;let t=en()[0];!t||t<=1||setTimeout((()=>(async e=>{let t=tn();performance.now();let n=await z(t)||[];if(n[2]&&e===n[1])return;let a=await J(Q.Chanid(t),e,30);if(n[2]||30===a.length)return void await hn(a);let r=await dn.create("chats",Sn(e));r.length>0&&await hn(r)})(t)))}),{}).observe(o)})),rt([o,rt("div",null,Bt(en,(e=>t(cn(e))))),e])},Fn=()=>{},Yn=h(Fn);document.querySelector(".a").append((()=>{ot("nochan",(()=>Yn(Fn)));return rt([rt("div",{class:"n"},rt("div",null,rt("ol",{class:"bc"},(()=>Bt(Xt.paths,(e=>rt("li",null,rt("a",{onclick:t=>(e=>{Yn()!==Ln?e[0]===Xt.len()-1?Yn(Ln):Xt.cd(e):Xt.same(e)&&Yn(Fn),Xt.setpath(e),Yn()===Ln&&En(e[3])})(e)},e[2])))))),rt("div",{class:"m"},rt("a",{onclick:e=>{Yn()===Nn?Yn(Fn):Yn(Nn)}},(()=>dt.name()||"login")))),rt(v(Yn),null)),$n])})())}();
