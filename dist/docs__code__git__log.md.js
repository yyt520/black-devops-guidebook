(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"6T1g":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("SVOR"),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i=l,c={Prism:o["a"],theme:i};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var p=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},g=function(e){var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,i=[],c=[i];while(l>-1){while((o=r[l]++)<a[l]){var s=void 0,u=t[l],g=n[l],y=g[o];if("string"===typeof y?(u=l>0?u:["plain"],s=y):(u=d(u,y.type),y.alias&&(u=d(u,y.alias)),s=y.content),"string"===typeof s){var h=s.split(p),f=h.length;i.push({types:u,content:h[0]});for(var v=1;v<f;v++)m(i),c.push(i=[]),i.push({types:u,content:h[v]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return m(i),c},y=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=u({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=u({},n,{backgroundColor:null}),a};function h(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var f=function(e){function t(){var t=this,n=[],r=arguments.length;while(r--)n[r]=arguments[r];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=h(e,["key","className","style","line"]),l=o,i=u({},l,{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(i.style=c.plain),void 0!==a&&(i.style=void 0!==i.style?u({},i.style,a):a),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),s(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),s(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=h(e,["key","className","style","token"]),i=l,c=u({},i,{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(c.style=void 0!==c.style?u({},c.style,a):a),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c})),s(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n],i=void 0!==l?this.tokenize(t,r,l,n):[r],c=g(i);return a({tokens:c,className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r["Component"]),v=f,b=n("dEAq");n("qHiR"),n("rVZW");function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}function E(e,t){return j(e)||A(e,t)||O(e,t)||w()}function w(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function O(e,t){if(e){if("string"===typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done);l=!0)if(o.push(r.value),t&&o.length===t)break}catch(c){i=!0,a=c}finally{try{l||null==n["return"]||n["return"]()}finally{if(i)throw a}}return o}}function j(e){if(Array.isArray(e))return e}var T={acss:"css",axml:"xml"};t["a"]=function(e){var t=e.code,n=e.lang,r=e.showCopy,o=void 0===r||r,l=Object(b["useCopy"])(),i=E(l,2),s=i[0],u=i[1];return a.a.createElement("div",{className:"__dumi-default-code-block"},a.a.createElement(v,k({},c,{code:t,language:T[n]||n,theme:void 0}),(function(e){var n=e.className,r=e.style,l=e.tokens,i=e.getLineProps,c=e.getTokenProps;return a.a.createElement("pre",{className:n,style:r},o&&a.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":u,onClick:function(){return s(t)}}),l.map((function(e,t){return a.a.createElement("div",i({line:e,key:t}),e.map((function(e,t){return a.a.createElement("span",c({token:e,key:t}))})))})))})))}},mk5R:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("dEAq"),l=n("6T1g"),i=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"\u65e5\u5fd7-git-log"},a.a.createElement(o["AnchorLink"],{to:"#\u65e5\u5fd7-git-log","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u65e5\u5fd7 git log"),a.a.createElement("blockquote",null,a.a.createElement("p",null,"Show commit logs"),a.a.createElement("p",null,"\u7528\u4e8e\u663e\u793a\u63d0\u4ea4\u65e5\u5fd7\u4fe1\u606f")),a.a.createElement("p",null,a.a.createElement("code",null,"git log")," \u547d\u4ee4\u7528\u4e8e\u663e\u793a\u63d0\u4ea4\u65e5\u5fd7\u4fe1\u606f\u3002"),a.a.createElement("p",null,"\u8be5\u547d\u4ee4\u91c7\u7528\u9002\u7528\u4e8e ",a.a.createElement("code",null,"git rev-list")," \u547d\u4ee4\u7684\u9009\u9879\u6765\u63a7\u5236\u663e\u793a\u7684\u5185\u5bb9\u4ee5\u53ca\u5982\u4f55\u4ee5\u53ca\u9002\u7528\u4e8e ",a.a.createElement("code",null,"git diff- *")," \u547d\u4ee4\u7684\u9009\u9879\uff0c\u4ee5\u63a7\u5236\u5982\u4f55\u66f4\u6539\u6bcf\u4e2a\u63d0\u4ea4\u5f15\u5165\u7684\u5185\u5bb9\u3002"),a.a.createElement("h2",{id:"\u67e5\u770b\u63d0\u4ea4\u65e5\u5fd7"},a.a.createElement(o["AnchorLink"],{to:"#\u67e5\u770b\u63d0\u4ea4\u65e5\u5fd7","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u770b\u63d0\u4ea4\u65e5\u5fd7"),a.a.createElement(l["a"],{code:"# \u67e5\u770b\u6240\u6709\u63d0\u4ea4\u8bb0\u5f55\ngit log\n\n# \u67e5\u770b\u6307\u5b9a\u6b21\u6570\u63d0\u4ea4\u8bb0\u5f55\ngit log -n\n\n# \u6839\u636eID\u67e5\u770b\u63d0\u4ea4\u8bb0\u5f55\ngit log <commit-id>\n\n# \u6839\u636e\u591a\u4e2aID\u67e5\u770b\u63d0\u4ea4\u8bb0\u5f55\ngit log <commit1_id> <commit2_id>\n\n# \u793a\u4f8b\uff1a\u67e5\u770b\u67d0\u6b21\u63d0\u4ea4\ngit log c5f8a258babf5eec54edc794ff980d8340396592\n\n# \u67e5\u770b\u6700\u540e\u4e00\u6b21\u63d0\u4ea4\u8bb0\u5f55\ngit log HEAD\n\n# \u67e5\u770b\u5012\u6570\u7b2c\u4e8c\u6b21\u63d0\u4ea4\u8bb0\u5f55\ngit log HEAD^\ngit log HEAD~1\n\n#\u67e5\u770b\u6700\u8fd1\u4e09\u6b21\u7684\u63d0\u4ea4\u65e5\u5fd7\ngit log -3",lang:"bash"}),a.a.createElement("h2",{id:"\u67e5\u770b\u63d0\u4ea4\u6539\u52a8\u7ec6\u8282"},a.a.createElement(o["AnchorLink"],{to:"#\u67e5\u770b\u63d0\u4ea4\u6539\u52a8\u7ec6\u8282","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u770b\u63d0\u4ea4\u6539\u52a8\u7ec6\u8282"),a.a.createElement(l["a"],{code:"git log -p",lang:"bash"}),a.a.createElement("h2",{id:"\u67e5\u770b\u547d\u4ee4\u65e5\u5fd7"},a.a.createElement(o["AnchorLink"],{to:"#\u67e5\u770b\u547d\u4ee4\u65e5\u5fd7","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u770b\u547d\u4ee4\u65e5\u5fd7"),a.a.createElement(l["a"],{code:"git relog",lang:"bash"})))}));t["default"]=e=>{var t=a.a.useContext(o["context"]),n=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(i,{demos:n})}},qHiR:function(e,t,n){},rVZW:function(e,t,n){}}]);