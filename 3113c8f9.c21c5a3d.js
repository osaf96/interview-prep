(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{165:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(1),i=r(9),a=(r(0),r(231)),o={title:"Graph",description:"This will cover the most of the topics that will be part of the Graph.",last_modified:new Date("2022-06-08T15:36:32.363Z"),sidebar_label:"Graph"},c={id:"preparation/graph",title:"Graph",description:"This will cover the most of the topics that will be part of the Graph.",source:"@site/docs\\preparation\\graph.md",permalink:"/preparation/graph",sidebar_label:"Graph",sidebar:"docs",previous:{title:"Comparators",permalink:"/preparation/comparators"},next:{title:"Linked List",permalink:"/preparation/linked-list"}},l=[{value:"Detect Cycle in a Directed Graph.",id:"detect-cycle-in-a-directed-graph",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This will cover the most of the topics that will be part of the Graph."),Object(a.b)("h2",{id:"detect-cycle-in-a-directed-graph"},"Detect Cycle in a Directed Graph."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    boolean isCyclicUtil(int i, boolean[] visited, boolean[] recursionStack) {\n            // Mark the current node as visited and\n            // part of recursion stack\n            if (recursionStack[i]) return true;\n            if (visited[i]) return false;\n        \n            visited[i] = true;\n            recursionStack[i] = true;\n        \n            List<Integer> children = adj.get(i);\n            for (Integer c : children){\n                    if (isCyclicUtil(c, visited, recursionStack)){\n                        return true;\n                }\n            recursionStack[i] = false;\n            return false;\n        }\n        boolean isCyclic() {\n            // Mark all the vertices as not visited and\n            // not part of recursion stack\n            boolean[] visited = new boolean[V];\n            boolean[] recursionStack= new boolean[V];\n        \n            // Call the recursive helper function to\n            // detect cycle in different DFS trees\n            for (int i = 0; i < V; i++) if (\n                isCyclicUtil(i, visited, recursionStack)\n            ) return true;\n        \n            return false;\n        }\n}\n")))}s.isMDXComponent=!0},231:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,b=u["".concat(o,".").concat(d)]||u[d]||f[d]||a;return r?i.a.createElement(b,c({ref:t},p,{components:r})):i.a.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);