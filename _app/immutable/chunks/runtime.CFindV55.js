var Fn=Array.isArray,Qt=Array.prototype.indexOf,Ln=Array.from,Yn=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,Xt=Object.getOwnPropertyDescriptors,Mn=Object.prototype,jn=Array.prototype,tn=Object.getPrototypeOf;const Un=()=>{};function Bn(t){return t()}function Et(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,mt=4,W=8,ot=16,m=32,z=64,rt=128,D=256,H=512,y=1024,R=2048,J=4096,N=8192,q=16384,nn=32768,Tt=65536,Hn=1<<17,rn=1<<19,gt=1<<20,ht=Symbol("$state"),Vn=Symbol("legacy props"),Gn=Symbol("");function kt(t){return t===this.v}function en(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!en(t,this.v)}function ln(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function sn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function an(t){throw new Error("https://svelte.dev/e/effect_orphan")}function un(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function $n(){throw new Error("https://svelte.dev/e/hydration_failed")}function Kn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Zn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Wn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function on(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function fn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Q=!1;function zn(){Q=!0}const Jn=1,Qn=2,Xn=4,tr=8,nr=16,rr=1,er=2,_n="[",cn="[!",vn="]",xt={},lr=Symbol();function it(t,n){var r={f:0,v:t,reactions:null,equals:kt,rv:0,wv:0};return r}function sr(t){return Rt(it(t))}function pn(t,n=!1){var e;const r=it(t);return n||(r.equals=At),Q&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function ar(t,n=!1){return Rt(pn(t,n))}function Rt(t){return o!==null&&o.f&w&&(E===null?Dn([t]):E.push(t)),t}function ur(t,n){return o!==null&&ct()&&o.f&(w|ot)&&(E===null||!E.includes(t))&&fn(),hn(t,n)}function hn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=$t(),St(t,R),ct()&&u!==null&&u.f&y&&!(u.f&m)&&(h!==null&&h.includes(t)?(g(u,R),nt(u)):k===null?On([t]):k.push(t))),n}function St(t,n){var r=t.reactions;if(r!==null)for(var e=ct(),l=r.length,s=0;s<l;s++){var a=r[s],i=a.f;i&R||!e&&a===u||(g(a,n),i&(y|D)&&(i&w?St(a,J):nt(a)))}}function Dt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let b=!1;function or(t){b=t}let T;function P(t){if(t===null)throw Dt(),xt;return T=t}function ir(){return P(C(T))}function fr(t){if(b){if(C(T)!==null)throw Dt(),xt;T=t}}function _r(){for(var t=0,n=T;;){if(n.nodeType===8){var r=n.data;if(r===vn){if(t===0)return n;t-=1}else(r===_n||r===cn)&&(t+=1)}var e=C(n);n.remove(),n=e}}var dt,dn,Ot,It;function cr(){if(dt===void 0){dt=window,dn=document;var t=Element.prototype,n=Node.prototype;Ot=pt(n,"firstChild").get,It=pt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function et(t=""){return document.createTextNode(t)}function lt(t){return Ot.call(t)}function C(t){return It.call(t)}function vr(t,n){if(!b)return lt(t);var r=lt(T);if(r===null)r=T.appendChild(et());else if(n&&r.nodeType!==3){var e=et();return r==null||r.before(e),P(e),e}return P(r),r}function pr(t,n){if(!b){var r=lt(t);return r instanceof Comment&&r.data===""?C(r):r}return T}function hr(t,n=1,r=!1){let e=b?T:t;for(var l;n--;)l=e,e=C(e);if(!b)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=et();return e===null?l==null||l.after(a):e.before(a),P(a),a}return P(e),e}function dr(t){t.textContent=""}function yn(t){var n=w|R;u===null?n|=D:u.f|=gt;var r=o!==null&&o.f&w?o:null;const e={children:null,ctx:f,deps:null,equals:kt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function yr(t){const n=yn(t);return n.equals=At,n}function Nt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&w?ft(e):S(e)}}}function wn(t){for(var n=t.parent;n!==null;){if(!(n.f&w))return n;n=n.parent}return null}function bt(t){var n,r=u;K(wn(t));try{Nt(t),n=Kt(t)}finally{K(r)}return n}function qt(t){var n=bt(t),r=(x||t.f&D)&&t.deps!==null?J:y;g(t,r),t.equals(n)||(t.v=n,t.wv=$t())}function ft(t){Nt(t),Y(t,0),g(t,q),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ct(t){u===null&&o===null&&an(),o!==null&&o.f&D&&sn(),_t&&ln()}function En(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function M(t,n,r,e=!0){var l=(t&z)!==0,s=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var i=O;try{yt(!0),tt(a),a.f|=nn}catch(c){throw S(a),c}finally{yt(i)}}else n!==null&&nt(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&gt)===0;if(!_&&!l&&e&&(s!==null&&En(a,s),o!==null&&o.f&w)){var p=o;(p.children??(p.children=[])).push(a)}return a}function wr(t){Ct();var n=u!==null&&(u.f&m)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Pt(t);return e}}function Er(t){return Ct(),mn(t)}function mr(t){const n=M(z,t,!0);return(r={})=>new Promise(e=>{r.outro?kn(n,()=>{S(n),e(void 0)}):(S(n),e(void 0))})}function Pt(t){return M(mt,t,!1)}function mn(t){return M(W,t,!0)}function Tr(t){return Tn(t)}function Tn(t,n=0){return M(W|ot|n,t,!0)}function gr(t,n=!0){return M(W|m,t,!0,n)}function Ft(t){var n=t.teardown;if(n!==null){const r=_t,e=o;wt(!0),$(null);try{n.call(null)}finally{wt(r),$(e)}}}function Lt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ft(n[r])}}function Yt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;S(r,n),r=e}}function gn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&m||S(n),n=r}}function S(t,n=!0){var r=!1;if((n||t.f&rn)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:C(e);e.remove(),e=s}r=!0}Yt(t,n&&!r),Lt(t),Y(t,0),g(t,q);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();Ft(t);var i=t.parent;i!==null&&i.first!==null&&Mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Mt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function kn(t,n){var r=[];jt(t,r,!0),An(r,()=>{S(t),n&&n()})}function An(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function jt(t,n,r){if(!(t.f&N)){if(t.f^=N,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&Tt)!==0||(e.f&m)!==0;jt(e,n,s?r:!1),e=l}}}function kr(t){Ut(t,!0)}function Ut(t,n){if(t.f&N){j(t)&&tt(t),t.f^=N;for(var r=t.first;r!==null;){var e=r.next,l=(r.f&Tt)!==0||(r.f&m)!==0;Ut(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}const xn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let V=!1,G=!1,st=[],at=[];function Bt(){V=!1;const t=st.slice();st=[],Et(t)}function Ht(){G=!1;const t=at.slice();at=[],Et(t)}function Ar(t){V||(V=!0,queueMicrotask(Bt)),st.push(t)}function xr(t){G||(G=!0,xn(Ht)),at.push(t)}function Rn(){V&&Bt(),G&&Ht()}const Vt=0,Sn=1;let U=!1,B=Vt,F=!1,L=null,O=!1,_t=!1;function yt(t){O=t}function wt(t){_t=t}let A=[],I=0;let o=null;function $(t){o=t}let u=null;function K(t){u=t}let E=null;function Dn(t){E=t}let h=null,d=0,k=null;function On(t){k=t}let Gt=1,Z=0,x=!1,f=null;function $t(){return++Gt}function ct(){return!Q||f!==null&&f.l===null}function j(t){var p;var n=t.f;if(n&R)return!0;if(n&J){var r=t.deps,e=(n&D)!==0;if(r!==null){var l,s,a=(n&H)!==0,i=e&&u!==null&&!x,_=r.length;if(a||i){for(l=0;l<_;l++)s=r[l],(a||!((p=s==null?void 0:s.reactions)!=null&&p.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=H)}for(l=0;l<_;l++)if(s=r[l],j(s)&&qt(s),s.wv>t.wv)return!0}(!e||u!==null&&!x)&&g(t,y)}return!1}function In(t,n){for(var r=n;r!==null;){if(r.f&rt)try{r.fn(t);return}catch{r.f^=rt}r=r.parent}throw U=!1,t}function Nn(t){return(t.f&q)===0&&(t.parent===null||(t.parent.f&rt)===0)}function X(t,n,r,e){if(U){if(r===null&&(U=!1),Nn(n))throw t;return}r!==null&&(U=!0);{In(t,n);return}}function Kt(t){var vt;var n=h,r=d,e=k,l=o,s=x,a=E,i=f,_=t.f;h=null,d=0,k=null,o=_&(m|z)?null:t,x=!O&&(_&D)!==0,E=null,f=t.ctx,Z++;try{var p=(0,t.fn)(),c=t.deps;if(h!==null){var v;if(Y(t,d),c!==null&&d>0)for(c.length=d+h.length,v=0;v<h.length;v++)c[d+v]=h[v];else t.deps=c=h;if(!x)for(v=d;v<c.length;v++)((vt=c[v]).reactions??(vt.reactions=[])).push(t)}else c!==null&&d<c.length&&(Y(t,d),c.length=d);return l!==null&&Z++,p}finally{h=n,d=r,k=e,o=l,x=s,E=a,f=i}}function bn(t,n){let r=n.reactions;if(r!==null){var e=Qt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&w&&(h===null||!h.includes(n))&&(g(n,J),n.f&(D|H)||(n.f^=H),Y(n,0))}function Y(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)bn(t,r[e])}function tt(t){var n=t.f;if(!(n&q)){g(t,y);var r=u,e=f;u=t;try{n&ot?gn(t):Yt(t),Lt(t),Ft(t);var l=Kt(t);t.teardown=typeof l=="function"?l:null,t.wv=Gt;var s=t.deps,a}catch(i){X(i,t,r,e||t.ctx)}finally{u=r}}}function Zt(){if(I>1e3){I=0;try{un()}catch(t){if(L!==null)X(t,L,null);else throw t}}I++}function Wt(t){var n=t.length;if(n!==0){Zt();var r=O;O=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&y||(l.f^=y);var s=[];zt(l,s),qn(s)}}finally{O=r}}}function qn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(q|N)))try{j(e)&&(tt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mt(e):e.fn=null))}catch(l){X(l,e,null,e.ctx)}}}function Cn(){if(F=!1,I>1001)return;const t=A;A=[],Wt(t),F||(I=0,L=null)}function nt(t){B===Vt&&(F||(F=!0,queueMicrotask(Cn))),L=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(z|m)){if(!(r&y))return;n.f^=y}}A.push(n)}function zt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&m)!==0,a=s&&(l&y)!==0,i=r.next;if(!a&&!(l&N))if(l&W){if(s)r.f^=y;else try{j(r)&&tt(r)}catch(v){X(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else l&mt&&e.push(r);if(i===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var p=v.next;if(p!==null){r=p;continue t}v=v.parent}}r=i}for(var c=0;c<e.length;c++)_=e[c],n.push(_),zt(_,n)}function Jt(t){var n=B,r=A;try{Zt();const l=[];B=Sn,A=l,F=!1,Wt(r);var e=t==null?void 0:t();return Rn(),(A.length>0||l.length>0)&&Jt(),I=0,L=null,e}finally{B=n,A=r}}async function Rr(){await Promise.resolve(),Jt()}function Sr(t){var c;var n=t.f,r=(n&w)!==0;if(r&&n&q){var e=bt(t);return ft(t),e}if(o!==null){E!==null&&E.includes(t)&&on();var l=o.deps;t.rv<Z&&(t.rv=Z,h===null&&l!==null&&l[d]===t?d++:h===null?h=[t]:h.push(t),k!==null&&u!==null&&u.f&y&&!(u.f&m)&&k.includes(t)&&(g(u,R),nt(u)))}else if(r&&t.deps===null)for(var s=t,a=s.parent,i=s;a!==null;)if(a.f&w){var _=a;i=_,a=_.parent}else{var p=a;(c=p.deriveds)!=null&&c.includes(i)||(p.deriveds??(p.deriveds=[])).push(i);break}return r&&(s=t,j(s)&&qt(s)),t.v}function Dr(t){const n=o;try{return o=null,t()}finally{o=n}}const Pn=-7169;function g(t,n){t.f=t.f&Pn|n}function Or(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},Q&&!n&&(f.l={s:null,u:null,r1:[],r2:it(!1)})}function Ir(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];K(s.effect),$(s.reaction),Pt(s.fn)}}finally{K(r),$(e)}}f=n.p,n.m=!0}return{}}function Nr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ht in t)ut(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ht in r&&ut(r)}}}function ut(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ut(t[e],n)}catch{}const r=tn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Xt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{er as $,Tr as A,hr as B,vr as C,fr as D,Tt as E,Yn as F,$ as G,cn as H,K as I,Fn as J,o as K,u as L,et as M,rn as N,_n as O,C as P,lt as Q,cr as R,xt as S,vn as T,lr as U,Dt as V,$n as W,dr as X,Ln as Y,mr as Z,rr as _,ir as a,xr as a0,Gn as a1,ct as a2,mn as a3,ar as a4,ur as a5,dn as a6,ht as a7,Mn as a8,jn as a9,it as aa,Zn as ab,pt as ac,Wn as ad,tn as ae,Pt as af,Ar as ag,Kn as ah,Hn as ai,Xn as aj,At as ak,m as al,z as am,Jn as an,Qn as ao,tr as ap,Vn as aq,yr as ar,pn as as,nr as at,Jt as au,Rr as av,sr as aw,en as ax,Tn as b,or as c,kr as d,gr as e,T as f,f as g,b as h,Dr as i,Er as j,Bn as k,Q as l,Et as m,Sr as n,Nr as o,kn as p,yn as q,_r as r,P as s,zn as t,wr as u,Un as v,S as w,Or as x,pr as y,Ir as z};