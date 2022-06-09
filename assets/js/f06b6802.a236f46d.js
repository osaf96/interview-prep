"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[847],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(i,".").concat(h)]||d[h]||u[h]||s;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<s;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5955:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(7462),o=n(3366),s=(n(7294),n(3905)),r=["components"],l={title:"Object prototypes and classes (JavaScript)",description:"JavaScript objects, the prototype chain, classes, encapsulation, etc.",last_modified:new Date("2022-01-31T10:44:35.283Z"),sidebar_label:"Object prototypes and classes"},i=void 0,c={unversionedId:"javascript/object-prototypes-classes",id:"javascript/object-prototypes-classes",title:"Object prototypes and classes (JavaScript)",description:"JavaScript objects, the prototype chain, classes, encapsulation, etc.",source:"@site/docs/javascript/object-prototypes-classes.md",sourceDirName:"javascript",slug:"/javascript/object-prototypes-classes",permalink:"/interview-prep/about/javascript/object-prototypes-classes",draft:!1,tags:[],version:"current",frontMatter:{title:"Object prototypes and classes (JavaScript)",description:"JavaScript objects, the prototype chain, classes, encapsulation, etc.",last_modified:"2022-01-31T10:44:35.283Z",sidebar_label:"Object prototypes and classes"},sidebar:"docs",previous:{title:"Event loop",permalink:"/interview-prep/about/javascript/event-loop"},next:{title:"Scope and closures",permalink:"/interview-prep/about/javascript/scope-closures"}},p={},u=[{value:"JavaScript objects",id:"javascript-objects",level:2},{value:"Built-in objects",id:"built-in-objects",level:3},{value:"The prototype chain",id:"the-prototype-chain",level:2},{value:"Property shadowing",id:"property-shadowing",level:3},{value:"Prototype pollution",id:"prototype-pollution",level:3},{value:"Functions and <code>.prototype</code>",id:"functions-and-prototype",level:2},{value:"Prototypical inheritance and object-oriented design",id:"prototypical-inheritance-and-object-oriented-design",level:2},{value:"Object-oriented design vs. delegation-oriented design",id:"object-oriented-design-vs-delegation-oriented-design",level:2},{value:"Classes",id:"classes",level:2},{value:"Instance-level fields",id:"instance-level-fields",level:3},{value:"Static (class-level) fields",id:"static-class-level-fields",level:3},{value:"Simulating static class fields",id:"simulating-static-class-fields",level:4},{value:"Encapsulation",id:"encapsulation",level:2},{value:"Encapsulation using private fields and methods",id:"encapsulation-using-private-fields-and-methods",level:3},{value:"Encapsulation without using private fields and methods",id:"encapsulation-without-using-private-fields-and-methods",level:3},{value:"Resources",id:"resources",level:2}],d={toc:u};function h(e){var t=e.components,l=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"JavaScript objects, the prototype chain, classes, encapsulation, etc."),(0,s.kt)("h2",{id:"javascript-objects"},"JavaScript objects"),(0,s.kt)("p",null,'Misconception: "everything is an object in JavaScript"'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"There ",(0,s.kt)("em",{parentName:"li"},"simple primitives")," (",(0,s.kt)("inlineCode",{parentName:"li"},"string"),",  ",(0,s.kt)("inlineCode",{parentName:"li"},"number"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"boolean"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"null"),", and ",(0,s.kt)("inlineCode",{parentName:"li"},"undefined"),") which are not objects"),(0,s.kt)("li",{parentName:"ul"},"However, everything else is indeed an object: simple objects, arrays, functions, ...")),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'console.log(typeof "test"); // string\nconsole.log(typeof 1); // number\nconsole.log(typeof true); // boolean\nconsole.log(typeof null); // object (although null is really its own primitive type)\nconsole.log(typeof undefined); // undefined\nconsole.log(typeof {}); // object\nconsole.log(typeof []); // object\nconsole.log(typeof new Date()); // object\nconsole.log(typeof /aaa/g); // object\n\n// "trick" to show an object\'s type in more detailed fashion\nconsole.log(Object.prototype.toString.apply({})); // [object Object]\nconsole.log(Object.prototype.toString.apply([])); // [object Array]\nconsole.log(Object.prototype.toString.apply(new Date())); // [object Date]\nconsole.log(Object.prototype.toString.apply(/aaa/g)); // [object RegExp]\n')),(0,s.kt)("h3",{id:"built-in-objects"},"Built-in objects"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"String"),",  ",(0,s.kt)("inlineCode",{parentName:"li"},"Number"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"Boolean"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"Object"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"Function"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"Array"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"Date"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"RegExp"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"Error")),(0,s.kt)("li",{parentName:"ul"},"Look like actual types, even classes"),(0,s.kt)("li",{parentName:"ul"},"In reality, they are actually just built-in functions")),(0,s.kt)("p",null,"Example with ",(0,s.kt)("inlineCode",{parentName:"p"},"String")," (note how it behaves differently when it's called as constructor):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const test = "test";\nconsole.log(typeof test); // string\nconsole.log(test instanceof String); // false\n\nconst test2 = String("test");\nconsole.log(typeof test2); // string\nconsole.log(test2 instanceof String); // false\n\n// not preferred, doesn\'t create normal string values\nconst test3 = new String("test");\nconsole.log(typeof test3); // object\nconsole.log(test3 instanceof String); // true\n')),(0,s.kt)("p",null,"Although it is preferred to represent strings as normal ",(0,s.kt)("inlineCode",{parentName:"p"},"string")," values, all of the interesting methods are defined on ",(0,s.kt)("inlineCode",{parentName:"p"},"String"),". JavaScript solves this by coercing to ",(0,s.kt)("inlineCode",{parentName:"p"},"String")," as needed."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'console.log("test".indexOf("s")); // 2\n')),(0,s.kt)("p",null,"When not called as constructor, ",(0,s.kt)("inlineCode",{parentName:"p"},"String")," (and also ",(0,s.kt)("inlineCode",{parentName:"p"},"Number")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Boolean"),") is useful for performing type conversions:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const test = String(3);\nconsole.log(test); // 3\nconsole.log(typeof test); // string\n\nconst test2 = Number("4");\nconsole.log(test2); // 4\nconsole.log(typeof test2); // number\n\nconst test3 = Boolean("something");\nconsole.log(test3); // true\nconsole.log(typeof test3); // boolean\n')),(0,s.kt)("h2",{id:"the-prototype-chain"},"The prototype chain"),(0,s.kt)("p",null,"Every JavaScript object has an internal ",(0,s.kt)("inlineCode",{parentName:"p"},"[[Prototype]]")," property that is a reference to another object. If we try to get a property from an object that is not present on the object itself, JavaScript follows the ",(0,s.kt)("inlineCode",{parentName:"p"},"[[Prototype]]")," link of the object. If it's not found on that object, it follows that object's ",(0,s.kt)("inlineCode",{parentName:"p"},"[[Prototype]]")," link, until the end of the chain is reached. The chain formed by the ",(0,s.kt)("inlineCode",{parentName:"p"},"[[Prototype]]")," links is called the ",(0,s.kt)("em",{parentName:"p"},"prototype chain"),"."),(0,s.kt)("p",null,"The prototype chain typically ends at the built-in ",(0,s.kt)("inlineCode",{parentName:"p"},"Object.prototype")),(0,s.kt)("p",null,"Note: in a lot of JavaScript engines, objects have a ",(0,s.kt)("inlineCode",{parentName:"p"},"__proto__")," property that exposes the object's internal ",(0,s.kt)("inlineCode",{parentName:"p"},"[[Prototype]]")," property, but its use is deprecated. It's better to use ",(0,s.kt)("inlineCode",{parentName:"p"},"Object.getPrototypeOf")," instead."),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const objectA = {\n    a: "testA"\n};\n\n// create objectB with [[Prototype]] pointing to objectA\nconst objectB = Object.create(objectA);\nconsole.log(Object.getPrototypeOf(objectB) === objectA); // true\nconsole.log(Object.getPrototypeOf(objectA) === Object.prototype); // true\n\n// a not found on objectB -> follow prototype chain to objectA\nconsole.log(objectB.a); // testA\n//toString not found on objectB -> follow prototype chain to Object.prototype\nconsole.log(objectB.toString()); // [object Object]\n')),(0,s.kt)("p",null,"In the above example, we can say that ",(0,s.kt)("inlineCode",{parentName:"p"},"objectB")," prototypically inherits from ",(0,s.kt)("inlineCode",{parentName:"p"},"objectA")),(0,s.kt)("p",null,"Note: an object can only prototypically inherit from a single other object. There is no multiple inheritance here."),(0,s.kt)("h3",{id:"property-shadowing"},"Property shadowing"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Shadowing")," occurs when a property on an object hides a property with the same name deeper down the prototype chain. This can often be a source of confusion. Therefore, it's recommended to avoid creating properties with a name that already exists somewhere in the chain."),(0,s.kt)("p",null,"It's easy to accidentally shadow a property! Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const objectA = {\n    counter: 1\n};\n\nconst objectB = Object.create(objectA);\n\nconsole.log(objectA.counter); // 1\nconsole.log(objectB.counter); // 1\n\nconsole.log(objectA.hasOwnProperty("counter")); // true\nconsole.log(objectB.hasOwnProperty("counter")); // false\n\nobjectB.counter++; // implicit shadowing!\n\nconsole.log(objectA.counter); // 1\nconsole.log(objectB.counter); // 2\nconsole.log(objectB.hasOwnProperty("counter")); // true\n')),(0,s.kt)("p",null,"Here, the line ",(0,s.kt)("inlineCode",{parentName:"p"},"objectB.counter++")," is equivalent to ",(0,s.kt)("inlineCode",{parentName:"p"},"objectB.counter = objectB.counter + 1"),", which:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Looks for a property ",(0,s.kt)("inlineCode",{parentName:"li"},"counter")," on the prototype chain and finds it on ",(0,s.kt)("inlineCode",{parentName:"li"},"objectA")),(0,s.kt)("li",{parentName:"ul"},"Gets the value of that property"),(0,s.kt)("li",{parentName:"ul"},"Creates a new property ",(0,s.kt)("inlineCode",{parentName:"li"},"counter")," on ",(0,s.kt)("inlineCode",{parentName:"li"},"objectB"))),(0,s.kt)("p",null,"From that point on, ",(0,s.kt)("inlineCode",{parentName:"p"},"objectB")," has its own ",(0,s.kt)("inlineCode",{parentName:"p"},"counter")," property shadowing the ",(0,s.kt)("inlineCode",{parentName:"p"},"counter")," property on ",(0,s.kt)("inlineCode",{parentName:"p"},"objectA"),"."),(0,s.kt)("p",null,"Shadowing is not only an issue with simple properties but also with methods (which are just properties with a function as value). Therefore, it is recommended to avoid creating different methods with the same name in a prototype chain."),(0,s.kt)("p",null,"Property shadowing can also be caused by unexpected input from the outside and it can hide methods that are defined on the ",(0,s.kt)("inlineCode",{parentName:"p"},"Object")," prototype itself. Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const userInput = JSON.parse(`{ "hasOwnProperty": 1 }`);\n\n// TypeError: userInput.hasOwnProperty is not a function\nconsole.log(userInput.hasOwnProperty("propA")); \n\n// explicitly call the function defined on Object.prototype\nconsole.log(Object.prototype.hasOwnProperty.call(userInput, "propA")); // false\n')),(0,s.kt)("p",null,"You can mitigate the risk that this happens by checking user input and rejecting input that contains unexpected properties. It also helps to avoid calling methods provided through ",(0,s.kt)("inlineCode",{parentName:"p"},"Object.prototype")," on the object itself (first approach in the above code) but instead explicitly use the function from ",(0,s.kt)("inlineCode",{parentName:"p"},"Object.prototype")," (second approach in the code). There is actually a rule in ESLint (",(0,s.kt)("a",{href:"https://eslint.org/docs/rules/no-prototype-builtins",target:"_blank",rel:"nofollow noopener noreferrer"},"no-prototype-builtins ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"}))),") that enforces this."),(0,s.kt)("h3",{id:"prototype-pollution"},"Prototype pollution"),(0,s.kt)("p",null,"Prototype pollution is a vulnerability in code that allows input coming from the outside to mess up your prototype chain."),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const userInput = JSON.parse(`{\n    "newProp": "test",\n    "__proto__": {\n        "polluted": "true",\n        "toString": "whoops"\n    }\n}`);\n\n// vulnerable recursive merge\nfunction merge(target, source) {\n    for(var attr in source) {\n        if(typeof(target[attr]) === "object" && typeof(source[attr]) === "object") {\n            merge(target[attr], source[attr]);\n        } else {\n            target[attr] = source[attr];\n        }\n    }\n    return target;\n};\n\nconst oldObject = {};\n\nconst merged = merge({ a: "test"}, userInput);\n\nconsole.log(merged.newProp); // test\nconst newObject = {};\nconsole.log(oldObject.polluted); // true\nconsole.log(newObject.polluted); // true\n// Object.prototype is polluted, affecting all Objects!\n\nconsole.log(newObject.toString()); // TypeError!\n')),(0,s.kt)("p",null,"Prototype pollution vulnerabilities could be exploited to prevent system from working normally (DOS attack), set certain properties that bypass normal access checks or even inject some code into an application (see ",(0,s.kt)("a",{href:"https://www.youtube.com/watch?v=LUsiFV3dsK8&feature=emb_logo",target:"_blank",rel:"nofollow noopener noreferrer"},"Prototype pollution attacks in NodeJS applications ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"}))),"). "),(0,s.kt)("p",null,"Some ways to avoid being vulnerable:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If you need to write your own recursive merge, make sure to have it ignore ",(0,s.kt)("inlineCode",{parentName:"li"},"__proto__"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Vulnerabilities in libraries like Lodash have already been patched"))),(0,s.kt)("li",{parentName:"ul"},"Validate all user input, rejecting any input with unexpected properties"),(0,s.kt)("li",{parentName:"ul"},"An interesting way to avoid this kind of attack is to freeze the Object prototype. If you add ",(0,s.kt)("inlineCode",{parentName:"li"},"Object.freeze(Object.prototype);")," on top of the example above, the vulnerability is gone. This works because the freeze prevents the prototype from being altered in any way.")),(0,s.kt)("h2",{id:"functions-and-prototype"},"Functions and ",(0,s.kt)("inlineCode",{parentName:"h2"},".prototype")),(0,s.kt)("p",null,"Every JavaScript function has ",(0,s.kt)("inlineCode",{parentName:"p"},"prototype")," property. You could call this the function's prototype, although some would say that's confusing."),(0,s.kt)("p",null,"In any case, every object that is constructed through the function using ",(0,s.kt)("inlineCode",{parentName:"p"},"new")," syntax will have a ",(0,s.kt)("inlineCode",{parentName:"p"},"[[Prototype]]")," linking to the function's ",(0,s.kt)("inlineCode",{parentName:"p"},"prototype")," property."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'// PascalCase is just a convention\nfunction Test(value) {\n    this.value = value;\n}\n\nconst a = new Test("A");\nconsole.log(Object.getPrototypeOf(a) === Test.prototype); // true\n\nTest.prototype.log = function () {\n    console.log(this.value);\n}\n\na.log(); // A\n\nTest.prototype.log = function () {\n    console.log("Second implementation: " + this.value);\n}\n\na.log(); // Second implementation: A\n')),(0,s.kt)("p",null,"As the above code shows, we can add behavior to the function's ",(0,s.kt)("inlineCode",{parentName:"p"},"prototype")," property by defining properties on it with a function as value. We can call these functions through the new object (looking up ",(0,s.kt)("inlineCode",{parentName:"p"},"log")," works the same as looking up any other property on the prototype chain)."),(0,s.kt)("p",null,"You can also see that lookups in the prototype chain happen in a dynamic way (",(0,s.kt)("inlineCode",{parentName:"p"},"[[Prototype]]"),' links point to objects, no "copying of behavior" is done, there is just a chain which is traversed whenever properties are looked up). We can add a method to ',(0,s.kt)("inlineCode",{parentName:"p"},"Test"),"'s prototype, even after we have used it to create ",(0,s.kt)("inlineCode",{parentName:"p"},"a"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"a")," can use that method. We can later even overwrite the implementation with a new one. This offers a lot of possibilities, but could also be confusing."),(0,s.kt)("h2",{id:"prototypical-inheritance-and-object-oriented-design"},"Prototypical inheritance and object-oriented design"),(0,s.kt)("p",null,"The example regarding functions and ",(0,s.kt)("inlineCode",{parentName:"p"},"prototype")," already showed something that looked like classes. We can use the same mechanisms to simulate something like class inheritance:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'function ClassA(name) {\n    this.name = name;\n}\n\nClassA.prototype.getName = function () {\n    return this.name;\n};\n\nfunction ClassB(name,label) {\n    // call ClassA as a function, using the current this\n    // this simulates \'calling the superclass constructor\'\n    ClassA.call(this, name);\n    \n    this.label = label;\n}\n\n// option 1: replace ClassB.prototype with new object that inherits from ClassA.prototype\n// note: ClassB.prototype.constructor is now gone (doesn\'t point to ClassB anymore)\nClassB.prototype = Object.create(ClassA.prototype);\n// option 2 (from ES6): modify existing ClassB.prototype to inherit from ClassA.prototype\n// this keeps the data, like .constructor, already present in ClassB.prototype\nObject.setPrototypeOf(ClassB.prototype, ClassA.prototype);\n\nClassB.prototype.getLabel = function () {\n    return this.label;\n};\n\nconst instance = new ClassB("theName", "theLabel");\nconsole.log(instance.getName()); // theName\nconsole.log(instance.getLabel()); // theLabel\n')),(0,s.kt)("p",null,"If you just look at the lines at the bottom, the syntax seems very similar to for example Java. However, it is still just prototypical inheritance at work, with property lookups following the prototype chain at runtime."),(0,s.kt)("h2",{id:"object-oriented-design-vs-delegation-oriented-design"},"Object-oriented design vs. delegation-oriented design"),(0,s.kt)("p",null,"The above example tried to apply object-oriented design to JavaScript. There is also an alternative way, preferred by some, which doesn't try to simulate classes but instead fully embraces the concept of prototypes."),(0,s.kt)("p",null,"Example which does the same as the object-oriented example above:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const A = {\n    initA: function (name) { // normal function syntax\n        this.name = name;\n    },\n    getName() { // cleaner syntax, available from ES6\n        return this.name;\n    }\n}\n\nconst B = {\n    initB(name, label) {\n        this.initA(name); // delegated to A via prototype chain\n        this.label = label;\n    },\n    getLabel() {\n        return this.label;\n    }\n}\n\nObject.setPrototypeOf(B, A);\n\nconst instance = Object.create(B);\ninstance.initB("theName", "theLabel");\nconsole.log(instance.getName()); // theName\nconsole.log(instance.getLabel()); // theLabel\n')),(0,s.kt)("p",null,"As you can see in the above example, delegation-oriented design is a bit more explicit about the fact that JavaScript uses prototypical inheritance rather than class-based inheritance like some other languages."),(0,s.kt)("p",null,'Note that the "constructor" functionality, which sat in the functions ',(0,s.kt)("inlineCode",{parentName:"p"},"ClassA")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"ClassB")," in the previous example, is now implemented as separate ",(0,s.kt)("inlineCode",{parentName:"p"},"initA")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"initB")," functions on the objects, as there is no other place to put it."),(0,s.kt)("p",null,"Comparison of how the two approaches compare in terms of objects created and their relationships (adapted from ",(0,s.kt)("a",{href:"https://github.com/getify/You-Dont-Know-JS",target:"_blank",rel:"nofollow noopener noreferrer"},"You Don't Know JS ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"}))),"):"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Object-oriented vs delegation-oriented",src:n(132).Z,width:"716",height:"875"})),(0,s.kt)("h2",{id:"classes"},"Classes"),(0,s.kt)("p",null,"Basic idea:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"New syntax introduced in ES6"),(0,s.kt)("li",{parentName:"ul"},"In the background we still just have prototypes and the prototype chain!")),(0,s.kt)("p",null,"Example of how to implement the example from above using ES6 classes:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'class A {\n    // designated place to put constructor functionality\n    constructor(name) {\n        this.name = name;\n    }\n\n    getName() {\n        return this.name;\n    }\n}\n\n// no need to manually link prototypes\nclass B extends A { \n    constructor(name, label) {\n        super(name); // easy way to call superclass constructor\n        this.label = label;\n    }\n\n    getLabel() {\n        return this.label;\n    }\n}\n\nconst instance = new B("theName", "theLabel");\nconsole.log(instance.getName()); // theName\nconsole.log(instance.getLabel()); // theLabel\n')),(0,s.kt)("p",null,"Leads to pretty clean syntax, although it is still important to remember that JS didn't suddenly get a new class inheritance mechanism!"),(0,s.kt)("p",null,"Example indicating that we're still using runtime delegation based on prototypes:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'class Test {\n    getString() {\n        return "test";\n    }\n}\n\nconst oldInstance = new Test();\nconsole.log(oldInstance.getString()); // test\n\nTest.prototype.getString = function () {\n    return "newImplementation";\n}\n\nconst newInstance = new Test(); \nconsole.log(newInstance.getString()); // newImplementation\n\nconsole.log(oldInstance.getString()); // newImplementation\n')),(0,s.kt)("p",null,"Example indicating that accidental shadowing is still possible:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'class Test {\n    constructor() {\n        this.id = "whoops";\n    }\n\n    id() {\n        return "test";\n    }\n}\n\nconst instance = new Test(); // id() on Test.prototype is shadowed by id on instance\nconsole.log(instance.id()); // TypeError: instance.id is not a function\n')),(0,s.kt)("h3",{id:"instance-level-fields"},"Instance-level fields"),(0,s.kt)("p",null,'Modern JavaScript supports the concept of "field declarations", a more explicit way of declaring the class\' fields. This feature was added long after classes were introduced  (',(0,s.kt)("a",{href:"https://caniuse.com/?search=public%20class%20fields",target:"_blank",rel:"nofollow noopener noreferrer"},"check browser support on Can I Use ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"}))),")."),(0,s.kt)("p",null,"The code below is an example of using public instance fields:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"class A {\n    name = 'you can specify a default if you want';\n    \n    constructor(name) {\n        this.name = name;\n    }\n\n    getName() {\n        return this.name;\n    }\n}\n")),(0,s.kt)("p",null,"For some info on private instance fields, see below: ",(0,s.kt)("a",{parentName:"p",href:"#encapsulation-using-private-fields-and-methods"},"Encapsulation using private fields and methods")),(0,s.kt)("h3",{id:"static-class-level-fields"},"Static (class-level) fields"),(0,s.kt)("p",null,"You can use static fields if you want a field to exist at the level of the class rather than at the level of its instances. This feature was added long after classes were introduced (",(0,s.kt)("a",{href:"https://caniuse.com/?search=public%20class%20fields",target:"_blank",rel:"nofollow noopener noreferrer"},"check browser support on Can I Use ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"}))),")."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"class Test {\n    static SHARED_COUNTER = 0;\n\n    incrementSharedCounter() {\n        Test.SHARED_COUNTER++;\n    }\n  \n    getSharedCounter() {\n        return Test.SHARED_COUNTER;\n    }\n}\n\nconst instance = new Test();\nconsole.log(instance.getSharedCounter(), Test.SHARED_COUNTER); // 0, 0\n\nTest.SHARED_COUNTER++;\nconsole.log(instance.getSharedCounter(), Test.SHARED_COUNTER); // 1, 1\n\ninstance.incrementSharedCounter(); //\nconsole.log(instance.getSharedCounter(), Test.SHARED_COUNTER); // 2, 2\n")),(0,s.kt)("p",null,"For some info on private static fields, see below: ",(0,s.kt)("a",{parentName:"p",href:"#encapsulation-using-private-fields-and-methods"},"Encapsulation using private fields and methods")),(0,s.kt)("h4",{id:"simulating-static-class-fields"},"Simulating static class fields"),(0,s.kt)("p",null,"If you need to keep a shared property at the level of the class but you can't use static fields, the best approach is probably to set it directly on the class (rather than, for example, on the ",(0,s.kt)("inlineCode",{parentName:"p"},".prototype")," of the class where the methods sit). Note: setting the property directly on the class is also how TypeScript implements static class properties."),(0,s.kt)("p",null,"Working example putting properties directly on the class:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"class Test {\n    incrementSharedCounter() {\n        // use Test.sharedCounter and not this.sharedCounter\n        Test.SHARED_COUNTER++; \n    }\n  \n    getSharedCounter() {\n        return Test.SHARED_COUNTER;\n    }\n}\n\nTest.SHARED_COUNTER = 0;\n\nconst instance = new Test();\nconsole.log(instance.getSharedCounter(), Test.SHARED_COUNTER); // 0, 0\n\nTest.SHARED_COUNTER++;\nconsole.log(instance.getSharedCounter(), Test.SHARED_COUNTER); // 1, 1\n\ninstance.incrementSharedCounter();\nconsole.log(instance.getSharedCounter(), Test.SHARED_COUNTER); // 2, 2\n")),(0,s.kt)("p",null,"Accidental shadowing when putting on the ",(0,s.kt)("inlineCode",{parentName:"p"},".prototype"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"class Test {\n    incrementSharedCounter() {\n        this.SHARED_COUNTER++; // accidental shadowing!\n    }\n  \n    getSharedCounter() {\n        return this.SHARED_COUNTER;\n    }\n}\n\nTest.prototype.SHARED_COUNTER = 0;\n\nconst instance = new Test();\nconsole.log(instance.getSharedCounter(), Test.prototype.SHARED_COUNTER); // 0, 0\n\nTest.prototype.SHARED_COUNTER++;\nconsole.log(instance.getSharedCounter(), Test.prototype.SHARED_COUNTER); // 1, 1\n\ninstance.incrementSharedCounter(); // instance now gets its own SHARED_COUNTER property\nconsole.log(instance.getSharedCounter(), Test.prototype.SHARED_COUNTER); // 2, 1\n")),(0,s.kt)("h2",{id:"encapsulation"},"Encapsulation"),(0,s.kt)("p",null,"One important concept in object-oriented design is ",(0,s.kt)("em",{parentName:"p"},"encapsulation"),": classes expose a public interface while hiding internals using private fields and private methods."),(0,s.kt)("p",null,"Example of a class without any encapsulation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'class A {\n    constructor(name) {\n        this.name = name;\n    }\n\n    getName() {\n        return this.name;\n    }\n}\n\nconst instance = new A("theName");\ninstance.name = "test";\nconsole.log(instance.getName()); // test\n')),(0,s.kt)("h3",{id:"encapsulation-using-private-fields-and-methods"},"Encapsulation using private fields and methods"),(0,s.kt)("p",null,"This feature was added long after classes were introduced (",(0,s.kt)("a",{href:"https://caniuse.com/?search=private%20class%20fields",target:"_blank",rel:"nofollow noopener noreferrer"},"check browser support on Can I Use ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"}))),")"),(0,s.kt)("p",null,"Example using private fields:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'class A {\n    #name;\n\n    constructor(name) {\n        this.#name = name;\n    }\n\n    getName() {\n        return this.#name;\n    }\n}\n\nconst instance = new A("theName");\ninstance.#name = "test"; // SyntaxError\n')),(0,s.kt)("p",null,"Note that private fields cannot be added dynamically, they can only be declared up-front"),(0,s.kt)("p",null,"Private fields can also be ",(0,s.kt)("strong",{parentName:"p"},"static")," (class-level). In this case, it's recommended to always access them through the class itself rather than using ",(0,s.kt)("inlineCode",{parentName:"p"},"this")," in the code for a static method, since the latter can lead to some confusing errors."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"class BaseClassWithPrivateStaticField {\n    static #PRIVATE_STATIC_FIELD;\n\n    static basePublicStaticMethod() {\n        // do this\n        return BaseClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD;\n    }\n}\n\nclass SubClass extends BaseClassWithPrivateStaticField {}\n\nBaseClassWithPrivateStaticField.basePublicStaticMethod(); // ok\nSubClass.basePublicStaticMethod(); // ok\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"class BaseClassWithPrivateStaticField {\n    static #PRIVATE_STATIC_FIELD;\n\n    static basePublicStaticMethod() {\n        // don't do this\n        return this.#PRIVATE_STATIC_FIELD;\n    }\n}\n\nclass SubClass extends BaseClassWithPrivateStaticField {}\n\nBaseClassWithPrivateStaticField.basePublicStaticMethod(); // ok\nSubClass.basePublicStaticMethod(); // TypeError\n")),(0,s.kt)("p",null,"In addition to private fields, you can also add private (static) ",(0,s.kt)("strong",{parentName:"p"},"methods")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'class A {\n    #name;\n\n    constructor(name) {\n        this.#setName(name);\n    }\n\n    getName() {\n        return this.#name;\n    }\n\n    #setName(name) {\n        this.#name = `some prefix + ${name}`;\n    }\n}\n\nconst instance = new A("theName");\ninstance.#setName("test"); // SyntaxError\n')),(0,s.kt)("h3",{id:"encapsulation-without-using-private-fields-and-methods"},"Encapsulation without using private fields and methods"),(0,s.kt)("p",null,"For a long time, JavaScript classes did not support the concept of private fields (or even fields in general). In order to still support encapsulation, people came up with all kinds of workarounds (closures, ",(0,s.kt)("inlineCode",{parentName:"p"},"Symbols"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"WeakMaps"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Proxies"),', ...), but all of those workarounds have some performance or "cleanness" disadvantages. See: ',(0,s.kt)("a",{href:"https://curiosity-driven.org/private-properties-in-javascript",target:"_blank",rel:"nofollow noopener noreferrer"},"Private properties in JavaScript ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"}))),", ",(0,s.kt)("a",{href:"https://stackoverflow.com/questions/22156326/private-properties-in-javascript-es6-classes",target:"_blank",rel:"nofollow noopener noreferrer"},"Private properties in JavaScript ES6 classes ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"}))),", ",(0,s.kt)("a",{href:"https://dev.to/jankapunkt/es6-classes-with-private-members-144d",target:"_blank",rel:"nofollow noopener noreferrer"},"ES6 classes with private members ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"}))),", ..."),(0,s.kt)("p",null,"Example simulating private fields using closures (drawback: methods are created again for every instance instead of just putting them on the prototype):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'class A {\n    constructor(name) {\n        this.getName = function() {\n            return name;\n        }\n        \n        this.setName = function(newName) {\n               name = newName;\n        }\n    }\n}\n\nconst instance = new A("theName");\nconsole.log(instance.getName()); // theName\ninstance.setName("theNewName");\nconsole.log(instance.getName()); // theNewName\n\nconsole.log(instance.name); // undefined\ninstance.name = "test";\nconsole.log(instance.getName()); // theNewName\n')),(0,s.kt)("p",null,"Simplest workaround: convention that properties starting with underscore (",(0,s.kt)("inlineCode",{parentName:"p"},"_"),") are private. Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'class A {\n    constructor(name) {\n        this._name = name;\n    }\n\n    getName() {\n        return this._name;\n    }\n}\n\nconst instance = new A("theName");\ninstance._name = "test"; // as per convention, you should not do this\n')),(0,s.kt)("h2",{id:"resources"},"Resources"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{href:"https://github.com/getify/You-Dont-Know-JS",target:"_blank",rel:"nofollow noopener noreferrer"},"You Don't Know JS ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"})))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{href:"https://www.udemy.com/course/the-complete-javascript-course/",target:"_blank",rel:"nofollow noopener noreferrer"},"The Complete JavaScript Course ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"})))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"nofollow noopener noreferrer"},"String ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"})))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",target:"_blank",rel:"nofollow noopener noreferrer"},"Inheritance and the prototype chain ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"})))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{href:"https://www.youtube.com/watch?v=LUsiFV3dsK8&feature=emb_logo",target:"_blank",rel:"nofollow noopener noreferrer"},"Prototype pollution attacks in NodeJS applications ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"})))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields",target:"_blank",rel:"nofollow noopener noreferrer"},"Public class fields ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"})))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields",target:"_blank",rel:"nofollow noopener noreferrer"},"Private class features ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"})))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{href:"https://curiosity-driven.org/private-properties-in-javascript",target:"_blank",rel:"nofollow noopener noreferrer"},"Private properties in JavaScript ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"})))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{href:"https://stackoverflow.com/questions/22156326/private-properties-in-javascript-es6-classes",target:"_blank",rel:"nofollow noopener noreferrer"},"Private properties in JavaScript ES6 classes ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"})))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{href:"https://dev.to/jankapunkt/es6-classes-with-private-members-144d",target:"_blank",rel:"nofollow noopener noreferrer"},"ES6 classes with private members ",(0,s.kt)("svg",{class:"embedded-fa-icon"},(0,s.kt)("use",{href:"#external-link-alt"}))))))}h.isMDXComponent=!0},132:function(e,t,n){t.Z=n.p+"assets/images/object-oriented-delegation-oriented-a95e18cdaaa9a08b37af15805935eed8.png"}}]);