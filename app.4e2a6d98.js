(function(t){function e(e){for(var n,i,l=e[0],o=e[1],c=e[2],u=0,d=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},r={app:0},s=[];function l(t){return o.p+"js/"+({album:"album","album-detail~playlist-detail~program-detail~song-detail":"album-detail~playlist-detail~program-detail~song-detail","album-detail":"album-detail","playlist-detail":"playlist-detail","program-detail":"program-detail","song-detail":"song-detail",artist:"artist","artist-detail":"artist-detail","not-found":"not-found","playlist~ranking-index":"playlist~ranking-index",playlist:"playlist","ranking-index":"ranking-index",radio:"radio","radio-detail":"radio-detail","ranking-detail":"ranking-detail","ranking-list":"ranking-list","search-detail":"search-detail","search-index":"search-index",song:"song","user-detail":"user-detail","user-index":"user-index"}[t]||t)+"."+{album:"71277b0b","album-detail~playlist-detail~program-detail~song-detail":"eb94f6fb","album-detail":"c442ea42","playlist-detail":"d2a6c287","program-detail":"402a7443","song-detail":"870dbc2c",artist:"243d0302","artist-detail":"39eb7087","not-found":"f355985d","playlist~ranking-index":"20c48f15",playlist:"f766d275","ranking-index":"0024be0b",radio:"a6ff6ee3","radio-detail":"da7c7c19","ranking-detail":"be497ffb","ranking-list":"53412fab","search-detail":"5457ac6b","search-index":"62f67650",song:"415c987c","user-detail":"e9d44c18","user-index":"2edaa01c"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={album:1,"album-detail~playlist-detail~program-detail~song-detail":1,"album-detail":1,"playlist-detail":1,"program-detail":1,"song-detail":1,artist:1,"artist-detail":1,"not-found":1,"playlist~ranking-index":1,playlist:1,"ranking-index":1,radio:1,"radio-detail":1,"ranking-detail":1,"ranking-list":1,"search-detail":1,"search-index":1,song:1,"user-detail":1,"user-index":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="css/"+({album:"album","album-detail~playlist-detail~program-detail~song-detail":"album-detail~playlist-detail~program-detail~song-detail","album-detail":"album-detail","playlist-detail":"playlist-detail","program-detail":"program-detail","song-detail":"song-detail",artist:"artist","artist-detail":"artist-detail","not-found":"not-found","playlist~ranking-index":"playlist~ranking-index",playlist:"playlist","ranking-index":"ranking-index",radio:"radio","radio-detail":"radio-detail","ranking-detail":"ranking-detail","ranking-list":"ranking-list","search-detail":"search-detail","search-index":"search-index",song:"song","user-detail":"user-detail","user-index":"user-index"}[t]||t)+"."+{album:"2b66f9d7","album-detail~playlist-detail~program-detail~song-detail":"2bf5444d","album-detail":"51b161dc","playlist-detail":"4ce9ff1e","program-detail":"61ac397e","song-detail":"e4623175",artist:"38f752fb","artist-detail":"ba94ff31","not-found":"88cb015d","playlist~ranking-index":"3baa865d",playlist:"2feb7714","ranking-index":"dee89ef4",radio:"0c1ad917","radio-detail":"6720b719","ranking-detail":"6acdd262","ranking-list":"215ad4d5","search-detail":"0163cdc5","search-index":"0a79d204",song:"6fa76df6","user-detail":"5eebdd87","user-index":"a830fad1"}[t]+".css",r=o.p+n,s=document.getElementsByTagName("link"),l=0;l<s.length;l++){var c=s[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===r))return e()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],u=c.getAttribute("data-href");if(u===n||u===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete i[t],p.parentNode.removeChild(p),a(s)},p.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){i[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=l(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,a[1](d)}r[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0c6b":function(t,e,a){},1187:function(t,e,a){t.exports=a.p+"img/loop.e7fdd1a1.svg"},"182a":function(t,e,a){"use strict";a("0d03"),a("d3b7"),a("e25e"),a("25f0"),a("4d90");e["a"]=function(t,e){var a=e?parseInt(t)/e:parseInt(t),n=0,i=0;a>60&&(n=parseInt(a/60),a=parseInt(a%60),n>=60&&(i=parseInt(n/60),n=parseInt(n%60)));var r=parseInt(a).toString().padStart(2,"0");return r=n>0?parseInt(n).toString().padStart(2,"0")+":"+r:"00:"+r,i>0&&(r=parseInt(i).toString().padStart(2,"0")+":"+r),r}},"1d30":function(t,e,a){"use strict";a("13d5");e["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e="";return e=t.reduce((function(e,a,n){return e+=a,n+1!=t.length&&(e+=" / "),e}),e),e}},2015:function(t,e,a){},"204e":function(t,e,a){"use strict";var n=a("2015"),i=a.n(n);i.a},2241:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.action}},[t.show?n("img",{staticClass:"logo",attrs:{src:a("4aad")},on:{click:function(e){"/"!=t.$route.path&&t.$router.push({path:"/"})}}}):t._e()])},i=[],r=["fade","slide-fade","zoom","rotate"],s={name:"Logo",props:{animation:{type:String,default:""}},data:function(){return{show:!1,action:"fade"}},created:function(){this.show=!1,this.animation?this.action=this.animation:this.action=r[Math.random()*r.length>>0]},mounted:function(){this.show=!0}},l=s,o=(a("f606"),a("2877")),c=Object(o["a"])(l,n,i,!1,null,"aeb3e462",null);e["a"]=c.exports},"232d":function(t,e,a){"use strict";var n=a("920e"),i=a.n(n);i.a},"2d94":function(t,e,a){"use strict";var n=a("818d"),i=a.n(n);i.a},"2f73":function(t,e,a){"use strict";var n=a("0c6b"),i=a.n(n);i.a},"34b2":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"appTop",staticClass:"app-top"})},i=[],r={name:"AppTop",watch:{"$route.params":function(){var t=this;this.$nextTick((function(){var e=t.$refs.appTop;e&&e.scrollIntoView({block:"end"})}))}}},s=r,l=(a("f89f"),a("2877")),o=Object(l["a"])(s,n,i,!1,null,null,null);e["a"]=o.exports},4081:function(t,e,a){},"4aad":function(t,e,a){t.exports=a.p+"img/astronaut.9a4241eb.svg"},"4d13":function(t,e,a){t.exports=a.p+"img/loop-single.acdc0ab5.svg"},5088:function(t,e,a){"use strict";var n=a("c072"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("background"),a("main",{class:{"has-player":t.showPlayer}},[a("router-view")],1),a("transition",{attrs:{name:"player-slide"}},[t.showPlayer?a("player",{attrs:{track:t.track,list:t.$store.state.player.list},on:{end:t.handleEndTrack,next:t.handleNextTrack,mode:t.handleMode}}):t._e()],1),a("loading",{attrs:{show:t.$store.state.isLoading}}),t.$store.state.alert.show?a("alert",{attrs:{type:t.$store.state.alert.type,content:t.$store.state.alert.content},on:{timeout:function(e){return t.$store.commit("setAlert",{show:!1})}}}):t._e()],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("canvas",{ref:"canvas"})},l=[],o=(a("0d03"),{name:"Background",data:function(){return{canvas:null,size:0,speed:0,x:0,y:0,len:0,waitTime:0,active:!1}},methods:{ready:function(){this.canvas=this.$refs.canvas,this.drawCanvas()},drawCanvas:function(){var t,e=this.canvas;function a(t){this.size=2*Math.random(),this.speed=.07*Math.random(),this.x=t.x,this.y=t.y}function n(){this.reset()}t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},window.requestAnimationFrame=t;var i=e,r=i.getContext("2d"),s=window.innerWidth,l=document.body.offsetHeight;i.width=s,i.height=l,r.fillStyle="#090723",r.fillRect(0,0,s,l),a.prototype.reset=function(){this.size=2*Math.random(),this.speed=.05*Math.random(),this.x=s,this.y=Math.random()*l},a.prototype.update=function(){this.x-=this.speed,this.x<0?this.reset():r.fillRect(this.x,this.y,this.size,this.size)},n.prototype.reset=function(){this.x=Math.random()*s,this.y=0,this.len=80*Math.random()+10,this.speed=8*Math.random()+4,this.size=1*Math.random()+.1,this.waitTime=(new Date).getTime()+3e3*Math.random()+500,this.active=!1},n.prototype.update=function(){this.active?(this.x-=this.speed,this.y+=this.speed,this.x<0||this.y>=l?this.reset():(r.lineWidth=this.size,r.beginPath(),r.moveTo(this.x,this.y),r.lineTo(this.x+this.len,this.y-this.len),r.stroke())):this.waitTime<(new Date).getTime()&&(this.active=!0)};for(var o=[],c=0;c<l;c+=4)o.push(new a({x:Math.random()*s,y:Math.random()*l}));o.push(new n),o.push(new n),function t(){r.fillStyle="#090723",r.fillRect(0,0,s,l);var e="rgba(255, 255, 255, 0.5)";r.fillStyle=e,r.strokeStyle=e;for(var a=o.length;a--;)o[a].update();window.requestAnimationFrame(t)}()}},mounted:function(){this.ready()}}),c=o,u=(a("2f73"),a("2877")),d=Object(u["a"])(c,s,l,!1,null,"663dd31f",null),p=d.exports,m=function(){var t,e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"player",class:{"show-lyric":e.toggleLyric}},[i("span",{staticClass:"pic",style:{"background-image":"url("+e.track.pic+")"}},[i("img",{staticClass:"btn",class:{play:!e.track.play},attrs:{src:e.track.play?a("69b6"):a("af53")},on:{click:e.handlePlay}})]),i("span",{staticClass:"wrap"},[i("div",{staticClass:"w1"},[i("marquee",{attrs:{scrollamount:"3"},on:{click:e.handleRoute}},[i("span",{staticClass:"name"},[e._v(e._s(e.track.name))]),i("span",{staticClass:"artist"},e._l(e.track.artist,(function(t,a){return i("span",{key:a},[i("span",{staticClass:"art"},[e._v(e._s(t.name))]),e._v(e._s(a+1==e.track.artist.length?"":" / "))])})),0)]),i("a",{staticClass:"lyric",class:{none:0==e.track.lyric.length},on:{click:function(t){e.track.lyric.length&&(e.toggleLyric=!e.toggleLyric)}}},[e._v("词")]),i("img",{staticClass:"play-list",attrs:{src:a("6b1c")},on:{click:function(t){return e.handlePlaylist(e.togglePlaylist,2)}}})],1),i("div",{staticClass:"controls"},[i("label",{staticClass:"bar",on:{click:e.handleBar}},[i("i",{staticClass:"inner",style:{width:e.currentTime/e.duration*100+"%"}})]),i("span",{staticClass:"time"},[i("label",{staticClass:"cu"},[e._v(e._s(e.computedCurrentTime))]),i("label",{staticClass:"du"},[e._v(" / "+e._s(e.computedDuration))])])])]),i("p",{staticClass:"a-lyric",class:{toggle:e.toggleLyric}},[e._v(e._s(e.aLyric))]),i("div",{ref:"background",staticClass:"background",class:{show:e.toggleBackground},on:{click:function(t){return t.target!==t.currentTarget?null:e.handlePlaylist(!1,1)}}},[i("transition",{attrs:{name:"play-list"}},[e.togglePlaylist?i("div",{staticClass:"cont"},[i("div",{ref:"option",staticClass:"option"},[i("label",{staticClass:"count"},[e._v("播放列表（"+e._s(e.list.length)+"）")]),i("span",{staticClass:"mode",class:(t={},t[e.mode]=e.mode,t),on:{click:e.handleMode}},[i("img",{staticClass:"loop",attrs:{src:a("1187")}}),i("img",{staticClass:"loop-single",attrs:{src:a("4d13")}}),i("img",{staticClass:"loop-random",attrs:{src:a("ffc2")}})]),i("img",{staticClass:"del-all",attrs:{src:a("6cb0")},on:{click:e.handleDeleteAll}})]),i("ul",{ref:"playlist",staticClass:"playlist"},e._l(e.list,(function(t,n){return i("li",{key:n},[i("label",{class:{active:e.$store.state.player.index==n}},[e._v(e._s((""+(n+1)).padStart(e.list.length.toString().length,0)))]),i("span",{staticClass:"infos",on:{click:function(a){return e.handlePlayNext(t,n)}}},[e.$store.state.player.index==n?i("marquee",[i("span",{staticClass:"na"},[e._v(e._s(t.name)),t.alia.length?i("label",[e._v("("+e._s(e.alias(t.alia))+")")]):e._e()]),i("span",{staticClass:"ar"},[e._v(e._s(t.ar.reduce((function(e,a,n){return e+(a.name+(t.ar.length!=n+1?" / ":""))}),"")))])]):[i("span",{staticClass:"na"},[e._v(e._s(t.name)),t.alia.length?i("label",[e._v("("+e._s(e.alias(t.alia))+")")]):e._e()]),i("span",{staticClass:"ar"},[e._v(e._s(t.ar.reduce((function(e,a,n){return e+(a.name+(t.ar.length!=n+1?" / ":""))}),"")))])]],2),i("img",{staticClass:"delete",attrs:{src:a("571d")},on:{click:function(t){return e.handleDelete(n)}}})])})),0)]):e._e()])],1),i("audio",{ref:"audio",attrs:{src:e.track.src,loop:"loop-single"==e.mode,controls:"",autoplay:""}})])},h=[],f=(a("a4d3"),a("e01a"),a("d28b"),a("a434"),a("d3b7"),a("ac1f"),a("3ca3"),a("466d"),a("5319"),a("1276"),a("ddb0"),a("182a")),g=a("1d30"),v={name:"Player",props:{track:{type:Object,default:function(){}},list:{type:Array,default:function(){return[]}}},data:function(){return{audioInstance:{},duration:0,currentTime:0,toggleLyric:!1,aLyric:"",toggleBackground:!1,togglePlaylist:!1,mode:"loop"}},computed:{computedDuration:function(){var t=Object(f["a"])(this.duration);return 2==t.length&&(t="00:"+t),t},computedCurrentTime:function(){var t=Object(f["a"])(this.currentTime);return 2==t.length&&(t="00:"+t),t}},watch:{computedCurrentTime:function(t){this.updateALyric(t)}},methods:{ready:function(){var t=this;this.audioInstance=this.$refs.audio,this.audioInstance.oncanplaythrough=function(){t.duration=t.audioInstance.duration,t.currentTime=t.audioInstance.currentTime},this.audioInstance.ontimeupdate=function(){t.currentTime=t.audioInstance.currentTime},this.audioInstance.onended=function(){t.$emit("end",t.track)},this.track.play&&this.audioInstance.play()},alias:g["a"],updateALyric:function(t){if(!this.toggleLyric)return"";var e=!0,a=!1,n=void 0;try{for(var i,r=this.track.lyric[Symbol.iterator]();!(e=(i=r.next()).done);e=!0){var s=i.value,l=s.match(/\[.*\]/g);if(l&&(l=l[0].replace(/\[|\]/g,"").split(".")[0],l==t)){this.aLyric=s.replace(/\[.*\]/g,"");break}}}catch(o){a=!0,n=o}finally{try{e||null==r.return||r.return()}finally{if(a)throw n}}},handlePlay:function(){var t=this.$store.state.player;t.play=!t.play,this.$store.commit("setPlayer",t),t.play?this.audioInstance.play():this.audioInstance.pause()},handlePlayNext:function(t,e,a){t.id!=this.track.id&&this.$emit("next",t,e,!1,a)},handleRoute:function(){var t=this.track.pid?"/radio/program/"+this.track.pid:"/song/"+this.track.id;this.$route.path!=t&&this.$router.push({path:t})},handlePlaylist:function(t,e){var a,n=this;1==e?a=!1:2==e&&(a=!t),a?(this.toggleBackground=!0,this.$refs.background.style.display="block",setTimeout((function(){n.togglePlaylist=!0,setTimeout((function(){n.fixScroll(n.$refs.background,n.$refs.option,n.$refs.playlist)}),200)}),110)):(this.togglePlaylist=!1,setTimeout((function(){n.toggleBackground=!1,setTimeout((function(){n.$refs.background.style.display="none"}),200)}),210))},handleBar:function(t){var e=t.layerX||t.offsetX,a=t.currentTarget.clientWidth;this.audioInstance.currentTime=e/a*this.duration},handleDelete:function(t){var e,a=t,n=this.$store.state.player;if(n.list.splice(a,1),a!=n.index){var i=t<n.index?--n.index:n.index;return n.index=i,void this.$store.commit("setPlayer",n)}if(e=n.list[a],!e&&(e=n.list[0],a=0,!e))return n.url="",void this.$store.commit("setPlayer",n);this.handlePlayNext(e,a,"delete")},handleDeleteAll:function(){var t=this.$store.state.player;t.url="",t.play=!1,t.list=[],this.$store.commit("setPlayer",t),this.mode="loop"},handleMode:function(){"loop"==this.mode?this.mode="loop-single":"loop-single"==this.mode?this.mode="loop-random":"loop-random"==this.mode&&(this.mode="loop"),this.$emit("mode",this.mode)},fixScroll:function(t,e,a){var n,i=function(t){t.addEventListener("touchstart",(function(t){n=Math.floor(t.targetTouches[0].clientY)})),t.addEventListener("touchmove",(function(e){var a=Math.floor(e.targetTouches[0].clientY),i=t.scrollTop,r=t.scrollHeight,s=t.clientHeight;i<=0&&a-n>0?e.preventDefault():i>=r-s&&a-n<0&&e.preventDefault()}),!1)};t.style.display="block",t.addEventListener("touchmove",(function(e){e.stopPropagation(),e.target==t&&e.preventDefault()}),!1),i(e),i(a)}},mounted:function(){this.ready()}},y=v,b=(a("2d94"),Object(u["a"])(y,m,h,!1,null,"2b3d1ea7",null)),k=b.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("div",{staticClass:"loading"},[a("div",{staticClass:"spin"})]):t._e()},C=[],_={name:"Loading",props:["show"]},w=_,T=(a("204e"),Object(u["a"])(w,x,C,!1,null,"3fe3ed11",null)),$=T.exports,S=function(){var t,e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"alert"},[n("div",{staticClass:"wrap"},[n("i",{staticClass:"type",class:(t={},t[e.type]=e.type,t)}),n("p",{staticClass:"content"},[e._v(e._s(e.content))])])])},j=[],P={name:"Alert",props:["type","content"],mounted:function(){var t=this;setTimeout((function(){t.$emit("timeout")}),2e3)}},I=P,O=(a("de92"),Object(u["a"])(I,S,j,!1,null,"7b01e18e",null)),L=O.exports,N=(a("d81d"),a("b0c0"),"loop");function A(){var t=this.$store.state.player,e=t.url,a=t.play,n=t.index,i=t.list,r=t.lyric,s=i[n]||{},l={};return 0==i.length?(l.id="",l.pic="",l.name="",l.src="",l.play=!1,l.lyric=[],l.artist=[],l):(s._url||("loading"==e?this.handleNextTrack(s,n,void 0,"list"):this.handleNextTrack(s,n)),l.id=s.id,l.pid=s.pid,l.pic=s.al&&s.al.picUrl+"?param=120y120",l.name=s.name+(s.alia.length?" (".concat(Object(g["a"])(s.alia),")"):""),l.src=e,l.play=a,l.lyric=r,s.ar&&(l.artist=s.ar.map((function(t){return{id:t.id,name:t.name,pic:t.pic}}))),l)}function D(){var t=!!this.$store.state.player.url;return t||(N="loop"),t}function E(t){var e,a,n=t||this.$store.state.player.index,i=this.$store.state.player.list;if("loop"==N)return e=i[n+1],e?a=n+1:(e=i[0],a=0),{nextTrack:e,nextIndex:a};if("loop-single"==N)return a=n,e=i[n],{nextTrack:e,nextIndex:a,isSame:!1};if("loop-random"==N){for(;;)if(a=Math.random()*i.length>>0,a!=this.$store.state.player.index||1==i.length){e=i[a];break}return{nextTrack:e,nextIndex:a,isSame:1==i.length}}}function M(t,e,a){this.$store.commit("setPlayer",{url:t._url,play:a,index:e,list:this.$store.state.player.list,lyric:t._lyric||[]})}function H(t){return Promise.all([this.$api.song.check(t),this.$api.song.url(t),this.$api.song.lyric(t)])}function q(t,e,a,n){var i=this;if(t._url)"cannotplay"==t._url&&this.$store.commit("setAlert",{type:"error",content:"歌曲暂无版权"}),this.setNextTrack(t,e,"cannotplay"!=t._url&&!a);else{if("delete"==n)return;this.fetchNextTrack(t.id).then((function(a){if(!a[0].success){var r=i.getNextTrack(e),s=r.nextTrack,l=r.nextIndex;return l==e?void i.setNextTrack(s,l,!1):void i.handleNextTrack(t,e)}if(t._url=a[1].data[0].url,t._url)a[2].lrc&&a[2].lrc.lyric&&(t._lyric=a[2].lrc.lyric.split("\n")),i.setNextTrack(t,e,"list"!=n);else{var o=i.getNextTrack(e),c=o.nextTrack,u=o.nextIndex;i.handleNextTrack(c,u)}})).catch((function(){i.$store.commit("setAlert",{type:"error",content:"歌曲暂无版权"}),t._url="cannotplay",i.setNextTrack(t,e,!1)}))}}function R(t){var e=this.getNextTrack(),a=e.nextTrack,n=e.nextIndex,i=e.isSame;this.handleNextTrack(a,n,"undefined"==typeof i?t.id==a.id:i)}function z(t){N=t}var B={name:"App",components:{Background:p,Player:k,Loading:$,Alert:L},computed:{track:A,showPlayer:D},methods:{getNextTrack:E,setNextTrack:M,fetchNextTrack:H,handleNextTrack:q,handleEndTrack:R,handleMode:z}},F=B,U=(a("5c0b"),Object(u["a"])(F,i,r,!1,null,null,null)),J=U.exports,W=a("8c4f"),X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-index"},[n("app-top"),n("home-logo"),n("search",{attrs:{suggests:t.suggests,hots:t.hots},on:{search:t.handleSearch,suggest:t.handleSuggest,"hot-keywords":t.handleHot}}),n("home-menu"),n("img",{staticClass:"home-bottom",attrs:{src:a("ec6f")}})],1)},Y=[],K=(a("841c"),a("34b2")),V=a("c106"),G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"home-logo"},[a("logo",{nativeOn:{click:function(e){return t.handleClick(e)}}}),t._m(0)],1)},Q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"text"},[t._v(" skayi.github.io "),a("i",{staticClass:"sub"},[t._v("- 基于网易云音乐 -")])])}],Z=a("2241"),tt={name:"HomeLogo",components:{Logo:Z["a"]},methods:{handleClick:function(){this.$router.push({name:"userIndex"})}}},et=tt,at=(a("5088"),Object(u["a"])(et,G,Q,!1,null,"b1dbea60",null)),nt=at.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-menu"},[a("div",{staticClass:"menu-group"},[a("div",{staticClass:"menu"},[a("router-link",{attrs:{to:"/album"}},[a("i",{staticClass:"icon cd"}),t._v("新碟上架")])],1),a("div",{staticClass:"menu"},[a("router-link",{attrs:{to:"/song"}},[a("i",{staticClass:"icon mu"}),t._v("新歌速递")])],1),a("i",{staticClass:"c1"})]),a("div",{staticClass:"menu-group"},[a("div",{staticClass:"menu-group col"},[a("i",{staticClass:"c2"}),a("i",{staticClass:"c3"}),a("div",{staticClass:"menu-group"},[a("div",{staticClass:"menu"},[a("router-link",{attrs:{to:"/artist"}},[a("i",{staticClass:"icon ar"}),t._v("歌手")])],1),a("div",{staticClass:"menu"},[a("router-link",{attrs:{to:"/playlist"}},[a("i",{staticClass:"icon sl"}),t._v("歌单")])],1),a("i",{staticClass:"c4"})]),a("div",{staticClass:"menu-group"},[a("i",{staticClass:"c5"}),a("i",{staticClass:"c6"}),a("div",{staticClass:"menu"},[a("router-link",{attrs:{to:"/radio"}},[a("i",{staticClass:"icon ra"}),t._v("电台")])],1)])]),a("div",{staticClass:"menu m1"},[a("router-link",{attrs:{to:"/ranking"}},[a("i",{staticClass:"icon tl"}),t._v("榜单")]),a("i",{staticClass:"c7"}),a("i",{staticClass:"c8"}),a("i",{staticClass:"c9"})],1)])])},rt=[],st={name:"HomeMenu"},lt=st,ot=(a("6774"),Object(u["a"])(lt,it,rt,!1,null,"4f2e628f",null)),ct=ot.exports,ut={name:"HomeIndex",components:{AppTop:K["a"],Search:V["a"],HomeLogo:nt,HomeMenu:ct},data:function(){return{suggests:[],hots:[]}},methods:{handleSearch:function(t){this.$router.push({name:"searchDetail",params:{keywords:t}})},handleSuggest:function(t){var e=this;this.$api.search.suggest(t).then((function(t){200==t.code&&(e.suggests=t.result.allMatch)}))},handleHot:function(){var t=this;this.$api.search.hot().then((function(e){200==e.code&&(t.hots=e.result.hots)}))}}},dt=ut,pt=(a("232d"),Object(u["a"])(dt,X,Y,!1,null,null,null)),mt=pt.exports;n["a"].use(W["a"]);var ht=[{path:"/",name:"home",component:mt},{path:"/album",name:"album",component:function(){return a.e("album").then(a.bind(null,"2edb"))}},{path:"/album/:id",name:"albumDetail",component:function(){return Promise.all([a.e("album-detail~playlist-detail~program-detail~song-detail"),a.e("album-detail")]).then(a.bind(null,"f7b4"))}},{path:"/song",name:"song",component:function(){return a.e("song").then(a.bind(null,"2b58"))}},{path:"/song/:id",name:"songDetail",component:function(){return Promise.all([a.e("album-detail~playlist-detail~program-detail~song-detail"),a.e("song-detail")]).then(a.bind(null,"c268"))}},{path:"/artist",name:"artist",component:function(){return a.e("artist").then(a.bind(null,"64a3"))}},{path:"/artist/:id",name:"artistDetail",component:function(){return a.e("artist-detail").then(a.bind(null,"534a"))}},{path:"/playlist",name:"playlist",component:function(){return Promise.all([a.e("playlist~ranking-index"),a.e("playlist")]).then(a.bind(null,"019c"))}},{path:"/playlist/:id",name:"playlistDetail",component:function(){return Promise.all([a.e("album-detail~playlist-detail~program-detail~song-detail"),a.e("playlist-detail")]).then(a.bind(null,"deef"))}},{path:"/radio",name:"radio",component:function(){return a.e("radio").then(a.bind(null,"3eac"))}},{path:"/radio/:id",name:"radioDetail",component:function(){return a.e("radio-detail").then(a.bind(null,"d606"))}},{path:"/radio/program/:id",name:"programDetail",component:function(){return Promise.all([a.e("album-detail~playlist-detail~program-detail~song-detail"),a.e("program-detail")]).then(a.bind(null,"33dc"))}},{path:"/ranking",name:"rankingIndex",component:function(){return Promise.all([a.e("playlist~ranking-index"),a.e("ranking-index")]).then(a.bind(null,"436a"))}},{path:"/ranking/:id",name:"rankingDetail",component:function(){return a.e("ranking-detail").then(a.bind(null,"5fe0"))}},{path:"/ranking/list/:type",name:"rankingList",component:function(){return a.e("ranking-list").then(a.bind(null,"c589"))}},{path:"/search",name:"searchIndex",component:function(){return a.e("search-index").then(a.bind(null,"3818"))}},{path:"/search/:keywords",name:"searchDetail",component:function(){return a.e("search-detail").then(a.bind(null,"48da"))}},{path:"/user",name:"userIndex",component:function(){return a.e("user-index").then(a.bind(null,"e974"))}},{path:"/user/:id",name:"userDetail",component:function(){return a.e("user-detail").then(a.bind(null,"e43d"))}},{path:"*",component:function(){return a.e("not-found").then(a.bind(null,"fb03"))}}],ft=new W["a"]({mode:"history",base:"/",routes:ht}),gt=ft,vt=a("2f62");n["a"].use(vt["a"]);var yt=new vt["a"].Store({state:{isLoading:!1,newSong:[{name:"华语",value:"7",active:!0},{name:"欧美",value:"96",active:!1},{name:"日本",value:"8",active:!1},{name:"韩国",value:"16",active:!1}],artist:[{name:"华语男歌手",value:"1001",initial:"",active:!0},{name:"华语女歌手",value:"1002",initial:"",active:!1},{name:"华语组合/乐队",value:"1003",initial:"",active:!1},{name:"欧美男歌手",value:"2001",initial:"",active:!1},{name:"欧美女歌手",value:"2002",initial:"",active:!1},{name:"欧美组合/乐队",value:"2003",initial:"",active:!1},{name:"日本男歌手",value:"6001",initial:"",active:!1},{name:"日本女歌手",value:"6002",initial:"",active:!1},{name:"日本组合/乐队",value:"6003",initial:"",active:!1},{name:"韩国男歌手",value:"7001",initial:"",active:!1},{name:"韩国女歌手",value:"7002",initial:"",active:!1},{name:"韩国组合/乐队",value:"7003",initial:"",active:!1},{name:"其他男歌手",value:"4001",initial:"",active:!1},{name:"其他女歌手",value:"4002",initial:"",active:!1},{name:"其他组合/乐队",value:"4003",initial:"",active:!1},{name:"入驻歌手",value:"5001",initial:"",active:!1}],playlist:{selectCategory:{name:"全部"}},radio:{selectCategory:{id:2001,name:"创作|翻唱"}},player:{url:"",play:!1,index:0,list:[],lyric:[]},alert:{show:!1,type:"success",content:"success"}},mutations:{setIsLoading:function(t,e){t.isLoading=e},setNewSong:function(t,e){t.newSong=t.newSong.map((function(t){return e.value==t.value?t.active=!0:t.active=!1,t}))},setArtist:function(t,e){t.artist=t.artist.map((function(t){return e.value==t.value?(t.initial=e.initial,t.active=!0):(t.initial="0",t.active=!1),t}))},setPlaylist:function(t,e){t.playlist.selectCategory=e},setRadio:function(t,e){t.radio.selectCategory=e},setPlayer:function(t,e){t.player=e},setAlert:function(t,e){t.alert=Object.assign({},{show:!0},e)}},actions:{},modules:{}}),bt=(a("99af"),a("bc3a")),kt=a.n(bt),xt="".concat(location.protocol,"//").concat(location.hostname,":").concat(location.port||80);function Ct(t,e){return new Promise((function(a,n){kt.a.get(t,e).then((function(t){a(t)}),(function(t){n(t)}))}))}kt.a.defaults.timeout=2e4,kt.a.defaults.withCredentials=!0,kt.a.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8",kt.a.defaults.baseURL=xt,kt.a.interceptors.request.use((function(t){return"post"===t.method&&(t.data=JSON.stringify(t.data)),t}),(function(t){return t})),kt.a.interceptors.response.use((function(t){return 200===t.status&&t.data?t.data:t}),(function(t){return Promise.reject(t)}));var _t={search:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2?arguments[2]:void 0;return Ct("/search",{params:{keywords:t,offset:e,limit:a}})},suggest:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"mobile";return Ct("/search/suggest/",{params:{keywords:t,type:e}})},hot:function(){return Ct("/search/hot")},hotDetail:function(){return Ct("/search/hot/detail")}},wt={hot:function(){return Ct("/album/newest")},new:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;return Ct("/top/album",{params:{offset:t,limit:e}})},detail:function(t){return Ct("/album",{params:{id:t}})},comment:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2?arguments[2]:void 0;return Ct("/comment/album",{params:{id:t,offset:e,limit:a}})}},Tt={hot:function(){return Ct("/personalized/newsong")},new:function(t){return Ct("/top/song",{params:{type:t}})},check:function(t){return Ct("/check/music",{params:{id:t}})},url:function(t){return Ct("/song/url",{params:{id:t}})},detail:function(t){return Ct("/song/detail",{params:{ids:t}})},simiSong:function(t){return Ct("/simi/song",{params:{id:t}})},lyric:function(t){return Ct("/lyric",{params:{id:t}})},comment:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2?arguments[2]:void 0;return Ct("/comment/music",{params:{id:t,offset:e,limit:a}})}},$t={hot:function(t,e){return Ct("/top/artists",{params:{offset:t,limit:e}})},list:function(t,e,a,n){return Ct("/artist/list",{params:{cat:t,initial:e,offset:a,limit:n}})},desc:function(t){return Ct("/artist/desc",{params:{id:t}})},songs:function(t){return Ct("/artists",{params:{id:t}})},albums:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2?arguments[2]:void 0;return Ct("/artist/album",{params:{id:t,offset:e,limit:a}})},simiArtist:function(t){return Ct("/simi/artist",{params:{id:t}})}},St={category:function(t){return Ct(t?"/playlist/hot":"/playlist/catlist")},top:function(t,e,a){return Ct("/top/playlist",{params:{order:t,cat:e,limit:a}})},highquality:function(t,e,a){return Ct("/top/playlist/highquality",{params:{cat:t,before:e,limit:a}})},detail:function(t){return Ct("/playlist/detail",{params:{id:t}})},simiPlaylist:function(t){return Ct("/simi/playlist",{params:{id:t}})},related:function(t){return Ct("/related/playlist",{params:{id:t}})},comment:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2?arguments[2]:void 0;return Ct("/comment/playlist",{params:{id:t,offset:e,limit:a}})}},jt={hot:function(t,e){return Ct("/dj/hot",{params:{offset:t,limit:e}})},category:function(){return Ct("/dj/catelist")},recommendOfCategory:function(t){return Ct("/dj/recommend/type",{params:{type:t}})},hotOfCategory:function(t,e,a){return Ct("/dj/radio/hot",{params:{cateId:t,offset:e,limit:a}})},detail:function(t){return Ct("/dj/detail",{params:{rid:t}})},program:function(t,e,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return Ct("/dj/program",{params:{rid:t,offset:e,limit:a,asc:n}})},programDetail:function(t){return Ct("/dj/program/detail",{params:{id:t}})},recommend:function(){return Ct("/dj/recommend")},recommendOfProgram:function(){return Ct("/personalized/djprogram")},programComment:function(t,e,a){return Ct("/comment/dj",{params:{id:t,offset:e,limit:a}})}},Pt={total:function(){return Ct("/toplist")},toplist:function(t){return Ct("/top/list",{params:{idx:t}})},artist:function(){return Ct("/toplist/artist")},program24h:function(t){return Ct("/dj/program/toplist/hours",{params:{limit:t}})},dj24h:function(t){return Ct("/dj/toplist/hours",{params:{limit:t}})},newDj:function(t){return Ct("/dj/toplist/newcomer",{params:{limit:t}})},hotDj:function(t){return Ct("/dj/toplist/popular",{params:{limit:t}})},newRadio:function(t){return Ct("/dj/toplist",{params:{type:"new",limit:t}})},hotRadio:function(t){return Ct("/dj/toplist",{params:{type:"hot",limit:t}})},program:function(t){return Ct("/dj/program/toplist",{params:{limit:t}})}},It={detail:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"32953014";return Ct("/user/detail",{params:{uid:t}})},playlist:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"32953014",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:18;return Ct("/user/playlist",{params:{uid:t,offset:e,limit:a}})},program:function(t){return Ct("/user/dj",{params:{uid:t}})}},Ot={search:_t,album:wt,song:Tt,artist:$t,playlist:St,radio:jt,ranking:Pt,user:It};n["a"].config.productionTip=!1,n["a"].prototype.$api=Ot,new n["a"]({router:gt,store:yt,render:function(t){return t(J)}}).$mount("#app")},"571d":function(t,e,a){t.exports=a.p+"img/delete.2d40be6d.svg"},"59d1":function(t,e,a){"use strict";var n=a("7329"),i=a.n(n);i.a},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),i=a.n(n);i.a},6774:function(t,e,a){"use strict";var n=a("b2f6"),i=a.n(n);i.a},6893:function(t,e,a){},"69b6":function(t,e,a){t.exports=a.p+"img/pause.99794c68.svg"},"6ac7":function(t,e,a){},"6b1c":function(t,e,a){t.exports=a.p+"img/play-list.a5d9140e.svg"},"6cb0":function(t,e,a){t.exports=a.p+"img/delete-all.3c02e1d8.svg"},7329:function(t,e,a){},"818d":function(t,e,a){},"920e":function(t,e,a){},"9c0c":function(t,e,a){},af53:function(t,e,a){t.exports=a.p+"img/play.c0d46cfd.svg"},b2f6:function(t,e,a){},c072:function(t,e,a){},c106:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"text",placeholder:"搜索音乐"},domProps:{value:t.value},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSearch(e)},input:[function(e){e.target.composing||(t.value=e.target.value)},t.handleSuggest],focus:t.handleHot,blur:function(e){t.isHot=!1}}}),a("a",{on:{click:t.handleSearch}}),t.value&&t.isSuggesting&&t.suggests&&t.suggests.length?a("ul",{staticClass:"suggests"},t._l(t.suggests,(function(e,n){return a("li",{key:n,on:{click:function(a){return t.handleClick(e.keyword)}}},[t._v(t._s(e.keyword))])})),0):t._e(),t.isHot&&t.hots&&t.hots.length?a("ul",{staticClass:"hots"},t._l(t.hots,(function(e,n){return a("li",{key:n,on:{mousedown:function(a){return t.handleClick(e.first)},touchstart:function(a){return t.handleClick(e.first)}}},[t._v(t._s(e.first))])})),0):t._e()])},i=[],r=function(t,e){var a;return function(){clearTimeout(a),a=setTimeout((function(){t()}),e)}},s={name:"Search",props:["keywords","suggests","hots"],data:function(){return{value:"",isSuggesting:!1,isHot:!1}},methods:{init:function(){this.keywords&&(this.value=this.keywords),this.handleSearch=r(this.handleSearch,200),this.handleSuggest=r(this.handleSuggest,200)},handleSearch:function(){this.value&&(this.isSuggesting=!1,this.$emit("search",this.value))},handleSuggest:function(){this.value&&(this.isHot=!1,this.isSuggesting=!0,this.$emit("suggest",this.value))},handleHot:function(){this.value&&this.isSuggesting&&this.suggests&&this.suggests.length?this.isHot=!1:(this.isHot=!0,this.$emit("hot-keywords"))},handleClick:function(t){this.value=t,this.handleSearch()}},created:function(){this.init()}},l=s,o=(a("59d1"),a("2877")),c=Object(o["a"])(l,n,i,!1,null,"541900cb",null);e["a"]=c.exports},de92:function(t,e,a){"use strict";var n=a("4081"),i=a.n(n);i.a},ec6f:function(t,e,a){t.exports=a.p+"img/star.097613ea.svg"},f606:function(t,e,a){"use strict";var n=a("6893"),i=a.n(n);i.a},f89f:function(t,e,a){"use strict";var n=a("6ac7"),i=a.n(n);i.a},ffc2:function(t,e,a){t.exports=a.p+"img/loop-random.28e71ff2.svg"}});