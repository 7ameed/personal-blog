(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"2/Rp":function(t,e,n){"use strict";var r=n("q1tI"),o=n("TSYQ"),a=n.n(o),i=n("94VI"),c=n("BGR+"),l=n("CtXQ"),u=n("H84U"),s=n("g0mS"),f=n("CWQg");function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v(t);if(e){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(t,e){return!e||"object"!==g(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var w=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},E=/^[\u4e00-\u9fa5]{2}$/,O=E.test.bind(E);function k(t,e){var n=!1,o=[];return r.Children.forEach(t,(function(t){var e=g(t),r="string"===e||"number"===e;if(n&&r){var a=o.length-1,i=o[a];o[a]="".concat(i).concat(t)}else o.push(t);n=r})),r.Children.map(o,(function(t){return function(t,e){if(null!=t){var n=e?" ":"";return"string"!=typeof t&&"number"!=typeof t&&"string"==typeof t.type&&O(t.props.children)?r.cloneElement(t,{},t.props.children.split("").join(n)):"string"==typeof t?(O(t)&&(t=t.split("").join(n)),r.createElement("span",null,t)):t}}(t,e)}))}Object(f.a)("default","primary","ghost","dashed","danger","link");var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(f,t);var e,n,o,i=h(f);function f(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(e=i.call(this,t)).saveButtonRef=function(t){e.buttonNode=t},e.handleClick=function(t){var n=e.state.loading,r=e.props.onClick;n||r&&r(t)},e.renderButton=function(t){var n,o=t.getPrefixCls,i=t.autoInsertSpaceInButton,u=e.props,f=u.prefixCls,m=u.type,y=u.shape,h=u.size,b=u.className,v=u.children,g=u.icon,E=u.ghost,O=u.block,C=w(u,["prefixCls","type","shape","size","className","children","icon","ghost","block"]),S=e.state,T=S.loading,N=S.hasTwoCNChar,j=o("btn",f),x=!1!==i,P="";switch(h){case"large":P="lg";break;case"small":P="sm"}var _=T?"loading":g,I=a()(j,b,(d(n={},"".concat(j,"-").concat(m),m),d(n,"".concat(j,"-").concat(y),y),d(n,"".concat(j,"-").concat(P),P),d(n,"".concat(j,"-icon-only"),!v&&0!==v&&_),d(n,"".concat(j,"-loading"),!!T),d(n,"".concat(j,"-background-ghost"),E),d(n,"".concat(j,"-two-chinese-chars"),N&&x),d(n,"".concat(j,"-block"),O),n)),R=_?r.createElement(l.a,{type:_}):null,L=v||0===v?k(v,e.isNeedInserted()&&x):null,z=Object(c.a)(C,["htmlType","loading"]);if(void 0!==z.href)return r.createElement("a",p({},z,{className:I,onClick:e.handleClick,ref:e.saveButtonRef}),R,L);var B=C,A=B.htmlType,D=w(B,["htmlType"]),W=r.createElement("button",p({},Object(c.a)(D,["loading"]),{type:A,className:I,onClick:e.handleClick,ref:e.saveButtonRef}),R,L);return"link"===m?W:r.createElement(s.a,null,W)},e.state={loading:t.loading,hasTwoCNChar:!1},e}return e=f,(n=[{key:"componentDidMount",value:function(){this.fixTwoCNChar()}},{key:"componentDidUpdate",value:function(t){var e=this;this.fixTwoCNChar(),t.loading&&"boolean"!=typeof t.loading&&clearTimeout(this.delayTimeout);var n=this.props.loading;n&&"boolean"!=typeof n&&n.delay?this.delayTimeout=window.setTimeout((function(){e.setState({loading:n})}),n.delay):t.loading!==n&&this.setState({loading:n})}},{key:"componentWillUnmount",value:function(){this.delayTimeout&&clearTimeout(this.delayTimeout)}},{key:"fixTwoCNChar",value:function(){if(this.buttonNode){var t=this.buttonNode.textContent;this.isNeedInserted()&&O(t)?this.state.hasTwoCNChar||this.setState({hasTwoCNChar:!0}):this.state.hasTwoCNChar&&this.setState({hasTwoCNChar:!1})}}},{key:"isNeedInserted",value:function(){var t=this.props,e=t.icon,n=t.children,o=t.type;return 1===r.Children.count(n)&&!e&&"link"!==o}},{key:"render",value:function(){return r.createElement(u.a,null,this.renderButton)}}])&&m(e.prototype,n),o&&m(e,o),f}(r.Component);C.__ANT_BUTTON=!0,C.defaultProps={loading:!1,ghost:!1,block:!1,htmlType:"button"},Object(i.polyfill)(C);var S=C;function T(){return(T=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var N=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},j=function(t){return r.createElement(u.a,null,(function(e){var n=e.getPrefixCls,o=t.prefixCls,i=t.size,c=t.className,l=N(t,["prefixCls","size","className"]),u=n("btn-group",o),s="";switch(i){case"large":s="lg";break;case"small":s="sm"}var f,p,d,m=a()(u,(f={},p="".concat(u,"-").concat(s),d=s,p in f?Object.defineProperty(f,p,{value:d,enumerable:!0,configurable:!0,writable:!0}):f[p]=d,f),c);return r.createElement("div",T({},l,{className:m}))}))};S.Group=j;e.a=S},CWQg:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e}},HbLn:function(t,e,n){},"L/Qf":function(t,e,n){"use strict";n("SchZ"),n("HbLn")},g0mS:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var r,o=n("q1tI"),a=n("i8i4"),i=n("/dDc"),c=n("oHiP"),l=n("H84U");function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?y(t):e}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t){return!t||null===t.offsetParent}function v(t){var e=(t||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return!(e&&e[1]&&e[2]&&e[3])||!(e[1]===e[2]&&e[2]===e[3])}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(h,t);var e,n,u,m=d(h);function h(){var t;return s(this,h),(t=m.apply(this,arguments)).animationStart=!1,t.destroy=!1,t.onClick=function(e,n){if(!(!e||b(e)||e.className.indexOf("-leave")>=0)){var o=t.props.insertExtraNode;t.extraNode=document.createElement("div");var a=y(t).extraNode;a.className="ant-click-animating-node";var c=t.getAttributeName();e.setAttribute(c,"true"),r=r||document.createElement("style"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&v(n)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(n)&&"transparent"!==n&&(t.csp&&t.csp.nonce&&(r.nonce=t.csp.nonce),a.style.borderColor=n,r.innerHTML="\n      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {\n        --antd-wave-shadow-color: ".concat(n,";\n      }"),document.body.contains(r)||document.body.appendChild(r)),o&&e.appendChild(a),i.a.addStartEventListener(e,t.onTransitionStart),i.a.addEndEventListener(e,t.onTransitionEnd)}},t.onTransitionStart=function(e){if(!t.destroy){var n=Object(a.findDOMNode)(y(t));e&&e.target===n&&(t.animationStart||t.resetEffect(n))}},t.onTransitionEnd=function(e){e&&"fadeEffect"===e.animationName&&t.resetEffect(e.target)},t.bindAnimationEvent=function(e){if(e&&e.getAttribute&&!e.getAttribute("disabled")&&!(e.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!b(n.target)){t.resetEffect(e);var r=getComputedStyle(e).getPropertyValue("border-top-color")||getComputedStyle(e).getPropertyValue("border-color")||getComputedStyle(e).getPropertyValue("background-color");t.clickWaveTimeoutId=window.setTimeout((function(){return t.onClick(e,r)}),0),c.a.cancel(t.animationStartId),t.animationStart=!0,t.animationStartId=Object(c.a)((function(){t.animationStart=!1}),10)}};return e.addEventListener("click",n,!0),{cancel:function(){e.removeEventListener("click",n,!0)}}}},t.renderWave=function(e){var n=e.csp,r=t.props.children;return t.csp=n,r},t}return e=h,(n=[{key:"componentDidMount",value:function(){var t=Object(a.findDOMNode)(this);t&&1===t.nodeType&&(this.instance=this.bindAnimationEvent(t))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroy=!0}},{key:"getAttributeName",value:function(){return this.props.insertExtraNode?"ant-click-animating":"ant-click-animating-without-extra-node"}},{key:"resetEffect",value:function(t){if(t&&t!==this.extraNode&&t instanceof Element){var e=this.props.insertExtraNode,n=this.getAttributeName();t.setAttribute(n,"false"),r&&(r.innerHTML=""),e&&this.extraNode&&t.contains(this.extraNode)&&t.removeChild(this.extraNode),i.a.removeStartEventListener(t,this.onTransitionStart),i.a.removeEndEventListener(t,this.onTransitionEnd)}}},{key:"render",value:function(){return o.createElement(l.a,null,this.renderWave)}}])&&f(e.prototype,n),u&&f(e,u),h}(o.Component)},yZlL:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m})),n.d(e,"postQuery",(function(){return y}));n("L/Qf");var r=n("2/Rp"),o=(n("2oDE"),n("CtXQ")),a=n("q1tI"),i=n.n(a),c=n("Bl7J"),l=n("vrFN"),u=n("Wbzz"),s=n("9eSz"),f=n.n(s),p=function(){return i.a.createElement(u.StaticQuery,{query:"2430678252",render:function(t){return i.a.createElement(f.a,{fluid:t.placeholderImage.childImageSharp.fluid})}})},d="undefined"!=typeof window&&window;function m(t){var e=t.data.markdownRemark;return i.a.createElement(c.a,{location:"blog"},i.a.createElement("div",{style:{padding:40,maxWidth:800}},i.a.createElement(l.a,{title:e.frontmatter.title,keywords:["hameed","blog","software","development","web","mobile","app","application","javascript","nodejs","react"]}),i.a.createElement("div",{style:{marginBottom:20}},i.a.createElement("h2",{style:{color:"#404040"}},e.frontmatter.title),i.a.createElement("p",{style:{color:"#939393",marginBottom:0}},"Posted at ",e.frontmatter.date),i.a.createElement(r.a,{size:"small",ghost:!0,type:"primary",href:"https://twitter.com/intent/tweet?original_referer=https://hameed.tech&amp;ref_src=&amp;text="+e.frontmatter.title+"&amp;url="+d.location,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(o.a,{type:"twitter",style:{fontSize:17}}),i.a.createElement("span",null," Tweet")),i.a.createElement(r.a,{style:{marginLeft:5},size:"small",type:"primary",href:"https://www.facebook.com/sharer/sharer.php?u="+d.location,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(o.a,{type:"facebook",theme:"filled",style:{fontSize:17}}),i.a.createElement("span",null," Share"))),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("p",null,"By following me on twitter",i.a.createElement("a",{style:{marginLeft:5},href:"https://www.twitter.com/hameed0z",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(o.a,{type:"twitter",style:{fontSize:17}}),i.a.createElement("span",null," @hameed0z "))),i.a.createElement("p",{style:{display:"inline"}},"Thanks"),i.a.createElement("div",{style:{width:200}},i.a.createElement(p,null))))}var y="1769634772"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-b4f46e69e6aee8e5bd38.js.map