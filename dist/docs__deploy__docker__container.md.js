(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[51],{"6T1g":function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),r=n("SVOR"),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=c,i={Prism:r["a"],theme:o};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}var m=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e){var t=[[]],n=[e],a=[0],l=[e.length],r=0,c=0,o=[],i=[o];while(c>-1){while((r=a[c]++)<l[c]){var u=void 0,s=t[c],h=n[c],E=h[r];if("string"===typeof E?(s=c>0?s:["plain"],u=E):(s=p(s,E.type),E.alias&&(s=p(s,E.alias)),u=E.content),"string"===typeof u){var y=u.split(m),f=y.length;o.push({types:s,content:y[0]});for(var g=1;g<f;g++)d(o),i.push(o=[]),o.push({types:s,content:y[g]})}else c++,t.push(s),n.push(u),a.push(0),l.push(u.length)}c--,t.pop(),n.pop(),a.pop(),l.pop()}return d(o),i},E=function(e,t){var n=e.plain,a=Object.create(null),l=e.styles.reduce((function(e,n){var a=n.languages,l=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=s({},e[t],l);e[t]=n})),e}),a);return l.root=n,l.plain=s({},n,{backgroundColor:null}),l};function y(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var f=function(e){function t(){var t=this,n=[],a=arguments.length;while(a--)n[a]=arguments[a];e.apply(this,n),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?E(e.theme,e.language):void 0;return t.themeDict=n})),u(this,"getLineProps",(function(e){var n=e.key,a=e.className,l=e.style,r=y(e,["key","className","style","line"]),c=r,o=s({},c,{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(o.style=i.plain),void 0!==l&&(o.style=void 0!==o.style?s({},o.style,l):l),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),u(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,l=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===l&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===l&&!a)return r[n[0]];var c=a?{display:"inline-block"}:{},o=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[c].concat(o))}})),u(this,"getTokenProps",(function(e){var n=e.key,a=e.className,l=e.style,r=e.token,c=y(e,["key","className","style","token"]),o=c,i=s({},o,{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==l&&(i.style=void 0!==i.style?s({},i.style,l):l),void 0!==n&&(i.key=n),a&&(i.className+=" "+a),i})),u(this,"tokenize",(function(e,t,n,a){var l={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",l);var r=l.tokens=e.tokenize(l.code,l.grammar,l.language);return e.hooks.run("after-tokenize",l),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,l=e.children,r=this.getThemeDict(this.props),c=t.languages[n],o=void 0!==c?this.tokenize(t,a,c,n):[a],i=h(o);return l({tokens:i,className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a["Component"]),g=f,k=n("dEAq");n("qHiR"),n("rVZW");function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b.apply(this,arguments)}function v(e,t){return O(e)||L(e,t)||N(e,t)||x()}function x(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function N(e,t){if(e){if("string"===typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function L(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(i){o=!0,l=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw l}}return r}}function O(e){if(Array.isArray(e))return e}var j={acss:"css",axml:"xml"};t["a"]=function(e){var t=e.code,n=e.lang,a=e.showCopy,r=void 0===a||a,c=Object(k["useCopy"])(),o=v(c,2),u=o[0],s=o[1];return l.a.createElement("div",{className:"__dumi-default-code-block"},l.a.createElement(g,b({},i,{code:t,language:j[n]||n,theme:void 0}),(function(e){var n=e.className,a=e.style,c=e.tokens,o=e.getLineProps,i=e.getTokenProps;return l.a.createElement("pre",{className:n,style:a},r&&l.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":s,onClick:function(){return u(t)}}),c.map((function(e,t){return l.a.createElement("div",o({line:e,key:t}),e.map((function(e,t){return l.a.createElement("span",i({token:e,key:t}))})))})))})))}},TqRt:function(e,t){function n(e){return e&&e.__esModule?e:{default:e}}e.exports=n,e.exports.__esModule=!0,e.exports["default"]=e.exports},hR37:function(e,t,n){"use strict";n.r(t);var a=n("x+uP"),l=n("HaE+"),r=n("q1tI"),c=n.n(r),o=n("LtsZ"),i=n("dEAq"),u=n("6T1g"),s=c.a.memo((e=>{e.demos;var t=Object(o["dynamic"])({loader:function(){var e=Object(l["a"])(Object(a["a"])().mark((function e(){var t,l,r,c;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n("TqRt")["default"],e.t0=t,e.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return e.t1=e.sent,l=(0,e.t0)(e.t1),e.t2=t,e.next=9,n.e(131).then(n.t.bind(null,"7Xf1",7));case 9:return e.t3=e.sent,r=(0,e.t2)(e.t3),c=function(){return l["default"].createElement("img",{alt:"\u5bb9\u5668\u72b6\u6001\u6d41\u8f6c\u56fe",src:r["default"],width:"900"})},e.abrupt("return",c);case 13:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null});return c.a.createElement(c.a.Fragment,null,c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"markdown"},c.a.createElement("h1",{id:"\u64cd\u4f5c\u5bb9\u5668"},c.a.createElement(i["AnchorLink"],{to:"#\u64cd\u4f5c\u5bb9\u5668","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u64cd\u4f5c\u5bb9\u5668"),c.a.createElement("p",null,"\u7b80\u5355\u7684\u8bf4\uff0c\u5bb9\u5668\u662f\u72ec\u7acb\u8fd0\u884c\u7684\u4e00\u4e2a\u6216\u4e00\u7ec4\u5e94\u7528\uff0c\u4ee5\u53ca\u5b83\u4eec\u7684\u8fd0\u884c\u6001\u73af\u5883\u3002\u5bf9\u5e94\u7684\uff0c\u865a\u62df\u673a\u53ef\u4ee5\u7406\u89e3\u4e3a\u6a21\u62df\u8fd0\u884c\u7684\u4e00\u6574\u5957\u64cd\u4f5c\u7cfb\u7edf\uff08\u63d0\u4f9b\u4e86\u8fd0\u884c\u6001\u73af\u5883\u548c\u5176\u4ed6\u7cfb\u7edf\u73af\u5883\uff09\u548c\u8dd1\u5728\u4e0a\u9762\u7684\u5e94\u7528\u3002"),c.a.createElement("h2",{id:"\u751f\u547d\u5468\u671f"},c.a.createElement(i["AnchorLink"],{to:"#\u751f\u547d\u5468\u671f","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u751f\u547d\u5468\u671f"),c.a.createElement("p",null,"\u8fd9\u662f\u4e00\u5f20\u5bb9\u5668\u8fd0\u884c\u7684\u72b6\u6001\u6d41\u8f6c\u56fe\uff1a")),c.a.createElement(t,null),c.a.createElement("div",{className:"markdown"},c.a.createElement("p",null,"\u56fe\u4e2d\u5c55\u793a\u4e86\u51e0\u79cd\u5e38\u89c1\u5bf9 Docker \u5bb9\u5668\u7684\u64cd\u4f5c\u547d\u4ee4\uff0c\u4ee5\u53ca\u6267\u884c\u5b83\u4eec\u4e4b\u540e\u5bb9\u5668\u8fd0\u884c\u72b6\u6001\u7684\u53d8\u5316\u3002\u8fd9\u91cc\u6211\u4eec\u6487\u5f00\u547d\u4ee4\uff0c\u7740\u91cd\u770b\u770b\u5bb9\u5668\u7684\u51e0\u4e2a\u6838\u5fc3\u72b6\u6001\uff0c\u4e5f\u5c31\u662f\u56fe\u4e2d\u8272\u5757\u8868\u793a\u7684\uff1a",c.a.createElement("strong",null,"Created"),"\u3001",c.a.createElement("strong",null,"Running"),"\u3001",c.a.createElement("strong",null,"Paused"),"\u3001",c.a.createElement("strong",null,"Stopped"),"\u3001",c.a.createElement("strong",null,"Deleted"),"\u3002"),c.a.createElement("h2",{id:"\u542f\u52a8\u5bb9\u5668"},c.a.createElement(i["AnchorLink"],{to:"#\u542f\u52a8\u5bb9\u5668","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u542f\u52a8\u5bb9\u5668"),c.a.createElement("p",null,"\u542f\u52a8\u5bb9\u5668\u65b9\u5f0f\u6709\u4e24\u79cd\uff0c\u4e00\u79cd\u662f\u57fa\u4e8e\u955c\u50cf\u65b0\u5efa\u5bb9\u5668\u5e76\u542f\u52a8\uff0c\u53e6\u4e00\u79cd\u662f\u5c06\u5728\u7ec8\u6b62\u72b6\u6001\uff08",c.a.createElement("code",null,"stopped"),"\uff09\u7684\u5bb9\u5668\u91cd\u65b0\u542f\u52a8\u3002"),c.a.createElement(u["a"],{code:"# \u542f\u52a8\u4e00\u4e2a\u5bb9\u5668\u5e76\u5728\u540e\u53f0\u8fd0\u884c\n$ docker run -it <image-name> <command> # \u683c\u5f0f\n$ docker run -it centos /bin/bash # \u793a\u4f8b\n\n# \u6309\u4f4f Ctrl + P + Q \u9000\u51fa\u5bb9\u5668\n\n# \u67e5\u770b\u5bb9\u5668\u72b6\u6001\n$ docker ps",lang:"bash"}),c.a.createElement("p",null,"\u5e38\u89c1\u7684\u542f\u52a8\u53c2\u6570\uff1a"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("code",null,"-p"),"\uff1a\u5411\u5bbf\u4e3b\u673a\u66b4\u9732\u7aef\u53e3\uff0c\u683c\u5f0f ",c.a.createElement("code",null,"\u5bbf\u4e3b\u673a\u7aef\u53e3:\u5bb9\u5668\u7aef\u53e3")),c.a.createElement("li",null,c.a.createElement("code",null,"-P"),"\uff1a\u5c06\u5bb9\u5668\u7aef\u53e3\u6620\u5c04\u4e3a\u5bbf\u4e3b\u673a\u7684\u968f\u673a\u7aef\u53e3"),c.a.createElement("li",null,c.a.createElement("code",null,"-t"),"\uff1a\u8ba9 Docker \u5206\u914d\u4e00\u4e2a\u4f2a\u7ec8\u7aef\uff08pseudo-tty\uff09\u5e76\u7ed1\u5b9a\u5230\u5bb9\u5668\u7684\u6807\u51c6\u8f93\u5165\u4e0a"),c.a.createElement("li",null,c.a.createElement("code",null,"-i"),"\uff1a\u8ba9\u5bb9\u5668\u7684\u6807\u51c6\u8f93\u5165\u4fdd\u6301\u6253\u5f00"),c.a.createElement("li",null,c.a.createElement("code",null,"-v"),"\uff1a\u6620\u5c04\u6570\u636e\u5377\uff0c\u4f8b\u5982 ",c.a.createElement("code",null,"/home/project:/usr/src"),"\uff0c\u5bbf\u4e3b\u673a ",c.a.createElement("code",null,"/home/project")," \u6620\u5c04\u5bb9\u5668 ",c.a.createElement("code",null,"/usr/src")),c.a.createElement("li",null,c.a.createElement("code",null,"-d"),"\uff1a\u5c06\u5bb9\u5668\u653e\u5728\u540e\u53f0\u8fd0\u884c"),c.a.createElement("li",null,c.a.createElement("code",null,"--rm"),"\uff1a\u5bb9\u5668\u63a8\u51fa\u540e\u6e05\u9664\u8d44\u6e90"),c.a.createElement("li",null,c.a.createElement("code",null,"--privileged"),"\uff1a\u6700\u9ad8\u6743\u9650")),c.a.createElement("p",null,"\u5f53\u5229\u7528 ",c.a.createElement("code",null,"docker run")," \u6765\u521b\u5efa\u5bb9\u5668\u65f6\uff0cDocker \u5728\u540e\u53f0\u8fd0\u884c\u7684\u6807\u51c6\u64cd\u4f5c\u5305\u62ec\uff1a"),c.a.createElement("ol",null,c.a.createElement("li",null,"\u68c0\u67e5\u672c\u5730\u662f\u5426\u5b58\u5728\u5236\u5b9a\u7684\u955c\u50cf\uff0c\u4e0d\u5b58\u5728\u5c31\u4ece\u516c\u6709\u4ed3\u5e93\u4e0b\u8f7d"),c.a.createElement("li",null,"\u5229\u7528\u672c\u5730\u955c\u50cf\u521b\u5efa\u5e76\u542f\u52a8\u4e00\u4e2a\u5bb9\u5668"),c.a.createElement("li",null,"\u5206\u914d\u4e00\u4e2a\u6587\u4ef6\u7cfb\u7edf\uff0c\u5e76\u5728\u53ea\u8bfb\u7684\u955c\u50cf\u5c42\u5916\u9762\u6302\u8f7d\u4e00\u5c42\u53ef\u8bfb\u5199\u5c42"),c.a.createElement("li",null,"\u4ece\u5bbf\u4e3b\u673a\u914d\u7f6e\u7684\u7f51\u6865\u63a5\u53e3\u6865\u63a5\u4e00\u4e2a\u865a\u62df\u63a5\u53e3\u5230\u5bb9\u5668\u4e2d\u53bb"),c.a.createElement("li",null,"\u4ece\u5730\u5740\u6c60\u914d\u7f6e\u4e00\u4e2a IP \u5730\u5740\u7ed9\u5bb9\u5668"),c.a.createElement("li",null,"\u6267\u884c\u7528\u6237\u7684\u6307\u5b9a\u7684\u7528\u6237\u7a0b\u5e8f"),c.a.createElement("li",null,"\u6267\u884c\u5b8c\u6bd5\u540e\u5bb9\u5668\u88ab\u7ec8\u6b62")),c.a.createElement("p",null,c.a.createElement("strong",null,"\u91cd\u65b0\u542f\u52a8")),c.a.createElement(u["a"],{code:"# \u5904\u4e8e\u7ec8\u6b62\u72b6\u6001\u7684\u5bb9\u5668\u91cd\u65b0\u542f\u52a8\n$ docker restart <container-name>",lang:"bash"}),c.a.createElement("h2",{id:"\u540e\u53f0\u8fd0\u884c"},c.a.createElement(i["AnchorLink"],{to:"#\u540e\u53f0\u8fd0\u884c","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u540e\u53f0\u8fd0\u884c"),c.a.createElement("p",null,"\u66f4\u591a\u65f6\u5019\uff0c\u9700\u8981\u8ba9 Docker \u5728\u540e\u53f0\u8fd0\u884c\u800c\u4e0d\u662f\u76f4\u63a5\u628a\u6267\u884c\u547d\u4ee4\u7684\u7ed3\u679c\u8f93\u51fa\u5728\u5f53\u524d\u5bbf\u4e3b\u673a\u4e0b\u3002"),c.a.createElement("p",null,"\u8fd9\u65f6\u5019\u53ef\u4ee5\u6dfb\u52a0 ",c.a.createElement("code",null,"-d")," \u53c2\u6570\u6765\u5b9e\u73b0\u3002"),c.a.createElement(u["a"],{code:'# \u683c\u5f0f\n$ docker run -d <image-name> <command>\n\n# \u793a\u4f8b\n$ docker run -d ubuntu:18.04 /bin/sh -c "Hello world!"',lang:"bash"}),c.a.createElement("p",null,"\u5bb9\u5668\u662f\u5426\u4f1a\u6301\u7eed\u8fd0\u884c\uff0c\u662f\u548c ",c.a.createElement("code",null,"docker run")," \u6307\u5b9a\u7684\u547d\u4ee4\u76f8\u5173\uff0c\u548c ",c.a.createElement("code",null,"-d")," \u53c2\u6570\u65e0\u5173\u3002"),c.a.createElement("h2",{id:"\u7ec8\u6b62\u5bb9\u5668"},c.a.createElement(i["AnchorLink"],{to:"#\u7ec8\u6b62\u5bb9\u5668","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u7ec8\u6b62\u5bb9\u5668"),c.a.createElement(u["a"],{code:"# \u7ec8\u6b62\u5bb9\u5668\n$ docker stop <container-name>\n\n# \u76f8\u540c\u6548\u679c\n$ docker container stop <container-name>",lang:"bash"}),c.a.createElement("p",null,"\u5904\u4e8e\u7ec8\u6b62\u72b6\u6001\u7684\u5bb9\u5668\uff0c\u53ef\u4ee5\u901a\u8fc7 ",c.a.createElement("code",null,"docker start <container-name>")," \u547d\u4ee4\u6765\u91cd\u65b0\u542f\u52a8\u3002"),c.a.createElement("p",null,"\u6b64\u5916\uff0c",c.a.createElement("code",null,"docker restart")," \u547d\u4ee4\u4f1a\u5c06\u4e00\u4e2a\u8fd0\u884c\u6001\u7684\u5bb9\u5668\u7ec8\u6b62\uff0c\u7136\u540e\u518d\u91cd\u65b0\u542f\u52a8\u5b83\u3002"),c.a.createElement("h2",{id:"\u8fdb\u5165\u5bb9\u5668"},c.a.createElement(i["AnchorLink"],{to:"#\u8fdb\u5165\u5bb9\u5668","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u8fdb\u5165\u5bb9\u5668"),c.a.createElement("h3",{id:"exec-\u547d\u4ee4"},c.a.createElement(i["AnchorLink"],{to:"#exec-\u547d\u4ee4","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"exec \u547d\u4ee4"),c.a.createElement(u["a"],{code:"# \u8fdb\u5165\u5bb9\u5668\u5185\u90e8\n# <container-name> \u4e3a\u5bb9\u5668 ID \u6216\u8005\u540d\u79f0\ndocker exec -it <container-name> /bin/bash",lang:"bash"}),c.a.createElement("p",null,"\u539f\u7406\u5b9e\u9645\u4e0a\u662f\u542f\u52a8\u4e86\u5bb9\u5668\u5185\u7684 ",c.a.createElement("code",null,"/bin/bash"),"\uff0c\u6b64\u65f6\u4f60\u5c31\u53ef\u4ee5\u901a\u8fc7 ",c.a.createElement("code",null,"bash shell")," \u4e0e\u5bb9\u5668\u5185\u4ea4\u4e92\u4e86\u3002\u5c31\u50cf\u8fdc\u7a0b\u8fde\u63a5\u4e86 SSH \u4e00\u6837\u3002"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("code",null,"-i"),"\uff1a\u53ea\u6709\u8be5\u53c2\u6570\u65f6\uff0c\u7531\u4e8e\u6ca1\u6709\u5206\u914d\u4f2a\u7ec8\u7aef\uff0c\u754c\u9762\u6ca1\u6709\u6211\u4eec\u719f\u6089\u7684 Linux \u547d\u4ee4\u63d0\u793a\u7b26\uff0c\u4f46\u547d\u4ee4\u6267\u884c\u7ed3\u679c\u4ecd\u7136\u53ef\u4ee5\u8fd4\u56de"),c.a.createElement("li",null,c.a.createElement("code",null,"-it"),"\uff1a\u5f53\u5408\u5e76\u4f7f\u7528\u65f6\uff0c\u5219\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u719f\u6089\u7684 Linux \u547d\u4ee4\u63d0\u793a\u7b26")),c.a.createElement("p",null,"\u5982\u679c\u4ece\u8fd9\u4e2a stdin \u4e2d exit\uff0c\u4e0d\u4f1a\u5bfc\u81f4\u5bb9\u5668\u7684\u505c\u6b62\u3002"),c.a.createElement("p",null,"\u2705 \u63a8\u8350\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\u8fdb\u5165\u5bb9\u5668\u5185\u90e8"),c.a.createElement("h3",{id:"attach-\u547d\u4ee4"},c.a.createElement(i["AnchorLink"],{to:"#attach-\u547d\u4ee4","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"attach \u547d\u4ee4"),c.a.createElement(u["a"],{code:"# \u542f\u52a8\u5bb9\u5668\n$ docker run -dit bunt\n\n# \u67e5\u770b\u5bb9\u5668\u5217\u8868\n$ docker ps\n\n# \u8fde\u63a5\u5bb9\u5668\n$ docker attach <container-name>",lang:"bash"}),c.a.createElement("p",null,"\u5982\u679c\u4ece\u8fd9\u4e2a stdin \u4e2d exit\uff0c\u4f1a\u5bfc\u81f4\u5bb9\u5668\u7684\u505c\u6b62\u3002"),c.a.createElement("h2",{id:"\u5bfc\u51fa\u548c\u5bfc\u5165\u5bb9\u5668"},c.a.createElement(i["AnchorLink"],{to:"#\u5bfc\u51fa\u548c\u5bfc\u5165\u5bb9\u5668","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u5bfc\u51fa\u548c\u5bfc\u5165\u5bb9\u5668"),c.a.createElement("h3",{id:"\u5bfc\u51fa\u5bb9\u5668"},c.a.createElement(i["AnchorLink"],{to:"#\u5bfc\u51fa\u5bb9\u5668","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u5bfc\u51fa\u5bb9\u5668"),c.a.createElement(u["a"],{code:"# \u67e5\u770b\u5168\u90e8\u5bb9\u5668\u5217\u8868\n$ docker ps -a\n\n# \u5bfc\u51fa\u5bb9\u5668\n$ docker export  <container-name> > <file-name>.<file-suffix>",lang:"bash"}),c.a.createElement("h3",{id:"\u5bfc\u5165\u5bb9\u5668"},c.a.createElement(i["AnchorLink"],{to:"#\u5bfc\u5165\u5bb9\u5668","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u5bfc\u5165\u5bb9\u5668"),c.a.createElement("p",null,"\u4ece\u5bb9\u5668\u5feb\u7167\u6587\u4ef6\u4e2d\u5bfc\u5165\u955c\u50cf\u3002"),c.a.createElement(u["a"],{code:"# \u5bfc\u5165\u5bb9\u5668\n$ cat <import-file-name> | docker import - <image-name> # \u683c\u5f0f\n$ cat ubuntu.tar | docker import - test/ubuntu:v1.0 # \u793a\u4f8b\n\n# \u67e5\u770b\u955c\u50cf\u5217\u8868\n$ docker images",lang:"bash"}),c.a.createElement("p",null,"\u6b64\u5916\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a URL \u6216\u67d0\u4e2a\u76ee\u5f55\u6765\u5bfc\u5165\uff1a"),c.a.createElement(u["a"],{code:"# \u683c\u5f0f\n$ docker import <url>\n\n# \u793a\u4f8b\n$ docker import http://example.com/exampleimage.tgz example/imagerepo",lang:"bash"}),c.a.createElement("p",null,"\u26a0\ufe0f \u6ce8\u610f\uff1a\u7528\u6237\u65e2\u53ef\u4ee5\u4f7f\u7528 ",c.a.createElement("code",null,"docker load")," \u6765\u5bfc\u5165\u955c\u50cf\u5b58\u50a8\u6587\u4ef6\u5230\u672c\u5730\u955c\u50cf\u5e93\uff0c\u4e5f\u53ef\u4ee5\u662f\u54df\u529f\u80fd ",c.a.createElement("code",null,"docker import")," \u6765\u5bfc\u5165\u4e00\u4e2a\u5bb9\u5668\u5feb\u7167\u5230\u672c\u5730\u955c\u50cf\u5e93\u3002\u8fd9\u4e24\u8005\u7684\u533a\u522b\u5728\u4e8e\u5bb9\u5668\u5feb\u7167\u6587\u4ef6\u5c06\u4e22\u5f03\u6240\u6709\u7684\u5386\u53f2\u8bb0\u5f55\u548c\u5143\u6570\u636e\u4fe1\u606f\uff08\u5373\u4ec5\u4fdd\u5b58\u5bb9\u5668\u5f53\u65f6\u7684\u5feb\u7167\u72b6\u6001\uff09\uff0c\u800c\u955c\u50cf\u5b58\u50a8\u6587\u4ef6\u5c06\u4fdd\u5b58\u5b8c\u6574\u8bb0\u5f55\uff0c\u4f53\u79ef\u4e5f\u8981\u5927\u3002\u6b64\u5916\uff0c\u4ece\u5bb9\u5668\u5feb\u7167\u6587\u4ef6\u5bfc\u5165\u53ef\u4ee5\u91cd\u65b0\u6307\u5b9a\u6807\u7b7e\u7b49\u5143\u6570\u636e\u4fe1\u606f\u3002"),c.a.createElement("h2",{id:"\u5220\u9664\u5bb9\u5668"},c.a.createElement(i["AnchorLink"],{to:"#\u5220\u9664\u5bb9\u5668","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u5220\u9664\u5bb9\u5668"),c.a.createElement(u["a"],{code:"# \u5220\u9664\u5904\u4e8e\u7ec8\u6b62\u72b6\u6001\u7684\u5bb9\u5668\n$ docker rm <container-name>\n\n# \u5220\u9664\u8fd0\u884c\u72b6\u6001\u7684\u5bb9\u5668\n$ docker rm -f <container-name>",lang:"bash"}),c.a.createElement("p",null,"\u6e05\u7406\u6240\u6709\u5904\u4e8e\u7ec8\u6b62\u72b6\u6001\u7684\u5bb9\u5668"),c.a.createElement("p",null,"\u7528 ",c.a.createElement("code",null,"docker ps -a")," \u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u6240\u6709\u5df2\u7ecf\u521b\u5efa\u7684\u5305\u62ec\u7ec8\u6b62\u72b6\u6001\u7684\u5bb9\u5668\uff0c\u5982\u679c\u6570\u91cf\u592a\u591a\u8981\u9010\u4e2a\u5220\u9664\u4f1a\u5f88\u9ebb\u70e6\uff0c\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u53ef\u4ee5\u6e05\u7406\u6389\u6240\u6709\u5904\u4e8e\u7ec8\u6b62\u72b6\u6001\u7684\u5bb9\u5668\u3002"),c.a.createElement(u["a"],{code:"$ docker container prune",lang:"bash"}))))}));t["default"]=e=>{var t=c.a.useContext(i["context"]),n=t.demos;return c.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&i["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),c.a.createElement(s,{demos:n})}},qHiR:function(e,t,n){},rVZW:function(e,t,n){}}]);