(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)s=o[d],r[s]&&p.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("1356"),r=a.n(n);r.a},1356:function(t,e,a){},1730:function(t,e,a){t.exports=a.p+"img/ground.2a59458d.png"},"24d3":function(t,e,a){t.exports=a.p+"img/jumbotron.b237a198.png"},3019:function(t,e,a){"use strict";var n=a("7733"),r=a.n(n);r.a},4313:function(t,e){if("undefined"===typeof oimo){var a=new Error("Cannot find module 'oimo'");throw a.code="MODULE_NOT_FOUND",a}t.exports=oimo},"4c71":function(t,e,a){},"4f2e":function(t,e,a){t.exports=a.p+"img/canarywarf.b41ad768.png"},"536e":function(t,e){if("undefined"===typeof earcut){var a=new Error("Cannot find module 'earcut'");throw a.code="MODULE_NOT_FOUND",a}t.exports=earcut},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=a("bb71");a("da64");n["a"].use(r["a"],{iconfont:"md"});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("transition",{attrs:{name:"bounce"}},["edit"!==t.$route.name?a("toolbar",{attrs:{locations:t.locations}}):t._e()],1),a("v-content",[a("router-view")],1),a("transition",{attrs:{name:"bounce"}},[a("v-footer",{directives:[{name:"show",rawName:"v-show",value:"edit"!==t.$route.name,expression:"$route.name !== 'edit'"}]},[a("div",{staticClass:"px-3"},[t._v("\n        SQUASH"),a("span",{staticClass:"font-weight-bold"},[t._v("AI")]),t._v(" is in its\n        very initial stage; reach out through\n        "),a("a",{attrs:{href:"https://github.com/squashai/squashai/issues",target:"blank"}},[a("span",[t._v("GitHub issues")])]),t._v("\n        if you want to share ideas.\n      ")])])],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{attrs:{absolute:"",temporary:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",[n("v-list-tile",{attrs:{to:"/"}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v("\n            Home\n          ")])],1)],1),t._l(t.locations,function(e){return n("v-list-tile",{key:e.name,attrs:{to:e.to,href:e.href,target:e.target}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v("\n            "+t._s(e.name)+"\n          ")])],1)],1)})],2)],1),n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("v-avatar",[n("img",{attrs:{src:a("cf05"),alt:"logo"}})]),n("v-btn",{staticClass:"headline",attrs:{flat:"","active-class":"",to:"/"}},[n("span",{staticClass:"font-weight-light"},[t._v("Squash")]),n("span",[t._v("AI")])])],1),n("v-spacer"),t._l(t.locations,function(e){return n("v-toolbar-items",{key:e.name,staticClass:"hidden-sm-and-down"},[n("v-btn",{attrs:{flat:"",to:e.to,href:e.href,target:e.target}},[t._v("\n        "+t._s(e.name)+"\n      ")])],1)})],2)],1)},l=[],c={props:["locations"],data:function(){return{drawer:!1}}},u=c,d=a("2877"),p=a("6544"),v=a.n(p),h=a("8212"),f=a("8336"),m=a("8860"),b=a("ba95"),y=a("5d23"),g=a("f774"),x=a("9910"),_=a("71d9"),w=a("2a7f"),C=a("706c"),V=Object(d["a"])(u,o,l,!1,null,null,null);V.options.__file="Toolbar.vue";var k=V.exports;v()(V,{VAvatar:h["a"],VBtn:f["a"],VList:m["a"],VListTile:b["a"],VListTileContent:y["a"],VListTileTitle:y["b"],VNavigationDrawer:g["a"],VSpacer:x["a"],VToolbar:_["a"],VToolbarItems:w["a"],VToolbarSideIcon:C["a"],VToolbarTitle:w["b"]});var T={name:"app",components:{Toolbar:k},data:function(){return{hide:!1,locations:[{name:"Editor",to:"/editor"},{name:"Data",to:"/data"},{name:"GitHub",href:"https://github.com/squashai",target:"_blank"}]}}},j=T,S=(a("034f"),a("7496")),E=a("549c"),F=a("553a"),O=Object(d["a"])(j,i,s,!1,null,null,null);O.options.__file="App.vue";var L=O.exports;v()(O,{VApp:S["a"],VContent:E["a"],VFooter:F["a"]});var D=a("8c4f"),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[n("v-layout",{attrs:{column:""}},[n("v-flex",[n("v-parallax",{attrs:{src:a("24d3"),height:"300"}},[n("v-layout",{attrs:{"align-start":"","justify-end":"",column:""}},[n("h2",{staticClass:"font-weight-light black--text mb-3"},[t._v("\n            Teaching Computers the Beauty of Squash\n          ")])])],1)],1),n("v-flex",[n("v-layout",{staticClass:"pa-3",attrs:{row:"",wrap:"","justify-space-around":""}},[n("v-flex",{attrs:{xs12:"",sm4:"",md3:""}},[n("div",{staticClass:"text-xs-center"},[n("v-icon",{attrs:{color:"primary",size:"60"}},[t._v("explore")])],1),n("h3",[t._v("Datasets")]),n("p",[t._v("\n            Explore existing datasets for training AI models and\n            create new ones by labeling players, actions and\n            positions in professional games.\n          ")])]),n("v-flex",{attrs:{xs12:"",sm4:"",md3:""}},[n("div",{staticClass:"text-xs-center"},[n("v-icon",{attrs:{color:"primary",size:"60"}},[t._v("video_library")])],1),n("h3",[t._v("AI in Action")]),n("p",[t._v("\n            Watch AI agents process actual games, recognize players and\n            understand what happens on court.\n          ")])]),n("v-flex",{attrs:{xs12:"",sm4:"",md3:""}},[n("div",{staticClass:"text-xs-center"},[n("v-icon",{attrs:{color:"primary",size:"60"}},[t._v("equalizer")])],1),n("h3",[t._v("Analysis")]),n("p",[t._v("\n            Visualize statistics derived from the automated analysis\n            of real matches. Get insights such as how much "),n("em",[t._v("T\n            domination")]),t._v(" correlates with the final result.\n          ")])])],1)],1),n("v-flex",{staticClass:"pa-3"},[n("v-card",{attrs:{flat:""}},[n("v-card-title",[n("h1",[t._v("About\n            "),n("span",{staticClass:"font-weight-light"},[t._v("SQUASH")]),t._v("AI\n          ")])]),n("v-layout",{attrs:{row:"","justify-space-around":""}},[n("v-flex",{attrs:{sm12:"",md6:""}},[n("v-card-text",[n("p",[t._v("\n                Squash is a beautiful racket sport that is also very\n                well suited for video analysis based on Machine\n                Learning techniques. In its most common format, it\n                is played in a relatively small court by two players\n                that alternately hit the ball performing a limited\n                set of easily recognizable shots. Given the\n                contained size of the court, even professional\n                videos are recorded by a small number of fixed\n                cameras.\n              ")]),n("p",[t._v("\n                SQUASH"),n("span",{staticClass:"font-weight-bold"},[t._v("AI")]),t._v("'s\n                goal is to build a bridge between the Machine\n                Learning and the Squash communities, to inspire\n                researchers and enable them to easily retrieve raw\n                material and pre-processed datasets to experiment\n                with.\n              ")])])],1),n("v-flex",{attrs:{sm12:"",md5:""}},[n("v-img",{attrs:{src:a("4f2e"),contain:""}})],1)],1)],1)],1)],1)],1)},A=[],U=a("b0af"),I=a("99d9"),M=a("12b2"),$=a("a523"),N=a("0e8f"),R=a("132d"),z=a("adda"),q=a("a722"),B=a("8b9c"),H={},G=Object(d["a"])(H,P,A,!1,null,null,null);G.options.__file="Home.vue";var Q=G.exports;v()(G,{VCard:U["a"],VCardText:I["a"],VCardTitle:M["a"],VContainer:$["a"],VFlex:N["a"],VIcon:R["a"],VImg:z["a"],VLayout:q["a"],VParallax:B["a"]});var J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","grid-list-sm":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("loader")],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.list,function(t){return a("v-flex",{key:t.url,attrs:{xs6:"",sm4:"","d-flex":""}},[a("thumbnail",{attrs:{name:t.name,title:t.title,thumbnail:t.thumbnail,url:t.url}})],1)}))],1)},Y=[],Z=(a("96cf"),a("1da1")),K={videoListUrl:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_VIDEO_LIST_URL||"https://squashai.gitlab.io/media/list.json",datasetListUrl:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DATASET_LIST_URL||"https://api.github.com/repos/squashai/datasets/contents/"},W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grey--text",on:{click:t.open,dragover:t.over,drop:t.drop}},[a("p"),a("span",[t._v("Upload an existing project file")]),a("span",[t._v("or pick a video below to start a new project")]),t.error?a("span",{staticClass:"error--text",attrs:{id:"error"}},[a("v-icon",{attrs:{small:""},on:{click:t.cleanup}},[t._v("cancel\n    ")]),t._v("\n    "+t._s(t.error)+"\n  ")],1):a("p"),a("input",{ref:"selector",attrs:{type:"file",id:"files"},on:{change:t.load}})])},X=[],tt=(a("7f7f"),{data:function(){return{error:null}},methods:{load:function(t){var e=t.target.files;this.launch(e)},open:function(){this.$refs.selector.click()},over:function(t){t.stopPropagation(),t.preventDefault(),t.dataTransfer.dropEffect="copy"},drop:function(t){t.stopPropagation(),t.preventDefault();var e=t.dataTransfer.files;this.launch(e)},cleanup:function(t){t.stopPropagation(),t.preventDefault(),this.error=null},launch:function(t){var e=this;if(t.length>1)this.error="Error: cannot open multiple files";else if("application/json"!==t[0].type)this.error="Error: expected a JSON file";else{var a=new FileReader;a.onload=function(){var t=JSON.parse(a.result);e.$router.push({name:"edit",params:{source:{name:t.source.name,title:t.source.title,url:t.source.url,type:t.source.type},restored:t.labels}})},a.readAsText(t[0])}}}}),et=tt,at=(a("d4bd"),Object(d["a"])(et,W,X,!1,null,"001be37b",null));at.options.__file="Loader.vue";var nt=at.exports;v()(at,{VIcon:R["a"]});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{on:{click:t.launch}},[a("v-img",{attrs:{src:t.thumbnail}}),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[t._v(t._s(t.title))])])],1)},it=[],st={props:{thumbnail:{type:String,default:function(){return"https://img.youtube.com/vi/F6UG6SZNdEY/mqdefault.jpg"}},name:{type:String,default:function(){return"F6UG6SZNdEY.mp4"}},title:{type:String,default:function(){return"WE'RE NOT DONE YET!\" - Free Game Friday - Rodriguez v Rösner - Hong Kong 2018"}},url:{type:String,default:function(){return"https://gitlab.com/squashai/media/raw/master/F6UG6SZNdEY.mp4"}},type:{type:String,default:function(){return"video/mp4"}}},methods:{launch:function(){this.$router.push({name:"edit",params:{source:{name:this.name,title:this.title,url:this.url,type:this.type}}})}}},ot=st,lt=(a("cc0e"),Object(d["a"])(ot,rt,it,!1,null,null,null));lt.options.__file="Thumbnail.vue";var ct=lt.exports;v()(lt,{VCard:U["a"],VCardTitle:M["a"],VImg:z["a"]});var ut={data:function(){return{list:null}},components:{Loader:nt,Thumbnail:ct},methods:{},mounted:function(){var t=Object(Z["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(K.videoListUrl);case 2:return e=t.sent,t.next=5,e.json();case 5:this.list=t.sent;case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},dt=ut,pt=Object(d["a"])(dt,J,Y,!1,null,null,null);pt.options.__file="Picker.vue";var vt=pt.exports;v()(pt,{VContainer:$["a"],VFlex:N["a"],VLayout:q["a"]});var ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[a("v-card",{attrs:{color:"primary",dark:""}},[a("v-card-text",[t._v("\n        Loading\n        "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1),a("v-toolbar",[a("v-toolbar-title",[t._v("\n      "+t._s(t.source.title)+"\n    ")])],1),a("v-layout",{attrs:{"justify-between":""}},[a("v-flex",{attrs:{xs6:"",md4:""}},[a("player",{attrs:{label:"Player 1",disabled:!!t.current||!!t.playing},model:{value:t.players[1],callback:function(e){t.$set(t.players,1,e)},expression:"players[1]"}})],1),a("v-flex",{attrs:{xs6:"",md4:""}},[a("player",{attrs:{label:"Player 2",disabled:!!t.current||!!t.playing},model:{value:t.players[2],callback:function(e){t.$set(t.players,2,e)},expression:"players[2]"}})],1)],1),a("v-layout",{staticClass:"pa-0",attrs:{row:"",wrap:"","align-end":""}},[a("v-flex",{attrs:{xs12:"",md8:""}},[a("v-card",[a("vue-plyr",{ref:"video",attrs:{options:t.options}},[a("video",[a("source",{attrs:{src:t.source.url,type:t.source.type}})])])],1)],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-layout",{attrs:{column:""}},[a("v-flex",[a("v-layout",{attrs:{"justify-center":"",row:""}},[a("div",{staticClass:"mr-5"},[a("v-switch",{attrs:{label:"Action",disabled:!!t.current||!!t.playing},model:{value:t.action,callback:function(e){t.action=e},expression:"action"}})],1),a("div",[a("v-switch",{attrs:{label:"Replay",disabled:!!t.current||!!t.playing},model:{value:t.replay,callback:function(e){t.replay=e},expression:"replay"}})],1)])],1),a("v-flex",[a("court",{attrs:{disabled:!!t.current||!!t.playing},model:{value:t.players,callback:function(e){t.players=e},expression:"players"}})],1),a("v-flex",[a("v-layout",{attrs:{"align-center":"",row:""}},[a("v-btn",{attrs:{color:t.current?"primary":void 0,icon:"",disabled:!!t.playing},on:{click:t.toggle}},[a("v-icon",[t._v("label")])],1),a("v-btn",{attrs:{disabled:t.first||!!t.playing,icon:""},on:{click:t.prev}},[a("v-icon",[t._v("fast_rewind")])],1),a("v-btn",{attrs:{disabled:t.last||!!t.playing,icon:""},on:{click:t.next}},[a("v-icon",[t._v("fast_forward")])],1),a("v-slider",{staticClass:"mx-2",attrs:{min:t.labels.length>0?1:0,max:t.labels.length,disabled:t.labels.length<1||!!t.playing,"always-dirty":""},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}}),a("span",{staticClass:"grey--text"},[t._v("\n              "+t._s(t.current?t.position:"-")+"/"+t._s(t.labels.length)+"\n            ")]),a("v-btn",{attrs:{disabled:0===t.labels.length||!!t.playing,icon:""},on:{click:t.save}},[a("v-icon",[t._v("get_app")])],1)],1)],1)],1)],1)],1)],1)},ft=[],mt=(a("4917"),a("20d6"),a("7514"),a("788d")),bt=a("2ef0"),yt=a.n(bt),gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("canvas",{ref:"canvas",attrs:{width:"400",height:"300","touch-action":"none"}})},xt=[],_t=a("633b"),wt=a("1730"),Ct=a.n(wt),Vt={court:{width:6.4,length:9.75},players:{radius:.5}},kt={name:"Court",props:{value:{type:Object,default:function(){return{1:{x:-2,y:-2,color:"#FFFFFF",visible:!0},2:{x:2,y:-2,color:"#000000",visible:!0}}}},disabled:{type:Boolean,default:function(){return!1}}},data:function(){return{scene:null,engine:null,camera:null,lights:null,ground:null,players:null,refresh:!0}},watch:{value:{deep:!0,handler:function(){for(var t in this.players)this.players[t].setEnabled(!!this.value[t].visible),this.players[t].position.x=this.value[t].x,this.players[t].position.z=this.value[t].y,this.players[t].material.diffuseColor=_t["Color3"].FromHexString(this.value[t].color);this.refresh=!0}},disabled:function(){for(var t in this.players)this.players[t].controller.enabled=!this.disabled,this.players[t].material.alpha=this.disabled?.7:1;this.refresh=!0}},methods:{resize:function(){this.engine.resize(),this.refresh=!0},createCamera:function(){var t=new _t["FreeCamera"]("camera",new _t["Vector3"](0,5,-8.2),this.scene);return t.setTarget(new _t["Vector3"](0,0,-2)),t},createLights:function(){var t=new _t["HemisphericLight"]("hlight",new _t["Vector3"](0,1,0),this.scene);t.intensity=.4;var e=new _t["DirectionalLight"]("dlight",new _t["Vector3"](0,-1,0),this.scene);return e.position=new _t["Vector3"](0,5,0),e.intensity=.9,{hemispheric:t,directional:e}},createGround:function(){var t=this,e=_t["MeshBuilder"].CreateGround("ground1",{width:Vt.court.width,height:Vt.court.length},this.scene),a=new _t["StandardMaterial"]("ground",this.scene);return a.diffuseTexture=new _t["Texture"](Ct.a,this.scene),a.diffuseTexture.onLoadObservable.add(function(){t.refresh=!0}),a.specularColor=new _t["Color3"](0,0,0),e.material=a,e.receiveShadows=!0,e},createPlayer:function(t,e){var a=this,n=_t["MeshBuilder"].CreateDisc(t,{radius:Vt.players.radius},this.scene);n.rotation.x=Math.PI/2,n.position.y=.05,n.position.x=e.x,n.position.z=e.y,n.material=new _t["StandardMaterial"]("".concat(t,"Material"),this.scene),n.material.diffuseColor=_t["Color3"].FromHexString(e.color),n.material.alpha=this.disabled?.7:1;var r=new _t["PointerDragBehavior"]({dragPlaneNormal:new _t["Vector3"](0,1,0)});return r.useObjectOrienationForDragging=!1,r.updateDragPlane=!0,n.addBehavior(r),n.controller=r,n.controller.enabled=!this.disabled,r.onDragStartObservable.add(function(){a.refresh=!0}),r.onDragObservable.add(function(){a.refresh=!0}),r.onDragEndObservable.add(function(){var t=Vt.court.width/2-Vt.players.radius,e=Vt.court.length/2-Vt.players.radius;n.position.x=Math.max(-t,Math.min(t,n.position.x)),n.position.z=Math.max(-e,Math.min(e,n.position.z)),a.refresh=!0,a.notify()}),n},notify:function(){this.$emit("input",yt.a.defaultsDeep({1:{x:this.players[1].position.x,y:this.players[1].position.z},2:{x:this.players[2].position.x,y:this.players[2].position.z}},this.value))}},mounted:function(){var t=this;this.engine=new _t["Engine"](this.$el,!0),this.scene=new _t["Scene"](this.engine),this.scene.clearColor=new _t["Color4"](0,0,0,0),this.camera=this.createCamera(),this.lights=this.createLights(),this.ground=this.createGround(),this.players={1:this.createPlayer("player1",this.value[1]),2:this.createPlayer("player2",this.value[2])};var e=new _t["ShadowGenerator"](1024,this.lights.directional);e.useExponentialShadowMap=!0,e.addShadowCaster(this.players[1]),e.addShadowCaster(this.players[2]),this.engine.runRenderLoop(function(){t.refresh&&(t.scene.render(),t.refresh=!1)}),window.addEventListener("resize",this.resize)},destroyed:function(){window.removeEventListener("resize",this.resize)}},Tt=kt,jt=(a("3019"),Object(d["a"])(Tt,gt,xt,!1,null,"497ac0dc",null));jt.options.__file="Court.vue";var St=jt.exports,Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-text-field",{attrs:{label:t.label,type:"text","prepend-inner-icon":t.value.visible?"visibility":"visibility_off",disabled:t.disabled},on:{"click:prepend-inner":t.toggle},model:{value:t.value.name,callback:function(e){t.$set(t.value,"name",e)},expression:"value.name"}},[a("v-menu",{attrs:{slot:"append-outer","close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":""},slot:"append-outer"},[a("v-btn",{attrs:{slot:"activator",color:"grey lighten-2",small:"",icon:""},slot:"activator"},[a("v-icon",{attrs:{color:t.color.hex}},[t._v("person")])],1),a("compact",{attrs:{palette:t.palette},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)],1)},Ft=[],Ot=a("c345"),Lt={name:"player",components:{Compact:Ot["Compact"]},props:{value:{type:Object,default:function(){return{name:null,color:"#FFFFFF",visible:!0}}},label:{type:String,default:function(){return null}},disabled:{type:Boolean,default:function(){return!1}}},data:function(){return{menu:!1,palette:["#FFFFFF","#000000","#9E9E9E","#F44336","#FF9800","#FFEB3B","#4CAF50","#2196F3","#3F51B5","#9C27B0"],color:{hex:this.value.color}}},watch:{"color.hex":function(){this.$emit("input",yt.a.defaultsDeep({color:this.color.hex},this.value))},"value.color":function(){this.color={hex:this.value.color}}},methods:{toggle:function(){this.$emit("input",yt.a.defaultsDeep({visible:!this.value.visible},this.value))}}},Dt=Lt,Pt=(a("cb65"),a("e449")),At=a("2677"),Ut=Object(d["a"])(Dt,Et,Ft,!1,null,"1d6d96c5",null);Ut.options.__file="Player.vue";var It=Ut.exports;v()(Ut,{VBtn:f["a"],VIcon:R["a"],VMenu:Pt["a"],VTextField:At["a"]});var Mt={components:{Court:St,Player:It,VuePlyr:mt["a"]},props:{source:{type:Object,default:function(){return{name:"ohtRSiQ-HPg.mp4",title:"Squash: Men's Round 3 Roundup - Hong Kong Open 2018",url:"https://gitlab.com/squashai/media/raw/master/ohtRSiQ-HPg.mp4",type:"video/mp4"}}},restored:{type:Array,default:function(){return[]}}},data:function(){return{loading:!0,playing:!1,options:{seekTime:.5,invertTime:!1,controls:["play","rewind","fast-forward","progress","current-time","mute","volume"],keyboard:{focused:!1,global:!1}},players:{1:{name:null,color:"#FFFFFF",x:-2,y:-2,visible:!0},2:{name:null,color:"#000000",x:2,y:-2,visible:!0}},time:0,action:!1,replay:!1,labels:yt.a.cloneDeep(this.restored)}},computed:{video:function(){return this.$refs.video.player},first:function(){return 0===this.labels.length||this.time<=this.labels[0].time},last:function(){return 0===this.labels.length||this.time>=this.labels[this.labels.length-1].time},current:function(){return yt.a.find(this.labels,{time:this.time})},position:{get:function(){var t=this,e=yt.a.findIndex(this.labels,function(e){return e.time>=t.time});return e>=0?e+1:this.labels.length},set:function(t){this.video.currentTime=this.labels[t-1].time}}},methods:{next:function(){var t=this,e=yt.a.find(this.labels,function(e){return e.time>t.time});e&&(this.video.currentTime=e.time)},prev:function(){var t=this,e=yt.a.findLast(this.labels,function(e){return e.time<t.time});e&&(this.video.currentTime=e.time)},toggle:function(){if(this.current)this.labels.splice(yt.a.findIndex(this.labels,{time:this.time}),1);else{var t={time:this.time,action:this.action,replay:this.replay,players:yt.a.cloneDeep(this.players)};this.labels.splice(yt.a.sortedIndexBy(this.labels,t,"time"),0,t)}},save:function(){var t=new Blob([JSON.stringify({source:this.source,labels:this.labels},null,"  ")],{type:"application/json"}),e=document.createElement("a"),a=this.source.name.match(/[^.]+/);e.download="".concat(a?a[0]:"project",".json"),e.href=URL.createObjectURL(t),document.body.appendChild(e),e.click(),document.body.removeChild(e)},keystroke:function(t){if("INPUT"!==t.path[0].tagName&&"text"!==t.path[0].type)switch(t.code){case"ArrowLeft":this.video.currentTime=Math.max(0,this.video.currentTime-.5);break;case"ArrowRight":this.video.currentTime=Math.min(this.video.duration,this.video.currentTime+.5);break;case"ArrowUp":this.next();break;case"ArrowDown":this.prev();break;case"Space":this.toggle();break}}},watch:{current:function(){this.current&&(this.players=yt.a.cloneDeep(this.current.players),this.action=this.current.action,this.replay=this.current.replay)}},mounted:function(){var t=this;window.addEventListener("keyup",this.keystroke),this.video.on("timeupdate",function(){t.time=t.video.currentTime});var e=yt.a.debounce(function(){t.loading=!0},200);this.video.on("seeking",e),this.video.on("seeked",e.cancel),this.video.on("canplay",function(){t.loading=!1}),this.video.on("playing",function(){t.playing=!0}),this.video.on("pause",function(){t.playing=!1}),this.current&&(this.players=yt.a.cloneDeep(this.current.players))},destroyed:function(){window.removeEventListener("keyup",this.keystroke)}},$t=Mt,Nt=(a("e245"),a("169a")),Rt=a("8e36"),zt=a("ba0d"),qt=a("b73d"),Bt=Object(d["a"])($t,ht,ft,!1,null,"273b2698",null);Bt.options.__file="Editor.vue";var Ht=Bt.exports;v()(Bt,{VBtn:f["a"],VCard:U["a"],VCardText:I["a"],VContainer:$["a"],VDialog:Nt["a"],VFlex:N["a"],VIcon:R["a"],VLayout:q["a"],VProgressLinear:Rt["a"],VSlider:zt["a"],VSwitch:qt["a"],VToolbar:_["a"],VToolbarTitle:w["b"]});var Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{sm12:""}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[a("h1",[t._v("Datasets")])]),a("v-card-text",[a("p",[t._v("\n            Datasets created with the\n            SQUASH"),a("span",{staticClass:"font-weight-bold"},[t._v("AI")]),t._v(" label editor\n            are currently distributed in the\n            "),a("a",{attrs:{href:"https://github.com/squashai/datasets",target:"blank"}},[a("span",[t._v("squashai/datasets")])]),t._v("\n            GitHub project.\n          ")])])],1)],1),a("v-flex",{attrs:{xs12:"",sm6:"",md3:"","d-flex":""}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[a("h2",[t._v("Summary")])]),a("v-divider"),a("v-card-text",[a("v-list",{attrs:{dense:""}},[a("v-list-tile",[a("v-list-tile-content",[t._v("Total projects:")]),a("v-list-tile-content",{staticClass:"align-end"},[t._v("\n                "+t._s(t.projects&&t.projects.length||0)+"\n              ")])],1),a("v-list-tile",[a("v-list-tile-content",[t._v("Total labels:")]),a("v-list-tile-content",{staticClass:"align-end"},[t._v("\n                "+t._s(t.total)+"\n              ")])],1),a("v-list-tile",[a("v-list-tile-content",[t._v("Action labels:")]),a("v-list-tile-content",{staticClass:"align-end"},[t._v("\n                "+t._s(t.actions)+"\n              ")])],1),a("v-list-tile",[a("v-list-tile-content",[t._v("Replay labels:")]),a("v-list-tile-content",{staticClass:"align-end"},[t._v("\n                "+t._s(t.replays)+"\n              ")])],1)],1)],1)],1)],1),a("v-flex",{attrs:{xs12:"",sm6:"",md3:"","d-flex":""}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[a("h2",[t._v("Player Names")])]),a("v-divider"),a("v-card-text",[a("v-list",{attrs:{dense:""}},t._l(t.names,function(e,n){return a("v-list-tile",{key:n},[a("v-list-tile-content",[t._v(t._s(n)+":")]),a("v-list-tile-content",{staticClass:"align-end"},[t._v("\n                "+t._s(e)+"\n              ")])],1)}))],1)],1)],1),a("v-flex",{attrs:{xs12:"",sm6:"",md3:"","d-flex":""}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[a("h2",[t._v("Shirt Colors")])]),a("v-divider"),a("v-card-text",[a("v-list",{attrs:{dense:""}},t._l(t.colors,function(e,n){return a("v-list-tile",{key:n},[a("v-list-tile-content",[a("span",[a("v-icon",{staticClass:"box",attrs:{color:n}},[t._v("stars")])],1)]),a("v-list-tile-content",{staticClass:"align-end"},[t._v("\n                "+t._s(e)+"\n              ")])],1)}))],1)],1)],1),a("v-flex",{attrs:{xs12:"",sm6:"",md3:"","d-flex":""}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",[a("h2",[t._v("Court Coverage")])]),a("v-divider"),a("v-img",{staticClass:"white--text",attrs:{src:t.parquet}},[a("table",t._l(t.coverage,function(e,n){return a("tr",{key:n},t._l(e,function(e,n){return a("td",{key:n,staticClass:"font-weight-bold"},[t._v("\n                "+t._s(e)+"\n              ")])}))}))])],1)],1)],1)],1)},Qt=[],Jt=(a("ac6a"),a("5df3"),{data:function(){return{projects:null,parquet:Ct.a}},computed:{total:function(){return yt.a.reduce(this.projects,function(t,e){return t+e.labels.length},0)},actions:function(){return yt.a.reduce(this.projects,function(t,e){return t+yt.a.reduce(e.labels,function(t,e){return t+(e.action?1:0)},0)},0)},replays:function(){return yt.a.reduce(this.projects,function(t,e){return t+yt.a.reduce(e.labels,function(t,e){return t+(e.replay?1:0)},0)},0)},names:function(){var t={};return yt.a.each(this.projects,function(e){yt.a.each(e.labels,function(e){yt.a.each(e.players,function(e){e.visible&&(t[e.name]=(t[e.name]||0)+1)})})}),t},colors:function(){var t={};return yt.a.each(this.projects,function(e){yt.a.each(e.labels,function(e){yt.a.each(e.players,function(e){e.visible&&(t[e.color]=(t[e.color]||0)+1)})})}),t},coverage:function(){var t=5,e=6.4,a=9.75,n=yt.a.times(t,function(){return yt.a.times(t,function(){return 0})});return yt.a.each(this.projects,function(r){yt.a.each(r.labels,function(r){yt.a.each(r.players,function(r){if(r.visible){var i=Math.floor((r.x+e/2)/(e/t)),s=Math.floor((r.y+a/2)/(a/t));n[t-s-1][i]+=1}})})}),n}},mounted:function(){var t=Object(Z["a"])(regeneratorRuntime.mark(function t(){var e,a,n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(K.datasetListUrl);case 2:return e=t.sent,t.next=5,e.json();case 5:return a=t.sent,n=yt.a.filter(a,function(t){return t.name.match(/\.json$/)}),t.next=9,Promise.all(yt.a.map(n,function(t){return fetch(t.download_url)}));case 9:return r=t.sent,t.next=12,Promise.all(yt.a.map(r,function(t){return t.json()}));case 12:this.projects=t.sent;case 13:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}),Yt=Jt,Zt=(a("af04"),a("ce7e")),Kt=Object(d["a"])(Yt,Gt,Qt,!1,null,null,null);Kt.options.__file="Data.vue";var Wt=Kt.exports;v()(Kt,{VCard:U["a"],VCardText:I["a"],VCardTitle:M["a"],VContainer:$["a"],VDivider:Zt["a"],VFlex:N["a"],VIcon:R["a"],VImg:z["a"],VLayout:q["a"],VList:m["a"],VListTile:b["a"],VListTileContent:y["a"]}),n["a"].use(D["a"]);var Xt=new D["a"]({routes:[{path:"/",name:"home",component:Q},{path:"/editor",name:"editor",component:vt},{path:"/editor/edit",name:"edit",component:Ht,props:!0},{path:"/data",name:"data",component:Wt}]});n["a"].config.productionTip=!1,new n["a"]({router:Xt,render:function(t){return t(L)}}).$mount("#app")},"63fd":function(t,e){if("undefined"===typeof cannon){var a=new Error("Cannot find module 'cannon'");throw a.code="MODULE_NOT_FOUND",a}t.exports=cannon},7733:function(t,e,a){},8508:function(t,e,a){},"860b":function(t,e,a){},"964f":function(t,e,a){},af04:function(t,e,a){"use strict";var n=a("860b"),r=a.n(n);r.a},cb65:function(t,e,a){"use strict";var n=a("964f"),r=a.n(n);r.a},cc0e:function(t,e,a){"use strict";var n=a("4c71"),r=a.n(n);r.a},cc3a:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.8d77d165.png"},d4bd:function(t,e,a){"use strict";var n=a("8508"),r=a.n(n);r.a},e245:function(t,e,a){"use strict";var n=a("cc3a"),r=a.n(n);r.a}});
//# sourceMappingURL=app.4500b7ce.js.map