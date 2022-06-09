"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[7857],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(a),h=i,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9325:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),l=["components"],o={title:"Managing technical debt",description:"Technical debt and how to deal with it",last_modified:new Date("2021-01-02T18:48:07.387Z")},c=void 0,s={unversionedId:"processes-techniques/managing-technical-debt",id:"processes-techniques/managing-technical-debt",title:"Managing technical debt",description:"Technical debt and how to deal with it",source:"@site/docs/processes-techniques/managing-technical-debt.md",sourceDirName:"processes-techniques",slug:"/processes-techniques/managing-technical-debt",permalink:"/interview-prep/about/processes-techniques/managing-technical-debt",draft:!1,tags:[],version:"current",frontMatter:{title:"Managing technical debt",description:"Technical debt and how to deal with it",last_modified:"2021-01-02T18:48:07.387Z"},sidebar:"docs",previous:{title:"Issue troubleshooting",permalink:"/interview-prep/about/processes-techniques/issue-troubleshooting"},next:{title:"Refactoring",permalink:"/interview-prep/about/processes-techniques/refactoring"}},u={},d=[{value:"Defining technical debt",id:"defining-technical-debt",level:2},{value:"Categorizing technical debt",id:"categorizing-technical-debt",level:2},{value:"Impact",id:"impact",level:3},{value:"Cost and risk of fixing it",id:"cost-and-risk-of-fixing-it",level:3},{value:"Contagion",id:"contagion",level:3},{value:"Tracking technical debt",id:"tracking-technical-debt",level:2},{value:"Ideal amount of technical debt",id:"ideal-amount-of-technical-debt",level:2},{value:"Repaying technical debt",id:"repaying-technical-debt",level:2},{value:"Resources",id:"resources",level:2}],p={toc:d};function h(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Technical debt and how to deal with it"),(0,r.kt)("h2",{id:"defining-technical-debt"},"Defining technical debt"),(0,r.kt)("p",null,"Technical debt: things about your system that aren't the way they should be"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unreadable code, code duplication, other code smells, ...",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Might get created over time if changes are made without proper cleanup"))),(0,r.kt)("li",{parentName:"ul"},"Design and architecture that are not a good fit for the system",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Can be caused by not evolving them together with the system as needed"),(0,r.kt)("li",{parentName:"ul"},"Design and architecture that are good fit now might not be good fit anymore next year"))),(0,r.kt)("li",{parentName:"ul"},"Lack of proper tests, monitoring and alerting",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"/processes-techniques/testing"},"Testing")," and ",(0,r.kt)("a",{parentName:"li",href:"/processes-techniques/testing-details/testing-after-production"},"Testing after production")),(0,r.kt)("li",{parentName:"ul"},"Can lead to fear of improving code/design/architecture, creating even more technical debt!")))),(0,r.kt)("h2",{id:"categorizing-technical-debt"},"Categorizing technical debt"),(0,r.kt)("h3",{id:"impact"},"Impact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To what extent does the technical debt affect end users?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Bugs, unexpected behavior, performance issues, ..."))),(0,r.kt)("li",{parentName:"ul"},"To what extent does the technical debt affect the development team?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Slowing down implementation, developers needing to keep peculiarities in mind when developing, ...")))),(0,r.kt)("h3",{id:"cost-and-risk-of-fixing-it"},"Cost and risk of fixing it"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How much work is it to fix the technical debt?"),(0,r.kt)("li",{parentName:"ul"},"How big is the risk of introducing issues when fixing the technical debt?")),(0,r.kt)("h3",{id:"contagion"},"Contagion"),(0,r.kt)("p",null,"If the technical debt continues to exist, how much will it spread? What other parts of the system will it infect?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Badly-designed subsystem can lead to awkward code using that subsystem"),(0,r.kt)("li",{parentName:"ul"},"Awkwardly structured data can lead to awkward code working with that data"),(0,r.kt)("li",{parentName:"ul"},'Developers might start following the "conventions" from the bad code, or even copy-pasting it'),(0,r.kt)("li",{parentName:"ul"},'Developers might take shortcuts because technical debt makes it too hard to do things "the right way"')),(0,r.kt)("p",null,"Contagion is an important aspect!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If technical debt is isolated and doesn't affect other code, cost/risk of fixing stays more or less constant",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Impact on development team might still change over time depending on what the team is working on"))),(0,r.kt)("li",{parentName:"ul"},"If technical debt is highly contagious, its impact and the cost/risk of fixing it will likely keep going up as it spreads throughout the codebase")),(0,r.kt)("h2",{id:"tracking-technical-debt"},"Tracking technical debt"),(0,r.kt)("p",null,"It can help to explicitly track significant pieces of technical debt in your backlog or issue tracker"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Makes the technical debt explicit and visible"),(0,r.kt)("li",{parentName:"ul"},"Can prioritize it along with the rest of the tasks"),(0,r.kt)("li",{parentName:"ul"},"Can plan to tackle it along with functional changes to relevant parts")),(0,r.kt)("p",null,"Finding technical debt in existing code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You could go through the code and look for ",(0,r.kt)("a",{href:"https://sourcemaking.com/refactoring/smells",target:"_blank",rel:"nofollow noopener noreferrer"},"Code Smells ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))),(0,r.kt)("li",{parentName:"ul"},"You could make use of ",(0,r.kt)("a",{parentName:"li",href:"/processes-techniques/static-analysis"},"Static analysis")," tools to detect security issues, common bugs, code smells, duplication, ..."),(0,r.kt)("li",{parentName:"ul"},"Some technical debt might only become obvious once you really start working with the code")),(0,r.kt)("p",null,"Note that technical debt might be created over time by changing code without cleaning up as needed, the context changing in such a way that the current design isn't ideal anymore, ..."),(0,r.kt)("h2",{id:"ideal-amount-of-technical-debt"},"Ideal amount of technical debt"),(0,r.kt)("p",null,"Try to keep it low!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Code quality is essential to long-term development speed",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Taking on technical debt to build features faster can slow down development of those same features!"),(0,r.kt)("li",{parentName:"ul"},"Over time, tech debt can make development grind to a halt and bring an organization to its knees"))),(0,r.kt)("li",{parentName:"ul"},"Code quality can have a big impact on motivation and employee turnover",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Working with bad code is draining"),(0,r.kt)("li",{parentName:"ul"},"Lack of productivity is frustrating"),(0,r.kt)("li",{parentName:"ul"},"In severe cases, developers feel their skills get out of date because it's too dangerous to upgrade to a recent version of the language, incorporate modern practices and replace legacy dependencies"))),(0,r.kt)("li",{parentName:"ul"},"Technical debt often leads to developers creating even more technical debt",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Feeling that effort spent on code quality won't be valued, won't make a difference, ...",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Relevant: ",(0,r.kt)("a",{href:"https://github.com/dwmkerr/hacker-laws#the-broken-windows-theory",target:"_blank",rel:"nofollow noopener noreferrer"},"The Broken Windows Theory ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))))),(0,r.kt)("li",{parentName:"ul"},"Slow progress and fear of breaking stuff can lead to quick fixes that only create more technical debt"))),(0,r.kt)("li",{parentName:"ul"},"Spending the extra time to do things right from the start is often faster than fixing the debt later",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'See the well-known "cost of change" curve'),(0,r.kt)("li",{parentName:"ul"},'Fixing things is harder when there\'s already data in DB, customers using the functionality, other code depending on the badly written or designed code (or even following its "conventions"), ...')))),(0,r.kt)("p",null,"Ideal amount of technical debt is not zero!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It\u2019s normal to have a certain amount of technical debt"),(0,r.kt)("li",{parentName:"ul"},"Professional software development is about delivering value, only reason for maintainability is that it helps to keep delivering value over time",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If there are no places in your codebase that make you think \u201cwe could improve this given some more time, but it\u2019s good enough for now\u201d, you are probably making suboptimal use of time and resources"))),(0,r.kt)("li",{parentName:"ul"},'For startups, it can make sense to go for "quick and dirty" at first and clean up after establishing product-market fit',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Make sure slower development (new features, changes) doesn't prevent actually reaching product-market fit!"),(0,r.kt)("li",{parentName:"ul"},"Some alternative approaches: ",(0,r.kt)("a",{parentName:"li",href:"/mindset/fail-fast"},"Fail fast")),(0,r.kt)("li",{parentName:"ul"},"In case of throw-away prototypes, you can go wild with tech debt (just make sure they're really thrown away)")))),(0,r.kt)("p",null,"Advice:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Try to avoid creating significant technical debt",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If time is tight, prefer reducing scope instead of creating a mess"),(0,r.kt)("li",{parentName:"ul"},"When changing existing code, take some time to clean it up if that makes sense"))),(0,r.kt)("li",{parentName:"ul"},"Don't go overboard with avoiding technical debt",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Making things better is not always an efficient use of your time"),(0,r.kt)("li",{parentName:"ul"},"See also ",(0,r.kt)("a",{parentName:"li",href:"/mindset/keep-it-simple#effort"},"Keep it simple - Effort")))),(0,r.kt)("li",{parentName:"ul"},"If you do create technical debt, try to make sure it's isolated from other code and is easy to fix later on")),(0,r.kt)("h2",{id:"repaying-technical-debt"},"Repaying technical debt"),(0,r.kt)("p",null,"What to repay?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Is the expected benefit from improving the code worth the time investment and risk?"),(0,r.kt)("li",{parentName:"ul"},"Set priorities based on impact, cost/risk of fixing and contagion",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Over time, contagious technical debt will probably grow in impact and in cost/risk of fixing it!"))),(0,r.kt)("li",{parentName:"ul"},"For big pieces of technical debt, a gradual approach might make sense (pay off in small chunks)")),(0,r.kt)("p",null,"When to repay it?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Try to make repaying technical debt a standard, implicit part of the development process"),(0,r.kt)("li",{parentName:"ul"},"It can make sense to clean up any code that you already happen to be working on",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Benefit: most effort on parts of code that are often modified (and thus important to keep clean)"))),(0,r.kt)("li",{parentName:"ul"},"It can make sense to dedicate a certain percentage of each sprint to tasks for repaying tech debt"),(0,r.kt)("li",{parentName:"ul"},'It can make sense to have dedicated "tech debt reduction" sprints',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sprint after a big release can work well (can fix any pre-release shortcuts, probably still a while until next release)"))),(0,r.kt)("li",{parentName:"ul"},"Smaller tech debt issues could be a good way for new developers to get familiar with certain parts of the system, especially if proper regression tests are already in place")),(0,r.kt)("p",null,"Techniques to use when repaying technical debt:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/processes-techniques/refactoring"},"Refactoring")," can be useful (note also includes a part on rewrites)"),(0,r.kt)("li",{parentName:"ul"},"Other process and techniques from the notes could be useful as well")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://martinfowler.com/bliki/TechnicalDebt.html",target:"_blank",rel:"nofollow noopener noreferrer"},"TechnicalDebt ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://www.infoq.com/articles/pragmatic-technical-debt/",target:"_blank",rel:"nofollow noopener noreferrer"},"Pragmatic Technical Debt Management ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://blog.pragmaticengineer.com/tech-debt/",target:"_blank",rel:"nofollow noopener noreferrer"},"Tech Debt and the Pragmatic Middle Ground ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://technology.riotgames.com/news/taxonomy-tech-debt",target:"_blank",rel:"nofollow noopener noreferrer"},"A taxonomy of tech debt ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://software.rajivprab.com/2019/11/25/the-birth-of-legacy-software-how-change-aversion-feeds-on-itself/",target:"_blank",rel:"nofollow noopener noreferrer"},"The Birth of Legacy Software \u2013 How Change Aversion Feeds On Itself ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://daverupert.com/2020/11/technical-debt-as-a-lack-of-understanding/",target:"_blank",rel:"nofollow noopener noreferrer"},"Technical debt as a lack of understanding ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://www.infragistics.com/community/blogs/b/erikdietrich/posts/the-human-cost-of-tech-debt",target:"_blank",rel:"nofollow noopener noreferrer"},"The Human Cost of Tech Debt ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://github.com/dwmkerr/hacker-laws#the-broken-windows-theory",target:"_blank",rel:"nofollow noopener noreferrer"},"The Broken Windows Theory ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://www.infoq.com/articles/tech-debt-repayment/",target:"_blank",rel:"nofollow noopener noreferrer"},"Technical Debt: A Repayment Plan ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"}))))))}h.isMDXComponent=!0}}]);