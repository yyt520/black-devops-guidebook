(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[57],{"6T1g":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("SVOR"),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c=o,i={Prism:l["a"],theme:c};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}var m=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e){var t=[[]],n=[e],a=[0],r=[e.length],l=0,o=0,c=[],i=[c];while(o>-1){while((l=a[o]++)<r[o]){var s=void 0,u=t[o],h=n[o],k=h[l];if("string"===typeof k?(u=o>0?u:["plain"],s=k):(u=d(u,k.type),k.alias&&(u=d(u,k.alias)),s=k.content),"string"===typeof s){var y=s.split(m),E=y.length;c.push({types:u,content:y[0]});for(var g=1;g<E;g++)p(c),i.push(c=[]),c.push({types:u,content:y[g]})}else o++,t.push(u),n.push(s),a.push(0),r.push(s.length)}o--,t.pop(),n.pop(),a.pop(),r.pop()}return p(c),i},k=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=u({},n,{backgroundColor:null}),r};function y(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var E=function(e){function t(){var t=this,n=[],a=arguments.length;while(a--)n[a]=arguments[a];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?k(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,l=y(e,["key","className","style","line"]),o=l,c=u({},o,{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(c.style=i.plain),void 0!==r&&(c.style=void 0!==c.style?u({},c.style,r):r),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c})),s(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return l[n[0]];var o=a?{display:"inline-block"}:{},c=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(c))}})),s(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,l=e.token,o=y(e,["key","className","style","token"]),c=o,i=u({},c,{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?u({},i.style,r):r),void 0!==n&&(i.key=n),a&&(i.className+=" "+a),i})),s(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[n],c=void 0!==o?this.tokenize(t,a,o,n):[a],i=h(c);return r({tokens:i,className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a["Component"]),g=E,f=n("dEAq");n("qHiR"),n("rVZW");function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v.apply(this,arguments)}function b(e,t){return P(e)||I(e,t)||N(e,t)||w()}function w(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function N(e,t){if(e){if("string"===typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function I(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){c=!0,r=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function P(e){if(Array.isArray(e))return e}var A={acss:"css",axml:"xml"};t["a"]=function(e){var t=e.code,n=e.lang,a=e.showCopy,l=void 0===a||a,o=Object(f["useCopy"])(),c=b(o,2),s=c[0],u=c[1];return r.a.createElement("div",{className:"__dumi-default-code-block"},r.a.createElement(g,v({},i,{code:t,language:A[n]||n,theme:void 0}),(function(e){var n=e.className,a=e.style,o=e.tokens,c=e.getLineProps,i=e.getTokenProps;return r.a.createElement("pre",{className:n,style:a},l&&r.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":u,onClick:function(){return s(t)}}),o.map((function(e,t){return r.a.createElement("div",c({line:e,key:t}),e.map((function(e,t){return r.a.createElement("span",i({token:e,key:t}))})))})))})))}},PXLR:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("dEAq"),o=n("6T1g"),c=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u7f51\u7edc\u901a\u4fe1"},r.a.createElement(l["AnchorLink"],{to:"#\u7f51\u7edc\u901a\u4fe1","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u7f51\u7edc\u901a\u4fe1"),r.a.createElement("p",null,"\u8981\u5b9e\u73b0\u7f51\u7edc\u901a\u4fe1\uff0c\u673a\u5668\u9700\u8981\u81f3\u5c11\u4e00\u4e2a\u7f51\u7edc\u63a5\u53e3\uff08\u7269\u7406\u63a5\u53e3\u6216\u865a\u62df\u63a5\u53e3\uff09\u6765\u6536\u53d1\u6570\u636e\u5305\uff1b\u6b64\u5916\uff0c\u5982\u679c\u4e0d\u540c\u5b50\u7f51\u4e4b\u95f4\u8981\u8fdb\u884c\u901a\u4fe1\uff0c\u9700\u8981\u8def\u7531\u673a\u5236\u3002"),r.a.createElement("p",null,"Docker \u4e2d\u7684\u7f51\u7edc\u63a5\u53e3\u9ed8\u8ba4\u90fd\u662f\u865a\u62df\u7684\u63a5\u53e3\u3002\u865a\u62df\u63a5\u53e3\u7684\u4f18\u52bf\u4e4b\u4e00\u662f\u8f6c\u53d1\u6548\u7387\u8f83\u9ad8\u3002 Linux \u901a\u8fc7\u5728\u5185\u6838\u4e2d\u8fdb\u884c\u6570\u636e\u590d\u5236\u6765\u5b9e\u73b0\u865a\u62df\u63a5\u53e3\u4e4b\u95f4\u7684\u6570\u636e\u8f6c\u53d1\uff0c\u53d1\u9001\u63a5\u53e3\u7684\u53d1\u9001\u7f13\u5b58\u4e2d\u7684\u6570\u636e\u5305\u88ab\u76f4\u63a5\u590d\u5236\u5230\u63a5\u6536\u63a5\u53e3\u7684\u63a5\u6536\u7f13\u5b58\u4e2d\u3002\u5bf9\u4e8e\u672c\u5730\u7cfb\u7edf\u548c\u5bb9\u5668\u5185\u7cfb\u7edf\u770b\u6765\u5c31\u50cf\u662f\u4e00\u4e2a\u6b63\u5e38\u7684\u4ee5\u592a\u7f51\u5361\uff0c\u53ea\u662f\u5b83\u4e0d\u9700\u8981\u771f\u6b63\u540c\u5916\u90e8\u7f51\u7edc\u8bbe\u5907\u901a\u4fe1\uff0c\u901f\u5ea6\u8981\u5feb\u5f88\u591a\u3002"),r.a.createElement("p",null,"Docker \u5bb9\u5668\u7f51\u7edc\u5c31\u5229\u7528\u4e86\u8fd9\u9879\u6280\u672f\u3002\u5b83\u5728\u672c\u5730\u4e3b\u673a\u548c\u5bb9\u5668\u5185\u5206\u522b\u521b\u5efa\u4e00\u4e2a\u865a\u62df\u63a5\u53e3\uff0c\u5e76\u8ba9\u5b83\u4eec\u5f7c\u6b64\u8fde\u901a\uff08\u8fd9\u6837\u7684\u4e00\u5bf9\u63a5\u53e3\u53eb\u505a ",r.a.createElement("code",null,"veth pair"),"\uff09\u3002"),r.a.createElement("p",null,"Docker \u4e2d\u4f7f\u7528 Network \u6765\u7ba1\u7406\u5bb9\u5668\u4e4b\u95f4\u7684\u901a\u4fe1\uff0c\u53ea\u8981\u4e24\u4e2a Conteiner \u5904\u4e8e\u540c\u4e00\u4e2a Network \u4e4b\u4e2d\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7\u5bb9\u5668\u540d\u53bb\u4e92\u76f8\u901a\u4fe1\u3002"),r.a.createElement("h2",{id:"\u7f51\u7edc\u6a21\u5f0f\u7c7b\u578b"},r.a.createElement(l["AnchorLink"],{to:"#\u7f51\u7edc\u6a21\u5f0f\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u7f51\u7edc\u6a21\u5f0f\u7c7b\u578b"),r.a.createElement("p",null,"Docker \u521b\u5efa\u4e00\u4e2a\u5bb9\u5668\u7684\u65f6\u5019\uff0c\u4f1a\u6267\u884c\u5982\u4e0b\u64cd\u4f5c\uff1a"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u521b\u5efa\u4e00\u5bf9\u865a\u62df\u63a5\u53e3\uff0c\u5206\u522b\u653e\u5230\u672c\u5730\u4e3b\u673a\u548c\u65b0\u5bb9\u5668\u4e2d"),r.a.createElement("li",null,"\u672c\u5730\u4e3b\u673a\u4e00\u7aef\u6865\u63a5\u5230\u9ed8\u8ba4\u7684 ",r.a.createElement("code",null,"docker0")," \u6216\u6307\u5b9a\u7f51\u6865\u4e0a\uff0c\u5e76\u5177\u6709\u4e00\u4e2a\u552f\u4e00\u7684\u540d\u5b57\uff0c\u5982 ",r.a.createElement("code",null,"veth65f9")),r.a.createElement("li",null,"\u5bb9\u5668\u4e00\u7aef\u653e\u5230\u65b0\u5bb9\u5668\u4e2d\uff0c\u5e76\u4fee\u6539\u540d\u5b57\u4f5c\u4e3a ",r.a.createElement("code",null,"eth0"),"\uff0c\u8fd9\u4e2a\u63a5\u53e3 ",r.a.createElement("strong",null,"\u53ea\u5728")," \u5bb9\u5668\u7684\u540d\u5b57\u7a7a\u95f4\u53ef\u89c1"),r.a.createElement("li",null,"\u4ece\u7f51\u6865\u53ef\u7528\u5730\u5740\u6bb5\u4e2d\u83b7\u53d6\u4e00\u4e2a\u7a7a\u95f2\u5730\u5740\u5206\u914d\u7ed9\u5bb9\u5668\u7684 ",r.a.createElement("code",null,"eth0"),"\uff0c\u5e76\u914d\u7f6e\u9ed8\u8ba4\u8def\u7531\u5230\u6865\u63a5\u7f51\u5361 ",r.a.createElement("code",null,"veth65f9"))),r.a.createElement("p",null,"\u5b8c\u6210\u8fd9\u4e9b\u4e4b\u540e\uff0c\u5bb9\u5668\u5c31\u53ef\u4ee5\u4f7f\u7528 ",r.a.createElement("code",null,"eth0")," \u865a\u62df\u7f51\u5361\u6765\u8fde\u63a5\u5176\u4ed6\u5bb9\u5668\u548c\u5176\u4ed6\u7f51\u7edc\u3002"),r.a.createElement("p",null,"\u53ef\u4ee5\u5728 ",r.a.createElement("code",null,"docker run")," \u7684\u65f6\u5019\u901a\u8fc7 ",r.a.createElement("code",null,"--net")," \u53c2\u6570\u6765\u6307\u5b9a\u5bb9\u5668\u7684\u7f51\u7edc\u914d\u7f6e\uff0c\u6709\u56db\u4e2a\u53ef\u9009\u503c\uff0c\u4e0b\u9762\u9010\u4e2a\u8fdb\u884c\u89e3\u91ca\u3002"),r.a.createElement("h3",{id:"bridge-\u6a21\u5f0f"},r.a.createElement(l["AnchorLink"],{to:"#bridge-\u6a21\u5f0f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Bridge \u6a21\u5f0f"),r.a.createElement("p",null,"Bridge \u6a21\u5f0f\uff08",r.a.createElement("code",null,"--net=bridge"),"\uff09\u4e3a Docker \u5bb9\u5668\u9ed8\u8ba4\u521b\u5efa\u540e\u7684\u7f51\u7edc\u6a21\u5f0f\uff0c\u8fd9\u4e2d\u6a21\u5f0f\u521b\u5efa\u540e\u5373\u52a0\u5165 ",r.a.createElement("code",null,"docker0")," \u7f51\u6865\u3002\u5176\u7279\u70b9\u5982\u4e0b\uff1a"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u4f7f\u7528\u4e00\u4e2a Linux bridge\uff0c\u9ed8\u8ba4\u4e3a ",r.a.createElement("code",null,"docker0")),r.a.createElement("li",null,"\u4f7f\u7528 veth \u5bf9\uff0c\u4e00\u5934\u5728\u5bb9\u5668\u7684\u7f51\u7edc namespace \u4e2d\uff0c\u4e00\u5934\u5728 ",r.a.createElement("code",null,"docker0")," \u4e0a"),r.a.createElement("li",null,"\u8be5\u6a21\u5f0f\u4e0b Docker Container \u4e0d\u5177\u6709\u4e00\u4e2a\u516c\u6709 IP\uff0c\u56e0\u4e3a\u5bbf\u4e3b\u673a\u7684 IP \u5730\u5740\u4e0e veth pair \u7684 IP \u5730\u5740\u4e0d\u5728\u540c\u4e00\u4e2a\u7f51\u6bb5\u5185"),r.a.createElement("li",null,"Docker \u91c7\u7528 NAT \u65b9\u5f0f\uff0c\u5c06\u5bb9\u5668\u5185\u90e8\u7684\u670d\u52a1\u76d1\u542c\u7684\u7aef\u53e3\u4e0e\u5bbf\u4e3b\u673a\u7684\u67d0\u4e00\u4e2a\u7aef\u53e3 port \u8fdb\u884c",r.a.createElement("strong",null,"\u7ed1\u5b9a"),"\uff0c\u4f7f\u5f97\u5bbf\u4e3b\u673a\u4ee5\u5916\u7684\u4e16\u754c\u53ef\u4ee5\u4e3b\u52a8\u5c06\u7f51\u7edc\u62a5\u6587\u53d1\u9001\u81f3\u5bb9\u5668\u5185\u90e8"),r.a.createElement("li",null,"\u5916\u754c\u8bbf\u95ee\u5bb9\u5668\u5185\u7684\u670d\u52a1\u65f6\uff0c\u9700\u8981\u8bbf\u95ee\u5bbf\u4e3b\u673a\u7684 IP \u4ee5\u53ca\u5bbf\u4e3b\u673a\u7684\u7aef\u53e3 port"),r.a.createElement("li",null,"NAT \u6a21\u5f0f\u7531\u4e8e\u662f\u5728\u4e09\u5c42\u7f51\u7edc\u4e0a\u7684\u5b9e\u73b0\u624b\u6bb5\uff0c\u6545\u80af\u5b9a\u4f1a\u5f71\u54cd\u7f51\u7edc\u7684\u4f20\u8f93\u6548\u7387"),r.a.createElement("li",null,"\u5bb9\u5668\u62e5\u6709\u72ec\u7acb\u3001\u9694\u79bb\u7684\u7f51\u7edc\u6808\uff1b\u8ba9\u5bb9\u5668\u548c\u5bbf\u4e3b\u673a\u4ee5\u5916\u7684\u4e16\u754c\u901a\u8fc7 NAT \u5efa\u7acb\u901a\u4fe1")),r.a.createElement("h3",{id:"host-\u6a21\u5f0f"},r.a.createElement(l["AnchorLink"],{to:"#host-\u6a21\u5f0f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Host \u6a21\u5f0f"),r.a.createElement("p",null,"Host \u6a21\u5f0f\uff08",r.a.createElement("code",null,"--net=host"),"\uff09\u5e76\u6ca1\u6709\u4e3a\u5bb9\u5668\u521b\u5efa\u4e00\u4e2a\u9694\u79bb\u7684\u7f51\u7edc\u73af\u5883\uff08network namespace\uff09\uff0c\u8fd9\u5c31\u610f\u5473\u7740\u5bb9\u5668\u4e0d\u4f1a\u6709\u81ea\u5df1\u7684\u7f51\u5361\u4fe1\u606f\uff0c\u800c\u662f\u4e0e\u5bbf\u4e3b\u673a\u5171\u7528\u7f51\u7edc\u73af\u5883\uff0c\u4ea6\u5373\u62e5\u6709\u5b8c\u5168\u7684\u672c\u5730\u4e3b\u673a\u63a5\u53e3\u7684\u8bbf\u95ee\u6743\u9650\u3002"),r.a.createElement("p",null,"\u5bb9\u5668\u8fdb\u7a0b\u53ef\u4ee5\u8ddf\u5bbf\u4e3b\u673a\u5176\u4ed6 root \u8fdb\u7a0b\u4e00\u6837\u6253\u5f00\u4f4e\u8303\u56f4\u7684\u7aef\u53e3\uff0c\u53ef\u4ee5\u8bbf\u95ee\u672c\u5730\u7f51\u7edc\u670d\u52a1\u6bd4\u5982 D-Bus\uff0c\u8fd8\u53ef\u4ee5\u8ba9\u5bb9\u5668\u505a\u4e00\u4e9b\u5f71\u54cd\u6574\u4e2a\u4e3b\u673a\u7cfb\u7edf\u7684\u4e8b\u60c5\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5bb9\u5668\u9664\u4e86\u7f51\u7edc\uff0c\u5176\u4ed6\u90fd\u662f\u9694\u79bb\u7684\u3002"),r.a.createElement("p",null,"\u6b64\u65f6\u5bb9\u5668\u5185\u83b7\u53d6 IP \u4e3a\u5bbf\u4e3b\u673a IP\uff0c\u7aef\u53e3\u7ed1\u5b9a\u76f4\u63a5\u7ed1\u5b9a\u5728\u5bbf\u4e3b\u673a\u7f51\u5361\u4e0a\uff0c\u6709\u70b9\u662f\u7f51\u7edc\u4f20\u8f93\u4e0d\u7528\u7ecf\u8fc7 NAT \u8f6c\u6362\uff0c\u6548\u7387\u66f4\u9ad8\u901f\u5ea6\u66f4\u5feb\u3002"),r.a.createElement("p",null,"\u5176\u7279\u70b9\u5305\u62ec\uff1a"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u8fd9\u79cd\u6a21\u5f0f\u4e0b\u7684\u5bb9\u5668\u6ca1\u6709\u9694\u79bb\u7684 network namespace"),r.a.createElement("li",null,"\u5bb9\u5668\u7684 IP \u5730\u5740\u540c Docker host\uff08\u5bb9\u5668\u7684\u5bbf\u4e3b\u673a\uff09\u7684 IP \u5730\u5740"),r.a.createElement("li",null,"\u9700\u8981\u6ce8\u610f\u5bb9\u5668\u4e2d\u670d\u52a1\u7684\u7aef\u53e3\u53f7\u4e0d\u80fd\u4e0e Docker host \u4e0a\u5df2\u7ecf\u4f7f\u7528\u7684\u7aef\u53e3\u53f7\u76f8\u51b2\u7a81"),r.a.createElement("li",null,"host \u6a21\u5f0f\u80fd\u591f\u548c\u5176\u5b83\u6a21\u5f0f\u5171\u5b58")),r.a.createElement("h3",{id:"container-\u6a21\u5f0f"},r.a.createElement(l["AnchorLink"],{to:"#container-\u6a21\u5f0f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Container \u6a21\u5f0f"),r.a.createElement("p",null,"Container \u6a21\u5f0f\uff08",r.a.createElement("code",null,"--net=container:<NAME_OR_ID>"),"\uff09\u662f Docker \u4e2d\u4e00\u79cd\u8f83\u4e3a\u7279\u522b\u7684\u7f51\u7edc\u7684\u6a21\u5f0f\u3002\u5904\u4e8e\u8fd9\u4e2a\u6a21\u5f0f\u4e0b\u7684 Docker \u5bb9\u5668\u4f1a\u5171\u4eab\u5176\u4ed6\u5bb9\u5668\u7684\u7f51\u7edc\u73af\u5883\uff08\u5171\u4eab network namespace\uff09\uff0c\u56e0\u6b64\uff0c\u81f3\u5c11\u8fd9\u4e24\u4e2a\u5bb9\u5668\u4e4b\u95f4\u4e0d\u5b58\u5728\u7f51\u7edc\u9694\u79bb\uff0c\u800c\u8fd9\u4e24\u4e2a\u5bb9\u5668\u53c8\u4e0e\u5bbf\u4e3b\u673a\u4ee5\u53ca\u9664\u6b64\u4e4b\u5916\u5176\u4ed6\u7684\u5bb9\u5668\u5b58\u5728\u7f51\u7edc\u9694\u79bb\u3002"),r.a.createElement("p",null,"\u4e24\u4e2a\u5bb9\u5668\u6709\u81ea\u5df1\u7684\u6587\u4ef6\u7cfb\u7edf\u3001\u8fdb\u7a0b\u5217\u8868\u548c\u8d44\u6e90\u9650\u5236\uff0c\u4f46\u4f1a\u548c\u5df2\u5b58\u5728\u7684\u5bb9\u5668\u5171\u4eab IP \u5730\u5740\u548c\u7aef\u53e3\u7b49\u7f51\u7edc\u8d44\u6e90\uff0c\u4e24\u8005\u8fdb\u7a0b\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 I/O \u73af\u56de\u63a5\u53e3\u901a\u4fe1\u3002"),r.a.createElement("h3",{id:"none-\u6a21\u5f0f"},r.a.createElement(l["AnchorLink"],{to:"#none-\u6a21\u5f0f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"None \u6a21\u5f0f"),r.a.createElement("p",null,"None \u6a21\u5f0f\uff08",r.a.createElement("code",null,"--net=none"),"\uff09\uff0c\u5373\u5bb9\u5668\u83b7\u53d6\u72ec\u7acb\u7684 network namespace\uff0c\u4f46\u4e0d\u4e3a\u5bb9\u5668\u8fdb\u884c\u4efb\u4f55\u7f51\u7edc\u914d\u7f6e\uff0c\u9700\u8981\u624b\u52a8\u914d\u7f6e\u3002\u4e00\u65e6 Docker \u5bb9\u5668\u91c7\u7528\u4e86 none \u7f51\u7edc\u6a21\u5f0f\uff0c\u90a3\u4e48\u5bb9\u5668\u5185\u90e8\u5c31\u53ea\u80fd\u4f7f\u7528 ",r.a.createElement("code",null,"loopback")," \u7f51\u7edc\u8bbe\u5907\uff0c\u4e0d\u4f1a\u518d\u6709\u5176\u4ed6\u7684\u7f51\u7edc\u8d44\u6e90\u3002Docker Container \u7684 none \u7f51\u7edc\u6a21\u5f0f\u610f\u5473\u7740\u4e0d\u7ed9\u8be5\u5bb9\u5668\u521b\u5efa\u4efb\u4f55\u7f51\u7edc\u73af\u5883\uff0c\u5bb9\u5668\u53ea\u80fd\u4f7f\u7528 ",r.a.createElement("code",null,"127.0.0.1")," \u7684\u672c\u673a\u7f51\u7edc\u3002"),r.a.createElement("h2",{id:"\u591a\u5bb9\u5668\u901a\u4fe1"},r.a.createElement(l["AnchorLink"],{to:"#\u591a\u5bb9\u5668\u901a\u4fe1","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u591a\u5bb9\u5668\u901a\u4fe1"),r.a.createElement(o["a"],{code:"# \u901a\u8fc7link\u6307\u4ee4\u5efa\u7acb\u8fde\u63a5\n $ docker run --name <Name> -d -p <path1>:<path2> --link <containerName>:<alias> <containerName:tag/imageID>\n\n- --link \u5bb9\u5668\u8fde\u63a5\u6307\u4ee4\n- < containerName > : < alias >\n- < \u88ab\u8fde\u63a5\u5bb9\u5668\u540d\u79f0 > : < \u5bb9\u5668\u8bbf\u95ee\u522b\u540d >\n- \u6ce8\uff1a\u522b\u540d\u5728\u4e3b\u52a8\u5efa\u7acb\u8fde\u63a5\u7684\u5bb9\u5668\u4e2d\u8bbf\u95ee\u88ab\u8fde\u63a5\u5bb9\u5668\u4f7f\u7528\n- \u4ee5\u4e0b\u6307\u4ee4\u5728\u5bb9\u5668\u68c0\u6d4b\u8fde\u63a5\u72b6\u6001\n    $ curl <alias>",lang:"bash"}),r.a.createElement("h2",{id:"\u76f8\u5173\u6307\u4ee4"},r.a.createElement(l["AnchorLink"],{to:"#\u76f8\u5173\u6307\u4ee4","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u76f8\u5173\u6307\u4ee4"),r.a.createElement("p",null,"Docker \u4e2d\u5e38\u7528\u7684 network \u6307\u4ee4\uff1a"),r.a.createElement(o["a"],{code:"$ docker network create\n\n# \u5c06\u5bb9\u5668 container-name \u8fde\u63a5\u5230\u65b0\u5efa\u7f51\u7edc network-name\n$ docker network connect <network-name> <contaienr-name>\n\n$ docker network ls\n\n# \u5c06 container-name \u4ece network-name \u7f51\u7edc\u4e2d\u79fb\u9664\u8fde\u63a5\n$ docker network disconnect <network-name> <container-name>\n\n# \u4e0e disconnect \u76f8\u4f3c\uff0c\u4f46\u662f\u8981\u6c42\u5bb9\u5668\u5173\u95ed\u6216\u65ad\u5f00\u4e0e\u6b64\u7f51\u7edc\u7684\u8fde\u63a5\n$ docker network rm <network-name> <container-name>\n\n# \u67e5\u770b\u5bb9\u5668\u7684\u7f51\u7edc\u60c5\u51b5\n$ docker network inspect <container-name>",lang:"bash"}),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("strong",null,"\u53c2\u8003\u8d44\u6599\uff1a")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l["Link"],{to:"https://docs.docker.com/network/"},"\ud83d\udcd6 Docker\uff1aNetworking overview")),r.a.createElement("li",null,r.a.createElement(l["Link"],{to:"https://www.jianshu.com/p/9ea182393c0e"},"\ud83d\udcdd Docker \u7cfb\u5217\u6559\u7a0b - network \u547d\u4ee4")),r.a.createElement("li",null,r.a.createElement(l["Link"],{to:"https://www.cnblogs.com/zzsdream/p/11193096.html"},"\ud83d\udcdd Docker \u7f51\u7edc\u5b9e\u73b0")))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(c,{demos:n})}},qHiR:function(e,t,n){},rVZW:function(e,t,n){}}]);