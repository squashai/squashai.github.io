(function(t){function e(e){for(var n,s,i=e[0],l=e[1],c=e[2],u=0,d=[];u<i.length;u++)s=i[u],r[s]&&d.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"178e2d9f"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise(function(e,n){a=r[t]=[e,n]});e.push(a[2]=n);var o,l=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t),o=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+n+": "+o+")");s.type=n,s.request=o,a[1](s)}r[t]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,l.appendChild(c)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"24d3":function(t,e,a){t.exports=a.p+"img/jumbotron.b237a198.png"},"4f2e":function(t,e,a){t.exports=a.p+"img/canarywarf.b41ad768.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=a("bb71");a("da64");n["a"].use(r["a"],{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("toolbar",{attrs:{locations:t.locations}}),a("v-content",[a("router-view")],1),a("v-footer",[a("a",{attrs:{href:"https://medium.com"}},[t._v("Blog")])])],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{attrs:{absolute:"",temporary:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",[n("v-list-tile",{attrs:{to:"/"}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v("\n            Home\n          ")])],1)],1),t._l(t.locations,function(e){return n("v-list-tile",{key:e.name,attrs:{to:e.to,href:e.href,target:e.target}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v("\n            "+t._s(e.name)+"\n          ")])],1)],1)})],2)],1),n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("v-avatar",[n("img",{attrs:{src:a("cf05"),alt:"logo"}})]),n("v-btn",{staticClass:"headline",attrs:{flat:"","active-class":"",to:"/"}},[n("span",{staticClass:"font-weight-light"},[t._v("Squash")]),n("span",[t._v("AI")])])],1),n("v-spacer"),t._l(t.locations,function(e){return n("v-toolbar-items",{key:e.name,staticClass:"hidden-sm-and-down"},[n("v-btn",{attrs:{flat:"",to:e.to,href:e.href,target:e.target}},[t._v("\n        "+t._s(e.name)+"\n      ")])],1)})],2)],1)},l=[],c={props:["locations"],data:function(){return{drawer:!1}}},u=c,p=a("2877"),d=a("6544"),f=a.n(d),v=a("8212"),m=a("8336"),h=a("8860"),b=a("ba95"),g=a("5d23"),y=a("f774"),_=a("9910"),x=a("71d9"),w=a("2a7f"),V=a("706c"),C=Object(p["a"])(u,i,l,!1,null,null,null);C.options.__file="Toolbar.vue";var T=C.exports;f()(C,{VAvatar:v["a"],VBtn:m["a"],VList:h["a"],VListTile:b["a"],VListTileContent:g["a"],VListTileTitle:g["b"],VNavigationDrawer:y["a"],VSpacer:_["a"],VToolbar:x["a"],VToolbarItems:w["a"],VToolbarSideIcon:V["a"],VToolbarTitle:w["b"]});var j={name:"app",components:{Toolbar:T},data:function(){return{locations:[{name:"About",to:"/about"},{name:"GitHub",href:"https://github.com/squashai/squashai",target:"_blank"}]}}},A=j,S=a("7496"),O=a("549c"),k=a("553a"),I=Object(p["a"])(A,o,s,!1,null,null,null);I.options.__file="App.vue";var P=I.exports;f()(I,{VApp:S["a"],VContent:O["a"],VFooter:k["a"]});var q=a("8c4f"),z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[n("v-layout",{attrs:{column:""}},[n("v-flex",[n("v-parallax",{attrs:{src:a("24d3"),height:"300"}},[n("v-layout",{attrs:{"align-start":"","justify-end":"",column:""}},[n("h2",{staticClass:"font-weight-light black--text mb-3"},[t._v("\n            Teaching Computers the Beauty of Squash\n          ")])])],1)],1),n("v-flex",[n("v-layout",{staticClass:"pa-3",attrs:{row:"",wrap:"","justify-space-around":""}},[n("v-flex",{attrs:{xs12:"",sm4:"",md3:""}},[n("div",{staticClass:"text-xs-center"},[n("v-icon",{attrs:{color:"primary",size:"60"}},[t._v("explore")])],1),n("h3",[t._v("Datasets")]),n("p",[t._v("\n            Explore existing datasets for training AI models and\n            create new ones by labeling players, actions and\n            positions in professional games.\n          ")])]),n("v-flex",{attrs:{xs12:"",sm4:"",md3:""}},[n("div",{staticClass:"text-xs-center"},[n("v-icon",{attrs:{color:"primary",size:"60"}},[t._v("video_library")])],1),n("h3",[t._v("AI in Action")]),n("p",[t._v("\n            Watch AI agents process actual games, recognize players and\n            understand what happens on court.\n          ")])]),n("v-flex",{attrs:{xs12:"",sm4:"",md3:""}},[n("div",{staticClass:"text-xs-center"},[n("v-icon",{attrs:{color:"primary",size:"60"}},[t._v("equalizer")])],1),n("h3",[t._v("Analysis")]),n("p",[t._v("\n            Visualize statistics derived from the automated analysis\n            of real matches. Get insights such as how much "),n("em",[t._v("T\n            domination")]),t._v(" correlates with the final result.\n          ")])])],1)],1),n("v-flex",{staticClass:"pa-3"},[n("v-card",{attrs:{flat:""}},[n("v-card-title",[n("h1",[t._v("About\n            "),n("span",{staticClass:"font-weight-light"},[t._v("SQUASH")]),t._v("AI\n          ")])]),n("v-layout",{attrs:{row:"","justify-space-around":""}},[n("v-flex",{attrs:{sm12:"",md6:""}},[n("v-card-text",[n("p",[t._v("\n                Squash is a beautiful racket sport that is also very\n                well suited for video analysis based on Machine\n                Learning techniques. In its most common format, it\n                is played in a relatively small court by two players\n                that alternately hit the ball performing a limited\n                set of easily recognizable shots. Given the\n                contained size of the court, even professional\n                videos are recorded by a small number of fixed\n                cameras.\n              ")]),n("p",[t._v("\n                SQUASH"),n("span",{staticClass:"font-weight-bold"},[t._v("AI")]),t._v("'s\n                goal is to build a bridge between the Machine\n                Learning and the Squash communities, to inspire\n                researchers and enable them to easily retrieve raw\n                material and pre-processed datasets to experiment\n                with.\n              ")])])],1),n("v-flex",{attrs:{sm12:"",md5:""}},[n("v-img",{attrs:{src:a("4f2e"),contain:""}})],1)],1)],1)],1)],1)],1)},L=[],E=a("b0af"),M=a("99d9"),H=a("12b2"),B=a("a523"),$=a("0e8f"),G=a("132d"),D=a("adda"),F=a("a722"),J=a("8b9c"),N={},Q=Object(p["a"])(N,z,L,!1,null,null,null);Q.options.__file="Home.vue";var U=Q.exports;f()(Q,{VCard:E["a"],VCardText:M["a"],VCardTitle:H["a"],VContainer:B["a"],VFlex:$["a"],VIcon:G["a"],VImg:D["a"],VLayout:F["a"],VParallax:J["a"]}),n["a"].use(q["a"]);var W=new q["a"]({routes:[{path:"/",name:"home",component:U},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]});n["a"].config.productionTip=!1,new n["a"]({router:W,render:function(t){return t(P)}}).$mount("#app")},cf05:function(t,e,a){t.exports=a.p+"img/logo.8d77d165.png"}});
//# sourceMappingURL=app.9e8ba3d2.js.map