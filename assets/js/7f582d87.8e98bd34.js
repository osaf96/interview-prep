"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[6350],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,c=p["".concat(o,".").concat(h)]||p[h]||m[h]||i;return n?a.createElement(c,l(l({ref:t},u),{},{components:n})):a.createElement(c,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6605:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],s={title:"Twitter System Design",description:"System Design - Twitter.",last_modified:new Date("2022-06-11T16:40:29.402Z"),sidebar_label:"Twitter System Design"},o=void 0,d={unversionedId:"system-design/twitter-system-design",id:"system-design/twitter-system-design",title:"Twitter System Design",description:"System Design - Twitter.",source:"@site/docs/system-design/twitter-system-design.md",sourceDirName:"system-design",slug:"/system-design/twitter-system-design",permalink:"/interview-prep/system-design/twitter-system-design",draft:!1,tags:[],version:"current",frontMatter:{title:"Twitter System Design",description:"System Design - Twitter.",last_modified:"2022-06-11T16:40:29.402Z",sidebar_label:"Twitter System Design"},sidebar:"docs",previous:{title:"Expectation management",permalink:"/interview-prep/soft-skills/expectation-management"},next:{title:"Cookies and Web Storage",permalink:"/interview-prep/web/cookies-web-storage"}},u={},m=[{value:"Functional Requirements of the System.",id:"functional-requirements-of-the-system",level:2},{value:"Non-Functional Requirements of the System.",id:"non-functional-requirements-of-the-system",level:3},{value:"Characteristics of the System.",id:"characteristics-of-the-system",level:3},{value:"Statistics of the System.",id:"statistics-of-the-system",level:3},{value:"Sub-Systems of the System.",id:"sub-systems-of-the-system",level:3},{value:"How to generate User Timelines.",id:"how-to-generate-user-timelines",level:4},{value:"How to generate Home Timelines.",id:"how-to-generate-home-timelines",level:4},{value:"How to generate the Trending Topics.",id:"how-to-generate-the-trending-topics",level:4},{value:"Database Design.",id:"database-design",level:3},{value:"Choosing a Database.",id:"choosing-a-database",level:4},{value:"How Redis supports the Twitter System",id:"how-redis-supports-the-twitter-system",level:5},{value:"Database Structure.",id:"database-structure",level:4},{value:"Scaling Database.",id:"scaling-database",level:4},{value:"API Design and Implementation.",id:"api-design-and-implementation",level:3},{value:"GET Requests.",id:"get-requests",level:4},{value:"POST Requests.",id:"post-requests",level:4},{value:"PUT Requests.",id:"put-requests",level:4},{value:"DELETE Requests.",id:"delete-requests",level:4},{value:"Authentication.",id:"authentication",level:4},{value:"Authorization.",id:"authorization",level:4},{value:"Rate Limiting.",id:"rate-limiting",level:4},{value:"Error Handling.",id:"error-handling",level:4},{value:"Caching.",id:"caching",level:4},{value:"Monitoring.",id:"monitoring",level:4}],p={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"System Design - Twitter."),(0,i.kt)("h2",{id:"functional-requirements-of-the-system"},"Functional Requirements of the System."),(0,i.kt)("h3",{id:"non-functional-requirements-of-the-system"},"Non-Functional Requirements of the System."),(0,i.kt)("h3",{id:"characteristics-of-the-system"},"Characteristics of the System."),(0,i.kt)("h3",{id:"statistics-of-the-system"},"Statistics of the System."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Write"),(0,i.kt)("td",{parentName:"tr",align:null},"600 per second.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Read"),(0,i.kt)("td",{parentName:"tr",align:null},"600,000 per second.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Total number of Users"),(0,i.kt)("td",{parentName:"tr",align:null},"330 million Monthly Active Users.")))),(0,i.kt)("p",null,"Twitter is a Read Heavy System. So the system that you make should be Read Heavy, Eventual Consistency and Storage Efficient. ",(0,i.kt)("br",null),"\n\ud83d\udcd6Read Heavy: ",(0,i.kt)("em",{parentName:"p"},"Something")," ",(0,i.kt)("br",null),"\n\ud83d\udcd6Eventual Consistency: ",(0,i.kt)("em",{parentName:"p"},"Something")," ",(0,i.kt)("br",null),"\n\ud83d\udcd6Storage Efficient: ",(0,i.kt)("em",{parentName:"p"},"Something")," ",(0,i.kt)("br",null)),(0,i.kt)("h3",{id:"sub-systems-of-the-system"},"Sub-Systems of the System."),(0,i.kt)("h4",{id:"how-to-generate-user-timelines"},"How to generate User Timelines."),(0,i.kt)("h4",{id:"how-to-generate-home-timelines"},"How to generate Home Timelines."),(0,i.kt)("h4",{id:"how-to-generate-the-trending-topics"},"How to generate the Trending Topics."),(0,i.kt)("h3",{id:"database-design"},"Database Design."),(0,i.kt)("h4",{id:"choosing-a-database"},"Choosing a Database."),(0,i.kt)("p",null,"Best choice for the database is Redis and along with it have to use some DB to store the data."),(0,i.kt)("h5",{id:"how-redis-supports-the-twitter-system"},"How Redis supports the Twitter System"),(0,i.kt)("p",null,"\ud83d\udcd6 ",(0,i.kt)("em",{parentName:"p"},"Redis drives Timeline, Twitter's most important service. Timeline is an index of tweets indexed by an id. Chaining tweets together in a list produces the Home Timeline. The User Timeline, which consists of tweets the user has tweeted, is just another list.")," ",(0,i.kt)("br",null)),(0,i.kt)("p",null,"\ud83d\udcd6 ",(0,i.kt)("strong",null,"Hybrid List")," : ",(0,i.kt)("em",{parentName:"p"},"Added Hybrid List to Redis for more predictable memory performance.")," Timeline is a list of Tweet IDs, so it's a list of integers. Each ID is small.",(0,i.kt)("br",null)),(0,i.kt)("p",null,"\ud83d\udcd6 ","_","Redis supports two list types: ziplist and linklist. Ziplist is space efficient. linklist is flexible, but as a doubly linked list has the overhead of two pointers per key, which given the size of the ID is very high overhead.",(0,i.kt)("br",null)),(0,i.kt)("p",null,"\ud83d\udcd6 ",(0,i.kt)("em",{parentName:"p"},"Hybrid List is a linked list of ziplists. A threshold is set of how big each ziplist can be in bytes. In bytes because to memory efficient it helps to allocate and deallocate blocks of the same size. When a list goes over it is spilled into the next ziplist. A ziplist is not recycled until the list is empty, which means it is possible, through deletion, to have each ziplist have only one entry. In practice, tweets aren't deleted all that often."),(0,i.kt)("br",null)),(0,i.kt)("p",null,"\ud83d\udcd6 ",(0,i.kt)("strong",null,"BTree")),(0,i.kt)("p",null,"\u2705   ",(0,i.kt)("em",{parentName:"p"},"Added BTree to Redis to support range queries on hierarchical keys to return a list of results."),(0,i.kt)("br",null)),(0,i.kt)("p",null,"\u2705   ",(0,i.kt)("em",{parentName:"p"},"In Redis the way to deal with secondary keys or fields is a hash map. To have sorted data in order to perform a range query a sorted set is used. Sorted set orders by a score which is a double, so an arbitrary secondary key or an arbitrary name can't be used for the sorting. Since hash map uses a linear search it's not great if there are a lot of secondary keys or fields."),(0,i.kt)("br",null)),(0,i.kt)("p",null,"\u2705   ",(0,i.kt)("em",{parentName:"p"},"BTree is the attempt fix the shortcomings of hash map and sorted set. It's better to just have one data structure that does what you want. It's easier to understand and reason about."),(0,i.kt)("br",null)),(0,i.kt)("p",null,"\u2705   ",(0,i.kt)("em",{parentName:"p"},"Borrowed the BSD implementation of BTree and added it to Redis to create a BTree. Supports key lookup as well as range query. Has good lookup performance. The code is relatively simple. The downside is BTree is not memory efficient. It has a lot of meta data overhead due to the pointers."),(0,i.kt)("br",null)),(0,i.kt)("h4",{id:"database-structure"},"Database Structure."),(0,i.kt)("p",null,"\u2705 User Table"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"User ID"),(0,i.kt)("td",{parentName:"tr",align:null},"Unique ID of the User.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Name"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the User.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Screen Name"),(0,i.kt)("td",{parentName:"tr",align:null},"Screen Name of the User.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Location"),(0,i.kt)("td",{parentName:"tr",align:null},"Location of the User.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Profile Image URL"),(0,i.kt)("td",{parentName:"tr",align:null},"Profile Image URL of the User.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Created At"),(0,i.kt)("td",{parentName:"tr",align:null},"Created At of the User.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Followers"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of Followers of the User.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Following"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of Following of the User.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Tweets"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of Tweets of the User.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Status"),(0,i.kt)("td",{parentName:"tr",align:null},"Status of the User.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Time Zone"),(0,i.kt)("td",{parentName:"tr",align:null},"Time Zone of the User.")))),(0,i.kt)("p",null,"\u2705 Tweet Table"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Tweet ID"),(0,i.kt)("td",{parentName:"tr",align:null},"Unique ID of the Tweet.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"User ID"),(0,i.kt)("td",{parentName:"tr",align:null},"User ID of the User.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Text"),(0,i.kt)("td",{parentName:"tr",align:null},"Text of the Tweet.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Created At"),(0,i.kt)("td",{parentName:"tr",align:null},"Created At of the Tweet.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Retweet Count"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of Retweets of the Tweet.")))),(0,i.kt)("p",null,"\u2705 Follower Table"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"User ID"),(0,i.kt)("td",{parentName:"tr",align:null},"User ID of the User.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Follower ID"),(0,i.kt)("td",{parentName:"tr",align:null},"User ID of the Follower.")))),(0,i.kt)("h4",{id:"scaling-database"},"Scaling Database."),(0,i.kt)("h3",{id:"api-design-and-implementation"},"API Design and Implementation."),(0,i.kt)("h4",{id:"get-requests"},"GET Requests."),(0,i.kt)("h4",{id:"post-requests"},"POST Requests."),(0,i.kt)("h4",{id:"put-requests"},"PUT Requests."),(0,i.kt)("h4",{id:"delete-requests"},"DELETE Requests."),(0,i.kt)("h4",{id:"authentication"},"Authentication."),(0,i.kt)("h4",{id:"authorization"},"Authorization."),(0,i.kt)("h4",{id:"rate-limiting"},"Rate Limiting."),(0,i.kt)("h4",{id:"error-handling"},"Error Handling."),(0,i.kt)("h4",{id:"caching"},"Caching."),(0,i.kt)("h4",{id:"monitoring"},"Monitoring."))}h.isMDXComponent=!0}}]);