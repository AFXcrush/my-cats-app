(this["webpackJsonpgif-expert"]=this["webpackJsonpgif-expert"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(5),r=n.n(c),i=(n(11),n(2)),s=n(4),u=n.n(s),o=n(6),f=n(0),p=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){r()}),[]);var r=function(){var e=Object(o.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.thecatapi.com/v1/images/search?limit=6&api_key=8d351156-6ee0-4f2f-926b-62fea133a318",e.next=3,fetch("https://api.thecatapi.com/v1/images/search?limit=6&api_key=8d351156-6ee0-4f2f-926b-62fea133a318");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a=n.map((function(e){return{id:e.id,url:e.url}})),c(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"imgContainer",children:n.map((function(e){var t=e.id,n=e.url;return Object(f.jsx)("img",{className:"catImg",src:n,alt:""},t)}))})},j=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(f.jsxs)("div",{className:"catContainer",children:[Object(f.jsx)("h1",{children:"Random kittens"}),Object(f.jsx)("button",{onClick:function(){return c((function(e){return e+1}))},className:"catBtn",children:"Generate random kitten"}),Object(f.jsx)(p,{},n)]})};r.a.render(Object(f.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c75f38a0.chunk.js.map