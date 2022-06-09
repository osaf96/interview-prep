"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[3641],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(t),f=i,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||o;return t?r.createElement(d,a(a({ref:n},s),{},{components:t})):r.createElement(d,a({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4985:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],l={title:"Bit Manipulation",description:"This will cover the most of the topics that will be part of the Bit Manipulation.",last_modified:new Date("2022-06-08T15:36:32.363Z"),sidebar_label:"Bit Manipulation"},p=void 0,u={unversionedId:"preparation/bit-manipulation",id:"preparation/bit-manipulation",title:"Bit Manipulation",description:"This will cover the most of the topics that will be part of the Bit Manipulation.",source:"@site/docs/preparation/bit-manipulation.md",sourceDirName:"preparation",slug:"/preparation/bit-manipulation",permalink:"/interview-prep/about/preparation/bit-manipulation",draft:!1,tags:[],version:"current",frontMatter:{title:"Bit Manipulation",description:"This will cover the most of the topics that will be part of the Bit Manipulation.",last_modified:"2022-06-08T15:36:32.363Z",sidebar_label:"Bit Manipulation"},sidebar:"docs",previous:{title:"Algorithms",permalink:"/interview-prep/about/preparation/algorithms"},next:{title:"Common Problems",permalink:"/interview-prep/about/preparation/common-problems"}},s={},c=[{value:"\u2705 XOR Definition",id:"-xor-definition",level:2},{value:"\u2705 Power of Two",id:"-power-of-two",level:2},{value:"\u2705 Single Number",id:"-single-number",level:2}],m={toc:c};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This will cover the most of the topics that will be part of the Bit Manipulation."),(0,o.kt)("h2",{id:"-xor-definition"},"\u2705 XOR Definition"),(0,o.kt)("p",null,"A number XOR itself will become 0, any number XOR with 0 will stay unchanged."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int missingNumber(int[] nums) {\n            int res = nums.length;\n            for(int i=0; i<nums.length; i++){\n                res ^= i;\n                res ^= nums[i];\n            }\n            return res;\n    }\n}\n")),(0,o.kt)("h2",{id:"-power-of-two"},"\u2705 Power of Two"),(0,o.kt)("p",null,"Given an integer\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"n"),", return\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\xa0if it is a power of two. Otherwise, return\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"false"),".\nAn integer\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"n"),"\xa0is a power of two, if there exists an integer\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"x"),"\xa0such that\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"n == 2^x"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public boolean isPowerOfTwo(int n) {\n        return n>0 && (n&(n-1)) == 0;\n    }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public boolean isPowerOfTwo(int n) {\n        return n>0 && Integer.bitCount(n) == 1;\n    }\n}\n")),(0,o.kt)("h2",{id:"-single-number"},"\u2705 Single Number"),(0,o.kt)("p",null,"Given an integer array\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"nums"),"\xa0where\xa0every element appears\xa0",(0,o.kt)("strong",{parentName:"p"},"three times"),"\xa0except for one,\nwhich appears\xa0",(0,o.kt)("strong",{parentName:"p"},"exactly once"),".\xa0Find the single element and return it.\nYou must\xa0implement a solution with a linear runtime complexity and use\xa0only constant\xa0extra space."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int singleNumber(int[] arr) {\n        int ones = 0;\n        int twos = 0;\n        for (int value : arr) {\n            ones = (ones ^ value) & ~twos;\n            twos = (twos ^ value) & ~ones;\n        }\n        return ones;\n    }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// This problem can be translated to:\n//      For every bit position, we cancel any 3-time 1 and 3-time 0 to a 0\n//      Then we need to find equations that fits this: (assume we apply 3 1s)\n//               Zero 1      First 1     Second 1    Third 1\n// ones            0            1           0           0\n// twos            0            0           1           0\n")))}f.isMDXComponent=!0}}]);