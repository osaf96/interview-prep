(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{180:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(1),i=t(9),a=(t(0),t(232)),o={title:"Bit Manipulation",description:"This will cover the most of the topics that will be part of the Bit Manipulation.",last_modified:new Date("2022-06-08T15:36:32.363Z"),sidebar_label:"Bit Manipulation"},l={id:"preparation/bit-manipulation",title:"Bit Manipulation",description:"This will cover the most of the topics that will be part of the Bit Manipulation.",source:"@site/docs\\preparation\\bit-manipulation.md",permalink:"/interview-prep/preparation/bit-manipulation",sidebar_label:"Bit Manipulation",sidebar:"docs",previous:{title:"Algorithms",permalink:"/interview-prep/preparation/algorithms"},next:{title:"Common Problems",permalink:"/interview-prep/preparation/common-problems"}},c=[{value:"\u2705 XOR Definition",id:"-xor-definition",children:[]},{value:"\u2705 Power of Two",id:"-power-of-two",children:[]},{value:"\u2705 Single Number",id:"-single-number",children:[]}],p={rightToc:c};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This will cover the most of the topics that will be part of the Bit Manipulation."),Object(a.b)("h2",{id:"-xor-definition"},"\u2705 XOR Definition"),Object(a.b)("p",null,"A number XOR itself will become 0, any number XOR with 0 will stay unchanged."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    public int missingNumber(int[] nums) {\n            int res = nums.length;\n            for(int i=0; i<nums.length; i++){\n                res ^= i;\n                res ^= nums[i];\n            }\n            return res;\n    }\n}\n")),Object(a.b)("h2",{id:"-power-of-two"},"\u2705 Power of Two"),Object(a.b)("p",null,"Given an integer\xa0",Object(a.b)("inlineCode",{parentName:"p"},"n"),", return\xa0",Object(a.b)("inlineCode",{parentName:"p"},"true"),"\xa0if it is a power of two. Otherwise, return\xa0",Object(a.b)("inlineCode",{parentName:"p"},"false"),".\nAn integer\xa0",Object(a.b)("inlineCode",{parentName:"p"},"n"),"\xa0is a power of two, if there exists an integer\xa0",Object(a.b)("inlineCode",{parentName:"p"},"x"),"\xa0such that\xa0",Object(a.b)("inlineCode",{parentName:"p"},"n == 2^x"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    public boolean isPowerOfTwo(int n) {\n        return n>0 && (n&(n-1)) == 0;\n    }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    public boolean isPowerOfTwo(int n) {\n        return n>0 && Integer.bitCount(n) == 1;\n    }\n}\n")),Object(a.b)("h2",{id:"-single-number"},"\u2705 Single Number"),Object(a.b)("p",null,"Given an integer array\xa0",Object(a.b)("inlineCode",{parentName:"p"},"nums"),"\xa0where\xa0every element appears\xa0",Object(a.b)("strong",{parentName:"p"},"three times"),"\xa0except for one,\nwhich appears\xa0",Object(a.b)("strong",{parentName:"p"},"exactly once"),".\xa0Find the single element and return it.\nYou must\xa0implement a solution with a linear runtime complexity and use\xa0only constant\xa0extra space."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    public int singleNumber(int[] arr) {\n        int ones = 0;\n        int twos = 0;\n        for (int value : arr) {\n            ones = (ones ^ value) & ~twos;\n            twos = (twos ^ value) & ~ones;\n        }\n        return ones;\n    }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"// This problem can be translated to:\n//      For every bit position, we cancel any 3-time 1 and 3-time 0 to a 0\n//      Then we need to find equations that fits this: (assume we apply 3 1s)\n//               Zero 1      First 1     Second 1    Third 1\n// ones            0            1           0           0\n// twos            0            0           1           0\n")))}s.isMDXComponent=!0},232:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),s=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},u=function(e){var n=s(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,f=u["".concat(o,".").concat(m)]||u[m]||b[m]||a;return t?i.a.createElement(f,l({ref:n},p,{components:t})):i.a.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);