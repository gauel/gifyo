import{S as V,i as B,s as O,k as m,l as v,m as b,h as _,Y as E,n as h,b as $,G as p,Z as q,_ as z,M as C,a as j,c as D,$ as G,f as L,g as T,d as U,e as M,y as x,z as A,A as N,B as R,v as Y,a0 as Z}from"../chunks/index.3ae62e9d.js";import{c as F}from"../chunks/crossfade.ec4b83be.js";const y="http://127.0.0.1:1337",H=async({fetch:i})=>{var a;let t=[{id:1,gif:{url:"/gif/1.gif"}},{id:2,url:"/gif/2.gif"}];try{let s=`${y}/api/gifs?populate=*`;t=((a=await(await i(s)).json())==null?void 0:a.data)||{}}catch(s){console.error("fetch api failed with",s)}return{gifs:t,PUBLIC_URL:y}},at=Object.freeze(Object.defineProperty({__proto__:null,load:H},Symbol.toStringTag,{value:"Module"}));function J(i){let t,a,s,o,n,l;return{c(){t=m("button"),a=m("img"),this.h()},l(e){t=v(e,"BUTTON",{});var f=b(t);a=v(f,"IMG",{src:!0,alt:!0,class:!0}),f.forEach(_),this.h()},h(){var e,f;E(a.src,s=y+((f=(e=i[0])==null?void 0:e.gif)==null?void 0:f.url))||h(a,"src",s),h(a,"alt",""),h(a,"class","rounded-xl aspect-[3/4] object-cover w-full")},m(e,f){$(e,t,f),p(t,a),l=!0},p(e,[f]){var g,d;i=e,(!l||f&1&&!E(a.src,s=y+((d=(g=i[0])==null?void 0:g.gif)==null?void 0:d.url)))&&h(a,"src",s)},i(e){l||(q(()=>{var f;l&&(n&&n.end(1),o=z(t,i[2],{key:(f=i[0])==null?void 0:f.id}),o.start())}),l=!0)},o(e){var f;o&&o.invalidate(),n=C(t,i[1],{key:(f=i[0])==null?void 0:f.id}),l=!1},d(e){e&&_(t),e&&n&&n.end()}}}function K(i,t,a){const[s,o]=F;let{gif:n={}}=t;return i.$$set=l=>{"gif"in l&&a(0,n=l.gif)},[n,s,o]}class Q extends V{constructor(t){super(),B(this,t,K,J,O,{gif:0})}}function P(i,t,a){const s=i.slice();return s[1]=t[a],s[3]=a,s}function S(i,t){let a,s,o;return s=new Q({props:{gif:t[1]}}),{key:i,first:null,c(){a=M(),x(s.$$.fragment),this.h()},l(n){a=M(),A(s.$$.fragment,n),this.h()},h(){this.first=a},m(n,l){$(n,a,l),N(s,n,l),o=!0},p(n,l){t=n;const e={};l&1&&(e.gif=t[1]),s.$set(e)},i(n){o||(T(s.$$.fragment,n),o=!0)},o(n){U(s.$$.fragment,n),o=!1},d(n){n&&_(a),R(s,n)}}}function W(i){var I;let t,a,s,o,n,l,e=[],f=new Map,g,d=(I=i[0])==null?void 0:I.gifs;const w=c=>{var r;return(r=c[1])==null?void 0:r.id};for(let c=0;c<d.length;c+=1){let r=P(i,d,c),u=w(r);f.set(u,e[c]=S(u,r))}return{c(){t=m("div"),a=m("div"),s=j(),o=m("div"),n=j(),l=m("div");for(let c=0;c<e.length;c+=1)e[c].c();this.h()},l(c){t=v(c,"DIV",{class:!0});var r=b(t);a=v(r,"DIV",{class:!0}),b(a).forEach(_),s=D(r),o=v(r,"DIV",{class:!0}),b(o).forEach(_),n=D(r),l=v(r,"DIV",{class:!0});var u=b(l);for(let k=0;k<e.length;k+=1)e[k].l(u);u.forEach(_),r.forEach(_),this.h()},h(){h(a,"class","fixed top-0 left-0 h-[20%] w-full gradient-to-b pointer-events-none"),h(o,"class","fixed bottom-0 left-0 h-24 w-full gradient-to-t pointer-events-none"),h(l,"class","grid grid-cols-2 gap-2 py-12"),h(t,"class","text-white")},m(c,r){$(c,t,r),p(t,a),p(t,s),p(t,o),p(t,n),p(t,l);for(let u=0;u<e.length;u+=1)e[u]&&e[u].m(l,null);g=!0},p(c,[r]){var u;r&1&&(d=(u=c[0])==null?void 0:u.gifs,Y(),e=G(e,r,w,1,c,d,f,l,Z,S,null,P),L())},i(c){if(!g){for(let r=0;r<d.length;r+=1)T(e[r]);g=!0}},o(c){for(let r=0;r<e.length;r+=1)U(e[r]);g=!1},d(c){c&&_(t);for(let r=0;r<e.length;r+=1)e[r].d()}}}function X(i,t,a){let{data:s}=t;return i.$$set=o=>{"data"in o&&a(0,s=o.data)},[s]}class st extends V{constructor(t){super(),B(this,t,X,W,O,{data:0})}}export{st as component,at as universal};
