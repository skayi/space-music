(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ranking-list"],{"0a17":function(t,a,s){t.exports=s.p+"img/search.403f1f98.svg"},"106e":function(t,a,s){t.exports=s.p+"img/radio.b86ccf58.svg"},"66b7":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"back",on:{click:function(a){return t.$emit("back")}}})},e=[],n={name:"Back"},r=n,o=(s("f114"),s("2877")),c=Object(o["a"])(r,i,e,!1,null,"2d086ee5",null);a["a"]=c.exports},6787:function(t,a,s){},"74ad":function(t,a,s){"use strict";var i=s("6787"),e=s.n(i);e.a},"7db0":function(t,a,s){"use strict";var i=s("23e7"),e=s("b727").find,n=s("44d2"),r="find",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),i({target:"Array",proto:!0,forced:o},{find:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),n(r)},9158:function(t,a,s){"use strict";s("0d03");a["a"]=function(t,a){var s=new Date(t),i=s.getFullYear(),e=s.getMonth()+1,n=s.getDate();return i+(a?"年":"-")+(e<10?"0"+e:e)+(a?"月":"-")+(n<10?"0"+n:n)+(a?"日":"")}},"9e73":function(t,a,s){},"9f7a":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("transition",{attrs:{name:"zoom"}},[t.show?i("a",{staticClass:"search-button",on:{click:function(a){return t.$router.push({name:"searchIndex"})}}},[i("img",{attrs:{src:s("0a17")}})]):t._e()])},e=[],n={name:"SearchButton",data:function(){return{show:!1}},mounted:function(){this.show=!0}},r=n,o=(s("74ad"),s("2877")),c=Object(o["a"])(r,i,e,!1,null,"6ba87d5b",null);a["a"]=c.exports},bdfa:function(t,a,s){},c589:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"ranking-list"},[i("app-top"),i("back",{on:{back:t.handleBack}}),i("div",{staticClass:"logo-pos"},[i("logo")],1),i("search-button"),"artist"==t.type?i("ul",{staticClass:"nav"},t._l(t.$store.state.ranking,(function(a,s){return i("li",{key:s,class:{active:a.active},on:{click:function(s){return t.handleNav(a.value)}}},[t._v(" "+t._s(a.name)+" ")])})),0):t._e(),i("h3",{staticClass:"title"},[t._v(t._s(t.title())),i("i",{staticClass:"total"},[t._v(t._s(t.updateTime&&t.datetime(t.updateTime,!0))+"更新"),i("br"),t._v("前"+t._s(t.list.length)+"名榜单")])]),["artist","24h-dj","new-dj","hot-dj"].includes(t.type)?i("ul",{staticClass:"list1"},t._l(t.list,(function(a,s){return i("li",{key:s},[i("span",{staticClass:"index"},[i("label",{staticClass:"cur",class:{top3:s<3}},[t._v(t._s((""+(s+1)).padStart(t.list.length.toString().length,0)))]),"artist"==t.type?i("label",{staticClass:"rank"},[i("i",{staticClass:"icon",class:{up:s-a.lastRank<0,down:s-a.lastRank>0,stay:s-a.lastRank==0}}),"undefined"!=typeof a.lastRank?i("label",[t._v(t._s(Math.abs(s-a.lastRank)))]):i("label",{staticClass:"new"},[t._v("new")])]):t._e(),"artist"!=t.type?i("label",{staticClass:"rank"},[-1!=a.lastRank?i("i",{staticClass:"icon",class:{up:a.rank-a.lastRank<0,down:a.rank-a.lastRank>0,stay:a.rank-a.lastRank==0}}):t._e(),-1!=a.lastRank?i("label",[t._v(t._s(Math.abs(a.rank-a.lastRank)))]):i("label",{staticClass:"new"},[t._v("new")])]):t._e()]),i("img",{attrs:{src:("artist"==t.type?a.picUrl:a.avatarUrl)+"?param=200y200"},on:{click:function(s){"artist"==t.type?t.handleArtist(a.id):t.handleUser(a.id)}}}),i("span",{staticClass:"name",on:{click:function(s){"artist"==t.type?t.handleArtist(a.id):t.handleUser(a.id)}}},[t._v(" "+t._s("artist"==t.type?a.name:a.nickName)+" "),a.alias&&a.alias.length?i("label",[t._v("("+t._s(t.alias(a.alias))+")")]):t._e()]),i("span",{staticClass:"score"},[i("div",{staticClass:"total"},[i("p",{staticClass:"per",style:{width:a.score/t.list[0].score*100+"%"},attrs:{"data-score":a.score}})])])])})),0):t._e(),["24h-program","program","new-radio","hot-radio"].includes(t.type)?i("ul",{staticClass:"list2"},t._l(t.list,(function(a,e){return i("li",{key:e},[i("span",{staticClass:"index"},[i("label",{staticClass:"cur",class:{top3:e<3}},[t._v(t._s((""+(e+1)).padStart(t.list.length.toString().length,0)))]),i("label",{staticClass:"rank"},[-1!=a.lastRank?i("i",{staticClass:"icon",class:{up:a.rank-a.lastRank<0,down:a.rank-a.lastRank>0,stay:a.rank-a.lastRank==0}}):t._e(),-1!=a.lastRank?i("label",[t._v(t._s(Math.abs(a.rank-a.lastRank)))]):i("label",{staticClass:"new"},[t._v("new")])])]),i("span",{staticClass:"content"},[i("div",{staticClass:"up",on:{click:function(s){["24h-program","program"].includes(t.type)?t.handleProgram(a.program.id):t.handleRadio(a.id)}}},[i("img",{attrs:{src:(["24h-program","program"].includes(t.type)?a.program.coverUrl:a.picUrl)+"?param=120y120"}}),i("span",{staticClass:"wrap"},[i("p",{staticClass:"name"},[["24h-program","program"].includes(t.type)?i("label",{staticClass:"serial"},[t._v("#"+t._s(a.program.serialNum))]):t._e(),i("label",{staticClass:"na"},[t._v(t._s(["24h-program","program"].includes(t.type)?a.program.name:a.name))]),["24h-program","program"].includes(t.type)?i("label",{staticClass:"duration"},[t._v(t._s(t.formatSeconds(a.program.duration,1e3)))]):i("label",{staticClass:"category"},[t._v(t._s(a.category))])]),i("p",{staticClass:"ts"},[i("label",{staticClass:"time"},[t._v(t._s(t.datetime(["24h-program","program"].includes(t.type)?a.program.createTime:a.createTime,!0)))]),i("span",{staticClass:"score"},[i("div",{staticClass:"total"},[i("p",{staticClass:"per",style:{width:a.score/t.list[0].score*100+"%"},attrs:{"data-score":a.score}})])])])])]),i("div",{staticClass:"bottom"},[["24h-program","program"].includes(t.type)?i("span",{staticClass:"radio",on:{click:function(s){return t.handleRadio(a.program.radio.id)}}},[i("img",{attrs:{src:a.program.radio.picUrl+"?param=50y50"}}),i("span",[t._v(t._s(a.program.radio.name))]),i("img",{attrs:{src:s("106e")}})]):t._e(),i("span",{staticClass:"dj"},[i("img",{attrs:{src:s("cabc")}}),i("span",{on:{click:function(s){t.handleUser(["24h-program","program"].includes(t.type)?a.program.dj.userId:a.dj.userId)}}},[t._v(t._s(["24h-program","program"].includes(t.type)?a.program.dj.nickname:a.dj.nickname))]),i("img",{attrs:{src:(["24h-program","program"].includes(t.type)?a.program.dj.avatarUrl:a.dj.avatarUrl)+"?param=50y50"},on:{click:function(s){t.handleUser(["24h-program","program"].includes(t.type)?a.program.dj.userId:a.dj.userId)}}})])])])])})),0):t._e(),i("page-footer")],1)},e=[],n=(s("7db0"),s("b0c0"),s("34b2")),r=s("66b7"),o=s("2241"),c=s("9f7a"),l=s("c8cc"),p=s("1d30"),m=s("d680"),d=s("9158"),u=s("182a"),h={"24h-program":"电台24小时节目榜","24h-dj":"电台24小时主播榜","new-dj":"电台主播新人榜","hot-dj":"电台最热主播榜","new-radio":"新晋电台榜","hot-radio":"热门电台榜",program:"电台节目榜"},g={name:"RankingList",components:{AppTop:n["a"],Back:r["a"],Logo:o["a"],SearchButton:c["a"],PageFooter:l["a"]},data:function(){return{type:"",nav:{name:"华语",value:"1",active:!0},list:[],limit:100,updateTime:void 0}},methods:{init:function(t){var a=this;this.$store.commit("setIsLoading",!0),this.type=this.$route.params.type,"artist"==this.type?this.$api.ranking.artist(t).then((function(t){a.list=t.list.artists,a.updateTime=t.list.updateTime,a.$store.commit("setIsLoading",!1)})).catch((function(){a.$store.commit("setIsLoading",!1),a.$store.commit("setAlert",{type:"error",content:"服务异常"})})):"24h-program"==this.type?this.$api.ranking.program24h(this.limit).then((function(t){a.list=t.data.list,a.updateTime=t.data.updateTime,a.$store.commit("setIsLoading",!1)})).catch((function(){a.$store.commit("setIsLoading",!1),a.$store.commit("setAlert",{type:"error",content:"服务异常"})})):"program"==this.type?this.$api.ranking.program(this.limit).then((function(t){a.list=t.toplist,a.updateTime=t.updateTime,a.$store.commit("setIsLoading",!1)})).catch((function(){a.$store.commit("setIsLoading",!1),a.$store.commit("setAlert",{type:"error",content:"服务异常"})})):"24h-dj"==this.type?this.$api.ranking.dj24h(this.limit).then((function(t){a.list=t.data.list,a.updateTime=t.data.updateTime,a.$store.commit("setIsLoading",!1)})).catch((function(){a.$store.commit("setIsLoading",!1),a.$store.commit("setAlert",{type:"error",content:"服务异常"})})):"new-dj"==this.type?this.$api.ranking.newDj(this.limit).then((function(t){a.list=t.data.list,a.updateTime=t.data.updateTime,a.$store.commit("setIsLoading",!1)})).catch((function(){a.$store.commit("setIsLoading",!1),a.$store.commit("setAlert",{type:"error",content:"服务异常"})})):"hot-dj"==this.type?this.$api.ranking.hotDj(this.limit).then((function(t){a.list=t.data.list,a.updateTime=t.data.updateTime,a.$store.commit("setIsLoading",!1)})).catch((function(){a.$store.commit("setIsLoading",!1),a.$store.commit("setAlert",{type:"error",content:"服务异常"})})):"new-radio"==this.type?this.$api.ranking.newRadio(this.limit).then((function(t){a.list=t.toplist,a.updateTime=t.updateTime,a.$store.commit("setIsLoading",!1)})).catch((function(){a.$store.commit("setIsLoading",!1),a.$store.commit("setAlert",{type:"error",content:"服务异常"})})):"hot-radio"==this.type&&this.$api.ranking.hotRadio(this.limit).then((function(t){a.list=t.toplist,a.updateTime=t.updateTime,a.$store.commit("setIsLoading",!1)})).catch((function(){a.$store.commit("setIsLoading",!1),a.$store.commit("setAlert",{type:"error",content:"服务异常"})}))},title:function(){return"artist"==this.type?"云音乐".concat(this.nav.name||"","歌手榜"):h[this.type]},alias:p["a"],count:m["a"],datetime:d["a"],formatSeconds:u["a"],handleBack:function(){history.back()},handleNav:function(t){var a=this;t!=this.nav.value&&(this.$store.commit("setRanking",{value:t}),this.init(t),this.$nextTick((function(){a.nav=a.$store.state.ranking.find((function(t){return t.active}))})))},handleArtist:function(t){this.$router.push({name:"artistDetail",params:{id:t}})},handleUser:function(t){this.$router.push({name:"userDetail",params:{id:t}})},handleProgram:function(t){this.$router.push({name:"programDetail",params:{id:t}})},handleRadio:function(t){this.$router.push({name:"radioDetail",params:{id:t}})}},created:function(){this.init()}},f=g,v=(s("eb10"),s("2877")),k=Object(v["a"])(f,i,e,!1,null,"3474a076",null);a["default"]=k.exports},c8cc:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page-footer"},[s("a",{on:{click:t.go2Top}},[t._v("回到顶部")])])},e=[],n={name:"PageFooter",methods:{go2Top:function(){this.$parent.$el.scrollTo(0,0)}}},r=n,o=(s("fe00"),s("2877")),c=Object(o["a"])(r,i,e,!1,null,"98b499f6",null);a["a"]=c.exports},cabc:function(t,a,s){t.exports=s.p+"img/mic.63881258.svg"},d680:function(t,a,s){"use strict";s("0d03"),s("d3b7"),s("25f0");a["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=t.toString(),s=a.length;return s<=5?t:5<s&&s<=7?a.substr(0,s-4)+"万":8==s?a.substr(0,s-7)+"."+a.substr(1,s-6)+"千万":s>12?"破兆":a.substr(0,s-8)+"."+a.substr(1,s-7)+"亿"}},e962:function(t,a,s){},eb10:function(t,a,s){"use strict";var i=s("9e73"),e=s.n(i);e.a},f114:function(t,a,s){"use strict";var i=s("bdfa"),e=s.n(i);e.a},fe00:function(t,a,s){"use strict";var i=s("e962"),e=s.n(i);e.a}}]);