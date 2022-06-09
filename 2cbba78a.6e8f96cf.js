(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{161:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(1),r=a(9),o=(a(0),a(231)),l={title:"Branch By Abstraction and application strangulation",description:"These techniques allow breaking large changes into chunks of smaller changes that don't break the system",last_modified:new Date("2022-01-31T10:44:35.327Z")},i={id:"processes-techniques/branch-by-abstraction-application-strangulation",title:"Branch By Abstraction and application strangulation",description:"These techniques allow breaking large changes into chunks of smaller changes that don't break the system",source:"@site/docs\\processes-techniques\\branch-by-abstraction-application-strangulation.md",permalink:"/processes-techniques/branch-by-abstraction-application-strangulation",sidebar:"docs",previous:{title:"Tree",permalink:"/preparation/tree"},next:{title:"Client-first design",permalink:"/processes-techniques/client-first-design"}},c=[{value:"Branch by abstraction",id:"branch-by-abstraction",children:[{value:"Basic idea",id:"basic-idea",children:[]},{value:"Anatomy of the abstraction layer",id:"anatomy-of-the-abstraction-layer",children:[]},{value:"Why not real branches?",id:"why-not-real-branches",children:[]},{value:"Real-world example",id:"real-world-example",children:[]}]},{value:"Application strangulation (also known as Strangler pattern)",id:"application-strangulation-also-known-as-strangler-pattern",children:[{value:"Basic idea",id:"basic-idea-1",children:[]},{value:"Real-world example",id:"real-world-example-1",children:[]}]},{value:"Resources",id:"resources",children:[]}],s={rightToc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"These techniques allow breaking large changes into chunks of smaller changes that don't break the system"),Object(o.b)("h2",{id:"branch-by-abstraction"},"Branch by abstraction"),Object(o.b)("h3",{id:"basic-idea"},"Basic idea"),Object(o.b)("p",null,"Branch by Abstraction is useful if the team needs to replace a certain component of the system, but this needs to be spread out over multiple commits."),Object(o.b)("p",null,"Basically, this is how it works:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Write an abstraction layer on top of the component you need to replace"),Object(o.b)("li",{parentName:"ul"},"Make clients call the abstraction layer instead of the original component",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Could happen in multiple commits"))),Object(o.b)("li",{parentName:"ul"},"Now, use the abstraction layer to switch over to the new component as it is being built. The new layer of indirection could already forward some calls to the new component, or there could be a toggle indicating which component implementation to use.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Will typically happen in multiple commits"))),Object(o.b)("li",{parentName:"ul"},"Once the new component is fully built and the abstraction layer doesn\u2019t call the old component anymore, get rid of the old component"),Object(o.b)("li",{parentName:"ul"},"Get rid of the abstraction layer")),Object(o.b)("h3",{id:"anatomy-of-the-abstraction-layer"},"Anatomy of the abstraction layer"),Object(o.b)("p",null,"Several possibilities:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Interface that both old and new implementation implement",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Allows you to choose which of the implementations (old or new) to instantiate when a consumer requires an object conforming to that interface"))),Object(o.b)("li",{parentName:"ul"},"Actual class that delegates to old or new implementation as needed",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Could be based on some flag (built into the code or in a configuration file) that allows developers working on the new implementation to test it while others are not affected by it yet."),Object(o.b)("li",{parentName:"ul"},"Could use the new implementation for some calls and the old implementation for others."))),Object(o.b)("li",{parentName:"ul"},"Actual layer in application\u2019s architecture",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Example: if you are moving to a new persistence framework and you are using a layered architecture, you could already have an abstraction layer in the form of repositories that encapsulate all interaction with the database. This could allow you to make the change one repository at a time, while repositories you didn\u2019t touch are still using the old persistence framework")))),Object(o.b)("h3",{id:"why-not-real-branches"},"Why not real branches?"),Object(o.b)("p",null,"Drawbacks of using branches for these kinds of big changes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Making large changes means that your branch will probably touch a large part of the codebase. The fact that the changes are large also means you will probably spend a long time working on them, giving the rest of the team plenty of time to make changes to the parts of the codebase you touch in a way that conflicts with what you are doing."),Object(o.b)("li",{parentName:"ul"},"It\u2019s even worse if your team also uses long-lived branches for regular feature development, because that increases the chances that the rest of the team are making incompatible changes that you don\u2019t know about until the team has already invested a lot of time in them.")),Object(o.b)("p",null,"Benefits Branch by Abstraction:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Allows making changes in an incremental way while keeping the system running at all times"),Object(o.b)("li",{parentName:"ul"},"You can still collaborate with other developers in one single branch, meaning that potential conflicts are detected immediately"),Object(o.b)("li",{parentName:"ul"},"Because the system keeps on working, you could choose to release a working version of the system containing a half-completed migration")),Object(o.b)("p",null,"See also ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/processes-techniques/trunk-based-development"}),"Trunk Based Development")),Object(o.b)("h3",{id:"real-world-example"},"Real-world example"),Object(o.b)("p",null,"See ",Object(o.b)("a",{href:"https://github.blog/2015-12-15-move-fast/",target:"_blank",rel:"nofollow noopener noreferrer"},"Move Fast and Fix Things ",Object(o.b)("svg",{class:"embedded-fa-icon"},Object(o.b)("use",{href:"#external-link-alt"})))),Object(o.b)("p",null,"GitHub saw the need to replace a critical part of their platform (merges) with a new implementation"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"change needs to happen without downtimes while deploying on average 60 times a day"),Object(o.b)("li",{parentName:"ul"},"unacceptable to break existing functionality")),Object(o.b)("p",null,"The solution: branch by abstraction!"),Object(o.b)("p",null,"Their abstraction layer: ",Object(o.b)("a",{href:"https://github.com/github/scientist",target:"_blank",rel:"nofollow noopener noreferrer"},"Scientist ",Object(o.b)("svg",{class:"embedded-fa-icon"},Object(o.b)("use",{href:"#external-link-alt"})))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"wraps both old and new behavior"),Object(o.b)("li",{parentName:"ul"},"always runs the old behavior"),Object(o.b)("li",{parentName:"ul"},"decides whether to also run new behavior or not"),Object(o.b)("li",{parentName:"ul"},"measures the durations of all behaviors"),Object(o.b)("li",{parentName:"ul"},"always returns what old behavior returns"),Object(o.b)("li",{parentName:"ul"},"swallows and logs any exceptions thrown by new behavior"),Object(o.b)("li",{parentName:"ul"},"logs any discrepancies between the results obtained from the old and new behavior",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"similar to the ",Object(o.b)("em",{parentName:"li"},"Duplicate Writes")," and ",Object(o.b)("em",{parentName:"li"},"Dark Reads")," in Expand-Contract data migrations (see ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/data/data-schema-migration"}),"Data schema migration"),")")))),Object(o.b)("p",null,"This allowed them to test the new implementation on actual production data, comparing both results and performance. After fixing some bugs, it allowed them to be confident enough to completely switch over to the new behavior in production"),Object(o.b)("h2",{id:"application-strangulation-also-known-as-strangler-pattern"},"Application strangulation (also known as Strangler pattern)"),Object(o.b)("h3",{id:"basic-idea-1"},"Basic idea"),Object(o.b)("p",null,"Very similar to Branch by Abstraction, but operates at different level:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Branch by Abstraction happens within a single codebase, using abstraction mechanisms of the programming language"),Object(o.b)("li",{parentName:"ul"},"Application strangulation could be used to migrate between different applications potentially written in completely different languages. The abstraction layer typically comes in the form of a reverse proxy that decides whether to call the API of the old application or the API of the new application (this could depend on the specific call being made and will likely change throughout the migration)")),Object(o.b)("p",null,"See the real-world example below, or another real-world example: ",Object(o.b)("a",{href:"https://engineering.shopify.com/blogs/engineering/how-shopify-reduced-storefront-response-times-rewrite",target:"_blank",rel:"nofollow noopener noreferrer"},"How Shopify Reduced Storefront Response Times with a Rewrite ",Object(o.b)("svg",{class:"embedded-fa-icon"},Object(o.b)("use",{href:"#external-link-alt"}))),"."),Object(o.b)("h3",{id:"real-world-example-1"},"Real-world example"),Object(o.b)("p",null,"See ",Object(o.b)("a",{href:"https://www.theguardian.com/info/2018/nov/30/bye-bye-mongo-hello-postgres",target:"_blank",rel:"nofollow noopener noreferrer"},"Bye bye Mongo, Hello Postgres ",Object(o.b)("svg",{class:"embedded-fa-icon"},Object(o.b)("use",{href:"#external-link-alt"})))),Object(o.b)("p",null,"The Guardian used application strangulation to move from MongoDB to PostgreSQL, keeping their system working while performing the migration. MongoDB would stay their main source of truth until the migration was completed, but in the meantime they also needed to make sure that all of their data got migrated into PostgreSQL and that the system was able to run on PostgreSQL only once fully switched over."),Object(o.b)("p",null,"Branch By Abstraction could have been an option here, but there was very little separation of concerns in the original application so introducing an abstraction layer would have been costly and risky. Instead, decision was made to build a whole new application next to the old one."),Object(o.b)("p",null,"Once the new application was running next to the other one, the team created a reverse proxy that worked as follows:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Accept incoming traffic"),Object(o.b)("li",{parentName:"ol"},"Forward the traffic to the primary API and return the result to the caller"),Object(o.b)("li",{parentName:"ol"},"Asynchronously forward the traffic to the secondary API"),Object(o.b)("li",{parentName:"ol"},"Compare the results from both APIs and log any differences")),Object(o.b)("p",null,"After migrating the existing data, any differences between the results from both APIs would indicate bugs that needed to be solved. If the team got to the point where there were no differences being logged, they could be confident that the new API works in the same way as the old API. Switching the primary and secondary API in the proxy allowed the team to essentially switch to the new API while still having a fallback in the form of the old API that was still receiving all requests."),Object(o.b)("p",null,"The migration of existing data itself also made use of the fact that both applications had the same API. The flow was as follows:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Get content from the API backed by MongoDB"),Object(o.b)("li",{parentName:"ol"},"Save that content to the API backed by PostgreSQL"),Object(o.b)("li",{parentName:"ol"},"Get the content from the API backed by PostgreSQL"),Object(o.b)("li",{parentName:"ol"},"Verify that the responses from (1) and (3) are identical")),Object(o.b)("p",null,"Finally, when everything was working with the new API as primary, the team got rid of the proxy and the old API in order to complete the migration."),Object(o.b)("p",null,"Note that, during the period in which both APIs were running next to each other, calls for both reads and writes were being forwarded to each API and the results were compared. This is very similar to the ",Object(o.b)("em",{parentName:"p"},"Duplicate Writes")," and ",Object(o.b)("em",{parentName:"p"},"Dark Reads")," in Expand-Contract data migrations (see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/data/data-schema-migration"}),"Data schema migration"),")"),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{href:"https://paulhammant.com/blog/branch_by_abstraction.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Introducing Branch By Abstraction ",Object(o.b)("svg",{class:"embedded-fa-icon"},Object(o.b)("use",{href:"#external-link-alt"})))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{href:"https://trunkbaseddevelopment.com/branch-by-abstraction/",target:"_blank",rel:"nofollow noopener noreferrer"},"Branch By Abstraction ",Object(o.b)("svg",{class:"embedded-fa-icon"},Object(o.b)("use",{href:"#external-link-alt"})))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{href:"https://martinfowler.com/bliki/BranchByAbstraction.html",target:"_blank",rel:"nofollow noopener noreferrer"},"BranchByAbstraction ",Object(o.b)("svg",{class:"embedded-fa-icon"},Object(o.b)("use",{href:"#external-link-alt"})))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{href:"https://continuousdelivery.com/2011/05/make-large-scale-changes-incrementally-with-branch-by-abstraction/",target:"_blank",rel:"nofollow noopener noreferrer"},"Make Large Scale Changes Incrementally with Branch By Abstraction ",Object(o.b)("svg",{class:"embedded-fa-icon"},Object(o.b)("use",{href:"#external-link-alt"})))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{href:"https://trunkbaseddevelopment.com/strangulation/",target:"_blank",rel:"nofollow noopener noreferrer"},"Application strangulation ",Object(o.b)("svg",{class:"embedded-fa-icon"},Object(o.b)("use",{href:"#external-link-alt"}))))))}b.isMDXComponent=!0},231:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},h=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=b(a),u=n,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||o;return a?r.a.createElement(m,i({ref:t},s,{components:a})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);