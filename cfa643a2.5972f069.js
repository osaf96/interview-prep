(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{216:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),l=(n(0),n(231)),i={title:"Inheritance, the cascade and specificity (CSS)",description:"An overview of how CSS rules with their selectors actually affect HTML elements",last_modified:new Date("2022-01-31T10:44:35.363Z"),sidebar_label:"Inheritance, the cascade and specificity"},s={id:"web/css/inheritance-cascade-specificity",title:"Inheritance, the cascade and specificity (CSS)",description:"An overview of how CSS rules with their selectors actually affect HTML elements",source:"@site/docs\\web\\css\\inheritance-cascade-specificity.md",permalink:"/web/css/inheritance-cascade-specificity",sidebar_label:"Inheritance, the cascade and specificity",sidebar:"docs",previous:{title:"Grids (CSS)",permalink:"/web/css/grids"},next:{title:"Naming classes (CSS)",permalink:"/web/css/naming-classes"}},c=[{value:"Inheritance",id:"inheritance",children:[]},{value:"The cascade",id:"the-cascade",children:[{value:"Importance",id:"importance",children:[]},{value:"Origin",id:"origin",children:[]},{value:"Specificity",id:"specificity",children:[]},{value:"Source order",id:"source-order",children:[]}]},{value:"Resources",id:"resources",children:[]}],o={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"An overview of how CSS rules with their selectors actually affect HTML elements"),Object(l.b)("h2",{id:"inheritance"},"Inheritance"),Object(l.b)("p",null,"HTML can be seen as a tree structure of elements (example: ",Object(l.b)("inlineCode",{parentName:"p"},"div")," containing ",Object(l.b)("inlineCode",{parentName:"p"},"p")," containing ",Object(l.b)("inlineCode",{parentName:"p"},"a"),")"),Object(l.b)("p",null,"Inheritance: some CSS property values set on parent elements are inherited by their child elements"),Object(l.b)("p",null,"What kind of properties are inherited by default?"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Color: yes"),Object(l.b)("li",{parentName:"ul"},"Margins, padding and border: no")),Object(l.b)("h4",{id:"controlling-inheritance"},"Controlling inheritance"),Object(l.b)("p",null,"For each property, CSS provides some special values that allow you to control inheritance:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"inherit"),': Set the value to the one that the parent has for the property (can be seen as "turning on inheritance for the property").'),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"initial"),": Set the value to the one that was defined in the browser's default style sheet. If no value is set in the browser's default style sheet and the property would be inherited by default, the effect is the same as using ",Object(l.b)("inlineCode",{parentName:"li"},"inherit"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"unset"),": Acts like ",Object(l.b)("inlineCode",{parentName:"li"},"inherit")," if the property is inherited by default and ",Object(l.b)("inlineCode",{parentName:"li"},"initial")," otherwise.")),Object(l.b)("p",null,"You can also use the CSS property ",Object(l.b)("inlineCode",{parentName:"p"},"all"),' to set these values for (almost) every property. This can be a convenient way to "start from a clean sheet" for a certain element.'),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),".unset-all {\n    all: unset;\n}\n")),Object(l.b)("h2",{id:"the-cascade"},"The cascade"),Object(l.b)("p",null,"The cascade: how conflicts are resolved when multiple CSS rules match the same element and try to set different values for the same property"),Object(l.b)("p",null,"Important to note: conflicts are resolved at the level of properties, not at the level of CSS rules!"),Object(l.b)("p",null,"Factors to consider, in decreasing order of priority:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Importance"),Object(l.b)("li",{parentName:"ol"},"Origin"),Object(l.b)("li",{parentName:"ol"},"Specificity"),Object(l.b)("li",{parentName:"ol"},"Source order")),Object(l.b)("h3",{id:"importance"},"Importance"),Object(l.b)("p",null,"You can add ",Object(l.b)("inlineCode",{parentName:"p"},"!important"),' to a property value to make it the "most important" one, meaning that this value beats all values without ',Object(l.b)("inlineCode",{parentName:"p"},"!important")," that could apply to the element"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),".test {\n    background-color: gray;\n    border: none !important;\n}\n")),Object(l.b)("p",null,"Using ",Object(l.b)("inlineCode",{parentName:"p"},"!important")," is generally considered as a code smell and should be used as a last resort to override a style that you really can't override any other way."),Object(l.b)("p",null,"Some libraries, for example Bootstrap, also use this for some of their utility classes. Example from Bootstrap:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),".w-100 {\n    width: 100% !important;\n}\n")),Object(l.b)("p",null,"This is actually not the entire picture, as transitions and animations also have an effect on importance. See ",Object(l.b)("a",{href:"https://wattenberger.com/blog/css-cascade#importance",target:"_blank",rel:"nofollow noopener noreferrer"},"here ",Object(l.b)("svg",{class:"embedded-fa-icon"},Object(l.b)("use",{href:"#external-link-alt"})))),Object(l.b)("h3",{id:"origin"},"Origin"),Object(l.b)("p",null,"This depends on where a rule was defined. Highest to lowest priority:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Website (defined by you, the website's developer)"),Object(l.b)("li",{parentName:"ul"},"User (styles that the user has set up)"),Object(l.b)("li",{parentName:"ul"},"Browser (default styles as defined by the browser)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"These can be different between browsers"),Object(l.b)("li",{parentName:"ul"},"It is common to override these default stylesheets using a ",Object(l.b)("strong",{parentName:"li"},"CSS reset")," stylesheet at the website level, which overrides default browser styles with some styles which will then be the same regardless of which browser is used to open the page. These can then be overridden as needed by other website-level styles.")))),Object(l.b)("h3",{id:"specificity"},"Specificity"),Object(l.b)("p",null,"Specificity: a measure for how specific the selectors of the CSS rules are, where priority is given to more specific rules"),Object(l.b)("p",null,"See also ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/web/css/selectors"}),"Selectors")),Object(l.b)("p",null,"A rule's specificity is determined based on four elements. Highest to lowest priority:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Inline style:")," Inline style (defined directly on an element) is more specific than any rule that matches the element based on a selector"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"ID selectors"),": Number of ID selectors in the overall selector of the rule"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Class selectors, attribute selectors and pseudo-classes:")," Number of class selectors, attribute selectors and pseudo-classes in the overall selector of the rule"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Element selectors and pseudo-elements:")," Number of element selectors and pseudo-elements in the overall selector of the rule")),Object(l.b)("p",null,"Here, higher priority always beats lower priority. For example, a rule with a million class selectors but no ID selectors is still less specific than a rule with a single ID selector."),Object(l.b)("p",null,"Important: the universal selector (",Object(l.b)("inlineCode",{parentName:"p"},"*"),"), combinators and the negation pseudo-class (",Object(l.b)("inlineCode",{parentName:"p"},":not"),") have no effect on specificity!"),Object(l.b)("p",null,"Some examples:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"h1.the-class")," is more specific than ",Object(l.b)("inlineCode",{parentName:"li"},"h1")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},".class-a > .class-b > class-c")," is more specific than ",Object(l.b)("inlineCode",{parentName:"li"},".class-b > class-c")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"#the-id")," is more specific than ",Object(l.b)("inlineCode",{parentName:"li"},".class-a > .class-b > class-c"))),Object(l.b)("p",null,"Note: ",Object(l.b)("strong",{parentName:"p"},"inherited")," property values can be seen as rules that are less specific than all of the above --\x3e very easy to override. Can be useful to set some defaults at the level of the body, for example font family. It's possible to \"increase the specificity\" of inheritance by setting a property's value to ",Object(l.b)("inlineCode",{parentName:"p"},"inherit")," in a rule with a more specific selector."),Object(l.b)("h3",{id:"source-order"},"Source order"),Object(l.b)("p",null,"In case of a tie regarding importance and specificity, the winning rule will be the one that was defined/loaded last. This can matter if the exact same selector is used for multiple rules, but also when an element is matched by two selectors that are equally specific."),Object(l.b)("p",null,'When using a CSS reset stylesheet (see above), any custom CSS rules can be loaded after the CSS reset stylesheet and override styles as necessary, starting from the "clean slate" created by the CSS reset stylesheet.'),Object(l.b)("h2",{id:"resources"},"Resources"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{href:"https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/",target:"_blank",rel:"nofollow noopener noreferrer"},"CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass) ",Object(l.b)("svg",{class:"embedded-fa-icon"},Object(l.b)("use",{href:"#external-link-alt"})))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance",target:"_blank",rel:"nofollow noopener noreferrer"},"Cascade and inheritance ",Object(l.b)("svg",{class:"embedded-fa-icon"},Object(l.b)("use",{href:"#external-link-alt"})))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{href:"https://wattenberger.com/blog/css-cascade",target:"_blank",rel:"nofollow noopener noreferrer"},"The CSS Cascade ",Object(l.b)("svg",{class:"embedded-fa-icon"},Object(l.b)("use",{href:"#external-link-alt"}))))),Object(l.b)("p",null,"All of these determine how CSS rules with their selectors actually affect the HTML elements"))}b.isMDXComponent=!0},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),b=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=b(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,h=p["".concat(i,".").concat(d)]||p[d]||u[d]||l;return n?a.a.createElement(h,s({ref:t},o,{components:n})):a.a.createElement(h,s({ref:t},o))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);