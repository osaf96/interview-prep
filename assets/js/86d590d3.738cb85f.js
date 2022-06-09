"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[7002],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,d=m["".concat(s,".").concat(u)]||m[u]||f[u]||i;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6373:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Flexbox (CSS)",description:"The main idea of CSS Flexbox",last_modified:new Date("2022-01-31T10:44:35.361Z"),sidebar_label:"Flexbox"},s=void 0,c={unversionedId:"web/css/flexbox",id:"web/css/flexbox",title:"Flexbox (CSS)",description:"The main idea of CSS Flexbox",source:"@site/docs/web/css/flexbox.md",sourceDirName:"web/css",slug:"/web/css/flexbox",permalink:"/interview-prep/about/web/css/flexbox",draft:!1,tags:[],version:"current",frontMatter:{title:"Flexbox (CSS)",description:"The main idea of CSS Flexbox",last_modified:"2022-01-31T10:44:35.361Z",sidebar_label:"Flexbox"},sidebar:"docs",previous:{title:"Browser compatibility",permalink:"/interview-prep/about/web/css/browser-compatibility"},next:{title:"Grids",permalink:"/interview-prep/about/web/css/grids"}},p={},f=[{value:"Basic idea",id:"basic-idea",level:2},{value:"Sizing of flex items",id:"sizing-of-flex-items",level:2},{value:"Alignment of flex items",id:"alignment-of-flex-items",level:2},{value:"Wrapping",id:"wrapping",level:2},{value:"Use cases",id:"use-cases",level:2},{value:"Resources",id:"resources",level:2}],m={toc:f};function u(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The main idea of CSS Flexbox"),(0,i.kt)("h2",{id:"basic-idea"},"Basic idea"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Flex model",src:n(2629).Z,width:"563",height:"333"})),(0,i.kt)("p",null,"(",(0,i.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox",target:"_blank",rel:"nofollow noopener noreferrer"},"image source ",(0,i.kt)("svg",{class:"embedded-fa-icon"},(0,i.kt)("use",{href:"#external-link-alt"}))),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Flex container")," = parent element with ",(0,i.kt)("inlineCode",{parentName:"li"},"display: flex")),(0,i.kt)("li",{parentName:"ul"},"Children of container = ",(0,i.kt)("strong",{parentName:"li"},"flex items")," (their size and position is determined by flexbox)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Main axis"),"  = direction in which the chldren of the container are laid out",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Horizontal if container has ",(0,i.kt)("inlineCode",{parentName:"li"},"flex-direction: row;")),(0,i.kt)("li",{parentName:"ul"},"Vertical if container has ",(0,i.kt)("inlineCode",{parentName:"li"},"flex-direction: column;")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cross axis")," = direction perpendicular to main axis"),(0,i.kt)("li",{parentName:"ul"},"Note: Flexbox is mainly suitable when you want your items to adjust their sizes to their container along a single direction (either horizontally or vertically). If both horizontal and vertical sizing is important to you, ",(0,i.kt)("a",{parentName:"li",href:"/web/css/grids"},"Grids")," may be a better option.")),(0,i.kt)("h2",{id:"sizing-of-flex-items"},"Sizing of flex items"),(0,i.kt)("p",null,"You can control the sizing of flex items along the main axis by setting their ",(0,i.kt)("inlineCode",{parentName:"p"},"flex")," property (see ",(0,i.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex",target:"_blank",rel:"nofollow noopener noreferrer"},"flex ",(0,i.kt)("svg",{class:"embedded-fa-icon"},(0,i.kt)("use",{href:"#external-link-alt"})))," for a bit more details)"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"flex")," property can have up to 3 values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Flex grow: a unitless proportion that indicates the extent to which the item will grow with its container"),(0,i.kt)("li",{parentName:"ul"},"Flex shrink: a unitless proportion that indicates the extent to which the item will shrink (if needed) to fit the container"),(0,i.kt)("li",{parentName:"ul"},"Flex basis: the minimum size of the item")),(0,i.kt)("h2",{id:"alignment-of-flex-items"},"Alignment of flex items"),(0,i.kt)("p",null,"Alignment along the main axis: ",(0,i.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content",target:"_blank",rel:"nofollow noopener noreferrer"},"justify-content ",(0,i.kt)("svg",{class:"embedded-fa-icon"},(0,i.kt)("use",{href:"#external-link-alt"})))," (set at the level of the container)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flex-start")," (default): make items sit towards the start of the main axis"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flex-end"),": make items sit towards the endof the main axis"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"center"),": make items sit towards the center of the main axis"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"space-around"),": evenly distribute items (same amount of spacing between adjacent items) and leave half of that spacing at the start and end of the main axis"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"space-between"),": evenly distribute items (same amount of spacing between adjacent items), without any spacing at the start and end of the main axis",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Simple use case: two elements, one sticking to the left side of the container and one sticking to the right side of the container")))),(0,i.kt)("p",null,"Alingment along the cross axis: ",(0,i.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",target:"_blank",rel:"nofollow noopener noreferrer"},"align-items ",(0,i.kt)("svg",{class:"embedded-fa-icon"},(0,i.kt)("use",{href:"#external-link-alt"})))," (set at the level of the container, can override at the item level using ",(0,i.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/align-self",target:"_blank",rel:"nofollow noopener noreferrer"},"align-self ",(0,i.kt)("svg",{class:"embedded-fa-icon"},(0,i.kt)("use",{href:"#external-link-alt"}))),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stretch")," (default): make items fill the parent along the cross axis"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"center"),": center items along the cross axis"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flex-start")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"flex-end"),": start or end of cross axis")),(0,i.kt)("h2",{id:"wrapping"},"Wrapping"),(0,i.kt)("p",null,"You can make your items wrap to a new row/column as necessary using ",(0,i.kt)("inlineCode",{parentName:"p"},"flex-wrap: wrap;")," on the container"),(0,i.kt)("h2",{id:"use-cases"},"Use cases"),(0,i.kt)("p",null,"Some use cases for Flexbox:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vertical centering"),(0,i.kt)("li",{parentName:"ul"},"Sticky footer (sticks to bottom of screen if content doesn't fill screen)"),(0,i.kt)("li",{parentName:"ul"},"Make an element take up all of the vertical space that is not yet taken up by other elements"),(0,i.kt)("li",{parentName:"ul"},"Make the children of a container scale along with the size of the container"),(0,i.kt)("li",{parentName:"ul"},"Show the children of a container side-by-side and make them have the same height, even if their content doesn't take up the same height")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/",target:"_blank",rel:"nofollow noopener noreferrer"},"CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass) ",(0,i.kt)("svg",{class:"embedded-fa-icon"},(0,i.kt)("use",{href:"#external-link-alt"})))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox",target:"_blank",rel:"nofollow noopener noreferrer"},"Flexbox ",(0,i.kt)("svg",{class:"embedded-fa-icon"},(0,i.kt)("use",{href:"#external-link-alt"})))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex",target:"_blank",rel:"nofollow noopener noreferrer"},"flex ",(0,i.kt)("svg",{class:"embedded-fa-icon"},(0,i.kt)("use",{href:"#external-link-alt"})))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://philipwalton.github.io/solved-by-flexbox/",target:"_blank",rel:"nofollow noopener noreferrer"},"Solved by Flexbox ",(0,i.kt)("svg",{class:"embedded-fa-icon"},(0,i.kt)("use",{href:"#external-link-alt"}))))))}u.isMDXComponent=!0},2629:function(e,t,n){t.Z=n.p+"assets/images/flex-model-566f4861b4326d52756fca15bd2b6b5e.png"}}]);