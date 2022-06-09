(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{228:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return c}));var r=n(1),a=n(9),i=(n(0),n(231)),l={title:"Nullable types and optional parameters/properties (TypeScript)",description:"An overview of how TypeScript deals with null, undefined and optional parameters/properties",last_modified:new Date("2022-01-31T10:44:35.294Z"),sidebar_label:"Nullable types and optional parameters/properties"},o={id:"javascript/typescript/nullable-types-optional-parameters-properties",title:"Nullable types and optional parameters/properties (TypeScript)",description:"An overview of how TypeScript deals with null, undefined and optional parameters/properties",source:"@site/docs\\javascript\\typescript\\nullable-types-optional-parameters-properties.md",permalink:"/javascript/typescript/nullable-types-optional-parameters-properties",sidebar_label:"Nullable types and optional parameters/properties",sidebar:"docs",previous:{title:"Index types (TypeScript)",permalink:"/javascript/typescript/index-types"},next:{title:"Runtime type checking in TypeScript",permalink:"/javascript/typescript/runtime-type-checking"}},p=[{value:"Nullable types",id:"nullable-types",children:[]},{value:"Optional chaining",id:"optional-chaining",children:[]},{value:"Non-null assertion operator",id:"non-null-assertion-operator",children:[]},{value:"Optional parameters",id:"optional-parameters",children:[]},{value:"Optional properties",id:"optional-properties",children:[]},{value:"Resources",id:"resources",children:[]}],s={rightToc:p};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"An overview of how TypeScript deals with null, undefined and optional parameters/properties"),Object(i.b)("h2",{id:"nullable-types"},"Nullable types"),Object(i.b)("p",null,"Two special types: ",Object(i.b)("inlineCode",{parentName:"p"},"null")," and ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Treated as different from each other, because that's what JavaScript does as well"),Object(i.b)("li",{parentName:"ul"},"By default, assignable to anything, but this can be changed by enabling the ",Object(i.b)("inlineCode",{parentName:"li"},"--strictNullChecks")," flag",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Recommended to enable this, allow type checking to prevent a lot of potential runtime errors")))),Object(i.b)("p",null,"Example without ",Object(i.b)("inlineCode",{parentName:"p"},"--strictNullChecks"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// everything ok according to compiler\nconst test1: string = undefined;\nconst test2: string = null;\nconst test3: string | undefined = undefined;\nconst test4: string | undefined = null;\nconst test5: string | null = undefined;\nconst test6: string | null = null;\nconst test7: string | null | undefined = undefined;\nconst test8: string | null | undefined = null;\n")),Object(i.b)("p",null,"Example with ",Object(i.b)("inlineCode",{parentName:"p"},"--strictNullChecks"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const test1: string = undefined; // error\nconst test2: string = null; // error\nconst test3: string | undefined = undefined;\nconst test4: string | undefined = null; // error\nconst test5: string | null = undefined; // error\nconst test6: string | null = null;\nconst test7: string | null | undefined = undefined;\nconst test8: string | null | undefined = null;\n")),Object(i.b)("h2",{id:"optional-chaining"},"Optional chaining"),Object(i.b)("p",null,"(introduced in TypeScript 3.7)"),Object(i.b)("p",null,"Operator ",Object(i.b)("inlineCode",{parentName:"p"},"?")," that allows to stop evaluation when something is ",Object(i.b)("inlineCode",{parentName:"p"},"null")," or ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")),Object(i.b)("p",null,"Motivation: accessing ",Object(i.b)("inlineCode",{parentName:"p"},"instance.prop.otherProp.nextProp")," where at each level the property may be ",Object(i.b)("inlineCode",{parentName:"p"},"null")," or ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")," (leading to runtime errors if we fail to check for it)"),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"let x = instance.prop?.otherProp;\n// is equivalent to\nlet x = instance.prop === null || instance.prop === undefined ? undefined : instance.prop.otherProp;\n")),Object(i.b)("p",null,"Note that, if evaluation stops because something is ",Object(i.b)("inlineCode",{parentName:"p"},"null"),", the result is still ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")),Object(i.b)("h2",{id:"non-null-assertion-operator"},"Non-null assertion operator"),Object(i.b)("p",null,"Operator ",Object(i.b)("inlineCode",{parentName:"p"},"!")," that allows to let TypeScript know you are sure that a certain value is not ",Object(i.b)("inlineCode",{parentName:"p"},"null")," or ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")," (useful in situations where the code is too complex for TypeScript to figure this out by itself)"),Object(i.b)("p",null,"Example (with ",Object(i.b)("inlineCode",{parentName:"p"},"--strictNullChecks"),"):"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'function test(str: string | null | undefined) {\n    const ensureStringDefined = function () {\n        if (str === null || str === undefined) {\n            str = "test";\n        }\n    }\n\n    ensureStringDefined();\n    console.log(str.toUpperCase()); // error\n    console.log(str!.toUpperCase()); // ok\n}\n')),Object(i.b)("h2",{id:"optional-parameters"},"Optional parameters"),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"--strictNullChecks")," is enabled, making a parameter optional automatically adds ",Object(i.b)("inlineCode",{parentName:"p"}," | undefined")," to its type"),Object(i.b)("p",null,"Example without ",Object(i.b)("inlineCode",{parentName:"p"},"--strictNullChecks"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'function test(a: string, b?: string) {\n    return a;\n}\n\n// everything ok according to compiler\ntest("a");\ntest("a", undefined);\ntest("a", null);\n')),Object(i.b)("p",null,"Example with ",Object(i.b)("inlineCode",{parentName:"p"},"--strictNullChecks"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'function test(a: string, b?: string) {\n    return a;\n}\n\ntest("a");\ntest("a", undefined);\ntest("a", null); // error\n')),Object(i.b)("p",null,"Note: an optional parameter is not completely the same as a parameter that needs to be provided but can be undefined!"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'function test2(a: string, b: string | undefined) {\n    return a;\n}\n\ntest2("b"); // error because of missing argument, even without --strictNullChecks\ntest2("b", undefined); // ok\n')),Object(i.b)("p",null,"You can use this to force the code using your function to be very explicit about passing in ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")),Object(i.b)("h2",{id:"optional-properties"},"Optional properties"),Object(i.b)("p",null,"Example without ",Object(i.b)("inlineCode",{parentName:"p"},"--strictNullChecks"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"class Test {\n  a: number = 1;\n  b?: number;\n}\n\n// everything ok according to compiler\nlet test = new Test();\ntest.a = 12;\ntest.a = undefined;\ntest.a = null;\ntest.b = 12;\ntest.b = undefined;\ntest.b = null;\n")),Object(i.b)("p",null,"Example with ",Object(i.b)("inlineCode",{parentName:"p"},"--strictNullChecks"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"class Test {\n  a: number = 1;\n  b?: number;\n}\n\nlet test = new Test();\ntest.a = 12;\ntest.a = undefined; // error\ntest.a = null; // error\ntest.b = 12;\ntest.b = undefined; \ntest.b = null; // error\n")),Object(i.b)("h2",{id:"resources"},"Resources"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://www.typescriptlang.org/docs/handbook/advanced-types.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Advanced Types ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"}))))))}c.isMDXComponent=!0},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),c=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u=function(e){var t=c(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(m,o({ref:t},s,{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);