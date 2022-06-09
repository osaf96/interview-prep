(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{164:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(1),i=a(9),r=(a(0),a(231)),l={title:"Interfaces (Java)",description:"An overview of interfaces in Java",last_modified:new Date("2020-05-30T13:54:15.000Z"),sidebar_label:"Interfaces"},c={id:"java/interfaces",title:"Interfaces (Java)",description:"An overview of interfaces in Java",source:"@site/docs\\java\\interfaces.md",permalink:"/interview-prep/java/interfaces",sidebar_label:"Interfaces",sidebar:"docs",previous:{title:"Generics (Java)",permalink:"/interview-prep/java/generics"},next:{title:"Java Platform Module System",permalink:"/interview-prep/java/java-platform-module-system"}},o=[{value:"Basics",id:"basics",children:[]},{value:"Default methods",id:"default-methods",children:[]},{value:"Abstract classes vs. interfaces",id:"abstract-classes-vs-interfaces",children:[]},{value:"Default methods and inheritance",id:"default-methods-and-inheritance",children:[]},{value:"Resources",id:"resources",children:[]}],s={rightToc:o};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"An overview of interfaces in Java"),Object(r.b)("h2",{id:"basics"},"Basics"),Object(r.b)("p",null,"Main idea behind interfaces: specify the contract between supplier(s) of certain functionality and client code which uses that functionality"),Object(r.b)("p",null,"Most common use case: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Define an interface declaring one or more abstract methods (without implementation)"),Object(r.b)("li",{parentName:"ul"},"There may be several classes actually implementing the interface (and specifying concrete implementations for the methods)"),Object(r.b)("li",{parentName:"ul"},"Client code can then require an object that conforms to a certain interface, without having to care about which implementing class the object is an instance of")),Object(r.b)("p",null,"An interface can contain:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Public static constants"),Object(r.b)("li",{parentName:"ul"},"Public abstract methods"),Object(r.b)("li",{parentName:"ul"},"Nested classes, interfaces, enums and annotations (often not considered good practice)"),Object(r.b)("li",{parentName:"ul"},"Default methods (since Java 8, see below)"),Object(r.b)("li",{parentName:"ul"},"Private methods (since Java 9)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Can be used by default method implementations specified in the interface"))),Object(r.b)("li",{parentName:"ul"},"Static methods (since Java 9)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Can be useful as factory methods for functional interfaces (see ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/java/lambda-expressions"}),"Lambda expressions"),")")))),Object(r.b)("h2",{id:"default-methods"},"Default methods"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Default method"),": method in an interface that specifies an actual implementation."),Object(r.b)("p",null,"Classes implementing an interface with default methods can choose to use that implementation (this is what happens by default) or override it with custom implementation."),Object(r.b)("p",null,"Use cases:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Backwards compatible extension of interfaces",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Example: the introduction of streams in Java 8",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Starting from Java 8, the ",Object(r.b)("inlineCode",{parentName:"li"},"Collection")," interface now has a ",Object(r.b)("inlineCode",{parentName:"li"},".stream()")," method"),Object(r.b)("li",{parentName:"ul"},"If that method would have been added to the ",Object(r.b)("inlineCode",{parentName:"li"},"Collection")," interface as an abstract method, this would have meant that all of the custom ",Object(r.b)("inlineCode",{parentName:"li"},"Collection")," classes that people had implemented would fail to compile until their authors added that ",Object(r.b)("inlineCode",{parentName:"li"},".stream()")," method. Additionally, if such a class was supplied in a JAR file (for example, a reusable library) that was compiled with an earlier version of Java, the class would still load successfully but users would suddenly get runtime errors on calling the ",Object(r.b)("inlineCode",{parentName:"li"},".stream()")," method."))))),Object(r.b)("li",{parentName:"ul"},"Cleaner alternative to the older pattern of declaring an interface (with only abstract methods) and then offering an abstract companion class providing default implementations for most of the methods",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Example of that older pattern: ",Object(r.b)("inlineCode",{parentName:"li"},"Collection")," and ",Object(r.b)("inlineCode",{parentName:"li"},"AbstractCollection"))))),Object(r.b)("h2",{id:"abstract-classes-vs-interfaces"},"Abstract classes vs. interfaces"),Object(r.b)("p",null,"As interfaces have become more powerful, they have become more similar to abstract classes."),Object(r.b)("p",null,"Still, some differences remain:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Interfaces cannot be instantiated",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Every object has to be an instance of an actual class"),Object(r.b)("li",{parentName:"ul"},"Unlike abstract classes, interfaces cannot have any instance variables or constructors",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Interfaces are for specifying behavior, not for encapsulating state"))))),Object(r.b)("li",{parentName:"ul"},"Static variables on interfaces can only be ",Object(r.b)("inlineCode",{parentName:"li"},"final")),Object(r.b)("li",{parentName:"ul"},"A class can only extend at most one abstract class, but a class can implement any number of interfaces",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Makes sense: an interface is intended to specify a contract and a class could potentially conform to multiple contracts")))),Object(r.b)("h2",{id:"default-methods-and-inheritance"},"Default methods and inheritance"),Object(r.b)("p",null,"Problem: Since interfaces can now also contain method implementations, it is possible that the class/interfaces that a class extends/implements contain several implementations for the same method signature. What do we do in this case? This is known as the ",Object(r.b)("a",{href:"https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem",target:"_blank",rel:"nofollow noopener noreferrer"},"diamond problem ",Object(r.b)("svg",{class:"embedded-fa-icon"},Object(r.b)("use",{href:"#external-link-alt"}))),"."),Object(r.b)("p",null,"How Java solves this:"),Object(r.b)("p",null,"If two interfaces that a class implements specify a method with the same signature, you must always provide an implementation."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Even if only one of the interfaces provides a default implementation, the compiler forces you to be explicit about the specific implementation to be used",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If one of the default methods already specifies the behavior you want, your implementation can simply delegate to it"))),Object(r.b)("li",{parentName:"ul"},"If none of the interfaces has a default implementation, the implementing class must provide an implementation anyway")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'public interface InterfaceA {    \n    public abstract void doSomething();\n}\n\npublic interface InterfaceB {    \n    public default void doSomething() {\n        System.out.println("test");\n    };\n}\n\npublic class Class implements InterfaceA, InterfaceB {\n    // compiler forces us to provide an implementation\n    @Override\n    public void doSomething() {\n        // delegate to behavior specified in InterfaceB\n        InterfaceB.super.doSomething();\n    }\n}\n')),Object(r.b)("p",null,"If a class inherits from a superclass implementing a certain method but also implements an interface that has a default method with the same signature,  the implementation from the superclass will always have priority"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"This prevents default methods from changing the behavior of code that was written before Java 8.")),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Core Java SE 9 for the Impatient (book by Cay S. Horstmann)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{href:"https://dzone.com/articles/evolution-of-interface-in-history-of-java",target:"_blank",rel:"nofollow noopener noreferrer"},"Evolution of Interfaces in History of Java ",Object(r.b)("svg",{class:"embedded-fa-icon"},Object(r.b)("use",{href:"#external-link-alt"})))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{href:"https://www.geeksforgeeks.org/difference-between-abstract-class-and-interface-in-java/",target:"_blank",rel:"nofollow noopener noreferrer"},"Difference between Abstract Class and Interface in Java ",Object(r.b)("svg",{class:"embedded-fa-icon"},Object(r.b)("use",{href:"#external-link-alt"})))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{href:"https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem",target:"_blank",rel:"nofollow noopener noreferrer"},"The diamond problem ",Object(r.b)("svg",{class:"embedded-fa-icon"},Object(r.b)("use",{href:"#external-link-alt"}))))))}b.isMDXComponent=!0},231:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return f}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},m=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=b(a),p=n,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||r;return a?i.a.createElement(f,c({ref:t},s,{components:a})):i.a.createElement(f,c({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<r;s++)l[s]=a[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);