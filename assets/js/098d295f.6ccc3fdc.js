"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[9012],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=i,b=p["".concat(d,".").concat(g)]||p[g]||c[g]||o;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1941:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={title:"Overloading, overriding and method hiding (Java)",description:"An overview of how overloading, overriding and method hiding works in Java",last_modified:new Date("2020-05-30T13:54:15.000Z"),sidebar_label:"Overloading, overriding and method hiding"},d=void 0,l={unversionedId:"java/overloading-overriding-method-hiding",id:"java/overloading-overriding-method-hiding",title:"Overloading, overriding and method hiding (Java)",description:"An overview of how overloading, overriding and method hiding works in Java",source:"@site/docs/java/overloading-overriding-method-hiding.md",sourceDirName:"java",slug:"/java/overloading-overriding-method-hiding",permalink:"/interview-prep/java/overloading-overriding-method-hiding",draft:!1,tags:[],version:"current",frontMatter:{title:"Overloading, overriding and method hiding (Java)",description:"An overview of how overloading, overriding and method hiding works in Java",last_modified:"2020-05-30T13:54:15.000Z",sidebar_label:"Overloading, overriding and method hiding"},sidebar:"docs",previous:{title:"Optional type",permalink:"/interview-prep/java/optional"},next:{title:"Streams",permalink:"/interview-prep/java/streams"}},u={},c=[{value:"Overloading",id:"overloading",level:2},{value:"Overriding",id:"overriding",level:2},{value:"Combining overloading and overriding",id:"combining-overloading-and-overriding",level:2},{value:"Method hiding",id:"method-hiding",level:2},{value:"Resources",id:"resources",level:2}],p={toc:c};function g(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An overview of how overloading, overriding and method hiding works in Java"),(0,o.kt)("h2",{id:"overloading"},"Overloading"),(0,o.kt)("p",null,"What it is: a class has several methods with the same name but different number or types of parameters and Java chooses which one to call based on the arguments you pass"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'class OverloadingTest {\n    public void testMethod(Object object) {\n        System.out.println("object");\n    }\n    \n    public void testMethod(String string) {\n        System.out.println("string");\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'OverloadingTest test = new OverloadingTest();\nObject testObject = new Object();\nString testString = "testString";\n\ntest.testMethod(testObject); // object\ntest.testMethod(testString); // string\n')),(0,o.kt)("p",null,"Important: the exact ",(0,o.kt)("em",{parentName:"p"},"signature")," of the method to call is based at ",(0,o.kt)("strong",{parentName:"p"},"compile time")," using the compile-time types of the arguments"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Object testStringAsObject = testString;\ntest.testMethod(testStringAsObject); // object\n")),(0,o.kt)("h2",{id:"overriding"},"Overriding"),(0,o.kt)("p",null,"What it is: a subclass overrides an instance method of a direct or indirect superclass by providing its own implementation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'class OverridingTestSuper {\n    public void testMethod(Object object) {\n        System.out.println("super");\n    }\n}\n\nclass OverridingTestSub extends OverridingTestSuper {\n    @Override\n    public void testMethod(Object object) {\n        System.out.println("sub");\n    }\n}\n')),(0,o.kt)("p",null,"Note: use",(0,o.kt)("inlineCode",{parentName:"p"},"@Override")," annotation when overriding, so the Java compiler helps you check that the method is actually correctly overriding a supertype method"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"OverridingTestSuper testSuper = new OverridingTestSuper();\nOverridingTestSub testSub = new OverridingTestSub();\nObject testObject = new Object();\n\ntestSuper.testMethod(testObject); // super\ntestSub.testMethod(testObject); // sub\n")),(0,o.kt)("p",null,"Important: The ",(0,o.kt)("em",{parentName:"p"},"implementation")," to invoke is determined at ",(0,o.kt)("strong",{parentName:"p"},"run time")," based on the actual runtime type of the object and the structure of the inheritance hierarchy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"OverridingTestSuper testSubAsSuper = testSub;\ntestSubAsSuper.testMethod(testObject); // sub\n")),(0,o.kt)("h2",{id:"combining-overloading-and-overriding"},"Combining overloading and overriding"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'class CombinedTestSuper {\n    public void testMethod(Object object) {\n        System.out.println("super object");\n    }\n}\n\nclass CombinedTestSub extends CombinedTestSuper {\n    @Override\n    public void testMethod(Object object) {\n        System.out.println("sub object");\n    }\n    \n    public void testMethod(String string) {\n        System.out.println("sub string");\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'CombinedTestSuper testSuper = new CombinedTestSuper();\nCombinedTestSub testSub = new CombinedTestSub();\nCombinedTestSuper testSubAsSuper = testSub;\n\nString testString = "testString";\nObject testStringAsObject = testString;\n\ntestSuper.testMethod(testString); // super object (only one method on CombinedTestSuper)\ntestSuper.testMethod(testStringAsObject); // super object (only one method on CombinedTestSuper)\n\ntestSub.testMethod(testString); // sub string (chooses signature testMethod(String) on CombinedTestSub)\ntestSub.testMethod(testStringAsObject); // sub object (chooses signature testMethod(Object) on CombinedTestSub)\n\ntestSubAsSuper.testMethod(testString); // sub object (uses signature of only method on CombinedTestSuper but implementation of CombinedTestSub)\ntestSubAsSuper.testMethod(testStringAsObject); // sub object (uses signature of only method on CombinedTestSuper but implementation of CombinedTestSub)\n')),(0,o.kt)("h2",{id:"method-hiding"},"Method hiding"),(0,o.kt)("p",null,"For static methods, overloading is still used to determine the signature of the method to invoke"),(0,o.kt)("p",null,"But what if superclass and subclass both have static method with same signature?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'class CombinedTestSuper {\n    public static void testStaticMethod(Object object) {\n        System.out.println("super");\n    }\n}\n\nclass CombinedTestSub extends CombinedTestSuper {\n    public static void testStaticMethod(Object object) {\n        System.out.println("sub");\n    }\n}\n')),(0,o.kt)("p",null,"Calling static methods on classes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Object testObject = new Object();\n\nStaticSuper.testStaticMethod(testObject); // super\nStaticSub.testStaticMethod(testObject); // sub\n")),(0,o.kt)("p",null,"Calling static methods on instances (note that this will generate compiler warnings):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"StaticSuper staticSuper = new StaticSuper();\nStaticSub staticSub = new StaticSub();\nStaticSuper staticSubAsSuper = staticSub;\n\nstaticSuper.testStaticMethod(testObject); // super\nstaticSub.testStaticMethod(testObject); // sub\nstaticSubAsSuper.testStaticMethod(testObject); // super (!!!)\n")),(0,o.kt)("p",null,"No overriding here! Instead, we get ",(0,o.kt)("em",{parentName:"p"},"method hiding"),"."),(0,o.kt)("p",null,"Can be pretty confusing (not only the method hiding itself, but also the fact that we call a static method in a way that makes it look like an instance method), which is also why we get warnings when doing this."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://docs.oracle.com/javase/specs/jls/se10/html/jls-8.html#jls-8.4.9",target:"_blank",rel:"nofollow noopener noreferrer"},"Overloading in the Java Language Specification ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"})))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://crunchify.com/java-method-hiding-and-overriding-override-static-method-in-java/9",target:"_blank",rel:"nofollow noopener noreferrer"},"Java Method Hiding and Overriding ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"}))))))}g.isMDXComponent=!0}}]);