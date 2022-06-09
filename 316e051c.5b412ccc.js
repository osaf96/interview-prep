(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{166:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(1),a=t(9),p=(t(0),t(231)),i={title:"Index types (TypeScript)",description:"Some examples of TypeScript index types and how to use them",last_modified:new Date("2020-11-21T18:14:37.196Z"),sidebar_label:"Index types"},o={id:"javascript/typescript/index-types",title:"Index types (TypeScript)",description:"Some examples of TypeScript index types and how to use them",source:"@site/docs\\javascript\\typescript\\index-types.md",permalink:"/interview-prep/javascript/typescript/index-types",sidebar_label:"Index types",sidebar:"docs",previous:{title:"Conditional types (TypeScript)",permalink:"/interview-prep/javascript/typescript/conditional-types"},next:{title:"Nullable types and optional parameters/properties (TypeScript)",permalink:"/interview-prep/javascript/typescript/nullable-types-optional-parameters-properties"}},c=[{value:"Index operators",id:"index-operators",children:[]},{value:"Index signatures",id:"index-signatures",children:[{value:"Use case: mapped types",id:"use-case-mapped-types",children:[]},{value:"Use case: dictionaries with enum or type union keys",id:"use-case-dictionaries-with-enum-or-type-union-keys",children:[]}]},{value:"Resources",id:"resources",children:[]}],s={rightToc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("p",null,"Some examples of TypeScript index types and how to use them"),Object(p.b)("h2",{id:"index-operators"},"Index operators"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Index type query operator:")," ",Object(p.b)("inlineCode",{parentName:"p"},"keyof")),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'interface Test {\n    propA: number;\n    propB: string;\n}\n\ntype TestKey = keyof Test; \n// type TestKey = "propA" | "propB"\n')),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"Indexed access operator:")," ",Object(p.b)("inlineCode",{parentName:"p"},"T[K]")),Object(p.b)("p",null,"Can be used in generic context to indicate property types"),Object(p.b)("p",null,"Example (adapted from ",Object(p.b)("a",{href:"https://www.typescriptlang.org/docs/handbook/advanced-types.html#index-types",target:"_blank",rel:"nofollow noopener noreferrer"},"Index types ",Object(p.b)("svg",{class:"embedded-fa-icon"},Object(p.b)("use",{href:"#external-link-alt"}))),"):"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'interface Test {\n    propA: number;\n    propB: string;\n}\n\nfunction getProperty<T, K extends keyof T>(o: T, propertyName: K): T[K] {\n    return o[propertyName]; // o[propertyName] is of type T[K]\n}\n\nconst test: Test = { propA: 1, propB: "b" };\n\ngetProperty(test, "propA"); // type number\ngetProperty(test, "propB"); // type string\n')),Object(p.b)("h2",{id:"index-signatures"},"Index signatures"),Object(p.b)("p",null,"Can be used to specify structure of object with arbitrary property names"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"interface IndexSignature {\n    [key: string]: boolean | number;\n    a: boolean;\n    b: number;\n}\n\nfunction test(input: IndexSignature) {\n    input.a // type boolean\n    input.b // type number\n    input.c // type boolean | number;\n}\n")),Object(p.b)("p",null,"Can also be used with generics:"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"interface GenericIndexSignature<T> {\n    [key: string]: T;\n}\n\nfunction test(input: GenericIndexSignature<number>) {\n    input.c // type number;\n    input.d // type number;\n}\n")),Object(p.b)("h3",{id:"use-case-mapped-types"},"Use case: mapped types"),Object(p.b)("p",null,"Mapped types = new types based on other types"),Object(p.b)("h4",{id:"readonly-and-partial"},Object(p.b)("inlineCode",{parentName:"h4"},"Readonly")," and ",Object(p.b)("inlineCode",{parentName:"h4"},"Partial")),Object(p.b)("p",null,"Implementations (already provided by TypeScript language):"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"type Readonly<T> = {\n  readonly [P in keyof T]: T[P];\n};\n\ntype Partial<T> = {\n  [P in keyof T]?: T[P];\n};\n")),Object(p.b)("p",null,"Example:"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"interface Person {\n    name: string;\n    age: number;\n}\n\ntype ReadonlyPerson = Readonly<Person>;\n// type ReadonlyPerson = { readonly name: string; readonly age: number; }\n\ntype PartialPerson = Partial<Person>;\n// type PartialPerson = { name?: string | undefined; age? : number | undefined; }\n")),Object(p.b)("h4",{id:"pick"},Object(p.b)("inlineCode",{parentName:"h4"},"Pick")),Object(p.b)("p",null,"Implementation (already provided by TypeScript language):"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"type Pick<T, K extends keyof T> = {\n  [P in K]: T[P];\n};\n")),Object(p.b)("p",null,"Example:"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'interface Test {\n    propA: string;\n    propB: number;\n    propC: boolean;\n}\n\ntype Picked = Pick<Test, "propA" | "propC">;\n// type Picked = { propA: string; propC: boolean; }\n')),Object(p.b)("h3",{id:"use-case-dictionaries-with-enum-or-type-union-keys"},"Use case: dictionaries with enum or type union keys"),Object(p.b)("p",null,"Example with enum keys:"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'enum TestEnum {\n  First = "First",\n  Second = "Second",\n  Third = "Third"\n}\n\ntype DictionaryWithAllKeys = { [key in TestEnum]: number; };\ntype DictionaryWithSomeKeys = { [key in TestEnum]?: number; };\n\n// error: property \'Third\' is missing\nconst testAllKeys: DictionaryWithAllKeys = {\n  First: 1,\n  Second: 2\n}\n\nconst testSomeKeys: DictionaryWithSomeKeys = {\n  First: 1,\n  Second: 2\n}\n')),Object(p.b)("p",null,"Example with type union keys:"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'type TestUnion = "First" | "Second" | "Third";\n\ntype DictionaryWithAllKeys = { [key in TestUnion]: number; };\ntype DictionaryWithSomeKeys = { [key in TestUnion]?: number; };\n\n// error: property \'Third\' is missing\nconst testAllKeys: DictionaryWithAllKeys = {\n  First: 1,\n  Second: 2\n}\n\nconst testSomeKeys: DictionaryWithSomeKeys = {\n  First: 1,\n  Second: 2\n}\n')),Object(p.b)("h2",{id:"resources"},"Resources"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{href:"https://www.typescriptlang.org/docs/handbook/advanced-types.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Advanced Types ",Object(p.b)("svg",{class:"embedded-fa-icon"},Object(p.b)("use",{href:"#external-link-alt"}))))))}l.isMDXComponent=!0},231:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},b=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(t),u=r,d=b["".concat(i,".").concat(u)]||b[u]||y[u]||p;return t?a.a.createElement(d,o({ref:n},s,{components:t})):a.a.createElement(d,o({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,i=new Array(p);i[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<p;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);