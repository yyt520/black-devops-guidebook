(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{"6T1g":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("SVOR"),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i=l,c={Prism:o["a"],theme:i};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}var p=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e){var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,i=[],c=[i];while(l>-1){while((o=a[l]++)<r[l]){var s=void 0,u=t[l],h=n[l],y=h[o];if("string"===typeof y?(u=l>0?u:["plain"],s=y):(u=d(u,y.type),y.alias&&(u=d(u,y.alias)),s=y.content),"string"===typeof s){var g=s.split(p),f=g.length;i.push({types:u,content:g[0]});for(var v=1;v<f;v++)m(i),c.push(i=[]),i.push({types:u,content:g[v]})}else l++,t.push(u),n.push(s),a.push(0),r.push(s.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return m(i),c},y=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=u({},n,{backgroundColor:null}),r};function g(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var f=function(e){function t(){var t=this,n=[],a=arguments.length;while(a--)n[a]=arguments[a];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=g(e,["key","className","style","line"]),l=o,i=u({},l,{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(i.style=c.plain),void 0!==r&&(i.style=void 0!==i.style?u({},i.style,r):r),void 0!==n&&(i.key=n),a&&(i.className+=" "+a),i})),s(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),s(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=g(e,["key","className","style","token"]),i=l,c=u({},i,{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?u({},c.style,r):r),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c})),s(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n],i=void 0!==l?this.tokenize(t,a,l,n):[a],c=h(i);return r({tokens:c,className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a["Component"]),v=f,b=n("dEAq");n("qHiR"),n("rVZW");function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},k.apply(this,arguments)}function E(e,t){return A(e)||j(e,t)||N(e,t)||w()}function w(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function N(e,t){if(e){if("string"===typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function j(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(a=n.next()).done);l=!0)if(o.push(a.value),t&&o.length===t)break}catch(c){i=!0,r=c}finally{try{l||null==n["return"]||n["return"]()}finally{if(i)throw r}}return o}}function A(e){if(Array.isArray(e))return e}var T={acss:"css",axml:"xml"};t["a"]=function(e){var t=e.code,n=e.lang,a=e.showCopy,o=void 0===a||a,l=Object(b["useCopy"])(),i=E(l,2),s=i[0],u=i[1];return r.a.createElement("div",{className:"__dumi-default-code-block"},r.a.createElement(v,k({},c,{code:t,language:T[n]||n,theme:void 0}),(function(e){var n=e.className,a=e.style,l=e.tokens,i=e.getLineProps,c=e.getTokenProps;return r.a.createElement("pre",{className:n,style:a},o&&r.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":u,onClick:function(){return s(t)}}),l.map((function(e,t){return r.a.createElement("div",i({line:e,key:t}),e.map((function(e,t){return r.a.createElement("span",c({token:e,key:t}))})))})))})))}},biXB:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("dEAq"),l=n("6T1g"),i=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u63a8\u9001-git-push"},r.a.createElement(o["AnchorLink"],{to:"#\u63a8\u9001-git-push","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u63a8\u9001 git push"),r.a.createElement("blockquote",null,r.a.createElement("p",null,"Update remote refs along with associated objects"),r.a.createElement("p",null,"\u5c06\u672c\u5730\u5206\u652f\u7684\u66f4\u65b0\uff0c\u63a8\u9001\u5230\u8fdc\u7a0b\u4e3b\u673a\u3002")),r.a.createElement("h2",{id:"\u63a8\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93"},r.a.createElement(o["AnchorLink"],{to:"#\u63a8\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u63a8\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93"),r.a.createElement("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u4ee5\u5c06\u672c\u5730\u4ed3\u5e93 HEAD \u4e2d\u7684\u7248\u672c\u6539\u52a8\u63d0\u4ea4\u5230\u8fdc\u7a0b\u4ed3\u5e93\u3002"),r.a.createElement(l["a"],{code:"git push",lang:"bash"}),r.a.createElement("p",null,"\u4e0a\u9762\u547d\u4ee4\u8868\u793a\uff0c\u5c06\u672c\u5730\u7684 ",r.a.createElement("code",null,"master")," \u5206\u652f\u63a8\u9001\u5230 ",r.a.createElement("code",null,"origin")," \u4e3b\u673a\u7684 ",r.a.createElement("code",null,"master")," \u5206\u652f\u3002\u5982\u679c ",r.a.createElement("code",null,"master")," \u4e0d\u5b58\u5728\uff0c\u5219\u4f1a\u88ab\u65b0\u5efa\u3002"),r.a.createElement(l["a"],{code:"git push origin master",lang:"bash"}),r.a.createElement("p",null,"\u53ef\u4ee5\u5c06 master \u6362\u6210\u4f60\u60f3\u8981\u63a8\u9001\u7684\u4efb\u4f55\u5206\u652f\u3002"),r.a.createElement("h2",{id:"\u5220\u9664\u6307\u5b9a\u7684\u8fdc\u7a0b\u5206\u652f"},r.a.createElement(o["AnchorLink"],{to:"#\u5220\u9664\u6307\u5b9a\u7684\u8fdc\u7a0b\u5206\u652f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5220\u9664\u6307\u5b9a\u7684\u8fdc\u7a0b\u5206\u652f"),r.a.createElement(l["a"],{code:"git push origin --delete <branch-name>",lang:"bash"}),r.a.createElement("p",null,"\u4e0b\u9762\u547d\u4ee4\u8868\u793a\u5220\u9664",r.a.createElement("code",null,"origin"),"\u4e3b\u673a\u7684",r.a.createElement("code",null,"master"),"\u5206\u652f\u3002\u5982\u679c\u5f53\u524d\u5206\u652f\u4e0e\u8fdc\u7a0b\u5206\u652f\u4e4b\u95f4\u5b58\u5728\u8ffd\u8e2a\u5173\u7cfb\uff0c\u5219\u672c\u5730\u5206\u652f\u548c\u8fdc\u7a0b\u5206\u652f\u90fd\u53ef\u4ee5\u7701\u7565\u3002"),r.a.createElement("p",null,"\ud83d\udccd ",r.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),r.a.createElement(l["a"],{code:"git push origin --delete master\n# \u7b49\u540c\u4e8e\ngit push origin",lang:"bash"}),r.a.createElement("h2",{id:"\u63a8\u9001\u6807\u7b7e\u4fee\u6539"},r.a.createElement(o["AnchorLink"],{to:"#\u63a8\u9001\u6807\u7b7e\u4fee\u6539","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u63a8\u9001\u6807\u7b7e\u4fee\u6539"),r.a.createElement(l["a"],{code:"# \u63a8\u9001\u6807\u7b7e\ngit push origin --tags\n\n# \u5220\u9664\u8fdc\u7a0b\u6807\u7b7e\ngit push origin :<tag-name>",lang:"bash"}),r.a.createElement("h2",{id:"\u63a8\u9001\u5206\u652f\u4fee\u6539"},r.a.createElement(o["AnchorLink"],{to:"#\u63a8\u9001\u5206\u652f\u4fee\u6539","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u63a8\u9001\u5206\u652f\u4fee\u6539"),r.a.createElement("p",null,"\u5c06\u5f53\u524d\u5206\u652f\u63a8\u9001\u5230\u8fdc\u7a0b\u7684\u540c\u540d\u7684\u7b80\u5355\u65b9\u6cd5\u3002"),r.a.createElement(l["a"],{code:"git push origin HEAD",lang:"bash"})))}));t["default"]=e=>{var t=r.a.useContext(o["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(i,{demos:n})}},qHiR:function(e,t,n){},rVZW:function(e,t,n){}}]);