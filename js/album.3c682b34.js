(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["album"],{"03b1":function(t,a,s){},"0a17":function(t,a,s){t.exports=s.p+"img/search.403f1f98.svg"},"188f":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"items"},t._l(t.list,(function(a,n){return e("li",{key:n,staticClass:"item",on:{click:function(s){return t.$emit("item-route",{id:a.id,type:t.type})}}},["ranking"==t.type?e("span",{staticClass:"ranking",class:{top3:n<3}},[t._v(" "+t._s((""+(n+1)).padStart(t.list.length.toString().length,0))+" ")]):t._e(),e("span",{staticClass:"thumb",class:{album:"new-albums"==t.type,hide:"search-list"==t.type},style:{backgroundImage:"url("+("new-albums"==t.type?a.picUrl:a.album&&a.album.picUrl||a.album.artist&&a.album.artist.img1v1Url||t.defArtImg)+"?param=120y120)"}}),e("span",{staticClass:"infos"},[e("div",{staticClass:"name"},["new-albums"==t.type?e("label",{staticClass:"size"},[e("img",{attrs:{src:s("b2b8")}}),t._v(t._s(a.size))]):t._e(),t._v(" "+t._s(a.name)+" "),a.alias&&a.alias.length?e("label",{staticClass:"alias"},[t._v("("+t._s(t.alias(a.alias))+")")]):t._e()]),e("div",{staticClass:"names"},[t._v(" "+t._s(1==a.artists.length?"new-albums"==t.type?a.artist.name:a.artists[0].name:a.artists.reduce((function(t,s,e){return t+(s.name+(a.artists.length!=e+1?" / ":""))}),""))+" ")])]),a.duration?e("span",{staticClass:"duration"},[t._v(t._s(t.formatSeconds(a.duration,1e3)))]):t._e()])})),0)},n=[],i=s("1d30"),l=s("182a"),c=s("5fb0"),r={name:"Items",props:{type:{type:String},list:{type:Array,default:function(){return[]}}},data:function(){return{defArtImg:c["a"]}},methods:{alias:i["a"],formatSeconds:l["a"]}},o=r,u=(s("b2dd"),s("2877")),m=Object(u["a"])(o,e,n,!1,null,"37ef9466",null);a["a"]=m.exports},"2d5b":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"skeleton"},["list"==t.type?s("ul",{staticClass:"items"},t._l(10,(function(a){return s("li",{key:a,staticClass:"item"},[s("span",{staticClass:"thumb",class:{album:t.isAlbum}}),t._m(0,!0)])})),0):t._e()])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",{staticClass:"infos"},[s("div",{staticClass:"name"}),s("div",{staticClass:"names"})])}],i={name:"Skeleton",props:{type:{type:String,default:"list"},isAlbum:{type:Boolean,default:!1}}},l=i,c=(s("9183"),s("2877")),r=Object(c["a"])(l,e,n,!1,null,"3c31cffd",null);a["a"]=r.exports},"2edb":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"album-index"},[e("app-top"),e("back",{on:{back:t.handleBack}}),e("div",{staticClass:"logo-pos"},[e("logo")],1),e("search-button"),e("h3",{staticClass:"title"},[t._v("热门新碟"),e("i",{staticClass:"total"},[t._v("共"+t._s(t.hots.length)+"张")])]),t.hots.length>0?e("ul",{staticClass:"hots"},t._l(t.hots,(function(a,n){return e("li",{key:n,on:{click:function(s){return t.handleItemRoute({id:a.id})}}},[e("label",{staticClass:"size"},[e("img",{attrs:{src:s("b2b8")}}),t._v(t._s(a.size))]),e("img",{attrs:{src:a.picUrl+"?param=200y200"}}),e("div",{staticClass:"wrap"},[e("label",{staticClass:"name"},[t._v(t._s(a.name))]),e("label",{staticClass:"names"},[t._v(" "+t._s(1==a.artists.length?a.artist.name:a.artists.reduce((function(t,s,e){return t+(s.name+(a.artists.length!=e+1?" / ":""))}),""))+" ")])])])})),0):e("ul",{staticClass:"shadow"},t._l(5,(function(t){return e("li",{key:t})})),0),e("h3",{staticClass:"title"},[t._v("一周新碟"),e("i",{staticClass:"total"},[t._v("共"+t._s(t.total)+"张")])]),t.newList.length>0?e("items",{attrs:{type:"new-albums",list:t.newList},on:{"item-route":t.handleItemRoute}}):e("skeleton",{attrs:{isAlbum:!0}}),e("page-footer")],1)},n=[],i=s("34b2"),l=s("66b7"),c=s("2241"),r=s("9f7a"),o=s("188f"),u=s("2d5b"),m=s("c8cc"),f={name:"AlbumIndex",components:{AppTop:i["a"],Back:l["a"],Logo:c["a"],SearchButton:r["a"],Items:o["a"],Skeleton:u["a"],PageFooter:m["a"]},data:function(){return{hots:[],newList:[],total:0,limit:10,current:1}},methods:{init:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.newList=[],this.current=a,this.$api.album.hot().then((function(a){t.hots=a.albums})),this.$api.album["new"]((this.current-1)*this.limit,this.limit).then((function(a){t.newList=a.weekData,t.total=t.newList.length}))},handleBack:function(){history.back()},handleItemRoute:function(t){var a=t.id;this.$router.push({name:"albumDetail",params:{id:a}})}},created:function(){this.init()}},b=f,p=(s("3aef"),s("2877")),d=Object(p["a"])(b,e,n,!1,null,"6d903d76",null);a["default"]=d.exports},3883:function(t,a,s){},"3aef":function(t,a,s){"use strict";var e=s("5e3c"),n=s.n(e);n.a},"4cb2":function(t,a,s){},"5e3c":function(t,a,s){},"5fb0":function(t,a,s){"use strict";s.d(a,"a",(function(){return e}));var e="https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg"},"66b7":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"back",on:{click:function(a){return t.$emit("back")}}})},n=[],i={name:"Back"},l=i,c=(s("f114"),s("2877")),r=Object(c["a"])(l,e,n,!1,null,"2d086ee5",null);a["a"]=r.exports},6787:function(t,a,s){},"74ad":function(t,a,s){"use strict";var e=s("6787"),n=s.n(e);n.a},9183:function(t,a,s){"use strict";var e=s("3883"),n=s.n(e);n.a},"9b9a":function(t,a,s){"use strict";var e=s("03b1"),n=s.n(e);n.a},"9f7a":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{name:"zoom"}},[t.show?e("a",{staticClass:"search-button",on:{click:function(a){return t.$router.push({name:"searchIndex"})}}},[e("img",{attrs:{src:s("0a17")}})]):t._e()])},n=[],i={name:"SearchButton",data:function(){return{show:!1}},mounted:function(){this.show=!0}},l=i,c=(s("74ad"),s("2877")),r=Object(c["a"])(l,e,n,!1,null,"6ba87d5b",null);a["a"]=r.exports},b2b8:function(t,a,s){t.exports=s.p+"img/songlist-active.f332bfd9.svg"},b2dd:function(t,a,s){"use strict";var e=s("4cb2"),n=s.n(e);n.a},bdfa:function(t,a,s){},c8cc:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page-footer"},[s("a",{on:{click:t.go2Top}},[t._v("回到顶部")])])},n=[],i={name:"PageFooter",methods:{go2Top:function(){document.querySelector(".app-top").scrollIntoView({behavior:"smooth",block:"start"})}}},l=i,c=(s("9b9a"),s("2877")),r=Object(c["a"])(l,e,n,!1,null,"7a1ce8ae",null);a["a"]=r.exports},f114:function(t,a,s){"use strict";var e=s("bdfa"),n=s.n(e);n.a}}]);