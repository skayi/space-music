(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user-detail"],{"043b":function(t,s,e){"use strict";var a=e("9ef1"),i=e.n(a);i.a},"0a17":function(t,s,e){t.exports=e.p+"img/search.403f1f98.svg"},"106e":function(t,s,e){t.exports=e.p+"img/radio.b86ccf58.svg"},"3b3b":function(t,s,e){},"3dc4":function(t,s,e){},"41d3":function(t,s,e){"use strict";var a=e("b6a7"),i=e.n(a);i.a},"4d3a":function(t,s,e){t.exports=e.p+"img/female.9ed3c01b.svg"},"66b7":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"back",on:{click:function(s){return t.$emit("back")}}})},i=[],n={name:"Back"},o=n,l=(e("f114"),e("2877")),c=Object(l["a"])(o,a,i,!1,null,"2d086ee5",null);s["a"]=c.exports},6787:function(t,s,e){},"6fc1":function(t,s,e){t.exports=e.p+"img/time.7b9af142.svg"},"74ad":function(t,s,e){"use strict";var a=e("6787"),i=e.n(a);i.a},7550:function(t,s,e){"use strict";var a=e("fce4"),i=e.n(a);i.a},7856:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"photo",staticClass:"photo",on:{click:function(s){return t.$emit("close")}}},[e("div",{ref:"img",staticClass:"wrap"},[e("img",{staticClass:"preview",class:{hide:t.loaded},attrs:{src:t.pre}}),e("img",{class:{hide:!t.loaded},attrs:{src:t.url},on:{load:t.handleLoaded}})])])},i=[],n=e("01fe"),o={name:"Photo",props:["pre","url"],data:function(){return{loaded:!1}},methods:{ready:function(){Object(n["a"])(this.$refs.photo,[this.$refs.img])},handleLoaded:function(){this.loaded=!0}},mounted:function(){this.ready()}},l=o,c=(e("c3fd"),e("2877")),r=Object(c["a"])(l,a,i,!1,null,"1701689d",null);s["a"]=r.exports},"8fa5":function(t,s,e){"use strict";var a=e("ca73"),i=e.n(a);i.a},9158:function(t,s,e){"use strict";e("0d03");s["a"]=function(t,s){var e=new Date(t),a=e.getFullYear(),i=e.getMonth()+1,n=e.getDate();return a+(s?"年":"-")+(i<10?"0"+i:i)+(s?"月":"-")+(n<10?"0"+n:n)+(s?"日":"")}},9628:function(t,s,e){t.exports=e.p+"img/headphone.8ca2546e.svg"},"9ef1":function(t,s,e){},"9f7a":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("transition",{attrs:{name:"zoom"}},[t.show?a("a",{staticClass:"search-button",on:{click:function(s){return t.$router.push({name:"searchIndex"})}}},[a("img",{attrs:{src:e("0a17")}})]):t._e()])},i=[],n={name:"SearchButton",data:function(){return{show:!1}},mounted:function(){this.show=!0}},o=n,l=(e("74ad"),e("2877")),c=Object(l["a"])(o,a,i,!1,null,"6ba87d5b",null);s["a"]=c.exports},ad08:function(t,s,e){"use strict";var a=e("3b3b"),i=e.n(a);i.a},b2b8:function(t,s,e){t.exports=e.p+"img/songlist-active.f332bfd9.svg"},b5eb:function(t,s,e){t.exports=e.p+"img/love.4336cae6.svg"},b6a7:function(t,s,e){},bdfa:function(t,s,e){},c35a:function(t,s,e){t.exports=e.p+"img/radio-active.727dee2b.svg"},c3fd:function(t,s,e){"use strict";var a=e("3dc4"),i=e.n(a);i.a},c693:function(t,s,e){t.exports=e.p+"img/male.641cc5ec.svg"},c8cc:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page-footer"},[e("a",{on:{click:t.go2Top}},[t._v("回到顶部")])])},i=[],n={name:"PageFooter",methods:{go2Top:function(){this.$parent.$el.scrollTo(0,0)}}},o=n,l=(e("fe00"),e("2877")),c=Object(l["a"])(o,a,i,!1,null,"98b499f6",null);s["a"]=c.exports},ca73:function(t,s,e){},d680:function(t,s,e){"use strict";e("0d03"),e("d3b7"),e("25f0");s["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=t.toString(),e=s.length;return e<=5?t:5<e&&e<=7?s.substr(0,e-4)+"万":8==e?s.substr(0,e-7)+"."+s.substr(1,e-6)+"千万":e>12?"破兆":s.substr(0,e-8)+"."+s.substr(1,e-7)+"亿"}},dc81:function(t,s,e){t.exports=e.p+"img/card-imgtxt.6029e0ef.svg"},e43d:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"user-detail"},[e("app-top"),e("back",{on:{back:t.handleBack}}),e("div",{staticClass:"logo-pos"},[e("logo")],1),e("search-button"),e("user-info",{attrs:{info:t.userInfo},on:{avatar:function(s){t.show=!0}}},[e("user-count",{attrs:{count:t.userInfo}})],1),e("user-playlist",{attrs:{uid:t.userId,listenSongs:t.userInfo.listenSongs}}),e("user-follow",{attrs:{uid:t.userId}}),e("page-footer"),t.show?e("photo",{attrs:{pre:t.userInfo.avatarUrl+"?param=50y50",url:t.userInfo.avatarUrl},on:{close:function(s){t.show=!1}}}):t._e()],1)},i=[],n=e("34b2"),o=e("66b7"),l=e("2241"),c=e("9f7a"),r=e("c8cc"),u=e("7856"),f=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"user-info"},[a("div",{staticClass:"avatar",style:{backgroundImage:"url("+t.info.avatarUrl+"?param=250y250)"},on:{click:function(s){return t.$emit("avatar")}}},[t.info.djStatus&&t.radioId?a("div",{staticClass:"radio"},[a("router-link",{attrs:{to:"/radio/"+t.radioId}},[a("img",{staticClass:"g",attrs:{src:e("106e")}}),a("img",{staticClass:"w",attrs:{src:e("c35a")}}),t._v(" 电台 ")])],1):t._e()]),t.info.allAuthTypes||t.info.vipType?a("p",{staticClass:"extra"},[a("label",{staticClass:"lv"},[t._v("LV"+t._s(t.info.level))]),t.info.allAuthTypes?a("label",{staticClass:"exp"},[t._v(t._s(t.authTypes(t.info.allAuthTypes)))]):t._e(),t.info.vipType?a("label",{staticClass:"vip"},[t._v("VIP")]):t._e()]):t._e(),a("h2",{staticClass:"nickname"},[t._v(" "+t._s(t.info.nickname)+" "),a("label",{staticClass:"gender",class:{male:1==t.info.gender,female:2==t.info.gender,hide:0==t.info.gender}})]),t.info.signature?a("p",{staticClass:"signature"},[t._v(t._s(t.info.signature))]):t._e(),t._t("default")],2)},d=[],h=(e("13d5"),{name:"UserInfo",props:{info:{type:Object,default:function(){}}},data:function(){return{radioId:""}},watch:{info:function(t){var s=this;this.$api.user.program(t.userId).then((function(t){var e=t.programs&&t.programs.length;if(e){var a=t.programs[e-1];s.$api.radio.programDetail(a.id).then((function(t){t.program&&t.program.radio&&t.program.radio.id&&(s.radioId=t.program.radio.id)}))}}))}},methods:{authTypes:function(t){var s=t.reduce((function(t,s){return s.desc&&t.push(s.desc),t}),[]);return s.reduce((function(t,s,e){return 0==e?s:t+" | "+s}))}}}),m=h,p=(e("043b"),e("2877")),v=Object(p["a"])(m,f,d,!1,null,"1c9f90db",null),g=v.exports,_=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"user-count"},[e("span",{staticClass:"count"},[e("label",{staticClass:"name"},[t._v("创建歌单")]),e("label",{staticClass:"num"},[t._v(t._s(t._count(t.count.playlistCount)))])]),e("span",{staticClass:"count"},[e("label",{staticClass:"name"},[t._v("订阅")]),e("label",{staticClass:"num"},[t._v(t._s(t._count(t.count.playlistBeSubscribedCount)))])]),e("span",{staticClass:"count"},[e("label",{staticClass:"name"},[t._v("关注")]),e("label",{staticClass:"num"},[t._v(t._s(t._count(t.count.follows)))])]),e("span",{staticClass:"count"},[e("label",{staticClass:"name"},[t._v("粉丝")]),e("label",{staticClass:"num"},[t._v(t._s(t._count(t.count.followeds)))])])])},b=[],C=e("d680"),w={name:"UserCount",props:{count:{type:Object,default:function(){}}},methods:{_count:C["a"]}},k=w,y=(e("41d3"),Object(p["a"])(k,_,b,!1,null,"1af4a689",null)),x=y.exports,I=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"user-playlist"},[a("h3",{staticClass:"title"},[t._v("全部歌单 "),a("span",{staticClass:"buttons"},[a("img",{class:{active:"image"==t.mode},attrs:{src:e("f153")},on:{click:function(s){return t.handleMode("image")}}}),a("img",{class:{active:"imagetext"==t.mode},attrs:{src:e("dc81")},on:{click:function(s){return t.handleMode("imagetext")}}})]),a("i",{staticClass:"total"},[t._v("第"+t._s(t.offset/t.limit+1)+"页 共"+t._s(t.total(t.list,t.offset))+"张")])]),a("p",{staticClass:"listen-songs"},[t._v(t._s("累积听歌"+t.listenSongs+"首"))]),"image"==t.mode?a("ul",{staticClass:"playlist",class:{image:"image"==t.mode}},t._l(t.list,(function(s,i){return a("li",{key:i},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"track",style:{"background-image":"url("+s.coverImgUrl+"?param=200y200)"},on:{click:function(e){return t.handlePlaylist(s.id)}}},[a("i",{staticClass:"count"},[s.creator.userId==t.uid?a("img",{attrs:{src:e("b2b8")}}):a("img",{attrs:{src:e("b5eb")}}),t._v(" "+t._s(s.trackCount)+" ")]),a("p",{staticClass:"name"},[t._v(t._s(s.name))])])])])})),0):t._e(),"imagetext"==t.mode?a("ul",{staticClass:"playlist",class:{imagetext:"imagetext"==t.mode}},t._l(t.list,(function(s,i){return a("li",{key:i},[a("div",{staticClass:"inner",on:{click:function(e){return t.handlePlaylist(s.id)}}},[a("div",{staticClass:"wrap1",style:{"background-image":"url("+s.coverImgUrl+"?param=200y200)"}},[a("label",[s.creator.userId==t.uid?a("img",{attrs:{src:e("b2b8")}}):a("img",{staticClass:"love",attrs:{src:e("b5eb")}}),t._v(" "+t._s(s.trackCount)+" ")])]),a("div",{staticClass:"wrap2"},[a("p",{staticClass:"name"},[t._v(t._s(s.name))]),a("p",{staticClass:"count"},[a("img",{attrs:{src:e("9628")}}),t._v(t._s(t.count(s.playCount)))]),a("p",{staticClass:"time"},[a("img",{attrs:{src:e("6fc1")}}),t._v(t._s(t.datetime(s.updateTime)))])])]),a("div",{staticClass:"user",on:{click:function(e){return t.handleUser(s.creator.userId)}}},[a("span",[t._v(t._s(s.creator.nickname))]),a("img",{attrs:{src:s.creator.avatarUrl+"?param=50y50"}})])])})),0):t._e(),a("div",{staticClass:"more"},[a("a",{staticClass:"prev",class:{disabled:!t.offset},on:{click:function(s){t.offset&&t.handlePrev()}}},[t._v("上一页")]),a("a",{staticClass:"next",class:{disabled:!t.more},on:{click:function(s){t.more&&t.handleNext()}}},[t._v("下一页")])])])},$=[],P=e("9158"),U={name:"UserPlaylist",props:["uid","listenSongs"],data:function(){return{mode:"image",more:!1,offset:0,limit:18,list:[]}},watch:{"$route.params":function(){this.more=!1,this.offset=0,this.list=[],this.init()}},methods:{init:function(){this.fetchPlaylist(this.offset,this.limit)},count:C["a"],datetime:P["a"],total:function(t,s){if(0==t.length)return s;var e=t.length==this.limit?s+this.limit:s+t.length;return 0==s?e:e+1},fetchPlaylist:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;this.$api.user.playlist(this.uid,s,e).then((function(s){t.more=s.more,t.list=s.playlist}))},handleMode:function(t){this.mode=t},handlePrev:function(){this.offset-=this.limit,this.fetchPlaylist(this.offset,this.limit)},handleNext:function(){this.offset+=this.limit,this.fetchPlaylist(this.offset,this.limit)},handlePlaylist:function(t){this.$router.push({name:"playlistDetail",params:{id:t}})},handleUser:function(t){t!=this.uid&&this.$router.push({name:"userDetail",params:{id:t}})}},created:function(){this.init()}},T=U,j=(e("ad08"),Object(p["a"])(T,I,$,!1,null,"6bd0cb92",null)),F=j.exports,O=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"user-follow"},[a("h3",{staticClass:"title"},[t._v("粉丝"),a("i",{staticClass:"total"},[t._v("第"+t._s(t.offset1/t.limit1+1)+"页 共"+t._s(t.total(1,t.followeds10,t.offset1))+"名")])]),a("ul",{staticClass:"list"},t._l(t.followeds10,(function(s,i){return a("li",{key:i},[a("router-link",{attrs:{to:"/user/"+s.userId}},[a("img",{attrs:{src:s.avatarUrl}}),a("p",{staticClass:"nickname"},[t._v(t._s(s.nickname))]),1==s.gender||2==s.gender?a("img",{staticClass:"gender",attrs:{src:1==s.gender?e("c693"):e("4d3a")}}):t._e(),s.experts?a("label",{staticClass:"expert"},[t._v("EXP")]):t._e(),s.vipType?a("label",{staticClass:"vip"},[t._v("VIP")]):t._e()]),a("span",{staticClass:"count"},[a("label",[t._v("歌单："+t._s(t.count(s.playlistCount)))]),a("label",[t._v("关注："+t._s(t.count(s.follows)))]),a("label",[t._v("粉丝："+t._s(t.count(s.followeds)))])])],1)})),0),a("div",{staticClass:"more"},[a("a",{staticClass:"prev",class:{disabled:!t.offset1},on:{click:function(s){t.offset1&&t.handlePrev(1,"fetchFolloweds")}}},[t._v("上一页")]),a("a",{staticClass:"next",class:{disabled:!t.more1},on:{click:function(s){t.more1&&t.handleNext(1,"fetchFolloweds")}}},[t._v("下一页")])]),a("h3",{staticClass:"title"},[t._v("关注"),a("i",{staticClass:"total"},[t._v("第"+t._s(t.offset2/t.limit2+1)+"页 共"+t._s(t.total(2,t.follows,t.offset2))+"名")])]),a("ul",{staticClass:"list"},t._l(t.follows,(function(s,i){return a("li",{key:i},[a("router-link",{attrs:{to:"/user/"+s.userId}},[a("img",{attrs:{src:s.avatarUrl}}),a("p",{staticClass:"nickname"},[t._v(t._s(s.nickname))]),1==s.gender||2==s.gender?a("img",{staticClass:"gender",attrs:{src:1==s.gender?e("c693"):e("4d3a")}}):t._e(),s.experts?a("label",{staticClass:"expert"},[t._v("EXP")]):t._e(),s.vipType?a("label",{staticClass:"vip"},[t._v("VIP")]):t._e()]),a("span",{staticClass:"count"},[a("label",[t._v("歌单："+t._s(t.count(s.playlistCount)))]),a("label",[t._v("关注："+t._s(t.count(s.follows)))]),a("label",[t._v("粉丝："+t._s(t.count(s.followeds)))])])],1)})),0),a("div",{staticClass:"more"},[a("a",{staticClass:"prev",class:{disabled:!t.offset2},on:{click:function(s){t.offset2&&t.handlePrev(2,"fetchFollows")}}},[t._v("上一页")]),a("a",{staticClass:"next",class:{disabled:!t.more2},on:{click:function(s){t.more2&&t.handleNext(2,"fetchFollows")}}},[t._v("下一页")])])])},E=[];function S(t,s){for(var e=[],a=s+10,i=s;i<a;i++){if(!t[i])break;e.push(t[i])}return e}var D={name:"UserFollow",props:["uid"],data:function(){return{more1:!1,offset1:0,limit1:10,followeds:[],followeds10:[],more2:!1,offset2:0,limit2:10,follows:[]}},watch:{"$route.params":function(){this.followeds=[],this.followeds10=[],this.follows=[],this.more1=!1,this.more2=!1,this.offset1=0,this.offset2=0,this.init()}},methods:{init:function(){this.fetchFolloweds(this.offset1),this.fetchFollows(this.offset2,this.limit2)},count:C["a"],total:function(t,s,e){if(0==s.length)return e;var a=s.length==this["limit".concat(t)]?e+this["limit".concat(t)]:e+s.length;return a},fetchFolloweds:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.followeds.length?(this.followeds10=S(this.followeds,s),this.followeds.length-s>this.followeds10.length?this.more1=!0:this.more1=!1):this.$api.user.followeds(this.uid,s,100).then((function(e){t.followeds=e.followeds||[],t.followeds10=S(t.followeds,s),t.followeds.length>t.followeds10.length&&(t.more1=!0)}))},fetchFollows:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;this.$api.user.follows(this.uid,s,e).then((function(s){t.more2=s.more,t.follows=s.follow}))},handlePrev:function(t,s){this["offset".concat(t)]-=this["limit".concat(t)],this[s](this["offset".concat(t)],this["limit".concat(t)])},handleNext:function(t,s){this["offset".concat(t)]+=this["limit".concat(t)],this[s](this["offset".concat(t)],this["limit".concat(t)])}},created:function(){this.init()}},B=D,N=(e("8fa5"),Object(p["a"])(B,O,E,!1,null,"290080d0",null)),A=N.exports,L={name:"UserDetail",components:{AppTop:n["a"],Back:o["a"],Logo:l["a"],SearchButton:c["a"],PageFooter:r["a"],Photo:u["a"],UserInfo:g,UserCount:x,UserPlaylist:F,UserFollow:A},data:function(){return{userId:"",userInfo:{},show:!1}},watch:{"$route.params":function(){this.init()}},methods:{init:function(){this.userId=this.$route.params.id,this.fetchDetail()},fetchDetail:function(){var t=this;this.$api.user.detail(this.userId).then((function(s){t.userInfo=s.profile,t.userInfo["level"]=s.level,t.userInfo["listenSongs"]=s.listenSongs}))},handleBack:function(){history.back()}},created:function(){this.init()}},M=L,V=(e("7550"),Object(p["a"])(M,a,i,!1,null,"687dc868",null));s["default"]=V.exports},e962:function(t,s,e){},f114:function(t,s,e){"use strict";var a=e("bdfa"),i=e.n(a);i.a},f153:function(t,s,e){t.exports=e.p+"img/card-square.ec8eba27.svg"},fce4:function(t,s,e){},fe00:function(t,s,e){"use strict";var a=e("e962"),i=e.n(a);i.a}}]);