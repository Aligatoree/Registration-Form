(function(e){function t(t){for(var o,s,a=t[0],u=t[1],d=t[2],l=0,c=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&c.push(n[s][0]),n[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);p&&p(t);while(c.length)c.shift()();return i.push.apply(i,d||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],o=!0,a=1;a<r.length;a++){var u=r[a];0!==n[u]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var o={},n={app:0},i=[];function s(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=o,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(r,o,function(t){return e[t]}.bind(null,o));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/Registration-Form/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var p=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},1510:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("CreateUser",{attrs:{msg:"Create new user form"}})],1)},i=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"info section",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[[r("div",{class:{error:e.$v.info.surname.$error}},[r("h2",[e._v("Фамилия*")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.info.surname.$model,expression:"$v.info.surname.$model",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Иванов"},domProps:{value:e.$v.info.surname.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.info.surname,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{class:{error:e.$v.info.name.$error}},[r("h2",[e._v("Имя*")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.info.name.$model,expression:"$v.info.name.$model",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Иван"},domProps:{value:e.$v.info.name.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.info.name,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",[r("h2",[e._v("Отчество")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.info.patronymic,expression:"info.patronymic",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Иванович"},domProps:{value:e.info.patronymic},on:{input:function(t){t.target.composing||e.$set(e.info,"patronymic",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{class:{error:e.$v.info.birth.$error}},[r("h2",[e._v("Дата рождения*")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.info.birth.$model,expression:"$v.info.birth.$model"}],attrs:{type:"date",min:"1920-01-01",max:"2022-01-01"},domProps:{value:e.$v.info.birth.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.info.birth,"$model",t.target.value)}}})]),r("div",{class:[e.notPhone()?"error":""]},[r("h2",[e._v("Номер телефона*")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.info.phone.$model,expression:"$v.info.phone.$model",modifiers:{trim:!0}}],attrs:{type:"tel",placeholder:"79991234567"},domProps:{value:e.$v.info.phone.$model},on:{input:[function(t){t.target.composing||e.$set(e.$v.info.phone,"$model",t.target.value.trim())},e.notPhone],blur:function(t){return e.$forceUpdate()}}}),11!==e.info.phone.length?r("p",{staticClass:"typo__p"},[e._v(" Номер телефона должен содержать 11 цифр. Сейчас их "+e._s(e.info.phone.length)+" ")]):e._e(),"7"!==e.info.phone[0]?r("p",{staticClass:"typo__p"},[e._v(" Номер телефона должен начинаться на 7 ")]):e._e()]),r("div",{staticClass:"check"},[r("h2",[e._v("Пол")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.info.gender,expression:"info.gender"}],attrs:{type:"radio",value:"male"},domProps:{checked:e._q(e.info.gender,"male")},on:{change:function(t){return e.$set(e.info,"gender","male")}}}),r("label",{attrs:{for:"male"}},[e._v("Мужской")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.info.gender,expression:"info.gender"}],attrs:{type:"radio",value:"female"},domProps:{checked:e._q(e.info.gender,"female")},on:{change:function(t){return e.$set(e.info,"gender","female")}}}),r("label",{attrs:{for:"female"}},[e._v("Женский")])]),r("div",{staticClass:"check",class:{error:e.$v.info.group.$error}},[r("h2",[e._v("Группа клиентов*")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.info.group,expression:"info.group"}],attrs:{type:"checkbox",value:"Vip"},domProps:{checked:Array.isArray(e.info.group)?e._i(e.info.group,"Vip")>-1:e.info.group},on:{change:function(t){var r=e.info.group,o=t.target,n=!!o.checked;if(Array.isArray(r)){var i="Vip",s=e._i(r,i);o.checked?s<0&&e.$set(e.info,"group",r.concat([i])):s>-1&&e.$set(e.info,"group",r.slice(0,s).concat(r.slice(s+1)))}else e.$set(e.info,"group",n)}}}),r("label",{attrs:{for:"vip"}},[e._v("VIP")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.info.group,expression:"info.group"}],attrs:{type:"checkbox",value:"Problem"},domProps:{checked:Array.isArray(e.info.group)?e._i(e.info.group,"Problem")>-1:e.info.group},on:{change:function(t){var r=e.info.group,o=t.target,n=!!o.checked;if(Array.isArray(r)){var i="Problem",s=e._i(r,i);o.checked?s<0&&e.$set(e.info,"group",r.concat([i])):s>-1&&e.$set(e.info,"group",r.slice(0,s).concat(r.slice(s+1)))}else e.$set(e.info,"group",n)}}}),r("label",{attrs:{for:"problem"}},[e._v("Проблемные")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.info.group,expression:"info.group"}],attrs:{type:"checkbox",value:"Oms"},domProps:{checked:Array.isArray(e.info.group)?e._i(e.info.group,"Oms")>-1:e.info.group},on:{change:function(t){var r=e.info.group,o=t.target,n=!!o.checked;if(Array.isArray(r)){var i="Oms",s=e._i(r,i);o.checked?s<0&&e.$set(e.info,"group",r.concat([i])):s>-1&&e.$set(e.info,"group",r.slice(0,s).concat(r.slice(s+1)))}else e.$set(e.info,"group",n)}}}),r("label",{attrs:{for:"oms"}},[e._v("ОМС")])]),r("div",[r("h2",[e._v("Лечащий врач")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.info.doctor,expression:"info.doctor"}],attrs:{name:"group"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.info,"doctor",t.target.multiple?r:r[0])}}},e._l(e.doctors,(function(t){return r("option",{key:t},[e._v(e._s(t))])})),0)]),r("div",{staticClass:"sms"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.info.sms,expression:"info.sms"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.info.sms)?e._i(e.info.sms,null)>-1:e.info.sms},on:{change:function(t){var r=e.info.sms,o=t.target,n=!!o.checked;if(Array.isArray(r)){var i=null,s=e._i(r,i);o.checked?s<0&&e.$set(e.info,"sms",r.concat([i])):s>-1&&e.$set(e.info,"sms",r.slice(0,s).concat(r.slice(s+1)))}else e.$set(e.info,"sms",n)}}}),r("label",{attrs:{for:"sms"}},[e._v("Не отправлять SMS")])])],[r("div",{staticClass:"hiddenTab"},[r("button",{class:{rotate:e.adressOn},attrs:{type:"button"},on:{click:function(t){e.adressOn=!e.adressOn}}},[e._v(" ▼ ")]),r("h2",{class:{error:e.$v.adress.city.$error}},[e._v("Адрес")])]),e.adressOn?r("div",[r("div",[r("h2",[e._v("Индекс")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.adress.index,expression:"adress.index",modifiers:{trim:!0}}],attrs:{type:"text",id:"index",placeholder:"190000"},domProps:{value:e.adress.index},on:{input:function(t){t.target.composing||e.$set(e.adress,"index",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",[r("h2",[e._v("Страна")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.adress.country,expression:"adress.country",modifiers:{trim:!0}}],attrs:{type:"text",id:"country",placeholder:"Россия"},domProps:{value:e.adress.country},on:{input:function(t){t.target.composing||e.$set(e.adress,"country",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",[r("h2",[e._v("Область")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.adress.region,expression:"adress.region",modifiers:{trim:!0}}],attrs:{type:"text",id:"region",placeholder:"Московская"},domProps:{value:e.adress.region},on:{input:function(t){t.target.composing||e.$set(e.adress,"region",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{class:{error:e.$v.adress.city.$error}},[r("h2",[e._v("Город*")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.adress.city.$model,expression:"$v.adress.city.$model",modifiers:{trim:!0}}],attrs:{type:"text",id:"city",placeholder:"Москва"},domProps:{value:e.$v.adress.city.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.adress.city,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",[r("h2",[e._v("Улица")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.adress.index,expression:"adress.index",modifiers:{trim:!0}}],attrs:{type:"text",id:"index",placeholder:"Ленина"},domProps:{value:e.adress.index},on:{input:function(t){t.target.composing||e.$set(e.adress,"index",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",[r("h2",[e._v("Дом")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.adress.index,expression:"adress.index",modifiers:{trim:!0}}],attrs:{type:"text",id:"index",placeholder:"144"},domProps:{value:e.adress.index},on:{input:function(t){t.target.composing||e.$set(e.adress,"index",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]):e._e()],[r("div",{staticClass:"hiddenTab"},[r("button",{class:{rotate:e.passportOn},attrs:{type:"button"},on:{click:function(t){e.passportOn=!e.passportOn}}},[e._v(" ▼ ")]),r("h2",{class:{error:e.$v.passport.document.$error||e.$v.passport.date.$error}},[e._v(" Пасспорт ")])]),e.passportOn?r("div",[r("div",{class:{error:e.$v.passport.document.$error}},[r("h2",[e._v("Тип документа*")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.passport.document,expression:"passport.document"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.passport,"document",t.target.multiple?r:r[0])}}},e._l(e.documents,(function(t){return r("option",{key:t},[e._v(e._s(t))])})),0)]),r("div",[r("h2",[e._v("Серия")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.passport.series,expression:"passport.series",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"4321"},domProps:{value:e.passport.series},on:{input:function(t){t.target.composing||e.$set(e.passport,"series",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",[r("h2",[e._v("Номер")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.passport.number,expression:"passport.number",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"654321"},domProps:{value:e.passport.number},on:{input:function(t){t.target.composing||e.$set(e.passport,"number",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",[r("h2",[e._v("Кем выдан")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.adress.index,expression:"adress.index",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Ленина"},domProps:{value:e.adress.index},on:{input:function(t){t.target.composing||e.$set(e.adress,"index",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{class:{error:e.$v.passport.date.$error}},[r("h2",[e._v("Дата выдачи*")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.passport.date.$model,expression:"$v.passport.date.$model"}],attrs:{type:"date",min:"1991-12-25",max:"2022-01-01"},domProps:{value:e.$v.passport.date.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.passport.date,"$model",t.target.value)}}})])]):e._e()],r("div",{staticClass:"submit"},[r("button",{staticClass:"button",attrs:{type:"submit",disabled:"PENDING"===e.submitStatus}},[e._v(" Зарегистрироваться ")]),"OK"===e.submitStatus?r("p",{staticClass:"typo__p"},[e._v(" Регистрация прошла успешно! ")]):e._e(),"ERROR"===e.submitStatus?r("p",{staticClass:"typo__p"},[e._v(" Заполните обязательные поля! ")]):e._e(),"PENDING"===e.submitStatus?r("p",{staticClass:"typo__p"},[e._v("Регистрация...")]):e._e()])],2)},a=[],u=r("b5ae"),d={data:function(){return{info:{surname:"",name:"",patronymic:"",birth:"",phone:"",gender:"",group:[],doctor:"",sms:""},adress:{index:"",country:"",region:"",city:"",street:"",building:""},passport:{document:"",series:"",number:"",issued:"",date:""},documents:["Паспорт","Свидетельство о рождении","Вод. удостоверение"],doctors:["Иванов","Захаров","Чернышева"],adressOn:!1,passportOn:!1,submitStatus:null}},validations:{info:{surname:{required:u["required"]},name:{required:u["required"]},birth:{required:u["required"]},phone:{required:u["required"],maxLength:Object(u["maxLength"])(11),minLength:Object(u["minLength"])(11)},group:{required:u["required"]}},adress:{city:{required:u["required"]}},passport:{document:{required:u["required"]},date:{required:u["required"]}}},methods:{notPhone:function(){if(null==this.submitStatus)return!1;var e=this.info.phone;return 11!=e.length||"7"!=e[0]},submit:function(){var e=this;this.$v.$touch(),this.$v.$invalid||"7"!==this.info.phone[0]?this.submitStatus="ERROR":(this.submitStatus="PENDING",setTimeout((function(){e.submitStatus="OK"}),500))}}},p=d,l=(r("618b"),r("2877")),c=Object(l["a"])(p,s,a,!1,null,null,null),m=c.exports,v={name:"App",components:{CreateUser:m}},f=v,g=(r("034f"),Object(l["a"])(f,n,i,!1,null,null,null)),h=g.exports,$=r("1dce"),b=r.n($);o["a"].use(b.a),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(h)}}).$mount("#app")},"618b":function(e,t,r){"use strict";r("1510")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.06c64017.js.map