(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],m=0,u=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&u.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(u.length)u.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,o=1;o<i.length;o++){var c=i[o];0!==a[c]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},a={app:0},n=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},"44bb":function(t,e,i){"use strict";i("a18d")},4678:function(t,e,i){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=n(t);return i(e)}function n(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=n,t.exports=a,a.id="4678"},"49f8":function(t,e,i){var s={"./en.json":"edd4","./ko.json":"dd11"};function a(t){var e=n(t);return i(e)}function n(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=n,t.exports=a,a.id="49f8"},"49fe":function(t,e,i){"use strict";i("ba7a")},5:function(t,e){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"switch-shopper"}},[i("xbox-shopper")],1)},n=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("navigator",{attrs:{conditions:t.conditions,isFiltering:t.filterling},on:{"toggle-is-dark":t.toggleIsDark,"toggle-discount":t.toggleDiscount,"toggle-gamepass":t.toggleGamePass,"toggle-eaaccess":t.toggleEaAccess,"change-store":t.changeStore,"change-priority":t.changePriority,"toggle-screen":t.toggleScreen,"toggle-history":t.toggleHistory,"open-bottom-searcher":t.openBottomSearcher}}),i("v-main",[i("v-container",{staticClass:"fill-height"},[i("v-row",{ref:"container"},[t.paginatedIndex>0?i("v-col",{attrs:{cols:"12"}},[i("v-alert",{staticClass:"game-notifier",attrs:{type:"info",border:"left",dense:"",text:""}},[t._v(t._s(t.notifierText))])],1):t._e(),t._l(t.paginateGames,(function(e){return i("v-col",{key:e.bid,attrs:{cols:"12",sm:"6"}},[i("game-card",{attrs:{game:e,conditions:t.conditions,locale:t.locale},on:{"open-details":t.openDetailsDialog}})],1)})),0==t.finishPaginated&&t.games.length-t.paginatedIndex>0?i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"text-center"},[i("v-btn",{staticClass:"more",attrs:{rounded:"",color:"red",dark:""},on:{click:t.onMoreGames}},[t._v("More")])],1)]):t._e(),t.loading?i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"text-center"},[i("v-progress-linear",{attrs:{height:"25",color:"light-green darken-4",reactive:""},model:{value:t.loadingPercent,callback:function(e){t.loadingPercent=e},expression:"loadingPercent"}},[i("strong",[t._v(t._s(t.loadingPercent)+"%")])])],1)]):t._e()],2),i("game-details",{attrs:{game:t.selectedGame,openDetails:t.openDetails,locale:t.locale},on:{"close-details":t.closeDetails}})],1)],1),i("bottom-searcher",{attrs:{searcher:t.searcher,filteredGames:t.filteredGames,games:t.games},on:{"close-bottom-searcher":t.closeBottomSearcher}})],1)},o=[],c=(i("d3b7"),i("25f0"),i("4de4"),i("fb6a"),i("99af"),i("bc3a")),l=i.n(c),d=i("c1df"),m=i.n(d),u=i("2ef0"),h=i.n(u),g=(i("22f8"),i("6612")),f=i.n(g),v=i("3452"),p=i.n(v),b=i("d7ac"),y=i.n(b),_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list",{attrs:{dense:""}},[i("v-subheader",{staticClass:"mt-4 grey--text text--darken-1"},[t._v(t._s(t.$t("nav-lbl-store")))]),i("v-list",[i("v-list-item",{attrs:{link:""},on:{click:function(e){return t.changeStore("ko-kr")}}},[i("v-list-item-action",["ko-kr"===t.conditions.locale?i("v-icon",[t._v("mdi-check-circle")]):i("v-icon",[t._v("mdi-checkbox-blank-circle-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[i("flag",{attrs:{iso:"kr"}}),i("span",{staticStyle:{"margin-left":"5px"}},[t._v(t._s(t.$t("nav-lbl-kr-store")))])],1)],1)],1),i("v-list-item",{attrs:{link:""},on:{click:function(e){return t.changeStore("en-us")}}},[i("v-list-item-action",["en-us"===t.conditions.locale?i("v-icon",[t._v("mdi-check-circle")]):i("v-icon",[t._v("mdi-checkbox-blank-circle-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[i("flag",{attrs:{iso:"us"}}),i("span",{staticStyle:{"margin-left":"5px"}},[t._v(t._s(t.$t("nav-lbl-us-store")))])],1)],1)],1)],1),i("v-subheader",{staticClass:"mt-4 grey--text text--darken-1"},[t._v(t._s(t.$t("nav-lbl-theme")))]),i("v-list-item",{attrs:{link:""},on:{click:t.toggleTheme}},[i("v-list-item-action",[t.isDark?i("v-icon",[t._v("mdi-checkbox-marked")]):i("v-icon",[t._v("mdi-checkbox-blank-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.$t("nav-lbl-theme-dark")))])],1)],1),i("v-subheader",{staticClass:"mt-4 grey--text text--darken-1"},[t._v(t._s(t.$t("nav-lbl-games")))]),i("v-list-item",{attrs:{link:""},on:{click:t.toggleDiscount}},[i("v-list-item-action",[t.isDiscountOnly?i("v-icon",[t._v("mdi-checkbox-marked")]):i("v-icon",[t._v("mdi-checkbox-blank-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.$t("nav-lbl-discount-only")))])],1)],1),i("v-list-item",{attrs:{link:""},on:{click:t.toggleGamePass}},[i("v-list-item-action",[t.isGamePass?i("v-icon",[t._v("mdi-checkbox-marked")]):i("v-icon",[t._v("mdi-checkbox-blank-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("GamePass")])],1)],1),i("v-subheader",{staticClass:"mt-4 grey--text text--darken-1"},[t._v(t._s(t.$t("nav-lbl-order-priority")))]),i("v-list",[i("v-list-item",{attrs:{link:""},on:{click:function(e){return t.changePriority("NONE")}}},[i("v-list-item-action",["NONE"===t.conditions.sortPriority?i("v-icon",[t._v("mdi-check-circle")]):i("v-icon",[t._v("mdi-checkbox-blank-circle-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.$t("nav-lbl-order-priority-none")))])],1)],1),i("v-list-item",{attrs:{link:""},on:{click:function(e){return t.changePriority("PRICE")}}},[i("v-list-item-action",["PRICE"===t.conditions.sortPriority?i("v-icon",[t._v("mdi-check-circle")]):i("v-icon",[t._v("mdi-checkbox-blank-circle-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.$t("nav-lbl-order-priority-price")))])],1)],1),i("v-list-item",{attrs:{link:""},on:{click:function(e){return t.changePriority("PERCENT")}}},[i("v-list-item-action",["PERCENT"===t.conditions.sortPriority?i("v-icon",[t._v("mdi-check-circle")]):i("v-icon",[t._v("mdi-checkbox-blank-circle-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.$t("nav-lbl-order-priority-percent")))])],1)],1)],1),i("v-subheader",{staticClass:"mt-4 grey--text text--darken-1"},[t._v(t._s(t.$t("nav-lbl-optional")))]),i("v-list-item",{attrs:{link:""},on:{click:t.toggleScreen}},[i("v-list-item-action",[t.isScreenshot?i("v-icon",[t._v("mdi-checkbox-marked")]):i("v-icon",[t._v("mdi-checkbox-blank-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.$t("nav-lbl-optional-screenshop")))])],1)],1)],1)],1),i("v-app-bar",{attrs:{app:"","clipped-left":"",color:"light-green darken-4",dense:""}},[i("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),i("v-toolbar-title",{staticClass:"mr-12 align-center",staticStyle:{"padding-left":"0px !important"}},[i("span",{staticClass:"title font-weight-bold"},[t._v("XBOX SHOPPER")]),"ko-kr"===t.conditions.locale?i("flag",{staticStyle:{"border-radius":"10px","margin-left":"5px"},attrs:{iso:"kr"}}):i("flag",{staticStyle:{"border-radius":"10px","margin-left":"5px"},attrs:{iso:"us"}})],1),i("v-spacer"),t.isLoading?i("v-progress-circular",{attrs:{indeterminate:""}}):i("v-icon",{staticClass:"mx-4",staticStyle:{"margin-right":"0px !important"},on:{click:t.openBottomSearcher}},[t._v(t._s(t.magnify))])],1)],1)},j=[],k={props:["conditions","isFiltering"],data:function(){return{drawer:null,isDark:!0,isDiscountOnly:!0,isGamePass:!1,isEaAccess:!1,isScreenshot:!0,isHistory:!0,isLoading:!1}},computed:{magnify:function(){return this.isFiltering?"mdi-magnify-scan":"mdi-magnify"}},created:function(){this.isScreenshot=this.conditions.screen,this.isHistory=this.conditions.history},methods:{toggleTheme:function(){this.isDark=!this.isDark,this.$vuetify.theme.dark=this.isDark,this.$emit("toggle-is-dark",this.isDark)},toggleDiscount:function(){this.isDiscountOnly=!this.isDiscountOnly,this.$emit("toggle-discount",this.isDiscountOnly)},toggleGamePass:function(){this.isGamePass=!this.isGamePass,this.$emit("toggle-gamepass",this.isGamePass)},toggleEaAccess:function(){this.isEaAccess=!this.isEaAccess,this.$emit("toggle-eaaccess",this.isEaAccess)},changeStore:function(t){this.conditions.locale!==t&&(this.conditions.locale=t,this.$emit("change-store",t))},changePriority:function(t){this.conditions.sortPriority!=t&&this.$emit("change-priority",t)},toggleScreen:function(){this.isScreenshot=!this.isScreenshot,this.$emit("toggle-screen",this.isScreenshot)},toggleHistory:function(){this.isHistory=!this.isHistory,this.$emit("toggle-history",this.isHistory)},openBottomSearcher:function(){this.$emit("open-bottom-searcher")}}},x=k,P=i("2877"),S=i("6544"),D=i.n(S),O=i("40dc"),E=i("5bc1"),C=i("132d"),w=i("8860"),V=i("da13"),T=i("1800"),$=i("5d23"),G=i("f774"),I=i("490a"),R=i("2fa4"),Y=i("e0c7"),L=i("2a7f"),M=Object(P["a"])(x,_,j,!1,null,"239ae2ce",null),A=M.exports;D()(M,{VAppBar:O["a"],VAppBarNavIcon:E["a"],VIcon:C["a"],VList:w["a"],VListItem:V["a"],VListItemAction:T["a"],VListItemContent:$["b"],VListItemTitle:$["d"],VNavigationDrawer:G["a"],VProgressCircular:I["a"],VSpacer:R["a"],VSubheader:Y["a"],VToolbarTitle:L["a"]});var N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{elevation:5},on:{click:function(e){return t.openDetails(t.game)}}},[t.conditions.screen?i("v-img",{staticClass:"white--text align-end",attrs:{src:t.hero,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px"}},[i("v-card-title",{staticClass:"game-title",domProps:{textContent:t._s(t.game.title)}}),i("div",{staticStyle:{position:"absolute",top:"0",left:"0"}},[t.game.isGamePass?i("v-chip",{staticClass:"ma-2",staticStyle:{"box-shadow":"0 0 1em rgb(255 255 255)"},attrs:{color:"primary",small:""}},[i("v-avatar",{staticStyle:{"margin-right":"0px"},attrs:{left:""}},[i("v-icon",{attrs:{small:""}},[t._v("mdi-microsoft-xbox")])],1),t._v(" GAMEPASS ")],1):t._e(),t.game.isEaAccess?i("v-chip",{staticClass:"ma-2",staticStyle:{"box-shadow":"0 0 1em rgb(255 255 255)"},attrs:{color:"red",small:""}},[i("v-avatar",{staticStyle:{"margin-right":"0px"},attrs:{left:""}},[i("v-icon",{attrs:{small:""}},[t._v("mdi-microsoft-xbox-controller")])],1),t._v(" EAPlay ")],1):t._e()],1)],1):t._e(),t.conditions.screen?t._e():i("v-card-title",{staticClass:"one-line"},[t._v(t._s(t.game.title))]),i("v-card-subtitle",{attrs:{dense:""}},[t._v(t._s(t.platform))]),i("v-card-text",{attrs:{dense:""}},[t._v(t._s(t.genres))]),i("v-divider"),i("v-list-item",{attrs:{dense:""}},[i("v-list-item-icon",{staticStyle:{"margin-right":"0px !important"}},["ko-kr"===t.conditions.locale?i("v-icon",{attrs:{small:""}},[t._v("mdi-currency-krw")]):i("v-icon",{attrs:{small:""}},[t._v("mdi-currency-usd")])],1),i("v-list-item-subtitle",[t._v(t._s(t.curPrice)+" "),t.game.isOnSale?i("span",[t._v("("),i("strike",[t._v(t._s(t.formated(t.game.oriPrice)))]),t._v(" / "+t._s(t.percent)+"%)")],1):t._e()]),i("v-spacer"),i("v-list-item-action-text",{staticStyle:{width:"300px"},attrs:{align:"right"}},[t._v(t._s(t.game.dayLeft))])],1),t.conditions.period&&!t.game.isDiscountPresent?i("v-list-item",{attrs:{dense:""}},[i("v-list-item-icon",{staticStyle:{"margin-right":"0px !important"}},[i("v-icon",{attrs:{small:""}},[t._v("mdi-calendar-month")])],1),i("v-list-item-subtitle",[t._v("Release Date")]),i("v-spacer"),i("v-list-item-action-text",{staticStyle:{width:"300px"},attrs:{align:"right"}},[t._v(t._s(t.game.releaseDate))])],1):t._e(),t.conditions.history&&t.game.discounts.length>0?i("div",[i("v-divider"),i("game-sparkline",{attrs:{price:t.game.oriPrice,discounts:t.game.discounts}})],1):t._e()],1)},z=[],H=(i("a15b"),i("d81d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-sparkline",{attrs:{value:t.value,gradient:t.gradient,smooth:t.radius||!1,padding:t.padding,"line-width":t.lineWidth,"stroke-linecap":t.lineCap,"gradient-direction":t.gradientDirection,fill:t.fill,type:t.type,"auto-line-width":t.autoLineWidth,"auto-draw":"","show-labels":t.showLabels,"label-size":t.labelSize}})}),X=[],B=(i("159b"),9),U=[["#222"],["#42b3f4"],["red","orange","yellow"],["purple","violet"],["#00c6ff","#F0F","#FF0"],["#f72047","#ffd200","#1feaea"]],F={props:["price","discounts"],data:function(){return{showLabels:!1,lineWidth:2,labelSize:7,radius:10,padding:8,lineCap:"round",gradient:U[5],value:[],gradientDirection:"top",gradients:U,fill:!1,type:"trend",autoLineWidth:!1}},created:function(){var t=this;if(this.discounts&&this.discounts.length>0){var e=[];this.discounts.forEach((function(i){e.push(i.sprice),m()(i.edate,"YYYY-MM-DD HH:mm:ss").add(B,"hours")<m()()&&e.push(t.sprice)})),this.value=h.a.concat([this.price],e)}else this.value=[this.price,this.price];console.log(this.value)}},J=F,W=i("7f2e"),q=Object(P["a"])(J,H,X,!1,null,"d09ff090",null),Z=q.exports;D()(q,{VSparkline:W["a"]});var K=i("bd21"),Q=i.n(K),tt={props:["game","conditions","locale"],data:function(){return{}},computed:{hero:function(){return this.game.cover?"https://store-images.s-microsoft.com/image/".concat(this.game.cover):Q.a},genres:function(){return this.game.genres.map((function(t){return h.a.words(t).map((function(t){return h.a.capitalize(t)})).join(" ")})).join(", ")},platform:function(){var t=[];return this.game.isPlatformXsx&&t.push("Xbox Series X|S"),this.game.isPlatformXo&&t.push("Xbox One"),this.game.isPlatformPc&&t.push("PC"),t.join(", ")},curPrice:function(){return this.game.isOnSale?this.formated(this.game.curPrice):this.formated(this.game.oriPrice)},percent:function(){return f()(100*(1-this.game.curPrice/this.game.oriPrice)).format("0")}},methods:{openDetails:function(t){console.log(t),this.$emit("open-details",t)},formated:function(t){return"ko-kr"==this.locale?f()(t).format("#,##0"):f()(t).format("0.00")}},components:{"game-sparkline":Z}},et=tt,it=(i("44bb"),i("8212")),st=i("b0af"),at=i("99d9"),nt=i("cc20"),rt=i("ce7e"),ot=i("adda"),ct=i("34c3"),lt=Object(P["a"])(et,N,z,!1,null,"8164c3b2",null),dt=lt.exports;D()(lt,{VAvatar:it["a"],VCard:st["a"],VCardSubtitle:at["a"],VCardText:at["b"],VCardTitle:at["c"],VChip:nt["a"],VDivider:rt["a"],VIcon:C["a"],VImg:ot["a"],VListItem:V["a"],VListItemActionText:$["a"],VListItemIcon:ct["a"],VListItemSubtitle:$["c"],VSpacer:R["a"]});var mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.openDetails,callback:function(e){t.openDetails=e},expression:"openDetails"}},[i("v-card",[i("v-toolbar",{attrs:{dark:"",color:"light-green darken-4"}},[i("v-btn",{attrs:{icon:"",dark:""},on:{click:t.closeDetails}},[i("v-icon",[t._v("mdi-close")])],1),i("v-toolbar-title",{staticStyle:{"padding-left":"0px !important"}},[t._v(t._s(t.$t("detail-lbl-game-detail")))])],1),i("v-carousel",{attrs:{cycle:"",interval:"3000",height:"auto"}},t._l(t.game.screens,(function(e,s){return i("v-carousel-item",{key:s,attrs:{src:t.concatBaseUrl(e),eager:""}})})),1),i("v-list",{attrs:{"three-line":"",subheader:""}},[i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.$t("detail-lbl-title")))]),i("v-list-item-subtitle",[t._v(t._s(t.game.title))])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.$t("detail-lbl-category")))]),i("v-list-item-subtitle",t._l(t.genres,(function(e,s){return i("v-chip",{key:s,staticClass:"ma-2",attrs:{small:"",dense:""}},[t._v(t._s(e))])})),1)],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.$t("detail-lbl-current-price")))]),i("v-list-item-subtitle",[i("v-icon",{attrs:{small:""}},[t._v("mdi-currency-"+t._s(t.currency))]),t._v(" "+t._s(t.curPrice)+" "),t.game.isOnSale?i("span",[t._v("("),i("strike",[t._v(t._s(t.formated(t.game.oriPrice)))]),t._v(" / "+t._s(t.percent)+"%)")],1):t._e()],1)],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.$t("detail-lbl-platform")))]),i("v-list-item-subtitle",t._l(t.platforms,(function(e,s){return i("v-chip",{key:s,staticClass:"ma-2",attrs:{small:"",dense:""}},[t._v(t._s(e))])})),1)],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.$t("detail-lbl-release-date")))]),i("v-list-item-subtitle",[t._v(t._s(t.game.releaseDate))])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.$t("detail-lbl-store")))]),i("v-list-item-subtitle",[i("a",{attrs:{href:t.storeUrl,target:"_blank"}},[t._v(t._s(t.storeUrl))])])],1)],1)],1),i("v-divider"),t.discounts.length>0?i("v-list",{attrs:{flat:""}},[i("v-subheader",[t._v(t._s(t.$t("detail-lbl-discount-history")))]),i("v-list-item-group",{attrs:{color:"primary"}},t._l(t.discounts,(function(e,s){return i("v-list-item",{key:s,attrs:{dense:""}},[i("v-list-item-icon",{staticStyle:{"margin-right":"10px"}},[i("v-icon",{attrs:{color:e.directionColor,small:""}},[t._v(t._s(e.direction))])],1),i("v-list-item-content",[i("v-list-item-title",[i("v-icon",{attrs:{small:""}},[t._v("mdi-currency-"+t._s(t.currency))]),t._v(" "+t._s(t.formated(e.price))+" ("+t._s(t.calcPercent(e.price))+"%)")],1),i("v-list-item-subtitle",[t._v(t._s(e.startDateTime)+" ~ "+t._s(e.endDateTime))])],1)],1)})),1)],1):t._e(),i("v-divider")],1)],1)},ut=[],ht=9,gt={props:["game","openDetails","locale"],computed:{genres:function(){return this.game.genres?this.game.genres.map((function(t){return h.a.words(t).map((function(t){return h.a.capitalize(t)})).join(" ")})):[]},platforms:function(){var t=[];return this.game.isPlatformXsx&&t.push("Xbox Series X|S"),this.game.isPlatformXo&&t.push("Xbox One"),this.game.isPlatformPc&&t.push("PC"),t},curPrice:function(){return this.game.isOnSale?this.formated(this.game.curPrice):this.formated(this.game.oriPrice)},percent:function(){return f()(100*(1-this.game.curPrice/this.game.oriPrice)).format("0")},discounts:function(){var t=this,e=this.game.oriPrice;return this.game.discounts?this.game.discounts.map((function(i){var s="",a="";return e<i.sprice?(s="mdi-arrow-up",a="red"):e==i.sprice?(s="mdi-minus",a="grey"):(s="mdi-arrow-down",a="blue"),e=i.sprice,{directionColor:a,direction:s,price:i.sprice,startDateTime:t.calcDate(i.sdate),endDateTime:t.calcDate(i.edate)}})):[]},storeUrl:function(){return"https://www.microsoft.com/".concat(this.locale,"/p/").concat(this.game.gameUrlId,"/").concat(this.game.bid)},currency:function(){return"ko-kr"==this.locale?"krw":"usd"}},methods:{concatBaseUrl:function(t){return"https://store-images.s-microsoft.com/image/".concat(t)},formated:function(t){return"ko-kr"==this.locale?f()(t).format("#,##0"):f()(t).format("0.00")},calcPercent:function(t){return f()(100*(1-t/this.game.oriPrice)).format("0")},calcDate:function(t){return t?m()(t,"YYYY-MM-DD HH:mm:ss").add(ht,"hours").format("YYYY-MM-DD"):this.$t("detail-lbl-on-sale")},closeDetails:function(){this.$emit("close-details")}}},ft=gt,vt=i("8336"),pt=i("5e66"),bt=i("3e35"),yt=i("169a"),_t=i("1baa"),jt=i("71d9"),kt=Object(P["a"])(ft,mt,ut,!1,null,"3c7a04e4",null),xt=kt.exports;D()(kt,{VBtn:vt["a"],VCard:st["a"],VCarousel:pt["a"],VCarouselItem:bt["a"],VChip:nt["a"],VDialog:yt["a"],VDivider:rt["a"],VIcon:C["a"],VList:w["a"],VListItem:V["a"],VListItemContent:$["b"],VListItemGroup:_t["a"],VListItemIcon:ct["a"],VListItemSubtitle:$["c"],VListItemTitle:$["d"],VSubheader:Y["a"],VToolbar:jt["a"],VToolbarTitle:L["a"]});var Pt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-bottom-sheet",{model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[i("v-list",{attrs:{"three-line":"",subheader:"",dense:""}},[i("v-subheader",[t._v(t._s(t.$t("search-lbl-search-condition")))]),i("v-list-item",[i("v-list-item-content",[i("v-list-item-subtitle",[i("v-text-field",{attrs:{label:t.$t("search-lbl-search-title")},model:{value:t.conditions.searchText,callback:function(e){t.$set(t.conditions,"searchText",e)},expression:"conditions.searchText"}})],1)],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-subtitle",[i("v-select",{attrs:{items:t.categories,label:t.$t("search-lbl-category"),multiple:""},model:{value:t.conditions.categories,callback:function(e){t.$set(t.conditions,"categories",e)},expression:"conditions.categories"}})],1)],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.$t("search-lbl-price-range")))]),i("v-list-item-subtitle",[i("v-range-slider",{staticClass:"align-center",attrs:{min:t.minMaxPrice.min,max:t.minMaxPrice.max,"hide-details":""},scopedSlots:t._u([{key:"prepend",fn:function(){return[i("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"50px"},attrs:{value:t.conditions.priceRange[0],"hide-details":"","single-line":"",type:"number"},on:{change:function(e){return t.$set(t.conditions.priceRange,0,e)}}})]},proxy:!0},{key:"append",fn:function(){return[i("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"50px"},attrs:{value:t.conditions.priceRange[1],"hide-details":"","single-line":"",type:"number"},on:{change:function(e){return t.$set(t.conditions.priceRange,1,e)}}})]},proxy:!0}]),model:{value:t.conditions.priceRange,callback:function(e){t.$set(t.conditions,"priceRange",e)},expression:"conditions.priceRange"}})],1)],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-row",[i("v-col",{staticClass:"text-center"},[i("v-btn",{staticClass:"mr-4",attrs:{color:"info"},on:{click:t.searchCondition}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-magnify")]),t._v(" "+t._s(t.$t("search-btn-search"))+" ")],1)],1),i("v-col",{staticClass:"text-center"},[i("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:t.resetCondition}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-magnify-close")]),t._v(" "+t._s(t.$t("search-btn-reset-condition"))+" ")],1)],1)],1)],1)],1)],1)],1)},St=[],Dt=i("5530"),Ot=i("2909"),Et=(i("13d5"),i("6062"),i("3ca3"),i("ddb0"),9999999999),Ct={props:["searcher","filteredGames","games"],data:function(){return{isOpen:!1,conditions:{searchText:"",categories:[],priceRange:[0,Et]}}},computed:{categories:function(){return this.games.reduce((function(t,e){return Array.isArray(e.genres)?Object(Ot["a"])(new Set([].concat(Object(Ot["a"])(t),Object(Ot["a"])(e.genres)))):Object(Ot["a"])(new Set([].concat(Object(Ot["a"])(t),[e.genres])))}),[]).filter((function(t){return null!=t})).sort()},minMaxPrice:function(){return this.filteredGames.reduce((function(t,e){return t.max<e.curPrice&&(t.max=Math.ceil(e.curPrice)),t.min>e.curPrice&&(t.min=Math.floor(e.curPrice)),t}),{min:Et,max:0})}},methods:{searchCondition:function(){this.isOpen=!1},resetCondition:function(){this.conditions={searchText:"",categories:[],priceRange:[0,this.minMaxPrice.max]}}},watch:{searcher:function(t){this.isOpen=t},isOpen:function(t){t?(this.conditions.priceRange[1]===Et&&(this.conditions.priceRange[1]=this.minMaxPrice.max),this.prevConditions=Object(Dt["a"])({},this.conditions)):this.$emit("close-bottom-searcher",this.conditions)}}},wt=Ct,Vt=i("288c"),Tt=i("62ad"),$t=i("5963"),Gt=i("0fd9"),It=i("b974"),Rt=i("8654"),Yt=Object(P["a"])(wt,Pt,St,!1,null,"442084d9",null),Lt=Yt.exports;D()(Yt,{VBottomSheet:Vt["a"],VBtn:vt["a"],VCol:Tt["a"],VIcon:C["a"],VList:w["a"],VListItem:V["a"],VListItemContent:$["b"],VListItemSubtitle:$["c"],VListItemTitle:$["d"],VRangeSlider:$t["a"],VRow:Gt["a"],VSelect:It["a"],VSubheader:Y["a"],VTextField:Rt["a"]});var Mt="ko-kr",At="XbOx-ShOpPeR-kEy",Nt={NONE:function(){return 0},PRICE:function(t,e){return t.curPrice>e.curPrice?1:t.curPrice<e.curPrice?-1:0},PERCENT:function(t,e){var i=t.curPrice/t.oriPrice,s=e.curPrice/e.oriPrice;return i<s?-1:i>s?1:0}},zt=localStorage,Ht=zt.XBOX_SHOPPER_STORE_V1,Xt=50,Bt={name:"XboxShopper",created:function(){var t=this;if(this.$vuetify.theme.dark=!0,!h.a.isEmpty(Ht)){var e=JSON.parse(p.a.AES.decrypt(Ht,At).toString(p.a.enc.Utf8));void 0!==e.sortPriority&&(this.conditions.sortPriority=e.sortPriority),void 0!==e.history&&(this.conditions.history=e.history),void 0!==e.screen&&(this.conditions.screen=e.screen)}this.fetchGames().then((function(){setInterval((function(){var e=m()(t.updateDate,"YYYY-MM-DD HH:mm:ss").format("YYYYMMDD");m()().format("YYYYMMDD")!=e&&(console.log("current date: ",m()().format("YYYYMMDD"),"fetch date: ",e),t.fetchGames())}),1e4)}))},data:function(){return{locale:Mt,dialog:!1,notifier:!1,isDiscountOnly:!0,isGamePassOnly:!1,isEaAccessOnly:!1,loading:!0,loaded:0,totalLoaded:100,updateDate:"",rawGames:[],selectedGame:{},paginatedIndex:0,finishPaginated:!1,conditions:{locale:Mt,searchText:"",categories:[],priceRange:[],sortPriority:"NONE",screen:!0,history:!1},openDetails:!1,searcher:!1}},computed:{filterling:function(){return!h.a.isEmpty(this.conditions.searchText)&&!h.a.isEmpty(this.conditions.categories)},baseGames:function(){return this.rawGames},filteredGames:function(){var t=this;return this.baseGames.filter((function(e){return!(t.isDiscountOnly&&!e.isOnSale)})).filter((function(e){return!(t.isGamePassOnly&&!e.isGamePass)})).filter((function(e){return!(t.isEaAccessOnly&&!e.isEaAccess)}))},games:function(){var t=this;return this.filteredGames.filter((function(e){var i=!0;if(t.conditions.searchText.length>0){var s=e.title||"";if(i=s.toUpperCase().indexOf(t.conditions.searchText.toUpperCase())>-1,!i)return!1}return!(t.conditions.categories.length>0&&(i=h.a.intersection(e.genres,t.conditions.categories).length>0,!i))&&(!(2==t.conditions.priceRange.length&&(i=e.curPrice>=t.conditions.priceRange[0]&&e.curPrice<=t.conditions.priceRange[1],!i))&&i)})).sort(Nt[this.conditions.sortPriority])},paginateGames:function(){return this.games.slice(0,this.paginatedIndex)},updateDateText:function(){return""!==this.updateDate?m()(this.updateDate,"YYYY-MM-DD HH:mm:ss").fromNow():""},notifierText:function(){var t=f()(this.games.length).format("#,##0");return this.$t("main-msg-games-count",1,{count:t,updateDateText:this.updateDateText})},loadingPercent:function(){return Math.ceil(this.loaded/this.totalLoaded*100)}},methods:{fetchGames:function(){var t=this,e=this;return new Promise((function(i){l.a.get("/data/games-".concat(t.locale,"?p=").concat(m()().format("YYYYMMDDHHmmss")),{headers:{"Content-Type":"text/plain",Accept:"text/plain"},onDownloadProgress:function(t){e.loaded=t.loaded,e.totalLoaded=t.total}}).then((function(t){e.loaded=100,e.totalLoaded=100,setTimeout((function(){var s=JSON.parse(y.a.inflate(p.a.AES.decrypt(t.data,At).toString(p.a.enc.Utf8),{to:"string"}));e.updateDate=s.updateDate,e.rawGames=s.games,e.paginatedIndex=Xt,e.loading=!1,i()}),300)}))}))},initPaginate:function(){window.scrollTo(0,0),this.paginatedIndex=Xt,this.finishPaginated=!1},openDetailsDialog:function(t){this.selectedGame=t,this.openDetails=!0},closeDetails:function(){this.openDetails=!1},toggleIsDark:function(t){this.triggerGaEvent("changeIsDark","change",t)},toggleDiscount:function(t){this.initPaginate(),this.isDiscountOnly=t,this.triggerGaEvent("changeDiscount","change",t)},toggleGamePass:function(t){this.initPaginate(),this.isGamePassOnly=t,this.triggerGaEvent("changeGamePass","change",t)},toggleEaAccess:function(t){this.initPaginate(),this.isEaAccessOnly=t,this.triggerGaEvent("changeEaAccess","change",t)},changeStore:function(t){this.locale=t,this.initPaginate(),this.fetchGames()},changePriority:function(t){this.initPaginate(),this.conditions.sortPriority=t,this.saveStore(),this.triggerGaEvent("changePriority","change",t)},toggleScreen:function(t){this.conditions.screen=t,this.saveStore(),this.triggerGaEvent("changeScreen","change",t?"SCREEN_ON":"SCREEN_OFF")},toggleHistory:function(t){this.conditions.history=t,this.saveStore(),this.triggerGaEvent("changeHistory","change",t?"HISTORY_ON":"HISTORY_OFF")},openBottomSearcher:function(){this.searcher=!0},closeBottomSearcher:function(t){this.searcher=!1,this.conditions.searchText=t.searchText,this.conditions.categories=t.categories,this.conditions.priceRange=t.priceRange,this.initPaginate()},onMoreGames:function(){this.finishPaginated||(this.paginatedIndex+=Xt,0!==this.games.length&&this.paginatedIndex>this.games.length&&(this.finishPaginated=!0))},saveStore:function(){localStorage.setItem("XBOX_SHOPPER_STORE_V1",p.a.AES.encrypt(JSON.stringify({sortPriority:this.conditions.sortPriority,screen:this.conditions.screen,history:this.conditions.history}),At).toString())},triggerGaEvent:function(t,e,i,s){console.log(t,e,i,s)}},components:{navigator:A,"game-card":dt,"game-details":xt,"bottom-searcher":Lt}},Ut=Bt,Ft=(i("49fe"),i("0798")),Jt=i("7496"),Wt=i("a523"),qt=i("f6c4"),Zt=i("8e36"),Kt=Object(P["a"])(Ut,r,o,!1,null,"0099080c",null),Qt=Kt.exports;D()(Kt,{VAlert:Ft["a"],VApp:Jt["a"],VBtn:vt["a"],VCol:Tt["a"],VContainer:Wt["a"],VMain:qt["a"],VProgressLinear:Zt["a"],VRow:Gt["a"]});var te={created:function(){var t=(navigator.language||navigator.userLanguage).substr(0,2);t="ko"!==t?"en":t,this.$i18n.locale=t},components:{"xbox-shopper":Qt}},ee=te,ie=Object(P["a"])(ee,a,n,!1,null,null,null),se=ie.exports;D()(ie,{VApp:Jt["a"]});var ae=i("f309");s["a"].use(ae["a"]);var ne=new ae["a"]({}),re=i("d61f"),oe=i("a584"),ce=(i("ac1f"),i("466d"),i("a925"));function le(){var t=i("49f8"),e={};return t.keys().forEach((function(i){var s=i.match(/([A-Za-z0-9-_]+)\./i);if(s&&s.length>1){var a=s[1];e[a]=t(i)}})),e}s["a"].use(ce["a"]);var de=new ce["a"]({locale:"en",fallbackLocale:"en",messages:le()});s["a"].config.productionTip=!1,s["a"].use(re["a"]),s["a"].use(oe["a"],{config:{id:"G-T43E3TLZGY"}}),new s["a"]({vuetify:ne,i18n:de,render:function(t){return t(se)}}).$mount("#app")},6:function(t,e){},7:function(t,e){},8:function(t,e){},9:function(t,e){},a18d:function(t,e,i){},ba7a:function(t,e,i){},bd21:function(t,e,i){t.exports=i.p+"img/no-image.5fd10402.png"},dd11:function(t){t.exports=JSON.parse('{"nav-lbl-store":"스토어","nav-lbl-kr-store":"한국 스토어","nav-lbl-us-store":"미국 스토어","nav-lbl-theme":"테마","nav-lbl-theme-dark":"다크모드","nav-lbl-games":"필터옵션","nav-lbl-discount-only":"할인중","nav-lbl-game-pass":"게임패스","nav-lbl-order-priority":"정렬 우선순위","nav-lbl-order-priority-none":"기본","nav-lbl-order-priority-price":"최저가 우선","nav-lbl-order-priority-percent":"할인율 우선","nav-lbl-optional":"선택옵션","nav-lbl-optional-screenshop":"커버이미지","main-msg-games-count":"{count} 게임이 검색되었습니다 ({updateDateText}에 업데이트)","detail-lbl-game-detail":"게임 세부설명","detail-lbl-title":"타이틀","detail-lbl-category":"카테고리","detail-lbl-current-price":"현재 가격","detail-lbl-platform":"플랫폼","detail-lbl-release-date":"출시일","detail-lbl-store":"스토어","detail-lbl-discount-history":"할인 이력","detail-lbl-on-sale":"할인중","search-lbl-search-condition":"검색 조건","search-lbl-search-title":"검색 타이틀","search-lbl-category":"카테고리","search-lbl-price-range":"가격 범위","search-btn-search":"검색","search-btn-reset-condition":"초기화"}')},edd4:function(t){t.exports=JSON.parse('{"nav-lbl-store":"STORE","nav-lbl-kr-store":"KR Store","nav-lbl-us-store":"US Store","nav-lbl-theme":"THEME","nav-lbl-theme-dark":"Dark","nav-lbl-games":"GAMES","nav-lbl-discount-only":"Discount Only","nav-lbl-game-pass":"GamePass","nav-lbl-order-priority":"ORDER PRIORITY","nav-lbl-order-priority-none":"None","nav-lbl-order-priority-price":"PRICE","nav-lbl-order-priority-percent":"PERCENT","nav-lbl-optional":"OPTIONAL","nav-lbl-optional-screenshop":"SCREENSHOT","main-msg-games-count":"{count} Games has been found. (Updated {updateDateText})","detail-lbl-game-detail":"Game Details","detail-lbl-title":"Title","detail-lbl-category":"Category","detail-lbl-current-price":"Current Price","detail-lbl-platform":"Platform","detail-lbl-release-date":"Release Date","detail-lbl-store":"Store","detail-lbl-discount-history":"Discount History","detail-lbl-on-sale":"On Sale","search-lbl-search-condition":"Search Condition","search-lbl-search-title":"Search Title","search-lbl-category":"Category","search-lbl-price-range":"Price Range","search-btn-search":"SEARCH","search-btn-reset-condition":"RESET CONDITION"}')}});
//# sourceMappingURL=app.50ac375f.js.map