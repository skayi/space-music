(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user-detail"],{"0a17":function(t,s,a){t.exports=a.p+"img/search.403f1f98.svg"},"106e":function(t,s,a){t.exports=a.p+"img/radio.b86ccf58.svg"},3648:function(t,s,a){"use strict";var e=a("97fa"),i=a.n(e);i.a},"41d3":function(t,s,a){"use strict";var e=a("b6a7"),i=a.n(e);i.a},"54ee":function(t,s,a){},"66b7":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"back",on:{click:function(s){return t.$emit("back")}}})},i=[],n={name:"Back"},r=n,c=(a("8293"),a("2877")),o=Object(c["a"])(r,e,i,!1,null,"7612d1d8",null);s["a"]=o.exports},6787:function(t,s,a){},"6fc1":function(t,s,a){t.exports=a.p+"img/time.7b9af142.svg"},"74ad":function(t,s,a){"use strict";var e=a("6787"),i=a.n(e);i.a},8285:function(t,s,a){},8293:function(t,s,a){"use strict";var e=a("8772"),i=a.n(e);i.a},8772:function(t,s,a){},9158:function(t,s,a){"use strict";a("0d03");s["a"]=function(t,s){var a=new Date(t),e=a.getFullYear(),i=a.getMonth()+1,n=a.getDate();return e+(s?"年":"-")+(i<10?"0"+i:i)+(s?"月":"-")+(n<10?"0"+n:n)+(s?"日":"")}},9628:function(t,s,a){t.exports=a.p+"img/headphone.8ca2546e.svg"},"97fa":function(t,s,a){},9865:function(t,s,a){"use strict";var e=a("8285"),i=a.n(e);i.a},"9f7a":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"zoom"}},[t.show?e("a",{staticClass:"search-button",on:{click:function(s){return t.$router.push({name:"searchIndex"})}}},[e("img",{attrs:{src:a("0a17")}})]):t._e()])},i=[],n={name:"SearchButton",data:function(){return{show:!1}},mounted:function(){this.show=!0}},r=n,c=(a("74ad"),a("2877")),o=Object(c["a"])(r,e,i,!1,null,"6ba87d5b",null);s["a"]=o.exports},b2b8:function(t,s,a){t.exports=a.p+"img/songlist-active.f332bfd9.svg"},b5eb:function(t,s,a){t.exports=a.p+"img/love.4336cae6.svg"},b6a7:function(t,s,a){},c35a:function(t,s,a){t.exports=a.p+"img/radio-active.727dee2b.svg"},d680:function(t,s,a){"use strict";a("0d03"),a("d3b7"),a("25f0");s["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=t.toString(),a=s.length;return a<=5?t:5<a&&a<=7?s.substr(0,a-4)+"万":8==a?s.substr(0,a-7)+"."+s.substr(1,a-6)+"千万":a>12?"破兆":s.substr(0,a-8)+"."+s.substr(1,a-7)+"亿"}},dc81:function(t,s,a){t.exports=a.p+"img/card-imgtxt.6029e0ef.svg"},e43d:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"user-detail"},[a("app-top"),a("back",{on:{back:t.handleBack}}),a("div",{staticClass:"logo-pos"},[a("logo")],1),a("search-button"),a("user-info",{attrs:{info:t.userInfo}},[a("user-count",{attrs:{count:t.userInfo}})],1),a("user-playlist",{attrs:{uid:t.userId,listenSongs:t.userInfo.listenSongs}})],1)},i=[],n=a("34b2"),r=a("66b7"),c=a("2241"),o=a("9f7a"),l=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"user-info"},[e("div",{staticClass:"avatar",style:{backgroundImage:"url("+t.info.avatarUrl+"?param=250y250)"}},[t.info.djStatus&&t.radioId?e("div",{staticClass:"radio"},[e("router-link",{attrs:{to:"/radio/"+t.radioId}},[e("img",{staticClass:"g",attrs:{src:a("106e")}}),e("img",{staticClass:"w",attrs:{src:a("c35a")}}),t._v(" 电台 ")])],1):t._e()]),t.info.allAuthTypes||t.info.vipType?e("p",{staticClass:"extra"},[e("label",{staticClass:"lv"},[t._v("LV"+t._s(t.info.level))]),t.info.allAuthTypes?e("label",{staticClass:"exp"},[t._v(t._s(t.authTypes(t.info.allAuthTypes)))]):t._e(),t.info.vipType?e("label",{staticClass:"vip"},[t._v("VIP")]):t._e()]):t._e(),e("h2",{staticClass:"nickname"},[t._v(" "+t._s(t.info.nickname)+" "),e("label",{staticClass:"gender",class:{male:1==t.info.gender,female:2==t.info.gender,hide:0==t.info.gender}})]),t.info.signature?e("p",{staticClass:"signature"},[t._v(t._s(t.info.signature))]):t._e(),t._t("default")],2)},u=[],f=(a("13d5"),{name:"UserInfo",props:{info:{type:Object,default:function(){}}},data:function(){return{radioId:""}},watch:{info:function(t){var s=this;this.$api.user.program(t.userId).then((function(t){var a=t.programs&&t.programs.length;if(a){var e=t.programs[a-1];s.$api.radio.programDetail(e.id).then((function(t){t.program&&t.program.radio&&t.program.radio.id&&(s.radioId=t.program.radio.id)}))}}))}},methods:{authTypes:function(t){var s=t.reduce((function(t,s){return s.desc&&t.push(s.desc),t}),[]);return s.reduce((function(t,s,a){return 0==a?s:t+" | "+s}))}}}),d=f,m=(a("3648"),a("2877")),p=Object(m["a"])(d,l,u,!1,null,"62de5fca",null),h=p.exports,v=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"user-count"},[a("span",{staticClass:"count"},[a("label",{staticClass:"name"},[t._v("创建歌单")]),a("label",{staticClass:"num"},[t._v(t._s(t._count(t.count.playlistCount)))])]),a("span",{staticClass:"count"},[a("label",{staticClass:"name"},[t._v("订阅")]),a("label",{staticClass:"num"},[t._v(t._s(t._count(t.count.playlistBeSubscribedCount)))])]),a("span",{staticClass:"count"},[a("label",{staticClass:"name"},[t._v("关注")]),a("label",{staticClass:"num"},[t._v(t._s(t._count(t.count.follows)))])]),a("span",{staticClass:"count"},[a("label",{staticClass:"name"},[t._v("粉丝")]),a("label",{staticClass:"num"},[t._v(t._s(t._count(t.count.followeds)))])])])},g=[],_=a("d680"),b={name:"UserCount",props:{count:{type:Object,default:function(){}}},methods:{_count:_["a"]}},C=b,y=(a("41d3"),Object(m["a"])(C,v,g,!1,null,"1af4a689",null)),k=y.exports,x=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"user-playlist"},[e("h3",{staticClass:"title"},[t._v("全部歌单 "),e("span",{staticClass:"buttons"},[e("img",{class:{active:"image"==t.mode},attrs:{src:a("f153")},on:{click:function(s){return t.handleMode("image")}}}),e("img",{class:{active:"imagetext"==t.mode},attrs:{src:a("dc81")},on:{click:function(s){return t.handleMode("imagetext")}}})]),e("i",{staticClass:"total"},[t._v("第"+t._s(t.offset/t.limit+1)+"页 共"+t._s(t.total(t.list,t.offset))+"张")])]),e("p",{staticClass:"listen-songs"},[t._v(t._s("累积听歌"+t.listenSongs+"首"))]),"image"==t.mode?e("ul",{staticClass:"playlist",class:{image:"image"==t.mode}},t._l(t.list,(function(s,i){return e("li",{key:i},[e("div",{staticClass:"wrap"},[e("div",{staticClass:"track",style:{"background-image":"url("+s.coverImgUrl+"?param=200y200)"},on:{click:function(a){return t.handlePlaylist(s.id)}}},[e("i",{staticClass:"count"},[s.creator.userId==t.uid?e("img",{attrs:{src:a("b2b8")}}):e("img",{attrs:{src:a("b5eb")}}),t._v(" "+t._s(s.trackCount)+" ")]),e("p",{staticClass:"name"},[t._v(t._s(s.name))])])])])})),0):t._e(),"imagetext"==t.mode?e("ul",{staticClass:"playlist",class:{imagetext:"imagetext"==t.mode}},t._l(t.list,(function(s,i){return e("li",{key:i},[e("div",{staticClass:"inner",on:{click:function(a){return t.handlePlaylist(s.id)}}},[e("div",{staticClass:"wrap1",style:{"background-image":"url("+s.coverImgUrl+"?param=200y200)"}},[e("label",[s.creator.userId==t.uid?e("img",{attrs:{src:a("b2b8")}}):e("img",{staticClass:"love",attrs:{src:a("b5eb")}}),t._v(" "+t._s(s.trackCount)+" ")])]),e("div",{staticClass:"wrap2"},[e("p",{staticClass:"name"},[t._v(t._s(s.name))]),e("p",{staticClass:"count"},[e("img",{attrs:{src:a("9628")}}),t._v(t._s(t.count(s.playCount)))]),e("p",{staticClass:"time"},[e("img",{attrs:{src:a("6fc1")}}),t._v(t._s(t.datetime(s.updateTime)))])])]),e("div",{staticClass:"user",on:{click:function(a){return t.handleUser(s.creator.userId)}}},[e("span",[t._v(t._s(s.creator.nickname))]),e("img",{attrs:{src:s.creator.avatarUrl+"?param=50y50"}})])])})),0):t._e(),e("div",{staticClass:"more"},[e("a",{staticClass:"prev",class:{disabled:!t.offset},on:{click:function(s){t.offset&&t.handlePrev()}}},[t._v("上一页")]),e("a",{staticClass:"next",class:{disabled:!t.more},on:{click:function(s){t.more&&t.handleNext()}}},[t._v("下一页")])])])},I=[],w=a("9158"),$={name:"UserPlaylist",props:["uid","listenSongs"],data:function(){return{mode:"image",more:!1,offset:0,limit:18,list:[]}},methods:{init:function(){this.fetchPlaylist(this.offset,this.limit)},count:_["a"],datetime:w["a"],total:function(t,s){if(0==t.length)return s;var a=t.length==this.limit?s+this.limit:s+t.length;return 0==s?a:a+1},fetchPlaylist:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;this.$api.user.playlist(this.uid,s,a).then((function(s){t.more=s.more,t.list=s.playlist}))},handleMode:function(t){this.mode=t},handlePrev:function(){this.offset-=this.limit,this.fetchPlaylist(this.offset,this.limit)},handleNext:function(){this.offset+=this.limit,this.fetchPlaylist(this.offset,this.limit)},handlePlaylist:function(t){this.$router.push({name:"playlistDetail",params:{id:t}})},handleUser:function(t){t!=this.uid&&this.$router.push({name:"userDetail",params:{id:t}})}},created:function(){this.init()}},U=$,P=(a("fb70"),Object(m["a"])(U,x,I,!1,null,"115d45b8",null)),S=P.exports,j={name:"UserDetail",components:{AppTop:n["a"],Back:r["a"],Logo:c["a"],SearchButton:o["a"],UserInfo:h,UserCount:k,UserPlaylist:S},data:function(){return{userId:"",userInfo:{}}},watch:{"$route.params":function(){this.init()}},methods:{init:function(){this.userId=this.$route.params.id,this.fetchDetail()},fetchDetail:function(){var t=this;this.$api.user.detail(this.userId).then((function(s){t.userInfo=s.profile,t.userInfo["level"]=s.level,t.userInfo["listenSongs"]=s.listenSongs}))},handleBack:function(){history.back()}},created:function(){this.init()}},T=j,D=(a("9865"),Object(m["a"])(T,e,i,!1,null,"efa116d6",null));s["default"]=D.exports},f153:function(t,s,a){t.exports=a.p+"img/card-square.ec8eba27.svg"},fb70:function(t,s,a){"use strict";var e=a("54ee"),i=a.n(e);i.a}}]);