(function(t){function a(a){for(var s,o,l=a[0],n=a[1],c=a[2],u=0,h=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);d&&d(a);while(h.length)h.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,l=1;l<e.length;l++){var n=e[l];0!==i[n]&&(s=!1)}s&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},i={app:0},r=[];function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=a,l=l.slice();for(var c=0;c<l.length;c++)a(l[c]);var d=n;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},4397:function(t,a,e){t.exports=e.p+"img/luffy.695e5b12.jpg"},"4dd5":function(t,a,e){t.exports=e.p+"img/kaido.a2c0746f.png"},"56d7":function(t,a,e){"use strict";e.r(a);var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Game")],1)},r=[],o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"game-app"}},[s("v-app",[s("v-container",{staticClass:"bg white--text",attrs:{fluid:""}},[s("v-row",[s("v-col",{staticClass:"text-center black--text",attrs:{cols:"12"}},[s("h1",[t._v(" Welcome to JAMMIXX GAME! ")])])],1),s("v-row",[s("v-col",{attrs:{cols:"12",lg:"4",md:"4",sm:"4"}},[s("div",{staticClass:"d-flex justify-center"},[s("v-avatar",{attrs:{size:"300"}},[s("v-img",{attrs:{height:"300",width:"300",src:e("4397")}})],1)],1),s("div",{staticClass:"mt-5",attrs:{id:"luffy-health"}},[s("div",{staticClass:"text-center",style:{width:t.luffyHealth+"%"}},[t._v(" "+t._s(t.luffyHealth)+"%")])]),s("div",{staticClass:"text-center ml-5"},[s("span",[t._v("Health Bar")])]),s("div",{staticClass:"mt-5",attrs:{id:"skill-bar"}},[s("div",{staticClass:"text-center",style:{width:t.ultimate+"%"}},[t._v(" "+t._s(t.ultimate))])]),s("div",{staticClass:"text-center white--text"},[s("span",[t._v("Special Skill Bar")]),s("br"),s("small",[t._v("Note: You can only cast Ultimate when bar reaches 70 above. ")])])]),s("v-col",{attrs:{cols:"12",lg:"4",md:"4",sm:"4"}},[s("div",{staticClass:"text-center black--text"},[s("h1",[t._v(" Luffy VS Kaido ")])]),s("div",{staticClass:"mt-10"},[t.kaidoHealth<0?s("v-alert",{attrs:{type:"success"}},[t._v(" Congrats! You have won against Kaido. Wanna play again? Click the Start Button. ")]):t._e(),t.luffyHealth<0?s("v-alert",{attrs:{type:"error"}},[t._v(" SO FAKEN SAD NOOB!!! CLICK START AGAIN TO BEAT KAIDO!. ")]):t._e(),t.ultimate>=70?s("v-alert",{attrs:{border:"bottom","colored-border":"",type:"info",elevation:"2"}},[t._v(" Your ultimate is now ready! Use it now!. ")]):t._e()],1)]),s("v-col",{attrs:{cols:"12",lg:"4",md:"4",sm:"4"}},[s("div",{staticClass:"d-flex justify-center"},[s("v-avatar",{attrs:{size:"300"}},[t.kaidoLost?s("v-img",{attrs:{height:"300",width:"300",src:e("a9a3")}}):s("v-img",{attrs:{height:"300",width:"300",src:e("4dd5")}})],1)],1),s("div",{staticClass:"mt-5",attrs:{id:"kaido-health"}},[s("div",{staticClass:"text-center",style:{width:t.kaidoHealth+"%"},attrs:{min:"0"}},[t._v(t._s(t.kaidoHealth)+"%")])]),s("div",{staticClass:"text-center"},[s("span",[t._v("Health Bar")])])])],1),s("v-row",{staticClass:"pt-5",attrs:{align:"center"}},[s("v-col",{attrs:{cols:"12",sm:"12"}},[s("div",{staticClass:"text-center"},[t.gameIsGoing?t._e():s("v-btn",{staticClass:"mr-5",attrs:{"x-large":"",color:"primary",dark:""},on:{click:t.StartGame}},[s("v-icon",[t._v("mdi-arrow-left-drop-circle")]),t._v(" Start Game")],1)],1)])],1),t.gameIsGoing?s("v-row",{staticClass:"pt-5",attrs:{align:"center"}},[s("v-col",{attrs:{cols:"12",sm:"12"}},[s("div",{staticClass:"text-center"},[s("v-btn",{staticClass:"mr-5",attrs:{"x-large":"",color:"success",fab:"",dark:"",small:""},on:{click:t.attack}},[s("v-icon",[t._v(" mdi-sword ")])],1),s("v-btn",{staticClass:"mr-5",attrs:{"x-large":"",color:"success",fab:"",dark:"",small:""},on:{click:t.heal}},[s("v-icon",[t._v(" mdi-cards-heart ")])],1),s("v-btn",{staticClass:"mr-5",attrs:{"x-large":"",color:"success",disabled:t.isDisabled},on:{click:t.ultimateAttack}},[s("v-icon",[t._v(" mdi-sword-cross ")]),t._v(" Use Ultimate! ")],1),s("v-btn",{staticClass:"mr-5",attrs:{"x-large":"",color:"success",dark:""},on:{click:t.restartGame}},[s("v-icon",[t._v(" mdi-restore ")]),t._v(" Restart ")],1)],1)])],1):t._e(),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("div",{attrs:{id:"row"}},[s("ul",{attrs:{id:"status"}},[s("h3",{staticClass:" black--text"},[t._v(" Logs: ")]),t._l(t.updates,(function(a){return s("li",{key:a,class:a.actor},[t._v(" "+t._s(a.actor)+" "+t._s(a.message)+" "+t._s(a.dmg)+"HP ")])}))],2)])])],1)],1)],1)],1)},l=[],n={data:()=>({luffyHealth:100,ultimate:0,ended:!1,kaidoHealth:100,gameIsGoing:!1,ultimateAttackk:!1,maxInput:100,minInput:0,kaidoLost:!1,updates:[]}),methods:{attack:function(){var t=Math.floor(10*Math.random())+1;if(this.kaidoHealth-=t,this.updates.push({actor:"Luffy",message:" hit Kaido for ",dmg:t}),this.kaidoAttack(),100!=this.utimate){var a=10;this.ultimate+=a}},kaidoAttack(){var t=Math.floor(10*Math.random())+1;this.luffyHealth-=t,this.updates.push({actor:"Kaido",message:" hit Luffy for ",dmg:t}),this.checkStatus()},ultimateAttack:function(){var t=20;this.kaidoHealth-=t,this.updates.push({actor:"Luffy",message:" hit Kaido for ",dmg:t}),this.kaidoAttack(),this.checkStatus(),this.ultimate=0},restartGame:function(){this.updates=[],this.luffyHealth=100,this.kaidoHealth=100,this.ultimate=0,this.kaidoLost=!1},StartGame:function(){this.gameIsGoing=!0,this.updates=[],this.luffyHealth=100,this.kaidoHealth=100,this.ultimate=0},heal:function(){var t=Math.floor(10*Math.random())+1;this.luffyHealth+=t,this.luffyHealth>100&&(this.luffyHealth=100),this.updates.push({actor:"Luffy",message:" healed for ",dmg:t}),this.kaidoAttack()},checkStatus(){this.luffyHealth<0?this.gameIsGoing=!1:this.kaidoHealth<0&&(this.gameIsGoing=!1,this.kaidoLost=!0)}},computed:{isDisabled(){if(this.ultimate<=69)return!this.ultimateAttackk}}},c=n,d=(e("c68d"),e("2877")),u=e("6544"),h=e.n(u),f=e("0798"),v=e("7496"),m=e("8212"),p=e("8336"),g=e("62ad"),k=e("a523"),y=e("132d"),b=e("adda"),_=e("0fd9"),w=Object(d["a"])(c,o,l,!1,null,"f7f542aa",null),x=w.exports;h()(w,{VAlert:f["a"],VApp:v["a"],VAvatar:m["a"],VBtn:p["a"],VCol:g["a"],VContainer:k["a"],VIcon:y["a"],VImg:b["a"],VRow:_["a"]});var C={name:"App",components:{Game:x},data:()=>({})},H=C,A=Object(d["a"])(H,i,r,!1,null,null,null),O=A.exports,S=(e("5363"),e("f309"));s["a"].use(S["a"]);var j=new S["a"]({icons:{iconfont:"mdi"}});s["a"].config.productionTip=!1,new s["a"]({vuetify:j,render:function(t){return t(O)}}).$mount("#app")},"7dbe":function(t,a,e){},a9a3:function(t,a,e){t.exports=e.p+"img/kaidolose.ec9adfc2.jpg"},c68d:function(t,a,e){"use strict";var s=e("7dbe"),i=e.n(s);i.a}});
//# sourceMappingURL=app.8650d2d2.js.map