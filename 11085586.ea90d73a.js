(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{144:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return l})),t.d(r,"metadata",(function(){return a})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return b}));var n=t(1),o=t(9),i=(t(0),t(232)),l={title:"Browser compatibility (CSS)",description:"Making sure your CSS works in different browsers",last_modified:new Date("2022-01-27T17:10:03.020Z"),sidebar_label:"Browser compatibility"},a={id:"web/css/browser-compatibility",title:"Browser compatibility (CSS)",description:"Making sure your CSS works in different browsers",source:"@site/docs\\web\\css\\browser-compatibility.md",permalink:"/interview-prep/web/css/browser-compatibility",sidebar_label:"Browser compatibility",sidebar:"docs",previous:{title:"Box model (CSS)",permalink:"/interview-prep/web/css/box-model"},next:{title:"Flexbox (CSS)",permalink:"/interview-prep/web/css/flexbox"}},s=[{value:"Eliminating inconsistencies",id:"eliminating-inconsistencies",children:[]},{value:"Checking which browsers support certain functionality",id:"checking-which-browsers-support-certain-functionality",children:[]},{value:"Support queries",id:"support-queries",children:[]},{value:"Vendor prefixes",id:"vendor-prefixes",children:[]},{value:"Polyfills",id:"polyfills",children:[]},{value:"Testing in different browsers",id:"testing-in-different-browsers",children:[]},{value:"Resources",id:"resources",children:[]}],c={rightToc:s};function b(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Making sure your CSS works in different browsers"),Object(i.b)("h2",{id:"eliminating-inconsistencies"},"Eliminating inconsistencies"),Object(i.b)("p",null,"Problem: Different browsers use different defaults for how elements should look like"),Object(i.b)("p",null,"Solution: ",Object(i.b)("strong",{parentName:"p"},"CSS reset"),' stylesheet that overrides browser defaults by some sensible values and provides a "clean slate" for your CSS to build upon'),Object(i.b)("p",null,"Example: ",Object(i.b)("a",{href:"https://necolas.github.io/normalize.css/",target:"_blank",rel:"nofollow noopener noreferrer"},"Normalize.css ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"})))),Object(i.b)("h2",{id:"checking-which-browsers-support-certain-functionality"},"Checking which browsers support certain functionality"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Can use ",Object(i.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",target:"_blank",rel:"nofollow noopener noreferrer"},"MDN ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"}))),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Example: ",Object(i.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns#Browser_compatibility",target:"_blank",rel:"nofollow noopener noreferrer"},"compatibility for grid-template-columns ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"})))))),Object(i.b)("li",{parentName:"ul"},"Can use ",Object(i.b)("a",{href:"https://caniuse.com/",target:"_blank",rel:"nofollow noopener noreferrer"},"Can I Use ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"}))),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Example: ",Object(i.b)("a",{href:"https://caniuse.com/#feat=mdn-css_properties_grid-template-columns",target:"_blank",rel:"nofollow noopener noreferrer"},"compatibility for grid-template-columns ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"}))))))),Object(i.b)("h2",{id:"support-queries"},"Support queries"),Object(i.b)("p",null,"Can be used to conditionally apply CSS only if the browser supports certain functionality"),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),"@supports (display: grid) {\n    .container {\n        display: grid;\n        /* other grid properties */\n    }\n}\n")),Object(i.b)("h2",{id:"vendor-prefixes"},"Vendor prefixes"),Object(i.b)("p",null,"Different browsers implement new features differently and at different speeds"),Object(i.b)("p",null,"Vendor prefixes: browser-specific (or rendering-engine-specific) prefixes on properties or values that trigger a browser-specific (or rendering-engine-specific) version of the feature"),Object(i.b)("p",null,"Goals:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Allow developers to make use of new features before they are standardized"),Object(i.b)("li",{parentName:"ul"},"When the features become standardized, it is still possible to get the old non-standard behaviors by using the prefixes (don't break behavior for early adopters that depend on some specific non-standard behavior)"),Object(i.b)("li",{parentName:"ul"},"By including the vendor prefixes next to the normal properties/values for a standardized feature, you can still support older browser versions in which the feature was not yet standardized")),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),".container {\n    /* last one supported by current browser wins */\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n}\n")),Object(i.b)("p",null,"You can also automatically include vendor prefixes by using a tool like ",Object(i.b)("a",{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"nofollow noopener noreferrer"},"Autoprefixer ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"})))),Object(i.b)("h2",{id:"polyfills"},"Polyfills"),Object(i.b)("p",null,"Polyfill = JavaScript that enables certain features in browsers that would not support them otherwise"),Object(i.b)("p",null,"Can be useful, but polyfills come at a cost (loading + execution time)"),Object(i.b)("p",null,"Also, it is pretty much impossible to create a CSS polyfill that is not either big, slow or doesn't behave the way it should in all cases. See ",Object(i.b)("a",{href:"https://philipwalton.com/articles/the-dark-side-of-polyfilling-css/",target:"_blank",rel:"nofollow noopener noreferrer"},"The Dark Side of Polyfilling CSS ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"}))),"."),Object(i.b)("h2",{id:"testing-in-different-browsers"},"Testing in different browsers"),Object(i.b)("p",null,"Useful tool: ",Object(i.b)("a",{href:"https://www.browserstack.com/",target:"_blank",rel:"nofollow noopener noreferrer"},"BrowserStack ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"})))," (or one of its many alternatives)"),Object(i.b)("h2",{id:"resources"},"Resources"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/",target:"_blank",rel:"nofollow noopener noreferrer"},"CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass) ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"})))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers",target:"_blank",rel:"nofollow noopener noreferrer"},"Supporting older browsers ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"}))))))}b.isMDXComponent=!0},232:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),b=function(e){var r=o.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a({},r,{},e)),t},p=function(e){var r=b(e.components);return o.a.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(t),f=n,d=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return t?o.a.createElement(d,a({ref:r},c,{components:t})):o.a.createElement(d,a({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=f;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);