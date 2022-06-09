"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[7617],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return h}});var a=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(r),h=l,d=p["".concat(i,".").concat(h)]||p[h]||c[h]||n;return r?a.createElement(d,o(o({ref:t},m),{},{components:r})):a.createElement(d,o({ref:t},m))}));function h(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,o=new Array(n);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var u=2;u<n;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8755:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=r(7462),l=r(3366),n=(r(7294),r(3905)),o=["components"],s={title:"Small commits and pull requests",description:"Why you should strive to commit early, push often and keep pull requests small",last_modified:new Date("2022-01-31T14:29:20.513Z")},i=void 0,u={unversionedId:"processes-techniques/small-commits-pull-requests",id:"processes-techniques/small-commits-pull-requests",title:"Small commits and pull requests",description:"Why you should strive to commit early, push often and keep pull requests small",source:"@site/docs/processes-techniques/small-commits-pull-requests.md",sourceDirName:"processes-techniques",slug:"/processes-techniques/small-commits-pull-requests",permalink:"/interview-prep/processes-techniques/small-commits-pull-requests",draft:!1,tags:[],version:"current",frontMatter:{title:"Small commits and pull requests",description:"Why you should strive to commit early, push often and keep pull requests small",last_modified:"2022-01-31T14:29:20.513Z"},sidebar:"docs",previous:{title:"Refactoring",permalink:"/interview-prep/processes-techniques/refactoring"},next:{title:"Static analysis",permalink:"/interview-prep/processes-techniques/static-analysis"}},m={},c=[{value:"Small, atomic commits",id:"small-atomic-commits",level:2},{value:"Frequent pushes",id:"frequent-pushes",level:2},{value:"Small pull requests",id:"small-pull-requests",level:2},{value:"Resources",id:"resources",level:2}],p={toc:c};function h(e){var t=e.components,r=(0,l.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Why you should strive to commit early, push often and keep pull requests small"),(0,n.kt)("h2",{id:"small-atomic-commits"},"Small, atomic commits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Commits should be "atomic": a single commit should be dedicated to a single (sub)task'),(0,n.kt)("li",{parentName:"ul"},"Separate commits for refactoring, bug fixes and new features"),(0,n.kt)("li",{parentName:"ul"},"Avoid batching multiple kinds of changes together in a single commit"),(0,n.kt)("li",{parentName:"ul"},"Each commit should represent one step forward in your process of solving the bug or implementing the feature",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A commit represents a small incremental change to the codebase"),(0,n.kt)("li",{parentName:"ul"},"Still likely to touch multiple files"))),(0,n.kt)("li",{parentName:"ul"},"Each commit should leave the codebase in a valid state",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Tests should pass, the system should build properly, ..."),(0,n.kt)("li",{parentName:"ul"},"Ideally, the commit also includes new tests relevant to the commit"))),(0,n.kt)("li",{parentName:"ul"},"Avoid committing throwaway code, commented-out code, ",(0,n.kt)("inlineCode",{parentName:"li"},"TODO")," comments, ...",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"These make commit history harder to understand and PRs harder to review")))),(0,n.kt)("p",null,"Approach:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Divide your work into small subtasks (30-60 minutes is ideal, more than 4 hours is probably too long)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added benefit: this is a great way to fight procrastination and also makes it easier to context switch if needed"))),(0,n.kt)("li",{parentName:"ul"},"Work only on one subtask at a time and commit your changes once you have finished a subtask (taking care to leave the codebase in a valid state)"),(0,n.kt)("li",{parentName:"ul"},"If you see the need for refactoring of fixes in the code you need to touch, try to put these in separate commits (either before or after you make your main changes)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you are about to make a change which should be a separate commit (dependency install, refactor, \u2026) you can stash your current changes to start from a clean slate and make that change as one logical commit. Then, you can restore the stash and continue."))),(0,n.kt)("li",{parentName:"ul"},"If you already have a whole bunch of uncommitted changes that should ideally be split into multiple commits, you can stage specific files or even specific lines inside files to commit them separately",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Can work fine as long as different logical changes don't touch the same code")))),(0,n.kt)("p",null,"Benefits:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Focused commits make it easier to also provide focused commit messages"),(0,n.kt)("li",{parentName:"ul"},"Easy to undo or revert a specific change",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"It's hard to throw away one specific change if it's mixed with a bunch of other changes to the same set of files"))),(0,n.kt)("li",{parentName:"ul"},"Makes pull request reviews easier",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Reviewers can choose their view (total diff versus looking at separate commits)"),(0,n.kt)("li",{parentName:"ul"},"Commit log a clear story of how you tackled the problem")))),(0,n.kt)("h2",{id:"frequent-pushes"},"Frequent pushes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When you make your small, atomic commits, also push them to a remote repository"),(0,n.kt)("li",{parentName:"ul"},'"Commit Early, Push Often"')),(0,n.kt)("p",null,"Benefits:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pushing your work to a remote repository prevents you from losing your work due to disk failures or even brain farts"),(0,n.kt)("li",{parentName:"ul"},"Pushing your commits as you make them provides transparency into your process",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Gives your colleagues an idea of how far you are"),(0,n.kt)("li",{parentName:"ul"},"Sometimes, your colleagues might be able to give you some early feedback or tips, potentially saving hours or even days of wasted work")))),(0,n.kt)("h2",{id:"small-pull-requests"},"Small pull requests"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Keep pull requests small and focused"),(0,n.kt)("li",{parentName:"ul"},"Reviewers should be able to keep the entire pull request in their head when analyzing the code"),(0,n.kt)("li",{parentName:"ul"},"As a reviewer, it should take you minutes rather than hours to review a pull request"),(0,n.kt)("li",{parentName:"ul"},"It can help to split up issues/tasks into smaller ones"),(0,n.kt)("li",{parentName:"ul"},"It can help to create a sequence of pull requests for one bigger issue/task"),(0,n.kt)("li",{parentName:"ul"},"It can help to move big refactors into their own pull request")),(0,n.kt)("p",null,"Benefits:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Makes reviewer's life easier"),(0,n.kt)("li",{parentName:"ul"},"Faster reviews mean the developer gets their feedback when the everything is still fresh in their mind"),(0,n.kt)("li",{parentName:"ul"},"Avoids long-running feature branches",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Reduces risk of developers writing conflicting code"),(0,n.kt)("li",{parentName:"ul"},"Allows developers to build on top of each other's changes without having to build on top of someone else's feature branch (or, even worse, some combination of other people's branches)"),(0,n.kt)("li",{parentName:"ul"},"See also ",(0,n.kt)("a",{parentName:"li",href:"/processes-techniques/trunk-based-development"},"Trunk-Based Development"))))),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"https://www.freshconsulting.com/atomic-commits/",target:"_blank",rel:"nofollow noopener noreferrer"},'Developer Tip: Keep Your Commits "Atomic" ',(0,n.kt)("svg",{class:"embedded-fa-icon"},(0,n.kt)("use",{href:"#external-link-alt"})))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"https://www.worklytics.co/commit-early-push-often/",target:"_blank",rel:"nofollow noopener noreferrer"},"Commit Early, Push Often ",(0,n.kt)("svg",{class:"embedded-fa-icon"},(0,n.kt)("use",{href:"#external-link-alt"}))))))}h.isMDXComponent=!0}}]);