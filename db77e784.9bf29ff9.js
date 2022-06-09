(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{220:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(9),i=(n(0),n(231)),o={title:"Conditional types (TypeScript)",description:"An explanation of TypeScript conditional types and an overview of some useful predefined ones",last_modified:new Date("2020-05-30T13:54:15.000Z"),sidebar_label:"Conditional types"},l={id:"javascript/typescript/conditional-types",title:"Conditional types (TypeScript)",description:"An explanation of TypeScript conditional types and an overview of some useful predefined ones",source:"@site/docs\\javascript\\typescript\\conditional-types.md",permalink:"/interview-prep/javascript/typescript/conditional-types",sidebar_label:"Conditional types",sidebar:"docs",previous:{title:"Compiler API (TypeScript)",permalink:"/interview-prep/javascript/typescript/compiler-api"},next:{title:"Index types (TypeScript)",permalink:"/interview-prep/javascript/typescript/index-types"}},p=[{value:"Basic idea",id:"basic-idea",children:[]},{value:"Predefined conditional types",id:"predefined-conditional-types",children:[]},{value:"Resources",id:"resources",children:[]}],c={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"An explanation of TypeScript conditional types and an overview of some useful predefined ones"),Object(i.b)("h2",{id:"basic-idea"},"Basic idea"),Object(i.b)("p",null,"Conditional type: selects one of two possible types based on a condition, where the condition is something that tests for the relationship between types"),Object(i.b)("p",null,"General structure: ",Object(i.b)("inlineCode",{parentName:"p"},"T extends U ? X : Y")),Object(i.b)("p",null,"Examples (adapted from ",Object(i.b)("a",{href:"https://www.typescriptlang.org/docs/handbook/advanced-types.html#conditional-types",target:"_blank",rel:"nofollow noopener noreferrer"},"Conditional Types ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"}))),"):"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"declare function f<T extends boolean>(x: T): T extends true ? string : number;\n\nlet test1 = f(Math.random() < 0.5); // type: string | number\nlet test2 = f(true); // type: string\nlet test3 = f(false); // type: number;\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'type TypeName<T> = T extends string\n  ? "string"\n  : T extends number\n  ? "number"\n  : T extends boolean\n  ? "boolean"\n  : T extends undefined\n  ? "undefined"\n  : T extends Function\n  ? "function"\n  : "object";\n\ntype T0 = TypeName<string>; // "string"\ntype T1 = TypeName<"a">; // "string"\ntype T2 = TypeName<true>; // "boolean"\ntype T3 = TypeName<() => void>; // "function"\ntype T4 = TypeName<string[]>; // "object"\n')),Object(i.b)("p",null,"The above were examples where the conditional type is ",Object(i.b)("em",{parentName:"p"},"resolved")," (the compiler can immediately decide what the resulting type is going to be)"),Object(i.b)("p",null,"Alternatively, the type can be ",Object(i.b)("em",{parentName:"p"},"deferred"),", meaning the compiler will decide when it has more info"),Object(i.b)("p",null,"Example (adapted from ",Object(i.b)("a",{href:"https://www.typescriptlang.org/docs/handbook/advanced-types.html#conditional-types",target:"_blank",rel:"nofollow noopener noreferrer"},"Conditional Types ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"}))),"):"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'interface Test {\n  propA: boolean;\n  propB: boolean;\n}\n\ndeclare function f<T>(x: T): T extends Test ? string : number;\n\n// return type: T extends Test ? string : number\nfunction test<U>(x: U) {\n  return f(x); // type\n}\n\nconst result1 = test("a") // type: number\nconst result2 = test({ propA: true, propB: false }) // type: string\n')),Object(i.b)("h2",{id:"predefined-conditional-types"},"Predefined conditional types"),Object(i.b)("p",null,"Some conditional types already defined by the TypeScript language (see ",Object(i.b)("a",{href:"https://www.typescriptlang.org/docs/handbook/advanced-types.html#predefined-conditional-types",target:"_blank",rel:"nofollow noopener noreferrer"},"Predefined conditional types ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"}))),"):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Exclude")," \u2014 Exclude from ",Object(i.b)("inlineCode",{parentName:"li"},"T")," those types that are assignable to ",Object(i.b)("inlineCode",{parentName:"li"},"U")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Extract")," \u2014 Extract from ",Object(i.b)("inlineCode",{parentName:"li"},"T")," those types that are assignable to ",Object(i.b)("inlineCode",{parentName:"li"},"U")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"NonNullable")," \u2014 Exclude ",Object(i.b)("inlineCode",{parentName:"li"},"null")," and ",Object(i.b)("inlineCode",{parentName:"li"},"undefined")," from ",Object(i.b)("inlineCode",{parentName:"li"},"T")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ReturnType")," \u2014 Obtain the return type of a function type"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"InstanceType")," \u2014 Obtain the instance type of a constructor function type")),Object(i.b)("p",null,"Examples (adapted from ",Object(i.b)("a",{href:"https://www.typescriptlang.org/docs/handbook/advanced-types.html#predefined-conditional-types",target:"_blank",rel:"nofollow noopener noreferrer"},"Predefined conditional types ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"}))),"):"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'type Test1 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">; // "b" | "d"\ntype Test2 = Extract<"a" | "b" | "c" | "d", "a" | "c" | "f">; // "a" | "c"\n\ntype Test3 = Exclude<string | number | (() => void), Function>; // string | number\ntype Test4 = Extract<string | number | (() => void), Function>; // () => void\n\ntype Test5 = NonNullable<string | number | undefined>; // string | number\ntype Test6 = NonNullable<(string[] | null | undefined>; // string[]\n\ntype Test7 = ReturnType<() => boolean> // boolean\n')),Object(i.b)("h2",{id:"resources"},"Resources"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://www.typescriptlang.org/docs/handbook/advanced-types.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Advanced Types ",Object(i.b)("svg",{class:"embedded-fa-icon"},Object(i.b)("use",{href:"#external-link-alt"}))))))}s.isMDXComponent=!0},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(n),u=r,y=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return n?a.a.createElement(y,l({ref:t},c,{components:n})):a.a.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);