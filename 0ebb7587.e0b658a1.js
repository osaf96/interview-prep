(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return c}));var l=n(1),a=n(9),i=(n(0),n(231)),o={title:"Box model (CSS)",description:"The CSS box model, blocks and inline boxes, inner and outer display types, margins, padding and borders, etc.",last_modified:new Date("2022-01-31T10:44:35.358Z"),sidebar_label:"Box model"},r={id:"web/css/box-model",title:"Box model (CSS)",description:"The CSS box model, blocks and inline boxes, inner and outer display types, margins, padding and borders, etc.",source:"@site/docs\\web\\css\\box-model.md",permalink:"/interview-prep/web/css/box-model",sidebar_label:"Box model",sidebar:"docs",previous:{title:"Cookies and Web Storage",permalink:"/interview-prep/web/cookies-web-storage"},next:{title:"Browser compatibility (CSS)",permalink:"/interview-prep/web/css/browser-compatibility"}},b=[{value:"Blocks and inline boxes",id:"blocks-and-inline-boxes",children:[{value:"Block boxes",id:"block-boxes",children:[]},{value:"Inline boxes",id:"inline-boxes",children:[]}]},{value:"Inner and outer display types",id:"inner-and-outer-display-types",children:[]},{value:"Changing display types",id:"changing-display-types",children:[]},{value:"The CSS box model",id:"the-css-box-model",children:[{value:"Box building blocks",id:"box-building-blocks",children:[]},{value:"The two box models",id:"the-two-box-models",children:[]}]},{value:"Margins, padding and borders",id:"margins-padding-and-borders",children:[{value:"Margins",id:"margins",children:[]},{value:"Borders",id:"borders",children:[]},{value:"Padding",id:"padding",children:[]}]},{value:"The box model and inline boxes",id:"the-box-model-and-inline-boxes",children:[]},{value:"Inline blocks (<code>display: inline-block</code>)",id:"inline-blocks-display-inline-block",children:[]},{value:"Sizing elements",id:"sizing-elements",children:[]},{value:"Hiding elements",id:"hiding-elements",children:[]},{value:"Resources",id:"resources",children:[]}],s={rightToc:b};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(l.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The CSS box model, blocks and inline boxes, inner and outer display types, margins, padding and borders, etc."),Object(i.b)("h2",{id:"blocks-and-inline-boxes"},"Blocks and inline boxes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Basically, every element in a page has a box drawn around it. "),Object(i.b)("li",{parentName:"ul"},"This box influences the space the element takes and how it interacts with other elements.")),Object(i.b)("p",null,"Generally speaking, CSS has two types of boxes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Block boxes"),Object(i.b)("li",{parentName:"ul"},"Inline boxes")),Object(i.b)("h3",{id:"block-boxes"},"Block boxes"),Object(i.b)("p",null,"Behavior:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Extend horizontally to fill the space available in its parent/container"),Object(i.b)("li",{parentName:"ul"},"Each box is shown on a new line"),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"width")," and ",Object(i.b)("inlineCode",{parentName:"li"},"height")," properties are respected"),Object(i.b)("li",{parentName:"ul"},"Padding, margins and borders will push other elements away")),Object(i.b)("p",null,"Elements that are displayed as block boxes by default: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Headings"),Object(i.b)("li",{parentName:"ul"},"Paragraphs (",Object(i.b)("inlineCode",{parentName:"li"},"<p>"),")"),Object(i.b)("li",{parentName:"ul"},"Divs (",Object(i.b)("inlineCode",{parentName:"li"},"<div>"),")"),Object(i.b)("li",{parentName:"ul"},"...")),Object(i.b)("h3",{id:"inline-boxes"},"Inline boxes"),Object(i.b)("p",null,"Behavior:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Extend to fit their content"),Object(i.b)("li",{parentName:"ul"},"Do not create a line break unless they do not fit on the current line"),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"width")," and ",Object(i.b)("inlineCode",{parentName:"li"},"height")," properties do not apply"),Object(i.b)("li",{parentName:"ul"},"Padding, margins and borders will apply but will not push other inline boxes away")),Object(i.b)("p",null,"Elements that are displayed as inline boxes by default:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Links (",Object(i.b)("inlineCode",{parentName:"li"},"<a>"),")"),Object(i.b)("li",{parentName:"ul"},"Spans (",Object(i.b)("inlineCode",{parentName:"li"},"<span>"),")"),Object(i.b)("li",{parentName:"ul"},"...")),Object(i.b)("h2",{id:"inner-and-outer-display-types"},"Inner and outer display types"),Object(i.b)("p",null,"CSS boxes have both ",Object(i.b)("strong",{parentName:"p"},"inner")," and ",Object(i.b)("strong",{parentName:"p"},"outer")," display types"),Object(i.b)("p",null,"Outer display type:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Block"),Object(i.b)("li",{parentName:"ul"},"Inline")),Object(i.b)("p",null,"Inner display type specifies how elements ",Object(i.b)("em",{parentName:"p"},"inside")," the box are laid out:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: normal flow, direct children of the box behave just like other block and inline elements"),Object(i.b)("li",{parentName:"ul"},"Flexbox: direct children of the box will be laid out using the Flexbox spec"),Object(i.b)("li",{parentName:"ul"},"Grid: direct children of the box will be laid out using the Grid spec")),Object(i.b)("h2",{id:"changing-display-types"},"Changing display types"),Object(i.b)("p",null,"See: ",Object(i.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/display",target:"_blank",rel:"nofollow noopener noreferrer"},"display ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"})))),Object(i.b)("p",null,"You can change an element's inner and outer display type using the ",Object(i.b)("inlineCode",{parentName:"p"},"display")," property"),Object(i.b)("p",null,"Examples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"display: block;")," gives the element an outer display type of block and default inner display type"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"display: inline;")," gives the element an outer display type of inline and default inner display type"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"display: flex;")," gives the element an outer display type of block and inner display type Flexbox"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"display: grid;")," gives the element an outer display type of block and inner display type Grid"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"display: inline-flex;")," gives the element an outer display type of inline and inner display type Flexbox"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"display: inline-grid;")," gives the element an outer display type of block and inner display type Grid")),Object(i.b)("p",null,"Note: one single value specifies both the outer and inner display type. There is a new CSS specification that allow specifying two values for the ",Object(i.b)("inlineCode",{parentName:"p"},"display")," property - one for outer and one for inner display type - but support for this is limited at the moment."),Object(i.b)("h2",{id:"the-css-box-model"},"The CSS box model"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Defines how the content of a box plus the box's margin, border and padding influence the box that your see on the page"),Object(i.b)("li",{parentName:"ul"},"Applies fully to block boxes"),Object(i.b)("li",{parentName:"ul"},"Applies partially to inline boxes")),Object(i.b)("h3",{id:"box-building-blocks"},"Box building blocks"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Content box:")," the area displaying the actual content"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Padding box:")," the padding is the white space around the content"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Border box:")," the border sits around the content and padding"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Margin box:")," the margin is the outer layer, sitting around the border")),Object(i.b)("h3",{id:"the-two-box-models"},"The two box models"),Object(i.b)("p",null,"Things are slightly complicated by CSS having two box models that differ in the way they calculate an element's dimensions"),Object(i.b)("h4",{id:"the-standard-css-box-model"},"The standard CSS box model"),Object(i.b)("p",null,"With and height of an element define the width and height of the ",Object(i.b)("em",{parentName:"p"},"content box")),Object(i.b)("p",null,Object(i.b)("img",Object(l.a)({parentName:"p"},{src:"/img/from-notes/web/css/box-model/standard-box-model.png",alt:"Standard box model"}))),Object(i.b)("p",null,"(",Object(i.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model",target:"_blank",rel:"nofollow noopener noreferrer"},"image source ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"}))),")"),Object(i.b)("p",null,"The padding and the border are then added to this to determine the total size taken up by the box (margins are seen as space ",Object(i.b)("em",{parentName:"p"},"between")," boxes, see later)"),Object(i.b)("h4",{id:"the-alternate-css-box-model"},"The alternate CSS box model"),Object(i.b)("p",null,"Width and height of an element include the padding and the border (and thus, the total size taken up by the box)"),Object(i.b)("p",null,Object(i.b)("img",Object(l.a)({parentName:"p"},{src:"/img/from-notes/web/css/box-model/alternate-box-model.png",alt:"Alternative box model"}))),Object(i.b)("p",null,"(",Object(i.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model",target:"_blank",rel:"nofollow noopener noreferrer"},"image source ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"}))),")"),Object(i.b)("p",null,"This was introduced later on because the standard box model was seen as inconvenient to work with."),Object(i.b)("p",null,"It is common to set the alternate box model as default for all elements, either through a CSS reset stylesheet or manually using something like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(l.a)({parentName:"pre"},{className:"language-css"}),"html {\n    box-sizing: border-box;\n}\n\n*, *::before, *::after {\n    box-sizing: inherit;\n}\n")),Object(i.b)("h2",{id:"margins-padding-and-borders"},"Margins, padding and borders"),Object(i.b)("h3",{id:"margins"},"Margins"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Define the space ",Object(i.b)("em",{parentName:"li"},"around")," the element's box. They do not affect the size of the box, but they do affect the space ",Object(i.b)("em",{parentName:"li"},"between")," boxes"),Object(i.b)("li",{parentName:"ul"},"Can also be ",Object(i.b)("strong",{parentName:"li"},"negative"),", making boxes overlap"),Object(i.b)("li",{parentName:"ul"},"Can be set using the ",Object(i.b)("inlineCode",{parentName:"li"},"margin")," property or individually for each side using the ",Object(i.b)("inlineCode",{parentName:"li"},"margin-top"),", ",Object(i.b)("inlineCode",{parentName:"li"},"margin-right"),", ",Object(i.b)("inlineCode",{parentName:"li"},"margin-bottom")," and ",Object(i.b)("inlineCode",{parentName:"li"},"margin-left")," properties")),Object(i.b)("h4",{id:"margin-collapsing"},"Margin collapsing"),Object(i.b)("p",null,"If the margins for two elements touch, these margins will be combined (collapsed) to become one margin, which is the size of the largest margin of the two"),Object(i.b)("p",null,"Reasoning: if two boxes are next to each other, one of those boxes needs 50px around, and the other one needs 40px around it, then separating the boxes by 50px satisfies this"),Object(i.b)("p",null,"There are some specific rules and special cases here, see ",Object(i.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing",target:"_blank",rel:"nofollow noopener noreferrer"},"Mastering margin collapsing ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"})))," and ",Object(i.b)("a",{href:"https://www.joshwcomeau.com/css/rules-of-margin-collapse/",target:"_blank",rel:"nofollow noopener noreferrer"},"The Rules of Margin Collapse ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"})))),Object(i.b)("p",null,"In order to avoid confusion caused by margin collapsing, it can help to choose specific sides where you apply margins. For example, for vertical spacing between boxes, you could choose to only use ",Object(i.b)("inlineCode",{parentName:"p"},"margin-top")," and not ",Object(i.b)("inlineCode",{parentName:"p"},"margin-bottom")),Object(i.b)("h3",{id:"borders"},"Borders"),Object(i.b)("p",null,"Note: borders are part of the total size of the box"),Object(i.b)("h3",{id:"padding"},"Padding"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Sits between the border and the content area"),Object(i.b)("li",{parentName:"ul"},"Cannot be negative (unlike margins)")),Object(i.b)("h2",{id:"the-box-model-and-inline-boxes"},"The box model and inline boxes"),Object(i.b)("p",null,"For inline boxes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"width")," and ",Object(i.b)("inlineCode",{parentName:"li"},"height")," properties are ignored"),Object(i.b)("li",{parentName:"ul"},"Padding and border are respected, but might overlap other content because of the behavior with margins"),Object(i.b)("li",{parentName:"ul"},"Top and bottom margins are ignored"),Object(i.b)("li",{parentName:"ul"},"Left and right margins are respected")),Object(i.b)("h2",{id:"inline-blocks-display-inline-block"},"Inline blocks (",Object(i.b)("inlineCode",{parentName:"h2"},"display: inline-block"),")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Special case that sits in the middle between inline and block"),Object(i.b)("li",{parentName:"ul"},"Respects ",Object(i.b)("inlineCode",{parentName:"li"},"width")," and ",Object(i.b)("inlineCode",{parentName:"li"},"height")," properties"),Object(i.b)("li",{parentName:"ul"},"Margin causes other elements to be pushed away"),Object(i.b)("li",{parentName:"ul"},"Can sit in line with other elements"),Object(i.b)("li",{parentName:"ul"},"Only takes up space needed by content (unless ",Object(i.b)("inlineCode",{parentName:"li"},"width")," or",Object(i.b)("inlineCode",{parentName:"li"},"height")," properties are set)")),Object(i.b)("h2",{id:"sizing-elements"},"Sizing elements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Setting ",Object(i.b)("inlineCode",{parentName:"li"},"width")," or ",Object(i.b)("inlineCode",{parentName:"li"},"height")," has different effect depending on which box model is used (see above)"),Object(i.b)("li",{parentName:"ul"},"Can also use things like ",Object(i.b)("inlineCode",{parentName:"li"},"min-width")," and ",Object(i.b)("inlineCode",{parentName:"li"},"max-width")," to provide boundaries for an element's size"),Object(i.b)("li",{parentName:"ul"},"Setting width and height relative to parent: use ",Object(i.b)("inlineCode",{parentName:"li"},"%"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Note: using this to set the height of an element (for example ",Object(i.b)("inlineCode",{parentName:"li"},"height: 100%;"),") only works if the parent has an actual defined height"),Object(i.b)("li",{parentName:"ul"},"Flexbox or grid could be a good alternative here"))),Object(i.b)("li",{parentName:"ul"},"Setting width and height relative to viewport (portion of the screen that the browser uses to show the page): use ",Object(i.b)("inlineCode",{parentName:"li"},"vh"))),Object(i.b)("h2",{id:"hiding-elements"},"Hiding elements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"display: none;"),": Remove the element from the document flow, which means that it will not take up any space and other elements can take its place"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"visibility: hidden;"),": Hide the element, but still let it take up space (and thus push away other elements as necessary)")),Object(i.b)("h2",{id:"resources"},"Resources"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/",target:"_blank",rel:"nofollow noopener noreferrer"},"CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass) ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"})))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model",target:"_blank",rel:"nofollow noopener noreferrer"},"The box model ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"})))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow",target:"_blank",rel:"nofollow noopener noreferrer"},"Normal Flow ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"})))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing",target:"_blank",rel:"nofollow noopener noreferrer"},"Mastering margin collapsing ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"})))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://www.joshwcomeau.com/css/rules-of-margin-collapse/",target:"_blank",rel:"nofollow noopener noreferrer"},"The Rules of Margin Collapse ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"}))))))}c.isMDXComponent=!0},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var l=n(0),a=n.n(l);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),c=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r({},t,{},e)),n},d=function(e){var t=c(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(l.forwardRef)((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),d=c(n),u=l,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||i;return n?a.a.createElement(m,r({ref:t},s,{components:n})):a.a.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=u;var r={};for(var b in t)hasOwnProperty.call(t,b)&&(r[b]=t[b]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);