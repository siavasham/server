(window["webpackJsonpadmin-panel"]=window["webpackJsonpadmin-panel"]||[]).push([[24],{180:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(0),u=n.n(r),s=n(4),o=n(14),c=n(78),i=n(93),l=n.n(i),p=n(94),d=n(158),f=n(159),v=n(161),m=n(160),h=n(89),g=function(e){return"object"===typeof e},b=function(e){Object(v.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(e=t.call.apply(t,[this].concat(r))).getClasses=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return!g(e)&&!1!==e})).join(" ")},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this.input,t=this.props,n=t.focus,a=t.shouldAutoFocus;e&&n&&a&&e.focus()}},{key:"componentDidUpdate",value:function(e){var t=this.input,n=this.props.focus;e.focus!==n&&t&&n&&(t.focus(),t.select())}},{key:"render",value:function(){var e=this,t=this.props,n=t.separator,a=t.isLastChild,r=t.inputStyle,s=t.focus,o=t.isDisabled,c=t.hasErrored,i=t.errorStyle,l=t.focusStyle,d=t.disabledStyle,f=(t.shouldAutoFocus,t.isInputNum),v=t.value,m=Object(p.a)(t,["separator","isLastChild","inputStyle","focus","isDisabled","hasErrored","errorStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","value"]);return u.a.createElement("div",{style:{display:"flex",alignItems:"center"}},u.a.createElement("input",Object.assign({autoComplete:"off",style:Object.assign({width:"3rem",textAlign:"center",padding:".5rem"},g(r)&&r,s&&g(l)&&l,o&&g(d)&&d,c&&g(i)&&i),className:this.getClasses(r,s&&l,o&&d,c&&i),type:f?"tel":"text",maxLength:"1",ref:function(t){e.input=t},disabled:o,value:v||""},m)),!a&&n)}}]),n}(r.PureComponent),y=function(e){Object(v.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={activeInput:0},e.getOtpValue=function(){return e.props.value?e.props.value.toString().split(""):[]},e.handleOtpChange=function(t){(0,e.props.onChange)(t.join(""))},e.isInputValueValid=function(t){return(e.props.isInputNum?!isNaN(parseInt(Object(h.a)(t),10)):"string"===typeof t)&&1===t.trim().length},e.focusInput=function(t){var n=e.props.numInputs,a=Math.max(Math.min(n-1,t),0);e.setState({activeInput:a})},e.focusNextInput=function(){var t=e.state.activeInput;e.focusInput(t+1)},e.focusPrevInput=function(){var t=e.state.activeInput;e.focusInput(t-1)},e.changeCodeAtFocus=function(t){var n=e.state.activeInput,a=e.getOtpValue();a[n]=t[0],e.handleOtpChange(a)},e.handleOnPaste=function(t){t.preventDefault();for(var n=e.props.numInputs,a=e.state.activeInput,r=e.getOtpValue(),u=t.clipboardData.getData("text/plain").slice(0,n-a).split(""),s=0;s<n;++s)s>=a&&u.length>0&&(r[s]=u.shift());e.handleOtpChange(r)},e.handleOnChange=function(t){var n=t.target.value;e.isInputValueValid(n)&&e.changeCodeAtFocus(n)},e.handleOnKeyDown=function(t){8===t.keyCode||"Backspace"===t.key?(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput()):46===t.keyCode||"Delete"===t.key?(t.preventDefault(),e.changeCodeAtFocus("")):37===t.keyCode||"ArrowLeft"===t.key?(t.preventDefault(),e.focusPrevInput()):39===t.keyCode||"ArrowRight"===t.key?(t.preventDefault(),e.focusNextInput()):32!==t.keyCode&&" "!==t.key&&"Spacebar"!==t.key&&"Space"!==t.key||t.preventDefault()},e.handleOnInput=function(t){if(e.isInputValueValid(t.target.value))e.focusNextInput();else if(!e.props.isInputNum){var n=t.nativeEvent;null===n.data&&"deleteContentBackward"===n.inputType&&(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}},e.renderInputs=function(){for(var t=e.state.activeInput,n=e.props,a=n.numInputs,r=n.inputStyle,s=n.focusStyle,o=n.separator,c=n.isDisabled,i=n.disabledStyle,l=n.hasErrored,p=n.errorStyle,d=n.shouldAutoFocus,f=n.isInputNum,v=e.getOtpValue(),m=[],h=function(n){m.push(u.a.createElement(b,{key:n,focus:t===n,value:v&&v[n],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(t){e.setState({activeInput:n}),t.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:o,inputStyle:r,focusStyle:s,isLastChild:n===a-1,isDisabled:c,disabledStyle:i,hasErrored:l,errorStyle:p,shouldAutoFocus:d,isInputNum:f}))},g=0;g<a;g++)h(g);return m},e}return Object(f.a)(n,[{key:"render",value:function(){var e=this.props.containerStyle;return u.a.createElement("div",{style:Object.assign({display:"flex"},g(e)&&e),className:g(e)?"":e},this.renderInputs())}}]),n}(r.Component);y.defaultProps={numInputs:4,onChange:function(e){return console.log(e)},isDisabled:!1,shouldAutoFocus:!0,focus:!0,value:""};var O=y,I=n(80),S=n(15),j=n(81);t.default=function(){var e=Object(S.a)(),t=e.session,i=e.setSetting,p=(Object(s.g)(),Object(r.useState)(!1)),d=Object(a.a)(p,2),f=d[0],v=d[1],m=Object(r.useState)(null),g=Object(a.a)(m,2),b=g[0],y=g[1],w=Object(r.useState)(""),x=Object(a.a)(w,2),C=x[0],E=x[1];return u.a.createElement("div",null,u.a.createElement("div",{className:"d-flex align-items-center auth px-0"},u.a.createElement("div",{className:"row w-100 mx-0"},u.a.createElement("div",{className:"col-md-7 col-lg-6 mx-auto box-max"},u.a.createElement("div",{className:"auth-form-light  py-4 px-4 px-sm-5"},u.a.createElement("div",{className:"brand-logo text-center"},u.a.createElement("img",{src:n(51),alt:"logo"})),u.a.createElement("form",{className:"pt-3",autoComplete:"off",onSubmit:function(e){e.preventDefault(),null==function(){var e={};C.length<6&&(e.code="validation.min");var t=l.a.isEmpty(e)?null:e.code;return y(t),t}()&&(v(!0),Object(c.b)("activate",{email:t.email,code:C}).then((function(e){v(!1),e.success?i({login:e.success}):e.error&&y(e.error)})))}},u.a.createElement("p",null,Object(o.a)("codeSendedToEmail")),u.a.createElement("div",{className:"mt-5 mb-5 dir-ltr align-content-center"},u.a.createElement(O,{value:C,onChange:function(e){return E(Object(h.a)(e))},numInputs:6,isInputNum:!0,inputStyle:"form-control",containerStyle:"justify-content-center",separator:u.a.createElement("span",null,"-")})),u.a.createElement(j.a,{variant:"danger",show:!!b},Object(o.a)(b)),u.a.createElement("div",{className:"mt-5"},u.a.createElement(I.a,{loading:f,className:"btn btn-block btn-success btn-lg font-weight-medium auth-form-btn"},Object(o.a)("activate"))),u.a.createElement("div",{className:"text-center mt-4 font-weight-light"},Object(o.a)("activateNotSended")," ",u.a.createElement("a",{href:"#",className:"text-success",onClick:function(e){e.preventDefault();var n=t.name,a=t.email,r=t.password,u=t.referral;Object(c.b)("auth",{name:n,email:a,password:r,referral:u}).then((function(e){e.success||e.error}))}},Object(o.a)("reSend")))))))))}},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));var a=n(83),r=n.n(a),u=n(85),s=n(84),o=n.n(s),c=n(86),i=Object(c.setup)({axios:o.a,baseURL:"https://stronghold.live/api/",timeout:5e3,validateStatus:function(){return!0},cache:{maxAge:1e3}}),l=function(){var e=Object(u.a)(r.a.mark((function e(t,n){var a,u,s,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},e.prev=1,(null===n||void 0===n?void 0:n.cache)&&(a.cache={maxAge:6e5}),e.next=5,i.get(t,a);case 5:return u=e.sent,e.next=8,u;case 8:return s=e.sent,o=s.data,e.abrupt("return",o);case 13:return e.prev=13,e.t0=e.catch(1),window.postMessage({notify:["error","try-later"]},"*"),e.next=18,0;case 18:return e.abrupt("return",e.sent);case 19:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(r.a.mark((function e(t,n,a){var u,s,o,c,l,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o in u={},e.prev=1,(null===a||void 0===a?void 0:a.cache)&&(u.cache={maxAge:6e5}),s=new FormData,n)s.append(o,n[o]);return c=i.post(t,s,u),e.next=8,c;case 8:return l=e.sent,(null===(p=l.data)||void 0===p?void 0:p.login)&&window.postMessage({login:!0},"*"),e.abrupt("return",p);case 14:return e.prev=14,e.t0=e.catch(1),window.postMessage({notify:["error","try-later"]},"*"),e.next=19,0;case 19:return e.abrupt("return",e.sent);case 20:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,n,a){return e.apply(this,arguments)}}()},80:function(e,t,n){"use strict";var a=n(0),r=n.n(a),u=n(90);t.a=function(e){return r.a.createElement("button",{className:e.className,onClick:null===e||void 0===e?void 0:e.onClick},e.loading?r.a.createElement(u.a,{as:"span",animation:"border",size:"sm"}):e.children)}},89:function(e,t,n){"use strict";function a(e){if(void 0!=e){var t="",n={"\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9","\u06f0":"0"};e=e.toString();for(var a=0;a<e.length;a++)n[e[a]]?t+=n[e[a]]:t+=e[a];return t}}n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return s}));var r=function(e){return/\S+@\S+\.\S+/.test(e)};function u(e){return"undefined"==typeof e||"null"==e?"":e.length<2?e+"":(""+e).replace(/,/g,"").replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")}function s(e){for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var a=t[n].split("=");if(a[0]==e)return a[1]}return!1}}}]);
//# sourceMappingURL=24.0d49b92a.chunk.js.map