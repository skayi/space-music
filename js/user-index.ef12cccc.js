(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user-index"],{1021:function(t,a,e){"use strict";var s=e("260a"),n=e.n(s);n.a},"260a":function(t,a,e){},"66b7":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"back",on:{click:function(a){return t.$emit("back")}}})},n=[],c={name:"Back"},r=c,o=(e("f114"),e("2877")),i=Object(o["a"])(r,s,n,!1,null,"2d086ee5",null);a["a"]=i.exports},bdfa:function(t,a,e){},c8cc:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page-footer"},[e("a",{on:{click:t.go2Top}},[t._v("回到顶部")])])},n=[],c={name:"PageFooter",methods:{go2Top:function(){this.$parent.$el.scrollTo(0,0)}}},r=c,o=(e("fe00"),e("2877")),i=Object(o["a"])(r,s,n,!1,null,"98b499f6",null);a["a"]=i.exports},e962:function(t,a,e){},e974:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"user-index"},[e("app-top"),e("back",{on:{back:t.handleBack}}),e("div",{staticClass:"logo-pos"},[e("logo")],1),e("search",{attrs:{placeholder:"搜索用户",suggests:t.suggests,hots:t.hots},on:{search:t.handleSearch,suggest:t.handleSuggest}}),e("h3",{staticClass:"title"},[t._v(" 用户推荐"),e("i",{staticClass:"total"},[t._v("共"+t._s(t.recommend.length)+"名")])]),e("ul",{staticClass:"list"},t._l(t.recommend,(function(a,s){return e("li",{key:s},[e("router-link",{attrs:{to:"/user/"+a.id}},[e("img",{attrs:{src:a.avatarUrl}}),t._v(t._s(a.name))])],1)})),0),e("page-footer")],1)},n=[],c=(e("ac1f"),e("841c"),e("34b2")),r=e("66b7"),o=e("2241"),i=e("c106"),u=e("c8cc"),l={name:"UserIndex",components:{AppTop:c["a"],Back:r["a"],Logo:o["a"],Search:i["a"],PageFooter:u["a"]},data:function(){return{suggests:[],hots:[],recommend:[{id:"397644",name:"SKaYi",avatarUrl:"http://p1.music.126.net/lXqltC0wsekju78bTXD7yA==/18532268488018202.jpg?param=120y120"},{id:"531731396",name:"秋秋听你",avatarUrl:"http://p1.music.126.net/cEoYLvmC_iSRUTYSTK727g==/109951164611929276.jpg?param=120y120"},{id:"15237069",name:"梧桐街23号",avatarUrl:"http://p1.music.126.net/b563NmdHoJuqPDSBDYJISQ==/5924168650638329.jpg?param=120y120"},{id:"48168578",name:"p_max",avatarUrl:"http://p1.music.126.net/TqpNe5p1d6nYw7_xw5X6fg==/109951162959939113.jpg?param=120y120"}]}},methods:{handleBack:function(){history.back()},handleSearch:function(t){this.$router.push({name:"searchDetail",params:{keywords:t,category:1002}})},handleSuggest:function(t){var a=this;this.$api.search.suggest(t).then((function(t){200==t.code&&(a.suggests=t.result.allMatch)}))}}},p=l,h=(e("1021"),e("2877")),f=Object(h["a"])(p,s,n,!1,null,"0b4f55d0",null);a["default"]=f.exports},f114:function(t,a,e){"use strict";var s=e("bdfa"),n=e.n(s);n.a},fe00:function(t,a,e){"use strict";var s=e("e962"),n=e.n(s);n.a}}]);