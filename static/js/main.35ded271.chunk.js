(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{11:function(e,a,t){e.exports={green:"HW4_green__2k-2N",container:"HW4_container__1GYgo",column:"HW4_column__1WaCF"}},16:function(e,a,t){e.exports={default:"SuperButton_default__14beZ",opacity:"SuperButton_opacity__1reVy",red:"SuperButton_red__2dRn4"}},17:function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__jZd19",spanClassName:"SuperCheckbox_spanClassName__1kiZi",containerCheckbox:"SuperCheckbox_containerCheckbox__2jhCq"}},27:function(e,a,t){},29:function(e,a,t){e.exports={App:"App_App__PsON-"}},3:function(e,a,t){e.exports={menuWrapper:"pages_menuWrapper__E1_Uf",burgerMenu:"pages_burgerMenu__33eJV",containerMenuLinks:"pages_containerMenuLinks__KW7g1",activeMenu:"pages_activeMenu__1u35G",menuLinks:"pages_menuLinks__6UoHa",active:"pages_active__3lb6A",containerError:"pages_containerError__3HGEa",imgError:"pages_imgError__2iMoN"}},30:function(e,a,t){e.exports={someClass:"Affairs_someClass__FYTtE",space_around:"Affairs_space_around__2wKG9"}},31:function(e,a,t){e.exports={errorMessage:"SuperInputText_errorMessage__3Hj7t"}},32:function(e,a,t){e.exports=t.p+"static/media/error.d3417927.jpg"},35:function(e,a,t){e.exports=t(45)},45:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(18),l=t.n(c),o=(t(27),t(29)),i=t.n(o),s=t(1),u=t(7),m=t(3),d=t.n(m);var E=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:d.a.menuWrapper},r.a.createElement("div",{className:d.a.burgerMenu,onClick:function(){c(!t)}},"\u2630"),r.a.createElement("div",{className:"".concat(d.a.containerMenuLinks," ").concat(t&&d.a.activeMenu)},r.a.createElement(u.b,{to:"/pre-junior",activeClassName:d.a.active,className:d.a.menuLinks}," Junior / "),r.a.createElement(u.b,{to:"/junior-plus",activeClassName:d.a.active,className:d.a.menuLinks}," Junior + / "),r.a.createElement(u.b,{to:"/todo",activeClassName:d.a.active,className:d.a.menuLinks}," ToDo list / "),r.a.createElement(u.b,{to:"/checkbox",activeClassName:d.a.active,className:d.a.menuLinks}," My check box / "),r.a.createElement(u.b,{to:"/button",activeClassName:d.a.active,className:d.a.menuLinks}," My button / ")))},v=t(2),p=t(8),g=t.n(p);var f=function(e){return r.a.createElement("div",{className:g.a.message_main_container},r.a.createElement("div",null,r.a.createElement("img",{src:e.avatar,alt:"avatar",className:g.a.message_avatar})),r.a.createElement("div",{className:g.a.message_container},r.a.createElement("div",{className:g.a.message_user_name},e.name),r.a.createElement("div",{className:g.a.message},r.a.createElement("div",{className:g.a.message_text},e.message),r.a.createElement("div",{className:g.a.message_time},e.time))))},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Vadim",b="hello world ))",k="22:00";var C=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(f,{avatar:h,name:_,message:b,time:k}),r.a.createElement("hr",null),r.a.createElement("hr",null))},O=t(30),j=t.n(O),N=t(4),y=t(16),x=t.n(y),w=function(e){var a=e.dis,t=e.active,n=e.red,c=e.className,l=Object(N.a)(e,["dis","active","red","className"]),o="".concat(a?x.a.opacity:""),i="".concat(!t&&x.a.opacity),s="".concat(n?x.a.red:x.a.default," ").concat(c," ").concat(o," ").concat(i);return r.a.createElement("button",Object.assign({className:s,disabled:a},l))};var S=function(e){return r.a.createElement("div",{className:j.a.space_around},e.affair.name,r.a.createElement(w,{active:!0,onClick:function(){e.deleteAffairCallback(e.affair.id)}},"X"))};var M=function(e){var a=e.data.map((function(a){return r.a.createElement(S,{key:a.id,affair:a,deleteAffairCallback:e.deleteAffairCallback})})),t="all"===e.filterActive,n="high"===e.filterActive,c="middle"===e.filterActive,l="low"===e.filterActive;return r.a.createElement("div",null,a,r.a.createElement(w,{active:t,onClick:function(){return e.setFilter("all")}},"All "),r.a.createElement(w,{active:n,onClick:function(){return e.setFilter("high")}},"High "),r.a.createElement(w,{active:c,onClick:function(){return e.setFilter("middle")}},"Middle "),r.a.createElement(w,{active:l,onClick:function(){return e.setFilter("low")}},"Low "))},A=[{id:1,name:"React",priority:"high"},{id:2,name:"anime",priority:"low"},{id:3,name:"games",priority:"low"},{id:4,name:"work",priority:"high"},{id:5,name:"html & css",priority:"middle"}];var L=function(){var e=Object(n.useState)(A),a=Object(s.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)("all"),o=Object(s.a)(l,2),i=o[0],u=o[1],m=function(e,a){return"all"===a?e:"high"===a?e=e.filter((function(e){return"high"===e.priority})):"low"===a?e=e.filter((function(e){return"low"===e.priority})):"middle"===a?e=e.filter((function(e){return"middle"===e.priority})):e}(t,i);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement("div",{className:"main"},r.a.createElement(M,{filterActive:i,data:m,setFilter:function(e){u(e)},deleteAffairCallback:function(e){return c(function(e,a){return e=e.filter((function(e){return e.id!==a}))}(t,e))}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=t(10),F=t(31),W=t.n(F),H=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,c=e.onEnter,l=e.error,o=(e.className,e.spanClassName,Object(N.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"])),i={border:"1px solid ".concat(l?"green":"red"),borderRadius:"5px",padding:"5px 10px",outline:"none"};return r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&c&&c()},style:i},o)),l?"":r.a.createElement("span",{className:W.a.errorMessage},"enter your name please!!!"))},R=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,c=e.countUser,l=e.onKeyPress;return r.a.createElement("div",{className:"main"},r.a.createElement(H,{value:a,onChange:t,onKeyPress:l,error:a}),r.a.createElement(w,{dis:!a,active:!0,onClick:n},"Add "),r.a.createElement("span",null,c))},U=t(47),P=function(e){var a=e.users,t=e.addUserCallback,c=Object(n.useState)(""),l=Object(s.a)(c,2),o=l[0],i=l[1],u=Object(n.useState)(!1),m=Object(s.a)(u,2),d=m[0],E=m[1],v=a.length;return r.a.createElement(R,{name:o,setNameCallback:function(e){var a=e.target.value;i(a),E(!a)},addUser:function(){o?(t(o,Object(U.a)()),alert("Hello  ! ".concat(o)),i("")):E(!0)},error:d,countUser:v,onKeyPress:function(e){"Enter"===e.key&&o?(t(o,Object(U.a)()),alert("Hello  ! ".concat(o)),i("")):E(!0)}})};var B=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(P,{users:t,addUserCallback:function(e,a){c([{_id:a,name:e}].concat(Object(T.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},K=t(11),J=t.n(K),G=t(17),I=t.n(G),D=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,c=(e.spanClassName,e.children),l=Object(N.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(I.a.checkbox," ").concat(n||"");return r.a.createElement("label",{className:I.a.containerCheckbox},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked),console.log(e),console.log(e.currentTarget.checked)},className:o},l)),r.a.createElement("span",{className:I.a.spanClassName}),c&&r.a.createElement("p",{className:I.a.s},c))};var Y=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],c=a[1],l=t?"error":"",o=function(){l?alert(t):alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442...")},i=Object(n.useState)(!0),u=Object(s.a)(i,2),m=u[0],d=u[1],E=!t;return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:J.a.column},r.a.createElement("div",{className:J.a.container},r.a.createElement(H,{value:t,onChangeText:c,onEnter:o,error:l,className:J.a.green})),r.a.createElement("div",{className:J.a.container},r.a.createElement(w,{dis:E,active:!0,onClick:o},"delete")),r.a.createElement("div",{className:J.a.container},r.a.createElement(D,{checked:m,onChangeChecked:d},"some text"),r.a.createElement(D,{checked:m,onChange:function(e){return d(e.currentTarget.checked)}}," click "))),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Z=function(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(L,null),r.a.createElement(B,null),r.a.createElement(Y,null))},V=t(32),q=t.n(V);var X=function(){return r.a.createElement("div",{className:d.a.containerError},r.a.createElement("img",{className:d.a.imgError,src:q.a,alt:"not found"}))},z=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,c=e.spanProps,l=Object(N.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),i=Object(s.a)(o,2),u=i[0],m=i[1],d=c||{},E=d.children,v=d.onDoubleClick,p=d.className,g=Object(N.a)(d,["children","onDoubleClick","className"]),f="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",p);return r.a.createElement("div",{style:{width:"300px"}},u?r.a.createElement(H,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!0),t&&t()},style:{width:"100%",outline:"none"}},l)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),v&&v(e)},className:f,style:{display:"block",border:"1px solid red",borderRadius:"5px",padding:"5px 10px",outline:"none",width:"100%"}},g),E||l.value))};function $(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function Q(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}$("test",{x:"A",y:1});Q("test",{x:"",y:0});var ee=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(z,{value:t,onChangeText:c,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(w,{onClick:function(){$("editable-span-value",t)}},"save"),r.a.createElement(w,{onClick:function(){var e=Q("editable-span-value",t);c(e)}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ae=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Hello world"),r.a.createElement(ee,null))},te="/pre-junior",ne="/junior-plus";var re=function(){return r.a.createElement("div",null,r.a.createElement(v.d,null,r.a.createElement(v.b,{path:"/",exact:!0,render:function(){return r.a.createElement(v.a,{to:te})}}),r.a.createElement(v.b,{path:te,render:function(){return r.a.createElement(Z,null)}}),r.a.createElement(v.b,{path:ne,render:function(){return r.a.createElement(ae,null)}}),"// add routes",r.a.createElement(v.b,{render:function(){return r.a.createElement(X,null)}})))};var ce=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(E,null),r.a.createElement(re,null)))},le=function(e){var a=e.options,t=(e.onChange,e.onChangeOption),n=Object(N.a)(e,["options","onChange","onChangeOption"]),c=a.map((function(e,a){return r.a.createElement("option",{key:a}," ",e," ")}));return r.a.createElement("select",Object.assign({onChange:function(e){var a=e.currentTarget.value;t(a)}},n),c)},oe=function(e){e.type;var a=e.name,t=e.options,n=e.value,c=(e.onChange,e.onChangeOption),l=(Object(N.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){var a=e.currentTarget.value;c(a)}),o=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",{type:"radio",name:e,value:e,checked:n===e,onChange:l}),e)})):[];return r.a.createElement(r.a.Fragment,null,o)},ie=["x","y","z"];var se=function(){var e=Object(n.useState)(ie[1]),a=Object(s.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(le,{options:ie,value:t,onChangeOption:c})),r.a.createElement("div",null,r.a.createElement(oe,{name:"radio",options:ie,value:t,onChangeOption:c})),r.a.createElement("hr",null),r.a.createElement("hr",null))},ue=t(34),me=[{id:0,name:"\u041a\u043e\u0442",age:3},{id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{id:2,name:"\u041a\u043e\u043b\u044f",age:16},{id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}],de=function(e){return{type:"SORT",payload:e}},Ee=t(15);var ve=function(){var e=Object(Ee.c)((function(e){return e.homeWorkReducer})),a=Object(Ee.b)(),t=e.map((function(e){return r.a.createElement("div",{key:e.id},e.id,":",e.name,r.a.createElement("span",null,e.age,"\u043b\u0435\u0442"))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",t,r.a.createElement("div",null,r.a.createElement(w,{onClick:function(){var e=de("up");a(e)}},"sort up")),r.a.createElement("div",null,r.a.createElement(w,{onClick:function(){var e=de("down");a(e)}},"sort down")),r.a.createElement("div",null,r.a.createElement(w,{onClick:function(){var e={type:"CHECK",payload:18};a(e)}},"check 18")),r.a.createElement("div",null,r.a.createElement(w,{onClick:function(){a({type:"FULL-USERS"})}},"Full users")),"check 18",r.a.createElement("hr",null),r.a.createElement("hr",null))},pe=t(14),ge=Object(pe.b)({homeWorkReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SORT":var t=Object(T.a)(e);return"up"===a.payload&&(t=e.sort((function(e,a){return e.name<a.name?-1:0}))),"down"===a.payload&&(t=e.sort((function(e,a){return e.name>a.name?-1:0}))),Object(T.a)(t);case"CHECK":var n=Object(ue.a)({},e);return 18===a.payload&&(n=e.filter((function(e){return e.age>=18}))),n;case"FULL-USERS":var r=[{id:0,name:"\u041a\u043e\u0442",age:3},{id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{id:2,name:"\u041a\u043e\u043b\u044f",age:16},{id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];return Object(T.a)(r.map((function(e){return e})));default:return e}}}),fe=Object(pe.c)(ge);var he=function(){var e=Object(n.useState)(0),a=Object(s.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(),o=Object(s.a)(l,2),i=o[0],u=o[1],m=Object(n.useState)(!1),d=Object(s.a)(m,2),E=d[0],v=d[1],p=function(){clearInterval(t)};console.log(null===i||void 0===i?void 0:i.toLocaleTimeString());var g=null===i||void 0===i?void 0:i.toLocaleTimeString(),f=null===i||void 0===i?void 0:i.toLocaleString();return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){v(!0)},onMouseLeave:function(){v(!1)}},g),E&&r.a.createElement("div",null,f),r.a.createElement(w,{onClick:function(){var e=window.setInterval((function(){u(new Date)}),1e3);c(e),p()}},"start"),r.a.createElement(w,{onClick:p},"stop"))};var _e=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(he,null),r.a.createElement("hr",null),r.a.createElement("hr",null))};var be=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement(ce,null),r.a.createElement(ee,null),r.a.createElement(se,null),r.a.createElement(Ee.a,{store:fe},r.a.createElement(ve,null)),r.a.createElement(_e,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports={message_main_container:"Message_message_main_container__3EG3L",message_container:"Message_message_container__3jRRY",message:"Message_message__3r3Ay",message_time:"Message_message_time__Fxoj-",message_avatar:"Message_message_avatar__1BEop",message_user_name:"Message_message_user_name__WsHYJ"}}},[[35,1,2]]]);
//# sourceMappingURL=main.35ded271.chunk.js.map