(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"6T1g":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("SVOR"),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l=c,i={Prism:o["a"],theme:l};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}var m=/\r\n|\r|\n/,h=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e){var t=[[]],n=[e],a=[0],r=[e.length],o=0,c=0,l=[],i=[l];while(c>-1){while((o=a[c]++)<r[c]){var s=void 0,u=t[c],d=n[c],g=d[o];if("string"===typeof g?(u=c>0?u:["plain"],s=g):(u=p(u,g.type),g.alias&&(u=p(u,g.alias)),s=g.content),"string"===typeof s){var y=s.split(m),b=y.length;l.push({types:u,content:y[0]});for(var f=1;f<b;f++)h(l),i.push(l=[]),l.push({types:u,content:y[f]})}else c++,t.push(u),n.push(s),a.push(0),r.push(s.length)}c--,t.pop(),n.pop(),a.pop(),r.pop()}return h(l),i},g=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=u({},n,{backgroundColor:null}),r};function y(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var b=function(e){function t(){var t=this,n=[],a=arguments.length;while(a--)n[a]=arguments[a];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?g(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=y(e,["key","className","style","line"]),c=o,l=u({},c,{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(l.style=i.plain),void 0!==r&&(l.style=void 0!==l.style?u({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),s(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var c=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),s(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,c=y(e,["key","className","style","token"]),l=c,i=u({},l,{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?u({},i.style,r):r),void 0!==n&&(i.key=n),a&&(i.className+=" "+a),i})),s(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),c=t.languages[n],l=void 0!==c?this.tokenize(t,a,c,n):[a],i=d(l);return r({tokens:i,className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a["Component"]),f=b,v=n("dEAq");n("qHiR"),n("rVZW");function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},E.apply(this,arguments)}function k(e,t){return x(e)||L(e,t)||A(e,t)||N()}function N(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function A(e,t){if(e){if("string"===typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function L(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,o=[],c=!0,l=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(o.push(a.value),t&&o.length===t)break}catch(i){l=!0,r=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(l)throw r}}return o}}function x(e){if(Array.isArray(e))return e}var O={acss:"css",axml:"xml"};t["a"]=function(e){var t=e.code,n=e.lang,a=e.showCopy,o=void 0===a||a,c=Object(v["useCopy"])(),l=k(c,2),s=l[0],u=l[1];return r.a.createElement("div",{className:"__dumi-default-code-block"},r.a.createElement(f,E({},i,{code:t,language:O[n]||n,theme:void 0}),(function(e){var n=e.className,a=e.style,c=e.tokens,l=e.getLineProps,i=e.getTokenProps;return r.a.createElement("pre",{className:n,style:a},o&&r.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":u,onClick:function(){return s(t)}}),c.map((function(e,t){return r.a.createElement("div",l({line:e,key:t}),e.map((function(e,t){return r.a.createElement("span",i({token:e,key:t}))})))})))})))}},ZKJ3:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("dEAq"),c=n("6T1g"),l=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u5206\u652f-git-branch"},r.a.createElement(o["AnchorLink"],{to:"#\u5206\u652f-git-branch","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5206\u652f git branch"),r.a.createElement("blockquote",null,r.a.createElement("p",null,"List, create, or delete branches"),r.a.createElement("p",null,"\u5217\u51fa, \u521b\u5efa, \u6216\u8005\u5220\u9664\u5206\u652f")),r.a.createElement("h2",{id:"\u67e5\u770b\u5206\u652f"},r.a.createElement(o["AnchorLink"],{to:"#\u67e5\u770b\u5206\u652f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u770b\u5206\u652f"),r.a.createElement("h3",{id:"\u67e5\u770b\u672c\u5730\u5206\u652f"},r.a.createElement(o["AnchorLink"],{to:"#\u67e5\u770b\u672c\u5730\u5206\u652f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u770b\u672c\u5730\u5206\u652f"),r.a.createElement(c["a"],{code:"# \u67e5\u770b\u672c\u5730\u6240\u6709\u5206\u652f\ngit branch",lang:"bash"}),r.a.createElement("h3",{id:"\u67e5\u770b\u8fdc\u7a0b\u5206\u652f"},r.a.createElement(o["AnchorLink"],{to:"#\u67e5\u770b\u8fdc\u7a0b\u5206\u652f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u770b\u8fdc\u7a0b\u5206\u652f"),r.a.createElement(c["a"],{code:"# \u67e5\u770b\u8fdc\u7a0b\u6240\u6709\u5206\u652f -r \u76f8\u5f53\u4e8e --remote\ngit branch -r\n\n# \u67e5\u770b\u672c\u5730\u5206\u548c\u8fdc\u7a0b\u6240\u6709\u5206\u652f -a \u76f8\u5f53\u4e8e all\ngit branch -a\n\n# \u67e5\u770b\u672c\u5730\u5206\u652f\u5173\u8054\u8fdc\u7a0b\u5206\u652f\u7684\u60c5\u51b5\uff08\u53ef\u4ee5\u770b\u5230\u672c\u5730\u4e0e\u8fdc\u7a0b\u7684\u5dee\u8ddd\uff09\ngit branch -v",lang:"bash"}),r.a.createElement("p",null,"\u66f4\u65b0\u8fdc\u7a0b\u5206\u652f\u5217\u8868\uff1a"),r.a.createElement(c["a"],{code:"git remote update origin --prune",lang:"bash"}),r.a.createElement("h2",{id:"\u65b0\u5efa\u5206\u652f"},r.a.createElement(o["AnchorLink"],{to:"#\u65b0\u5efa\u5206\u652f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u65b0\u5efa\u5206\u652f"),r.a.createElement("p",null,"\u65b0\u5efa\u4e00\u4e2a\u5206\u652f\uff0c\u4f46\u4f9d\u7136",r.a.createElement("strong",null,"\u505c\u7559\u5728\u5f53\u524d\u5206\u652f"),"\u3002"),r.a.createElement(c["a"],{code:"# \u57fa\u4e8e\u5f53\u524d\u5206\u652f\u672b\u68a2\u65b0\u5efa\u5206\u652f\u4f46\u5e76\u4e0d\u5207\u6362\u5206\u652f\ngit branch <branchname>\n\n# \u57fa\u4e8e\u5f53\u524d\u5206\u652f\u672b\u68a2\u65b0\u5efa\u5206\u652f\u5e76\u5207\u6362\u81f3\u8be5\u5206\u652f\ngit checkout -b <branchname>\n\n# \u57fa\u4e8e\u67d0\u6b21\u63d0\u4ea4\u3001\u5206\u652f\u6216\u6807\u7b7e\u521b\u5efa\u65b0\u5206\u652f\ngit branch <branchname> <commit-id>\n\n# \u65b0\u5efa\u4e00\u4e2a\u5206\u652f\uff0c\u4e0e\u6307\u5b9a\u7684\u8fdc\u7a0b\u5206\u652f\u5efa\u7acb\u8ffd\u8e2a\u5173\u7cfb\ngit branch --track <branch-name> <remote-branch>",lang:"bash"}),r.a.createElement("h3",{id:"\u5173\u8054\u8fdc\u7a0b\u5206\u652f"},r.a.createElement(o["AnchorLink"],{to:"#\u5173\u8054\u8fdc\u7a0b\u5206\u652f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5173\u8054\u8fdc\u7a0b\u5206\u652f"),r.a.createElement("p",null,"\u5173\u8054\u4e4b\u540e\uff0c",r.a.createElement("code",null,"git branch -vv")," \u5c31\u53ef\u4ee5\u5c55\u793a\u5173\u8054\u7684\u8fdc\u7a0b\u5206\u652f\u540d\u4e86\uff0c\u540c\u65f6\u63a8\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93\u3002"),r.a.createElement(c["a"],{code:"git branch -u <branch-name>",lang:"bash"}),r.a.createElement("p",null,"\u6216\u8005\u5728 ",r.a.createElement("code",null,"git push")," \u65f6\u52a0\u4e0a\u53c2\u6570 ",r.a.createElement("code",null,"-u")," \u53c2\u6570\u3002"),r.a.createElement(c["a"],{code:"git push -u origin/<branch-name>\ngit push --set-upstream origin/<branch-name>",lang:"bash"}),r.a.createElement("h2",{id:"\u5207\u6362\u5206\u652f"},r.a.createElement(o["AnchorLink"],{to:"#\u5207\u6362\u5206\u652f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5207\u6362\u5206\u652f"),r.a.createElement("p",null,"\u5207\u6362\u5230\u6307\u5b9a\u5206\u652f\u3002",r.a.createElement("code",null,"<branch-name>")," \u4e3a\u5207\u6362\u5230\u7684\u76ee\u6807\u5206\u652f\u3002"),r.a.createElement(c["a"],{code:"git checkout <branch-name>",lang:"bash"}),r.a.createElement("h2",{id:"\u4fee\u6539\u5206\u652f"},r.a.createElement(o["AnchorLink"],{to:"#\u4fee\u6539\u5206\u652f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4fee\u6539\u5206\u652f"),r.a.createElement("p",null,"\u4fee\u6539\u6307\u5b9a\u5206\u652f\u540d\u79f0\u3002",r.a.createElement("code",null,"<branch-name>")," \u4e3a\u6307\u5b9a\u5206\u652f\u65b0\u540d\u79f0\u3002",r.a.createElement("code",null,"-m")," \u5373 ",r.a.createElement("code",null,"--move")," \u8868\u793a\u79fb\u52a8\u6216\u91cd\u547d\u540d\u548c\u76f8\u5e94\u7684\u5f15\u7528\u65e5\u5fd7\u3002"),r.a.createElement(c["a"],{code:"# \u4fee\u6539\u6307\u5b9a\u5206\u652f\u540d\u79f0\ngit branch -m <old_name> <new_name>",lang:"bash"}),r.a.createElement("h2",{id:"\u5220\u9664\u5206\u652f"},r.a.createElement(o["AnchorLink"],{to:"#\u5220\u9664\u5206\u652f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5220\u9664\u5206\u652f"),r.a.createElement("h3",{id:"\u5220\u9664\u672c\u5730\u5206\u652f"},r.a.createElement(o["AnchorLink"],{to:"#\u5220\u9664\u672c\u5730\u5206\u652f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5220\u9664\u672c\u5730\u5206\u652f"),r.a.createElement(c["a"],{code:"git branch -d <local-branch-name>",lang:"bash"}),r.a.createElement("h3",{id:"\u5220\u9664\u8fdc\u7a0b\u5206\u652f"},r.a.createElement(o["AnchorLink"],{to:"#\u5220\u9664\u8fdc\u7a0b\u5206\u652f","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5220\u9664\u8fdc\u7a0b\u5206\u652f"),r.a.createElement(c["a"],{code:"# \u8bed\u6cd5\ngit push origin --delete <branch-name>\n\ngit branch -dr [remote/branch]\n\n# \u793a\u4f8b\uff1a\u5220\u9664\u8fdc\u7a0b\u5206\u652f feature/test\ngit push origin --delete feature/test\n\ngit branch -dr origin/branchA\n\n# \u5220\u9664\u540e\u63a8\u9001\u81f3\u8fdc\u7a0b\u4ed3\u5e93\ngit push origin:<branchname>",lang:"bash"})))}));t["default"]=e=>{var t=r.a.useContext(o["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(l,{demos:n})}},qHiR:function(e,t,n){},rVZW:function(e,t,n){}}]);