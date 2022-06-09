"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[1066],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return d}});var t=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?t.createElement(h,l(l({ref:a},p),{},{components:n})):t.createElement(h,l({ref:a},p))}));function d(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},162:function(e,a,n){n.r(a),n.d(a,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var t=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={title:"Lambda expressions (Java)",description:"The idea behind lambda expressions, how to use them, lambda expression scope, etc.",last_modified:new Date("2022-01-31T10:44:35.268Z"),sidebar_label:"Lambda expressions"},s=void 0,c={unversionedId:"java/lambda-expressions",id:"java/lambda-expressions",title:"Lambda expressions (Java)",description:"The idea behind lambda expressions, how to use them, lambda expression scope, etc.",source:"@site/docs/java/lambda-expressions.md",sourceDirName:"java",slug:"/java/lambda-expressions",permalink:"/interview-prep/java/lambda-expressions",draft:!1,tags:[],version:"current",frontMatter:{title:"Lambda expressions (Java)",description:"The idea behind lambda expressions, how to use them, lambda expression scope, etc.",last_modified:"2022-01-31T10:44:35.268Z",sidebar_label:"Lambda expressions"},sidebar:"docs",previous:{title:"Java Platform Module System",permalink:"/interview-prep/java/java-platform-module-system"},next:{title:"Optional type",permalink:"/interview-prep/java/optional"}},p={},u=[{value:"Lambda expressions in general",id:"lambda-expressions-in-general",level:2},{value:"Lambda expressions in Java",id:"lambda-expressions-in-java",level:2},{value:"Functional interfaces",id:"functional-interfaces",level:2},{value:"Lambda expression scope",id:"lambda-expression-scope",level:2},{value:"Java as a (somewhat) functional language",id:"java-as-a-somewhat-functional-language",level:2},{value:"Alternatives: local and anonymous classes",id:"alternatives-local-and-anonymous-classes",level:2},{value:"Functional interfaces and instantiation",id:"functional-interfaces-and-instantiation",level:2},{value:"Resources",id:"resources",level:2}],m={toc:u};function d(e){var a=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The idea behind lambda expressions, how to use them, lambda expression scope, etc."),(0,r.kt)("h2",{id:"lambda-expressions-in-general"},"Lambda expressions in general"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Lambda expression"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"General concept in programming that is a synonym for ",(0,r.kt)("em",{parentName:"li"},"anonymous function")),(0,r.kt)("li",{parentName:"ul"},"Is a function (a piece of code that accepts input, does something with it and potentially returns a result) that is not explicitly named."),(0,r.kt)("li",{parentName:"ul"},"These anonymous functions are very useful for passing them around to be used as input for other functions that operate on functions.")),(0,r.kt)("p",null,"Why the name lambda? Anonymous functions were first described in a paper by Alonzo Church, written in 1936, before electronic computers even existed. In that paper, the parameters for the anonymous functions were marked using the letter \u03bb (lambda). He picked this letter because the classic work ",(0,r.kt)("em",{parentName:"p"},"Principia Mathematica"),", a very important work in the field of mathematics released about 20 years earlier, used the ^ accent to mark function parameters, which kind of looked like an uppercase lambda (\u039b)."),(0,r.kt)("h2",{id:"lambda-expressions-in-java"},"Lambda expressions in Java"),(0,r.kt)("p",null,"Lambda expression in Java:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Some code to execute (the body of the expression), together with the input parameters."),(0,r.kt)("li",{parentName:"ul"},"You don\u2019t need to specify the return type of the body: Java automatically infers it. "),(0,r.kt)("li",{parentName:"ul"},"If the body doesn\u2019t fit on one line, simply create a block for it."),(0,r.kt)("li",{parentName:"ul"},"If you specify the interface that the lambda expression conforms to, Java can infer the types of the parameters and you don\u2019t need to specify them explicitly anymore",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If there is only a single argument with an inferred type, we can even omit the parentheses around that argument.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public static int compareStrings(Comparator<String> comp) {\n    return comp.compare("string1", "string2");\n}\n\npublic static int test() {\n    return compareStrings((first, second) ->\n        first.length() - second.length());\n}\n')),(0,r.kt)("h2",{id:"functional-interfaces"},"Functional interfaces"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Functional interface"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Interface is that it has a single abstract method"),(0,r.kt)("li",{parentName:"ul"},"Example: ",(0,r.kt)("inlineCode",{parentName:"li"},"Comparator<String>")),(0,r.kt)("li",{parentName:"ul"},"Whenever a piece of code requires an object conforming to a functional interface, you can instead pass a lambda expression implementing the single abstract method of that interface"),(0,r.kt)("li",{parentName:"ul"},"Often have ",(0,r.kt)("inlineCode",{parentName:"li"},"@FunctionalInterface")," annotation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Not required, but recommended"),(0,r.kt)("li",{parentName:"ul"},"Clear indication that the interface is a functional interface"),(0,r.kt)("li",{parentName:"ul"},"Compile-time checking that the interface indeed has a single abstract method")))),(0,r.kt)("p",null,"With the introduction of lambda expressions, Java also supplied a collection of new predefined functional interfaces in the ",(0,r.kt)("a",{href:"https://docs.oracle.com/javase/8/docs/api/java/util/function/package-summary.html",target:"_blank",rel:"nofollow noopener noreferrer"},"java.util.function ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))," package. These are some general interfaces specifically intended to describe common signatures for lambda expressions. "),(0,r.kt)("p",null,"Example functional interface included in java.util.function: ",(0,r.kt)("inlineCode",{parentName:"p"},"Predicate<T>")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Represents a predicate (boolean-valued function) taking one argument"),(0,r.kt)("li",{parentName:"ul"},"Has a single abstract method ",(0,r.kt)("inlineCode",{parentName:"li"},"test(T t)")," returning a boolean value"),(0,r.kt)("li",{parentName:"ul"},"Has static factory method ",(0,r.kt)("inlineCode",{parentName:"li"},"isEqual"),", returning a ",(0,r.kt)("inlineCode",{parentName:"li"},"Predicate")," implementation that checks for equality to a certain object"),(0,r.kt)("li",{parentName:"ul"},"Has default methods ",(0,r.kt)("inlineCode",{parentName:"li"},"and"),",",(0,r.kt)("inlineCode",{parentName:"li"},"or")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"negate")," to combine or invert existing predicates")),(0,r.kt)("p",null,"Also several other functional interfaces available by default, like ",(0,r.kt)("inlineCode",{parentName:"p"},"java.util.Comparator")," (seen above) or ",(0,r.kt)("inlineCode",{parentName:"p"},"java.lang.Runnable")),(0,r.kt)("p",null,"Creating own functional interfaces:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Avoid this where possible (prefer using predefined functional interfaces)"),(0,r.kt)("li",{parentName:"ul"},"Mostly useful if you need a functional interface with uncommon signature",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Example: an expression taking two ",(0,r.kt)("inlineCode",{parentName:"li"},"int")," values and returning an instance of a custom ",(0,r.kt)("inlineCode",{parentName:"li"},"Color")," class",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Could in principle use the ",(0,r.kt)("inlineCode",{parentName:"li"},"BiFunction<Integer, Integer, Color>")," interface, but you can avoid automatic boxing ad unboxing between ",(0,r.kt)("inlineCode",{parentName:"li"},"int")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Integer")," by specifying your own function interface"))),(0,r.kt)("li",{parentName:"ul"},"Example: expression taking a String and potentially throwing a checked exception, which should then be declared on the abstract method of the functional interface"))),(0,r.kt)("li",{parentName:"ul"},"Don\u2019t forget to mark with ",(0,r.kt)("inlineCode",{parentName:"li"},"@FunctionalInterface")," annotation")),(0,r.kt)("h2",{id:"lambda-expression-scope"},"Lambda expression scope"),(0,r.kt)("p",null,"Lambda expressions have the same scope as a ",(0,r.kt)("inlineCode",{parentName:"p"},"nested block"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cannot declare a variable with the same name as a variable in the enclosing scope"),(0,r.kt)("li",{parentName:"ul"},"If you use the ",(0,r.kt)("inlineCode",{parentName:"li"},"this")," keyword inside a lambda expression, it denotes the ",(0,r.kt)("inlineCode",{parentName:"li"},"this")," reference of the method creating the lambda",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Consequence: lambda expressions cannot call default methods of the interface they implement"))),(0,r.kt)("li",{parentName:"ul"},"Other example of nested block scope: the block of an if-statement")),(0,r.kt)("p",null,"Important feature of lambda expressions: can access variables from the enclosing scope"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This means lambda expression can access variables from the method creating the lambda expression, even if that method has already completed and its local variables are thus gone!"),(0,r.kt)("li",{parentName:"ul"},"When storing a lambda expression in a variable, the object representing the lambda expression also includes the values of these ",(0,r.kt)("em",{parentName:"li"},"free variables")," (variables that are not parameters and are not defined inside the lambda expression\u2019s code)"),(0,r.kt)("li",{parentName:"ul"},"Such a combination of a block of code together with the values of free variables is called a ",(0,r.kt)("em",{parentName:"li"},"closure")),(0,r.kt)("li",{parentName:"ul"},"Important restriction: you can only capture variables that are ",(0,r.kt)("em",{parentName:"li"},"effectively final"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Effectively final: the variables don\u2019t change; either they are declared ",(0,r.kt)("inlineCode",{parentName:"li"},"final")," or they could have been declared ",(0,r.kt)("inlineCode",{parentName:"li"},"final")),(0,r.kt)("li",{parentName:"ul"},"This also means that it is not possible to reassign captured variables from the lambda expression"),(0,r.kt)("li",{parentName:"ul"},"This is a lot more restrictive than what you can do in for example JavaScript"),(0,r.kt)("li",{parentName:"ul"},"Note: while you cannot change the values of captured variables, you can still call methods on them if they are objects. "),(0,r.kt)("li",{parentName:"ul"},"Note: the variable of an enhanced ",(0,r.kt)("inlineCode",{parentName:"li"},"for")," loop is effectively final because its scope is limited to a singe iteration of the loop.")))),(0,r.kt)("p",null,"Example block scope and accessing free variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Test {    \n    private int instanceVariable = 1;\n    \n    public Predicate<String> getPredicate() {\n        int localVariable = 10;\n        \n        return string -> {\n            int localVariable = 5; // compiler error\n            System.out.println(localVariable); // 10\n            System.out.println(this.instanceVariable); // 1\n            return string.length() > localVariable;\n        };\n    }\n}\n")),(0,r.kt)("p",null,"Example effectively final:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"int localVariable = 10;\n\nfor (int i = 0; i < 10; i++) {\n    predicates.add(string -> {\n        localVariable++; // compiler error\n        return string.length() > i; // compiler error\n        return string.length() > localVariable; // ok\n    });\n}\n")),(0,r.kt)("p",null,"Example effectively final enhanced for loop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<Integer> integers;\nList<Integer> processedIntegers;\n\nfor (Integer integer: integers) {\n    predicates.add(string -> {\n        processedIntegers.add(integer);\n        return string.length() > integer;\n    });\n}\n")),(0,r.kt)("h2",{id:"java-as-a-somewhat-functional-language"},"Java as a (somewhat) functional language"),(0,r.kt)("p",null,"With the introduction of lambda expressions, Java added some features typical for functional languages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lambda expressions and functional interfaces can be seen as a way to treat functions as first-class objects, allowing to store functions in variables or pass them around to functions"),(0,r.kt)("li",{parentName:"ul"},"This way, Java supports the creation of ",(0,r.kt)("em",{parentName:"li"},"higher-order functions"),", which are methods/functions that process or return other functions (although, in reality, those functions are just objects of classes implementing a functional interface)"),(0,r.kt)("li",{parentName:"ul"},"Example: a static method that accepts a boolean indicating a direction and returns a ",(0,r.kt)("inlineCode",{parentName:"li"},"Comparator")," based on the input"),(0,r.kt)("li",{parentName:"ul"},"Example: a method that takes a ",(0,r.kt)("inlineCode",{parentName:"li"},"Comparator"),"and returns a new ",(0,r.kt)("inlineCode",{parentName:"li"},"Comparator")," reversing the order of the initial ",(0,r.kt)("inlineCode",{parentName:"li"},"Comparator")," (the ",(0,r.kt)("inlineCode",{parentName:"li"},"Comparator")," interface actually has a default method ",(0,r.kt)("inlineCode",{parentName:"li"},"reversed()")," which reverses the current ",(0,r.kt)("inlineCode",{parentName:"li"},"Comparator"),")")),(0,r.kt)("p",null,"Java now also has a powerful mechanism to pass regular methods around as objects, which is essentially a shorthand for writing lambda expressions invoking the same methods. This is the mechanism of ",(0,r.kt)("em",{parentName:"p"},"method references"),". There are three variations here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Class::staticMethod"),": a reference to a static method of a class"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Class::instanceMethod"),": a reference to an instance method of a class. The first argument specifies the object on which the instance method is invoked."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"object::instanceMethod"),": a reference to an instance method of a class which will be invoked an a specific object")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Test {    \n    public static void staticMethod(String input) {\n        System.out.println("static:" + input);\n    }\n    \n    public void instanceMethod(String input) {\n        System.out.println("instance:" + input);\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// method reference\nTest::staticMethod\n// equivalent lambda expression\ninput -> Test.staticMethod(input)\n\n// method reference\nTest::instanceMethod\n// equivalent lambda expression (2 parameters!)\n(instance, input) -> instance.instanceMethod(input)\n\nTest testInstance = new Test();\n// method reference\ntestInstance::instanceMethod\n// equivalent lambda expression\ninput -> testInstance.instanceMethod(input)\n")),(0,r.kt)("p",null,"Some more realistic examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<String> list = new ArrayList<String>();\n        \n// Class::staticMethod\nlist.removeIf(Objects::isNull);\n// Class::instanceMethod\nlist.sort(String::compareToIgnoreCase);\n// object::instanceMethod\nlist.forEach(System.out::println);\n")),(0,r.kt)("p",null,"As another practical example, consider the ",(0,r.kt)("inlineCode",{parentName:"p"},"Comparator.comparing")," method. This method takes a method reference that extracts the values to compare. This allows for easy construction of custom ",(0,r.kt)("inlineCode",{parentName:"p"},"Comparator")," instances."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"personList.sort(Comparator\n    .comparing(Person::getLastName)\n    .thenComparing(Person::getFirstName))\n")),(0,r.kt)("p",null,"There is also a similar mechanism, ",(0,r.kt)("em",{parentName:"p"},"constructor references"),", for passing around constructors. This uses the syntax ",(0,r.kt)("em",{parentName:"p"},"Class::new"),". If there are multiple constructors, the compiler will infer which constructor to use from the context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Dog {    \n    private final String name;\n    \n    public Dog() {\n        this.name = "Max";\n    }\n\n    public Dog(String name) {\n        this.name = name;\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// no-argument constructor\nSupplier<Dog> dogSupplier = Dog::new;\n\n// String argument constructor\nFunction<String, Dog> nameToDog = Dog::new;\n")),(0,r.kt)("p",null,"You can also use constructor references to construct arrays. In that case, the array size is determined by the single parameter passed to the constructor reference."),(0,r.kt)("h2",{id:"alternatives-local-and-anonymous-classes"},"Alternatives: local and anonymous classes"),(0,r.kt)("p",null,"Before the introduction of lambda expressions, Java already had a concise way to define a class implementing an interface. The way to do this was to use local or anonymous classes."),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"local class")," is a class defined inside a method. A typical use case is if you want to provide an object conforming to an interface and it doesn\u2019t really matter what the implementing class is."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"int localVariable = 10;\n        \nclass LengthPredicate implements Predicate<String> {\n    @Override\n    public boolean test(String string) {\n        return string.length() > localVariable;\n    }\n}\n\nPredicate<String> predicate = new LengthPredicate();\n")),(0,r.kt)("p",null,"If you use your local class only once, it makes more sense to remove the name and to define it as an ",(0,r.kt)("em",{parentName:"p"},"anonymous class"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"int localVariable = 10;        \n\nPredicate<String> predicate = new Predicate<String>() {\n    @Override\n    public boolean test(String string) {\n        return string.length() > localVariable;\n    }\n};\n")),(0,r.kt)("p",null,"Just like with lambda expressions, the code in local and anonymous classes can access local variables defined in their enclosing scope. Also just like with lambda expressions, this is only allowed if those local variables are effectively final."),(0,r.kt)("p",null,"Some important differences:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can use local/anonymous classes to implement interfaces with more than one abstract method. You are not restricted to functional interfaces."),(0,r.kt)("li",{parentName:"ul"},"Local/anonymous classes allow you to define local variables with the same name as local variables in the enclosing scope. This hides the variable in the enclosing scope from the code in the local/anonymous class (this is called ",(0,r.kt)("em",{parentName:"li"},"shadowing"),"). Lambda expressions forbid this."),(0,r.kt)("li",{parentName:"ul"},"Local/anonymous classes are actual classes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Unlike lambda expressions, they can define and access their own instance variables. "),(0,r.kt)("li",{parentName:"ul"},"This also means that, if you use the ",(0,r.kt)("inlineCode",{parentName:"li"},"this")," keyword in a method of a local/anonymous class, it refers to the instance of the class itself and not to the ",(0,r.kt)("inlineCode",{parentName:"li"},"this")," reference of the method creating the local/anonymous class. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Can use this to call default methods on the interface that they are implementing!"),(0,r.kt)("li",{parentName:"ul"},"Still possible to access ",(0,r.kt)("inlineCode",{parentName:"li"},"this")," reference of the method creating the local/anonymous class if needed")))))),(0,r.kt)("p",null,"Example more than one abstract method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface TwoMethodInterface {\n    public void methodA();\n    public void methodB();\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TwoMethodInterface twoMethodInterface = new TwoMethodInterface() {\n    @Override\n    public void methodA() {\n        System.out.println("methodA");\n    }\n\n    @Override\n    public void methodB() {\n        System.out.println("methodB");\n    }\n};\n')),(0,r.kt)("p",null,"Example shadowing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"int localVariable = 10;        \n\nPredicate<String> predicate = new Predicate<String>() {\n    @Override\n    public boolean test(String string) {\n        System.out.println(localVariable); // 10\n        int localVariable = 1;    \n        System.out.println(localVariable); // 1\n        return string.length() > localVariable;\n    }\n};\n")),(0,r.kt)("p",null,"Example instance variables, ",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"and default methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface InterfaceA {    \n    public abstract void doSomething();\n    \n    public default void logCount(int count) {\n        System.out.println(count);\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"InterfaceA interfaceA = new InterfaceA() {\n    private int count = 0;\n    \n    @Override\n    public void doSomething() {\n        this.count++;\n        this.logCount(this.count);\n    }\n};\n")),(0,r.kt)("p",null,"Example accessing ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," reference of the enclosing method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Test {    \n    private int instanceVariable = 0;\n    \n    public int getInstanceVariable() {\n        return this.instanceVariable;\n    }\n    \n    public void test() {\n        // using method reference\n        IntSupplier supplier = this::getInstanceVariable;\n        // using a local variable referring to this\n        Test outer = this;\n        // available from Java 10\n        // also works if this is instance of anonymous class\n        var outer2 = this;\n        \n        InterfaceA interfaceA = new InterfaceA() {            \n            @Override\n            public void doSomething() {\n                int outerInstanceVariable = supplier.getAsInt();\n                outer.instanceVariable++;\n            }\n        };\n        \n        interfaceA.doSomething();\n    }\n}\n")),(0,r.kt)("h2",{id:"functional-interfaces-and-instantiation"},"Functional interfaces and instantiation"),(0,r.kt)("p",null,"Lambda expressions can be used as the value for variables or parameters that have a functional interface as a type. So, does this mean that lambda expressions violate the rule that interfaces cannot be directly instantiated?"),(0,r.kt)("p",null,"Answer: no!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When you write a lambda expression, Java uses that to create an instance of some class that implements the relevant functional interface"),(0,r.kt)("li",{parentName:"ul"},"The way these objects and classes are managed depends on the specific Java implementation and can be highly optimized"),(0,r.kt)("li",{parentName:"ul"},"Similar behavior when using anonymous class")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Predicate<String> pred1 = (string -> string.length() > 1);\n\nPredicate<String> pred2 = new Predicate<String>() {\n    @Override\n    public boolean test(String string) {\n        return string.length() > 1;\n    }\n};\n\n\nSystem.out.println(pred1.getClass()); // class misc.Main$$Lambda$1/834600351\nSystem.out.println(pred2.getClass()); // class misc.Main$4\n")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Core Java SE 9 for the Impatient (book by Cay S. Horstmann)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://en.wikipedia.org/wiki/Anonymous_function",target:"_blank",rel:"nofollow noopener noreferrer"},"Anonymous function ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://docs.oracle.com/javase/8/docs/api/java/util/function/package-summary.html",target:"_blank",rel:"nofollow noopener noreferrer"},"Package java.util.function ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://stackoverflow.com/questions/42942351/do-you-have-a-list-of-java-8-functional-interfaces-not-the-ones-listed-in-java",target:"_blank",rel:"nofollow noopener noreferrer"},"Java 8 Functional interfaces (not the ones listed in java.util.function) ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://stackoverflow.com/questions/22637900/java8-lambdas-vs-anonymous-classes",target:"_blank",rel:"nofollow noopener noreferrer"},"Java 8 Lambdas vs Anonymous classes ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://stackoverflow.com/questions/53211917/access-method-of-outer-anonymous-class-from-inner-anonymous-class",target:"_blank",rel:"nofollow noopener noreferrer"},"Access method of outer anonymous class from inner anonymous class ",(0,r.kt)("svg",{class:"embedded-fa-icon"},(0,r.kt)("use",{href:"#external-link-alt"}))))))}d.isMDXComponent=!0}}]);