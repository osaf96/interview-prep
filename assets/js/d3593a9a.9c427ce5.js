"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[4806],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2155:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={title:"Thread safety (Java)",description:"Concurrency issues in Java and how to prevent them",last_modified:new Date("2020-10-25T21:56:08.989Z"),sidebar_label:"Thread safety"},s=void 0,u={unversionedId:"java/concurrency-details/thread-safety",id:"java/concurrency-details/thread-safety",title:"Thread safety (Java)",description:"Concurrency issues in Java and how to prevent them",source:"@site/docs/java/concurrency-details/thread-safety.md",sourceDirName:"java/concurrency-details",slug:"/java/concurrency-details/thread-safety",permalink:"/interview-prep/about/java/concurrency-details/thread-safety",draft:!1,tags:[],version:"current",frontMatter:{title:"Thread safety (Java)",description:"Concurrency issues in Java and how to prevent them",last_modified:"2020-10-25T21:56:08.989Z",sidebar_label:"Thread safety"},sidebar:"docs",previous:{title:"Locking",permalink:"/interview-prep/about/java/concurrency-details/locking"},next:{title:"Threads",permalink:"/interview-prep/about/java/concurrency-details/threads"}},c={},p=[{value:"Concurrency issues",id:"concurrency-issues",level:2},{value:"Concurrency issue: visibility",id:"concurrency-issue-visibility",level:3},{value:"Concurrency issue: race conditions",id:"concurrency-issue-race-conditions",level:3},{value:"Strategies for safe concurrency",id:"strategies-for-safe-concurrency",level:2},{value:"Thread-safe data structures",id:"thread-safe-data-structures",level:2},{value:"Thread-safe collections",id:"thread-safe-collections",level:3},{value:"Atomic counters and accumulators",id:"atomic-counters-and-accumulators",level:3},{value:"Thread-local variables",id:"thread-local-variables",level:3},{value:"Resources",id:"resources",level:2}],m={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Concurrency issues in Java and how to prevent them"),(0,i.kt)("h2",{id:"concurrency-issues"},"Concurrency issues"),(0,i.kt)("p",null,"Even if you don't use low-level concurrency mechanisms, you still need to be careful about concurrency issues!"),(0,i.kt)("p",null,"The issues below can for example still arise when using parallel streams, if lambdas passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"filter()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"map()")," use shared data"),(0,i.kt)("h3",{id:"concurrency-issue-visibility"},"Concurrency issue: visibility"),(0,i.kt)("p",null,"Basic idea: updates to a variable might not be visible across different threads!"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'private static boolean done = false;\n\npublic static void main(String[] args) {\n    ExecutorService executor = Executors.newCachedThreadPool();\n    \n    executor.execute(() -> {\n        for (int i = 0; i < 1000; i++) {\n            System.out.println("Hello " + i);\n        }\n        \n        done = true;\n    });                \n    \n    executor.execute(() -> {\n        int i = 0;\n        \n        while (!done) {\n            i++;\n        }\n        \n        System.out.println("Goodbye " + i);\n    });\n}\n')),(0,i.kt)("p",null,'Result you might expect: first all "Hello" messages, then a "Goodbye" message with a high number'),(0,i.kt)("p",null,'Result you are likely to get: all "Hello" messages, and then the program never prints "Goodbye" but also never completes'),(0,i.kt)("p",null,"Problem: the effect of ",(0,i.kt)("inlineCode",{parentName:"p"},"done = true;"),' in the thread printing the "Hello" messages might not be ',(0,i.kt)("em",{parentName:"p"},"visible"),' to the to thread that needs to print the "Goodbye" message'),(0,i.kt)("p",null,"Cause: optimizations performed by compilers, the JVM and processors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Processor tries to cache values from RAM in much faster processor cache"),(0,i.kt)("li",{parentName:"ul"},"The order of instructions might be changed in an attempt to improve performance",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"As the inner part of the ",(0,i.kt)("inlineCode",{parentName:"li"},"while")," loop in the code above doesn't change ",(0,i.kt)("inlineCode",{parentName:"li"},"done"),", this code might be changed to ",(0,i.kt)("inlineCode",{parentName:"li"},"if (!done) while (true) i++;")))),(0,i.kt)("li",{parentName:"ul"},"These optimizations assume that there is no concurrent memory access")),(0,i.kt)("p",null,"Ways to ensure that an update to a variable is visible:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The value of a ",(0,i.kt)("inlineCode",{parentName:"li"},"final")," variable is visible after initialization",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Good practice: make variables final if possible"))),(0,i.kt)("li",{parentName:"ul"},"The initial value of a static variable is visible after static initialization",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Static initialization: code running in a ",(0,i.kt)("inlineCode",{parentName:"li"},"static {}")," block"))),(0,i.kt)("li",{parentName:"ul"},"Changes to a ",(0,i.kt)("inlineCode",{parentName:"li"},"volatile")," variable are visible"),(0,i.kt)("li",{parentName:"ul"},"Changes that happen before releasing a lock are visible to anyone acquiring the same lock afterwards (see ",(0,i.kt)("a",{parentName:"li",href:"/java/concurrency-details/locking"},"Locking"),")")),(0,i.kt)("p",null,"In the example above, marking the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"done")," as volatile fixes the problem"),(0,i.kt)("h3",{id:"concurrency-issue-race-conditions"},"Concurrency issue: race conditions"),(0,i.kt)("p",null,"A race condition is a situation where multiple threads are each attempting to perform an operation and the interaction between the threads yields an incorrect result that is different from the result that we would get if we just applied each thread's operation sequentially"),(0,i.kt)("p",null,"Example race condition:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'private static volatile int count = 0;\n\npublic static void main(String[] args) {\n    ExecutorService executor = Executors.newCachedThreadPool();\n    \n    for (int i = 0; i < 100; i++) {\n        int taskId = i;\n        \n        executor.execute(() -> {\n            for (int j = 0; j < 1000; j++) {\n                count++;\n            }\n            \n            System.out.println(taskId + " " + count);\n        });\n        \n    }\n}\n')),(0,i.kt)("p",null,"Result you might expect: task 999 printing the number 100000"),(0,i.kt)("p",null,"Result you are likely to get: task 999 printing a number lower than 100000, and a different one every time you run the program"),(0,i.kt)("p",null,"Problem: ",(0,i.kt)("inlineCode",{parentName:"p"},"count++")," is not an atomic operation! It is actually equivalent to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"temp = count + 1;\n// at this point, another thread might take over and compute and/or set the new count\ncount = temp; // if something happened in between, this likely sets an incorrect value\n")),(0,i.kt)("p",null,"Counters are definitely not the only problem. Race conditions can lead to issues whenever variables shared between threads are mutated. In fact, a lot of Java data structures (for example ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrayList")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"HashSet"),") are not thread-safe and can become corrupted if they are accessed from multiple threads."),(0,i.kt)("h2",{id:"strategies-for-safe-concurrency"},"Strategies for safe concurrency"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Confinement"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Don't share any data between threads"),(0,i.kt)("li",{parentName:"ul"},"Data from different threads can be combined after they have finished their computations"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Immutability"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Immutable objects are safe to share",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Of course, overwriting a shared variable holding an immutable object can still lead to issues! (see also the concurrency issue above, taking into account that an integer value is somewhat equivalent to an immutable object)"))),(0,i.kt)("li",{parentName:"ul"},"Examples of immutable classes: ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," and the classes from the ",(0,i.kt)("a",{parentName:"li",href:"/java/date-time-api"},"Date and Time API")),(0,i.kt)("li",{parentName:"ul"},"Example: it's safe share a single ",(0,i.kt)("inlineCode",{parentName:"li"},"LocalDate")," object among multiple threads, because all operations on the object (like adding a year to it) do not change the object itself but return a new object instead"),(0,i.kt)("li",{parentName:"ul"},"Tips for implementing your own immutable classes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Make all instances variables ",(0,i.kt)("inlineCode",{parentName:"li"},"final")," (this also helps with visibility, see above)"),(0,i.kt)("li",{parentName:"ul"},"Don't leak any state that could be mutated externally (example: don't return a reference to an internal array or collection from any of your methods). Return a copy instead."),(0,i.kt)("li",{parentName:"ul"},"Don't store a reference to a mutable object received in the constructor. Make a copy of the object instead."),(0,i.kt)("li",{parentName:"ul"},"Don't let the ",(0,i.kt)("inlineCode",{parentName:"li"},"this")," reference escape the constructor (or someone could observe the object in an incomplete state)"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Thread-safe data structures"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Some data structures are intended to be used concurrently by multiple threads (see below)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Locking"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Low-level concurrency mechanism"),(0,i.kt)("li",{parentName:"ul"},"Can be used to ensure that a sequence of operations is carried out without being interrupted",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This is called a ",(0,i.kt)("em",{parentName:"li"},"critical section")))),(0,i.kt)("li",{parentName:"ul"},"Is used internally by thread-safe classes to control concurrency"),(0,i.kt)("li",{parentName:"ul"},"Very hard to get right, so avoid implementing manually when possible",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Locks can become bottlenecks or even lead to deadlocks"),(0,i.kt)("li",{parentName:"ul"},"Inadequate locking might still allow concurrency issues to occur"))),(0,i.kt)("li",{parentName:"ul"},"For more details, see ",(0,i.kt)("a",{parentName:"li",href:"/java/concurrency-details/locking"},"Locking"))))),(0,i.kt)("h2",{id:"thread-safe-data-structures"},"Thread-safe data structures"),(0,i.kt)("h3",{id:"thread-safe-collections"},"Thread-safe collections"),(0,i.kt)("p",null,"Collections in ",(0,i.kt)("inlineCode",{parentName:"p"},"java.util.concurrent")," are thread-safe and efficient: multiple threads can access them concurrently without corrupting them and the threads won't even block each other if they access different parts"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"ConcurrentHashMap")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ConcurrentHashMap<String, Long> map = new ConcurrentHashMap<>();\n\n// thread-safe methods\nmap.putIfAbsent("key", 1L);\nmap.compute("key", (key, value) -> value == null ? 1 : value + 1);\n\n// don\'t do this, this is not thread-safe\nLong oldValue = map.get("key");\nLong newValue = oldValue == null ? 1 : oldValue + 1);\nmap.put("key", newValue);\n')),(0,i.kt)("p",null,"Note: you can get a concurrent ",(0,i.kt)("inlineCode",{parentName:"p"},"Set")," (that is internally backed by a ",(0,i.kt)("inlineCode",{parentName:"p"},"ConcurrentHashMap"),") using ",(0,i.kt)("inlineCode",{parentName:"p"},"ConcurrentHashMap.newKeySet()")),(0,i.kt)("p",null,"Useful for coordinating work between tasks: blocking queues"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Examples: ",(0,i.kt)("inlineCode",{parentName:"li"},"LinkedBlockingQueue")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ArrayBlockingQueue")),(0,i.kt)("li",{parentName:"ul"},"Producer tasks add elements into the queue, consumer tasks retrieve them"),(0,i.kt)("li",{parentName:"ul"},"The queue blocks when trying to add an element through ",(0,i.kt)("inlineCode",{parentName:"li"},"put()")," if the queue is currently full",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This makes producer tasks block if they get too far ahead of the consumers"))),(0,i.kt)("li",{parentName:"ul"},"The queue blocks when trying to retrieve an element through ",(0,i.kt)("inlineCode",{parentName:"li"},"take()")," if the queue is empty",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This makes consumer tasks block until the producers catch up"))),(0,i.kt)("li",{parentName:"ul"},"In addition to the blocking methods",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Methods that throw on queue full/empty: ",(0,i.kt)("inlineCode",{parentName:"li"},"add()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"remove()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"element()")),(0,i.kt)("li",{parentName:"ul"},"Methods that return null false on queue full/empty: ",(0,i.kt)("inlineCode",{parentName:"li"},"offer()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"poll()"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"peak()")))),(0,i.kt)("li",{parentName:"ul"},"Challenge: stopping the consumers",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"An empty queue doesn't necessarily mean that the work is over, it might just mean the producers need to catch up"),(0,i.kt)("li",{parentName:"ul"},'If there is a singe producer, it can help to add a "last item" indicator after the last real item in the queue')))),(0,i.kt)("p",null,"Copy-on-write collections: ",(0,i.kt)("inlineCode",{parentName:"p"},"CopyOnWriteArrayList")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"CopyOnWriteArraySet")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All mutators make a copy of the underlying array"),(0,i.kt)("li",{parentName:"ul"},"Useful if there are a lot more threads reading the collection than threads mutating it"),(0,i.kt)("li",{parentName:"ul"},"If the collection is mutated after creation of an iterator, the iterator still refers to the old array",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Iterator has a consistent view, but it might be outdated")))),(0,i.kt)("h3",{id:"atomic-counters-and-accumulators"},"Atomic counters and accumulators"),(0,i.kt)("p",null,"Package ",(0,i.kt)("inlineCode",{parentName:"p"},"java.util.concurrent.atomic")," has some useful classes that provide a thread-safe way to create counters and accumulators"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"AtomicLong nextId = new AtomicLong();\n        \n// in some thread\nlong id = nextId.incrementAndGet(); // gets value, adds 1, sets it and returns it\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"incrementAndGet()")," method is atomic, which means that it executes all of its operations before another thread is able to access the ",(0,i.kt)("inlineCode",{parentName:"p"},"AtomicLong"),". This means that multiple threads can safely access the same ",(0,i.kt)("inlineCode",{parentName:"p"},"AtomicLong")," instance concurrently."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"AtomicLong largest = new AtomicLong();\n\n// thread-safe\nlargest.updateAndGet(x -> Math.max(x, observed));\n\n// not thread-safe\nlargest.set(Math.max(largest.get(), observed));\n")),(0,i.kt)("p",null,"Drawback: updates are performed ",(0,i.kt)("em",{parentName:"p"},"optimistically")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The operation first computes the new value, then checks if the old value is still the same, and retries if it's not"),(0,i.kt)("li",{parentName:"ul"},"This might not work well with a large number of threads all trying to make updates, as there will be a lot of retries required")),(0,i.kt)("p",null,"Better alternative when lots of threads will be updating at the same time: ",(0,i.kt)("inlineCode",{parentName:"p"},"LongAdder")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Keeps multiple variables, the sum of all those variables makes up the current value"),(0,i.kt)("li",{parentName:"ul"},"This is efficient in the common situation where we only need the sum after all the work has been done")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"LongAdder count = new LongAdder();\n        \n// in some thread\ncount.increment();\n")),(0,i.kt)("h3",{id:"thread-local-variables"},"Thread-local variables"),(0,i.kt)("p",null,"Sometimes, you might want multiple threads to have access to an instance of a certain non-tread-safe class, but you don't need every thread to use the exact same instance. In this case, you can avoid sharing between the threads by giving every thread its own specific instance of the class."),(0,i.kt)("p",null,'Example: letting multiple threads "share" a ',(0,i.kt)("inlineCode",{parentName:"p"},"NumberFormat")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"private static final ThreadLocal<NumberFormat> currencyFormat = ThreadLocal\n        .withInitial(() -> NumberFormat.getCurrencyInstance());\n\n// inside some thread\nString amountString = currencyFormat.get().format(total)\n")),(0,i.kt)("p",null,"The first time a thread calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"get()")," method, an instance is created based on the lambda expression supplied to ",(0,i.kt)("inlineCode",{parentName:"p"},"withInitial()"),". From then on, that same instance will always be returned whenever that specific thread calls ",(0,i.kt)("inlineCode",{parentName:"p"},"get()"),"."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Core Java SE 9 for the Impatient (book by Cay S. Horstmann)")))}d.isMDXComponent=!0}}]);