(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[115],{"6T1g":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("SVOR"),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i=l,c={Prism:o["a"],theme:i};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}var p=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e){var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,i=[],c=[i];while(l>-1){while((o=a[l]++)<r[l]){var s=void 0,u=t[l],y=n[l],h=y[o];if("string"===typeof h?(u=l>0?u:["plain"],s=h):(u=d(u,h.type),h.alias&&(u=d(u,h.alias)),s=h.content),"string"===typeof s){var g=s.split(p),f=g.length;i.push({types:u,content:g[0]});for(var v=1;v<f;v++)m(i),c.push(i=[]),i.push({types:u,content:g[v]})}else l++,t.push(u),n.push(s),a.push(0),r.push(s.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return m(i),c},h=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=u({},n,{backgroundColor:null}),r};function g(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var f=function(e){function t(){var t=this,n=[],a=arguments.length;while(a--)n[a]=arguments[a];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=g(e,["key","className","style","line"]),l=o,i=u({},l,{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(i.style=c.plain),void 0!==r&&(i.style=void 0!==i.style?u({},i.style,r):r),void 0!==n&&(i.key=n),a&&(i.className+=" "+a),i})),s(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),s(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=g(e,["key","className","style","token"]),i=l,c=u({},i,{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?u({},c.style,r):r),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c})),s(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n],i=void 0!==l?this.tokenize(t,a,l,n):[a],c=y(i);return r({tokens:c,className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a["Component"]),v=f,k=n("dEAq");n("qHiR"),n("rVZW");function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b.apply(this,arguments)}function E(e,t){return j(e)||O(e,t)||w(e,t)||x()}function x(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function w(e,t){if(e){if("string"===typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function O(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(a=n.next()).done);l=!0)if(o.push(a.value),t&&o.length===t)break}catch(c){i=!0,r=c}finally{try{l||null==n["return"]||n["return"]()}finally{if(i)throw r}}return o}}function j(e){if(Array.isArray(e))return e}var A={acss:"css",axml:"xml"};t["a"]=function(e){var t=e.code,n=e.lang,a=e.showCopy,o=void 0===a||a,l=Object(k["useCopy"])(),i=E(l,2),s=i[0],u=i[1];return r.a.createElement("div",{className:"__dumi-default-code-block"},r.a.createElement(v,b({},c,{code:t,language:A[n]||n,theme:void 0}),(function(e){var n=e.className,a=e.style,l=e.tokens,i=e.getLineProps,c=e.getTokenProps;return r.a.createElement("pre",{className:n,style:a},o&&r.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":u,onClick:function(){return s(t)}}),l.map((function(e,t){return r.a.createElement("div",i({line:e,key:t}),e.map((function(e,t){return r.a.createElement("span",c({token:e,key:t}))})))})))})))}},GQcD:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("dEAq"),l=n("6T1g"),i=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u5b89\u88c5\u6559\u7a0b"},r.a.createElement(o["AnchorLink"],{to:"#\u5b89\u88c5\u6559\u7a0b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5b89\u88c5\u6559\u7a0b"),r.a.createElement("h2",{id:"\u56db\u9879\u786e\u8ba4"},r.a.createElement(o["AnchorLink"],{to:"#\u56db\u9879\u786e\u8ba4","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u56db\u9879\u786e\u8ba4"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u786e\u8ba4\u7cfb\u7edf\u7f51\u7edc\uff08",r.a.createElement("code",null,"ping"),"\uff09"),r.a.createElement("li",null,"\u786e\u8ba4 ",r.a.createElement("code",null,"yum")," \u53ef\u7528\uff08",r.a.createElement("code",null,"yum list | grep gcc"),"\uff09"),r.a.createElement("li",null,"\u786e\u5b9a\u5173\u95ed ",r.a.createElement("code",null,"iptables"),"\uff08",r.a.createElement("code",null,"iptables -F"),"\uff09"),r.a.createElement("li",null,"\u786e\u8ba4\u505c\u7528 ",r.a.createElement("code",null,"selinux"))),r.a.createElement("h2",{id:"\u4e24\u9879\u5b89\u88c5"},r.a.createElement(o["AnchorLink"],{to:"#\u4e24\u9879\u5b89\u88c5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4e24\u9879\u5b89\u88c5"),r.a.createElement(l["a"],{code:"yum -y install gcc gcc-c++ autoconf pcre pcre-devel make automake\nyum -y install wget httpd-tools vim",lang:"bash"}),r.a.createElement("h2",{id:"\u5b89\u88c5\u6e90"},r.a.createElement(o["AnchorLink"],{to:"#\u5b89\u88c5\u6e90","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5b89\u88c5\u6e90"),r.a.createElement(l["a"],{code:"cd /etc/yum.repos.d\nvim nginx.repo\n\n# \u6dfb\u52a0\n[nginx]\nname=nginx repo\nbaseurl=http://nginx.org/packages/centos/7/$basearch/\ngpgcheck=0\nenabled=1",lang:"bash"}),r.a.createElement("h2",{id:"\u8fdb\u884c\u5b89\u88c5"},r.a.createElement(o["AnchorLink"],{to:"#\u8fdb\u884c\u5b89\u88c5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u8fdb\u884c\u5b89\u88c5"),r.a.createElement(l["a"],{code:"yum list | grep nginx\nyum install nginx",lang:"bash"}),r.a.createElement("h2",{id:"\u67e5\u770b\u7248\u672c"},r.a.createElement(o["AnchorLink"],{to:"#\u67e5\u770b\u7248\u672c","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u770b\u7248\u672c"),r.a.createElement("p",null,"\u67e5\u770b\u7248\u672c"),r.a.createElement(l["a"],{code:"nginx -v",lang:"bash"})))}));t["default"]=e=>{var t=r.a.useContext(o["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(i,{demos:n})}},qHiR:function(e,t,n){},rVZW:function(e,t,n){}}]);