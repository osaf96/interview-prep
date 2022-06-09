(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{201:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var i=n(1),o=n(9),a=(n(0),n(231)),l={title:"Positioning (CSS)",description:"Positioning elements using CSS",last_modified:new Date("2020-05-30T13:54:15.000Z"),sidebar_label:"Positioning"},r={id:"web/css/positioning",title:"Positioning (CSS)",description:"Positioning elements using CSS",source:"@site/docs\\web\\css\\positioning.md",permalink:"/web/css/positioning",sidebar_label:"Positioning",sidebar:"docs",previous:{title:"Naming classes (CSS)",permalink:"/web/css/naming-classes"},next:{title:"Responsive design (CSS)",permalink:"/web/css/responsive-design"}},s=[{value:"Basic idea",id:"basic-idea",children:[]},{value:"Positioning types",id:"positioning-types",children:[{value:"Static positioning",id:"static-positioning",children:[]},{value:"Relative positioning",id:"relative-positioning",children:[]},{value:"Absolute positioning",id:"absolute-positioning",children:[]},{value:"Fixed positioning",id:"fixed-positioning",children:[]},{value:"Sticky positioning",id:"sticky-positioning",children:[]}]},{value:"An element&#39;s containing block",id:"an-elements-containing-block",children:[]},{value:"Extra: z-index",id:"extra-z-index",children:[]},{value:"Resources",id:"resources",children:[]}],b={rightToc:s};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Positioning elements using CSS"),Object(a.b)("h2",{id:"basic-idea"},"Basic idea"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Allows taking elements out of normal document flow",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Example: one element on top of another"),Object(a.b)("li",{parentName:"ul"},"Example: element remaining in same place when user scrolls the page"))),Object(a.b)("li",{parentName:"ul"},"Controlled through ",Object(a.b)("inlineCode",{parentName:"li"},"position")," property"),Object(a.b)("li",{parentName:"ul"},"Note: For creating entire layouts, Flexbox and the CSS Grid are likely better options")),Object(a.b)("h2",{id:"positioning-types"},"Positioning types"),Object(a.b)("h3",{id:"static-positioning"},"Static positioning"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default positioning type"),Object(a.b)("li",{parentName:"ul"},'"let the element take its normal position in the document"')),Object(a.b)("h3",{id:"relative-positioning"},"Relative positioning"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default placement same as static positioning"),Object(a.b)("li",{parentName:"ul"},"Same effect on surrounding elements as static positioning (still takes the same amount of space in the same location)"),Object(a.b)("li",{parentName:"ul"},"Can adjust position ",Object(a.b)("strong",{parentName:"li"},"relative to default placement")," using the ",Object(a.b)("inlineCode",{parentName:"li"},"top"),", ",Object(a.b)("inlineCode",{parentName:"li"},"bottom"),", ",Object(a.b)("inlineCode",{parentName:"li"},"left")," and ",Object(a.b)("inlineCode",{parentName:"li"},"right")," properties",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Indicate the element being pushed away from its normal position"),Object(a.b)("li",{parentName:"ul"},"Example: ",Object(a.b)("inlineCode",{parentName:"li"},"top: 30px;")," will make the element sit 30px lower than its default position"),Object(a.b)("li",{parentName:"ul"},"These properties do not change the effect the element has on its surrounding elements!"),Object(a.b)("li",{parentName:"ul"},"Can be used to make the element overlap with surrounding elements")))),Object(a.b)("h3",{id:"absolute-positioning"},"Absolute positioning"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"No longer part of normal document flow!",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Does not push surrounding elements away"),Object(a.b)("li",{parentName:"ul"},"Exists in its own layer, separate from other elements"))),Object(a.b)("li",{parentName:"ul"},"Can adjust position ",Object(a.b)("strong",{parentName:"li"},"relative to sides of ",Object(a.b)("a",Object(i.a)({parentName:"strong"},{href:"#an-elements-containing-block"}),"containing block"))," using the ",Object(a.b)("inlineCode",{parentName:"li"},"top"),", ",Object(a.b)("inlineCode",{parentName:"li"},"bottom"),", ",Object(a.b)("inlineCode",{parentName:"li"},"left")," and ",Object(a.b)("inlineCode",{parentName:"li"},"right")," properties",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Containing block: see below"),Object(a.b)("li",{parentName:"ul"},"Indicate the element being pushes away from the sides of the containing block"),Object(a.b)("li",{parentName:"ul"},"Example: ",Object(a.b)("inlineCode",{parentName:"li"},"top: 30px;")," will make the element sit 30px lower than the top of its container element"))),Object(a.b)("li",{parentName:"ul"},"Useful for UI features that sit on top of other elements without interfering with them: popups, rollover panels, elements that can be dragged and dropped, ...")),Object(a.b)("h3",{id:"fixed-positioning"},"Fixed positioning"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Same as absolute positioning, but element is positioned relative to the browser's viewport"),Object(a.b)("li",{parentName:"ul"},"Element stays in same position relative to viewport, even if user scrolls"),Object(a.b)("li",{parentName:"ul"},"Can adjust position ",Object(a.b)("strong",{parentName:"li"},"relative to viewport")," using the ",Object(a.b)("inlineCode",{parentName:"li"},"top"),", ",Object(a.b)("inlineCode",{parentName:"li"},"bottom"),", ",Object(a.b)("inlineCode",{parentName:"li"},"left")," and ",Object(a.b)("inlineCode",{parentName:"li"},"right")," properties"),Object(a.b)("li",{parentName:"ul"},"Can be very useful for things like navigation menus")),Object(a.b)("h3",{id:"sticky-positioning"},"Sticky positioning"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Newer than the others"),Object(a.b)("li",{parentName:"ul"},"Hybrid between relative and fixed positioning",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Makes element acts like relatively positioned one until it is scrolled to a certain point, after which is becomes fixed (to prevent it from being scrolled out of the viewport)"))),Object(a.b)("li",{parentName:"ul"},"Interesting use case: scrollable page with different headings, each heading sticks to the top of the page as it is reached")),Object(a.b)("h2",{id:"an-elements-containing-block"},"An element's containing block"),Object(a.b)("p",null,"Affects size and position of element:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Basis for computation of percentage values applied to width and height"),Object(a.b)("li",{parentName:"ul"},"Basis for offset computations of absolutely positioned element")),Object(a.b)("p",null,"Identifying the containing block (see also ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/web/css/box-model"}),"Box model"),"):"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"If the element's position is ",Object(a.b)("strong",{parentName:"li"},"static"),", ",Object(a.b)("strong",{parentName:"li"},"relative")," or ",Object(a.b)("strong",{parentName:"li"},"sticky"),", the containing block is the edge of the ",Object(a.b)("em",{parentName:"li"},"content")," box of the nearest ancestor element that is either a block box or establishes a formatting context (which means it can be a table container, flex container, grid container, or the block container itself)"),Object(a.b)("li",{parentName:"ul"},"If the element's position is ",Object(a.b)("strong",{parentName:"li"},"absolute"),", the containing block is the edge of the ",Object(a.b)("em",{parentName:"li"},"padding")," box of the nearest ancestor element that does ",Object(a.b)("em",{parentName:"li"},"not")," have static positioning"),Object(a.b)("li",{parentName:"ul"},"If the element's position is ",Object(a.b)("strong",{parentName:"li"},"fixed"),", the containing block is the viewport (or the page area in case of paged media)"),Object(a.b)("li",{parentName:"ul"},"For elements with position ",Object(a.b)("strong",{parentName:"li"},"absolute")," or ",Object(a.b)("strong",{parentName:"li"},"fixed"),", there are also some special cases described here: ",Object(a.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block",target:"_blank",rel:"nofollow noopener noreferrer"},"Layout and the containing block ",Object(a.b)("svg",{class:"embedded-fa-icon"},Object(a.b)("use",{href:"#external-link-alt"}))))),Object(a.b)("p",null,"Note: the containing block for the root element (the ",Object(a.b)("inlineCode",{parentName:"p"},"<html>")," tag) is called the ",Object(a.b)("strong",{parentName:"p"},"initial containing block")," and has the dimensions of the viewport (or the page area in case of paged media)"),Object(a.b)("h2",{id:"extra-z-index"},"Extra: z-index"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Determines, if elements overlap, which element is on top of the other",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"This is also important for making elements clickable! If multiple elements overlap beneath the mouse pointer, the one receiving the click event will be the one that sits on top of the others"))),Object(a.b)("li",{parentName:"ul"},"Property ",Object(a.b)("inlineCode",{parentName:"li"},"z-index")," accepts unitless values (default is 0)"),Object(a.b)("li",{parentName:"ul"},"Higher values are considered to be on top of lower values")),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{href:"https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/",target:"_blank",rel:"nofollow noopener noreferrer"},"CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass) ",Object(a.b)("svg",{class:"embedded-fa-icon"},Object(a.b)("use",{href:"#external-link-alt"})))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning",target:"_blank",rel:"nofollow noopener noreferrer"},"Positioning ",Object(a.b)("svg",{class:"embedded-fa-icon"},Object(a.b)("use",{href:"#external-link-alt"})))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block",target:"_blank",rel:"nofollow noopener noreferrer"},"Layout and the containing block ",Object(a.b)("svg",{class:"embedded-fa-icon"},Object(a.b)("use",{href:"#external-link-alt"}))))))}c.isMDXComponent=!0},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),c=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):r({},t,{},e)),n},p=function(e){var t=c(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,d=p["".concat(l,".").concat(u)]||p[u]||m[u]||a;return n?o.a.createElement(d,r({ref:t},b,{components:n})):o.a.createElement(d,r({ref:t},b))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var b=2;b<a;b++)l[b]=n[b];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);