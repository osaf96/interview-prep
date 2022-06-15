"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[29],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var r=a.createContext({}),d=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,r=e.parentName,s=A(e,["components","mdxType","originalType","parentName"]),u=d(n),g=l,h=u["".concat(r,".").concat(g)]||u[g]||p[g]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=u;var A={};for(var r in t)hasOwnProperty.call(t,r)&&(A[r]=t[r]);A.originalType=e,A.mdxType="string"==typeof e?e:l,i[1]=A;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7864:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return r},default:function(){return g},frontMatter:function(){return A},metadata:function(){return d},toc:function(){return p}});var a=n(7462),l=n(3366),o=(n(7294),n(3905)),i=["components"],A={title:"Box model (CSS)",description:"The CSS box model, blocks and inline boxes, inner and outer display types, margins, padding and borders, etc.",last_modified:new Date("2022-01-31T10:44:35.358Z"),sidebar_label:"Box model"},r=void 0,d={unversionedId:"web/css/box-model",id:"web/css/box-model",title:"Box model (CSS)",description:"The CSS box model, blocks and inline boxes, inner and outer display types, margins, padding and borders, etc.",source:"@site/docs/web/css/box-model.md",sourceDirName:"web/css",slug:"/web/css/box-model",permalink:"/interview-prep/web/css/box-model",draft:!1,tags:[],version:"current",frontMatter:{title:"Box model (CSS)",description:"The CSS box model, blocks and inline boxes, inner and outer display types, margins, padding and borders, etc.",last_modified:"2022-01-31T10:44:35.358Z",sidebar_label:"Box model"},sidebar:"docs",previous:{title:"Cookies and Web Storage",permalink:"/interview-prep/web/cookies-web-storage"},next:{title:"Browser compatibility",permalink:"/interview-prep/web/css/browser-compatibility"}},s={},p=[{value:"Blocks and inline boxes",id:"blocks-and-inline-boxes",level:2},{value:"Block boxes",id:"block-boxes",level:3},{value:"Inline boxes",id:"inline-boxes",level:3},{value:"Inner and outer display types",id:"inner-and-outer-display-types",level:2},{value:"Changing display types",id:"changing-display-types",level:2},{value:"The CSS box model",id:"the-css-box-model",level:2},{value:"Box building blocks",id:"box-building-blocks",level:3},{value:"The two box models",id:"the-two-box-models",level:3},{value:"The standard CSS box model",id:"the-standard-css-box-model",level:4},{value:"The alternate CSS box model",id:"the-alternate-css-box-model",level:4},{value:"Margins, padding and borders",id:"margins-padding-and-borders",level:2},{value:"Margins",id:"margins",level:3},{value:"Margin collapsing",id:"margin-collapsing",level:4},{value:"Borders",id:"borders",level:3},{value:"Padding",id:"padding",level:3},{value:"The box model and inline boxes",id:"the-box-model-and-inline-boxes",level:2},{value:"Inline blocks (<code>display: inline-block</code>)",id:"inline-blocks-display-inline-block",level:2},{value:"Sizing elements",id:"sizing-elements",level:2},{value:"Hiding elements",id:"hiding-elements",level:2},{value:"Resources",id:"resources",level:2}],u={toc:p};function g(e){var t=e.components,A=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,A,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The CSS box model, blocks and inline boxes, inner and outer display types, margins, padding and borders, etc."),(0,o.kt)("h2",{id:"blocks-and-inline-boxes"},"Blocks and inline boxes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Basically, every element in a page has a box drawn around it. "),(0,o.kt)("li",{parentName:"ul"},"This box influences the space the element takes and how it interacts with other elements.")),(0,o.kt)("p",null,"Generally speaking, CSS has two types of boxes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Block boxes"),(0,o.kt)("li",{parentName:"ul"},"Inline boxes")),(0,o.kt)("h3",{id:"block-boxes"},"Block boxes"),(0,o.kt)("p",null,"Behavior:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Extend horizontally to fill the space available in its parent/container"),(0,o.kt)("li",{parentName:"ul"},"Each box is shown on a new line"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"width")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"height")," properties are respected"),(0,o.kt)("li",{parentName:"ul"},"Padding, margins and borders will push other elements away")),(0,o.kt)("p",null,"Elements that are displayed as block boxes by default: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Headings"),(0,o.kt)("li",{parentName:"ul"},"Paragraphs (",(0,o.kt)("inlineCode",{parentName:"li"},"<p>"),")"),(0,o.kt)("li",{parentName:"ul"},"Divs (",(0,o.kt)("inlineCode",{parentName:"li"},"<div>"),")"),(0,o.kt)("li",{parentName:"ul"},"...")),(0,o.kt)("h3",{id:"inline-boxes"},"Inline boxes"),(0,o.kt)("p",null,"Behavior:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Extend to fit their content"),(0,o.kt)("li",{parentName:"ul"},"Do not create a line break unless they do not fit on the current line"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"width")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"height")," properties do not apply"),(0,o.kt)("li",{parentName:"ul"},"Padding, margins and borders will apply but will not push other inline boxes away")),(0,o.kt)("p",null,"Elements that are displayed as inline boxes by default:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Links (",(0,o.kt)("inlineCode",{parentName:"li"},"<a>"),")"),(0,o.kt)("li",{parentName:"ul"},"Spans (",(0,o.kt)("inlineCode",{parentName:"li"},"<span>"),")"),(0,o.kt)("li",{parentName:"ul"},"...")),(0,o.kt)("h2",{id:"inner-and-outer-display-types"},"Inner and outer display types"),(0,o.kt)("p",null,"CSS boxes have both ",(0,o.kt)("strong",{parentName:"p"},"inner")," and ",(0,o.kt)("strong",{parentName:"p"},"outer")," display types"),(0,o.kt)("p",null,"Outer display type:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Block"),(0,o.kt)("li",{parentName:"ul"},"Inline")),(0,o.kt)("p",null,"Inner display type specifies how elements ",(0,o.kt)("em",{parentName:"p"},"inside")," the box are laid out:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: normal flow, direct children of the box behave just like other block and inline elements"),(0,o.kt)("li",{parentName:"ul"},"Flexbox: direct children of the box will be laid out using the Flexbox spec"),(0,o.kt)("li",{parentName:"ul"},"Grid: direct children of the box will be laid out using the Grid spec")),(0,o.kt)("h2",{id:"changing-display-types"},"Changing display types"),(0,o.kt)("p",null,"See: ",(0,o.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/display",target:"_blank",rel:"nofollow noopener noreferrer"},"display ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"})))),(0,o.kt)("p",null,"You can change an element's inner and outer display type using the ",(0,o.kt)("inlineCode",{parentName:"p"},"display")," property"),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"display: block;")," gives the element an outer display type of block and default inner display type"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"display: inline;")," gives the element an outer display type of inline and default inner display type"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"display: flex;")," gives the element an outer display type of block and inner display type Flexbox"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"display: grid;")," gives the element an outer display type of block and inner display type Grid"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"display: inline-flex;")," gives the element an outer display type of inline and inner display type Flexbox"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"display: inline-grid;")," gives the element an outer display type of block and inner display type Grid")),(0,o.kt)("p",null,"Note: one single value specifies both the outer and inner display type. There is a new CSS specification that allow specifying two values for the ",(0,o.kt)("inlineCode",{parentName:"p"},"display")," property - one for outer and one for inner display type - but support for this is limited at the moment."),(0,o.kt)("h2",{id:"the-css-box-model"},"The CSS box model"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Defines how the content of a box plus the box's margin, border and padding influence the box that your see on the page"),(0,o.kt)("li",{parentName:"ul"},"Applies fully to block boxes"),(0,o.kt)("li",{parentName:"ul"},"Applies partially to inline boxes")),(0,o.kt)("h3",{id:"box-building-blocks"},"Box building blocks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Content box:")," the area displaying the actual content"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Padding box:")," the padding is the white space around the content"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Border box:")," the border sits around the content and padding"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Margin box:")," the margin is the outer layer, sitting around the border")),(0,o.kt)("h3",{id:"the-two-box-models"},"The two box models"),(0,o.kt)("p",null,"Things are slightly complicated by CSS having two box models that differ in the way they calculate an element's dimensions"),(0,o.kt)("h4",{id:"the-standard-css-box-model"},"The standard CSS box model"),(0,o.kt)("p",null,"With and height of an element define the width and height of the ",(0,o.kt)("em",{parentName:"p"},"content box")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Standard box model",src:n(1120).Z,width:"500",height:"300"})),(0,o.kt)("p",null,"(",(0,o.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model",target:"_blank",rel:"nofollow noopener noreferrer"},"image source ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"}))),")"),(0,o.kt)("p",null,"The padding and the border are then added to this to determine the total size taken up by the box (margins are seen as space ",(0,o.kt)("em",{parentName:"p"},"between")," boxes, see later)"),(0,o.kt)("h4",{id:"the-alternate-css-box-model"},"The alternate CSS box model"),(0,o.kt)("p",null,"Width and height of an element include the padding and the border (and thus, the total size taken up by the box)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alternative box model",src:n(9109).Z,width:"440",height:"240"})),(0,o.kt)("p",null,"(",(0,o.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model",target:"_blank",rel:"nofollow noopener noreferrer"},"image source ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"}))),")"),(0,o.kt)("p",null,"This was introduced later on because the standard box model was seen as inconvenient to work with."),(0,o.kt)("p",null,"It is common to set the alternate box model as default for all elements, either through a CSS reset stylesheet or manually using something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"html {\n    box-sizing: border-box;\n}\n\n*, *::before, *::after {\n    box-sizing: inherit;\n}\n")),(0,o.kt)("h2",{id:"margins-padding-and-borders"},"Margins, padding and borders"),(0,o.kt)("h3",{id:"margins"},"Margins"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Define the space ",(0,o.kt)("em",{parentName:"li"},"around")," the element's box. They do not affect the size of the box, but they do affect the space ",(0,o.kt)("em",{parentName:"li"},"between")," boxes"),(0,o.kt)("li",{parentName:"ul"},"Can also be ",(0,o.kt)("strong",{parentName:"li"},"negative"),", making boxes overlap"),(0,o.kt)("li",{parentName:"ul"},"Can be set using the ",(0,o.kt)("inlineCode",{parentName:"li"},"margin")," property or individually for each side using the ",(0,o.kt)("inlineCode",{parentName:"li"},"margin-top"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"margin-right"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"margin-bottom")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"margin-left")," properties")),(0,o.kt)("h4",{id:"margin-collapsing"},"Margin collapsing"),(0,o.kt)("p",null,"If the margins for two elements touch, these margins will be combined (collapsed) to become one margin, which is the size of the largest margin of the two"),(0,o.kt)("p",null,"Reasoning: if two boxes are next to each other, one of those boxes needs 50px around, and the other one needs 40px around it, then separating the boxes by 50px satisfies this"),(0,o.kt)("p",null,"There are some specific rules and special cases here, see ",(0,o.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing",target:"_blank",rel:"nofollow noopener noreferrer"},"Mastering margin collapsing ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"})))," and ",(0,o.kt)("a",{href:"https://www.joshwcomeau.com/css/rules-of-margin-collapse/",target:"_blank",rel:"nofollow noopener noreferrer"},"The Rules of Margin Collapse ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"})))),(0,o.kt)("p",null,"In order to avoid confusion caused by margin collapsing, it can help to choose specific sides where you apply margins. For example, for vertical spacing between boxes, you could choose to only use ",(0,o.kt)("inlineCode",{parentName:"p"},"margin-top")," and not ",(0,o.kt)("inlineCode",{parentName:"p"},"margin-bottom")),(0,o.kt)("h3",{id:"borders"},"Borders"),(0,o.kt)("p",null,"Note: borders are part of the total size of the box"),(0,o.kt)("h3",{id:"padding"},"Padding"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sits between the border and the content area"),(0,o.kt)("li",{parentName:"ul"},"Cannot be negative (unlike margins)")),(0,o.kt)("h2",{id:"the-box-model-and-inline-boxes"},"The box model and inline boxes"),(0,o.kt)("p",null,"For inline boxes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"width")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"height")," properties are ignored"),(0,o.kt)("li",{parentName:"ul"},"Padding and border are respected, but might overlap other content because of the behavior with margins"),(0,o.kt)("li",{parentName:"ul"},"Top and bottom margins are ignored"),(0,o.kt)("li",{parentName:"ul"},"Left and right margins are respected")),(0,o.kt)("h2",{id:"inline-blocks-display-inline-block"},"Inline blocks (",(0,o.kt)("inlineCode",{parentName:"h2"},"display: inline-block"),")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Special case that sits in the middle between inline and block"),(0,o.kt)("li",{parentName:"ul"},"Respects ",(0,o.kt)("inlineCode",{parentName:"li"},"width")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"height")," properties"),(0,o.kt)("li",{parentName:"ul"},"Margin causes other elements to be pushed away"),(0,o.kt)("li",{parentName:"ul"},"Can sit in line with other elements"),(0,o.kt)("li",{parentName:"ul"},"Only takes up space needed by content (unless ",(0,o.kt)("inlineCode",{parentName:"li"},"width")," or",(0,o.kt)("inlineCode",{parentName:"li"},"height")," properties are set)")),(0,o.kt)("h2",{id:"sizing-elements"},"Sizing elements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Setting ",(0,o.kt)("inlineCode",{parentName:"li"},"width")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"height")," has different effect depending on which box model is used (see above)"),(0,o.kt)("li",{parentName:"ul"},"Can also use things like ",(0,o.kt)("inlineCode",{parentName:"li"},"min-width")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"max-width")," to provide boundaries for an element's size"),(0,o.kt)("li",{parentName:"ul"},"Setting width and height relative to parent: use ",(0,o.kt)("inlineCode",{parentName:"li"},"%"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Note: using this to set the height of an element (for example ",(0,o.kt)("inlineCode",{parentName:"li"},"height: 100%;"),") only works if the parent has an actual defined height"),(0,o.kt)("li",{parentName:"ul"},"Flexbox or grid could be a good alternative here"))),(0,o.kt)("li",{parentName:"ul"},"Setting width and height relative to viewport (portion of the screen that the browser uses to show the page): use ",(0,o.kt)("inlineCode",{parentName:"li"},"vh"))),(0,o.kt)("h2",{id:"hiding-elements"},"Hiding elements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"display: none;"),": Remove the element from the document flow, which means that it will not take up any space and other elements can take its place"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"visibility: hidden;"),": Hide the element, but still let it take up space (and thus push away other elements as necessary)")),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/",target:"_blank",rel:"nofollow noopener noreferrer"},"CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass) ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"})))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model",target:"_blank",rel:"nofollow noopener noreferrer"},"The box model ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"})))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow",target:"_blank",rel:"nofollow noopener noreferrer"},"Normal Flow ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"})))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing",target:"_blank",rel:"nofollow noopener noreferrer"},"Mastering margin collapsing ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"})))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://www.joshwcomeau.com/css/rules-of-margin-collapse/",target:"_blank",rel:"nofollow noopener noreferrer"},"The Rules of Margin Collapse ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"}))))))}g.isMDXComponent=!0},9109:function(e,t){t.Z="data:image/png;base64,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l4AbGBhI8HfhwoXCx65cuZIAoA5emdD35atUMY23lpnYfX19CQDgp8yoKDsTilCDAwC48soElx6cXkyZXVJ6cADgq8yoKDsTirgEXNkIOADw1YNRwXlwAABfXpmwITkoe7y1F/+SAAD8hxocACAkanAAAHTApQb34sWLBACAeGWCS8B9+vQpAQAgXpngMkSpF7Nx48YEAIBXJlCDAwCERA0OAOCKGhwAICRqcACAkKjBAQDQAWpwAABX1OAAACFRgwMAhEQNDgCADrgMUU5NTSUAAMQrE1wCDgAAbwxRAgBCogcHAAjpl0tfpYppvHVoaGj19tLS0prLy8vLadu2benz589penq69OX379+nwcHB7KqyOh+jqmXtd2ZmJtvv1q1bS19eXFxMs7Oz2fumq+OWvTw3N5dev36dzXbq7+8vfVn70n3al+6raln/Fhs2bMj+bebn50tfbuez3e4y/xf4vxD1/4LdrhJDlACAkBiiBACERMABAEIi4AAAIRFwAICQCDgAQEgEHAAgJAIOABASAQcACImAAwCERMABAEIi4AAAIRFwAICQCDgAQEgEHAAgJAIOABASAQcACImAAwCERMABAEIi4AAAIRFwAICQCDgAQEgEHAAgJAIOABASAQcACOn/AXSpBK1ZiFaeAAAAAElFTkSuQmCC"},1120:function(e,t){t.Z="data:image/png;base64,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"}}]);