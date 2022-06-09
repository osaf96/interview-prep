(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(9),l=(n(0),n(231)),o={title:"Concurrency (Java)",description:"An overview of concurrent programming in Java",last_modified:new Date("2020-05-30T13:54:15.000Z"),sidebar_label:"Concurrency"},c={id:"java/concurrency",title:"Concurrency (Java)",description:"An overview of concurrent programming in Java",source:"@site/docs\\java\\concurrency.md",permalink:"/interview-prep/java/concurrency",sidebar_label:"Concurrency",sidebar:"docs",previous:{title:"Transaction isolation levels",permalink:"/interview-prep/data/sql/transaction-isolation-levels"},next:{title:"Date and Time API (Java)",permalink:"/interview-prep/java/date-time-api"}},i=[{value:"Concurrent execution basics",id:"concurrent-execution-basics",children:[]},{value:"Synchronous tasks",id:"synchronous-tasks",children:[]},{value:"Asynchronous concurrency",id:"asynchronous-concurrency",children:[{value:"Completable futures",id:"completable-futures",children:[]},{value:"User Interface callbacks",id:"user-interface-callbacks",children:[]}]},{value:"Parallel algorithms",id:"parallel-algorithms",children:[{value:"Parallel streams",id:"parallel-streams",children:[]},{value:"Parallel Array operations",id:"parallel-array-operations",children:[]}]},{value:"Be careful with blocking operations",id:"be-careful-with-blocking-operations",children:[]},{value:"Thread safety",id:"thread-safety",children:[]},{value:"Threads",id:"threads",children:[]},{value:"Locking",id:"locking",children:[]},{value:"Resources",id:"resources",children:[]}],s={rightToc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"An overview of concurrent programming in Java"),Object(l.b)("h2",{id:"concurrent-execution-basics"},"Concurrent execution basics"),Object(l.b)("p",null,"Runnable: describes a task that can be executed but does not return a result"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// defined by the JDK\npublic interface Runnable {\n    void run();\n}\n")),Object(l.b)("p",null,"Note that the ",Object(l.b)("inlineCode",{parentName:"p"},"run()")," method cannot throw any checked exceptions! See also ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/java/exceptions"}),"Exceptions"),"."),Object(l.b)("p",null,"Running a task:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Can of course be run on the current thread by just invoking ",Object(l.b)("inlineCode",{parentName:"li"},"run()")),Object(l.b)("li",{parentName:"ul"},"Can be run inside a dedicated thread (see ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/java/concurrency-details/threads"}),"Threads"),")",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Note: This one-to-one relationship between threads and tasks is not recommended!",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"You might want to reuse the same thread for several tasks"),Object(l.b)("li",{parentName:"ul"},"If you have a large number of computationally-intensive tasks, just immediately executing all of them in their own thread will lead to a loss of performance due to overhead from switching between threads"))))),Object(l.b)("li",{parentName:"ul"},"Can be run using an ",Object(l.b)("em",{parentName:"li"},"executor service"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Executor service takes care of scheduling tasks on one or multiple threads"),Object(l.b)("li",{parentName:"ul"},"Recommended approach: separates task definition and task scheduling")))),Object(l.b)("p",null,"Cached thread pool: executor service that uses an existing idle thread if possible and creates a new thread otherwise (and cleans up unused idle threads after a while"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"Runnable runnable = () -> {};      \nExecutorService executor = Executors.newCachedThreadPool();\nexecutor.execute(runnable);\n")),Object(l.b)("p",null,"Fixed thread pool: executor service that uses a fixed number of threads"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Can use this to limit resource consumption"),Object(l.b)("li",{parentName:"ul"},"Runnables are queued until a thread becomes available")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"Runnable runnable = () -> {};      \nint processors = Runtime.getRuntime().availableProcessors();\nExecutorService executor = Executors.newFixedThreadPool(processors);\nexecutor.execute(runnable);\n")),Object(l.b)("h2",{id:"synchronous-tasks"},"Synchronous tasks"),Object(l.b)("p",null,"Callable: describes a task that returns a result"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// defined by the JDK\npublic interface Callable<V> {\n    V call() throws Exception;\n}\n")),Object(l.b)("p",null,"Note that the ",Object(l.b)("inlineCode",{parentName:"p"},"call()")," method can throw any kind of exception!"),Object(l.b)("p",null,"Submitting a ",Object(l.b)("inlineCode",{parentName:"p"},"Callable")," yields a ",Object(l.b)("inlineCode",{parentName:"p"},"Future")," which can be used to get the result:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'Callable<String> callable = () -> { return "test"; };\nExecutorService executor = Executors.newCachedThreadPool();\nFuture<String> resultFuture = executor.submit(callable);\n\n// get() blocks current thread until result is available\n// if task throws, it throws ExecutionException wrapping the exception from the task\nString result = resultFuture.get(); \nSystem.out.println(result);\n')),Object(l.b)("p",null,"A ",Object(l.b)("inlineCode",{parentName:"p"},"Future")," also has a method ",Object(l.b)("inlineCode",{parentName:"p"},"cancel(mayInterruptIfRunning"),") which attempts to cancel the task:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"If task is not running yet, it won't be scheduled"),Object(l.b)("li",{parentName:"ul"},"If the task is running and ",Object(l.b)("inlineCode",{parentName:"li"},"mayInterruptIfRunning")," is true, the thread running the task is interrupted",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Thread interruption: see ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/java/concurrency-details/threads"}),"Threads"))))),Object(l.b)("p",null,"Invoking several tasks and waiting for all results:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// blocks current thread until all tasks have completed\nList<Future<String>> results = executor.invokeAll(tasks);\n")),Object(l.b)("p",null,"Invoking several tasks, waiting until the first one succeeds and canceling the rest:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"String result = executor.invokeAny(tasks);\n")),Object(l.b)("p",null,"Invoking several tasks and getting the completed ones immediately:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"ExecutorCompletionService<String> completionService =\n    new ExecutorCompletionService<>(executor);\n      \nfor (Callable<String> task: tasks) {\n    completionService.submit(task);\n}\n\nfor (int i = 0; i < tasks.size(); i++) {\n    // blocks until a new result is available\n    String currentResult = completionService.take().get();\n}\n")),Object(l.b)("h2",{id:"asynchronous-concurrency"},"Asynchronous concurrency"),Object(l.b)("p",null,"In the section on synchronous concurrency, the current thread would always wait for at least some of the concurrent work to complete. With asynchronous concurrency, this is not the case. Instead of waiting for a result, the current thread continues its work. However, you specify a callback that should be executed once the task has completed."),Object(l.b)("h3",{id:"completable-futures"},"Completable futures"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'CompletableFuture<String> f = CompletableFuture.supplyAsync(() -> {\n    return "test";\n}, executor);\n')),Object(l.b)("p",null,"Specifying a callback for the result:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"f.thenAccept(result -> { System.out.println(result); });\n")),Object(l.b)("p",null,"Specifying a callback that can also handle exceptions:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"f.whenComplete((result, exception) -> {\n    if (exception == null) {\n        // process result\n    } else {\n        // process exception\n    }\n});\n")),Object(l.b)("p",null,"It is also possible to complete a ",Object(l.b)("inlineCode",{parentName:"p"},"CompletableFuture")," manually:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"CompletableFuture<String> f = new CompletableFuture<>();\n\nexecutor.execute(() -> {\n    String result = calculatingSupplier.get();\n    f.complete(result);\n});\n\nexecutor.execute(() -> {\n    while (!f.isDone()) {\n        // try something crazy and call f.complete() if it works\n    }\n});\n")),Object(l.b)("p",null,"Note: if you call ",Object(l.b)("inlineCode",{parentName:"p"},"cancel()")," on a ",Object(l.b)("inlineCode",{parentName:"p"},"CompletableFuture"),", it will only make it complete with a ",Object(l.b)("inlineCode",{parentName:"p"},"CancellationException")),Object(l.b)("p",null,"Transforming ",Object(l.b)("inlineCode",{parentName:"p"},"CompletableFuture")," instances:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"CompletableFuture f2 = f.thenApply(result -> result.toLowerCase());\n\n// similar to concept of flatMap\nCompletableFuture f3 = f.thenCompose(functionReturningNewCompletableFuture);\n")),Object(l.b)("p",null,"Combining ",Object(l.b)("inlineCode",{parentName:"p"},"CompletableFuture")," instances:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"f.thenCombine(f2, (resultFromFirst, resultFromSecond) -> {\n    // return something based on both values\n});\n\nCompletableFuture<Void> waitForAll = CompletableFuture.allOf(f, f2);\n")),Object(l.b)("h3",{id:"user-interface-callbacks"},"User Interface callbacks"),Object(l.b)("p",null,"In Java programs with a UI, you can't perform heavy computations in the UI thread or the UI will freeze. Instead, you should perform the computations in one or more separate threads and then notify the UI thread of the result."),Object(l.b)("p",null,"Problem: UIs are typically not thread-safe (see below), so manipulating UI elements from other threads than the UI thread might corrupt the UI"),Object(l.b)("p",null,"Solution: schedule UI updates to happen on the UI thread"),Object(l.b)("p",null,"Example for JavaFX:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"Platform.runLater(() -> {\n    // make some changes on the UI elements\n})\n")),Object(l.b)("h2",{id:"parallel-algorithms"},"Parallel algorithms"),Object(l.b)("p",null,"For some computations, you can use even higher-level mechanisms than the ones above in order to speed them up using parallelization"),Object(l.b)("h3",{id:"parallel-streams"},"Parallel streams"),Object(l.b)("p",null,"See ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/java/streams"}),"Streams")),Object(l.b)("h3",{id:"parallel-array-operations"},"Parallel Array operations"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"Arrays.parallelSetAll(theArray, i -> i % 10);\nArrays.parallelSort(theArray);\n")),Object(l.b)("h2",{id:"be-careful-with-blocking-operations"},"Be careful with blocking operations"),Object(l.b)("p",null,"If you are using a thread pool with a limited or fixed number of threads, be very careful with blocking operations. Once all of the treads in the pool are executing a blocking or long-running operation, the pool will not be able to do any other kind of work until at least one of those blocking operations finishes."),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public static void main(String[] args) throws InterruptedException {\n    ExecutorService es = Executors.newFixedThreadPool(2);\n    es.execute(() -> blockingTask());\n    es.execute(() -> blockingTask());\n    es.execute(() -> normalTask());\n    es.execute(() -> normalTask());\n    es.execute(() -> normalTask());\n}\n\nprivate static void normalTask() {\n    System.out.println("Starting normal task");\n    System.out.println("Finished normal task");\n}\n\nprivate static void blockingTask() {\n    System.out.println("Starting blocking task");\n    \n    try {\n        Thread.sleep(Integer.MAX_VALUE);\n    } catch (InterruptedException e) {\n    }\n\n    System.out.println("Finished blocking task");\n}\n')),Object(l.b)("p",null,"Important note: the common fork-join pool (",Object(l.b)("inlineCode",{parentName:"p"},"ForkJoinPool.commonPool()"),") is a pool with a fixed number of threads which is used under the hood by parallel streams and by default also by completable futures!"),Object(l.b)("p",null,"See below example for completable futures and see ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/java/streams"}),"Streams")," for an example with parallel streams"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public static void main(String[] args) throws InterruptedException {\n    int commonPoolParallelism = ForkJoinPool.commonPool().getParallelism();\n\n    for (int i = 0; i < commonPoolParallelism; i++) {\n        CompletableFuture.supplyAsync(() -> blockingTask()).thenAccept(result -> {\n            System.out.println(result);\n        });\n    }\n\n    for (int i = 0; i < 10; i++) {\n        CompletableFuture.supplyAsync(() -> normalTask()).thenAccept(result -> {\n            System.out.println(result);\n        });\n    }\n    \n    Thread.sleep(Integer.MAX_VALUE);\n}\n\nprivate static String normalTask() {\n    System.out.println("Starting normal task");\n    System.out.println("Finished normal task");\n    return "normal";\n}\n\nprivate static String blockingTask() {\n    System.out.println("Starting blocking task");\n\n    try {\n        Thread.sleep(Integer.MAX_VALUE);\n    } catch (InterruptedException e) {\n    }\n\n    System.out.println("Finished blocking task");\n    return "blocking";\n}\n')),Object(l.b)("h2",{id:"thread-safety"},"Thread safety"),Object(l.b)("p",null,"See ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/java/concurrency-details/thread-safety"}),"Thread safety")),Object(l.b)("h2",{id:"threads"},"Threads"),Object(l.b)("p",null,"See ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/java/concurrency-details/threads"}),"Threads")),Object(l.b)("h2",{id:"locking"},"Locking"),Object(l.b)("p",null,"See ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/java/concurrency-details/locking"}),"Locking")),Object(l.b)("p",null,"Note that locking is a low-level concurrency tool and that code using locks is hard to get right! You are likely better off using other tools."),Object(l.b)("h2",{id:"resources"},"Resources"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Core Java SE 9 for the Impatient (book by Cay S. Horstmann)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{href:"https://dzone.com/articles/be-aware-of-forkjoinpoolcommonpool",target:"_blank",rel:"nofollow noopener noreferrer"},"Be Aware of ForkJoinPool#commonPool() ",Object(l.b)("svg",{class:"embedded-fa-icon"},Object(l.b)("use",{href:"#external-link-alt"}))))))}u.isMDXComponent=!0},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||l;return n?r.a.createElement(d,c({ref:t},s,{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);