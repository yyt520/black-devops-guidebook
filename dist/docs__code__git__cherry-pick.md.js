(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"6T1g":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("SVOR"),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c=o,i={Prism:l["a"],theme:c};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}var m=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e){var t=[[]],n=[e],a=[0],r=[e.length],l=0,o=0,c=[],i=[c];while(o>-1){while((l=a[o]++)<r[o]){var s=void 0,u=t[o],y=n[o],h=y[l];if("string"===typeof h?(u=o>0?u:["plain"],s=h):(u=d(u,h.type),h.alias&&(u=d(u,h.alias)),s=h.content),"string"===typeof s){var g=s.split(m),f=g.length;c.push({types:u,content:g[0]});for(var v=1;v<f;v++)p(c),i.push(c=[]),c.push({types:u,content:g[v]})}else o++,t.push(u),n.push(s),a.push(0),r.push(s.length)}o--,t.pop(),n.pop(),a.pop(),r.pop()}return p(c),i},h=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=u({},n,{backgroundColor:null}),r};function g(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var f=function(e){function t(){var t=this,n=[],a=arguments.length;while(a--)n[a]=arguments[a];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,l=g(e,["key","className","style","line"]),o=l,c=u({},o,{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(c.style=i.plain),void 0!==r&&(c.style=void 0!==c.style?u({},c.style,r):r),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c})),s(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return l[n[0]];var o=a?{display:"inline-block"}:{},c=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(c))}})),s(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,l=e.token,o=g(e,["key","className","style","token"]),c=o,i=u({},c,{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?u({},i.style,r):r),void 0!==n&&(i.key=n),a&&(i.className+=" "+a),i})),s(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[n],c=void 0!==o?this.tokenize(t,a,o,n):[a],i=y(c);return r({tokens:i,className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a["Component"]),v=f,k=n("dEAq");n("qHiR"),n("rVZW");function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},E.apply(this,arguments)}function b(e,t){return j(e)||N(e,t)||w(e,t)||_()}function _(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function w(e,t){if(e){if("string"===typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function N(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){c=!0,r=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function j(e){if(Array.isArray(e))return e}var T={acss:"css",axml:"xml"};t["a"]=function(e){var t=e.code,n=e.lang,a=e.showCopy,l=void 0===a||a,o=Object(k["useCopy"])(),c=b(o,2),s=c[0],u=c[1];return r.a.createElement("div",{className:"__dumi-default-code-block"},r.a.createElement(v,E({},i,{code:t,language:T[n]||n,theme:void 0}),(function(e){var n=e.className,a=e.style,o=e.tokens,c=e.getLineProps,i=e.getTokenProps;return r.a.createElement("pre",{className:n,style:a},l&&r.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":u,onClick:function(){return s(t)}}),o.map((function(e,t){return r.a.createElement("div",c({line:e,key:t}),e.map((function(e,t){return r.a.createElement("span",i({token:e,key:t}))})))})))})))}},oelk:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("dEAq"),o=n("6T1g"),c=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u79fb\u690d-git-cherry-pick"},r.a.createElement(l["AnchorLink"],{to:"#\u79fb\u690d-git-cherry-pick","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u79fb\u690d git cherry-pick"),r.a.createElement("blockquote",null,r.a.createElement("p",null,"Apply the changes introduced by some existing commits")),r.a.createElement("p",null,r.a.createElement("strong",null,"\u9002\u7528\u573a\u666f\uff1a")),r.a.createElement("p",null,"\u5408\u5e76\u5176\u4ed6\u5206\u652f\u4e2d\u7684\u67d0\u4e2a commit \u6216\u8005\u67d0\u4e2a\u8303\u56f4\u5185\u7684 commits \u5230\u5f53\u524d\u5206\u652f\u3002\u6bd4\u5982\u4e24\u4e2a\u5206\u652f\u5dee\u5f02\u8f83\u5927\uff0c\u6574\u4e2a\u5206\u652f\u7684\u5408\u5e76\u4f1a\u5e26\u6765 N \u591a\u51b2\u7a81\uff0c\u4e14\u56e0\u4e3a\u5386\u53f2\u539f\u56e0\uff0c\u4e0d\u597d\u786e\u5b9a\u54ea\u90e8\u5206\u4ee3\u7801\u662f\u6b63\u786e\u7684\uff0c\u4f46\u662f\u53c8\u6709\u8fd9\u6837\u7684\u9700\u6c42\uff0c\u9700\u8981\u5c06\u5176\u4e2d\u4e00\u4e2a\u5206\u652f\u4e2d\u7684\u67d0\u90e8\u5206\u529f\u80fd\u5408\u5e76\u5230\u53e6\u5916\u7684\u5206\u652f\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u7528\u6b64\u547d\u4ee4\uff0c\u5c06\u6d89\u53ca\u8be5\u529f\u80fd\u7684\u67d0\u4e9b commit \u5408\u5e76\u5230\u76ee\u6807\u5206\u652f\u3002"),r.a.createElement("h2",{id:"\u57fa\u672c\u7528\u6cd5"},r.a.createElement(l["AnchorLink"],{to:"#\u57fa\u672c\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u7528\u6cd5"),r.a.createElement(o["a"],{code:"# \u5c06\u6307\u5b9a\u7684\u63d0\u4ea4 commit \u5e94\u7528\u4e8e\u5176\u4ed6\u5206\u652f\ngit cherry-pick <commitHash>",lang:"bash"}),r.a.createElement("p",null,"\u4e0a\u9762\u547d\u4ee4\u5c31\u4f1a\u6307\u5b9a\u7684\u63d0\u4ea4 commitHash\uff0c\u5e94\u7528\u4e8e\u5f53\u524d\u5206\u652f\u3002\u8fd9\u4f1a\u5728\u5f53\u524d\u5206\u652f\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684\u63d0\u4ea4\uff0c\u5f53\u7136\u5b83\u4eec\u7684\u54c8\u5e0c\u503c\u4f1a\u4e0d\u4e00\u6837\u3002"),r.a.createElement("p",null,"\u4e3e\u4f8b\u6765\u8bf4\uff0c\u4ee3\u7801\u4ed3\u5e93\u6709 ",r.a.createElement("code",null,"master")," \u548c ",r.a.createElement("code",null,"feature")," \u5206\u652f\u3002"),r.a.createElement(o["a"],{code:"a - b - c - d   Master\n        \\\n          e - f - g Feature",lang:"unknown"}),r.a.createElement("p",null,"\u73b0\u5728\u5c06\u63d0\u4ea4 ",r.a.createElement("code",null,"f")," \u5e94\u7528\u5230 ",r.a.createElement("code",null,"master")," \u5206\u652f\u3002"),r.a.createElement(o["a"],{code:"# \u5207\u6362\u5230 master \u5206\u652f\ngit checkout master\n\n# Cherry Pick \u64cd\u4f5c\ngit cherry-pick f",lang:"bash"}),r.a.createElement("p",null,"\u4e0a\u9762\u7684\u64cd\u4f5c\u5b8c\u6210\u4ee5\u540e\uff0c\u4ee3\u7801\u5e93\u5c31\u53d8\u6210\u4e86\u4e0b\u9762\u7684\u6837\u5b50\u3002"),r.a.createElement(o["a"],{code:"a - b - c - d - f   Master\n        \\\n          e - f - g Feature",lang:"unknown"}),r.a.createElement("p",null,"\u4ece\u4e0a\u9762\u53ef\u4ee5\u770b\u5230\uff0c",r.a.createElement("code",null,"master")," \u5206\u652f\u7684\u672b\u5c3e\u589e\u52a0\u4e86\u4e00\u4e2a\u63d0\u4ea4 f\u3002"),r.a.createElement("p",null,r.a.createElement("code",null,"git cherry-pick")," \u547d\u4ee4\u7684\u53c2\u6570\uff0c\u4e0d\u4e00\u5b9a\u662f\u63d0\u4ea4\u7684 ",r.a.createElement("code",null,"\u54c8\u5e0c\u503c"),"\uff0c",r.a.createElement("code",null,"\u5206\u652f\u540d")," \u4e5f\u662f\u53ef\u4ee5\u7684\uff0c\u8868\u793a\u8f6c\u79fb\u8be5\u5206\u652f\u7684\u6700\u65b0\u63d0\u4ea4\u3002"),r.a.createElement(o["a"],{code:"# \u8bed\u6cd5\ngit cherry-pick branch-name\n\n# \u793a\u4f8b\ngit cherry-pick feature",lang:"bash"}),r.a.createElement("p",null,"\u4e0a\u9762\u4ee3\u7801\u8868\u793a\u5c06 ",r.a.createElement("code",null,"feature")," \u5206\u652f\u7684\u6700\u8fd1\u4e00\u6b21\u63d0\u4ea4\uff0c\u8f6c\u79fb\u5230\u5f53\u524d\u5206\u652f\u3002"),r.a.createElement("h2",{id:"\u5176\u4ed6\u547d\u4ee4"},r.a.createElement(l["AnchorLink"],{to:"#\u5176\u4ed6\u547d\u4ee4","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5176\u4ed6\u547d\u4ee4"),r.a.createElement(o["a"],{code:"# \u5355\u72ec\u5408\u5e76\u67d0\u4e2a commit_id \u5230\u5f53\u524d\u5206\u652f\ngit cherry-pick <commit_id>\n\n# \u540c\u4e0a\uff0c\u53ea\u662f\u5728\u5408\u5e76\u7684\u65f6\u5019\uff0c\u4fdd\u7559\u539f\u63d0\u4ea4\u8005\u4fe1\u606f\ngit cherry-pick -x <commit_id>\n\n# \u5408\u5e76\u67d0\u4e00\u8303\u56f4\u5185\u7684commit \u5230\u5f53\u524d\u5206\u652f, \u4e0d\u5305\u62ec <start_commit_id>\ngit cherry-pick <start_commit_id>..<end_commit_id>\n\n# \u540c\u4e0a\uff0c\u533a\u522b\uff1a\u5305\u62ec<start_commit_id>\ngit cherry-pick <start_commit_id>^..<end_commit_id>",lang:"bash"}),r.a.createElement("blockquote",null,r.a.createElement("p",null,"\u6ce8\u610f :"),r.a.createElement("ol",null,r.a.createElement("li",null,"\u5982\u679c\u51fa\u73b0\u5408\u5e76\u51b2\u7a81\uff0c\u6309\u7167\u6b63\u5e38\u7684\u6587\u4ef6\u51b2\u7a81\u89e3\u51b3\u5c31\u597d\uff1b"),r.a.createElement("li",null,"<commit_id>\u53d6\u524d 6 \u4f4d\u5c31\u884c\uff1b"),r.a.createElement("li",null,"<start_commit_id>\u5728\u65f6\u95f4\u4e0a\u5fc5\u987b\u65e9\u4e8e<end_commit_id>;"),r.a.createElement("li",null,"\u5982\u679c\u60f3\u4f7f\u7528\u5408\u5e76\u67d0\u4e00\u8303\u56f4\u5185\u7684 commit \u529f\u80fd\uff0cgit \u7248\u672c\u9700 >=1.7.2;"))),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("strong",null,"\u53c2\u8003\u8d44\u6599\uff1a")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l["Link"],{to:"http://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html"},"\u962e\u4e00\u5cf0\uff1agit cherry-pick \u6559\u7a0b")))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(c,{demos:n})}},qHiR:function(e,t,n){},rVZW:function(e,t,n){}}]);