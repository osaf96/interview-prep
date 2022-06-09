(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{178:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return b}));var a=o(1),n=o(9),r=(o(0),o(231)),i={title:"Fail fast",description:"On keeping your feedback loops short",last_modified:new Date("2022-03-19T11:07:39.841Z")},l={id:"mindset/fail-fast",title:"Fail fast",description:"On keeping your feedback loops short",source:"@site/docs\\mindset\\fail-fast.md",permalink:"/mindset/fail-fast",sidebar:"docs",previous:{title:"Concepts, not code",permalink:"/mindset/concepts-not-code"},next:{title:"Hammock-driven development",permalink:"/mindset/hammock-driven-development"}},s=[{value:"Basic idea",id:"basic-idea",children:[]},{value:"General tips",id:"general-tips",children:[]},{value:"Architecture, design and code",id:"architecture-design-and-code",children:[]},{value:"Development process",id:"development-process",children:[{value:"Tracer bullets and prototypes",id:"tracer-bullets-and-prototypes",children:[]}]},{value:"People",id:"people",children:[]},{value:"Resources",id:"resources",children:[]}],c={rightToc:s};function b(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"On keeping your feedback loops short"),Object(r.b)("h2",{id:"basic-idea"},"Basic idea"),Object(r.b)("p",null,"If your approach is going to fail, you want to realize that as soon as possible"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You want to run into problems when it's still cheap and easy to fix them or correct course"),Object(r.b)("li",{parentName:"ul"},"It doesn't make sense to invest a lot of effort into something that isn't going to work anyway")),Object(r.b)("p",null,"Basically, it\u2019s about ",Object(r.b)("strong",{parentName:"p"},"making the feedback loop as short as possible")," so you can quickly abandon things that won't work without wasting more effort on them"),Object(r.b)("p",null,"If your feedback loop is short enough, the process of ",Object(r.b)("strong",{parentName:"p"},"trying things and learning from mistakes")," can actually be a lot more effective than trying to get it right immediately, because you gain a lot of knowledge and experience along the way. See also ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/mindset/pragmatism-imperfectionism#consider-going-for-imperfect-action-now-instead-of-possibly-perfect-action-in-the-future"}),"Pragmatism and imperfectionism - Consider going for imperfect action now instead of possibly perfect action in the future")),Object(r.b)("p",null,"All of this also means that, when trying to solve a problem, it can be a lot more effective to focus on ",Object(r.b)("strong",{parentName:"p"},"reducing the length of your feedback loop first"),". If your current approach requires you to spend a lot of time and effort before you can validate your solution, the actual problem you should be solving is how to shorten your feedback loop. See also ",Object(r.b)("a",{href:"https://uxmag.com/articles/you-are-solving-the-wrong-problem",target:"_blank",rel:"nofollow noopener noreferrer"},"You Are Solving The Wrong Problem ",Object(r.b)("svg",{class:"embedded-fa-icon"},Object(r.b)("use",{href:"#external-link-alt"})))),Object(r.b)("h2",{id:"general-tips"},"General tips"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Identify your feedback loops and check if they can be shortened",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Feedback can be related to code quality, functionality, customer satisfaction, product-market fit, ..."))),Object(r.b)("li",{parentName:"ul"},'Ask yourself: "What is the simplest incarnation of my idea that allows me to validate whether it will work?"',Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Could be as simple as a sketch on a napkin"))),Object(r.b)("li",{parentName:"ul"},"Split big problems into small steps that allow you to verify that you're on the right track after each step"),Object(r.b)("li",{parentName:"ul"},"Tackle risky or uncertain parts as early as possible"),Object(r.b)("li",{parentName:"ul"},"Be proactive about asking for feedback",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"This can be as simple as announcing something you're about to do, which gives people a chance to stop you or suggest an alternative approach (this is usually also faster than asking and waiting for explicit permission)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'"Do whatever you want, but do it loudly" (from ',Object(r.b)("a",{href:"https://hackernoon.com/three-growth-strategies-for-individual-contributors-kv4q3zgt",target:"_blank",rel:"nofollow noopener noreferrer"},"Three Growth Strategies for Individual Contributors ",Object(r.b)("svg",{class:"embedded-fa-icon"},Object(r.b)("use",{href:"#external-link-alt"}))),")"))))),Object(r.b)("li",{parentName:"ul"},'Make sure that you know how to check if a task is "done" and if it solved the problem you wanted to solve')),Object(r.b)("h2",{id:"architecture-design-and-code"},"Architecture, design and code"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If the problem you're solving requires a non-trivial approach, discuss it with a colleague before actually fully implementing it",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"You don't want to find out during code review that you need to throw most of your code away because your approach won't fit in with the rest of the system or you should have leveraged something that already existed"),Object(r.b)("li",{parentName:"ul"},"Fifteen minutes of discussion can prevent days of wasted development effort"))),Object(r.b)("li",{parentName:"ul"},"Within the code itself, put checks as early as possible in the flow so your program doesn't do useless work"),Object(r.b)("li",{parentName:"ul"},"When considering a new piece of technology, try to build a proof of concept with it that shows you if it performs well under the kind of load you foresee",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"This can also force you to consult the technology's documentation while creating the proof of concept, giving you an idea of how good that documentation is"))),Object(r.b)("li",{parentName:"ul"},"When building fault-tolerant systems, it can make sense to deliberately trigger faults at random, even up in production, so any problem with fault tolerance surfaces sooner rather than later")),Object(r.b)("h2",{id:"development-process"},"Development process"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Set up your development environment so it immediately alerts you of syntax errors, violations of coding style convention, code that is likely to have unintended effects, ...",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"You don't want to waste your energy and your colleagues' energy by identifying, discussing and fixing these through code reviews"),Object(r.b)("li",{parentName:"ul"},"See also ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/processes-techniques/static-analysis"}),"Static analysis")))),Object(r.b)("li",{parentName:"ul"},"Fast automated tests can notify you of a bug in your code while you are in the middle of working on it, rather than having to switch contexts to fix it once the bug is found during code review or (even worse) after deployment"),Object(r.b)("li",{parentName:"ul"},"Monitoring for errors on a shared dev environment can help to find bugs before they are deployed to production"),Object(r.b)("li",{parentName:"ul"},"If requirements are unclear, clarify them with someone or make a quick small POC and validate that with someone"),Object(r.b)("li",{parentName:"ul"},"New tools or processes: first set up something simple and check if the added value is what you expected it to be, only then invest in improving",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'Works a lot better than trying to set up something "perfect" immediately')))),Object(r.b)("h3",{id:"tracer-bullets-and-prototypes"},"Tracer bullets and prototypes"),Object(r.b)("p",null,"Both can help you to get early customer feedback, as well as feedback on some technical aspects of the system"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Tracer bullets:")," take a requirement and build an initial version of the entire system that fulfills that requirement"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Can be used to get feedback from the customers"),Object(r.b)("li",{parentName:"ul"},"The result should be a part of the skeleton for the final application",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'"Lean but complete"'),Object(r.b)("li",{parentName:"ul"},"Already includes all necessary components, including automated tests, build pipelines, ..."),Object(r.b)("li",{parentName:"ul"},"Sets up a structure for development team to work in (and allows to correct course if that structure is not working)")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Prototypes:")," build something disposable to explore and validate a specific aspect of the final system"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Useful for unproven or experimental parts, or parts that are absolutely critical to the final system"),Object(r.b)("li",{parentName:"ul"},"Things you could prototype: new functionality, user interface design, interaction with third-party tools or components, ..."),Object(r.b)("li",{parentName:"ul"},"Disposable: throwaway code, style and code quality don't matter, completeness doesn't matter",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The goal is to learn, not to build something useful"),Object(r.b)("li",{parentName:"ul"},"Prototype code should never be deployed"))),Object(r.b)("li",{parentName:"ul"},"Doesn't have to be code!",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Paper prototypes")," can be very useful for testing user interfaces"),Object(r.b)("li",{parentName:"ul"},"You can prototype an idea for an automated process by executing the process manually and validating the value the process brings"),Object(r.b)("li",{parentName:"ul"},'When analyzing product-market fit for a startup, it could even make sense to do a small-scale "launch" where part of the end-to-end process is taken care of by humans instead of by software')))),Object(r.b)("h2",{id:"people"},"People"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If you notice tension in the room, discuss it explicitly before it grows too big to handle"),Object(r.b)("li",{parentName:"ul"},"If something doesn't sit well with you, bring it up before it grows into a huge source of worry or frustration",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Plenty of people have quit their jobs over issues that could have easily been solved if they would have been brought up early enough")))),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{href:"https://medium.com/@kentbeck_7670/inefficient-efficiency-5b3ab5294791",target:"_blank",rel:"nofollow noopener noreferrer"},"Inefficient Efficiency ",Object(r.b)("svg",{class:"embedded-fa-icon"},Object(r.b)("use",{href:"#external-link-alt"})))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{href:"https://uxmag.com/articles/you-are-solving-the-wrong-problem",target:"_blank",rel:"nofollow noopener noreferrer"},"You Are Solving The Wrong Problem ",Object(r.b)("svg",{class:"embedded-fa-icon"},Object(r.b)("use",{href:"#external-link-alt"})))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{href:"https://medium.com/swlh/3-problems-to-stop-looking-for-in-code-reviews-981bb169ba8b",target:"_blank",rel:"nofollow noopener noreferrer"},"3 Problems to Stop Looking For in Code Reviews ",Object(r.b)("svg",{class:"embedded-fa-icon"},Object(r.b)("use",{href:"#external-link-alt"})))),Object(r.b)("li",{parentName:"ul"},"The Pragmatic Programmer (book by Andrew Hunt and David Thomas) (",Object(r.b)("a",{href:"https://github.com/HugoMatilla/The-Pragmatic-Programmer",target:"_blank",rel:"nofollow noopener noreferrer"},"summary ",Object(r.b)("svg",{class:"embedded-fa-icon"},Object(r.b)("use",{href:"#external-link-alt"}))),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{href:"https://hackernoon.com/three-growth-strategies-for-individual-contributors-kv4q3zgt",target:"_blank",rel:"nofollow noopener noreferrer"},"Three Growth Strategies for Individual Contributors ",Object(r.b)("svg",{class:"embedded-fa-icon"},Object(r.b)("use",{href:"#external-link-alt"})))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{href:"https://amanjain.substack.com/p/how-to-validate-your-startup-idea",target:"_blank",rel:"nofollow noopener noreferrer"},"How to validate your startup idea quickly ",Object(r.b)("svg",{class:"embedded-fa-icon"},Object(r.b)("use",{href:"#external-link-alt"})))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{href:"https://briandavidhall.com/the-painted-door-test/",target:"_blank",rel:"nofollow noopener noreferrer"},"The painted door test ",Object(r.b)("svg",{class:"embedded-fa-icon"},Object(r.b)("use",{href:"#external-link-alt"})))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{href:"https://www.simpleusability.com/inspiration/2018/08/wizard-of-oz-testing-a-method-of-testing-a-system-that-does-not-yet-exist/",target:"_blank",rel:"nofollow noopener noreferrer"},"Wizard of Oz testing \u2013 a method of testing a system that does not yet exist. ",Object(r.b)("svg",{class:"embedded-fa-icon"},Object(r.b)("use",{href:"#external-link-alt"}))))))}b.isMDXComponent=!0},231:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return f}));var a=o(0),n=o.n(a);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=n.a.createContext({}),b=function(e){var t=n.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l({},t,{},e)),o},u=function(e){var t=b(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(o),d=a,f=u["".concat(i,".").concat(d)]||u[d]||p[d]||r;return o?n.a.createElement(f,l({ref:t},c,{components:o})):n.a.createElement(f,l({ref:t},c))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=o[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);