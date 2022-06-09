(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{211:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),i=(n(0),n(231)),p={title:"Map",description:"This will cover the most of the topics that will be part of the Map.",last_modified:new Date("2022-06-08T15:36:32.363Z"),sidebar_label:"Map"},o={id:"preparation/map",title:"Map",description:"This will cover the most of the topics that will be part of the Map.",source:"@site/docs\\preparation\\map.md",permalink:"/preparation/map",sidebar_label:"Map",sidebar:"docs",previous:{title:"Linked List",permalink:"/preparation/linked-list"},next:{title:"Math",permalink:"/preparation/math"}},l=[{value:"Types of Map and Complexities",id:"types-of-map-and-complexities",children:[{value:"Complexities",id:"complexities",children:[]}]},{value:"Operations on Maps",id:"operations-on-maps",children:[{value:"Insertion Updation",id:"insertion-updation",children:[]},{value:"Get Remove",id:"get-remove",children:[]},{value:"Iteration",id:"iteration",children:[]},{value:"containsKey / containsValue",id:"containskey--containsvalue",children:[]},{value:"values / keySet",id:"values--keyset",children:[]},{value:"Empty Check / Size",id:"empty-check--size",children:[]}]},{value:"Creating a Frequency Hashmap.",id:"creating-a-frequency-hashmap",children:[]},{value:"Sorted Map.",id:"sorted-map",children:[]}],c={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This will cover the most of the topics that will be part of the Map."),Object(i.b)("h2",{id:"types-of-map-and-complexities"},"Types of Map and Complexities"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// Normal Key-Value mapping.\nMap<String, Integer> map = new HashMap<String, Integer>();\n\n// Maintaining an order of elements inserted into it.\nMap<String, Integer> map = new LinkedHashMap<>();\n\n// The map is sorted according to the natural ordering of its keys,\n// or by a Comparator provided at map creation time, depending on which\n// constructor is used.\nMap<String, Integer> map = new TreeMap<>();\n")),Object(i.b)("h3",{id:"complexities"},"Complexities"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Map Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Insertion Complexity"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Lookup Complexity"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Insertion Order"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"HashMap"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"O(1)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"O(1)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Any Order")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"LinkedHashMap"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"O(1)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"O(1)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Insertion Order")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TreeMap"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"O(logN)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"O(logN)"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sorted ASC")))),Object(i.b)("h2",{id:"operations-on-maps"},"Operations on Maps"),Object(i.b)("h3",{id:"insertion-updation"},"Insertion Updation"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'Map<String, Integer> map = new HashMap<String, Integer>();\nmap.put("Student 1", 101);\nmap.put("Student 1", 202);\n\nMap<String, String> map = new HashMap<String, String>(){{\n    put("a", "apple"); put("b", "bear"); put("c", "cat");\n}};\n\n// Time Complexity : O(1)\n')),Object(i.b)("h3",{id:"get-remove"},"Get Remove"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'Map<String, Integer> map = new HashMap<String, Integer>();\nmap.get("Student 1"); // Returns 202 and NULL if not present.\n\nmap.remove(new String("Student 1"));\n// Return the mapped value if key is present else NULL\n\n// Time Complexity : O(1)\n')),Object(i.b)("h3",{id:"iteration"},"Iteration"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'\nfor(Entry<String, Integer> entry: map.entrySet()) {\n    System.out.print(entry.getKey() + " >> " + entry.getValue());\n}\n\n// Time Complexity : O(n)\n')),Object(i.b)("h3",{id:"containskey--containsvalue"},"containsKey / containsValue"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'\nMap<String, Integer> map = new HashMap<String, Integer>();\nmap.containsKey("Student 1");\n\nmap.containsValue(202);\n\n// Time Complexity : O(n)\n')),Object(i.b)("h3",{id:"values--keyset"},"values / keySet"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"\nMap<String, Integer> map = new HashMap<String, Integer>();\nCollection<Integer> values= map.values();\nArrayList<Integer> listValues = new ArrayList<>(values);\n\nList ListofKeys = new ArrayList(map.keySet());\n")),Object(i.b)("h3",{id:"empty-check--size"},"Empty Check / Size"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"\nmap.isEmpty() // Return boolean true if present else false.\nmap.size() // Returns the number of elements(key-value) pairs.\n\n// Time Complexity : O(1)\n")),Object(i.b)("h2",{id:"creating-a-frequency-hashmap"},"Creating a Frequency Hashmap."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"List<T> list = new ArrayList<>(); // Initial Data.\nHashMap<T,Integer> freq = new HashMap<>();\nfor(T each: list){\n    freq.put(c,freq.getOrDefault(each,0)+1);\n}\n// The above snippet is generic, you can replace T with any\n// valid datatype.\n")),Object(i.b)("h2",{id:"sorted-map"},"Sorted Map."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// Comparator is supported only for the TreeMap Constructor.\nMap<Integer, String> treeMap = new TreeMap<Integer, String>(\n    new Comparator<Integer>() {\n        @Override\n        public int compare(Integer o1, Integer o2) {\n            return o2.compareTo(o1);  // Order - DESC // Replace o2 with o1 for ASC.\n        }\n});\ntreeMap.putAll(map);\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Complexity for the TreeMap insertion is ",Object(i.b)("inlineCode",{parentName:"li"},"O(log N)"),"."),Object(i.b)("li",{parentName:"ul"},"Using a TreeMap with Comparator is still of the same complexity."),Object(i.b)("li",{parentName:"ul"},"Comparator can be applied only on the TreeMap."),Object(i.b)("li",{parentName:"ul"},"For sorting mechanism to be used on other types of the Maps, we have extract the list of either the keys or the values for the same.")))}b.isMDXComponent=!0},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},s=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,d=s["".concat(p,".").concat(u)]||s[u]||m[u]||i;return n?r.a.createElement(d,o({ref:t},c,{components:n})):r.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var c=2;c<i;c++)p[c]=n[c];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);