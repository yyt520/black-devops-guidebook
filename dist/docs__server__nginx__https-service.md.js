(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[113],{"6T1g":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("SVOR"),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s=l,i={Prism:o["a"],theme:s};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}var u=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e){var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,s=[],i=[s];while(l>-1){while((o=r[l]++)<a[l]){var c=void 0,p=t[l],h=n[l],y=h[o];if("string"===typeof y?(p=l>0?p:["plain"],c=y):(p=d(p,y.type),y.alias&&(p=d(p,y.alias)),c=y.content),"string"===typeof c){var f=c.split(u),g=f.length;s.push({types:p,content:f[0]});for(var v=1;v<g;v++)m(s),i.push(s=[]),s.push({types:p,content:f[v]})}else l++,t.push(p),n.push(c),r.push(0),a.push(c.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return m(s),i},y=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=p({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=p({},n,{backgroundColor:null}),a};function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var g=function(e){function t(){var t=this,n=[],r=arguments.length;while(r--)n[r]=arguments[r];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=f(e,["key","className","style","line"]),l=o,s=p({},l,{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(s.style=i.plain),void 0!==a&&(s.style=void 0!==s.style?p({},s.style,a):a),void 0!==n&&(s.key=n),r&&(s.className+=" "+r),s})),c(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},s=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(s))}})),c(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=f(e,["key","className","style","token"]),s=l,i=p({},s,{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(i.style=void 0!==i.style?p({},i.style,a):a),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),c(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n],s=void 0!==l?this.tokenize(t,r,l,n):[r],i=h(s);return a({tokens:i,className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r["Component"]),v=g,E=n("dEAq");n("qHiR"),n("rVZW");function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}function b(e,t){return L(e)||T(e,t)||_(e,t)||w()}function w(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _(e,t){if(e){if("string"===typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,s=!1;try{for(n=n.call(e);!(l=(r=n.next()).done);l=!0)if(o.push(r.value),t&&o.length===t)break}catch(i){s=!0,a=i}finally{try{l||null==n["return"]||n["return"]()}finally{if(s)throw a}}return o}}function L(e){if(Array.isArray(e))return e}var S={acss:"css",axml:"xml"};t["a"]=function(e){var t=e.code,n=e.lang,r=e.showCopy,o=void 0===r||r,l=Object(E["useCopy"])(),s=b(l,2),c=s[0],p=s[1];return a.a.createElement("div",{className:"__dumi-default-code-block"},a.a.createElement(v,k({},i,{code:t,language:S[n]||n,theme:void 0}),(function(e){var n=e.className,r=e.style,l=e.tokens,s=e.getLineProps,i=e.getTokenProps;return a.a.createElement("pre",{className:n,style:r},o&&a.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":p,onClick:function(){return c(t)}}),l.map((function(e,t){return a.a.createElement("div",s({line:e,key:t}),e.map((function(e,t){return a.a.createElement("span",i({token:e,key:t}))})))})))})))}},jVTz:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("dEAq"),l=n("6T1g"),s=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"https-\u670d\u52a1"},a.a.createElement(o["AnchorLink"],{to:"#https-\u670d\u52a1","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"HTTPS \u670d\u52a1"),a.a.createElement("p",null,"\u5982\u679c\u4e0d\u4f7f\u7528 HTTPS \u670d\u52a1\uff1a"),a.a.createElement("ul",null,a.a.createElement("li",null,"\u4f20\u8f93\u6570\u636e\u4f1a\u88ab\u4e2d\u95f4\u4eba\u76d7\u7528\uff0c\u4fe1\u606f\u6cc4\u6f0f"),a.a.createElement("li",null,"\u6570\u636e\u5185\u5bb9\u52ab\u6301\u3001\u7be1\u6539")),a.a.createElement("h2",{id:"\u5f3a\u5236\u8df3\u8f6c"},a.a.createElement(o["AnchorLink"],{to:"#\u5f3a\u5236\u8df3\u8f6c","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5f3a\u5236\u8df3\u8f6c"),a.a.createElement("h3",{id:"\u65e0-www-\u8df3\u8f6c\u81f3\u6709-www"},a.a.createElement(o["AnchorLink"],{to:"#\u65e0-www-\u8df3\u8f6c\u81f3\u6709-www","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u65e0 www \u8df3\u8f6c\u81f3\u6709 www"),a.a.createElement(l["a"],{code:"server {\n    listen 80;\n    server_name example.com;\n\n    return 301 http://www.example.com$request_uri;\n}\n\nserver {\n    listen 80;\n    server_name www.example.com;\n\n    location / {\n        proxy_pass          http://localhost:8080;\n        proxy_set_header    X-Forwared-Proto    $scheme;\n        proxy_set_header    Host                $host;\n        proxy_set_header    X-Real-IP           $remote_addr;\n    }\n}",lang:"nginx"}),a.a.createElement("h4",{id:"http-\u8df3\u8f6c\u81f3-https"},a.a.createElement(o["AnchorLink"],{to:"#http-\u8df3\u8f6c\u81f3-https","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"HTTP \u8df3\u8f6c\u81f3 HTTPS"),a.a.createElement("p",null,"HTTP \u9ed8\u8ba4\u7aef\u53e3\u5f3a\u5236\u8df3\u8f6c HTTPS \u914d\u7f6e"),a.a.createElement(l["a"],{code:"server {\n    listen 80;\n\n    location / {\n        return 301 https://$host$request_uri;\n    }\n}\n\nserver {\n    listen 443 ssl;\n}",lang:"nginx"}),a.a.createElement("h2",{id:"\u57fa\u672c\u914d\u7f6e"},a.a.createElement(o["AnchorLink"],{to:"#\u57fa\u672c\u914d\u7f6e","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u914d\u7f6e"),a.a.createElement(l["a"],{code:"server {\n    listen  80;\n    listen  443 ssl http2 default_server;\n\n    # \u516c\u94a5\uff0c\u53d1\u9001\u5230\u8fde\u63a5\u670d\u52a1\u5668\u7684\u5ba2\u6237\u7aef\n    ssl_certificate         cert/example.com.pem;\n    # \u79c1\u94a5\uff0c\u6743\u9650\u8981\u5f97\u5230\u4fdd\u62a4\u4f46 Nginx \u7684\u4e3b\u8fdb\u7a0b\u80fd\u591f\u8bfb\u53d6\n    ssl_certificate_key     cert/example.com.key;\n    # \u8bbe\u7f6e SSL/TLS \u4f1a\u8bdd\u7f13\u5b58\u7684\u7c7b\u578b\u548c\u5927\u5c0f\n    ssl_session_cache       shared:SSL:10m;\n    # \u5ba2\u6237\u7aef\u53ef\u4ee5\u91cd\u7528\u4f1a\u8bdd\u7f13\u5b58\u4e2d SSL \u53c2\u6570\u7684\u8fc7\u671f\u65f6\u95f4\n    ssl_session_timeout     10m;\n\n    ssl_protocols               SSLv2 TLSv1 TLSv1.1 TLSv1.2;\n    ssl_ciphers                 ECDHE-RSA-AES256-SHA384:AES256-SHA256:RC4:HIGH:!MD5:!aNULL:!eNULL:!NULL:!DH:!EDH:!AESGCM;\n    ssl_prefer_server_ciphers   on;\n\n    server_name m.example.com;\n\n    location /test/ {\n        proxy_pass      https://h5.example.com;\n        rewrite /test/(.*) /$1 break;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    }\n\n    location / {\n        proxy_pass          https://m.example.com;\n        proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;\n    }\n\n    access_log /var/log/nginx/example.access.log main;\n}",lang:"nginx"}),a.a.createElement("hr",null),a.a.createElement("p",null,a.a.createElement("strong",null,"\u53c2\u8003\u8d44\u6599\uff1a")),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(o["Link"],{to:"https://blog.timeliar.com/2017/03/11/%E4%BD%BF%E7%94%A8Let-s-Encrypt%E7%AD%BE%E7%BD%B2%E5%85%8D%E8%B4%B9SSL%E8%AF%81%E4%B9%A6/"},"\u4f7f\u7528 Let's Encrypt \u7b7e\u7f72\u514d\u8d39 SSL \u8bc1\u4e66")),a.a.createElement("li",null,a.a.createElement(o["Link"],{to:"https://juejin.im/post/5d969a696fb9a04e046bb8e5"},"\u514d\u8d39\u7533\u8bf7 HTTPS \u8bc1\u4e66\uff0c\u5f00\u542f\u5168\u7ad9 HTTPS")),a.a.createElement("li",null,a.a.createElement(o["Link"],{to:"https://deadlion.cn/2016/09/28/Let%27s-Encrypt/"},"Let's Encrypt \u521d\u4f53\u9a8c")),a.a.createElement("li",null,a.a.createElement(o["Link"],{to:"https://blog.csdn.net/t6546545/article/details/80508554"},"\u670d\u52a1\u5668\u914d\u7f6e HTTPS \u534f\u8bae\uff0c\u4e09\u79cd\u514d\u8d39\u7684\u65b9\u6cd5")),a.a.createElement("li",null,a.a.createElement(o["Link"],{to:"https://www.jianshu.com/p/a0c81ae14adc"},"CentOS 7 \u4e0b\u7ed9 \u901a\u8fc7 Certbot \u5feb\u901f\u90e8\u7f72 HTTPS \u8bc1\u4e66")),a.a.createElement("li",null,a.a.createElement(o["Link"],{to:"https://blog.csdn.net/weixin_43064185/article/details/104971719"},"\u6559\u4f60\u5728 Nginx \u4e0a\u4f7f\u7528 CertBot \u628a\u81ea\u5df1\u7f51\u7ad9\u8bbe\u7f6e\u6210 HTTPS")),a.a.createElement("li",null,a.a.createElement(o["Link"],{to:"https://www.4spaces.org/certbot-command-line-tool-usage-document/"},"Certbot \u547d\u4ee4\u884c\u5de5\u5177\u4f7f\u7528\u8bf4\u660e")),a.a.createElement("li",null,a.a.createElement(o["Link"],{to:"https://certbot.eff.org/lets-encrypt/centosrhel7-nginx"},"Certbot - Centosrhel7 Nginx")))))}));t["default"]=e=>{var t=a.a.useContext(o["context"]),n=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(s,{demos:n})}},qHiR:function(e,t,n){},rVZW:function(e,t,n){}}]);