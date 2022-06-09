"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[2167],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9713:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={title:"CAP theorem",description:"The CAP theorem and its implications for distributed data stores",last_modified:new Date("2020-05-30T13:54:15.000Z")},l=void 0,c={unversionedId:"data/cap-theorem",id:"data/cap-theorem",title:"CAP theorem",description:"The CAP theorem and its implications for distributed data stores",source:"@site/docs/data/cap-theorem.md",sourceDirName:"data",slug:"/data/cap-theorem",permalink:"/interview-prep/about/data/cap-theorem",draft:!1,tags:[],version:"current",frontMatter:{title:"CAP theorem",description:"The CAP theorem and its implications for distributed data stores",last_modified:"2020-05-30T13:54:15.000Z"},sidebar:"docs",previous:{title:"Solving Leetcode Questions",permalink:"/interview-prep/about/about/solving-leetcode-problems"},next:{title:"Data schema migration",permalink:"/interview-prep/about/data/data-schema-migration"}},u={},p=[{value:"Basic idea",id:"basic-idea",level:2},{value:"Criticism",id:"criticism",level:2},{value:"CAP consistency vs. ACID consistency",id:"cap-consistency-vs-acid-consistency",level:2},{value:"SQL Server example",id:"sql-server-example",level:3},{value:"Resources",id:"resources",level:2}],d={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The CAP theorem and its implications for distributed data stores"),(0,i.kt)("h2",{id:"basic-idea"},"Basic idea"),(0,i.kt)("p",null,"This theorem states that it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Consistency"),": Every read returns either the relevant value as it was written by the latest successful write or an error"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Availability"),": Every request receives a non-error response"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Partition tolerance"),": The system keeps working, even if any number of messages is dropped or delayed by the network that connects the different instances")),(0,i.kt)("p",null,"Implications:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"No distributed system is safe from network failures, thus network partitioning generally has to be tolerated. In the presence of a partition, one is then left with two options: consistency or availability. When choosing consistency over availability, the system will return an error or a time-out if particular information cannot be guaranteed to be up to date due to network partitioning. When choosing availability over consistency, the system will always process the query and try to return the most recent available version of the information, even if it cannot guarantee it is up to date due to network partitioning."),(0,i.kt)("p",{parentName:"blockquote"},"In the absence of network failure \u2013 that is, when the distributed system is running normally \u2013 both availability and consistency can be satisfied")),(0,i.kt)("h2",{id:"criticism"},"Criticism"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Can be misleading if presented as "pick 2 out of 3"',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Every distributed system has to assume the possibility of network failures, so actually the trade-off is between consistency and availability"),(0,i.kt)("li",{parentName:"ul"},"When the network is working correctly, you can still have both consistency and availability at the same time (you don't have to abandon 1 out of the 3 at all times)"))),(0,i.kt)("li",{parentName:"ul"},"Notion of consistency is limited and can be confusing",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Consistency as defined in CAP theorem is actually linearizability (preventing a read from returning a value that's different from the last written value, basically making it seem like there is only one copy of the data rather than multiple copies which might not have caught up with each other)"),(0,i.kt)("li",{parentName:"ul"},"There are also other consistency models in the distributed systems research, plus other uses of the term ",(0,i.kt)("em",{parentName:"li"},"consistency")," in the data store world",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For an overview (not necessarily complete) of consistency models for distributed systems, take a look at ",(0,i.kt)("a",{href:"https://jepsen.io/consistency",target:"_blank",rel:"nofollow noopener noreferrer"},"Consistency Models ",(0,i.kt)("svg",{class:"embedded-fa-icon"},(0,i.kt)("use",{href:"#external-link-alt"})))))))),(0,i.kt)("li",{parentName:"ul"},"Only takes into account network partitions (nodes that are alive but disconnected from each other)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ignores dead nodes, etc.")))),(0,i.kt)("p",null,"Still, the CAP theorem has been of large historical importance as it encouraged people to also explore distributed systems that limit consistency in favor of availability, which can make sense for certain large-scale web services. This has been an important inspiration for the NoSQL movement."),(0,i.kt)("h2",{id:"cap-consistency-vs-acid-consistency"},"CAP consistency vs. ACID consistency"),(0,i.kt)("p",null,"See also ",(0,i.kt)("a",{parentName:"p",href:"/data/sql/acid"},"ACID properties")),(0,i.kt)("p",null,"Both mean something completely different:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CAP consistency: Every read returns either the relevant value as it was written by the latest successful write or an error"),(0,i.kt)("li",{parentName:"ul"},"ACID consistency: The execution of the transaction must bring the database to a valid state, respecting the database\u2019s schema")),(0,i.kt)("p",null,"In fact, when relational databases are deployed in a distributed fashion, there are typically different modes available that can have an impact on CAP consistency. "),(0,i.kt)("h3",{id:"sql-server-example"},"SQL Server example"),(0,i.kt)("p",null,"See: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://docs.microsoft.com/en-us/sql/database-engine/availability-groups/windows/availability-modes-always-on-availability-groups?view=sql-server-2017",target:"_blank",rel:"nofollow noopener noreferrer"},"SQL Server Availability Modes ",(0,i.kt)("svg",{class:"embedded-fa-icon"},(0,i.kt)("use",{href:"#external-link-alt"})))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://docs.microsoft.com/en-us/sql/database-engine/availability-groups/windows/active-secondaries-readable-secondary-replicas-always-on-availability-groups?view=sql-server-2017",target:"_blank",rel:"nofollow noopener noreferrer"},"Offload read-only workload to secondary replica of an Always On availability group ",(0,i.kt)("svg",{class:"embedded-fa-icon"},(0,i.kt)("use",{href:"#external-link-alt"}))))),(0,i.kt)("p",null,"When setting up a high-availability cluster for Microsoft SQL Server, you have the choice between the availability modes ",(0,i.kt)("em",{parentName:"p"},"synchronous commit")," and ",(0,i.kt)("em",{parentName:"p"},"asynchronous commit"),". Synchronous commit waits to return for a transaction until it has effectively been synchronized to the other instances (secondary replicas). Asynchronous commit, on the other hand, does not wait for the secondary replicas to catch up. If asynchronous commit is used and the cluster is configured to allow reads to go directly to the secondary replicas, it is possible that reads return stale data."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://en.wikipedia.org/wiki/CAP_theorem",target:"_blank",rel:"nofollow noopener noreferrer"},"CAP theorem ",(0,i.kt)("svg",{class:"embedded-fa-icon"},(0,i.kt)("use",{href:"#external-link-alt"})))),(0,i.kt)("li",{parentName:"ul"},"Designing Data-Intensive Applications (book by Martin Kleppmann)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://jepsen.io/consistency",target:"_blank",rel:"nofollow noopener noreferrer"},"Consistency Models ",(0,i.kt)("svg",{class:"embedded-fa-icon"},(0,i.kt)("use",{href:"#external-link-alt"}))))))}m.isMDXComponent=!0}}]);