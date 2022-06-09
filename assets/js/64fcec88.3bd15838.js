"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[6545],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(r),m=n,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||o;return r?a.createElement(d,i(i({ref:t},p),{},{components:r})):a.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1731:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"Code review and collaboration workflows",description:"Some ways to improve the quality of your team's code through code review and collaboration",last_modified:new Date("2020-11-01T12:34:21.452Z")},s=void 0,u={unversionedId:"processes-techniques/code-review-collaboration",id:"processes-techniques/code-review-collaboration",title:"Code review and collaboration workflows",description:"Some ways to improve the quality of your team's code through code review and collaboration",source:"@site/docs/processes-techniques/code-review-collaboration.md",sourceDirName:"processes-techniques",slug:"/processes-techniques/code-review-collaboration",permalink:"/interview-prep/processes-techniques/code-review-collaboration",draft:!1,tags:[],version:"current",frontMatter:{title:"Code review and collaboration workflows",description:"Some ways to improve the quality of your team's code through code review and collaboration",last_modified:"2020-11-01T12:34:21.452Z"},sidebar:"docs",previous:{title:"Client-first design",permalink:"/interview-prep/processes-techniques/client-first-design"},next:{title:"Dealing with uncertainty",permalink:"/interview-prep/processes-techniques/dealing-with-uncertainty"}},p={},c=[{value:"Instant review (pair programming)",id:"instant-review-pair-programming",level:2},{value:"Pair programming and junior developers",id:"pair-programming-and-junior-developers",level:3},{value:"Pairing a junior with a senior",id:"pairing-a-junior-with-a-senior",level:4},{value:"Pairing two juniors",id:"pairing-two-juniors",level:4},{value:"Mobbing",id:"mobbing",level:3},{value:"Synchronous review",id:"synchronous-review",level:2},{value:"Synchronous review and pairing",id:"synchronous-review-and-pairing",level:3},{value:"Asynchronous review",id:"asynchronous-review",level:2},{value:"What to do while waiting for feedback?",id:"what-to-do-while-waiting-for-feedback",level:3},{value:"Asynchronous review and pairing",id:"asynchronous-review-and-pairing",level:3},{value:"Review after the fact",id:"review-after-the-fact",level:2},{value:"Automated review",id:"automated-review",level:2},{value:"Applying feedback received during review",id:"applying-feedback-received-during-review",level:2},{value:"Resources",id:"resources",level:2}],h={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Some ways to improve the quality of your team's code through code review and collaboration"),(0,o.kt)("h2",{id:"instant-review-pair-programming"},"Instant review (pair programming)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One programmer (driver writes code), other programmer (navigator) reviews the code immediately",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Roles are switches frequently"))),(0,o.kt)("li",{parentName:"ul"},"Pairing partner typically counts as reviewer from a code review perspective",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"It's common for pairs to commit directly without further review")))),(0,o.kt)("p",null,"Advantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Creates joint ownership of the code: more than one person has detailed knowledge regarding that part of the code",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Knowledge can get spread through the team by mixing up the pairs"))),(0,o.kt)("li",{parentName:"ul"},"Helps with focus:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"While there is a lot of interaction within a pair, this interaction does not require context switching because both members of the pair are working on the same thing"),(0,o.kt)("li",{parentName:"ul"},"The pair can also keep each other on track and prevent each other from slacking off or being tempted to write quick-and-dirty code"))),(0,o.kt)("li",{parentName:"ul"},"Different perspectives and levels of overview",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Two people know more than one"),(0,o.kt)("li",{parentName:"ul"},"Navigator can focus on big picture while driver can focus on details")))),(0,o.kt)("p",null,"Pair programming works well when you need to write some code solving a complex business problem with lots of possible scenarios. While the driver codes, the navigator can provide guidance and help with making sure that all scenarios and edge cases are taken into account."),(0,o.kt)("p",null,"Disadvantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Can be exhausting, especially for introverts"),(0,o.kt)("li",{parentName:"ul"},"Sometimes, people need space to come up with good ideas"),(0,o.kt)("li",{parentName:"ul"},"There are situations where it would be way more productive to have people do (some of) their work separately instead of looking at the same screen together",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Example: technical problem requiring research, exploration and experimentation. Googling stuff, playing around and building small experiments or quick proof of concepts works way better if developers work on their own machine. Of course, this doesn\u2019t mean that they can\u2019t check in regularly to discuss their findings.")))),(0,o.kt)("h3",{id:"pair-programming-and-junior-developers"},"Pair programming and junior developers"),(0,o.kt)("h4",{id:"pairing-a-junior-with-a-senior"},"Pairing a junior with a senior"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Can work, but changes the dynamic of the pair to be more focused on mentoring"),(0,o.kt)("li",{parentName:"ul"},"Typically, the junior developer will be the driver most of the time ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Senior will help the junior keep track of the different cases to handle and provide instant help when the junior is stuck"))),(0,o.kt)("li",{parentName:"ul"},"Can be a very good way to get the junior developer up to speed quickly",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"As senior, avoid giving too much guidance"),(0,o.kt)("li",{parentName:"ul"},"Give hints or ask questions to help the junior figure it out"),(0,o.kt)("li",{parentName:"ul"},"Sometimes, it can even make sense to let the junior wander down a path that the senior knows to be a dead end",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Junior should be allowed to make mistakes, while the senior can then help the junior to learn from those mistakes by really understanding what went wrong and why"))))),(0,o.kt)("li",{parentName:"ul"},"Benefits for senior",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Junior developers typically spend a lot of time learning, they might have picked up on something that benefits the senior as well"),(0,o.kt)("li",{parentName:"ul"},"The questions asked by the junior developer force the senior to be explicit about the reasoning behind certain best practices, the way the codebase was designed, the approaches used for certain problems, ...",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Learning by teaching"),(0,o.kt)("li",{parentName:"ul"},"Can help expose some potential gaps in senior's knowledge or even flaws in the design that went unnoticed"))))),(0,o.kt)("li",{parentName:"ul"},"Can still be exhausting and frustrating for senior, so best to switch things up after a while")),(0,o.kt)("h4",{id:"pairing-two-juniors"},"Pairing two juniors"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Risky",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"While there is a chance that they can fill in the gaps in each other\u2019s knowledge and reasoning, there is also a big chance that you will just have two people being stuck for hours on a problem that could have been solved quickly with a bit of guidance from a senior developer."))),(0,o.kt)("li",{parentName:"ul"},"Solutions:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Forbidding less experienced developers to form a team",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Can seem harsh, also not always practical"))),(0,o.kt)("li",{parentName:"ul"},"Guidance provided by team",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The team should help them estimate how much time they should allow themselves to spend on a task and how quickly they should ask for help")))))),(0,o.kt)("h3",{id:"mobbing"},"Mobbing"),(0,o.kt)("p",null,"Mobbing is similar to pair programming, but involves more people. Some types of mobbing:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Code jam"),": This is basically pairing, but with more navigators. The driver still switches frequently. Often, code jams are time-boxed sessions dedicated to solving a specifically hairy challenge."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Randori"),": Here, you have one regular pair (driver + navigator, switching roles often). The rest of the people just observe. However, every so often, one of the observers replaces one member of the pair."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Mob programming"),": This is similar to a code jam. However, instead of having time-boxed sessions, the team sees this type of collaboration as their main way of working. Teams using this approach say it helps with learning, quick decision making, communication, preventing technical debt, etc. Relevant video: ",(0,o.kt)("a",{href:"https://vimeo.com/131643015",target:"_blank",rel:"nofollow noopener noreferrer"},"Mob Programming, A Whole Team Approach - Woody Zuill ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"}))),".")),(0,o.kt)("h2",{id:"synchronous-review"},"Synchronous review"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First create something (code, design, \u2026) on your own"),(0,o.kt)("li",{parentName:"ul"},"Then call someone over in order to get feedback"),(0,o.kt)("li",{parentName:"ul"},"Synchronous: your are looking at the work together, at the same time")),(0,o.kt)("p",null,"Advantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Easier to explain context",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Helps if reviewer is not familiar with the problem being solved"))),(0,o.kt)("li",{parentName:"ul"},"Allows having real discussion",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Helpful if more the work under review requires more than just a few remarks"))),(0,o.kt)("li",{parentName:"ul"},"People have the chance to work on their own, explore and make their own mistakes")),(0,o.kt)("p",null,"Disadvantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Context switches: getting someone to look at your code with you will typically require a context switch for at least one of you",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Can have a huge effect on productivity, especially for tasks that require deep focus and concentration"))),(0,o.kt)("li",{parentName:"ul"},"Does not allow the reviewer to prepare the review by having a look at the code or the problem before actually coming over to review",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Without being able to take some time to have good look at the code and let it sink in, the reviewer may fail to spot some potential problems")))),(0,o.kt)("h3",{id:"synchronous-review-and-pairing"},"Synchronous review and pairing"),(0,o.kt)("p",null,"Even when working in pairs, synchronous review can be helpful for situations where classical pair programming doesn\u2019t make sense or when you and your pairing partner need a break from the constant interaction for a while"),(0,o.kt)("p",null,"Some strategies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Divide and conquer"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Divide the problem into smaller tasks and divide them among the pair"),(0,o.kt)("li",{parentName:"ul"},"Each person works separately on their tasks"),(0,o.kt)("li",{parentName:"ul"},"Pair supports each other and frequently sit together to review the work"),(0,o.kt)("li",{parentName:"ul"},"Can be a good approach for research and experimentation"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Supported soloing"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Similar to Divide and conquer, but now working on completely different things"),(0,o.kt)("li",{parentName:"ul"},"Can work well for seniors working together"),(0,o.kt)("li",{parentName:"ul"},"Can work well for a senior supporting a junior or even a small number of seniors supporting a pool of juniors")))),(0,o.kt)("p",null,"Finally, even when doing classical pair programming, synchronous review can be used if the pair needs some support from the rest of the team to solve a particularly hairy problem or make an important decision."),(0,o.kt)("h2",{id:"asynchronous-review"},"Asynchronous review"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First create something (code, design, \u2026) on your own"),(0,o.kt)("li",{parentName:"ul"},"Then, allow others to review this ",(0,o.kt)("em",{parentName:"li"},"asynchronously"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Does not require you and the reviewer to be looking at the code at the same moment"),(0,o.kt)("li",{parentName:"ul"},"Typically through some kind of technology, for example pull requests",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Sharing code, making comments, tracking adjustments made to the code, ...")))))),(0,o.kt)("p",null,"Advantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Asynchronous:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You can submit your code when it suits you"),(0,o.kt)("li",{parentName:"ul"},"Reviewers can review when it suits them",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Also allows them to have a proper look, taking as much time as needed to really understand what the code does, how it handles certain situations and how it could affect the rest of the system"))))),(0,o.kt)("li",{parentName:"ul"},"Easier to check the readability of the code",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Without the original developer being there to explain, the reviewer truly experiences how readable the code is"),(0,o.kt)("li",{parentName:"ul"},"If the original developer provided additional documentation, it is typically tracked in the code reviewing tool and can often be consulted even after the code has been accepted")))),(0,o.kt)("p",null,"Drawbacks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Asynchronous: you may have to wait a while for feedback",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Still some context switching when going back to the code later on"),(0,o.kt)("li",{parentName:"ul"},"The team should make sure that code and comments are reviewed and processed fairly quickly, meaning that the feedback loop stays relatively short",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The longer the feedback loop gets, the harder it is for a committer or reviewer to switch contexts when they receive feedback on their code or comments."),(0,o.kt)("li",{parentName:"ul"},"A longer feedback loop also increases the chance that other changes in the codebase will conflict with the code under review"))))),(0,o.kt)("li",{parentName:"ul"},"Not suited for real discussion",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Excessive asynchronous back-and-forth can be detrimental to productivity"),(0,o.kt)("li",{parentName:"ul"},'Some companies have guidelines to "just accept the changes if the code is decent and offer suggestions for improvement as suggestions for new changes (instead of reasons for not accepting the current changes)"'),(0,o.kt)("li",{parentName:"ul"},"Can switch to synchronous review or even pairing if they are more suitable for the current change")))),(0,o.kt)("h3",{id:"what-to-do-while-waiting-for-feedback"},"What to do while waiting for feedback?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Simplest option: work on something unrelated"),(0,o.kt)("li",{parentName:"ul"},"If other work depends on work under review, things can get more complex. Avoid submitting code for review if it depends on other code that is still under review. It's often more productive to push people for a review of the original code.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You can work on top of code currently under review and reapply your changes once reviewed code gets merged"),(0,o.kt)("li",{parentName:"ul"},"If you make it clear that your PR is part of a series, reviewers might be inclined to immediately approve your PR but specify comments for further improvement")))),(0,o.kt)("h3",{id:"asynchronous-review-and-pairing"},"Asynchronous review and pairing"),(0,o.kt)("p",null,"When applying the pairing strategies described in the section on synchronous review, asynchronous review could be used instead of synchronous review if there is a need or desire to handle things in an asynchronous fashion."),(0,o.kt)("h2",{id:"review-after-the-fact"},"Review after the fact"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Code is reviewed after it is pushed/merged"),(0,o.kt)("li",{parentName:"ul"},"Example: mob review where the entire team sits together to have a look at a piece of code in order to share knowledge and possibly get suggestions for further improvement"),(0,o.kt)("li",{parentName:"ul"},"Other example: pairs commit directly to main, developers are notified when commits are made to the main branch and can then have a look at the code and potentially suggest some improvements"),(0,o.kt)("li",{parentName:"ul"},"Can be useful to combine with other forms of review"),(0,o.kt)("li",{parentName:"ul"},"Can be useful if people's availability prevents pairing or timely synchronous/asynchronous review")),(0,o.kt)("h2",{id:"automated-review"},"Automated review"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No humans involved"),(0,o.kt)("li",{parentName:"ul"},"Automated formatting, enforcing coding style, checking for common bugs, checking dependencies, ..."),(0,o.kt)("li",{parentName:"ul"},"See ",(0,o.kt)("a",{parentName:"li",href:"/processes-techniques/static-analysis"},"Static analysis")),(0,o.kt)("li",{parentName:"ul"},"Great addition to any reviewing process, allows reviewers to focus on things that really need a human judgement")),(0,o.kt)("h2",{id:"applying-feedback-received-during-review"},"Applying feedback received during review"),(0,o.kt)("p",null,"For asynchronous and also synchronous review, a lot of feedback will fall into three categories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},'"This will cause specific problem X"')," -> Fix the code"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},'"I don\u2019t understand what is happening."')," -> Refactor for readability or add documentation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},'"In my opinion ..."')," -> Take it or leave it, it's up to you")),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://dzone.com/articles/4-types-of-code-reviews-any-professional-developer",target:"_blank",rel:"nofollow noopener noreferrer"},"4 Types Of Code Reviews Any Professional Developer Should Know About ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"})))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://madeintandem.com/blog/2015-1-pairing-with-junior-developers/",target:"_blank",rel:"nofollow noopener noreferrer"},"Pairing with Junior Developers ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"})))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://vimeo.com/131643015",target:"_blank",rel:"nofollow noopener noreferrer"},"Mob Programming, A Whole Team Approach - Woody Zuill ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"})))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://simpleprogrammer.com/code-review-trunk-based-development/",target:"_blank",rel:"nofollow noopener noreferrer"},"Why Code Reviews Hurt Your Code Quality and Team Productivity ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"})))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://www.thoughtworks.com/insights/blog/pairing-are-you-doing-it-wrong",target:"_blank",rel:"nofollow noopener noreferrer"},"Pairing, Are You Doing it Wrong? ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"})))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://hackernoon.com/the-art-of-pull-requests-6f0f099850f9",target:"_blank",rel:"nofollow noopener noreferrer"},"The Art of Pull Requests ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"})))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://medium.com/@matt_68798/i-have-trouble-with-the-guideline-whatever-one-of-us-writes-the-other-2-have-to-be-cool-with-1fec5da99c48",target:"_blank",rel:"nofollow noopener noreferrer"},"Three categories of PR comments ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"}))))))}m.isMDXComponent=!0}}]);