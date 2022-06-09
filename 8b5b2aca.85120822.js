(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{196:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return s}));var n=t(1),o=t(9),a=(t(0),t(231)),i={title:"Comparators",description:"This will cover the most of the topics that will be part of the Comparators.",last_modified:new Date("2022-06-08T15:36:32.363Z"),sidebar_label:"Comparators"},c={id:"preparation/comparators",title:"Comparators",description:"This will cover the most of the topics that will be part of the Comparators.",source:"@site/docs\\preparation\\comparators.md",permalink:"/interview-prep/preparation/comparators",sidebar_label:"Comparators",sidebar:"docs",previous:{title:"Common Problems",permalink:"/interview-prep/preparation/common-problems"},next:{title:"Graph",permalink:"/interview-prep/preparation/graph"}},l=[{value:"Comparator Class",id:"comparator-class",children:[{value:"One level of Comparisons",id:"one-level-of-comparisons",children:[]},{value:"Two levels of Comparisons.",id:"two-levels-of-comparisons",children:[]}]}],p={rightToc:l};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This will cover the most of the topics that will be part of the Comparators."),Object(a.b)("h2",{id:"comparator-class"},"Comparator Class"),Object(a.b)("h3",{id:"one-level-of-comparisons"},"One level of Comparisons"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"class Student {\n    int rollno;\n    String name, address;\n}\nclass SortByName implements Comparator<Student> {\n    // Sorting in ascending order of Name.\n    public int compare(Student a, Student b) {\n        return a.name.compareTo(b.name);\n    }\n}\nclass SortByRoll implements Comparator<Student> {\n    // Sorting in ascending order of Roll No.\n    public int compare(Student a, Student b){\n        return a.rollno - b.rollno;\n    }\n}\nclass Solution {\n    public static void main(String[] args) {\n                Collections.sort(studentsArray, new SortByRoll());\n        }\n}\n")),Object(a.b)("h3",{id:"two-levels-of-comparisons"},"Two levels of Comparisons."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"class Student {\n    String Name;\n    int Age;\n}\nclass CustomerSortingComparator implements Comparator<Student> {\n    @Override\n    public int compare(Student customer1, Student customer2) {\n    int NameCompare = customer1.Name.compareTo(customer2.Name);\n    int AgeCompare = customer1.Age.compareTo(customer2.Age);\n\n    // 2nd level comparison\n    return (NameCompare == 0) ? AgeCompare : NameCompare;\n    }\n}\nclass Solution {\n    Collections.sort(al,new CustomerSortingComparator());\n}\n")))}s.isMDXComponent=!0},231:function(e,r,t){"use strict";t.d(r,"a",(function(){return m})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c({},r,{},e)),t},m=function(e){var r=s(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=n,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return t?o.a.createElement(b,c({ref:r},p,{components:t})):o.a.createElement(b,c({ref:r},p))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);