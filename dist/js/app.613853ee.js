(function(e){function t(t){for(var i,n,l=t[0],o=t[1],r=t[2],d=0,h=[];d<l.length;d++)n=l[d],c[n]&&h.push(c[n][0]),c[n]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);u&&u(t);while(h.length)h.shift()();return a.push.apply(a,r||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],i=!0,l=1;l<s.length;l++){var o=s[l];0!==c[o]&&(i=!1)}i&&(a.splice(t--,1),e=n(n.s=s[0]))}return e}var i={},c={app:0},a=[];function n(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=i,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var r=0;r<l.length;r++)t(l[r]);var u=o;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"1e62":function(e,t,s){},"222d":function(e,t,s){"use strict";var i=s("c6a0"),c=s.n(i);c.a},"25d2":function(e,t,s){},"2cd7":function(e,t,s){"use strict";var i=s("fd8e"),c=s.n(i);c.a},"302b":function(e,t,s){"use strict";var i=s("b8da"),c=s.n(i);c.a},"39b5":function(e,t,s){"use strict";var i=s("25d2"),c=s.n(i);c.a},4195:function(e,t,s){"use strict";var i=s("fe1c"),c=s.n(i);c.a},4678:function(e,t,s){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(e){var t=a(e);return s(t)}function a(e){var t=i[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}c.keys=function(){return Object.keys(i)},c.resolve=a,e.exports=c,c.id="4678"},"4d1a":function(e,t,s){"use strict";var i=s("6d4d"),c=s.n(i);c.a},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var i=s("2b0e"),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},a=[],n=(s("2cd7"),s("2877")),l={},o=Object(n["a"])(l,c,a,!1,null,"4722c5b4",null),r=o.exports,u=s("8c4f"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-container"},[s("div",{staticClass:"login-modal-container"},[e._m(0),e.loginScreen?s("div",{staticClass:"modal-right"},[s("h2",[e._v("Welcome to checklist, login or create and account to get started.")]),s("div",{staticClass:"login-form"},[e.loginDeclined?s("p",{staticClass:"error-message"},[e._v(e._s(e.loginMessage))]):e._e(),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),s("div",{staticClass:"login-button",on:{click:e.loginPost}},[s("p",[e._v("Login")])]),s("p",{staticClass:"signup"},[e._v("If you don't have an account you can "),s("a",{on:{click:e.signup}},[e._v("create one here")]),e._v(".")])]),s("div",{staticClass:"breaker"}),s("div",{staticClass:"facebook-button",on:{click:e.login}},[s("i",{staticClass:"fab fa-facebook"}),s("h3",[e._v("Continue with facebook")])])]):e._e(),e.loginScreen?e._e():s("div",{staticClass:"modal-right signup"},[s("h2",{staticClass:"getOnBoard"},[e._v("Get on board.")]),s("div",{attrs:{id:"breaker-signup"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],attrs:{type:"text",placeholder:"First name"},domProps:{value:e.firstName},on:{input:function(t){t.target.composing||(e.firstName=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],attrs:{type:"text",placeholder:"Second name"},domProps:{value:e.lastName},on:{input:function(t){t.target.composing||(e.lastName=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.emailSignup,expression:"emailSignup"}],class:{greenBorder:e.emailValid},attrs:{type:"text",placeholder:"Email"},domProps:{value:e.emailSignup},on:{input:function(t){t.target.composing||(e.emailSignup=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordSignup,expression:"passwordSignup"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.passwordSignup},on:{input:function(t){t.target.composing||(e.passwordSignup=t.target.value)}}}),s("p",{staticClass:"signup",attrs:{id:"terms"}},[e._v("By creating account you agree to checklist's terms and conditions and privacy policy.")]),s("div",{staticClass:"login-button",on:{click:e.signUpPost}},[s("p",[e._v("signup")])])])])])},h=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal-left"},[s("i",{staticClass:"fas fa-dice-d20"})])}],f=s("bc3a"),m=s.n(f),k=s("c1df"),v=s.n(k),p={name:"Login",beforeCreate:function(){if(this.$session.exists()){var e=v.a.duration(v()().diff(this.$session.get("startTime")));if(e.asDays()>=20)this.$session.destroy();else{var t=this.$session.get("ID");this.$store.commit("setCurrentUser",t),this.$router.push("checklists")}}},methods:{login:function(){this.$router.push("checklists")},signup:function(){this.loginScreen=!1},loginPost:function(){var e=this;this.loading=!0;var t={email:this.email,password:this.password};m.a.post("/login",t).then(function(t){console.log(t),t.data.completed?(e.$store.commit("setCurrentUser",t.data.accountId),e.$session.start(),e.$session.set("ID",t.data.accountId),e.$session.set("startTime",v()()),e.$router.push("checklists")):(e.loginDeclined=!0,e.loginMessage=t.data.message)}).catch(function(e){console.log(e)})},signUpPost:function(){var e={email:this.emailSignup,password:this.passwordSignup,firstName:this.firstName,lastName:this.lastName};m.a.post("/signup",e).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}},watch:{emailSignup:function(e){var t=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}/i;t.test(e)?this.emailValid=!0:this.emailValid=!1}},data:function(){return{loading:!1,loginScreen:!0,email:"",password:"",emailSignup:"",passwordSignup:"",firstName:"",lastName:"",emailValid:!1,loginMessage:"",loginDeclined:!1}}},C=p,g=(s("4195"),Object(n["a"])(C,d,h,!1,null,"3070eded",null)),b=g.exports,j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"checklist-page-container"},[s("div",{staticClass:"checklist-header"},[e._m(0),s("i",{staticClass:"fal fa-sign-out logout",on:{click:e.logout}})]),s("div",{staticClass:"checklist-container"},[s("SideMenu",{staticClass:"sideMenu",attrs:{checklistView:e.expandSideMenu},on:{createNewChecklist:e.newChecklist,resetChecklist:e.resetChecklist}}),s("div",{staticClass:"checklist-views-container"},["list"===e.viewType?s("ListView",{staticClass:"mainView",on:{checklistSelected:e.showChecklist,editList:e.editList,newChecklist:e.newChecklist}}):e._e(),"checklist"===e.viewType?s("CheckListView",{staticClass:"mainView",attrs:{checklistId:e.selectedChecklistId,resetChecklist:e.resetChecklistSignal},on:{backFromChecklist:function(t){e.viewType="list",e.expandSideMenu=!1},editSignal:function(t){return e.editList()}}}):e._e(),"newList"===e.viewType?s("NewListView",{staticClass:"mainView",attrs:{fullChecklist:this.editChecklist},on:{backFromNewList:function(t){e.viewType="list",e.expandSideMenu=!1}}}):e._e()],1)],1)])},w=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"checklist-header-container"},[s("i",{staticClass:"fas fa-dice-d20"}),s("h1",[e._v("checklist")])])}],_=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"side-menu-container",class:{extraHeight:e.checklistView}},[e.checklistView?e._e():s("div",{staticClass:"menu-action-container",on:{click:function(t){return e.newChecklist()}}},[e._m(0),s("h3",[e._v("Create new checklist")])]),e.checklistView?s("div",{staticClass:"menu-action-container"},[e._m(1),s("h3",[e._v("Schedule checklist")])]):e._e(),e.checklistView?s("div",{staticClass:"menu-action-container",on:{click:function(t){return e.resetChecklist()}}},[e._m(2),s("h3",[e._v("Reset checklist")])]):e._e(),e.checklistView?s("div",{staticClass:"menu-action-container"},[e._m(3),s("h3",[e._v("Share checklist")])]):e._e(),e.checklistView?s("div",{staticClass:"menu-action-container"},[e._m(4),s("h3",[e._v("Delete checklist")])]):e._e()])},y=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"icon-container onlyIconContainer"},[s("i",{staticClass:"fa fa-plus-square"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"icon-container topIconContainer"},[s("i",{staticClass:"far fa-clock"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"icon-container"},[s("i",{staticClass:"fa fa-sync"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"icon-container"},[s("i",{staticClass:"fa fa-share"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"icon-container bottomIconContainer"},[s("i",{staticClass:"fa fa-ban"})])}],$={name:"SideMenu",props:{checklistView:Boolean},methods:{newChecklist:function(){this.$emit("createNewChecklist")},resetChecklist:function(){console.log("emmitted resetChecklist"),this.$emit("resetChecklist")}}},S=$,I=(s("302b"),Object(n["a"])(S,_,y,!1,null,"bc157638",null)),N=I.exports,T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"checklist-view-container"},[e.found||e.loading?e._e():s("div",{staticClass:"not-found-container"},[s("i",{staticClass:"fas fa-search"}),s("h2",[e._v("You don't seem to have any checklists")]),s("div",{staticClass:"mobile-content new-list-button",on:{click:e.createChecklist}},[s("p",[e._v("Create New Checklist")])])]),e.loading?s("div",{staticClass:"loading-container"},[e._m(0),s("p",[e._v("Fetching your checklists...")])]):e._e(),e.found&&!e.loading?s("div",{staticClass:"lists-container"},[s("div",{staticClass:"list-view-header"},[s("h2",[e._v("My Checklists")]),s("i",{staticClass:"fal fa-sign-out logout",on:{click:e.logout}})]),e._m(1),s("ul",{staticClass:"checklists-container"},e._l(e.checklists,function(t){return s("li",{key:t._id},[s("div",{staticClass:"checklist",style:{backgroundColor:t.colour},on:{click:function(s){return e.selectChecklist(t)}}},[s("i",{staticClass:"fal fa-list iconOne"}),s("h3",{staticClass:"checklist-name"},[e._v(e._s(t.name))]),s("div",{staticClass:"editIcon",on:{click:function(s){return e.editChecklist(t)}}},[s("i",{staticClass:"fal fa-pen-square"})]),s("div",{staticClass:"deleteIcon",on:{click:function(s){return e.deleteChecklist(t._id,t)}}},[s("i",{staticClass:"fal fa-minus-octagon"})]),s("div",{staticClass:"iconTwo",on:{click:function(s){return e.selectChecklist(t)}}},[s("i",{staticClass:"fal fa-chevron-circle-right"})]),s("div",{staticClass:"delete",on:{click:function(s){return e.deleteChecklist(t)}}},[s("i",{staticClass:"fal fa-window-minimize"})])])])}),0),s("div",{staticClass:"mobile-content new-list-button",on:{click:e.createChecklist}},[s("p",[e._v("Create New Checklist")])])]):e._e()])},x=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sk-cube-grid"},[s("div",{staticClass:"sk-cube sk-cube1"}),s("div",{staticClass:"sk-cube sk-cube2"}),s("div",{staticClass:"sk-cube sk-cube3"}),s("div",{staticClass:"sk-cube sk-cube4"}),s("div",{staticClass:"sk-cube sk-cube5"}),s("div",{staticClass:"sk-cube sk-cube6"}),s("div",{staticClass:"sk-cube sk-cube7"}),s("div",{staticClass:"sk-cube sk-cube8"}),s("div",{staticClass:"sk-cube sk-cube9"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"search-bar"},[s("input",{attrs:{type:"text",placeholder:"Search for a checklist"}})])}],E={name:"ListView",mounted:function(){this.getChecklists()},data:function(){return{found:!1,checklists:{},loading:!0}},methods:{selectChecklist:function(e){this.$emit("checklistSelected",e)},deleteChecklist:function(e,t){var s=this,i={id:e};m.a.post("/deleteChecklist",i).then(function(){var e=s.checklist.indexOf(t);s.checklist.splice(e,1),s.getChecklists()}).catch(function(e){console.log(e)})},getChecklists:function(){var e=this,t=this.$store.getters.getCurrentLoggedInUserId;m.a.post("/getChecklists",{id:t}).then(function(t){e.$store.commit("insertChecklists",t.data.checklist),e.checklists=t.data.checklist}).then(function(){0===e.checklists.length?(e.found=!1,e.loading=!1):(e.found=!0,e.loading=!1)}).catch(function(e){console.log(e)})},editChecklist:function(e){this.$emit("editList",e)},createChecklist:function(){this.$emit("newChecklist")},logout:function(){this.$session.destroy(),this.$router.push("/")}}},L=E,O=(s("5f9d"),Object(n["a"])(L,T,x,!1,null,"3f527c1d",null)),M=O.exports,z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"checklist-view-container"},[s("div",{staticClass:"checklist-title-container"},[s("i",{staticClass:"fal fa-angle-left",on:{click:e.back}}),s("h2",[e._v(e._s(e.checklist.name))])]),s("ul",e._l(e.checklistItems,function(t){return s("li",{key:e.checklistItems.indexOf(t)},[s("div",{staticClass:"checklist-list-item",class:{green:t.completed},on:{click:function(s){e.saveAndUpdateChecklist(!t.completed,e.checklistItems.indexOf(t))}}},[t.completed?e._e():s("i",{staticClass:"fal fa-square",on:{click:function(s){e.saveAndUpdateChecklist(t.completed,e.checklistItems.indexOf(t))}}}),t.completed?s("i",{staticClass:"fal fa-check-square",on:{click:function(s){e.saveAndUpdateChecklist(t.completed,e.checklistItems.indexOf(t))}}}):e._e(),s("h3",{staticClass:"item-name"},[e._v(e._s(t.name))])])])}),0),s("MobileNav",{staticClass:"mobile-nav",on:{mobileNavResetChecklist:e.resetChecklistFunction,mobileNavHome:e.back,editChecklist:e.sendEditSignal}})],1)},U=[],V=(s("ac6a"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"nav-menu-container"},[s("div",{staticClass:"nav-menu-item left",on:{click:e.editChecklist}},[s("i",{staticClass:"fal fa-pen-square"})]),e._m(0),s("div",{staticClass:"nav-menu-item",on:{click:e.goHome}},[s("i",{staticClass:"fas fa-dice-d20"})]),s("div",{staticClass:"nav-menu-item",on:{click:e.resetChecklist}},[s("i",{staticClass:"fal fa-redo-alt reset"})]),e._m(1)])}),P=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"nav-menu-item "},[s("i",{staticClass:"fal fa-calendar-alt"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"nav-menu-item right"},[s("i",{staticClass:"fal fa-share-alt"})])}],D={name:"MobileNav",methods:{resetChecklist:function(){this.$emit("mobileNavResetChecklist")},goHome:function(){this.$emit("mobileNavHome")},editChecklist:function(){console.log("noProblems"),this.$emit("editChecklist")}}},F=D,q=(s("222d"),Object(n["a"])(F,V,P,!1,null,"a589a588",null)),A=q.exports,H={name:"CheckListView",components:{MobileNav:A},props:["checklistId","resetChecklist"],mounted:function(){this.checklist=this.$store.getters.getSingleChecklist(this.checklistId),this.checklistItems=this.checklist.checklistItems,this.$emit("currentChecklist",this.checklist),this.$store.commit("setCurrentChecklist",this.checklist)},methods:{saveAndUpdateChecklist:function(e,t){this.checklist.checklistItems[t].completed=e,this.saveChecklist()},saveChecklist:function(){m.a.post("/saveChecklist",{checklist:this.checklist}).catch(function(e){console.log(e)})},back:function(){this.$emit("backFromChecklist")},resetChecklistFunction:function(){this.checklist.checklistItems.forEach(function(e){e.completed=!1}),this.saveChecklist()},sendEditSignal:function(){console.log("sending signal"),this.$emit("editSignal")}},watch:{resetChecklist:function(){this.resetChecklistFunction()}},data:function(){return{checklist:{},checklistItems:[]}}},B=H,G=(s("39b5"),Object(n["a"])(B,z,U,!1,null,"63de400e",null)),R=G.exports,Z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"new-list-view-container"},[s("div",{staticClass:"name-container"},[s("i",{staticClass:"fal fa-angle-left",on:{click:e.back}}),e.nameEditMode?e._e():s("h2",{on:{click:e.editName}},[e._v(e._s(e.checklistTemplate.name))]),e.nameEditMode?s("div",{staticClass:"input-container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.checklistTemplate.name,expression:"checklistTemplate.name"}],staticClass:"name-input",attrs:{type:"text"},domProps:{value:e.checklistTemplate.name},on:{input:function(t){t.target.composing||e.$set(e.checklistTemplate,"name",t.target.value)}}}),s("i",{staticClass:"fal fa-check-circle",on:{click:e.editName}})]):e._e()]),e.checklistTemplate.checklistItems.length>0?s("div",{staticClass:"item-list"},[s("ul",e._l(e.checklistTemplate.checklistItems,function(t){return s("li",{key:t.key},[s("div",{staticClass:"checklist-item"},[s("i",{staticClass:"fal fa-square item-icon-one"}),s("h3",{staticClass:"item-name"},[e._v(e._s(t.name))]),s("i",{staticClass:"fal fa-layer-minus item-icon-two",on:{click:function(s){e.deleteTask(e.checklistTemplate.checklistItems.indexOf(t))}}})])])}),0)]):e._e(),s("div",{staticClass:"item-addition"},[s("i",{staticClass:"fal fa-layer-plus"}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newTaskName,expression:"newTaskName"}],staticClass:"new-task-name",attrs:{type:"text",placeholder:"Task name"},domProps:{value:e.newTaskName},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTask(t)},input:function(t){t.target.composing||(e.newTaskName=t.target.value)}}})])])},J=[],W=s("2ef0"),Y=s.n(W),K={name:"NewListView",props:["fullChecklist"],mounted:function(){Y.a.isEmpty(this.fullChecklist)?(this.checklistTemplate.id=this.$store.getters.getCurrentLoggedInUserId,this.currentUserId=this.$store.getters.getCurrentLoggedInUserId):(this.currentUserId=this.$store.getters.getCurrentLoggedInUserId,this.checklistTemplate=this.fullChecklist,this.firstTimeSave=!1)},methods:{back:function(){this.$emit("backFromNewList")},editName:function(){this.nameEditMode=!this.nameEditMode,this.saveChecklist()},addTask:function(){var e={completed:!1,name:this.newTaskName,key:Y.a.uniqueId("key_")};this.checklistTemplate.checklistItems.push(e),this.newTaskName="",this.saveChecklist()},deleteTask:function(e){this.checklistTemplate.checklistItems.splice(e,1),this.saveChecklist()},saveChecklist:function(){var e=this;this.checklistTemplate.userId=this.currentUserId,this.firstTimeSave?(m.a.post("/createNewChecklist",this.checklistTemplate).then(function(t){e.checklistTemplate._id=t.data.id}).catch(function(e){console.log(e)}),this.firstTimeSave=!1):m.a.post("/saveChecklist",{checklist:this.checklistTemplate}).catch(function(e){console.log(e)})}},data:function(){return{currentUserId:"",firstTimeSave:!0,nameEditMode:!1,newTaskName:"",checklistTemplate:{userId:"",name:"Checklist Name",checklistItems:[]}}}},Q=K,X=(s("b572"),Object(n["a"])(Q,Z,J,!1,null,"3e3e8436",null)),ee=X.exports,te={name:"Home",components:{SideMenu:N,ListView:M,CheckListView:R,NewListView:ee},beforeCreate:function(){if(this.$session.exists()){var e=v.a.duration(v()().diff(this.$session.get("startTime")));if(e.asDays()>=20)this.$session.destroy(),this.$router.push("login");else{var t=this.$session.get("ID");this.$store.commit("setCurrentUser",t),this.$router.push("checklists")}}else this.$router.push("/")},methods:{showChecklist:function(e){this.selectedChecklistId=e._id,this.viewType="checklist",this.expandSideMenu=!0},newChecklist:function(){this.viewType="newList",this.expandSideMenu=!0},editList:function(e){if(e)this.editChecklist=e,this.viewType="newList",this.expandSideMenu=!0;else{console.log("checklist wasnt defined");var t=this.$store.getters.getCurrentChecklist;this.editChecklist=t,this.viewType="newList"}},resetChecklist:function(){this.resetChecklistSignal=!this.resetChecklistSignal},logout:function(){this.$session.destroy(),this.$router.push("/")}},data:function(){return{expandSideMenu:!1,viewType:"list",editChecklist:{},selectedChecklistId:"",resetChecklistSignal:!1}}},se=te,ie=(s("4d1a"),Object(n["a"])(se,j,w,!1,null,"cef1711c",null)),ce=ie.exports;i["a"].use(u["a"]);var ae=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"login",component:b},{path:"/checklists",name:"checklists",component:ce}]}),ne=(s("7514"),s("2f62"));i["a"].use(ne["a"]);var le=new ne["a"].Store({state:{currentLoggedInUser:"",currentChecklist:{},checklists:[]},mutations:{insertChecklists:function(e,t){e.checklists=t},setCurrentUser:function(e,t){e.currentLoggedInUser=t},setCurrentChecklist:function(e,t){e.currentChecklist=t}},getters:{getCurrentLoggedInUserId:function(e){return e.currentLoggedInUser},getChecklists:function(e){return e.checklists},getSingleChecklist:function(e){return function(t){return e.checklists.find(function(e){return e._id===t})}},getCurrentChecklist:function(e){return e.currentChecklist}}}),oe=s("0628"),re=s.n(oe);s("ddb8");i["a"].config.productionTip=!1,i["a"].use(re.a,{persist:!0}),new i["a"]({router:ae,store:le,render:function(e){return e(r)}}).$mount("#app")},"5f9d":function(e,t,s){"use strict";var i=s("1e62"),c=s.n(i);c.a},"6d4d":function(e,t,s){},b572:function(e,t,s){"use strict";var i=s("d817"),c=s.n(i);c.a},b8da:function(e,t,s){},c6a0:function(e,t,s){},d817:function(e,t,s){},ddb8:function(e,t){},fd8e:function(e,t,s){},fe1c:function(e,t,s){}});
//# sourceMappingURL=app.613853ee.js.map