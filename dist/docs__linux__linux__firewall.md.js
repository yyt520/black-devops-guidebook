(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[89],{"6T1g":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("SVOR"),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i=o,c={Prism:l["a"],theme:i};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}var p=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e){var t=[[]],n=[e],a=[0],r=[e.length],l=0,o=0,i=[],c=[i];while(o>-1){while((l=a[o]++)<r[o]){var s=void 0,u=t[o],y=n[o],f=y[l];if("string"===typeof f?(u=o>0?u:["plain"],s=f):(u=d(u,f.type),f.alias&&(u=d(u,f.alias)),s=f.content),"string"===typeof s){var h=s.split(p),g=h.length;i.push({types:u,content:h[0]});for(var v=1;v<g;v++)m(i),c.push(i=[]),i.push({types:u,content:h[v]})}else o++,t.push(u),n.push(s),a.push(0),r.push(s.length)}o--,t.pop(),n.pop(),a.pop(),r.pop()}return m(i),c},f=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=u({},n,{backgroundColor:null}),r};function h(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var g=function(e){function t(){var t=this,n=[],a=arguments.length;while(a--)n[a]=arguments[a];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?f(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,l=h(e,["key","className","style","line"]),o=l,i=u({},o,{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(i.style=c.plain),void 0!==r&&(i.style=void 0!==i.style?u({},i.style,r):r),void 0!==n&&(i.key=n),a&&(i.className+=" "+a),i})),s(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return l[n[0]];var o=a?{display:"inline-block"}:{},i=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(i))}})),s(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,l=e.token,o=h(e,["key","className","style","token"]),i=o,c=u({},i,{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?u({},c.style,r):r),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c})),s(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[n],i=void 0!==o?this.tokenize(t,a,o,n):[a],c=y(i);return r({tokens:c,className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a["Component"]),v=g,b=n("dEAq");n("qHiR"),n("rVZW");function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},k.apply(this,arguments)}function E(e,t){return L(e)||j(e,t)||O(e,t)||w()}function w(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function O(e,t){if(e){if("string"===typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function j(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(l.push(a.value),t&&l.length===t)break}catch(c){i=!0,r=c}finally{try{o||null==n["return"]||n["return"]()}finally{if(i)throw r}}return l}}function L(e){if(Array.isArray(e))return e}var T={acss:"css",axml:"xml"};t["a"]=function(e){var t=e.code,n=e.lang,a=e.showCopy,l=void 0===a||a,o=Object(b["useCopy"])(),i=E(o,2),s=i[0],u=i[1];return r.a.createElement("div",{className:"__dumi-default-code-block"},r.a.createElement(v,k({},c,{code:t,language:T[n]||n,theme:void 0}),(function(e){var n=e.className,a=e.style,o=e.tokens,i=e.getLineProps,c=e.getTokenProps;return r.a.createElement("pre",{className:n,style:a},l&&r.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":u,onClick:function(){return s(t)}}),o.map((function(e,t){return r.a.createElement("div",i({line:e,key:t}),e.map((function(e,t){return r.a.createElement("span",c({token:e,key:t}))})))})))})))}},"DtJ/":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("dEAq"),o=n("6T1g"),i=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u9632\u706b\u5899"},r.a.createElement(l["AnchorLink"],{to:"#\u9632\u706b\u5899","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u9632\u706b\u5899"),r.a.createElement("h2",{id:"\u6dfb\u52a0\u7aef\u53e3\u5230\u9632\u706b\u5899"},r.a.createElement(l["AnchorLink"],{to:"#\u6dfb\u52a0\u7aef\u53e3\u5230\u9632\u706b\u5899","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u6dfb\u52a0\u7aef\u53e3\u5230\u9632\u706b\u5899"),r.a.createElement(o["a"],{code:"firewall-cmd --zone=public --add-port=\u4f60\u7684\u7aef\u53e3/tcp permanet\nsystemctl restart firewalld.service",lang:"bash"}),r.a.createElement("h3",{id:"\u57fa\u672c\u64cd\u4f5c"},r.a.createElement(l["AnchorLink"],{to:"#\u57fa\u672c\u64cd\u4f5c","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u64cd\u4f5c"),r.a.createElement("p",null,"3.\u914d\u7f6e firewalld-cmd"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u67e5\u770b\u7248\u672c\uff1a firewall-cmd --version"),r.a.createElement("li",null,"\u67e5\u770b\u5e2e\u52a9\uff1a firewall-cmd --help"),r.a.createElement("li",null,"\u663e\u793a\u72b6\u6001\uff1a firewall-cmd --state"),r.a.createElement("li",null,"\u67e5\u770b\u6240\u6709\u6253\u5f00\u7684\u7aef\u53e3\uff1a firewall-cmd --zone=public --list-ports"),r.a.createElement("li",null,"\u66f4\u65b0\u9632\u706b\u5899\u89c4\u5219\uff1a firewall-cmd --reload"),r.a.createElement("li",null,"\u67e5\u770b\u533a\u57df\u4fe1\u606f: firewall-cmd --get-active-zones"),r.a.createElement("li",null,"\u67e5\u770b\u6307\u5b9a\u63a5\u53e3\u6240\u5c5e\u533a\u57df\uff1a firewall-cmd --get-zone-of-interface=eth0"),r.a.createElement("li",null,"\u62d2\u7edd\u6240\u6709\u5305\uff1afirewall-cmd --panic-on"),r.a.createElement("li",null,"\u53d6\u6d88\u62d2\u7edd\u72b6\u6001\uff1a firewall-cmd --panic-off"),r.a.createElement("li",null,"\u67e5\u770b\u662f\u5426\u62d2\u7edd\uff1a firewall-cmd --query-panic")),r.a.createElement("p",null,"\u5f00\u542f\u7aef\u53e3"),r.a.createElement(o["a"],{code:"# \u6dfb\u52a0\nfirewall-cmd --zone=public --add-port=80/tcp --permanent \uff08--permanent \u6c38\u4e45\u751f\u6548\uff0c\u6ca1\u6709\u6b64\u53c2\u6570\u91cd\u542f\u540e\u5931\u6548\uff09\n\n# \u91cd\u65b0\u8f7d\u5165\nfirewall-cmd --reload\n\n# \u67e5\u770b\nfirewall-cmd --zone= public --query-port=80/tcp\n\n# \u5220\u9664\nfirewall-cmd --zone= public --remove-port=80/tcp --permanent",lang:"bash"}),r.a.createElement("h2",{id:"\u8bbe\u7f6e\u7aef\u53e3"},r.a.createElement(l["AnchorLink"],{to:"#\u8bbe\u7f6e\u7aef\u53e3","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u8bbe\u7f6e\u7aef\u53e3"),r.a.createElement("p",null,"Ali \u963f\u91cc\u4e91\u6709\u9632\u706b\u5899"),r.a.createElement("p",null,"\u5f00\u653e\u65b0\u7aef\u53e3"),r.a.createElement("ol",null,r.a.createElement("li",null,"\u5b9e\u4f8b\u5b89\u5168\u7ec4\u6dfb\u52a0\u7aef\u53e3"),r.a.createElement("li",null,"\u670d\u52a1\u5668\u6dfb\u52a0\u65b0\u7aef\u53e3\u5230\u9632\u706b\u5899\u914d\u7f6e\u4e2d")),r.a.createElement(o["a"],{code:"# \u5bf9\u5916\u5f00\u653e\u7aef\u53e3\nfirewall-cmd --permanent --add-port=8080-8085/tcp\n\n# \u91cd\u8f7d\u7aef\u53e3\nfirewall-cmd --reload\n\n# \u5220\u9664\u7aef\u53e3\nfirewall-cmd --permanent --remove-port=8080-8085/tcp\n\n# \u67e5\u770b\u9632\u706b\u5899\u5f00\u653e\u7aef\u53e3\nfirewall-cmd --permanent --list-ports\n\n# \u67e5\u770b\u4f7f\u7528\u4e92\u8054\u7f51\u7684\u670d\u52a1\nfirewall-cmd --permanent --list-services",lang:"bash"}),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("strong",null,"\u53c2\u8003\u8d44\u6599\uff1a")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l["Link"],{to:"http://www.zsythink.net/archives/1199/"},"iptables \u8be6\u89e3")),r.a.createElement("li",null,r.a.createElement(l["Link"],{to:"https://blog.csdn.net/chenshiai/article/details/53639167"},"Linux (centos7) \u9632\u706b\u5899\u547d\u4ee4")))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(i,{demos:n})}},qHiR:function(e,t,n){},rVZW:function(e,t,n){}}]);