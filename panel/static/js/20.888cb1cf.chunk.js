(window["webpackJsonpadmin-panel"]=window["webpackJsonpadmin-panel"]||[]).push([[20],{178:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(79),l=t(14),o=t(15),s=t(102),i=t(101),m=t(16),u=t(8),d=t(9),v=t(78),f=t(80),b=t(87),p=t(37),E=t(81),w=function(){var e=Object(n.useState)(!1),a=Object(d.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)(!1),i=Object(d.a)(s,2),w=i[0],g=i[1],j=Object(n.useState)(!1),O=Object(d.a)(j,2),h=(O[0],O[1],Object(n.useState)()),N=Object(d.a)(h,2),y=N[0],P=N[1],C=function(e,a){P(Object(u.a)(Object(u.a)({},y),{},Object(m.a)({},e,a)))},x=Object(o.a)().setting.token;Object(n.useEffect)((function(){c(!0),Object(v.b)("profile",{token:x}).then((function(e){c(!1),e.success&&P(e.success)}))}),[]);return r.a.createElement("div",{className:"auth"},t&&r.a.createElement(p.a,{forDiv:!0}),r.a.createElement("form",{className:"pt-3",autoComplete:"off",onSubmit:function(e){e.preventDefault(),g(!0),Object(v.b)("update-info",Object(u.a)(Object(u.a)({},y),{},{token:x})).then((function(e){g(null)}))}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement(b.a,{name:"name",value:null===y||void 0===y?void 0:y.name,disabled:!0})),r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement(b.a,{name:"email",value:null===y||void 0===y?void 0:y.email,disabled:!0})),r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement(b.a,{name:"fullname",value:null===y||void 0===y?void 0:y.fullname,onChange:function(e){return C("fullname",e)}})),r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement(b.a,{name:"tell",value:null===y||void 0===y?void 0:y.tell,onChange:function(e){return C("tell",e)}})),r.a.createElement("div",{class:"col-md-6"},r.a.createElement(b.a,{name:"language",data:["en","fa","tr","ar"],value:null===y||void 0===y?void 0:y.lang,onChange:function(e){return C("lang",e)}}))),r.a.createElement(E.a,{variant:"success",show:null===w},Object(l.a)("successInfo")),r.a.createElement("div",{className:"mt-3"},r.a.createElement(f.a,{loading:w,className:"btn btn-success btn-lg font-weight-medium"},Object(l.a)("update")))))},g=t(93),j=t.n(g),O=function(){var e=Object(n.useState)(!1),a=Object(d.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)(!1),i=Object(d.a)(s,2),p=i[0],w=i[1],g=Object(n.useState)(!1),O=Object(d.a)(g,2),h=O[0],N=O[1],y=Object(n.useState)({oldPassword:"",newPassword:"",rePassword:""}),P=Object(d.a)(y,2),C=P[0],x=P[1],k=function(e,a){x(Object(u.a)(Object(u.a)({},C),{},Object(m.a)({},e,a)))},S=Object(o.a)().setting.token;return r.a.createElement("div",{className:"auth"},r.a.createElement("form",{className:"pt-3",autoComplete:"off",onSubmit:function(e){e.preventDefault(),null==function(){var e={};for(var a in C.newPassword!=C.rePassword&&(e.rePassword="passwordNotMatch"),C)C[a].length<5&&(e[a]="validation.min"),""==C[a]&&(e[a]="validation.empty");var t=j.a.isEmpty(e)?null:e;return w(t),t}()&&(c(!0),Object(v.b)("change-password",Object(u.a)(Object(u.a)({},C),{},{token:S})).then((function(e){if(c(!1),e.success)N(!0);else if(e.error){var a={};for(var t in e.error)a[t]=[t,e.error[t][0]];w(a)}})))}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement(b.a,{type:"password",name:"oldPassword",value:null===C||void 0===C?void 0:C.oldPassword,onChange:function(e){return k("oldPassword",e)},error:null===p||void 0===p?void 0:p.oldPassword})),r.a.createElement("div",{className:"col-12 col-md-6"}),r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement(b.a,{type:"password",name:"newPassword",value:null===C||void 0===C?void 0:C.newPassword,onChange:function(e){return k("newPassword",e)},error:null===p||void 0===p?void 0:p.newPassword})),r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement(b.a,{type:"password",name:"reNewPassword",value:null===C||void 0===C?void 0:C.rePassword,onChange:function(e){return k("rePassword",e)},error:null===p||void 0===p?void 0:p.rePassword}))),r.a.createElement(E.a,{variant:"success",show:h},Object(l.a)("successPassword")),r.a.createElement("div",{className:"mt-3"},r.a.createElement(f.a,{loading:t,className:"btn btn-success btn-lg font-weight-medium"},Object(l.a)("update")))))};a.default=function(){Object(o.a)().setting.token;return Object(n.useEffect)((function(){}),[]),r.a.createElement("div",null,r.a.createElement(c.a,{title:"profile",icon:"mdi-account"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 grid-margin stretch-card"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement(s.a.Container,{defaultActiveKey:"info"},r.a.createElement(i.a,{variant:"pills",className:"tickets-tab-switch border-bottom"},r.a.createElement(i.a.Item,{className:"nowrap"},r.a.createElement(i.a.Link,{eventKey:"info"},Object(l.a)("userInformation"))),r.a.createElement(i.a.Item,{className:"nowrap"},r.a.createElement(i.a.Link,{eventKey:"password"},Object(l.a)("changePassword")))),r.a.createElement(s.a.Content,{className:"border-0 tab-content-basic position-relative"},r.a.createElement(s.a.Pane,{eventKey:"info"},r.a.createElement(w,null)),r.a.createElement(s.a.Pane,{eventKey:"password"},r.a.createElement(O,null)))))))))}},78:function(e,a,t){"use strict";t.d(a,"a",(function(){return m})),t.d(a,"b",(function(){return u}));var n=t(83),r=t.n(n),c=t(85),l=t(84),o=t.n(l),s=t(86),i=Object(s.setup)({axios:o.a,baseURL:"https://stronghold.live/api/",timeout:5e3,validateStatus:function(){return!0},cache:{maxAge:1e3}}),m=function(){var e=Object(c.a)(r.a.mark((function e(a,t){var n,c,l,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.prev=1,(null===t||void 0===t?void 0:t.cache)&&(n.cache={maxAge:6e5}),e.next=5,i.get(a,n);case 5:return c=e.sent,e.next=8,c;case 8:return l=e.sent,o=l.data,e.abrupt("return",o);case 13:return e.prev=13,e.t0=e.catch(1),window.postMessage({notify:["error","try-later"]},"*"),e.next=18,0;case 18:return e.abrupt("return",e.sent);case 19:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(a,t){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(r.a.mark((function e(a,t,n){var c,l,o,s,m,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o in c={},e.prev=1,(null===n||void 0===n?void 0:n.cache)&&(c.cache={maxAge:6e5}),l=new FormData,t)l.append(o,t[o]);return s=i.post(a,l,c),e.next=8,s;case 8:return m=e.sent,(null===(u=m.data)||void 0===u?void 0:u.login)&&window.postMessage({login:!0},"*"),e.abrupt("return",u);case 14:return e.prev=14,e.t0=e.catch(1),window.postMessage({notify:["error","try-later"]},"*"),e.next=19,0;case 19:return e.abrupt("return",e.sent);case 20:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(a,t,n){return e.apply(this,arguments)}}()},79:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(14);a.a=function(e){var a=e.title,t=e.icon;return r.a.createElement("div",{className:"page-header"},r.a.createElement("h3",{className:"page-title"},r.a.createElement("span",{className:"page-title-icon bg-gradient-primary text-black mr-2"},r.a.createElement("i",{className:"mdi "+t}))," ",Object(c.a)(a)," "),r.a.createElement("nav",{"aria-label":"breadcrumb"},r.a.createElement("ul",{className:"breadcrumb"},r.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},r.a.createElement("span",null)," ",r.a.createElement("i",{className:"mdi mdi-alert-circle-outline icon-sm text-primary align-middle"})))))}},80:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(90);a.a=function(e){return r.a.createElement("button",{className:e.className,onClick:null===e||void 0===e?void 0:e.onClick},e.loading?r.a.createElement(c.a,{as:"span",animation:"border",size:"sm"}):e.children)}},87:function(e,a,t){"use strict";var n=t(94),r=t(0),c=t.n(r),l=t(14);a.a=function(e){var a=e.type,t=void 0===a?"text":a,r=e.name,o=e.multiLine,s=void 0!==o&&o,i=e.data,m=void 0===i?null:i,u=e.value,d=e.onChange,v=e.error,f=Object(n.a)(e,["type","name","multiLine","data","value","onChange","error"]);return c.a.createElement("div",{className:"form-group "+(v?"has-danger":"")},c.a.createElement("label",{htmlFor:r},Object(l.a)(r)),m?c.a.createElement("select",Object.assign({id:r,name:r,value:u,onChange:function(e){return d(e.target.value)},className:"form-control form-control-lg "+(v?"form-control-danger":"")},f),m.map((function(e,a){return c.a.createElement("option",{value:e}," ",Object(l.a)(e))}))):s?c.a.createElement("textarea",Object.assign({id:r,name:r,dir:"auto",value:u,onChange:function(e){return d(e.target.value)},className:"form-control form-control-lg "+(v?"form-control-danger":""),rows:5},f)):c.a.createElement("input",Object.assign({id:r,name:r,type:t,value:null!==u&&void 0!==u?u:"",onChange:function(e){return d(e.target.value)},autoComplete:"off",dir:"auto",className:"form-control form-control-lg "+(v?"form-control-danger":"")},f)),c.a.createElement("label",{className:"error mt-2 text-danger"},"object"==typeof v?v.map((function(e){return Object(l.a)(e)+" "})):Object(l.a)(v)),"info"in f&&c.a.createElement("label",{className:"info mt-2 text-info w-100"},f.info))}}}]);
//# sourceMappingURL=20.888cb1cf.chunk.js.map