(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[98],{"6T1g":function(e,n,t){"use strict";var a=t("q1tI"),l=t.n(a),r=t("SVOR"),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i=c,o={Prism:r["a"],theme:i};function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s.apply(this,arguments)}var d=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},h=function(e,n){var t=e.length;return t>0&&e[t-1]===n?e:e.concat(n)},E=function(e){var n=[[]],t=[e],a=[0],l=[e.length],r=0,c=0,i=[],o=[i];while(c>-1){while((r=a[c]++)<l[c]){var m=void 0,s=n[c],E=t[c],p=E[r];if("string"===typeof p?(s=c>0?s:["plain"],m=p):(s=h(s,p.type),p.alias&&(s=h(s,p.alias)),m=p.content),"string"===typeof m){var y=m.split(d),k=y.length;i.push({types:s,content:y[0]});for(var f=1;f<k;f++)u(i),o.push(i=[]),i.push({types:s,content:y[f]})}else c++,n.push(s),t.push(m),a.push(0),l.push(m.length)}c--,n.pop(),t.pop(),a.pop(),l.pop()}return u(i),o},p=function(e,n){var t=e.plain,a=Object.create(null),l=e.styles.reduce((function(e,t){var a=t.languages,l=t.style;return a&&!a.includes(n)||t.types.forEach((function(n){var t=s({},e[n],l);e[n]=t})),e}),a);return l.root=t,l.plain=s({},t,{backgroundColor:null}),l};function y(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}var k=function(e){function n(){var n=this,t=[],a=arguments.length;while(a--)t[a]=arguments[a];e.apply(this,t),m(this,"getThemeDict",(function(e){if(void 0!==n.themeDict&&e.theme===n.prevTheme&&e.language===n.prevLanguage)return n.themeDict;n.prevTheme=e.theme,n.prevLanguage=e.language;var t=e.theme?p(e.theme,e.language):void 0;return n.themeDict=t})),m(this,"getLineProps",(function(e){var t=e.key,a=e.className,l=e.style,r=y(e,["key","className","style","line"]),c=r,i=s({},c,{className:"token-line",style:void 0,key:void 0}),o=n.getThemeDict(n.props);return void 0!==o&&(i.style=o.plain),void 0!==l&&(i.style=void 0!==i.style?s({},i.style,l):l),void 0!==t&&(i.key=t),a&&(i.className+=" "+a),i})),m(this,"getStyleForToken",(function(e){var t=e.types,a=e.empty,l=t.length,r=n.getThemeDict(n.props);if(void 0!==r){if(1===l&&"plain"===t[0])return a?{display:"inline-block"}:void 0;if(1===l&&!a)return r[t[0]];var c=a?{display:"inline-block"}:{},i=t.map((function(e){return r[e]}));return Object.assign.apply(Object,[c].concat(i))}})),m(this,"getTokenProps",(function(e){var t=e.key,a=e.className,l=e.style,r=e.token,c=y(e,["key","className","style","token"]),i=c,o=s({},i,{className:"token "+r.types.join(" "),children:r.content,style:n.getStyleForToken(r),key:void 0});return void 0!==l&&(o.style=void 0!==o.style?s({},o.style,l):l),void 0!==t&&(o.key=t),a&&(o.className+=" "+a),o})),m(this,"tokenize",(function(e,n,t,a){var l={code:n,grammar:t,language:a,tokens:[]};e.hooks.run("before-tokenize",l);var r=l.tokens=e.tokenize(l.code,l.grammar,l.language);return e.hooks.run("after-tokenize",l),r}))}return e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n,n.prototype.render=function(){var e=this.props,n=e.Prism,t=e.language,a=e.code,l=e.children,r=this.getThemeDict(this.props),c=n.languages[t],i=void 0!==c?this.tokenize(n,a,c,t):[a],o=E(i);return l({tokens:o,className:"prism-code language-"+t,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},n}(a["Component"]),f=k,b=t("dEAq");t("qHiR"),t("rVZW");function g(){return g=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},g.apply(this,arguments)}function v(e,n){return I(e)||L(e,n)||N(e,n)||x()}function x(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function N(e,n){if(e){if("string"===typeof e)return A(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?A(e,n):void 0}}function A(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function L(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,l,r=[],c=!0,i=!1;try{for(t=t.call(e);!(c=(a=t.next()).done);c=!0)if(r.push(a.value),n&&r.length===n)break}catch(o){i=!0,l=o}finally{try{c||null==t["return"]||t["return"]()}finally{if(i)throw l}}return r}}function I(e){if(Array.isArray(e))return e}var w={acss:"css",axml:"xml"};n["a"]=function(e){var n=e.code,t=e.lang,a=e.showCopy,r=void 0===a||a,c=Object(b["useCopy"])(),i=v(c,2),m=i[0],s=i[1];return l.a.createElement("div",{className:"__dumi-default-code-block"},l.a.createElement(f,g({},o,{code:n,language:w[t]||t,theme:void 0}),(function(e){var t=e.className,a=e.style,c=e.tokens,i=e.getLineProps,o=e.getTokenProps;return l.a.createElement("pre",{className:t,style:a},r&&l.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":s,onClick:function(){return m(n)}}),c.map((function(e,n){return l.a.createElement("div",i({line:e,key:n}),e.map((function(e,n){return l.a.createElement("span",o({token:e,key:n}))})))})))})))}},ChBL:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),r=t("dEAq"),c=t("6T1g"),i=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u7279\u6b8a\u7b26\u53f7"},l.a.createElement(r["AnchorLink"],{to:"#\u7279\u6b8a\u7b26\u53f7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7279\u6b8a\u7b26\u53f7"),l.a.createElement("h2",{id:"\u4e95\u53f7"},l.a.createElement(r["AnchorLink"],{to:"#\u4e95\u53f7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4e95\u53f7"),l.a.createElement("h2",{id:"\u8d26\u6237-home-\u76ee\u5f55"},l.a.createElement(r["AnchorLink"],{to:"#\u8d26\u6237-home-\u76ee\u5f55","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u8d26\u6237 Home \u76ee\u5f55"),l.a.createElement("h2",{id:"\u5206\u53f7"},l.a.createElement(r["AnchorLink"],{to:"#\u5206\u53f7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5206\u53f7"),l.a.createElement("p",null,"\u5728 Shell \u4e2d\uff0c\u62c5\u4efb ",l.a.createElement("strong",null,"\u8fde\u7eed\u6307\u4ee4")," \u529f\u80fd\u7684\u7b26\u53f7\u5c31\u662f\u5206\u53f7\uff08",l.a.createElement("code",null,";"),"\uff09\u3002"),l.a.createElement(c["a"],{code:"cd ~/backup ; mkdir startup ; cp ~/.* startup/.",lang:"bash"}),l.a.createElement("h2",{id:"\u8fde\u7eed\u5206\u53f7"},l.a.createElement(r["AnchorLink"],{to:"#\u8fde\u7eed\u5206\u53f7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u8fde\u7eed\u5206\u53f7"),l.a.createElement("h2",{id:"\u9017\u53f7"},l.a.createElement(r["AnchorLink"],{to:"#\u9017\u53f7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u9017\u53f7"),l.a.createElement("h2",{id:"\u5355\u5f15\u53f7"},l.a.createElement(r["AnchorLink"],{to:"#\u5355\u5f15\u53f7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5355\u5f15\u53f7"),l.a.createElement("h2",{id:"\u53cc\u5f15\u53f7"},l.a.createElement(r["AnchorLink"],{to:"#\u53cc\u5f15\u53f7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u53cc\u5f15\u53f7"),l.a.createElement("h2",{id:"\u5012\u5f15\u53f7"},l.a.createElement(r["AnchorLink"],{to:"#\u5012\u5f15\u53f7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5012\u5f15\u53f7"),l.a.createElement("h2",{id:"\u9017\u70b9"},l.a.createElement(r["AnchorLink"],{to:"#\u9017\u70b9","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u9017\u70b9"),l.a.createElement("h2",{id:"\u659c\u7ebf"},l.a.createElement(r["AnchorLink"],{to:"#\u659c\u7ebf","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u659c\u7ebf"),l.a.createElement("h2",{id:"\u5012\u659c\u7ebf"},l.a.createElement(r["AnchorLink"],{to:"#\u5012\u659c\u7ebf","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5012\u659c\u7ebf"),l.a.createElement("h2",{id:"\u7ba1\u9053"},l.a.createElement(r["AnchorLink"],{to:"#\u7ba1\u9053","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7ba1\u9053"),l.a.createElement("p",null,"\u7ba1\u9053\u548c\u91cd\u5b9a\u5411"),l.a.createElement("p",null,"\u7ba1\u9053\u4e0e\u7ba1\u9053\u7b26"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7ba1\u9053\u548c\u4fe1\u53f7\u4e00\u6837\uff0c\u4e5f\u662f\u8fdb\u7a0b\u901a\u4fe1\u7684\u65b9\u5f0f\u4e4b\u4e00"),l.a.createElement("li",null,"\u533f\u540d\u7ba1\u9053\uff08\u7ba1\u9053\u7b26\uff09\u662f Shell \u7f16\u7a0b\u7ecf\u5e38\u7528\u5230\u7684\u901a\u4fe1\u5de5\u5177"),l.a.createElement("li",null,"\u7ba1\u9053\u7b26\u662f ",l.a.createElement("code",null,"|"),"\uff0c\u5c06\u524d\u4e00\u4e2a\u547d\u4ee4\u6267\u884c\u7684\u7ed3\u679c\u4f20\u9012\u7ed9\u540e\u9762\u7684\u547d\u4ee4")),l.a.createElement(c["a"],{code:"ps | cat\n\necho 123 | ps",lang:"bash"}),l.a.createElement("h2",{id:"\u60ca\u53f9\u53f7"},l.a.createElement(r["AnchorLink"],{to:"#\u60ca\u53f9\u53f7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u60ca\u53f9\u53f7"),l.a.createElement("h2",{id:"\u5192\u53f7"},l.a.createElement(r["AnchorLink"],{to:"#\u5192\u53f7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5192\u53f7"),l.a.createElement("h2",{id:"\u95ee\u53f7"},l.a.createElement(r["AnchorLink"],{to:"#\u95ee\u53f7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u95ee\u53f7"),l.a.createElement("h2",{id:"\u661f\u53f7"},l.a.createElement(r["AnchorLink"],{to:"#\u661f\u53f7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u661f\u53f7"),l.a.createElement("h2",{id:"\u6b21\u65b9\u8fd0\u7b97"},l.a.createElement(r["AnchorLink"],{to:"#\u6b21\u65b9\u8fd0\u7b97","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6b21\u65b9\u8fd0\u7b97"),l.a.createElement("h2",{id:"\u94b1\u53f7"},l.a.createElement(r["AnchorLink"],{to:"#\u94b1\u53f7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u94b1\u53f7"),l.a.createElement("h2",{id:"\u6307\u4ee4\u7fa4\u7ec4"},l.a.createElement(r["AnchorLink"],{to:"#\u6307\u4ee4\u7fa4\u7ec4","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6307\u4ee4\u7fa4\u7ec4"),l.a.createElement("h2",{id:"\u5927\u62ec\u53f7"},l.a.createElement(r["AnchorLink"],{to:"#\u5927\u62ec\u53f7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5927\u62ec\u53f7"),l.a.createElement("h2",{id:"\u4e2d\u62ec\u53f7"},l.a.createElement(r["AnchorLink"],{to:"#\u4e2d\u62ec\u53f7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4e2d\u62ec\u53f7"),l.a.createElement("h2",{id:"\u903b\u8f91\u7b26\u53f7"},l.a.createElement(r["AnchorLink"],{to:"#\u903b\u8f91\u7b26\u53f7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u903b\u8f91\u7b26\u53f7"),l.a.createElement("p",null,"\u903b\u8f91\u7b26\u53f7\u5206\u4e24\u79cd\uff1a",l.a.createElement("strong",null,"\u6216\u903b\u8f91\u7b26")," \u548c ",l.a.createElement("strong",null,"\u5e76\u903b\u8f91\u7b26"),"\u3002"),l.a.createElement("h2",{id:"\u540e\u53f0\u5de5\u4f5c"},l.a.createElement(r["AnchorLink"],{to:"#\u540e\u53f0\u5de5\u4f5c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u540e\u53f0\u5de5\u4f5c"),l.a.createElement("h2",{id:"\u7279\u6b8a\u5b57\u7b26"},l.a.createElement(r["AnchorLink"],{to:"#\u7279\u6b8a\u5b57\u7b26","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7279\u6b8a\u5b57\u7b26"),l.a.createElement("p",null,"\u7279\u6b8a\u5b57\u7b26\uff1a\u4e00\u4e2a\u5b57\u7b26\u4e0d\u4ec5\u6709\u5b57\u9762\u610f\u4e49\uff0c\u8fd8\u6709\u5143\u610f\uff08meta-meaning\uff09"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"#")," \u6ce8\u91ca"),l.a.createElement("li",null,l.a.createElement("code",null,";")," \u5206\u53f7"),l.a.createElement("li",null,l.a.createElement("code",null,"\\")," \u8f6c\u4e49\u7b26\u53f7"),l.a.createElement("li",null,l.a.createElement("code",null,'"')," \u548c ",l.a.createElement("code",null,"''")," \u7b26\u53f7")),l.a.createElement("h3",{id:"\u8f6c\u4e49\u7b26\u53f7"},l.a.createElement(r["AnchorLink"],{to:"#\u8f6c\u4e49\u7b26\u53f7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u8f6c\u4e49\u7b26\u53f7"),l.a.createElement("p",null,"\u5355\u4e2a\u5b57\u7b26\u524d\u7684\u8f6c\u4e49\u7b26\u53f7\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"\\n"),"\u3001",l.a.createElement("code",null,"\\r"),"\u3001",l.a.createElement("code",null,"t")," \u5355\u4e2a\u5b57\u6bcd\u7684\u8f6c\u4e49"),l.a.createElement("li",null,l.a.createElement("code",null,"\\$"),"\u3001",l.a.createElement("code",null,'\\"'),"\u3001",l.a.createElement("code",null,"\\\\")," \u5355\u4e2a\u975e\u5b57\u6bcd\u7684\u8f6c\u4e49")),l.a.createElement("h2",{id:"\u8d4b\u503c\u8fd0\u7b97\u7b26"},l.a.createElement(r["AnchorLink"],{to:"#\u8d4b\u503c\u8fd0\u7b97\u7b26","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u8d4b\u503c\u8fd0\u7b97\u7b26"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"=")," \u8d4b\u503c\u8fd0\u7b97\u7b26\uff0c\u7528\u4e8e\u7b97\u6570\u8d4b\u503c\u548c\u5b57\u7b26\u4e32\u8d4b\u503c"),l.a.createElement("li",null,"\u4f7f\u7528 ",l.a.createElement("code",null,"unset")," \u53d6\u6d88\u4e3a\u53d8\u91cf\u7684\u8d4b\u503c"),l.a.createElement("li",null,l.a.createElement("code",null,"=")," \u9664\u4e86\u4f5c\u4e3a\u8d4b\u503c\u8fd0\u7b97\u7b26\u8fd8\u53ef\u4ee5\u4f5c\u4e3a\u6d4b\u8bd5\u64cd\u4f5c\u7b26")),l.a.createElement("h2",{id:"\u7b97\u6570\u8fd0\u7b97\u7b26"},l.a.createElement(r["AnchorLink"],{to:"#\u7b97\u6570\u8fd0\u7b97\u7b26","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7b97\u6570\u8fd0\u7b97\u7b26"),l.a.createElement("p",null,"\u57fa\u672c\u8fd0\u7b97\u7b97\u7b26\uff1a",l.a.createElement("code",null,"+"),"\u3001",l.a.createElement("code",null,"-"),"\u3001",l.a.createElement("code",null,"*"),"\u3001",l.a.createElement("code",null,"/"),"\u3001",l.a.createElement("code",null,"**"),"\u3001",l.a.createElement("code",null,"%")),l.a.createElement("p",null,"\u4f7f\u7528 ",l.a.createElement("code",null,"expr")," \u8fdb\u884c\u8fd0\u7b97\uff1a"),l.a.createElement(c["a"],{code:"expr 4 + 5",lang:"bash"}),l.a.createElement("h2",{id:"\u6570\u5b57\u5e38\u91cf"},l.a.createElement(r["AnchorLink"],{to:"#\u6570\u5b57\u5e38\u91cf","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6570\u5b57\u5e38\u91cf"),l.a.createElement("p",null,"\u6570\u5b57\u5e38\u91cf\u7684\u4f7f\u7528\u65b9\u6cd5\uff1a"),l.a.createElement(c["a"],{code:"let \u201c\u53d8\u91cf\u540d=\u53d8\u91cf\u503c\u201d",lang:"bash"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u53d8\u91cf\u503c\u4f7f\u7528 ",l.a.createElement("code",null,"0")," \u5f00\u5934\u4e3a\u516b\u8fdb\u5236\u3002"),l.a.createElement("li",null,"\u53d8\u91cf\u503c\u4f7f\u7528 ",l.a.createElement("code",null,"0x")," \u5f00\u5934\u4e3a\u5341\u516d\u8fdb\u5236")),l.a.createElement("h2",{id:"\u53cc\u5706\u62ec\u53f7"},l.a.createElement(r["AnchorLink"],{to:"#\u53cc\u5706\u62ec\u53f7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u53cc\u5706\u62ec\u53f7"),l.a.createElement("p",null,"\u53cc\u5706\u62ec\u53f7\u662f ",l.a.createElement("code",null,"let")," \u547d\u4ee4\u7684\u7b80\u5316\uff1a"),l.a.createElement(c["a"],{code:"(( a = 10))\n\n(( a++ ))\n\necho $(( 10 + 20 ))",lang:"bash"}),l.a.createElement("h2",{id:"\u91cd\u5b9a\u5411\u7b26\u53f7"},l.a.createElement(r["AnchorLink"],{to:"#\u91cd\u5b9a\u5411\u7b26\u53f7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u91cd\u5b9a\u5411\u7b26\u53f7"),l.a.createElement("p",null,"\u4e00\u4e2a\u8fdb\u7a0b\u9ed8\u8ba4\u4f1a\u6253\u5f00\u6807\u51c6\u8f93\u5165\u3001\u6807\u51c6\u8f93\u51fa\u3001\u9519\u8bef\u8f93\u51fa\u4e09\u4e2a\u6587\u4ef6\u63cf\u8ff0\u7b26\u3002"),l.a.createElement("p",null,"\u8f93\u5165\u91cd\u5b9a\u5411\u7b26\u53f7\uff1a",l.a.createElement("code",null,"<")),l.a.createElement(c["a"],{code:"# \u5148\u7f16\u8f91\u6587\u672c\u6587\u4ef6\uff0c\u5e76\u968f\u4fbf\u8f93\u5165\u5b57\u7b26\u540e\u4fdd\u5b58\nvim a.txt\n\n# \u5c06 a.txt \u8bfb\u5165\u5230 var2 \u53d8\u91cf\u4e2d\uff0c\u4ee3\u66ff\u624b\u52a8\u8f93\u5165\nread var2 < a.txt\n\n# \u8f93\u51fa var2 \u53d8\u91cf\uff0c\u6253\u5370\u51fa a.txt \u5185\u5bb9\necho $var2",lang:"bash"}),l.a.createElement("p",null,"\u8f93\u51fa\u91cd\u5b9a\u5411\u7b26\u53f7\uff1a",l.a.createElement("code",null,">"),"\u3001",l.a.createElement("code",null,">>"),"\u3001",l.a.createElement("code",null,"2>"),"\u3001",l.a.createElement("code",null,"&>")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,">"),"\uff1a\u76f8\u5f53\u4e8e ",l.a.createElement("code",null,"1>"),"\uff0c\u4ee3\u8868\u4ece\u5de6\u5230\u53f3\u7684\u91cd\u5b9a\u5411\u65b9\u5411"),l.a.createElement("li",null,l.a.createElement("code",null,">>"),"\uff1a\u4ee3\u8868\u8ffd\u52a0\uff0c\u4e5f\u5c31\u662f\u4e0d\u6539\u53d8\u91cd\u5b9a\u5411\u76ee\u6807\u6587\u4ef6\u539f\u6709\u7684\u5185\u5bb9\uff0c\u8ffd\u52a0\u5728\u540e\u9762"),l.a.createElement("li",null,l.a.createElement("code",null,"2>"),"\uff1a\u9519\u8bef\u91cd\u5b9a\u5411")),l.a.createElement("p",null,"\u63a5\u4e0a\u4f8b\u5b50"),l.a.createElement(c["a"],{code:"# \u5c06\u53d8\u91cf var2 \u503c\u8f93\u51fa\u5230 b.txt\necho $var2 > b.txt\n\n# \u67e5\u770b b.txt \u9a8c\u8bc1\ncat b.txt",lang:"bash"}),l.a.createElement(c["a"],{code:"# \u628acmd\u547d\u4ee4\u7684\u8f93\u51fa\u91cd\u5b9a\u5411\u5230\u6587\u4ef6file\u4e2d\u3002\u5982\u679cfile\u5df2\u7ecf\u5b58\u5728\uff0c\u5219\u6e05\u7a7a\u539f\u6709\u6587\u4ef6\uff0c\u4f7f\u7528bash\u7684noclobber\u9009\u9879\u53ef\u4ee5\u9632\u6b62\u590d\u76d6\u539f\u6709\u6587\u4ef6\u3002\n* cmd > file\n\n# \u628acmd\u547d\u4ee4\u7684\u8f93\u51fa\u91cd\u5b9a\u5411\u5230\u6587\u4ef6file\u4e2d\uff0c\u5982\u679cfile\u5df2\u7ecf\u5b58\u5728\uff0c\u5219\u628a\u4fe1\u606f\u52a0\u5728\u539f\u6709\u6587\u4ef6\u5f8c\u9762\u3002\n* cmd >> file\n\n# \u4f7fcmd\u547d\u4ee4\u4ecefile\u8bfb\u5165\n* cmd < file\n\n# \u4ece\u547d\u4ee4\u884c\u8bfb\u53d6\u8f93\u5165\uff0c\u76f4\u5230\u4e00\u4e2a\u4e0etext\u76f8\u540c\u7684\u884c\u7ed3\u675f\u3002\u9664\u975e\u4f7f\u7528\u5f15\u53f7\u628a\u8f93\u5165\u62ec\u8d77\u6765\uff0c\u6b64\u6a21\u5f0f\u5c06\u5bf9\u8f93\u5165\u5185\u5bb9\u8fdb\u884cshell\u53d8\u91cf\u66ff\u6362\u3002\n# \u5982\u679c\u4f7f\u7528<<- \uff0c\u5219\u4f1a\u5ffd\u7565\u63a5\u4e0b\u6765\u8f93\u5165\u884c\u9996\u7684tab\uff0c\u7ed3\u675f\u884c\u4e5f\u53ef\u4ee5\u662f\u4e00\u5806tab\u518d\u52a0\u4e0a\u4e00\u4e2a\u4e0etext\u76f8\u540c\u7684\u5185\u5bb9\uff0c\u53ef\u4ee5\u53c2\u8003\u5f8c\u9762\u7684\u4f8b\u5b50\u3002\n# * cmd << text\n\n# \u628aword\uff08\u800c\u4e0d\u662f\u6587\u4ef6word\uff09\u548c\u5f8c\u9762\u7684\u6362\u884c\u4f5c\u4e3a\u8f93\u5165\u63d0\u4f9b\u7ed9cmd\u3002\n* cmd <<< word\n\n# \u4ee5\u8bfb\u5199\u6a21\u5f0f\u628a\u6587\u4ef6file\u91cd\u5b9a\u5411\u5230\u8f93\u5165\uff0c\u6587\u4ef6file\u4e0d\u4f1a\u88ab\u7834\u574f\u3002\u4ec5\u5f53\u5e94\u7528\u7a0b\u5e8f\u5229\u7528\u4e86\u8fd9\u4e00\u7279\u6027\u65f6\uff0c\u5b83\u624d\u662f\u6709\u610f\u4e49\u7684\u3002\n* cmd <> file\n\n# \u529f\u80fd\u540c>\uff0c\u4f46\u5373\u4fbf\u5728\u8bbe\u7f6e\u4e86noclobber\u65f6\u4e5f\u4f1a\u590d\u76d6file\u6587\u4ef6\uff0c\u6ce8\u610f\u7528\u7684\u662f|\u800c\u975e\u4e00\u4e9b\u4e66\u4e2d\u8bf4\u7684!\uff0c\u76ee\u524d\u4ec5\u5728csh\u4e2d\u4ecd\u6cbf\u7528>!\u5b9e\u73b0\u8fd9\u4e00\u529f\u80fd\u3002\n* cmd >| file\n\n# \u628a\u6587\u4ef6\"filename\"\u622a\u65ad\u4e3a0\u957f\u5ea6.# \u5982\u679c\u6587\u4ef6\u4e0d\u5b58\u5728, \u90a3\u4e48\u5c31\u521b\u5efa\u4e00\u4e2a0\u957f\u5ea6\u7684\u6587\u4ef6(\u4e0e'touch'\u7684\u6548\u679c\u76f8\u540c).\n: > filename\n\n# \u628a\u8f93\u51fa\u9001\u5230\u6587\u4ef6\u63cf\u8ff0\u7b26n\ncmd >&n\n\n# \u628a\u8f93\u51fa \u5230\u6587\u4ef6\u7b26m\u7684\u4fe1\u606f\u91cd\u5b9a\u5411\u5230\u6587\u4ef6\u63cf\u8ff0\u7b26n\ncmd m>&n\n\n# \u5173\u95ed\u6807\u51c6\u8f93\u51fa\ncmd >&-\n\n# \u8f93\u5165\u6765\u81ea\u6587\u4ef6\u63cf\u8ff0\u7b26n\ncmd <&n\n\n# m\u6765\u81ea\u6587\u4ef6\u63cf\u8ff0\u5404\u4e2an\ncmd m<&n\n\n# \u5173\u95ed\u6807\u51c6\u8f93\u5165\ncmd <&-\n\n# \u79fb\u52a8\u8f93\u5165\u6587\u4ef6\u63cf\u8ff0\u7b26n\u800c\u975e\u590d\u5236\u5b83\u3002\uff08\u9700\u8981\u89e3\u91ca\uff09\ncmd <&n-\n\n# \u79fb\u52a8\u8f93\u51fa\u6587\u4ef6\u63cf\u8ff0\u7b26 n\u800c\u975e\u590d\u5236\u5b83\u3002\uff08\u9700\u8981\u89e3\u91ca\uff09\ncmd >&n-",lang:"bash"}),l.a.createElement("p",null,l.a.createElement("code",null,"/dev/null")," \u5728 Unix \u7cfb\u7edf\u4e2d\u65f6\u4e00\u4e2a\u7279\u6b8a\u7684\u8bbe\u5907\u6587\u4ef6\uff0c\u5b83\u4e22\u5f03\u4e00\u5207\u5199\u5165\u5176\u4e2d\u7684\u6570\u636e\uff08\u4f46\u62a5\u544a\u5199\u5165\u64cd\u4f5c\u6210\u529f\uff09\uff0c\u8bfb\u53d6\u5b83\u5219\u4f1a\u7acb\u5373\u5f97\u5230\u4e00\u4e2a EOF\u3002"),l.a.createElement("p",null,"\u7528\u5904\uff1a\u7981\u6b62\u6807\u51c6\u8f93\u51fa"),l.a.createElement(c["a"],{code:"# \u6587\u4ef6\u5185\u5bb9\u4e22\u5931\uff0c\u800c\u4e0d\u4f1a\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa\uff0c\u7981\u6b62\u6807\u51c6\u9519\u8bef\ncat $filename > /dev/null\n\n\n# \u8868\u793a 2 \u7684\u8f93\u51fa\u91cd\u5b9a\u5411\u7b49\u540c\u4e8e 1\uff0c\u90a3\u4e48\u6587\u672c\u6807\u9898\u7684\u8bed\u53e5 1>/dev/null\uff0c\u9996\u5148\u8868\u793a\u6807\u51c6\u8f93\u51fa\u91cd\u5b9a\u5411\u5230\u7a7a\u8bbe\u5907\u6587\u4ef6\uff0c\u4e5f\u5c31\u662f\u4e0d\u8f93\u51fa\u4efb\u4f55\u4fe1\u606f\u5230\u7ec8\u7aef\uff0c\u8bf4\u767d\u4e86\u5c31\u662f\u4e0d\u663e\u793a\u4efb\u4f55\u4fe1\u606f\n2>&1\n\n#",lang:"bash"})))}));n["default"]=e=>{var n=l.a.useContext(r["context"]),t=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:t})}},qHiR:function(e,n,t){},rVZW:function(e,n,t){}}]);