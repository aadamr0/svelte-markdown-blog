import{e as et,u as R,s as M,n as y,c as st,d as z,v as J,w as K,x as Q,y as W}from"../chunks/scheduler.BOEji6Gx.js";import{S,i as D,e as _,c as h,f as $,d as f,j as p,b as T,m as nt,r as g,g as x,D as F,t as O,s as I,o as j,k as q,a as C,p as A,l as m,q as N,u as k,v as U,w as Y,z as at,x as lt}from"../chunks/index.D3iesuZS.js";import{t as X}from"../chunks/config.N6WwpHq1.js";import{w as rt}from"../chunks/index.ALaelTCp.js";const ot=!0;async function it({url:o}){return{url:o.pathname}}const Dt=Object.freeze(Object.defineProperty({__proto__:null,load:it,prerender:ot},Symbol.toStringTag,{value:"Module"}));function ct(o){const t=o-1;return t*t*t+1}function ut(o,{delay:t=0,duration:n=400,easing:a=et}={}){const e=+getComputedStyle(o).opacity;return{delay:t,duration:n,easing:a,css:s=>`opacity: ${s*e}`}}function Z(o,{delay:t=0,duration:n=400,easing:a=ct,x:e=0,y:s=0,opacity:l=0}={}){const r=getComputedStyle(o),i=+r.opacity,c=r.transform==="none"?"":r.transform,u=i*(1-l),[d,V]=R(e),[H,b]=R(s);return{delay:t,duration:n,easing:a,css:(L,v)=>`
			transform: ${c} translate(${(1-L)*d}${V}, ${(1-L)*H}${b});
			opacity: ${i-u*v}`}}const ft=localStorage.getItem("color-scheme"),tt=rt(ft??"dark");function mt(){tt.update(o=>{const t=o==="dark"?"light":"dark";return document.documentElement.setAttribute("color-theme",t),localStorage.setItem("color-scheme",t),t})}function dt(o){let t,n="<span>Dark</span>",a;return{c(){t=_("div"),t.innerHTML=n,this.h()},l(e){t=h(e,"DIV",{class:!0,"data-svelte-h":!0}),x(t)!=="svelte-jeesbb"&&(t.innerHTML=n),this.h()},h(){p(t,"class","svelte-1up86t6")},m(e,s){T(e,t,s)},i(e){e&&(a||z(()=>{a=F(t,Z,{y:-10}),a.start()}))},o:y,d(e){e&&f(t)}}}function _t(o){let t,n="<span>Light</span>",a;return{c(){t=_("div"),t.innerHTML=n,this.h()},l(e){t=h(e,"DIV",{class:!0,"data-svelte-h":!0}),x(t)!=="svelte-1w9ljno"&&(t.innerHTML=n),this.h()},h(){p(t,"class","svelte-1up86t6")},m(e,s){T(e,t,s)},i(e){e&&(a||z(()=>{a=F(t,Z,{y:10}),a.start()}))},o:y,d(e){e&&f(t)}}}function ht(o){let t,n,a;function e(r,i){return r[0]==="dark"?_t:dt}let s=e(o),l=s(o);return{c(){t=_("button"),l.c(),this.h()},l(r){t=h(r,"BUTTON",{"aria-label":!0,class:!0});var i=$(t);l.l(i),i.forEach(f),this.h()},h(){p(t,"aria-label","Toggle Theme"),p(t,"class","svelte-1up86t6")},m(r,i){T(r,t,i),l.m(t,null),n||(a=nt(t,"click",mt),n=!0)},p(r,[i]){s!==(s=e(r))&&(l.d(1),l=s(r),l&&(l.c(),g(l,1),l.m(t,null)))},i(r){g(l)},o:y,d(r){r&&f(t),l.d(),n=!1,a()}}}function pt(o,t,n){let a;return st(o,tt,e=>n(0,a=e)),[a]}class vt extends S{constructor(t){super(),D(this,t,pt,ht,M,{})}}function $t(o){let t,n,a,e=X+"",s,l,r,i,c='<a href="/about" class="svelte-scea26">About</a>',u,d,V='<a href="/contact" class="svelte-scea26">Contact</a>',H,b,L;return b=new vt({}),{c(){t=_("nav"),n=_("a"),a=_("b"),s=O(e),l=I(),r=_("ul"),i=_("li"),i.innerHTML=c,u=I(),d=_("li"),d.innerHTML=V,H=I(),j(b.$$.fragment),this.h()},l(v){t=h(v,"NAV",{class:!0});var E=$(t);n=h(E,"A",{href:!0,class:!0});var B=$(n);a=h(B,"B",{});var P=$(a);s=q(P,e),P.forEach(f),B.forEach(f),l=C(E),r=h(E,"UL",{class:!0});var w=$(r);i=h(w,"LI",{"data-svelte-h":!0}),x(i)!=="svelte-4dteop"&&(i.innerHTML=c),u=C(w),d=h(w,"LI",{"data-svelte-h":!0}),x(d)!=="svelte-y1z403"&&(d.innerHTML=V),H=C(w),A(b.$$.fragment,w),w.forEach(f),E.forEach(f),this.h()},h(){p(n,"href","/"),p(n,"class","title svelte-scea26"),p(r,"class","links svelte-scea26"),p(t,"class","svelte-scea26")},m(v,E){T(v,t,E),m(t,n),m(n,a),m(a,s),m(t,l),m(t,r),m(r,i),m(r,u),m(r,d),m(r,H),N(b,r,null),L=!0},p:y,i(v){L||(g(b.$$.fragment,v),L=!0)},o(v){k(b.$$.fragment,v),L=!1},d(v){v&&f(t),U(b)}}}class gt extends S{constructor(t){super(),D(this,t,null,$t,M,{})}}function bt(o){let t,n,a=X+"",e,s,l=new Date().getFullYear()+"",r;return{c(){t=_("footer"),n=_("p"),e=O(a),s=O(" © "),r=O(l),this.h()},l(i){t=h(i,"FOOTER",{class:!0});var c=$(t);n=h(c,"P",{class:!0});var u=$(n);e=q(u,a),s=q(u," © "),r=q(u,l),u.forEach(f),c.forEach(f),this.h()},h(){p(n,"class","svelte-k2ae0s"),p(t,"class","svelte-k2ae0s")},m(i,c){T(i,t,c),m(t,n),m(n,e),m(n,s),m(n,r)},p:y,i:y,o:y,d(i){i&&f(t)}}}class yt extends S{constructor(t){super(),D(this,t,null,bt,M,{})}}function G(o){let t,n,a;const e=o[2].default,s=J(e,o,o[1],null);return{c(){t=_("div"),s&&s.c(),this.h()},l(l){t=h(l,"DIV",{class:!0});var r=$(t);s&&s.l(r),r.forEach(f),this.h()},h(){p(t,"class","transition svelte-18kqe58")},m(l,r){T(l,t,r),s&&s.m(t,null),a=!0},p(l,r){s&&s.p&&(!a||r&2)&&K(s,e,l,l[1],a?W(e,l[1],r,null):Q(l[1]),null)},i(l){a||(g(s,l),l&&(n||z(()=>{n=F(t,ut,{}),n.start()})),a=!0)},o(l){k(s,l),a=!1},d(l){l&&f(t),s&&s.d(l)}}}function kt(o){let t=o[0],n,a,e=G(o);return{c(){e.c(),n=Y()},l(s){e.l(s),n=Y()},m(s,l){e.m(s,l),T(s,n,l),a=!0},p(s,[l]){l&1&&M(t,t=s[0])?(at(),k(e,1,1,y),lt(),e=G(s),e.c(),g(e,1),e.m(n.parentNode,n)):e.p(s,l)},i(s){a||(g(e),a=!0)},o(s){k(e),a=!1},d(s){s&&f(n),e.d(s)}}}function Tt(o,t,n){let{$$slots:a={},$$scope:e}=t,{url:s=""}=t;return o.$$set=l=>{"url"in l&&n(0,s=l.url),"$$scope"in l&&n(1,e=l.$$scope)},[s,e,a]}class Lt extends S{constructor(t){super(),D(this,t,Tt,kt,M,{url:0})}}function Et(o){let t;const n=o[1].default,a=J(n,o,o[2],null);return{c(){a&&a.c()},l(e){a&&a.l(e)},m(e,s){a&&a.m(e,s),t=!0},p(e,s){a&&a.p&&(!t||s&4)&&K(a,n,e,e[2],t?W(n,e[2],s,null):Q(e[2]),null)},i(e){t||(g(a,e),t=!0)},o(e){k(a,e),t=!1},d(e){a&&a.d(e)}}}function wt(o){let t,n,a,e,s,l,r,i;return n=new gt({}),s=new Lt({props:{url:o[0].url,$$slots:{default:[Et]},$$scope:{ctx:o}}}),r=new yt({}),{c(){t=_("div"),j(n.$$.fragment),a=I(),e=_("main"),j(s.$$.fragment),l=I(),j(r.$$.fragment),this.h()},l(c){t=h(c,"DIV",{class:!0});var u=$(t);A(n.$$.fragment,u),a=C(u),e=h(u,"MAIN",{class:!0});var d=$(e);A(s.$$.fragment,d),d.forEach(f),l=C(u),A(r.$$.fragment,u),u.forEach(f),this.h()},h(){p(e,"class","svelte-1sq3us8"),p(t,"class","layout svelte-1sq3us8")},m(c,u){T(c,t,u),N(n,t,null),m(t,a),m(t,e),N(s,e,null),m(t,l),N(r,t,null),i=!0},p(c,[u]){const d={};u&1&&(d.url=c[0].url),u&4&&(d.$$scope={dirty:u,ctx:c}),s.$set(d)},i(c){i||(g(n.$$.fragment,c),g(s.$$.fragment,c),g(r.$$.fragment,c),i=!0)},o(c){k(n.$$.fragment,c),k(s.$$.fragment,c),k(r.$$.fragment,c),i=!1},d(c){c&&f(t),U(n),U(s),U(r)}}}function Mt(o,t,n){let{$$slots:a={},$$scope:e}=t,{data:s}=t;return o.$$set=l=>{"data"in l&&n(0,s=l.data),"$$scope"in l&&n(2,e=l.$$scope)},[s,a,e]}class Vt extends S{constructor(t){super(),D(this,t,Mt,wt,M,{data:0})}}export{Vt as component,Dt as universal};