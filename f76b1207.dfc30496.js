(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{226:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var r=a(1),n=a(9),l=(a(0),a(231)),o={title:"Small commits and pull requests",description:"Why you should strive to commit early, push often and keep pull requests small",last_modified:new Date("2022-01-31T14:29:20.513Z")},i={id:"processes-techniques/small-commits-pull-requests",title:"Small commits and pull requests",description:"Why you should strive to commit early, push often and keep pull requests small",source:"@site/docs\\processes-techniques\\small-commits-pull-requests.md",permalink:"/interview-prep/processes-techniques/small-commits-pull-requests",sidebar:"docs",previous:{title:"Refactoring",permalink:"/interview-prep/processes-techniques/refactoring"},next:{title:"Static analysis",permalink:"/interview-prep/processes-techniques/static-analysis"}},s=[{value:"Small, atomic commits",id:"small-atomic-commits",children:[]},{value:"Frequent pushes",id:"frequent-pushes",children:[]},{value:"Small pull requests",id:"small-pull-requests",children:[]},{value:"Resources",id:"resources",children:[]}],c={rightToc:s};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Why you should strive to commit early, push often and keep pull requests small"),Object(l.b)("h2",{id:"small-atomic-commits"},"Small, atomic commits"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'Commits should be "atomic": a single commit should be dedicated to a single (sub)task'),Object(l.b)("li",{parentName:"ul"},"Separate commits for refactoring, bug fixes and new features"),Object(l.b)("li",{parentName:"ul"},"Avoid batching multiple kinds of changes together in a single commit"),Object(l.b)("li",{parentName:"ul"},"Each commit should represent one step forward in your process of solving the bug or implementing the feature",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"A commit represents a small incremental change to the codebase"),Object(l.b)("li",{parentName:"ul"},"Still likely to touch multiple files"))),Object(l.b)("li",{parentName:"ul"},"Each commit should leave the codebase in a valid state",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Tests should pass, the system should build properly, ..."),Object(l.b)("li",{parentName:"ul"},"Ideally, the commit also includes new tests relevant to the commit"))),Object(l.b)("li",{parentName:"ul"},"Avoid committing throwaway code, commented-out code, ",Object(l.b)("inlineCode",{parentName:"li"},"TODO")," comments, ...",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"These make commit history harder to understand and PRs harder to review")))),Object(l.b)("p",null,"Approach:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Divide your work into small subtasks (30-60 minutes is ideal, more than 4 hours is probably too long)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Added benefit: this is a great way to fight procrastination and also makes it easier to context switch if needed"))),Object(l.b)("li",{parentName:"ul"},"Work only on one subtask at a time and commit your changes once you have finished a subtask (taking care to leave the codebase in a valid state)"),Object(l.b)("li",{parentName:"ul"},"If you see the need for refactoring of fixes in the code you need to touch, try to put these in separate commits (either before or after you make your main changes)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"If you are about to make a change which should be a separate commit (dependency install, refactor, \u2026) you can stash your current changes to start from a clean slate and make that change as one logical commit. Then, you can restore the stash and continue."))),Object(l.b)("li",{parentName:"ul"},"If you already have a whole bunch of uncommitted changes that should ideally be split into multiple commits, you can stage specific files or even specific lines inside files to commit them separately",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Can work fine as long as different logical changes don't touch the same code")))),Object(l.b)("p",null,"Benefits:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Focused commits make it easier to also provide focused commit messages"),Object(l.b)("li",{parentName:"ul"},"Easy to undo or revert a specific change",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"It's hard to throw away one specific change if it's mixed with a bunch of other changes to the same set of files"))),Object(l.b)("li",{parentName:"ul"},"Makes pull request reviews easier",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Reviewers can choose their view (total diff versus looking at separate commits)"),Object(l.b)("li",{parentName:"ul"},"Commit log a clear story of how you tackled the problem")))),Object(l.b)("h2",{id:"frequent-pushes"},"Frequent pushes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"When you make your small, atomic commits, also push them to a remote repository"),Object(l.b)("li",{parentName:"ul"},'"Commit Early, Push Often"')),Object(l.b)("p",null,"Benefits:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Pushing your work to a remote repository prevents you from losing your work due to disk failures or even brain farts"),Object(l.b)("li",{parentName:"ul"},"Pushing your commits as you make them provides transparency into your process",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Gives your colleagues an idea of how far you are"),Object(l.b)("li",{parentName:"ul"},"Sometimes, your colleagues might be able to give you some early feedback or tips, potentially saving hours or even days of wasted work")))),Object(l.b)("h2",{id:"small-pull-requests"},"Small pull requests"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Keep pull requests small and focused"),Object(l.b)("li",{parentName:"ul"},"Reviewers should be able to keep the entire pull request in their head when analyzing the code"),Object(l.b)("li",{parentName:"ul"},"As a reviewer, it should take you minutes rather than hours to review a pull request"),Object(l.b)("li",{parentName:"ul"},"It can help to split up issues/tasks into smaller ones"),Object(l.b)("li",{parentName:"ul"},"It can help to create a sequence of pull requests for one bigger issue/task"),Object(l.b)("li",{parentName:"ul"},"It can help to move big refactors into their own pull request")),Object(l.b)("p",null,"Benefits:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Makes reviewer's life easier"),Object(l.b)("li",{parentName:"ul"},"Faster reviews mean the developer gets their feedback when the everything is still fresh in their mind"),Object(l.b)("li",{parentName:"ul"},"Avoids long-running feature branches",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Reduces risk of developers writing conflicting code"),Object(l.b)("li",{parentName:"ul"},"Allows developers to build on top of each other's changes without having to build on top of someone else's feature branch (or, even worse, some combination of other people's branches)"),Object(l.b)("li",{parentName:"ul"},"See also ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/processes-techniques/trunk-based-development"}),"Trunk-Based Development"))))),Object(l.b)("h2",{id:"resources"},"Resources"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{href:"https://www.freshconsulting.com/atomic-commits/",target:"_blank",rel:"nofollow noopener noreferrer"},'Developer Tip: Keep Your Commits "Atomic" ',Object(l.b)("svg",{class:"embedded-fa-icon"},Object(l.b)("use",{href:"#external-link-alt"})))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{href:"https://www.worklytics.co/commit-early-push-often/",target:"_blank",rel:"nofollow noopener noreferrer"},"Commit Early, Push Often ",Object(l.b)("svg",{class:"embedded-fa-icon"},Object(l.b)("use",{href:"#external-link-alt"}))))))}u.isMDXComponent=!0},231:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},m=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),p=r,h=m["".concat(o,".").concat(p)]||m[p]||b[p]||l;return a?n.a.createElement(h,i({ref:t},c,{components:a})):n.a.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);