(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{211:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(9),i=(r(0),r(231)),o={title:"Priority Queue",description:"This will cover the most of the topics that will be part of the priority queue.",last_modified:new Date("2022-06-08T15:36:32.363Z"),sidebar_label:"Priority Queue"},u={id:"preparation/priority-queue",title:"Priority Queue",description:"This will cover the most of the topics that will be part of the priority queue.",source:"@site/docs\\preparation\\priority-queue.md",permalink:"/interview-prep/preparation/priority-queue",sidebar_label:"Priority Queue",sidebar:"docs",previous:{title:"Math",permalink:"/interview-prep/preparation/math"},next:{title:"Search Algorithms",permalink:"/interview-prep/preparation/search-algorithms"}},c=[{value:"Creating a Min-Heap(Default) and Max-Heap.",id:"creating-a-min-heapdefault-and-max-heap",children:[{value:"Min Heap (Default)",id:"min-heap-default",children:[]},{value:"Max Heap",id:"max-heap",children:[]}]},{value:"Operations and Complexities",id:"operations-and-complexities",children:[{value:"Complexities",id:"complexities",children:[]},{value:"Operations",id:"operations",children:[]}]},{value:"Different Constructors of Priority Queue.",id:"different-constructors-of-priority-queue",children:[]},{value:"Priority Queue with Comparator.",id:"priority-queue-with-comparator",children:[{value:"Use of Comparator Class",id:"use-of-comparator-class",children:[]},{value:"Anonymous Comparator Class",id:"anonymous-comparator-class",children:[]}]},{value:"Resources",id:"resources",children:[]}],l={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This will cover the most of the topics that will be part of the priority queue."),Object(i.b)("h2",{id:"creating-a-min-heapdefault-and-max-heap"},"Creating a Min-Heap(Default) and Max-Heap."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Basically, every element in a page has a box drawn around it. "),Object(i.b)("li",{parentName:"ul"},"This box influences the space the element takes and how it interacts with other elements.")),Object(i.b)("h3",{id:"min-heap-default"},"Min Heap (Default)"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    PriorityQueue<Integer> queue = new PriorityQueue<>();\n}\n")),Object(i.b)("h3",{id:"max-heap"},"Max Heap"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    PriorityQueue<Integer> queue = new PriorityQueue<>(Collections.reverseOrder());\n}\n")),Object(i.b)("h2",{id:"operations-and-complexities"},"Operations and Complexities"),Object(i.b)("h3",{id:"complexities"},"Complexities"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Operations"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Complexity"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"offer, poll, remove, add"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(log n)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"peek"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"remove(Object)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(n)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"peek, element, size, isEmpty"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O(1)")))),Object(i.b)("h3",{id:"operations"},"Operations"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"PriorityQueue<Integer> pq = new PriorityQueue<Integer>();\n// Adding items to the pq using add()\npq.add(10);\n\n// Adding items to the pq using offer()\npq.offer(20);\n\n// Peek item at the top of the Queue using peek()\npq.peek();\n\n// Remove the top element from the Queue using poll()\npq.poll();\n\n//Retrieves and remove the head of the Queue\npq.remove()\n\npq.remove(20);\n// Removes a single instance of the specified element \n// from this queue, if it is present.\n// Return type is boolean.\n\npq.element();\n// Retrieves, but does not remove, the head of this queue.\n\npq.size();\n// Returns the number of elements in this collection.\n\npq.isEmpty();\n// Returns true if this collection contains no elements.\n")),Object(i.b)("h2",{id:"different-constructors-of-priority-queue"},"Different Constructors of Priority Queue."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"PriorityQueue<E> pq = new PriorityQueue<E>(); \n// Creates a PriorityQueue with the default initial capacity (11) \n// that orders its elements according to their natural ordering.\n\nPriorityQueue<E> pq = new PriorityQueue<E>(Collection<E> c); \n// Creates a PriorityQueue containing the elements \n// in the specified collection.\n\nPriorityQueue<E> pq = new PriorityQueue<E>(int initialCapacity); \n// Creates a PriorityQueue with the specified initial capacity \n// that orders its elements according to their natural ordering.\n\nPriorityQueue<E> pq = new PriorityQueue(int initialCapacity, Comparator<E> comparator);\n// Creates a PriorityQueue with the specified initial capacity that orders its elements \n// according to the specified comparator.\n\nPriorityQueue<E> pq = new PriorityQueue(PriorityQueue<E> c);\n// Creates a PriorityQueue containing the elements in the specified \n// priority queue.\n\nPriorityQueue<E> pq = new PriorityQueue<E>(SortedSet<E> c);\n// Creates a PriorityQueue containing the elements in the specified sorted set.\n")),Object(i.b)("h2",{id:"priority-queue-with-comparator"},"Priority Queue with Comparator."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"-1 : o1 < o2\n0 : o1 == o2\n+1 : o1 > o2\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If you always return the same value (o, 1, -1) for the comparator, regardless of it's inputs, then you're not using it correctly. You need to base the value returned on the values passed in. The idea is that the data structure (or sorter) calls the comparison function any time it needs to order two elements, to find out what order to put them in."),Object(i.b)("li",{parentName:"ul"},"Its worth noting that the positive/negative integer values (-1, +1) don't need to be 1, they can be any positive/negative numbers. It's just common practice to return -1/+1.")),Object(i.b)("h3",{id:"use-of-comparator-class"},"Use of Comparator Class"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    PriorityQueue<Student> pq = new PriorityQueue<Student>(5, new StudentComparator());\n    // Here 5 represents the initial capacity, one of many kind of different constructor for PQ.\n    // When you add elements into the pq, they will be sorted as per the CGPA DESC Order.\n}\nclass StudentComparator implements Comparator<Student>{\n    // Overriding compare() method of Comparator // for descending order of CGPA\n    public int compare(Student s1, Student s2) {\n        if (s1.cgpa < s2.cgpa) return 1;\n        else if (s1.cgpa > s2.cgpa) return -1;\n        else return 0;\n    }\n}\n")),Object(i.b)("h3",{id:"anonymous-comparator-class"},"Anonymous Comparator Class"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'class Solution {\n    PriorityQueue<Student> pq = new PriorityQueue<>(10, new Comparator<Student>() {\n        public int compare(Student n1, Student n2) {\n            //Method 1\n            // return Integer.compare(n1.getCGPA(), n2.getCGPA());\n            //Method 2\n            return new Integer(n1.cgpa).compareTo(new Integer(n2.cgpa)); \n            // You can make Integer object and then compare.\n            // For Strings you can directly use int com = "bsd".compareTo("asd");\n            // For other types, we can deduce in similar fashion.\n        }\n    });\n}\n')),Object(i.b)("h2",{id:"resources"},"Resources"))}p.isMDXComponent=!0},231:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u({},t,{},e)),r},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(r),b=n,m=s["".concat(o,".").concat(b)]||s[b]||d[b]||i;return r?a.a.createElement(m,u({ref:t},l,{components:r})):a.a.createElement(m,u({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);