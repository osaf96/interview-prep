"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[7672],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(a),d=r,h=c["".concat(i,".").concat(d)]||c[d]||p[d]||s;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<s;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7404:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),o=["components"],l={title:"Streams (Java)",description:"An overview of Java Streams and when/how to use them",last_modified:new Date("2020-05-30T13:54:15.000Z"),sidebar_label:"Streams"},i=void 0,m={unversionedId:"java/streams",id:"java/streams",title:"Streams (Java)",description:"An overview of Java Streams and when/how to use them",source:"@site/docs/java/streams.md",sourceDirName:"java",slug:"/java/streams",permalink:"/interview-prep/java/streams",draft:!1,tags:[],version:"current",frontMatter:{title:"Streams (Java)",description:"An overview of Java Streams and when/how to use them",last_modified:"2020-05-30T13:54:15.000Z",sidebar_label:"Streams"},sidebar:"docs",previous:{title:"Overloading, overriding and method hiding",permalink:"/interview-prep/java/overloading-overriding-method-hiding"},next:{title:"Locking",permalink:"/interview-prep/java/concurrency-details/locking"}},u={},p=[{value:"Basic idea",id:"basic-idea",level:2},{value:"Creating streams",id:"creating-streams",level:2},{value:"Intermediate operations",id:"intermediate-operations",level:2},{value:"Terminal operations",id:"terminal-operations",level:2},{value:"Simple reductions",id:"simple-reductions",level:3},{value:"Transforming into arrays or collections",id:"transforming-into-arrays-or-collections",level:3},{value:"Transforming into maps",id:"transforming-into-maps",level:3},{value:"Streams of primitive types",id:"streams-of-primitive-types",level:2},{value:"Parallel streams",id:"parallel-streams",level:2},{value:"Avoid blocking operations in parallel streams",id:"avoid-blocking-operations-in-parallel-streams",level:3},{value:"Drawbacks of using streams",id:"drawbacks-of-using-streams",level:2},{value:"Resources",id:"resources",level:2}],c={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"An overview of Java Streams and when/how to use them"),(0,s.kt)("h2",{id:"basic-idea"},"Basic idea"),(0,s.kt)("p",null,"Streams are a way to specify operations on lists in a more declarative way."),(0,s.kt)("p",null,"Example: counting all of the words in a list that are longer than 3 characters."),(0,s.kt)("p",null,"The classic imperative way (",(0,s.kt)("em",{parentName:"p"},"imperative"),", focus on ",(0,s.kt)("em",{parentName:"p"},"how")," to do it):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"long numberLongWords = 0;\n\nfor (String word: words) {\n    if (word.length() > 3) {\n        numberLongWords++;\n    }\n}\n")),(0,s.kt)("p",null,"The streams approach (more ",(0,s.kt)("em",{parentName:"p"},"declarative"),", focus on ",(0,s.kt)("em",{parentName:"p"},"what")," to do without specifying exactly how):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"numberLongWords = words.stream()\n        .filter(word -> word.length() > 3)\n        .count();\n")),(0,s.kt)("p",null,"Because we are specifying what to do rather than how to do it, it becomes easier to change the exact way that the calculation is performed. For example, if we simply use the ",(0,s.kt)("inlineCode",{parentName:"p"},"parallelStream()")," method instead of the ",(0,s.kt)("inlineCode",{parentName:"p"},"stream()")," method, the filtering and counting can now happen in parallel (using multiple threads)."),(0,s.kt)("p",null,"Streams can seem similar to collections, but there are some important differences:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A stream does not necessarily store its elements. They can also be generated on demand. There are even situations when storing all of the elements would be impossible. An example of this are ",(0,s.kt)("em",{parentName:"li"},"infinite")," streams, which do not have a finite number of elements."),(0,s.kt)("li",{parentName:"ul"},"Operations on a stream don't change the stream itself. Instead, they generate a new altered stream."),(0,s.kt)("li",{parentName:"ul"},"Stream operations are ",(0,s.kt)("strong",{parentName:"li"},"lazy")," when possible. This means results are only calculated when needed. For example, if you have a stream expression that filters a list of words to only keep the long words and then takes the first five words, the filter will only be executed until the first five matching words are found. This also makes it possible to perform finite operations on infinite streams.")),(0,s.kt)("p",null,"A stream expression is typically composed of three stages:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Creating the stream"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"Intermediate operations")," that transform the stream into new streams"),(0,s.kt)("li",{parentName:"ul"},"A ",(0,s.kt)("em",{parentName:"li"},"terminal operation")," that turns a stream into a non-stream result. Because this is the part that determines what result we need, this is also the part that determines exactly which lazy operations are executed. Without a terminal operation, nothing will happen!")),(0,s.kt)("h2",{id:"creating-streams"},"Creating streams"),(0,s.kt)("p",null,"Obtaining a stream from a collection: see above."),(0,s.kt)("p",null,"Obtaining a stream from an array:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"You can use the static ",(0,s.kt)("inlineCode",{parentName:"li"},"Stream.of()")," method and pass the array to it. That method has a varargs parameter, so instead of an actual array you can also pass it a variable number of arguments that will make up the stream."),(0,s.kt)("li",{parentName:"ul"},"If you already have an array but want a stream representing only a part of it, you can use the method ",(0,s.kt)("inlineCode",{parentName:"li"},"Arrays.stream(array, from, to)")," to get such a stream")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'Stream.of("a", "b", "c");\nStream.ofNullable(nullableString); // 0 elements if nullableString == null, 1 otherwise\n\nArrays.stream(wordsArray, startIndex, endIndex);\n')),(0,s.kt)("p",null,"Creating an empty stream: ",(0,s.kt)("inlineCode",{parentName:"p"},"Stream.empty()")),(0,s.kt)("p",null,"Creating infinite streams:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Use the ",(0,s.kt)("inlineCode",{parentName:"li"},"Stream.generate()")," method, which takes a ",(0,s.kt)("inlineCode",{parentName:"li"},"Supplier<T>")," that generates the actual values. Whenever a new value must be generated for the stream, that supplier function is used."),(0,s.kt)("li",{parentName:"ul"},"Use the ",(0,s.kt)("inlineCode",{parentName:"li"},"Stream.iterate()")," method when the next value of a stream needs to depend on the previous value",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Since Java 9, there is also an overload for this method that takes 3 arguments instead of 2. The added argument (in the middle, not at the end) is a ",(0,s.kt)("inlineCode",{parentName:"li"},"Predicate")," that specifies when the generation of new elements should finish. If the ",(0,s.kt)("inlineCode",{parentName:"li"},"Predicate")," fails for a newly generated element, that element is not added to the stream and the generation of new elements is stopped.")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'Stream.generate(() -> "constant"); // infinite constant stream\nStream.generate(Math::random); // infinite stream of random values\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"Stream<Integer> powersOfTwo = \n        Stream.iterate(2, n -> n * 2);\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"Stream<Integer> powersOfTwoSmallerThanFiveHundred = \n        Stream.iterate(2, n -> n < 500, n -> n * 2);\n")),(0,s.kt)("h2",{id:"intermediate-operations"},"Intermediate operations"),(0,s.kt)("p",null,"Filter:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"words.stream().filter(word -> word.length() > 12);\n")),(0,s.kt)("p",null,"Map:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"words.stream().map(String::toUpperCase);\n")),(0,s.kt)("p",null,"Flatmap:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"apply operation that turns every element into a stream"),(0,s.kt)("li",{parentName:"ul"},"flatten resulting streams into a single stream")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'words.stream().flatMap(word -> Stream.of(word.split("")));\n')),(0,s.kt)("p",null,"Limit number of elements:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"infiniteStream.limit(100)\n")),(0,s.kt)("p",null,"Skip a number of elements:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"words.stream().skip(1)\n")),(0,s.kt)("p",null,"Take elements from stream while a certain condition is true (and stop then)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'Stream.of("a", "a", "b", "a").takeWhile(letter -> letter.equals("a")) // a, a\n')),(0,s.kt)("p",null,"Drop elements while a certain condition is true (get stream of all elements starting from the first element for which the condition was true)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'Stream.of("a", "a", "b", "a").dropWhile(letter -> letter.equals("a")) // b, a\n')),(0,s.kt)("p",null,"Concatenate streams (only makes sense if first one not infinite):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"Stream.concat(firstStream, secondStream);\n")),(0,s.kt)("p",null,"Suppress duplicates:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"words.stream().distinct();\n")),(0,s.kt)("p",null,"Sorting:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"words.stream().sorted(Comparator.comparing(String::length));\n")),(0,s.kt)("p",null,"Invoke a function every time an element is retrieved:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"Stream.iterate(2, n -> n * 2)\n        .peek(System.out::println) // executed every time an element is generated\n        .limit(20)\n        .toArray(); // terminal operation to make sure elements are actually retrieved\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"peek")," function from the above example is also useful for using a debugger on a stream:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"Stream.iterate(2, n -> n * 2).peek(x -> {\n    System.out.println(x); // set breakpoint on this line\n}).limit(20).toArray();\n")),(0,s.kt)("h2",{id:"terminal-operations"},"Terminal operations"),(0,s.kt)("p",null,"Streams are lazy -> without terminal operations, nothing happens at all!"),(0,s.kt)("h3",{id:"simple-reductions"},"Simple reductions"),(0,s.kt)("p",null,"Count number of elements:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"words.stream().filter(word -> word.length() > 12).count();\n")),(0,s.kt)("p",null,"Get min or max:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"words.stream().max(String::compareToIgnoreCase); // returns Optional<String>\n")),(0,s.kt)("p",null,"Find first element:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"words.stream()\n        .filter(word -> word.length() > 12)\n        .findFirst(); // returns Optional<String>\n")),(0,s.kt)("p",null,"Find any element (useful with parallel streams):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"words.stream()\n        .filter(word -> word.length() > 12)\n        .findAny(); // returns Optional<String>\n")),(0,s.kt)("p",null,"Check if something matches"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"words.stream().anyMatch(word -> word.length() > 12) // returns boolean\n")),(0,s.kt)("p",null,"Execute a function for each element:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"words.stream().forEach(System.out::println); // not guaranteed to preserve order\nwords.stream().forEachOrdered(System.out::println) // guaranteed to preserve order\n")),(0,s.kt)("p",null,"Reduce to a sum, count, average, maximum or minimum value:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"IntSummaryStatistics summary =     \n        words.stream().collect(Collectors.summarizingInt(String::length));\n        \nint max = summary.getMax();\ndouble average = summary.getAverage();\n")),(0,s.kt)("p",null,"Concatenate stream of strings:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'words.stream().collect(Collectors.joining(", "))\n')),(0,s.kt)("h3",{id:"transforming-into-arrays-or-collections"},"Transforming into arrays or collections"),(0,s.kt)("p",null,"Array:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"// to get an array of the correct type (not Object), we need to pass a constructor\nString[] result = words.stream().toArray(String[]::new);\n")),(0,s.kt)("p",null,"List:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"words.stream().collect(Collectors.toList());\n")),(0,s.kt)("p",null,"Set:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"words.stream().collect(Collectors.toSet());\n")),(0,s.kt)("p",null,"Specific kind of collection by passing constructor:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"words.stream().collect(Collectors.toCollection(TreeSet::new));\n")),(0,s.kt)("h3",{id:"transforming-into-maps"},"Transforming into maps"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"words.stream().collect(\n        Collectors.toMap(String::length, String::toLowerCase)):    \n\nwords.stream().collect(\n        Collectors.toMap(String::length, Function.identity())): // element is value\n")),(0,s.kt)("p",null,"Note: the above statements will throw if there is more than one element with the same key!"),(0,s.kt)("p",null,"Fix: provide third function that resolves the conflict and determines the value for the key given the existing and new value"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"words.stream().collect(\n        Collectors.toMap(\n                String::length, \n                Function.identity(), \n                (existingValue, newValue) -> existingValue));\n")),(0,s.kt)("p",null,"Specific kind of map -> pass as fourth argument"),(0,s.kt)("p",null,"Transforming into map of lists:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"words.stream().collect(\n        Collectors.groupingBy(String::length));\n")),(0,s.kt)("p",null,"If classifier function you want to pass to groupingBy is a predicate, partitioningBy is more efficient:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'// Map<Boolean, List<String>>\nwords.stream().collect(\n        Collectors.partitioningBy(word -> word.startsWith("t"))); \n')),(0,s.kt)("p",null,"Transforming into map of sets:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"words.stream().collect(\n        Collectors.groupingBy(String::length, Collectors.toSet()));\n")),(0,s.kt)("h2",{id:"streams-of-primitive-types"},"Streams of primitive types"),(0,s.kt)("p",null,"When working with primitive values, it is more efficient to work directly with those primitive values instead of using their boxed versions. There are specialized types ",(0,s.kt)("inlineCode",{parentName:"p"},"IntStream"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"DoubleStream"),", ... that work directly with primitive types, without using wrappers."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"IntStream stream = IntStream.of(1, 1, 2, 3, 5);\nIntStream stream = IntStream.range(0, 100); // upper bound excluded\nIntStream stream = IntStream.rangeClosed(0, 100); // upper bound included\n    \nIntStream stream = words.stream.mapToInt(String::length);\n")),(0,s.kt)("p",null,"Additional functionality present in ",(0,s.kt)("inlineCode",{parentName:"p"},"IntStream"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"DoubleStream"),", ...: simple min, max, sum, .. methods"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"System.out.println(IntStream.rangeClosed(1, 100).sum());\n")),(0,s.kt)("p",null,"Converting a primitive type stream to an object stream:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"Stream<Integer> stream = intStream.boxed();\n")),(0,s.kt)("h2",{id:"parallel-streams"},"Parallel streams"),(0,s.kt)("p",null,"Getting a parallel stream:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"collection.parallelStream()\nexistingStream.parallel()\n")),(0,s.kt)("p",null,"Note: if the stream is in parallel mode when the terminal method executes, all intermediate stream operations will also be parallelized!"),(0,s.kt)("p",null,"Note: there is quite some overhead in parallelization, so don't blindly make all of your streams parallel! Parallel streams only make sense for huge in-memory collections of data and computationally expensive processing where different parts of the stream can be processed separately"),(0,s.kt)("p",null,"Getting an idea of the threads involved:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},".peek(string -> System.out.println(Thread.currentThread().getName()))\n")),(0,s.kt)("p",null,"Important: operations to execute in parallel should be stateless and should be able to be executed in arbitrary order!"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"// bad code (likely to get different - wrong - results each time)\nint[] shortWordCounts = new int[12]\n\nwords.parallelStream().forEach(word -> {\n    if (word.length < 12) {\n        shortWords[word.length()]++; // race condition!\n    }\n})\n\n// better alternative\nMap<Integer, Long> shortWordCounts = \n        words.parallelStream()\n                .filter(word -> word.length < 12)\n                .collect(Collectors.groupingBy(\n                        String::length,\n                        Collectors.counting()));\n")),(0,s.kt)("p",null,"Some operations on parallel streams can be made more efficient by making it clear that you do not care about ordering!"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Example: distinct()",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"If you just want distinct elements, but not necessarily in the order in which they first appeared in the original stream, the stream processing can happen in different segments and uniqueness can be tracked using a shared set of duplicates"))),(0,s.kt)("li",{parentName:"ul"},"Example: limit()",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"If you just want x element, not the first x elements, elements can more easily be processed in parallel")))),(0,s.kt)("p",null,"Note: by default, streams from ordered collections (arrays and lists), ranges, generators, iterators or from ",(0,s.kt)("inlineCode",{parentName:"p"},"Stream.sorted")," are ordered!"),(0,s.kt)("p",null,"Making a stream unordered: simply call ",(0,s.kt)("inlineCode",{parentName:"p"},"Stream.unordered")),(0,s.kt)("h3",{id:"avoid-blocking-operations-in-parallel-streams"},"Avoid blocking operations in parallel streams"),(0,s.kt)("p",null,"When using parallel streams, avoid blocking operations!"),(0,s.kt)("p",null,"Parallel streams use the common fork-join pool (",(0,s.kt)("inlineCode",{parentName:"p"},"ForkJoinPool.commoPool()"),"). The number of threads in this common pool is determined by the number of cores available and is equal to (#cores - 1). If you use blocking (or in general-long-running) operations in your parallel streams, these will affect ",(0,s.kt)("strong",{parentName:"p"},"all")," other parallel streams (and any other code that is using the common fork-join pool). It's not that hard to actually block all threads in the common fork-join pool, meaning that no other parallel streams can get any work done until those threads aren't blocked anymore."),(0,s.kt)("p",null,"Example illustrating this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public static void main(String[] args) throws InterruptedException {     \n    System.out.println("CommonPool Parallelism: " + ForkJoinPool.commonPool().getParallelism());\n    ExecutorService es = Executors.newCachedThreadPool();  \n    es.execute(() -> blockingStreamTask());   \n    es.execute(() -> blockingStreamTask());  \n    es.execute(() -> normalStreamTask());  \n    es.execute(() -> normalStreamTask());   \n    es.execute(() -> normalStreamTask());   \n }\n\nprivate static void normalStreamTask() {\n    IntStream.range(1, Integer.MAX_VALUE).parallel().filter(i -> i % 2 == 0).count();\n    System.out.println("Finished normal stream task");\n}\n\nprivate static void blockingStreamTask() {\n    IntStream.range(1, Integer.MAX_VALUE).parallel().filter(i -> {\n        try {\n            Thread.sleep(Integer.MAX_VALUE);\n        } catch (InterruptedException e) {}\n        \n        return i % 2 == 0;\n    }).count();\n    \n    System.out.println("Finished blocking stream task");\n}\n')),(0,s.kt)("p",null,"The result of executing the above code might be different every time you execute it, but you will likely see that one or more normal stream tasks are blocked by the blocking stream tasks. Once all threads in the common fork-join pool are executing the ",(0,s.kt)("inlineCode",{parentName:"p"},"Thread.sleep(Integer.MAX_VALUE);")," statement, no other work can be processed by the common fork-join pool until the threads stop sleeping."),(0,s.kt)("p",null,"See also ",(0,s.kt)("a",{parentName:"p",href:"/java/concurrency"},"Concurrency")),(0,s.kt)("h2",{id:"drawbacks-of-using-streams"},"Drawbacks of using streams"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Performance: ",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Using streams implies some overhead, so they are likely slower than hand-written loops etc."),(0,s.kt)("li",{parentName:"ul"},"Note: For huge in-memory collections of data, parallel streams could actually be an easy way to speed up computations. There will still be some overhead compared to the ideal hand-written parallel code, but using parallel streams could be easier and way less error-prone."))),(0,s.kt)("li",{parentName:"ul"},"Readability (subjective)",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"From a certain level of complexity, code using streams starts to get harder to read (see below)"),(0,s.kt)("li",{parentName:"ul"},"Also depends on how familiar the team is with streams"))),(0,s.kt)("li",{parentName:"ul"},"Stack traces",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Errors happening inside streams lead to more complex stack traces than errors in simple loops")))),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'List<Integer> list = Arrays.asList(1, 2, 3);\n\n// simple nested loop\nfor (Integer i : list) {\n    for (int j = 0; j < i; j++) {\n        System.out.println(i / j);\n    }\n}\n\n/*\nException in thread "main" java.lang.ArithmeticException: / by zero\n    at misc.Main.main(Main.java:15)\n*/\n\n// streams\nlist.forEach(i -> {\n    IntStream.range(0, i).forEach(j -> {\n        System.out.println(i / j);\n    });\n});\n\n/*\nException in thread "main" java.lang.ArithmeticException: / by zero\n    at misc.Main.lambda$1(Main.java:22)\n    at java.base/java.util.stream.Streams$RangeIntSpliterator.forEachRemaining(Streams.java:104)\n    at java.base/java.util.stream.IntPipeline$Head.forEach(IntPipeline.java:593)\n    at misc.Main.lambda$0(Main.java:21)\n    at java.base/java.util.Arrays$ArrayList.forEach(Arrays.java:4390)\n    at misc.Main.main(Main.java:20)\n*/\n')),(0,s.kt)("h2",{id:"resources"},"Resources"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Core Java SE 9 for the Impatient (book by Cay S. Horstmann)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{href:"https://dzone.com/articles/be-aware-of-forkjoinpoolcommonpool",target:"_blank",rel:"nofollow noopener noreferrer"},"Be Aware of ForkJoinPool#commonPool() ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"})))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{href:"https://dzone.com/articles/think-twice-using-java-8",target:"_blank",rel:"nofollow noopener noreferrer"},"Think Twice Before Using Java 8 Parallel Streams ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"})))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{href:"https://blog.jooq.org/2015/12/08/3-reasons-why-you-shouldnt-replace-your-for-loops-by-stream-foreach/",target:"_blank",rel:"nofollow noopener noreferrer"},"3 Reasons why You Shouldn\u2019t Replace Your for-loops by Stream.forEach() ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"}))))))}d.isMDXComponent=!0}}]);