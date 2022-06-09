"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[3162],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4412:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Client-first design",description:"Often, it makes sense to start from the client point of view",last_modified:new Date("2021-10-03T14:52:55.756Z")},s=void 0,u={unversionedId:"processes-techniques/client-first-design",id:"processes-techniques/client-first-design",title:"Client-first design",description:"Often, it makes sense to start from the client point of view",source:"@site/docs/processes-techniques/client-first-design.md",sourceDirName:"processes-techniques",slug:"/processes-techniques/client-first-design",permalink:"/interview-prep/processes-techniques/client-first-design",draft:!1,tags:[],version:"current",frontMatter:{title:"Client-first design",description:"Often, it makes sense to start from the client point of view",last_modified:"2021-10-03T14:52:55.756Z"},sidebar:"docs",previous:{title:"Branch By Abstraction and application strangulation",permalink:"/interview-prep/processes-techniques/branch-by-abstraction-application-strangulation"},next:{title:"Code review and collaboration workflows",permalink:"/interview-prep/processes-techniques/code-review-collaboration"}},c={},d=[{value:"Basic idea",id:"basic-idea",level:2},{value:"Code",id:"code",level:2},{value:"Errors",id:"errors",level:2},{value:"Horizontal layers, frontend and backend",id:"horizontal-layers-frontend-and-backend",level:2},{value:"Public APIs",id:"public-apis",level:2},{value:"Resources",id:"resources",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Often, it makes sense to start from the client point of view"),(0,i.kt)("h2",{id:"basic-idea"},"Basic idea"),(0,i.kt)("p",null,"When designing something (functions, classes, methods, APIs, ...), it often makes sense to start from how it's going to be used and base your design on that"),(0,i.kt)("p",null,"This ensures that what you're creating is actually useful and that it makes sense in the context of where it's used"),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("p",null,"Client-first design for functions, classes, methods, utilities, libraries, ..."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When in doubt, first write the code that will be using these functions, classes, methods, utilities or libraries",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Helps with ensuring that concepts and structure make sense from the client side"),(0,i.kt)("li",{parentName:"ul"},"Helps to ensure that you're not missing anything that's needed on the client side"),(0,i.kt)("li",{parentName:"ul"},"Prevents building logic that is actually not needed at all"),(0,i.kt)("li",{parentName:"ul"},"Prevents building an awkward API that client code will later have to work around or that will need to be changed once client code gets written"))),(0,i.kt)("li",{parentName:"ul"},"Avoid writing utilities or shared libraries without knowing how they're going to be used",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'"Before software can be reusable it first has to be usable" - Ralph Johnson'),(0,i.kt)("li",{parentName:"ul"},"If it's unclear how exactly the shared code is going to be used, it's probably too early to write it"),(0,i.kt)("li",{parentName:"ul"},"If you're writing the library purely for external use, find a way to discover how it's really going to be used",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It can help to build your own example implementations for different use cases"),(0,i.kt)("li",{parentName:"ul"},"It can help to design the library with a small representative sample of client developers"),(0,i.kt)("li",{parentName:"ul"},"It can make sense to gather feedback through alpha/beta programs"))),(0,i.kt)("li",{parentName:"ul"},"It can make sense to write the shared code together with two or more different kinds of client code, as this will prevent you from building something so tied to one client's use case that it's not useful to other clients"))),(0,i.kt)("li",{parentName:"ul"},"It can help to build one part of functionality at a time")),(0,i.kt)("h2",{id:"errors"},"Errors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When defining custom exception classes or error types, consider including some extra information that can be useful to the caller for figuring out what happened or for proper logging",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Can be especially important when building a reusable library"))),(0,i.kt)("li",{parentName:"ul"},"Throwing different kinds of errors might not make sense if the caller has only one way to handle them")),(0,i.kt)("h2",{id:"horizontal-layers-frontend-and-backend"},"Horizontal layers, frontend and backend"),(0,i.kt)("p",null,"Example: frontend -> API layer -> business logic layer -> persistence layer -> DB"),(0,i.kt)("p",null,"Some potential approaches with benefits/drawbacks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Top-down, front-to-back")," (pure client-first)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"First design frontend and APIs it needs, base business logic and the rest of the backend on that"),(0,i.kt)("li",{parentName:"ul"},"Allows building actual frontend with mocked data to get quick detailed feedback from team or customers"),(0,i.kt)("li",{parentName:"ul"},"Might lead to better user experience, since that is what you actually start from"),(0,i.kt)("li",{parentName:"ul"},"Might lead to APIs that return too much data or require impractical/heavy operations on the backend side"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bottom-up, back-to-front")," (opposite of client-first)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"First design DB and business logic, base API on business logic, base frontend on API"),(0,i.kt)("li",{parentName:"ul"},"Allows starting from a solid technical foundation"),(0,i.kt)("li",{parentName:"ul"},"Could reduce risk if there are some crucial unknowns regarding low-level implementation that can have high impact on architecture (prototyping could be an alternative, see ",(0,i.kt)("a",{parentName:"li",href:"/mindset/fail-fast#tracer-bullets-and-prototypes"},"Fail fast - Tracer bullets and prototypes"),")"),(0,i.kt)("li",{parentName:"ul"},"Might lead to a frontend with bad user experience because it's based on a more technical perspective"),(0,i.kt)("li",{parentName:"ul"},"Might lead to APIs that are impractical to use for the frontend and require the frontend to make more calls, stitch data together at the client side, ..."),(0,i.kt)("li",{parentName:"ul"},"Might require the API to be adjusted once the frontend is written"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Outside-in"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"First design frontend user experience as well as the DB and business logic, then build API layer together with detailed frontend implementation"),(0,i.kt)("li",{parentName:"ul"},"Can be a good approach if it's really clear what the main concepts are"),(0,i.kt)("li",{parentName:"ul"},"Might lead to a mismatch between what the frontend requires and what the backend can offer"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Middle-out"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'First design API as "contract" between frontend and backend, then design actual frontend and rest of backend'),(0,i.kt)("li",{parentName:"ul"},"Allows taking into account the needs of both backend and frontend in the API design"),(0,i.kt)("li",{parentName:"ul"},"Allows parallel implementation of frontend and backend once the contract is in place"),(0,i.kt)("li",{parentName:"ul"},"Hard to get this right",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Typically some frontend needs or backend limitations are only discovered during implementation"),(0,i.kt)("li",{parentName:"ul"},"Might require adjustments to API as frontend and backend are written")))))),(0,i.kt)("p",null,"Note: there is no right or wrong here!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Best approach depends on context!"),(0,i.kt)("li",{parentName:"ul"},"Could make sense to combine them"),(0,i.kt)("li",{parentName:"ul"},"Could make sense to switch between them as you go"),(0,i.kt)("li",{parentName:"ul"},"Keep in mind potential pitfalls listed above"),(0,i.kt)("li",{parentName:"ul"},"Regardless of where you start, it helps to have some awareness of how the part you're currently focusing on affects others parts")),(0,i.kt)("p",null,"Interesting alternative: ",(0,i.kt)("strong",{parentName:"p"},"thin vertical slices")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Instead of working based on horizontal layers, build thin slices of full-stack functionality"),(0,i.kt)("li",{parentName:"ul"},"If slice is thin enough, all the technical building blocks can be designed together"),(0,i.kt)("li",{parentName:"ul"},"Might need a good foundation of existing full-stack functionality first")),(0,i.kt)("h2",{id:"public-apis"},"Public APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Similar to writing shared libraries (see above, ",(0,i.kt)("a",{parentName:"li",href:"#code"},"Code"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Others will be building client code that builds on top of the public API"),(0,i.kt)("li",{parentName:"ul"},"If same API will also be used internally, take care not to build API that is too tied to your internal use case"),(0,i.kt)("li",{parentName:"ul"},"If API is purely for external use, find a way to discover how it's really going to be used (own example implementations of client use cases, input from small representative sample of client developers, alpha/beta programs, ...)"))),(0,i.kt)("li",{parentName:"ul"},"Similar to frontend from horizontal layers (see above, ",(0,i.kt)("a",{parentName:"li",href:"#horizontal-layers-frontend-and-backend"},"Horizontal layers, frontend and backend"),")")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://www.happyvalley.io/posts/build-front-to-back/",target:"_blank",rel:"nofollow noopener noreferrer"},"Build software from front-to-back ",(0,i.kt)("svg",{class:"embedded-fa-icon"},(0,i.kt)("use",{href:"#external-link-alt"})))," (",(0,i.kt)("a",{href:"https://news.ycombinator.com/item?id=23179850",target:"_blank",rel:"nofollow noopener noreferrer"},"HN comments ",(0,i.kt)("svg",{class:"embedded-fa-icon"},(0,i.kt)("use",{href:"#external-link-alt"}))),")"),(0,i.kt)("li",{parentName:"ul"},"Some articles from c2 wiki:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://wiki.c2.com/?ProvingTopDownDesignHarmful",target:"_blank",rel:"nofollow noopener noreferrer"},"Proving Top Down Design Harmful ",(0,i.kt)("svg",{class:"embedded-fa-icon"},(0,i.kt)("use",{href:"#external-link-alt"})))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://wiki.c2.com/?TwoWaysToDesign",target:"_blank",rel:"nofollow noopener noreferrer"},"Two Ways To Design ",(0,i.kt)("svg",{class:"embedded-fa-icon"},(0,i.kt)("use",{href:"#external-link-alt"})))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://wiki.c2.com/?BottomUpProgramming",target:"_blank",rel:"nofollow noopener noreferrer"},"Bottom Up Programming ",(0,i.kt)("svg",{class:"embedded-fa-icon"},(0,i.kt)("use",{href:"#external-link-alt"})))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://wiki.c2.com/?MiddleOut",target:"_blank",rel:"nofollow noopener noreferrer"},"Middle Out ",(0,i.kt)("svg",{class:"embedded-fa-icon"},(0,i.kt)("use",{href:"#external-link-alt"}))))))))}f.isMDXComponent=!0}}]);