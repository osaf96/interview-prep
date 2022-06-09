"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[3175],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||r;return n?o.createElement(m,s(s({ref:t},p),{},{components:n})):o.createElement(m,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},327:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return h}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),s=["components"],i={title:"Event loop (JavaScript)",description:"A high-level overview of how JavaScript handles concurrency using its Event Loop",last_modified:new Date("2021-12-27T16:49:37.804Z"),sidebar_label:"Event loop"},l=void 0,c={unversionedId:"javascript/event-loop",id:"javascript/event-loop",title:"Event loop (JavaScript)",description:"A high-level overview of how JavaScript handles concurrency using its Event Loop",source:"@site/docs/javascript/event-loop.md",sourceDirName:"javascript",slug:"/javascript/event-loop",permalink:"/interview-prep/javascript/event-loop",draft:!1,tags:[],version:"current",frontMatter:{title:"Event loop (JavaScript)",description:"A high-level overview of how JavaScript handles concurrency using its Event Loop",last_modified:"2021-12-27T16:49:37.804Z",sidebar_label:"Event loop"},sidebar:"docs",previous:{title:"Threads",permalink:"/interview-prep/java/concurrency-details/threads"},next:{title:"Object prototypes and classes",permalink:"/interview-prep/javascript/object-prototypes-classes"}},p={},h=[{value:"JavaScript and concurrency",id:"javascript-and-concurrency",level:2},{value:"Single-threaded",id:"single-threaded",level:3},{value:"Non-preemptive (run-to-completion)",id:"non-preemptive-run-to-completion",level:3},{value:"The Event Loop",id:"the-event-loop",level:2},{value:"Example execution",id:"example-execution",level:3},{value:"Don&#39;t block the Event Loop",id:"dont-block-the-event-loop",level:2},{value:"Recommendation: asynchronous where possible",id:"recommendation-asynchronous-where-possible",level:3},{value:"Recommendation: watch out with JSON and regexes",id:"recommendation-watch-out-with-json-and-regexes",level:3},{value:"Recommendation: task partitioning",id:"recommendation-task-partitioning",level:3},{value:"Recommendation: offloading",id:"recommendation-offloading",level:3},{value:"Resources",id:"resources",level:2}],u={toc:h};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A high-level overview of how JavaScript handles concurrency using its Event Loop"),(0,r.kt)("h2",{id:"javascript-and-concurrency"},"JavaScript and concurrency"),(0,r.kt)("h3",{id:"single-threaded"},"Single-threaded"),(0,r.kt)("p",null,"A JavaScript program typically executes inside a ",(0,r.kt)("em",{parentName:"p"},"single thread")," (let's ignore some less common cases where code spawns ",(0,r.kt)("a",{href:"https://nodejs.org/api/child_process.html",target:"_blank",rel:"nofollow noopener noreferrer"},"child processes ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"}))),", ",(0,r.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers",target:"_blank",rel:"nofollow noopener noreferrer"},"Web Workers ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"}))),", ",(0,r.kt)("a",{href:"https://nodejs.org/api/worker_threads.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Worker Threads ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))," or similar)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This means that, at any point in time, at most one code path is executing. "),(0,r.kt)("li",{parentName:"ul"},"This does not prevent JavaScript from making it seem like multiple things are going on at the same time!",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Example: while a part of the JavaScript code is getting some data from the backend to update the page with, another part of the code might be creating some visual effects whenever the user hovers over a button"),(0,r.kt)("li",{parentName:"ul"},"JavaScript is able to accomplish this using a combination of ",(0,r.kt)("em",{parentName:"li"},"asynchronous calls")," and the ",(0,r.kt)("em",{parentName:"li"},"Event Loop"))))),(0,r.kt)("p",null,"When making ",(0,r.kt)("em",{parentName:"p"},"asynchronous calls"),", JavaScript code tells the JavaScript engine something like \"ok, I'm done for now, but please perform this task for me and pass the resulting data to this function I'm giving you\". The task in question could be something like retrieving data from a URL. When the engine has retrieved the data, it can then execute the program starting from the function it received. But while the engine was waiting for the data, other pieces of JavaScript that are triggered by other events can already be run. "),(0,r.kt)("p",null,"The part of the engine responsible for determining what code to run when is the ",(0,r.kt)("em",{parentName:"p"},"Event Loop"),", which in essence constantly checks if there is something ready to be executed and also determines what to execute first in case there are multiple candidates. See also ",(0,r.kt)("a",{parentName:"p",href:"#the-event-loop"},"The Event Loop"),"."),(0,r.kt)("p",null,"Note that, although the JavaScript code runs in a single thread, the engine might use several threads for performing asynchronous operations like retrieving data from a server."),(0,r.kt)("h3",{id:"non-preemptive-run-to-completion"},"Non-preemptive (run-to-completion)"),(0,r.kt)("p",null,"Another important thing about JavaScript concurrency is that it is ",(0,r.kt)("em",{parentName:"p"},"non-preemptive"),". Basically, that means that the execution of a piece of code will never be interrupted unless the code itself asks for it."),(0,r.kt)("p",null,"In a lot of languages, things are quite different. In Java, for example, concurrency is achieved using threads which could be interrupted (preempted) at any moment. This means that even code like ",(0,r.kt)("inlineCode",{parentName:"p"},"sharedCounter++")," can lead to unexpected behavior in programs using concurrency, as it's possible that the execution is interrupted after the current value is read but before the new value is written. If that happens and some other code changed the counter during the interruption, your shared counter will probably not behave as you intended. This situation is called a ",(0,r.kt)("em",{parentName:"p"},"race condition"),". See also ",(0,r.kt)("a",{parentName:"p",href:"/java/concurrency-details/threads"},"Java threads"),"."),(0,r.kt)("p",null,"Because JavaScript concurrency is ",(0,r.kt)("em",{parentName:"p"},"non-preemptive"),", we don't have this problem. Instead, we have the guarantee that synchronous code (no asynchronous calls) will always be executed atomically, entirely, to completion."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const currentValue = sharedCounter;\n\n// any amount of synchronous code\n\n// guaranteed that the code didn't get interrupted before reaching this line\nsharedCounter = currentValue + 1; \n")),(0,r.kt)("p",null,"As JavaScript normally only runs in a single thread, the fact that the code above didn't get interrupted also means that we have the guarantee that ",(0,r.kt)("inlineCode",{parentName:"p"},"sharedCounter")," didn't change in the meantime (again, we are ignoring the exceptional cases where code might for example be sharing data with ",(0,r.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers",target:"_blank",rel:"nofollow noopener noreferrer"},"Web Workers ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))," or ",(0,r.kt)("a",{href:"https://nodejs.org/api/worker_threads.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Worker Threads ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"}))),", see also ",(0,r.kt)("a",{href:"https://www.sitepen.com/blog/the-return-of-sharedarraybuffers-and-atomics/",target:"_blank",rel:"nofollow noopener noreferrer"},"The Return of SharedArrayBuffers and Atomics ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"}))),")"),(0,r.kt)("p",null,"The code will only be interrupted if it chooses to be interrupted (by making an asynchronous call). Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const currentValue = sharedCounter;\n\n// execution gets interrupted here\nawait somePromise;\n\n// note sure what has executed in the meantime\nsharedCounter = currentValue + 1; \n")),(0,r.kt)("p",null,"The fact that code runs until it chooses to be interrupted greatly reduces the potential for timing bugs. However, you can still create timing bugs by making invalid assumptions about the order in which different pieces of code will run if they are all waiting for some asynchronous call to complete."),(0,r.kt)("p",null,"Another consequence of the run-to-completion behavior is that a long-running synchronous operation prevents any other code from running. A two-second synchronous operation means that, for two seconds, your webpage will freeze or your server will be unresponsive. This means that you need to be very careful about preventing long-running synchronous operations. Even if a piece of code has everything it needs to continue, you might actually want it to be interrupted in order to give other code a chance to run on the single thread that is available. See also ",(0,r.kt)("a",{parentName:"p",href:"#dont-block-the-event-loop"},"Don't block the Event Loop"),"."),(0,r.kt)("h2",{id:"the-event-loop"},"The Event Loop"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"Event Loop")," is responsible for determining when which piece of the program gets executed, based on any events that the program's code is waiting for. These events could be timers, the user interacting with HTML elements, data being retrieved from a server, ..."),(0,r.kt)("p",null,"The exact implementation and behavior of the Event Loop is different for different JavaScript engines (browsers differ in their behavior, Node.js has its own behavior, ...). However, there are some concepts that they all share:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Queues:")," There several queues holding callbacks that are ready to be executed. Within a queue, tasks will be executed in order."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tasks:"),' Tasks are the "normal" callbacks to be executed. ',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Examples: expired timers (including Node.js ",(0,r.kt)("inlineCode",{parentName:"li"},"setImmediate()"),"), HTML click events, ..."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Microtasks:")," Microtasks take priority over normal tasks. They are used for things that should execute immediately after the currently running code has finished. Whenever the engine finishes a task, it first checks for any microtasks to be executed. The next normal task will only get executed once there are no more microtasks waiting.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Example: Promise callbacks. Note that, even if a Promise has already been resolved, its callback is executed asynchronously through a microtask."),(0,r.kt)("li",{parentName:"ul"},"Example: Node.js has ",(0,r.kt)("inlineCode",{parentName:"li"},"process.nextTick()")," which also allows scheduling microtasks")))),(0,r.kt)("p",null,"You could imagine the code for the event loop to look a bit like this (adapted from ",(0,r.kt)("a",{href:"https://github.com/atotic/event-loop",target:"_blank",rel:"nofollow noopener noreferrer"},"Event loop explainer ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"}))),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"while(true) {\n    // get first normal task from some queue\n    task = eventLoop.nextTask(); \n\n    if (task) {\n        // execute that single task\n        task.execute(); \n    }\n    \n    // execute all microtasks until none are left\n    eventLoop.executeMicrotasks(); \n    \n    // browser-specific: render if needed\n    if (eventLoop.needsRendering()) {\n        eventLoop.render();\n    }        \n}\n")),(0,r.kt)("p",null,"Note: The JavaScript specification doesn't specify exactly how the engine should select the next task to execute. It does specify that the engine needs to take the first task from some queue, but the engine can still choose ",(0,r.kt)("em",{parentName:"p"},"which")," queue to pick a task from."),(0,r.kt)("p",null,"Note: Take a look at ",(0,r.kt)("a",{href:"https://dev.to/lunaticmonk/understanding-the-node-js-event-loop-phases-and-how-it-executes-the-javascript-code-1j9",target:"_blank",rel:"nofollow noopener noreferrer"},"Understanding the Node.js event loop phases and how it executes the JavaScript code. ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))," for more details on the event loop used by Node.js. It includes details on the different phases used by the event loop, as well as the confusingly named ",(0,r.kt)("inlineCode",{parentName:"p"},"setImmediate()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"process.nextTick()"),". Interestingly, ",(0,r.kt)("inlineCode",{parentName:"p"},"setImmediate()")," is less immediate than ",(0,r.kt)("inlineCode",{parentName:"p"},"process.nextTick()"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"process.nextTick()")," doesn't wait until the next tick (iteration of the event loop through all of its phases) but actually executes in the current one."),(0,r.kt)("h3",{id:"example-execution"},"Example execution"),(0,r.kt)("p",null,"Let's take a look at how the engine executes the following script (from ",(0,r.kt)("a",{href:"https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/",target:"_blank",rel:"nofollow noopener noreferrer"},"Tasks, microtasks, queues and schedules ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"}))),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log('script start');\n\nsetTimeout(function() {\n    console.log('setTimeout');\n}, 0);\n\nPromise.resolve().then(function() {\n    console.log('promise1');\n}).then(function() {\n    console.log('promise2');\n});\n\nconsole.log('script end');\n")),(0,r.kt)("p",null,"When we execute this script, it happens as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"There is an initial task to run the script",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"The code logs ",(0,r.kt)("inlineCode",{parentName:"li"},"script start")),(0,r.kt)("li",{parentName:"ol"},"The callback for setTimeout is scheduled as a ",(0,r.kt)("em",{parentName:"li"},"task")),(0,r.kt)("li",{parentName:"ol"},"The first Promise callback is scheduled as a ",(0,r.kt)("em",{parentName:"li"},"microtask")),(0,r.kt)("li",{parentName:"ol"},"The code logs ",(0,r.kt)("inlineCode",{parentName:"li"},"script end")))),(0,r.kt)("li",{parentName:"ol"},"The microtask for the first Promise callback is executed",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"The code logs ",(0,r.kt)("inlineCode",{parentName:"li"},"promise1")),(0,r.kt)("li",{parentName:"ol"},"The second Promise callback is scheduled as a ",(0,r.kt)("em",{parentName:"li"},"microtask")))),(0,r.kt)("li",{parentName:"ol"},"The microtask for the second Promise callback is executed",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"The code logs ",(0,r.kt)("inlineCode",{parentName:"li"},"promise2")))),(0,r.kt)("li",{parentName:"ol"},"The first iteration of our event loop pseudocode (see above) is now complete"),(0,r.kt)("li",{parentName:"ol"},"Next task: the callback for setTimeout",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"The code logs ",(0,r.kt)("inlineCode",{parentName:"li"},"setTimeout"))))),(0,r.kt)("h2",{id:"dont-block-the-event-loop"},"Don't block the Event Loop"),(0,r.kt)("p",null,"As said above, JavaScript runs in a single thread and the execution of a piece of code is never interrupted unless the code itself chooses to wait for some kind of event."),(0,r.kt)("p",null,"While this prevents a lot of concurrency bugs, it also means that long-running synchronous code completely prevents the event loop from doing anything else:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A long synchronous operation on a webpage prevents any click events, responses from the server, ... from being processed. The worst case is an infinite synchronous loop, which freezes the entire page."),(0,r.kt)("li",{parentName:"ul"},"A long synchronous operation on a Node.js server prevents the server from doing anything else, making it seem unresponsive. The worst case is an infinite synchronous loop, which makes the server appear to be down from the outside world, while the server itself and process managers still consider the server to be running."),(0,r.kt)("li",{parentName:"ul"},"Basically, it is up to you to ensure that you don't block the event loop for long periods of time so that all kinds of tasks are able to run without having to wait for a long amount of time.")),(0,r.kt)("p",null,"The following code is an example of how synchronous code blocks asynchronous callbacks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const start = Date.now();\n\nsetTimeout(() => console.log("setTimeout"), 0);\n\nwhile(Date.now() < start + 1000) {\n    console.log("synchronous");\n}\n')),(0,r.kt)("p",null,"Although setTimeout callback is scheduled to execute after 0 milliseconds, it only executes after one second once the synchronous loop is done executing. The synchronous operation is blocking other tasks from being executed."),(0,r.kt)("p",null,"Note that, in extreme cases where the microtask queue stays full, the microtask queue can also block normal tasks from being executed. As an example, see the following piece of code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const start = Date.now();\n\nsetTimeout(() => console.log("setTimeout"), 0);\n\nfunction recursivePromise() {\n    Promise.resolve().then(() => {\n        console.log("recursivePromise");\n\n        if (Date.now() < start + 1000) {\n            recursivePromise();\n        }\n    });\n}\n\nrecursivePromise();\n')),(0,r.kt)("p",null,"Although setTimeout callback is scheduled to execute after 0 milliseconds, it only executes after one second once our recursive function stops adding microtasks to the queue."),(0,r.kt)("p",null,"In Node.js, there is pool of workers that handle asynchronous tasks like file reads. It's also possible to block the workers in this pool, for example by asking them to read the complete contents of a very large file. In essence, if you give a worker in the pool a long-running task, you are basically reducing the size of the worker pool by one until that task completes. If you somehow manage to get all of the workers in the pool working on a long-running task, the pool will not be able to process any other tasks that the code is waiting for."),(0,r.kt)("h3",{id:"recommendation-asynchronous-where-possible"},"Recommendation: asynchronous where possible"),(0,r.kt)("p",null,"Unless you're writing a simple script, go for asynchronous operations instead of synchronous ones where possible. Regarding Node.js specifically, if you are writing an actual server (rather than a script) you should avoid using any of the synchronous crypto, compression, file system, child process or other calls. Instead, use their asynchronous versions."),(0,r.kt)("h3",{id:"recommendation-watch-out-with-json-and-regexes"},"Recommendation: watch out with JSON and regexes"),(0,r.kt)("p",null,"JSON stringifying and parsing happens synchronously. While these operations scale linearly with the length of the input, they can take a long time for large input. This means you could suffer a DOS attack if your server using Node.js receives very large JSON inputs."),(0,r.kt)("p",null,"Some ways to mitigate this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reject large input"),(0,r.kt)("li",{parentName:"ul"},"Use alternative ways of parsing JSON, like ",(0,r.kt)("a",{href:"https://www.npmjs.com/package/JSONStream",target:"_blank",rel:"nofollow noopener noreferrer"},"JSONStream ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))," or ",(0,r.kt)("a",{href:"https://www.npmjs.com/package/bfj",target:"_blank",rel:"nofollow noopener noreferrer"},"Big-Friendly JSON ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"}))))),(0,r.kt)("p",null,"Regexes are also evaluated synchronously. Some particular regular expressions might need an exponential number of passes through the input string. That means that the time it takes to match a string against the regular expression grows exponentially as the input string grows. Large input provided to these regular expressions can basically render a Node.js server unresponsive for long periods of time. This is called a ",(0,r.kt)("a",{href:"https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS",target:"_blank",rel:"nofollow noopener noreferrer"},"ReDoS ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))," vulnerability."),(0,r.kt)("p",null,"Some ways to mitigate this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reject large input"),(0,r.kt)("li",{parentName:"ul"},"Avoid regular expressions using nested quantifiers (like ",(0,r.kt)("inlineCode",{parentName:"li"},"(a+)*"),"), backreferences (like ",(0,r.kt)("inlineCode",{parentName:"li"},"(a.*) \\1"),", ...)"),(0,r.kt)("li",{parentName:"ul"},"Use simple string matches (like ",(0,r.kt)("inlineCode",{parentName:"li"},"indexOf"),") instead of regexes where possible"),(0,r.kt)("li",{parentName:"ul"},"Use tools like ",(0,r.kt)("a",{href:"https://github.com/substack/safe-regex",target:"_blank",rel:"nofollow noopener noreferrer"},"safe-regex ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))," that can help you identify some (but not all) vulnerable regexes")),(0,r.kt)("h3",{id:"recommendation-task-partitioning"},"Recommendation: task partitioning"),(0,r.kt)("p",null,"Imagine that you have a Node.js server that accepts two types of requests:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type A, needing 1ms of synchronous computation"),(0,r.kt)("li",{parentName:"ul"},"Type B: needing 500ms of synchronous computation")),(0,r.kt)("p",null,"Let's assume that every second the server receives 100 requests of type A and 1 request of type B. If 50 requests of type A come in just after a request of type B, all of those relatively fast requests needs to wait for 500ms before they can even start to be processed (making it seem to the client like they also took 500ms). One large synchronous request can have an enormous impact on the waiting time of lots of smaller requests."),(0,r.kt)("p",null,"You can solve this situation using ",(0,r.kt)("em",{parentName:"p"},"task partitioning"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Basic idea: minimize the variation in task times by chopping up large tasks into smaller ones"),(0,r.kt)("li",{parentName:"ul"},"Application to example above:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Rewrite the code for requests of type B: Instead of performing all of the computations in one big synchronous chunk, we let the code peform a small part of the computations (maybe a few ms worth of computation) and then call ",(0,r.kt)("inlineCode",{parentName:"li"},"setTimeout")," with a delay of 0 and a callback that performs the next chunk of computation (which is put at the end of the relevant queue). "),(0,r.kt)("li",{parentName:"ul"},"This way, all tasks in the event loop take at most a few ms, making the server appear to be a lot faster and more responsive to clients issuing requests of type A.")))),(0,r.kt)("p",null,"Note: depending on how asynchronous operations are handed by the engine, you should also be careful about long-running asynchronous tasks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example: workers in the Node.js worker pool that are asked to read the complete contents of some potentially huge files can end end up blocking the worker pool"),(0,r.kt)("li",{parentName:"ul"},"You can apply task partitioning here by manually specifying which part of the file to read or using a streaming API to read the files.")),(0,r.kt)("p",null,"Also note that task partitioning shouldn't be taken too far, as there is also some overhead involved in the creation of a whole lot of tasks vs. a single long-running task."),(0,r.kt)("h3",{id:"recommendation-offloading"},"Recommendation: offloading"),(0,r.kt)("p",null,"For some kinds of long-running synchronous computations, task partitioning is very hard to achieve. In this case, you can spare the event loop (and potentially even make better use of the available CPU cores) by running those computations inside their own ",(0,r.kt)("a",{href:"https://nodejs.org/api/child_process.html",target:"_blank",rel:"nofollow noopener noreferrer"},"child process ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"}))),", ",(0,r.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers",target:"_blank",rel:"nofollow noopener noreferrer"},"Web Worker ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"}))),", ... "),(0,r.kt)("p",null,"Do note that there is some overhead for creating these and communicating with them. You can mitigate this overhead by maintaining a pool of reusable workers/processes (instead of creating new ones each time) and limiting the amount of communication that is needed."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://github.com/getify/You-Dont-Know-JS",target:"_blank",rel:"nofollow noopener noreferrer"},"You Don't Know JS ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop",target:"_blank",rel:"nofollow noopener noreferrer"},"Concurrency model and the event loop ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://github.com/atotic/event-loop",target:"_blank",rel:"nofollow noopener noreferrer"},"Event loop explainer ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/",target:"_blank",rel:"nofollow noopener noreferrer"},"Tasks, microtasks, queues and schedules ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://dev.to/lunaticmonk/understanding-the-node-js-event-loop-phases-and-how-it-executes-the-javascript-code-1j9",target:"_blank",rel:"nofollow noopener noreferrer"},"Understanding the Node.js event loop phases and how it executes the JavaScript code. ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://nodejs.org/en/docs/guides/dont-block-the-event-loop/",target:"_blank",rel:"nofollow noopener noreferrer"},"Don't Block the Event Loop (or the Worker Pool) ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"}))))))}d.isMDXComponent=!0}}]);