!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={},n={1:0};t.e=function(t){if(0!==n[t]){var r=require("./"+t+".server.js"),o=r.modules,u=r.ids;for(var a in o)e[a]=o[a];for(var i=0;i<u.length;i++)n[u[i]]=0}return Promise.resolve()},t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/assets/",t.oe=function(e){process.nextTick(function(){throw e})},t(t.s=8)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){function r(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var u=n(o);return[r].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([u]).join("\n")}return[r].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var u=this[o][0];"number"==typeof u&&(n[u]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},function(e,t){e.exports=require("babel-runtime/regenerator")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.FETCH_PRODUCTS_REQUESTED="FETCH_PRODUCTS_REQUESTED";t.FETCH_PRODUCTS_SUCCEEDED="FETCH_PRODUCTS_SUCCEEDED",t.FETCH_PRODUCTS_FAILED="FETCH_PRODUCTS_FAILED",t.fetchProducts=function(){return{type:n,payload:{}}},t.receiveProducts=function(e){return{type:FETCH_PRODUCTS__SUCCEEDED,payload:e}}},function(e,t,r){e.exports=r.p+"1a56e7378843d3e4f789ab2c626fd803.png"},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.displayA4LogoNav=t.displayNewLogo=t.displayA4Logo=t.displayCamXLogo=void 0;var o=r(0),u=n(o),a=r(17),i=n(a),c=r(7),s=n(c),f=r(18),l=n(f);t.displayCamXLogo=function(){return u.default.createElement("img",{className:"logo",src:i.default,alt:"CAMX CROSSBOWS - A4 - NEW FOR 2018"})},t.displayA4Logo=function(){return u.default.createElement("img",{className:"a4Logo",src:s.default,alt:"NEW FOR 2018 THE A4 CROSSBOW FROM CAMX CROSSBOWS"})},t.displayNewLogo=function(){return u.default.createElement("img",{className:"logo2018",src:l.default,alt:"THE A4 CROSSBOW FROM CAMX CROSSBOWS NEW FOR 2018"})},t.displayA4LogoNav=function(){return u.default.createElement("img",{className:"a4-logo-nav",src:s.default,alt:"THE ALL NEW A4 CROSSBOW FROM CAMX"})}},function(e,t,r){e.exports=r.p+"604f02c0e41eb7c18b03f5e6c0dea627.png"},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,u){try{var a=t[o](u),i=a.value}catch(e){return void r(e)}if(!a.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}return n("next")})}}var u=r(3),a=n(u),i=r(9),c=n(i),s=r(0),f=n(s),l=r(10),d=r(1),p=r(11),m=r(12),h=r(13),g=(n(h),r(14)),v=n(g),y=r(24),x=n(y),_=r(30),E=r(32),b=n(E),O=r(35),C=r(36),w=(0,c.default)(),S=function(e,t,r){return"https"!==e.headers["x-forwarded-proto"]?t.redirect(301,["https://",e.hostname,e.url].join("")):r()};w.use(function(e,t,r){t.header("Access-Control-Allow-Origin","*"),t.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept"),r()}),w.use(O.json()),w.use(O.urlencoded({extended:!1})),w.use(S),w.use("/assets",C("./dist")),w.get("*.js",function(e,t,r){e.url=e.url+".gz",t.set("Content-Encoding","gzip"),r()}),w.get("*",function(){var e=o(a.default.mark(function e(t,r){var n,o,u,i;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=(0,x.default)(),o={},u=f.default.createElement(m.Provider,{store:n},f.default.createElement(d.StaticRouter,{location:t.url,context:o},f.default.createElement(v.default,null))),!o.url){e.next=6;break}return r.redirect(o.url),e.abrupt("return");case 6:return i={},n.runSaga(b.default).done.then(function(){r.status(200).write((0,_.renderHeader)());var e=n.getState(),t=(0,l.renderToNodeStream)(u);t.pipe(r,{end:!1}),t.on("end",function(){return r.write((0,_.renderFooter)(i,e)),r.send()})}),e.next=10,(0,p.getLoadableState)(u);case 10:i=e.sent,n.close();case 12:case"end":return e.stop()}},e,void 0)}));return function(t,r){return e.apply(this,arguments)}}()),w.listen(process.env.PORT||3e3,function(){return console.log("Server listening.")})},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("loadable-components/server")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("axios")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),u=n(o),a=r(1),i=r(15),c=n(i),s=r(19),f=n(s),l=r(22),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(l),p=function(){return u.default.createElement("div",null,u.default.createElement(c.default,null),u.default.createElement(a.Switch,null,u.default.createElement(a.Route,{exact:!0,path:"/",component:d.HomePage}),u.default.createElement(a.Route,{path:"/a4-systems",component:d.HighResTour}),u.default.createElement(a.Route,{path:"/a4-features",component:d.CADModelTour}),u.default.createElement(a.Route,{path:"/packages",component:d.PackagesContainer}),u.default.createElement(a.Route,{path:"/a4-scope",component:d.CrossbowScope})),u.default.createElement(f.default,null))};t.default=p},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n),u=r(1);r(16);var a=r(6),i=function(){return o.default.createElement("nav",{id:"main-menu"},o.default.createElement(u.Link,{to:"/"},(0,a.displayCamXLogo)(),(0,a.displayA4LogoNav)()),o.default.createElement("a",{href:"https://s3.amazonaws.com/camx/documents/camx-a4-owners-manual.pdf",target:"_blank",rel:"noopener noreferrer"},"Download PDF"))};t.default=i},function(e,t,r){t=e.exports=r(2)(void 0),t.push([e.i,"#main-menu{background:url("+r(5)+");display:block;position:fixed;right:0;z-index:3;top:0}#main-menu a{color:#fff;margin:.5rem;text-decoration:none;font-size:1rem;font-weight:600;text-transform:uppercase;padding:0;display:block;text-align:center}#main-menu a img.logo{height:1.95rem;margin-top:-.25rem;padding-left:2.2rem}#main-menu a img.a4-logo-nav{height:1rem}",""])},function(e,t,r){e.exports=r.p+"09db422758cf1314fa037da2399ef4df.png"},function(e,t,r){e.exports=r.p+"2675de51d764b3e35de6de8ee8f77ff9.png"},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(0),s=n(c);r(20);var f=r(21),l=n(f),d=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return s.default.createElement("footer",null,function(){return s.default.createElement("div",{id:"footer-img",style:{backgroundImage:"url("+l.default+")"}})}())}}]),t}(c.Component);t.default=d},function(e,t,r){t=e.exports=r(2)(void 0),t.push([e.i,"footer{position:relative;width:100%;height:100vh!important;overflow:hidden}#footer-img{width:100%;height:100%;background-size:cover;background-position:50%}",""])},function(e,t,r){e.exports=r.p+"2269b8c8cb385fd33a3757128b465cfd.jpg"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HomePage=void 0;var n=r(23),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.HomePage=(0,o.default)(function(){return new Promise(function(e){r.e(0).then(function(t){e(r(43))}.bind(null,r)).catch(r.oe)})})},function(e,t){e.exports=require("loadable-components")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(25),u=r(26),a=n(u),i=r(27),c=n(i),s=r(28),f=r(29),l=n(f),d=(0,a.default)(),p=[(0,s.routerMiddleware)((0,c.default)()),d];t.default=function(e){var t=(0,o.createStore)((0,o.combineReducers)({productLists:l.default}),e,(0,o.compose)(o.applyMiddleware.apply(void 0,p)));return t.runSaga=d.run,t.close=function(){return t.dispatch(u.END)},t}},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("redux-saga")},function(e,t){e.exports=require("history/createMemoryHistory")},function(e,t){e.exports=require("react-router-redux")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4),o=[],u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1],r=t.type,u=t.payload;switch(r){case n.FETCH_PRODUCTS__SUCCEEDED:return u.products;default:return e}};t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.renderFooter=t.renderHeader=void 0;var n=r(31),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.renderHeader=function(){return'\n  <!DOCTYPE html>\n  <html lang="en">\n    <head>\n      <meta charset="UTF-8">\n      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n      <link rel="shortcut icon" href="//cdn.shopify.com/s/files/1/1251/6841/t/2/assets/favicon.png?297750183291320118" type="image/png">\n      <link rel="stylesheet" type="text/css" href="assets/stylesheet.css">\n      <title>CAMX A4 CROSSBOW is the quietest crossbow that delivers the smoothest shooting experience. The CAMX A4 shoots at 370 FPS and is hyper-accurate out of the box.</title>\n      <script>\n        (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n        })(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');\n        ga(\'create\', \'UA-37316639-13\', \'auto\');\n        ga(\'send\', \'pageview\');\n      <\/script>\n    </head>\n    <body>\n      <div id="root">\n'},t.renderFooter=function(e,t){return"\n  </div>\n  <script>\n    window.__PRELOADED_STATE__ = "+(0,o.default)(t).replace(/</g,"\\u003c")+'\n  <\/script>\n  <script src="/assets/vendor.js"><\/script>\n  <script src="/assets/client.js"><\/script>\n  '+e.getScriptTag()+"\n"}},function(e,t){e.exports=require("serialize-javascript")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){var e;return c.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.call)(g);case 3:return e=t.sent,t.next=6,(0,s.put)({type:d.FETCH_PRODUCTS_SUCCEEDED,payload:{PRODUCTS:PRODUCTS.map(function(e){return{id:e.id,title:e.description||"page title"}})}});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,(0,s.put)({type:d.FETCH_PRODUCTS_FAILED,payload:t.t0});case 12:case"end":return t.stop()}},p,this,[[0,8]])}function u(){return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.takeEvery)(d.FETCH_PRODUCTS_REQUESTED,o);case 2:case"end":return e.stop()}},m,this)}function a(){return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.all)([u()]);case 2:case"end":return e.stop()}},h,this)}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchUrl=void 0;var i=r(3),c=n(i);t.fetchProducts=o,t.fetchProductsSaga=u,t.default=a;var s=r(33),f=r(34),l=n(f),d=r(4),p=c.default.mark(o),m=c.default.mark(u),h=c.default.mark(a),g=t.fetchUrl=function(){return(0,l.default)("https://api.herokuapp.com/products",{method:"get",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){if(!e.ok)throw new Error;return e.json()})}},function(e,t){e.exports=require("redux-saga/effects")},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("express-static-gzip")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("@fortawesome/react-fontawesome")},function(e,t){e.exports=require("@fortawesome/fontawesome-free-solid")},function(e,t){e.exports=require("gsap/TweenMax")},function(e,t){e.exports=require("three")},function(e,t){e.exports=require("lodash/find")},,function(e,t){e.exports=require("video.js")},function(e,t){e.exports=require("video.js/dist/video-js.css")},function(e,t){e.exports=require("gsap/TimelineMax")},function(e,t){e.exports=require("three-orbitcontrols/OrbitControls")},function(e,t){e.exports=require("gsap/ScrollToPlugin")}]);