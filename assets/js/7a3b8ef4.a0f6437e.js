"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[5419],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},s=Object.keys(e);for(l=0;l<s.length;l++)n=s[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)n=s[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=l.createContext({}),i=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=i(e.components);return l.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=i(n),m=r,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return n?l.createElement(b,a(a({ref:t},p),{},{components:n})):l.createElement(b,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var i=2;i<s;i++)a[i]=n[i];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2084:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return d}});var l=n(7462),r=n(3366),s=(n(7294),n(3905)),a=["components"],o={title:"Selectors (CSS)",description:"An overview of CSS selectors and how to combine them",last_modified:new Date("2020-05-30T13:54:15.000Z"),sidebar_label:"Selectors"},c=void 0,i={unversionedId:"web/css/selectors",id:"web/css/selectors",title:"Selectors (CSS)",description:"An overview of CSS selectors and how to combine them",source:"@site/docs/web/css/selectors.md",sourceDirName:"web/css",slug:"/web/css/selectors",permalink:"/interview-prep/about/web/css/selectors",draft:!1,tags:[],version:"current",frontMatter:{title:"Selectors (CSS)",description:"An overview of CSS selectors and how to combine them",last_modified:"2020-05-30T13:54:15.000Z",sidebar_label:"Selectors"},sidebar:"docs",previous:{title:"Sass/SCSS",permalink:"/interview-prep/about/web/css/sass-scss"},next:{title:"Units",permalink:"/interview-prep/about/web/css/units"}},p={},d=[{value:"Selector types",id:"selector-types",level:2},{value:"Type selector",id:"type-selector",level:3},{value:"Universal selector",id:"universal-selector",level:3},{value:"Class selector",id:"class-selector",level:3},{value:"ID selector",id:"id-selector",level:3},{value:"Attribute selector",id:"attribute-selector",level:3},{value:"Pseudo-class selector",id:"pseudo-class-selector",level:3},{value:"Pseudo-element selector",id:"pseudo-element-selector",level:3},{value:"Combining selectors",id:"combining-selectors",level:2},{value:"Selector lists using <code>,</code>",id:"selector-lists-using-",level:3},{value:"Same-element combinations",id:"same-element-combinations",level:3},{value:"Descendant combinator",id:"descendant-combinator",level:3},{value:"Child combinator",id:"child-combinator",level:3},{value:"Adjacent sibling combinator",id:"adjacent-sibling-combinator",level:3},{value:"General sibling combinator",id:"general-sibling-combinator",level:3},{value:"Resources",id:"resources",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"An overview of CSS selectors and how to combine them"),(0,s.kt)("h2",{id:"selector-types"},"Selector types"),(0,s.kt)("h3",{id:"type-selector"},"Type selector"),(0,s.kt)("p",null,"Selects based on HTML element type"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"h1 {\n    color: red;\n}\n")),(0,s.kt)("h3",{id:"universal-selector"},"Universal selector"),(0,s.kt)("p",null,"Selects all elements"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"* {\n    color: red;\n}\n")),(0,s.kt)("h3",{id:"class-selector"},"Class selector"),(0,s.kt)("p",null,"Selects elements based on class"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},".error-text {\n    color: red;\n}\n")),(0,s.kt)("h3",{id:"id-selector"},"ID selector"),(0,s.kt)("p",null,"Selects elements based on ID"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"#main-text {\n    color: black;\n}\n")),(0,s.kt)("h3",{id:"attribute-selector"},"Attribute selector"),(0,s.kt)("p",null,"Select elements based on attributes"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"[disabled] {\n    color: red;\n}\n")),(0,s.kt)("h3",{id:"pseudo-class-selector"},"Pseudo-class selector"),(0,s.kt)("p",null,"Selects elements that are in a specific state"),(0,s.kt)("p",null,"Typically combined with other selectors (see also below)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"a:hover {\n    color: red;\n}   \n")),(0,s.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#Index_of_standard_pseudo-classes",target:"_blank",rel:"nofollow noopener noreferrer"},"Pseudo-classes reference ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"}))),(0,s.kt)("p",null,"Special case: the ",(0,s.kt)("strong",{parentName:"p"},"negation pseudo-class")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"/* matches any element that is not a paragraph */\n:not(p) {\n  color: blue;\n}\n")),(0,s.kt)("h3",{id:"pseudo-element-selector"},"Pseudo-element selector"),(0,s.kt)("p",null,"Selects specific part of an element"),(0,s.kt)("p",null,"Typically combined with other selectors"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"p::first-line {\n  text-transform: uppercase;\n}\n")),(0,s.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements#Index_of_standard_pseudo-elements",target:"_blank",rel:"nofollow noopener noreferrer"},"Pseudo-elements reference ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"}))),(0,s.kt)("h2",{id:"combining-selectors"},"Combining selectors"),(0,s.kt)("h3",{id:"selector-lists-using-"},"Selector lists using ",(0,s.kt)("inlineCode",{parentName:"h3"},",")),(0,s.kt)("p",null,"No effect other than reducing code duplication"),(0,s.kt)("p",null,"Example: before"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"h1 { \n  color: blue; \n} \n\n.special { \n  color: blue; \n} \n")),(0,s.kt)("p",null,"Example: after"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"h1, .special { \n  color: blue; \n} \n")),(0,s.kt)("h3",{id:"same-element-combinations"},"Same-element combinations"),(0,s.kt)("p",null,"Combine multiple selectors that all need to apply to the same element"),(0,s.kt)("p",null,"Example: select all hyperlinks with class ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," that the user hovers over"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"a.test:hover {\n    color: red;\n}\n")),(0,s.kt)("h3",{id:"descendant-combinator"},"Descendant combinator"),(0,s.kt)("p",null,"Typically represented by a single space (",(0,s.kt)("inlineCode",{parentName:"p"}," "),") character"),(0,s.kt)("p",null,"Elements matched by the second selector are selected if they have an ancestor matching the first selector"),(0,s.kt)("p",null,"Example: select all spans that are directly or indirectly inside a div with class test"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"div.test span {\n    color: red;\n}\n")),(0,s.kt)("h3",{id:"child-combinator"},"Child combinator"),(0,s.kt)("p",null,"Represented by the ",(0,s.kt)("inlineCode",{parentName:"p"},">")," sign"),(0,s.kt)("p",null,"Same as descendant combinator, but only considers the direct parent of an element"),(0,s.kt)("p",null,"Example: select all spans that are a direct child of a div with class test"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"div.test > span {\n    color: red;\n}\n")),(0,s.kt)("h3",{id:"adjacent-sibling-combinator"},"Adjacent sibling combinator"),(0,s.kt)("p",null,"Represented by the ",(0,s.kt)("inlineCode",{parentName:"p"},"+")," sign"),(0,s.kt)("p",null,"Matches an element matching the second selector if that element immediately follows an element matching the first selector and they both have the same parent"),(0,s.kt)("p",null,"Example: select all paragraphs that immediately follow an image"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"img + p {\n  color: red;\n}\n")),(0,s.kt)("h3",{id:"general-sibling-combinator"},"General sibling combinator"),(0,s.kt)("p",null,"Represented by the ",(0,s.kt)("inlineCode",{parentName:"p"},"~")," sign"),(0,s.kt)("p",null,"Matches an element matching the second selector if that element follows an element matching the first selector (but not necessarily immediately) and they both have the same parent"),(0,s.kt)("p",null,"Example: select paragraphs that come after any image with the same parent"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"img ~ p {\n  color: red;\n}\n")),(0,s.kt)("h2",{id:"resources"},"Resources"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{href:"https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/",target:"_blank",rel:"nofollow noopener noreferrer"},"CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass) ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"})))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors",target:"_blank",rel:"nofollow noopener noreferrer"},"CSS selectors ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"}))))))}m.isMDXComponent=!0}}]);