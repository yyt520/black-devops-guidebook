(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[110],{"6T1g":function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a),o=t("SVOR"),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i=l,c={Prism:o["a"],theme:i};function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(){return u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},u.apply(this,arguments)}var p=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,n){var t=e.length;return t>0&&e[t-1]===n?e:e.concat(n)},g=function(e){var n=[[]],t=[e],a=[0],r=[e.length],o=0,l=0,i=[],c=[i];while(l>-1){while((o=a[l]++)<r[l]){var s=void 0,u=n[l],g=t[l],y=g[o];if("string"===typeof y?(u=l>0?u:["plain"],s=y):(u=d(u,y.type),y.alias&&(u=d(u,y.alias)),s=y.content),"string"===typeof s){var h=s.split(p),f=h.length;i.push({types:u,content:h[0]});for(var v=1;v<f;v++)m(i),c.push(i=[]),i.push({types:u,content:h[v]})}else l++,n.push(u),t.push(s),a.push(0),r.push(s.length)}l--,n.pop(),t.pop(),a.pop(),r.pop()}return m(i),c},y=function(e,n){var t=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,t){var a=t.languages,r=t.style;return a&&!a.includes(n)||t.types.forEach((function(n){var t=u({},e[n],r);e[n]=t})),e}),a);return r.root=t,r.plain=u({},t,{backgroundColor:null}),r};function h(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}var f=function(e){function n(){var n=this,t=[],a=arguments.length;while(a--)t[a]=arguments[a];e.apply(this,t),s(this,"getThemeDict",(function(e){if(void 0!==n.themeDict&&e.theme===n.prevTheme&&e.language===n.prevLanguage)return n.themeDict;n.prevTheme=e.theme,n.prevLanguage=e.language;var t=e.theme?y(e.theme,e.language):void 0;return n.themeDict=t})),s(this,"getLineProps",(function(e){var t=e.key,a=e.className,r=e.style,o=h(e,["key","className","style","line"]),l=o,i=u({},l,{className:"token-line",style:void 0,key:void 0}),c=n.getThemeDict(n.props);return void 0!==c&&(i.style=c.plain),void 0!==r&&(i.style=void 0!==i.style?u({},i.style,r):r),void 0!==t&&(i.key=t),a&&(i.className+=" "+a),i})),s(this,"getStyleForToken",(function(e){var t=e.types,a=e.empty,r=t.length,o=n.getThemeDict(n.props);if(void 0!==o){if(1===r&&"plain"===t[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[t[0]];var l=a?{display:"inline-block"}:{},i=t.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),s(this,"getTokenProps",(function(e){var t=e.key,a=e.className,r=e.style,o=e.token,l=h(e,["key","className","style","token"]),i=l,c=u({},i,{className:"token "+o.types.join(" "),children:o.content,style:n.getStyleForToken(o),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?u({},c.style,r):r),void 0!==t&&(c.key=t),a&&(c.className+=" "+a),c})),s(this,"tokenize",(function(e,n,t,a){var r={code:n,grammar:t,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n,n.prototype.render=function(){var e=this.props,n=e.Prism,t=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=n.languages[t],i=void 0!==l?this.tokenize(n,a,l,t):[a],c=g(i);return r({tokens:c,className:"prism-code language-"+t,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},n}(a["Component"]),v=f,k=t("dEAq");t("qHiR"),t("rVZW");function b(){return b=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},b.apply(this,arguments)}function E(e,n){return j(e)||O(e,n)||N(e,n)||x()}function x(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function N(e,n){if(e){if("string"===typeof e)return w(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?w(e,n):void 0}}function w(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function O(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,r,o=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(a=t.next()).done);l=!0)if(o.push(a.value),n&&o.length===n)break}catch(c){i=!0,r=c}finally{try{l||null==t["return"]||t["return"]()}finally{if(i)throw r}}return o}}function j(e){if(Array.isArray(e))return e}var T={acss:"css",axml:"xml"};n["a"]=function(e){var n=e.code,t=e.lang,a=e.showCopy,o=void 0===a||a,l=Object(k["useCopy"])(),i=E(l,2),s=i[0],u=i[1];return r.a.createElement("div",{className:"__dumi-default-code-block"},r.a.createElement(v,b({},c,{code:n,language:T[t]||t,theme:void 0}),(function(e){var t=e.className,a=e.style,l=e.tokens,i=e.getLineProps,c=e.getTokenProps;return r.a.createElement("pre",{className:t,style:a},o&&r.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":u,onClick:function(){return s(n)}}),l.map((function(e,n){return r.a.createElement("div",i({line:e,key:n}),e.map((function(e,n){return r.a.createElement("span",c({token:e,key:n}))})))})))})))}},DClg:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),o=t("dEAq"),l=t("6T1g"),i=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u547d\u4ee4\u884c\u6307\u4ee4"},r.a.createElement(o["AnchorLink"],{to:"#\u547d\u4ee4\u884c\u6307\u4ee4","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u547d\u4ee4\u884c\u6307\u4ee4"),r.a.createElement("h2",{id:"\u5e38\u7528\u547d\u4ee4"},r.a.createElement(o["AnchorLink"],{to:"#\u5e38\u7528\u547d\u4ee4","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5e38\u7528\u547d\u4ee4"),r.a.createElement("p",null,"\u8981\u542f\u52a8 Nginx\uff0c\u8bf7\u8fd0\u884c\u53ef\u6267\u884c\u6587\u4ef6\u3002\u4e00\u65e6\u542f\u52a8 Nginx\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 ",r.a.createElement("code",null,"-s")," \u53c2\u6570\u8c03\u7528\u53ef\u6267\u884c\u6587\u4ef6\u6765\u5bf9\u5176\u8fdb\u884c\u63a7\u5236\u3002"),r.a.createElement("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u8bed\u6cd5\uff1a"),r.a.createElement(l["a"],{code:"nginx -s <signal>",lang:"unknown"}),r.a.createElement("p",null,r.a.createElement("code",null,"-s")," \u7684\u610f\u601d\u662f\u5411\u4e3b\u8fdb\u7a0b\u53d1\u9001\u4fe1\u53f7\uff0c",r.a.createElement("code",null,"signal")," \u53ef\u4ee5\u662f\u4ee5\u4e0b\u4fe1\u53f7\u4e4b\u4e00\uff1a"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"stop"),"\uff1a\u5feb\u901f\u5173\u95ed"),r.a.createElement("li",null,r.a.createElement("code",null,"quit"),"\uff1a\u6b63\u5e38\u5173\u95ed"),r.a.createElement("li",null,r.a.createElement("code",null,"reload"),"\uff1a\u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6"),r.a.createElement("li",null,r.a.createElement("code",null,"reopen"),"\uff1a\u91cd\u65b0\u6253\u5f00\u65e5\u5fd7\u6587\u4ef6")),r.a.createElement(l["a"],{code:"# \u542f\u52a8\nnginx -c /etc/nginx/nginx.conf\n\n# \u53d1\u9001\u4fe1\u53f7\nnginx -s\n\n# \u7acb\u5373\u505c\u6b62\u670d\u52a1\nnginx -s stop\n\n# \u4f18\u96c5\u5730\u505c\u6b62\u670d\u52a1\nnginx -s quit\n\n# \u91cd\u8f7d\u914d\u7f6e\u6587\u4ef6\nnginx -s reload\n\n# \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\nnginx -s reload -c /etc/nginx/nginx.conf\n\n# \u91cd\u65b0\u5f00\u59cb\u8bb0\u5f55\u65e5\u5fd7\u6587\u4ef6\nnginx -s reopen",lang:"bash"}),r.a.createElement("p",null,"\u5f53\u8fd0\u884c ",r.a.createElement("code",null,"nginx -s quit")," \u65f6\uff0cNginx \u4f1a\u7b49\u5f85\u5de5\u4f5c\u8fdb\u7a0b\u5904\u7406\u5b8c\u6210\u5f53\u524d\u8bf7\u6c42\uff0c\u7136\u540e\u5c06\u5176\u5173\u95ed\u3002\u5f53\u4f60\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u540e\uff0c\u5e76\u4e0d\u4f1a\u7acb\u5373\u751f\u6548\uff0c\u800c\u662f\u7b49\u5f85\u91cd\u542f\u6216\u8005\u6536\u5230 ",r.a.createElement("code",null,"nginx -s reload")," \u4fe1\u53f7\u3002"),r.a.createElement("p",null,"\u5f53 Nginx \u6536\u5230 ",r.a.createElement("code",null,"nginx -s reload")," \u4fe1\u53f7\u540e\uff0c\u9996\u5148\u68c0\u67e5\u914d\u7f6e\u6587\u4ef6\u7684\u8bed\u6cd5\u3002\u8bed\u6cd5\u6b63\u786e\u540e\uff0c\u4e3b\u7ebf\u7a0b\u4f1a\u5f00\u542f\u65b0\u7684\u5de5\u4f5c\u7ebf\u7a0b\u5e76\u5411\u65e7\u7684\u5de5\u4f5c\u7ebf\u7a0b\u53d1\u9001\u5173\u95ed\u4fe1\u53f7\uff0c\u5982\u679c\u8bed\u6cd5\u4e0d\u6b63\u786e\uff0c\u5219\u4e3b\u7ebf\u7a0b\u56de\u6eda\u53d8\u5316\u5e76\u7ee7\u7eed\u4f7f\u7528\u65e7\u7684\u914d\u7f6e\u3002\u5f53\u5de5\u4f5c\u8fdb\u7a0b\u6536\u5230\u4e3b\u8fdb\u7a0b\u7684\u5173\u95ed\u4fe1\u53f7\u540e\uff0c\u4f1a\u5728\u5904\u7406\u5b8c\u5f53\u524d\u8bf7\u6c42\u4e4b\u540e\u9000\u51fa\u3002"),r.a.createElement("h2",{id:"\u67e5\u770b\u5b89\u88c5\u76ee\u5f55"},r.a.createElement(o["AnchorLink"],{to:"#\u67e5\u770b\u5b89\u88c5\u76ee\u5f55","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u770b\u5b89\u88c5\u76ee\u5f55"),r.a.createElement("p",null,"\u5217\u51fa\u670d\u52a1\u7684\u5b89\u88c5\u76ee\u5f55\uff1a"),r.a.createElement(l["a"],{code:"rpm -ql nginx",lang:"bash"}),r.a.createElement("h2",{id:"\u7f16\u8bd1\u53c2\u6570"},r.a.createElement(o["AnchorLink"],{to:"#\u7f16\u8bd1\u53c2\u6570","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u7f16\u8bd1\u53c2\u6570"),r.a.createElement("p",null,"\u5217\u51fa\u7f16\u8bd1\u53c2\u6570\u7684\u547d\u4ee4\uff1a"),r.a.createElement(l["a"],{code:"nginx -V\n\n# \u5e6b\u52a9\nnginx -h\n\n# \u4f7f\u7528\u6307\u5b9a\u7684\u914d\u7f6e\u6587\u4ef6\nnginx -c\n\n# \u6307\u5b9a\u914d\u7f6e\u6307\u4ee4\nnginx -g\n\n# \u6307\u5b9a\u8fd0\u884c\u76ee\u5f55\nnginx -p\n\n# \u7248\u672c\u4fe1\u606f\nnginx -v\n\n# \u6d4b\u8bd5\u914d\u7f6e\u6587\u4ef6\u662f\u5426\u6709\u8bed\u6cd5\u9519\u8bef\n# \u540c\u65f6\u663e\u793a\u4e3b\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\nnginx -t\n\n# \u68c0\u67e5\u6307\u5b9a\u7684\u914d\u7f6e\u6587\u4ef6\nnginx -t -c /etc/nginx/nginx.conf\n\n# \u91cd\u542f Nginx \u670d\u52a1\nsystemctl restart nginx.service",lang:"bash"})))}));n["default"]=e=>{var n=r.a.useContext(o["context"]),t=n.demos;return r.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(i,{demos:t})}},qHiR:function(e,n,t){},rVZW:function(e,n,t){}}]);