(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{197:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(1),r=a(9),o=(a(0),a(231)),i={title:"Cookies and Web Storage",description:"What are Cookies and Web Storage? What do they have in common? What are their differences?",last_modified:new Date("2022-01-31T10:44:35.355Z")},l={id:"web/cookies-web-storage",title:"Cookies and Web Storage",description:"What are Cookies and Web Storage? What do they have in common? What are their differences?",source:"@site/docs\\web\\cookies-web-storage.md",permalink:"/interview-prep/web/cookies-web-storage",sidebar:"docs",previous:{title:"Expectation management",permalink:"/interview-prep/soft-skills/expectation-management"},next:{title:"Box model (CSS)",permalink:"/interview-prep/web/css/box-model"}},s=[{value:"What they have in common",id:"what-they-have-in-common",children:[]},{value:"Cookies",id:"cookies",children:[]},{value:"Web Storage",id:"web-storage",children:[]},{value:"Resources",id:"resources",children:[]}],c={rightToc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"What are Cookies and Web Storage? What do they have in common? What are their differences?"),Object(o.b)("h2",{id:"what-they-have-in-common"},"What they have in common"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Solution for storing data client-side"),Object(o.b)("li",{parentName:"ul"},"Function as a kind of key-value store, allowing to store string values")),Object(o.b)("h2",{id:"cookies"},"Cookies"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Are typically set from the server (as part of a response to the client) using ",Object(o.b)("inlineCode",{parentName:"li"},"Set-Cookie")," headers"),Object(o.b)("li",{parentName:"ul"},"Are sent automatically as ",Object(o.b)("inlineCode",{parentName:"li"},"Cookie")," headers with each request to a domain and path matching the cookie's specified ",Object(o.b)("inlineCode",{parentName:"li"},"Domain")," and ",Object(o.b)("inlineCode",{parentName:"li"},"Path"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Good for information that needs to be sent to the server on each call (for example tokens)"),Object(o.b)("li",{parentName:"ul"},"Can be particularly handy in cases where it's hard to control the actual request made to the server (examples: GET request from and ",Object(o.b)("inlineCode",{parentName:"li"},"<img>")," tag, server-side rendering where each navigation loads a new page from the server, ...)"),Object(o.b)("li",{parentName:"ul"},"Not good for storing large amounts of data that don't need to be sent every time"))),Object(o.b)("li",{parentName:"ul"},"Lifetime:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Session cookies: no specified expiry date or max age. Normally lasts until the browser is shut down, although browsers may use ",Object(o.b)("em",{parentName:"li"},"session restoring")," which means they survive across browser restarts"),Object(o.b)("li",{parentName:"ul"},"Permanent cookies: specific expiry date (specified through ",Object(o.b)("inlineCode",{parentName:"li"},"Expires"),") or max age (specified through ",Object(o.b)("inlineCode",{parentName:"li"},"Max-Age"),")"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Secure")," flag, if turned on the cookie can only be sent over HTTPS"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"HttpOnly")," flag, if turned on the cookie cannot be accessed by JavaScript",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Recommended for storing sensitive information like tokens, as this helps prevent tokens from being stolen through XSS (cross-site scripting)"),Object(o.b)("li",{parentName:"ul"},"Cookies without this flag can be read/written by JavaScript (but only from JavaScript that was loaded by a page in a matching domain)"),Object(o.b)("li",{parentName:"ul"},"Cookies with the flag turned on can still be viewed and edited by the user, for example through developer tools!"))),Object(o.b)("li",{parentName:"ul"},"Risk of CSRF (cross-site request forgery attacks), where a completely different site makes a request to your backend, counting on the fact that cookies holding tokens will automatically be sent",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Can be mitigated by also requiring a CSRF token to be sent in a way that requires JavaScript being involved. An example is requiring the client to get the token from a cookie and then put it in a header (remember that cookies for a certain domain can only be accessed by JavaScript loaded by pages in that domain).")))),Object(o.b)("h2",{id:"web-storage"},"Web Storage"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Can be set and read from JavaScript loaded by a page with matching origin (origin = ",Object(o.b)("inlineCode",{parentName:"li"},"protocol://host:port"),")",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Values don't get sent to the server unless JavaScript adds it to a request"),Object(o.b)("li",{parentName:"ul"},"Ideal for storing preferences, scores, ... that don't need to be stored on the server (or should be able to survive page reloads without asking the server for them again)"))),Object(o.b)("li",{parentName:"ul"},"Can generally store more data than cookies (something along the lines of 5MB in total per domain, versus 4KB per cookie)"),Object(o.b)("li",{parentName:"ul"},"Lifetime:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"sessionStorage"),": keeps the data as long as the page is open",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Survives page reloads and restores"),Object(o.b)("li",{parentName:"ul"},"Opening the page in a new tab or window gives it its own separate ",Object(o.b)("inlineCode",{parentName:"li"},"sessionStorage")),Object(o.b)("li",{parentName:"ul"},"In some browsers, duplicating a tab gives the new tab its own separate ",Object(o.b)("inlineCode",{parentName:"li"},"sessionStorage"),", but the data from the original tab's ",Object(o.b)("inlineCode",{parentName:"li"},"sessionStorage")," is initially copied into it"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"localStorage"),": stays until cleared through JavaScript or the user clearing browser data"))),Object(o.b)("li",{parentName:"ul"},"Interesting feature: ",Object(o.b)("inlineCode",{parentName:"li"},"StorageEvent")," fired when storage is changed, could be used within your web application to trigger certain things or even as a mechanism to communicate between different instances of your web application (in different windows or tabs) within the same browser")),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",target:"_blank",rel:"nofollow noopener noreferrer"},"HTTP cookies ",Object(o.b)("svg",{class:"embedded-fa-icon"},Object(o.b)("use",{href:"#external-link-alt"})))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API",target:"_blank",rel:"nofollow noopener noreferrer"},"Web Storage API ",Object(o.b)("svg",{class:"embedded-fa-icon"},Object(o.b)("use",{href:"#external-link-alt"})))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{href:"https://stackoverflow.com/questions/19867599/what-is-the-difference-between-localstorage-sessionstorage-session-and-cookies",target:"_blank",rel:"nofollow noopener noreferrer"},"What is the difference between localStorage, sessionStorage, session and cookies? ",Object(o.b)("svg",{class:"embedded-fa-icon"},Object(o.b)("use",{href:"#external-link-alt"})))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{href:"https://stackoverflow.com/questions/8945744/could-someone-explain-the-life-of-a-sessionstorage-object",target:"_blank",rel:"nofollow noopener noreferrer"},"Could someone explain the life of a sessionStorage object? ",Object(o.b)("svg",{class:"embedded-fa-icon"},Object(o.b)("use",{href:"#external-link-alt"})))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{href:"https://stackoverflow.com/questions/4201239/in-html5-is-the-localstorage-object-isolated-per-page-domain",target:"_blank",rel:"nofollow noopener noreferrer"},"In HTML5, is the localStorage object isolated per page/domain? ",Object(o.b)("svg",{class:"embedded-fa-icon"},Object(o.b)("use",{href:"#external-link-alt"}))))))}b.isMDXComponent=!0},231:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return a?r.a.createElement(m,l({ref:t},c,{components:a})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);