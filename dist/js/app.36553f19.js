(function(t){function e(e){for(var r,a,s=e[0],u=e[1],c=e[2],l=0,f=[];l<s.length;l++)a=s[l],o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b811cd03"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"6445982f"}[t]+".css",o=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],l=c.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){a[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t),c=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[t]=void 0}};var f=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/skinny/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},2034:function(t,e,n){},"2f37":function(t,e,n){t.exports=n.p+"img/ate.2c090091.jpg"},3373:function(t,e,n){"use strict";var r=n("b51f"),a=n.n(r);a.a},"4f0e":function(t,e,n){"use strict";var r=n("a972"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/choose"}},[t._v("Choose fighter")])],1),n("keep-alive",{attrs:{include:"choose"}},[n("router-view")],1)],1)},o=[],i=(n("034f"),n("2877")),s={},u=Object(i["a"])(s,a,o,!1,null,null,null),c=u.exports,l=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("stars")},d=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"parallax-container"},[n("div",{staticClass:"parallax"},[t._m(0),t._m(1),t._m(2),t._m(3),n("div",{staticClass:"slide header",attrs:{id:"slide4"}},[n("div",{staticClass:"title"},[n("h1",[t._v("Now choose your fighter")]),n("nav-button")],1)])])])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide header",attrs:{id:"title"}},[n("h1",[t._v("Our existence is under threat")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide",attrs:{id:"slide1"}},[n("div",{staticClass:"title"},[n("h1",[t._v("Giant watermelon")]),n("p",[t._v("is on a collision course with our planet")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slide",attrs:{id:"slide2"}},[r("div",{staticClass:"title"},[r("p",[t._v("many of our brave comrades have fallen while fighting the menace")])]),r("img",{attrs:{src:n("64ce")}}),r("img",{attrs:{src:n("2f37")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide",attrs:{id:"slide3"}},[n("div",{staticClass:"title"},[n("h1",[t._v("It is our duty")]),n("p",[t._v("to rise up to the greatest challenge we have ever faced")])])])}],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"do-it",attrs:{to:"/choose",div:""}},[n("span",[t._v("do it")])])},m=[],g={name:"navButton"},b=g,_=(n("9660"),Object(i["a"])(b,h,m,!1,null,null,null)),y=_.exports,w={name:"stars",components:{"nav-button":y}},C=w,j=(n("3373"),Object(i["a"])(C,p,v,!1,null,"39d90dad",null)),x=j.exports,E={name:"home",components:{stars:x}},O=E,k=(n("4f0e"),Object(i["a"])(O,f,d,!1,null,"6a597b68",null)),P=k.exports;r["a"].use(l["a"]);var S=new l["a"]({routes:[{path:"/",name:"home",component:P},{path:"/choose",name:"choose",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});r["a"].config.productionTip=!1,new r["a"]({router:S,render:function(t){return t(c)}}).$mount("#app")},"64a9":function(t,e,n){},"64ce":function(t,e,n){t.exports=n.p+"img/water.3d870cf7.jpg"},9660:function(t,e,n){"use strict";var r=n("2034"),a=n.n(r);a.a},a972:function(t,e,n){},b51f:function(t,e,n){}});
//# sourceMappingURL=app.36553f19.js.map