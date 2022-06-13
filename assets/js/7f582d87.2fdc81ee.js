"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[6350],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),u=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),p=u(a),k=r,h=p["".concat(o,".").concat(k)]||p[k]||d[k]||l;return a?n.createElement(h,i(i({ref:e},m),{},{components:a})):n.createElement(h,i({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=p;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6605:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],s={title:"Twitter System Design",description:"System Design - Twitter.",last_modified:new Date("2022-06-11T16:40:29.402Z"),sidebar_label:"Twitter System Design"},o=void 0,u={unversionedId:"system-design/twitter-system-design",id:"system-design/twitter-system-design",title:"Twitter System Design",description:"System Design - Twitter.",source:"@site/docs/system-design/twitter-system-design.md",sourceDirName:"system-design",slug:"/system-design/twitter-system-design",permalink:"/interview-prep/system-design/twitter-system-design",draft:!1,tags:[],version:"current",frontMatter:{title:"Twitter System Design",description:"System Design - Twitter.",last_modified:"2022-06-11T16:40:29.402Z",sidebar_label:"Twitter System Design"},sidebar:"docs",previous:{title:"Expectation management",permalink:"/interview-prep/soft-skills/expectation-management"},next:{title:"Cookies and Web Storage",permalink:"/interview-prep/web/cookies-web-storage"}},m={},d=[{value:"Functional Requirements of the System.",id:"functional-requirements-of-the-system",level:2},{value:"Non-Functional Requirements of the System.",id:"non-functional-requirements-of-the-system",level:2},{value:"Capacity Estimation",id:"capacity-estimation",level:2},{value:"Characteristics of the System.",id:"characteristics-of-the-system",level:2},{value:"Statistics of the System.",id:"statistics-of-the-system",level:2},{value:"Sub-Systems of the System.",id:"sub-systems-of-the-system",level:2},{value:"How to generate User Timelines.",id:"how-to-generate-user-timelines",level:3},{value:"How to generate Home Timelines.",id:"how-to-generate-home-timelines",level:3},{value:"How to generate the Trending Topics.",id:"how-to-generate-the-trending-topics",level:3},{value:"Database Design.",id:"database-design",level:2},{value:"Choosing a Database.",id:"choosing-a-database",level:3},{value:"How Redis supports the Twitter System",id:"how-redis-supports-the-twitter-system",level:4},{value:"Database Structure.",id:"database-structure",level:3},{value:"Scaling Database.",id:"scaling-database",level:3},{value:"API Design and Implementation.",id:"api-design-and-implementation",level:2},{value:"GET Requests.",id:"get-requests",level:3},{value:"POST Requests.",id:"post-requests",level:3},{value:"DELETE Requests.",id:"delete-requests",level:3},{value:"Authentication.",id:"authentication",level:3},{value:"Error Handling.",id:"error-handling",level:3},{value:"Caching.",id:"caching",level:3},{value:"Monitoring.",id:"monitoring",level:3},{value:"References",id:"references",level:2}],p={toc:d};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"System Design - Twitter."),(0,l.kt)("h2",{id:"functional-requirements-of-the-system"},"Functional Requirements of the System."),(0,l.kt)("ul",null,(0,l.kt)("li",null,"Users should be able to create tweets."),(0,l.kt)("li",null,"Users should be able to search for tweets by query."),(0,l.kt)("li",null,"Tweet content will be restricted to 280 characters of text.")),(0,l.kt)("h2",{id:"non-functional-requirements-of-the-system"},"Non-Functional Requirements of the System."),(0,l.kt)("ul",null,(0,l.kt)("li",null,"The system needs to be highly available."),(0,l.kt)("li",null,"The system should be highly reliable. Tweets created by users should never be lost."),(0,l.kt)("li",null,"The accepatble latency for search results is 200ms.")),(0,l.kt)("h2",{id:"capacity-estimation"},"Capacity Estimation"),(0,l.kt)("p",null,"We have 500M new tweets each day. Given that the average tweet is 33 characters long, we can estimate a conservative average tweet size of 134 bytes. We calculated that by multiplying the character length by the character encoding's byte size per encoded character. We need to use the character encoding utf8mb4 to support the emoji's used in tweets. utf8mb4 uses up to 4 bytes to encode each character. Lastly we add two bytes to account of the overhead of storing text in mysql."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Character Length"),(0,l.kt)("th",{parentName:"tr",align:null},"Character Encoding"),(0,l.kt)("th",{parentName:"tr",align:null},"Average Tweet Size"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"33"),(0,l.kt)("td",{parentName:"tr",align:null},"utf8mb4"),(0,l.kt)("td",{parentName:"tr",align:null},"134")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Average Tweet Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Total Tweets"),(0,l.kt)("th",{parentName:"tr",align:null},"Total Bytes"),(0,l.kt)("th",{parentName:"tr",align:null},"Per Year Storage"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"134"),(0,l.kt)("td",{parentName:"tr",align:null},"500M"),(0,l.kt)("td",{parentName:"tr",align:null},"134_33_4 ~ 67 GBs"),(0,l.kt)("td",{parentName:"tr",align:null},"67GB ","*"," 365 days = 24.445 TB")))),(0,l.kt)("h2",{id:"characteristics-of-the-system"},"Characteristics of the System."),(0,l.kt)("h2",{id:"statistics-of-the-system"},"Statistics of the System."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Write"),(0,l.kt)("td",{parentName:"tr",align:null},"600 per second.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Read"),(0,l.kt)("td",{parentName:"tr",align:null},"600,000 per second.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Total number of Users"),(0,l.kt)("td",{parentName:"tr",align:null},"330 million Monthly Active Users.")))),(0,l.kt)("p",null,"Twitter is a Read Heavy System. So the system that you make should be Read Heavy, Eventual Consistency and Storage Efficient. ",(0,l.kt)("br",null),"\n\ud83d\udcd6Read Heavy: ",(0,l.kt)("em",{parentName:"p"},"Something")," ",(0,l.kt)("br",null),"\n\ud83d\udcd6Eventual Consistency: ",(0,l.kt)("em",{parentName:"p"},"Something")," ",(0,l.kt)("br",null),"\n\ud83d\udcd6Storage Efficient: ",(0,l.kt)("em",{parentName:"p"},"Something")," ",(0,l.kt)("br",null)),(0,l.kt)("h2",{id:"sub-systems-of-the-system"},"Sub-Systems of the System."),(0,l.kt)("h3",{id:"how-to-generate-user-timelines"},"How to generate User Timelines."),(0,l.kt)("h3",{id:"how-to-generate-home-timelines"},"How to generate Home Timelines."),(0,l.kt)("h3",{id:"how-to-generate-the-trending-topics"},"How to generate the Trending Topics."),(0,l.kt)("h2",{id:"database-design"},"Database Design."),(0,l.kt)("h3",{id:"choosing-a-database"},"Choosing a Database."),(0,l.kt)("p",null,"Best choice for the database is Redis and along with it have to use some DB to store the data."),(0,l.kt)("h4",{id:"how-redis-supports-the-twitter-system"},"How Redis supports the Twitter System"),(0,l.kt)("p",null,"\ud83d\udcd6 ",(0,l.kt)("em",{parentName:"p"},"Redis drives Timeline, Twitter's most important service. Timeline is an index of tweets indexed by an id. Chaining tweets together in a list produces the Home Timeline. The User Timeline, which consists of tweets the user has tweeted, is just another list.")," ",(0,l.kt)("br",null)),(0,l.kt)("h3",{id:"database-structure"},"Database Structure."),(0,l.kt)("p",null,"\u2705 User Table"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"User ID"),(0,l.kt)("td",{parentName:"tr",align:null},"Unique ID of the User.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Followers"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of Followers of the User.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tweets"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of Tweets of the User.")))),(0,l.kt)("p",null,"\u2705 Tweet Table"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tweet ID"),(0,l.kt)("td",{parentName:"tr",align:null},"Unique ID of the Tweet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"User ID"),(0,l.kt)("td",{parentName:"tr",align:null},"User ID of the User.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:null},"Text of the Tweet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Retweet Count"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of Retweets of the Tweet.")))),(0,l.kt)("p",null,"\u2705 Follower Table"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"User ID"),(0,l.kt)("td",{parentName:"tr",align:null},"User ID of the User.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Follower ID"),(0,l.kt)("td",{parentName:"tr",align:null},"User ID of the Follower.")))),(0,l.kt)("h3",{id:"scaling-database"},"Scaling Database."),(0,l.kt)("h2",{id:"api-design-and-implementation"},"API Design and Implementation."),(0,l.kt)("h3",{id:"get-requests"},"GET Requests."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},"Get the Home Timeline of the User.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/user/:user_id"),(0,l.kt)("td",{parentName:"tr",align:null},"Get the User Timeline of the User.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/tweet/:tweet_id"),(0,l.kt)("td",{parentName:"tr",align:null},"Get the Tweet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/user/:user_id/followers"),(0,l.kt)("td",{parentName:"tr",align:null},"Get the Followers of the User.")))),(0,l.kt)("h3",{id:"post-requests"},"POST Requests."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/user/:user_id/follow"),(0,l.kt)("td",{parentName:"tr",align:null},"Follow the User.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/user/:user_id/unfollow"),(0,l.kt)("td",{parentName:"tr",align:null},"Unfollow the User.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/tweet"),(0,l.kt)("td",{parentName:"tr",align:null},"Post a Tweet.")))),(0,l.kt)("h3",{id:"delete-requests"},"DELETE Requests."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/user/:user_id/unfollow"),(0,l.kt)("td",{parentName:"tr",align:null},"Unfollow the User.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/tweet/:tweet_id"),(0,l.kt)("td",{parentName:"tr",align:null},"Delete the Tweet.")))),(0,l.kt)("h3",{id:"authentication"},"Authentication."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/login"),(0,l.kt)("td",{parentName:"tr",align:null},"Login the User.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/logout"),(0,l.kt)("td",{parentName:"tr",align:null},"Logout the User.")))),(0,l.kt)("h3",{id:"error-handling"},"Error Handling."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/error"),(0,l.kt)("td",{parentName:"tr",align:null},"Get the Error.")))),(0,l.kt)("h3",{id:"caching"},"Caching."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/cache"),(0,l.kt)("td",{parentName:"tr",align:null},"Get the Cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/cache/clear"),(0,l.kt)("td",{parentName:"tr",align:null},"Clear the Cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/cache/clear/:key"),(0,l.kt)("td",{parentName:"tr",align:null},"Clear the Cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/cache/put"),(0,l.kt)("td",{parentName:"tr",align:null},"Put the Cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/cache/put/:key"),(0,l.kt)("td",{parentName:"tr",align:null},"Put the Cache.")))),(0,l.kt)("h3",{id:"monitoring"},"Monitoring."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"API"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/metrics"),(0,l.kt)("td",{parentName:"tr",align:null},"Get the Metrics.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/metrics/clear"),(0,l.kt)("td",{parentName:"tr",align:null},"Clear the Metrics.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/metrics/clear/:key"),(0,l.kt)("td",{parentName:"tr",align:null},"Clear the Metrics.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/metrics/put"),(0,l.kt)("td",{parentName:"tr",align:null},"Put the Metrics.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/metrics/put/:key"),(0,l.kt)("td",{parentName:"tr",align:null},"Put the Metrics.")))),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("a",{href:"https://www.youtube.com/watch?v=wYk0xPP_P_8"},"Twitter system design | twitter Software architecture | twitter interview questions.")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"https://www.youtube.com/watch?v=QH2-TGUlwu4"},"Redis: A Scalable NoSQL Database"))))}k.isMDXComponent=!0}}]);