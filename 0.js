!function(){"use strict";var e,t,n,r,o;!function(e){e.None=function(e){return{tag:"None",value:e}},e.Id=function(e){return{tag:"Id",value:e}},e.TopicId=function(e){return{tag:"TopicId",value:e}},e.ChannelId=function(e){return{tag:"ChannelId",value:e}},e.GroupId=function(e){return{tag:"GroupId",value:e}},e.By=function(e){return{tag:"By",value:e}}}(e||(e={})),function(e){e.Id=function(e){return{tag:"Id",value:e}},e.Email=function(e){return{tag:"Email",value:e}},e.Handle=function(e){return{tag:"Handle",value:e}}}(t||(t={})),function(e){e.Id=function(e){return{tag:"Id",value:e}},e.Handle=function(e){return{tag:"Handle",value:e}}}(n||(n={})),function(e){e.Id=function(e){return{tag:"Id",value:e}},e.Handle=function(e){return{tag:"Handle",value:e}}}(r||(r={})),function(e){e.Id=function(e){return{tag:"Id",value:e}}}(o||(o={}));var a,i;!function(e){e.User=function(e){return{tag:"User",value:e}},e.Users=function(e){return{tag:"Users",value:e}},e.Group=function(e){return{tag:"Group",value:e}},e.Groups=function(e){return{tag:"Groups",value:e}},e.Channel=function(e){return{tag:"Channel",value:e}},e.Channels=function(e){return{tag:"Channels",value:e}},e.Topic=function(e){return{tag:"Topic",value:e}},e.Topics=function(e){return{tag:"Topics",value:e}},e.Chats=function(e){return{tag:"Chats",value:e}},e.AddChat=function(e){return{tag:"AddChat",value:e}},e.AddUser=function(e){return{tag:"AddUser",value:e}},e.Login=function(e){return{tag:"Login",value:e}}}(a||(a={})),function(e){e.User=function(e){return{tag:"User",value:e}},e.Users=function(e){return{tag:"Users",value:e}},e.Group=function(e){return{tag:"Group",value:e}},e.Groups=function(e){return{tag:"Groups",value:e}},e.Channel=function(e){return{tag:"Channel",value:e}},e.Channels=function(e){return{tag:"Channels",value:e}},e.Topic=function(e){return{tag:"Topic",value:e}},e.Topics=function(e){return{tag:"Topics",value:e}},e.Chats=function(e){return{tag:"Chats",value:e}},e.Chat=function(e){return{tag:"Chat",value:e}},e.Login=function(e){return{tag:"Login",value:e}}}(i||(i={}));const l=(e,t=0,n=!0)=>({pos:t,littleEndian:n,view:new DataView(e)}),c=(e,t)=>{const{view:{buffer:n},pos:r}=e,o=n.byteLength;if(o-r>t)return e;const a=Math.max(2*o,o+t),i=new Uint8Array(a);return i.set(new Uint8Array(n)),l(i.buffer,r,e.littleEndian)},s=(e,t)=>{e=c(e,1);const{view:n,pos:r}=e;return n.setUint8(r,t),e.pos+=1,e},u=(e,t)=>{e=c(e,4);const{view:n,pos:r,littleEndian:o}=e;return n.setUint32(r,t,o),e.pos+=4,e},d=(e,t)=>{e=c(e,2);const{view:n,pos:r,littleEndian:o}=e;return n.setUint16(r,t,o),e.pos+=2,e};function p(e,t){const{view:n,pos:r,littleEndian:o}=e;return n.setUint32(o?r:r+4,t,o),n.setUint32(o?r+4:r,0,o),e.pos+=8,e}const f=(e,t)=>{e=c(e,4);const{view:n,pos:r,littleEndian:o}=e;return n.setInt32(r,t,o),e.pos+=4,e},g=new TextEncoder,h="encodeInto"in g?(e,t)=>g.encodeInto(e,t).written:(e,t)=>{const n=g.encode(e);return t.set(n),n.length},y=(e,t)=>{e=c(e,3*t.length+8);const n=h(t,new Uint8Array(e.view.buffer,e.pos+8));return(e=p(e,n)).pos+=n,e},m=(e,t)=>s(e,t?1:0),v=e=>(t,n)=>n.reduce(e,((e,t)=>p(c(e,8),t))(t,n.length)),w=e=>(t,n)=>null===n?s(t,0):e(s(t,1),n),b=e=>{const{pos:t,view:n}=e;return e.pos+=1,n.getUint8(t)},A=e=>{const{pos:t,view:n,littleEndian:r}=e;return e.pos+=4,n.getUint32(t,r)},C=e=>{const{view:t,pos:n,littleEndian:r}=e;return e.pos+=8,t.getUint32(r?n:n+4,r)},I=e=>{const{pos:t,view:n,littleEndian:r}=e;return e.pos+=4,n.getInt32(t,r)},k=e=>1===b(e),E=e=>t=>1===b(t)?e(t):null,U=e=>t=>{const n=C(t),r=new Array;for(let o=0;o<n;o++)r.push(e(t));return r},x=new TextDecoder,T=e=>{const t=C(e),{pos:n,view:{buffer:r}}=e,o=x.decode(new Uint8Array(r,n,t));return e.pos+=t,o};var S=w(y),L=w(m),$=y,_=w($),H=function(e,t){var n=t.id,r=t.txt,o=t.by,a=t.re,i=t.nor,l=t.topicId,c=t.channelId,s=t.groupId,u=t.createdAt,d=t.updatedAt;return $($(f(f(f(f(f(f(y(f(e,n),r),o),a),i),l),c),s),u),d)},N=(v(H),v((function(e,t){var n=t.k,r=t.v;return y(f(e,n),r)})),v(s)),M=function(e,t){var n=t.id,r=t.handle,o=t.email,a=t.emailVerified,i=t.name,l=t.key,c=t.picture,s=t.gender,u=t.lastLogin,d=t.createdAt,p=t.updatedAt;return $($(_(L(S(y(y(m(y(y(f(e,n),r),o),a),i),l),c),s),u),d),p)},D=(v(M),function(e,t){var n=t.id,r=t.name,o=t.handle,a=t.by,i=t.createdAt,l=t.updatedAt;return $($(f(y(y(f(e,n),r),o),a),i),l)}),O=(v(D),function(e,t){var n=t.id,r=t.name,o=t.handle,a=t.groupId,i=t.by,l=t.createdAt,c=t.updatedAt;return $($(f(f(y(y(f(e,n),r),o),a),i),l),c)}),G=(v(O),function(e,t){var n=t.id,r=t.name,o=t.groupId,a=t.channelId,i=t.by,l=t.createdAt,c=t.updatedAt;return $($(f(f(f(y(f(e,n),r),o),a),i),l),c)}),P=(v(G),function(e,t){var n=t.filter,r=t.last,o=t.limit;return d(f(function(e,t){switch(t.tag){case"None":return m(u(e,0),t.value);case"Id":return f(u(e,1),t.value);case"TopicId":return f(u(e,2),t.value);case"ChannelId":return f(u(e,3),t.value);case"GroupId":return f(u(e,4),t.value);case"By":return f(u(e,5),t.value)}}(e,n),r),o)}),B=function(e,t){switch(t.tag){case"User":return function(e,t){switch(t.tag){case"Id":return f(u(e,0),t.value);case"Email":return y(u(e,1),t.value);case"Handle":return y(u(e,2),t.value)}}(u(e,0),t.value);case"Users":return function(e,t){var n=t.name,r=t.email,o=t.handle,a=t.limit,i=t.page;return d(d(y(y(y(e,n),r),o),a),i)}(u(e,1),t.value);case"Group":return function(e,t){switch(t.tag){case"Id":return f(u(e,0),t.value);case"Handle":return y(u(e,1),t.value)}}(u(e,2),t.value);case"Groups":return function(e,t){var n=t.name,r=t.handle,o=t.by,a=t.limit,i=t.page;return d(d(f(y(y(e,n),r),o),a),i)}(u(e,3),t.value);case"Channel":return function(e,t){switch(t.tag){case"Id":return f(u(e,0),t.value);case"Handle":return y(u(e,1),t.value)}}(u(e,4),t.value);case"Channels":return function(e,t){var n=t.name,r=t.handle,o=t.group_id,a=t.by,i=t.limit,l=t.page;return d(d(f(f(y(y(e,n),r),o),a),i),l)}(u(e,5),t.value);case"Topic":return function(e,t){switch(t.tag){case"Id":return f(u(e,0),t.value)}}(u(e,6),t.value);case"Topics":return function(e,t){var n=t.name,r=t.group_id,o=t.channel_id,a=t.by,i=t.limit,l=t.page;return d(d(f(f(f(y(e,n),r),o),a),i),l)}(u(e,7),t.value);case"Chats":return P(u(e,8),t.value);case"AddChat":return H(u(e,9),t.value);case"AddUser":return function(e,t){var n=t.email,r=t.handle,o=t.key;return N(y(y(e,n),r),o)}(u(e,10),t.value);case"Login":return function(e,t){var n=t.email,r=t.key;return N(y(e,n),r)}(u(e,11),t.value)}},R=E(T),K=E(k),j=T,q=E(j),F=function(e){return{id:I(e),txt:T(e),by:I(e),re:I(e),nor:I(e),topicId:I(e),channelId:I(e),groupId:I(e),createdAt:j(e),updatedAt:j(e)}},Y=U(F),V=U((function(e){return{k:I(e),v:T(e)}})),z=U(b),W=function(e){return{id:I(e),handle:T(e),email:T(e),emailVerified:k(e),name:T(e),key:T(e),picture:R(e),gender:K(e),lastLogin:q(e),createdAt:j(e),updatedAt:j(e)}},J=U(W),Z=function(e){return{id:I(e),name:T(e),handle:T(e),by:I(e),createdAt:j(e),updatedAt:j(e)}},Q=U(Z),X=function(e){return{id:I(e),name:T(e),handle:T(e),groupId:I(e),by:I(e),createdAt:j(e),updatedAt:j(e)}},ee=U(X),te=function(e){return{id:I(e),name:T(e),groupId:I(e),channelId:I(e),by:I(e),createdAt:j(e),updatedAt:j(e)}},ne=U(te),re=function(e){switch(A(e)){case 0:return i.User(W(e));case 1:return i.Users(J(e));case 2:return i.Group(Z(e));case 3:return i.Groups(Q(e));case 4:return i.Channel(X(e));case 5:return i.Channels(ee(e));case 6:return i.Topic(te(e));case 7:return i.Topics(ne(e));case 8:return i.Chats(function(e){return t=Y(e),n=V(e),r=V(e),[t,n,r];var t,n,r}(e));case 9:return i.Chat(F(e));case 10:return i.Login(z(e))}throw new Error("bad variant index for Response")},oe=l(new ArrayBuffer(512)),ae=function(e,t){return oe.pos=0,oe=t(oe,e),new Uint8Array(oe.view.buffer).slice(0,oe.pos)},ie=function(e,t){return t(l(e))},le=function(e){return ie(e.buffer,re)},ce=function(e){return ae(e,B)};const se=e=>new Zlib.Inflate(e).decompress(),ue=e=>new Zlib.Deflate(e).compress(),de=[];function pe(e){let t={};return function(){const n=de.slice.call(arguments),r=n.map((e=>{if(he(e)||Array.isArray(e)){let t={};for(let n in e)t[n]=ge(e[n]);return t}return ge(e)})),o=JSON.stringify(r);let a=t[o];return void 0===a&&(a=e.apply(this,n),a&&11===a.nodeType&&(a=de.slice.call(a.childNodes)),t[o]=a),a}}let fe=0;function ge(e){return"function"==typeof e||e instanceof Node?(e.$m||(e.$m=++fe),{$m:e.$m}):e}function he(e){if("object"!=typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function ye(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var me,ve,we=ye((function(e,t){function n(e){var t=e>>3;return e%8!=0&&t++,t}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){void 0===e&&(e=0);var r=null==t?void 0:t.grow;this.grow=r&&isFinite(r)&&n(r)||r||0,this.buffer="number"==typeof e?new Uint8Array(n(e)):e}return e.prototype.get=function(e){var t=e>>3;return t<this.buffer.length&&!!(this.buffer[t]&128>>e%8)},e.prototype.set=function(e,t){void 0===t&&(t=!0);var n=e>>3;if(t){if(this.buffer.length<n+1){var r=Math.max(n+1,Math.min(2*this.buffer.length,this.grow));if(r<=this.grow){var o=new Uint8Array(r);o.set(this.buffer),this.buffer=o}}this.buffer[n]|=128>>e%8}else n<this.buffer.length&&(this.buffer[n]&=~(128>>e%8))},e.prototype.forEach=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=8*this.buffer.length);for(var r=t,o=r>>3,a=128>>r%8,i=this.buffer[o];r<n;r++)e(!!(i&a),r),a=1===a?(i=this.buffer[++o],128):a>>1},e}();t.default=r}(ve={path:me,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&ve.path)}},ve.exports),ve.exports));let be,Ae=[];function Ce(e){let t=be,n=()=>{};be=n,Ee(n);let r=e((()=>{ke(n),be=void 0}));return be=t,r}function Ie(e){function t(n){if(0===arguments.length)return be&&!t.__o.has(be)&&(t.__o.add(be),be.u.push(t)),e;e=n;let r=be;return be=void 0,t.o=new Set(t.__o),t.o.forEach((e=>e.i=!1)),t.o.forEach((e=>{e.i||e()})),be=r,e}return t.$o=1,t.__o=new Set,t.t=Ae,t}function ke(e){e.__c.forEach(ke),e.u.forEach((t=>{t.__o.delete(e),t.o&&t.o.delete(e)})),e.l.forEach((e=>e())),Ee(e)}function Ee(e){e.u=[],e.__c=[],e.l=[]}const Ue=()=>window.scrollTo(0,document.body.scrollHeight),xe=pe((e=>pe(((t,n)=>Ce((()=>e(t,n))))))),Te=e=>(t,...n)=>()=>xe(e())(t,n),Se=e=>{console.log("Length",e instanceof ArrayBuffer?new Uint8Array(e).length:e.length,"bytes"),console.log((Object(e).buffer instanceof ArrayBuffer?e:"string"==typeof e?new TextEncoder("utf-8").encode(e):new Uint8ClampedArray(e)).reduce(((e,t,n,r)=>e+(n%16==0?n.toString(16).padStart(6,0)+"  ":" ")+t.toString(16).padStart(2,0)+(n===r.length-1||n%16==15?" ".repeat(3*(15-n%16))+Array.from(r).splice(n-n%16,16).reduce(((e,t)=>e+(t>31&&t<127||t>159?String.fromCharCode(t):".")),"  ")+"\n":"")),""))},Le=(e,t)=>{let n=0,r=0;for(;n<e.length;)r>=t.length&&(r=0),e.set([e[n]^t[r]],n),n++,r++},$e=(e,t)=>(Le(e,t),Ne(e,t)),_e=e=>{let{a:t,k:n}=He(e);return Le(t,n),{a:t,k:n}},He=e=>{let t=e[0],n=e.subarray(1,t+1);return{a:e.subarray(t+1),k:n}},Ne=(e,t)=>{let n=new Uint8Array(1+t.length+e.length);return n[0]=t.length,n.set(t,1),n.set(e,1+t.length),n},Me=(e,t)=>(e=Math.ceil(e),Math.floor(Math.random()*(Math.floor(t)-e)+e)),De=(e,t)=>{let n=new Uint8Array(e.length+t.length);return n.set(e,0),n.set(t,e.length),n},Oe=e=>(performance.now()-e).toFixed(2),Ge=(e,t=64,n=8)=>$e(e,crypto.getRandomValues(new Uint8Array(Me(n,t)))),Pe=e=>{try{return new Uint8Array((e=>{const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let t=0,r=e.length;t<r;t++)n[t]=e.charCodeAt(t);return t})(atob(e)))}catch(e){console.log(e)}},Be=async(e,t,n)=>(console.log("[sec] encrypting data"),await crypto.subtle.encrypt({name:"AES-GCM",iv:n},t,e)),Re=async(e,t,n)=>(console.log("[sec] decrypting data"),await crypto.subtle.decrypt({name:"AES-GCM",iv:n},t,e)),Ke={};let je;!async function(){let e=localStorage.getItem("a");Ke.salt=Pe(e),Ke.salt&&Ke.salt.length>32&&(Ke.salt=null);const t=Pe(localStorage.getItem("s"));t&&32==t.length&&(console.log(e),Se(t),Ke.sskey=await crypto.subtle.importKey("raw",t,"AES-GCM",!1,["encrypt","decrypt"]))}();const qe=async(e,t)=>{Se(t),je.transaction(["sonic"],"readwrite").objectStore("sonic").put(t,e),caches.open("sonic").then((function(n){n.put(e,new Response(t))}));const n=(r=t,btoa(String.fromCharCode.apply(null,new Uint8Array(r))));var r;localStorage.setItem(e,n),console.log(n)};let Fe=indexedDB.open("sonic",1);async function Ye(e,t){let n=new TextEncoder,r=await Ve(n.encode(e),n.encode(t));return await crypto.subtle.exportKey("raw",r)}async function Ve(e,t){let n=await crypto.subtle.importKey("raw",e,"PBKDF2",!1,["deriveBits","deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:1e5,hash:"SHA-256"},n,{name:"AES-GCM",length:256},!0,["encrypt","decrypt"])}Fe.onsuccess=function(e){je=e.target.result,console.log("[db] opened")},Fe.onupgradeneeded=function(e){je=e.target.result;je.createObjectStore("sonic");console.log("[db] setup complete")};const ze=document.location.hash.substr(1).match(/^ip\/(?<ip>[\:\.\d]+)$/),We="wss://"+(ze?ze.groups.ip:"192.168.1.3:443");let Je,Ze,Qe,Xe,et,tt,nt,rt,ot,at,it,lt=500,ct=0,st={ready:!1},ut=0,dt=1;console.group("[ws]","starting..."),function e(t){Je=performance.now(),Ze=new WebSocket(We),Ze.binaryType="arraybuffer",Ze.onopen=()=>{console.log(`[ws] open in ${Oe(Je)} ms`),console.groupEnd("[ws]"),console.group("[dc]","opening..."),t?ft():et&&yt()},Ze.onmessage=async e=>{console.log(`[ws] <- received answer in ${Oe(Je)} ms`);let t=new Uint8Array(e.data),{a:n,k:r}=_e(t);var o,a,i;pt=(e=>{const t=new we(e);return{z:t.get(0),m:t.get(1),c:t.get(2),d:t.get(3)}})(n),console.log(pt),st.onconfig&&st.onconfig(pt),r=await(o=r,crypto.subtle.importKey("raw",o,{name:"ECDH",namedCurve:"P-256"},!0,[])),at=await(a=Xe.privateKey,i=r,crypto.subtle.deriveKey({name:"ECDH",namedCurve:"P-256",public:i},a,{name:"AES-GCM",length:256},!0,["encrypt","decrypt"])),ot=new Uint8Array(await crypto.subtle.exportKey("raw",at));let l=JSON.parse((e=>(new TextDecoder).decode(se(e)))(n.slice(1))),c=l.answer?l.answer:l;if(await tt.setRemoteDescription(new RTCSessionDescription(c)),!l.candidate)return;const s=new RTCIceCandidate({candidate:l.candidate,sdpMid:0,sdpMLineIndex:0});await tt.addIceCandidate(s)},Ze.onclose=t=>{ct++,lt+=Me(0,ct<16?200:3e3),console.log("[ws] closed",t),console.groupEnd("[ws]"),console.groupEnd("[ws]"),console.groupCollapsed("[ws]",`retry ${ct} in ${(lt/1e3).toFixed(2)} sec`),setTimeout((()=>{e(!0)}),lt)},Ze.onerror=e=>{console.log("[ws] error",e)}}(),ft();var pt={};function ft(){nt=!1,function(){tt=new RTCPeerConnection({iceServers:[{urls:["stun:stun.l.google.com:19302"]}]});let e=dt++;tt.onicecandidate=e=>{e.candidate},tt.onconnectionstatechange=t=>{switch(tt.connectionState){case"failed":case"disconnected":console.log("[peer]",e,"restarting....")}},tt.oniceconnectionstatechange=e=>{switch(tt.iceConnectionState){case"disconnected":console.log("[ice] restarting....")}}}(),it=tt.createDataChannel("cu",{ordered:!1,maxRetransmits:0}),it.binaryType="arraybuffer",ut=0,st.send=gt,it.onopen=e=>{console.log(`[dc] open in ${Oe(Je)} ms`),console.groupEnd("[dc]"),ut=0,st.ready=!0,st.open&&st.open(e)},it.onmessage=ht,it.onclose=e=>{console.log("[dc] close",e)},it.onerror=e=>{console.log("[dc] error:",e)},async function(){const e=async()=>{let e=await tt.createOffer();return await tt.setLocalDescription(e),ue((new TextEncoder).encode(tt.localDescription.sdp))},t=async()=>{if(rt)return rt;Xe=await(async()=>(console.log("[sec] generating key pairs"),await crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!1,["deriveKey"])))();let e=await crypto.subtle.exportKey("raw",Xe.publicKey);return rt=new Uint8Array(e),rt};et=await(async(e,t,n)=>{let[r,o]=await Promise.all([e(),t()]);return n?$e($e(r,o),n):Ge($e(r,o),64,24)})(e,t,Ke.salt),console.log(`[dc] sdp in ${Oe(Je)} ms`),1===Ze.readyState&&yt()}()}async function gt(e){if(ut++,console.groupEnd("[dc]"),console.group("[dc]","-> sending packet",ut,e),e=ce(e),Se(e),pt.z&&(e=ue(e)),pt.m&&(e=Ge(e,e.length),Le(e,ot)),pt.c){const t=crypto.getRandomValues(new Uint8Array(12));Le(e,t),e=De(t,new Uint8Array(await Be(e,at,t)))}if(pt.d){const t=crypto.getRandomValues(new Uint8Array(12));Le(e,t),e=De(t,new Uint8Array(await Be(e,Ke.sskey,t)))}Se(e),it.send(e),Qe=performance.now()}async function ht(e){let t=new Uint8Array(e.data),n=t.length;if(pt.d){let e=t.subarray(0,12);t=new Uint8Array(await Re(t.subarray(12),Ke.sskey,e)),Le(t,e)}if(pt.c){let e=t.subarray(0,12);t=new Uint8Array(await Re(t.subarray(12),at,e)),Le(t,e)}if(pt.m){Le(t,ot);let{a:e}=_e(t);t=new Uint8Array(e)}pt.z&&(t=se(t));let r=(100*n/t.length).toFixed(2);console.log(`[dc] <- received ${n} / ${t.length} byte ${r}% in ${Oe(Qe)} ms`);let o=mt(t);st.recv&&st.recv(o),console.groupEnd("[dc]")}const yt=()=>{nt||(console.log("[ws] -> sending offer"),Ze.send(et),nt=!0)},mt=e=>{let t=le(e);return console.log(t),console.table(t.value),t};let vt={},wt=[];function bt(e){return this.t&&this.t[e.type](e)}vt.h=(...e)=>{let t,n=r=>{if(null==r);else if("string"==typeof r)t?vt.add(t,r):t=vt.s?document.createElementNS("http://www.w3.org/2000/svg",r):document.createElement(r);else if(Array.isArray(r))t||(t=document.createDocumentFragment()),r.forEach(n);else if(r instanceof Node)t?vt.add(t,r):t=r;else if("object"==typeof r)vt.property(t,r,null,vt.s);else if("function"==typeof r)if(t){let e=vt.add(t,"");vt.insert(t,r,e)}else t=r.apply(null,e.splice(1));else vt.add(t,""+r)};return e.forEach(n),t},vt.insert=(e,t,n,r,o)=>(e=n&&n.parentNode||e,o=o||r instanceof Node&&r,t===r||(r&&"string"!=typeof r||!("string"==typeof t||"number"==typeof t&&(t+=""))?"function"==typeof t?vt.subscribe((()=>{r=vt.insert(e,t.call({el:e,endMark:n}),n,r,o)})):(n?r&&(o||(o=r.o&&r.o.nextSibling||n.previousSibling),vt.rm(e,o,n)):e.textContent="",r=null,t&&!0!==t&&(r=vt.add(e,t,n))):(null!=r&&e.firstChild?n?(n.previousSibling||e.lastChild).data=t:e.firstChild.data=t:n?vt.add(e,t,n):e.textContent=t,r=t)),r),vt.property=(e,t,n,r,o)=>{if(null!=t)if(!n||"attrs"===n&&(r=!0))for(n in t)vt.property(e,t[n],n,r,o);else"o"!==n[0]||"n"!==n[1]||t.$o?"function"==typeof t?vt.subscribe((()=>{vt.property(e,t.call({el:e,name:n}),n,r,o)})):o?e.style.setProperty(n,t):r||"data-"===n.slice(0,5)||"aria-"===n.slice(0,5)?e.setAttribute(n,t):"style"===n?"string"==typeof t?e.style.cssText=t:vt.property(e,t,null,r,!0):("class"===n&&(n+="Name"),e[n]=t):((e,t,n)=>{t=t.slice(2).toLowerCase(),n?e.addEventListener(t,bt):e.removeEventListener(t,bt),(e.t||(e.t={}))[t]=n})(e,n,t)},vt.add=(e,t,n)=>{let r=(e=>{const{childNodes:t}=e;if(t&&11===e.nodeType)return t.length<2?t[0]:{o:vt.add(e,"",t[0])}})(t=(e=>"string"==typeof e?document.createTextNode(e):e instanceof Node?e:vt.h(wt,e))(t))||t;return e.insertBefore(t,n&&n.parentNode&&n),r},vt.rm=(e,t,n)=>{for(;t&&t!==n;){let n=t.nextSibling;e===t.parentNode&&e.removeChild(t),t=n}},vt.subscribe=function(e){return function(e,t){function n(){let r=be;return be&&be.__c.push(n),ke(n),n.i=!0,be=n,t=e(t),be=r,t}function r(){return n.i?be&&n.u.forEach((e=>e())):t=n(),t}e.s=n,Ee(n),n(),r.$o=1}(e),()=>ke(e.s)},vt.cleanup=function(e){return be&&be.l.push(e),e},vt.root=Ce,vt.sample=function(e){let t=be;be=void 0;let n=e();return be=t,n},vt.hs=(...e)=>{let t=vt.s;vt.s=!0;let n=At(...e);return vt.s=t,n};let At=(...e)=>vt.h.apply(vt.h,e);function Ct(e,t,n){const{root:r,subscribe:o,sample:a,cleanup:i}=vt;null==n&&(n=!t.$t);let l=vt.h([]),c=vt.add(l,""),s=new Map,u=new Map,d=new Set;function p(e,o){if(null==e)return;let a=u.get(e);return 1===o?(d.delete(e),a||(a=n?r((n=>(s.set(e,n),t(e.$v||e)))):t(e.$v||e),11===a.nodeType&&(a=(e=>{const{childNodes:t}=e,{length:n}=t;if(n<2)return t[0];let r=Array.from(t);return{nodeType:111,t:r[0],o:r[n-1],l(){if(t.length!==n){let t=0;for(;t<n;)e.appendChild(r[t++])}return e}}})(a)||a),u.set(e,a))):-1===o&&d.add(e),((e,t)=>111===e.nodeType?1/t<0?t?vt.rm(e.t.parentNode,e.t.nextSibling,e.o.nextSibling)||e.t:e.o:t?e.l():e.t:e)(a,o)}function f(e){let t=s.get(e);t&&(t(),s.delete(e)),u.delete(e)}return i(o((t=>{let n=e();return a((()=>{d.clear();let e=Array.from(function(e,t,n,r,o){let a,i,l=new Map,c=new Map;for(a=0;a<t.length;a++)l.set(t[a],a);for(a=0;a<n.length;a++)c.set(n[a],a);for(a=i=0;a!==t.length||i!==n.length;){var s=t[a],u=n[i];if(null===s)a++;else if(n.length<=i)e.removeChild(r(t[a],-1)),a++;else if(t.length<=a)e.insertBefore(r(u,1),r(t[a],0)||o),i++;else if(s===u)a++,i++;else{var d=c.get(s),p=l.get(u);void 0===d?(e.removeChild(r(t[a],-1)),a++):void 0===p?(e.insertBefore(r(u,1),r(t[a],0)||o),i++):(e.insertBefore(r(t[p],1),r(t[a],0)||o),t[p]=null,p>a+1&&a++,i++)}}return n}(c.parentNode,t||[],n,p,c));return d.forEach(f),e}))}))),i((function(){s.forEach((e=>e())),s.clear(),u.clear(),d.clear()})),l}const It=()=>Ut()===kt?Ut(Et):Ut(kt),kt=({items:e,keys:t},...n)=>At([At("table",null,At("thead",null,At("tr",null,Ct(t,(e=>At("th",{scope:"col"},e))))),At("tbody",null,Ct(e,(e=>At("tr",{onclick:t=>location.hash="#channels/"+e.id},Ct(t,(t=>At("td",null,At("span",null,t)," ",e[t])))))))),n]),Et=({items:e},...t)=>At([At("ul",null,Ct(e,(e=>At("li",{id:e.id},e.name)))),t]),Ut=Ie(kt);const xt=({group_id:e})=>{let t=Ie([]),n=0;st.recv=e=>{let r=e.value;if(Array.isArray(r))return 0==r.length?n--:t(r);let o=t();o.unshift(r),t(o)};const r=t=>a.Channels({name:"",handle:"",group_id:e,by:0,limit:30,page:t}),o=e=>{n++,st.send(r(n))};return st.open=e=>o(),st.ready&&o(),At([At("button",{onclick:e=>{n--,n<1&&(n=1),st.send(r(n))}},"Prev Item"),At("button",{onclick:o},"Next Item"),At("button",{onclick:e=>{n=0;let t=setInterval((function(){300==n?clearInterval(t):o()}),1)}},"Run Load"),At("button",{onclick:Tt},"Switch Component"),At("h2",null,"Channels"),At(Te($t),{items:t,keys:()=>Object.keys(t()[0]||{})})])},Tt=()=>$t()===St?$t(Lt):$t(St),St=({items:e,keys:t},...n)=>At([At("table",null,At("thead",null,At("tr",null,Ct(t,(e=>At("th",{scope:"col"},e))))),At("tbody",null,Ct(e,(e=>At("tr",{onclick:t=>location.hash="#topics/"+e.id},Ct(t,(t=>At("td",null,At("span",null,t)," ",e[t])))))))),n]),Lt=({items:e},...t)=>At([At("ul",null,Ct(e,(e=>At("li",{id:e.id},e.name)))),t]),$t=Ie(St);const _t=({channel_id:e})=>{let t=Ie([]),n=0;st.recv=e=>{let r=e.value;if(Array.isArray(r))return 0==r.length?n--:t(r);let o=t();o.unshift(r),t(o)};const r=t=>a.Topics({name:"",group_id:0,channel_id:e,by:0,limit:30,page:t}),o=e=>{n++,st.send(r(n))};return st.open=e=>o(),st.ready&&o(),At([At("button",{onclick:e=>{n--,n<1&&(n=1),st.send(r(n))}},"Prev Item"),At("button",{onclick:o},"Next Item"),At("button",{onclick:e=>{n=0;let t=setInterval((function(){300==n?clearInterval(t):o()}),1)}},"Run Load"),At("button",{onclick:Ht},"Switch Component"),At("h2",null,"Topics"),At(Te(Dt),{items:t,keys:()=>Object.keys(t()[0]||{})})])},Ht=()=>Dt()===Nt?Dt(Mt):Dt(Nt),Nt=({items:e,keys:t},...n)=>At([At("table",null,At("thead",null,At("tr",null,Ct(t,(e=>At("th",{scope:"col"},e))))),At("tbody",null,Ct(e,(e=>At("tr",null,Ct(t,(t=>At("td",null,At("span",null,t)," ",e[t])))))))),n]),Mt=({items:e},...t)=>At([At("ul",null,Ct(e,(e=>At("li",{id:e.id},e.name)))),t]),Dt=Ie(Nt),Ot="defaultParagraphSeparator",Gt="formatBlock",Pt=(e,t,n)=>e.addEventListener(t,n),Bt=(e,t)=>e.appendChild(t),Rt=e=>document.createElement(e),Kt=e=>document.queryCommandState(e),jt=(e,t=null)=>document.execCommand(e,!1,t),qt={bold:{icon:"<b>B</b>",title:"Bold",state:()=>Kt("bold"),result:()=>jt("bold")},italic:{icon:"<i>I</i>",title:"Italic",state:()=>Kt("italic"),result:()=>jt("italic")},underline:{icon:"<u>U</u>",title:"Underline",state:()=>Kt("underline"),result:()=>jt("underline")},strikethrough:{icon:"<strike>S</strike>",title:"Strike-through",state:()=>Kt("strikeThrough"),result:()=>jt("strikeThrough")},heading1:{icon:"<b>H1</b>",title:"Heading 1",result:()=>jt(Gt,"<h1>")},heading2:{icon:"<b>H2</b>",title:"Heading 2",result:()=>jt(Gt,"<h2>")},quote:{icon:"&#8220;&#8221;",title:"Quote",result:()=>jt(Gt,"<blockquote>")},olist:{icon:"1.",title:"Ordered List",result:()=>jt("insertOrderedList")},ulist:{icon:"&#8226;",title:"Unordered List",result:()=>jt("insertUnorderedList")},code:{icon:"&lt;&gt;",title:"Code",result:()=>jt(Gt,"<pre>")},line:{icon:"&#8213;",title:"Horizontal Line",result:()=>jt("insertHorizontalRule")},link:{icon:"&#128279;",title:"Link",result:()=>{const e=window.prompt("Enter the link URL");e&&jt("createLink",e)}},image:{icon:"&#128247;",title:"Image",result:()=>{const e=window.prompt("Enter the image URL");e&&jt("insertImage",e)}}},Ft={actionbar:"pell-actionbar",button:"pell-button",content:"pell-content",selected:"pell-button-selected",topic:"pell-topic"},Yt=e=>e.reduce(((e,t)=>(e[t.k]=t.v,e)),{}),Vt=({topic_id:t,chat_id:n})=>{let r,o,i=Ie([]),l={},c=Ie(0),s=0,u="";st.recv=e=>{switch(e.tag){case"Chat":let n=window.scrollY+window.innerHeight===document.body.scrollHeight,a=i();e.value.nor=Ie(0),e.value.star=Ie(!1),e.value.i=a.length,l[e.value.id]=e.value,a.push(e.value.id),i(a),n&&Ue();break;case"Chats":let c=e.value[0],s=c[0]?c[0].id:0;r=Yt(e.value[1]),o=Yt(e.value[2]);let u=i();i(c.reverse().map(((e,t)=>(e.nor=Ie(e.nor),e.star=Ie(!1),e.i=t,e.createdAt=new Date(e.createdAt),e.updatedAt=new Date(e.updatedAt),l[e.id]=e,e.id))).concat(u)),t&&(document.title=o[t]),window.scrollY<100&&setTimeout((()=>document.getElementById(s).scrollIntoView()))}};const d=()=>{let r=a.Chats({filter:t>0?e.TopicId(t):n>0?e.Id(n):e.None(!0),last:i()[0]||99999,limit:30});st.send(r)};st.ready||(st.open=e=>{st.open=void 0,setTimeout((()=>d()))}),setTimeout((function(){new IntersectionObserver((e=>{e[0].intersectionRatio<=0||st.ready&&setTimeout((()=>d()))}),{}).observe(v)}));const p=(e=>{const t=e.actions?e.actions.map((e=>"string"==typeof e?qt[e]:qt[e.name]?{...qt[e.name],...e}:e)):Object.keys(qt).map((e=>qt[e])),n={...Ft,...e.classes},r=e.defaultParagraphSeparator||"div",o=e.element.topic=Rt("div");o.contentEditable=!0,o.className=n.topic,o.onkeydown=e=>{"Enter"===e.key&&(a.focus(),e.preventDefault())},Bt(e.element,o);const a=e.element.content=Rt("div");a.contentEditable=!0,a.className=n.content,a.onfocus=()=>{let t=window.scrollY+window.innerHeight===document.body.scrollHeight;e.element.classList.add("sticky"),t&&setTimeout((()=>Ue()))},a.onblur=()=>{setTimeout((()=>{e.element.contains(document.activeElement)||e.element.classList.remove("sticky")}))},a.oninput=({target:{firstChild:t}})=>{e.onchange(a.innerHTML)},a.onkeydown=t=>{"Enter"!==t.key||t.shiftKey||(e.onsend(),t.preventDefault())},Bt(e.element,a);const i=Rt("div");return i.className=n.actionbar,Bt(e.element,i),t.forEach((e=>{const t=Rt("button");if(t.className=n.button,t.innerHTML=e.icon,t.title=e.title,t.setAttribute("type","button"),t.onclick=()=>e.result()&&a.focus(),e.state){const r=()=>t.classList[e.state()?"add":"remove"](n.selected);Pt(a,"keyup",r),Pt(a,"mouseup",r),Pt(t,"click",r)}Bt(i,t)})),e.styleWithCSS&&jt("styleWithCSS"),jt(Ot,r),e.element})({element:At("div",{class:"pell"}),onchange:e=>{},onsend:()=>{if(!p.content.textContent.trim())return;let e=c()||s,{topicId:t,channelId:n,groupId:r}=l[e];p.topic.textContent!==u&&(e=0,t=Object.keys(o).length+1,o[t]=p.topic.textContent);let i=p.content.innerHTML.trim(),d=(new Date).toISOString();st.send(a.AddChat({id:0,txt:i,by:1,re:e,nor:0,topicId:t,channelId:n,groupId:r,createdAt:d,updatedAt:d})),p.content.textContent="",f({})}});p.content.innerHTML="";const f=({id:e,txt:t})=>{if(!e||c()===e)return p.topic.textContent="",u="",void c(0);p.topic.innerHTML=t,p.topic.textContent=p.topic.textContent,u=p.topic.textContent,c(e)},g=e=>{let{id:n,txt:a,by:u,topicId:d,re:p,star:f,nor:g,i:m}=e,v=l[s]||{},w=v.by!==u,b=v.topicId!==d;s=n;let A=o[d];const C=()=>{h("#reps/"+n,n)};return At("div",{id:n,class:function(){return"chat"+(()=>(f()?" star":"")+(b?" topic":"")+(c()===n?" cur":"")).call(this)},onclick:t=>y(t,e)},b?At("div",{class:"topic-name"+(p?" re":" new")+(t?" head":"")},At("a",{href:function(){return"#chats/"+("function"==typeof d?d.call(this):d)},onclick:e=>(h("#chats/"+d,A),e.preventDefault(),!1),innerHTML:A})):null,w||b?At("div",{class:"by"},r[u]):null,At("div",{onclick:e=>e.stopPropagation()},(()=>{let e=g();if(1!==e||n!==l[i()[m+1]].re)return e>0?At([At("span",{class:"rep",onclick:C},e," 💬")," "]):void 0}),(e=>document.createRange().createContextualFragment(e))(a)))},h=(e,t)=>{let n=screen.width/2-300,r=screen.height/2-300;window.open(e,t,`toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=600,top=${r}, left=${n}`)},y=(e,t)=>{e.x<18&&e.offsetY<22&&m(t),e.x+28>e.target.offsetWidth&&e.offsetY<22&&f(t)},m=({id:e,star:t})=>{const n=i().filter((t=>t===e))[0],r=l[n];r.star?r.star(!t()):r.star=Ie(!1)},v=At("div",{class:"sentinel"});return At([v,At("div",{class:"topics"},Ct(i,(e=>g(l[e])))),p])};var zt;st.onconfig=e=>{e.d?Zt(Jt):Zt(Wt)};const Wt=()=>(st.recv=async e=>{switch(e.tag){case"Login":if(e.value.length<16)return void console.warn("login failed");Ke.salt=new Uint8Array(e.value),Ke.sskey=await Ve(zt,Ke.salt);let t=await crypto.subtle.exportKey("raw",Ke.sskey);qe("a",Ke.salt.buffer),qe("s",t),pt.d=!0,Zt(Jt)}},At("div",{class:"login"},At("h2",null,"Login"),At("form",{onsubmit:async function(e){e.preventDefault();let t=e.target,n=t.email.value;zt=await Ye(t.password.value,n);let r={email:n,key:Array.from(new Uint8Array(zt))};st.send(a.Login(r)),console.log(r)}},At("input",{type:"text",name:"email",placeholder:"email",required:!0,autocomplete:"true"}),At("input",{type:"password",name:"password",placeholder:"password",required:!0,autocomplete:"true"}),At("button",{type:"submit"},"Login")),At("h2",null,"Register"),At("form",{onsubmit:async function(e){e.preventDefault();let t=e.target,n=t.email.value,r=t.username.value;zt=await Ye(t.password.value,n);let o={email:n,handle:r,key:Array.from(new Uint8Array(zt))};st.send(a.AddUser(o)),console.log(o)}},At("input",{type:"text",name:"email",placeholder:"email",required:!0,autocomplete:"true"}),At("input",{type:"text",name:"username",placeholder:"username",required:!0,autocomplete:"true"}),At("input",{type:"password",name:"password",placeholder:"password",required:!0,autocomplete:"true"}),At("button",{type:"submit"},"Register")))),Jt=()=>At("div",null,"You have logged in"),Zt=Ie((()=>null)),Qt=(e,t)=>({pattern:e,view:t}),Xt=["channels","topics","groups","login"],en=[Qt(/^$/,Vt),Qt(/^groups$/,(()=>{let e=Ie([]),t=0;st.recv=n=>{let r=n.value;if(Array.isArray(r))return 0==r.length?t--:e(r);let o=e();o.unshift(r),e(o)};const n=e=>a.Groups({name:"",handle:"",by:0,limit:30,page:e}),r=e=>{t++,st.send(n(t))};return st.open=e=>r(),st.ready&&r(),At([At("button",{onclick:e=>{t--,t<1&&(t=1),st.send(n(t))}},"Prev Item"),At("button",{onclick:r},"Next Item"),At("button",{onclick:e=>{t=0;let n=setInterval((function(){300==t?clearInterval(n):r()}),1)}},"Run Load"),At("button",{onclick:It},"Switch Component"),At("h2",null,"Groups"),At(Te(Ut),{items:e,keys:()=>Object.keys(e()[0]||{})})])})),Qt(/^channels$/,xt),Qt(/^topics$/,_t),Qt(/^login$/,(()=>At(Te(Zt),null))),Qt(/^channels\/(?<group_id>\d+)$/,xt),Qt(/^topics\/(?<channel_id>\d+)$/,_t),Qt(/^chats\/(?<topic_id>\d+)$/,Vt),Qt(/^reps\/(?<chat_id>\d+)$/,Vt),Qt(/^products\/(?<id>\d+)$/,(({id:e})=>At("h2",null,"Product ",e))),Qt(/^users\/(?<name>\w+)$/,(({name:e})=>At("h2",null,e,"'s Profile"))),Qt(/^ip\/(?<ip>[\.\d]+)$/,Vt)],tn=Ie("");const nn=()=>tn(document.location.hash.substr(1));window.addEventListener("hashchange",nn),nn();let rn=!1,on=window.pageYOffset;window.onscroll=function(e){rn||(window.requestAnimationFrame((function(){!function(e){let t=window.scrollY+window.innerHeight===document.body.scrollHeight,n=window.pageYOffset;document.getElementById("nav").style.top=on>n||t?"0":"-50px",on=n}(),rn=!1})),rn=!0)},document.querySelector(".app").append(At([At("div",{id:"nav"},At("a",{href:"#",class:"nav-item"},"home"),(()=>Xt.map((e=>At("a",{href:"#"+e,class:"nav-item "+(tn()===e?"is-active":"")},e))))),At("div",{class:"container"},(()=>function(e){for(const{pattern:t,view:n}of en){const r=e.match(t);if(r)return n({...r.groups})}}(tn())))]))}();
