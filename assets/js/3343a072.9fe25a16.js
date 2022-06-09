"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[6561],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=i,h=m["".concat(o,".").concat(u)]||m[u]||c[u]||r;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8610:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),s=["components"],l={title:"Generics (Java)",description:"An overview of generics in Java",last_modified:new Date("2020-07-11T16:56:51.595Z"),sidebar_label:"Generics"},o=void 0,p={unversionedId:"java/generics",id:"java/generics",title:"Generics (Java)",description:"An overview of generics in Java",source:"@site/docs/java/generics.md",sourceDirName:"java",slug:"/java/generics",permalink:"/interview-prep/java/generics",draft:!1,tags:[],version:"current",frontMatter:{title:"Generics (Java)",description:"An overview of generics in Java",last_modified:"2020-07-11T16:56:51.595Z",sidebar_label:"Generics"},sidebar:"docs",previous:{title:"Exceptions",permalink:"/interview-prep/java/exceptions"},next:{title:"Interfaces",permalink:"/interview-prep/java/interfaces"}},d={},c=[{value:"Generics basics",id:"generics-basics",level:2},{value:"Wildcards",id:"wildcards",level:2},{value:"A note about arrays",id:"a-note-about-arrays",level:3},{value:"Generics inside the Java Virtual Machine",id:"generics-inside-the-java-virtual-machine",level:2},{value:"Type erasure",id:"type-erasure",level:3},{value:"Cast insertion",id:"cast-insertion",level:3},{value:"Bridge methods",id:"bridge-methods",level:3},{value:"The Class class",id:"the-class-class",level:2},{value:"Generics restrictions",id:"generics-restrictions",level:2},{value:"Resources",id:"resources",level:2}],m={toc:c};function u(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An overview of generics in Java"),(0,r.kt)("h2",{id:"generics-basics"},"Generics basics"),(0,r.kt)("p",null,"Simple class hierarchy for examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Animal {}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Dog extends Animal {}\n")),(0,r.kt)("p",null,"Example generic interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<Dog> dogList = new ArrayList<Dog>();\ndogList.add(new Dog());\nDog dog = dogList.get(0);\ndogList.add(new Object()); // compiler error\n")),(0,r.kt)("p",null,"Example generic method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public <T extends Animal> T getFirstAnimal(List<T> animals) {\n    return animals.get(0);\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"T extends Animal")," is a ",(0,r.kt)("em",{parentName:"p"},"type bound"),"."),(0,r.kt)("h2",{id:"wildcards"},"Wildcards"),(0,r.kt)("p",null,"What if you need something representing any kind of list of animals?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<Dog> dogList = new ArrayList<Dog>();\nList<Animal> animalList = dogList; // compiler error\n")),(0,r.kt)("p",null,"Reason why this fails: a proper ",(0,r.kt)("inlineCode",{parentName:"p"},"List<Animal>")," allows adding any ",(0,r.kt)("inlineCode",{parentName:"p"},"Animal"),", while a ",(0,r.kt)("inlineCode",{parentName:"p"},"List<Dog>")," should only allow adding ",(0,r.kt)("inlineCode",{parentName:"p"},"Dog"),"s. This means that the two types are not compatible. "),(0,r.kt)("p",null,"If we only care about the fact that our List contains some kind of ",(0,r.kt)("inlineCode",{parentName:"p"},"Animal"),"s, we can use type wildcards to define this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<Dog> dogList = new ArrayList<Dog>();\nList<? extends Animal> extendsAnimalList = dogList; // works\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"? extends Animal")," is called a ",(0,r.kt)("em",{parentName:"p"},"subtype wildcard"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"? super Dog")," is called a ",(0,r.kt)("em",{parentName:"p"},"supertype wildcard")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<Dog> dogList = new ArrayList<Dog>();\n\nList<? extends Animal> extendsAnimalList = dogList;\nAnimal animal = extendsAnimalList.get(0); // works\nextendsAnimalList.add(new Dog()); // compiler error\n\nList<? super Dog> superDogList = dogList;\nAnimal animal2 = superDogList.get(0); // compiler error\nsuperDogList.add(new Dog()); // works\n")),(0,r.kt)("p",null," For very generic code, you can also use a wildcard (",(0,r.kt)("inlineCode",{parentName:"p"},"?")," without type bounds)"),(0,r.kt)("h3",{id:"a-note-about-arrays"},"A note about arrays"),(0,r.kt)("p",null,"We saw above that it is not possible to assign a ",(0,r.kt)("inlineCode",{parentName:"p"},"List<Dog>")," to a ",(0,r.kt)("inlineCode",{parentName:"p"},"List<Animal>"),", which makes sense. However, this is not the case for arrays. You can easily assign a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dog[]")," array to an ",(0,r.kt)("inlineCode",{parentName:"p"},"Animal[]")," array without the compiler complaining. However, if you then attempt to insert an ",(0,r.kt)("inlineCode",{parentName:"p"},"Animal")," that is not a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dog")," into the array, you will get an error at runtime."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Dog[] dogs = new Dog[10];\nAnimal[] animals = dogs; // works\nanimals[0] = new Animal() // fails at runtime\n")),(0,r.kt)("h2",{id:"generics-inside-the-java-virtual-machine"},"Generics inside the Java Virtual Machine"),(0,r.kt)("h3",{id:"type-erasure"},"Type erasure"),(0,r.kt)("p",null,"Java only added generics in version 1.5. Before that, instead of the generic ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayList<T>"),", there was just the class ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayList"),". When introducing generics, the Java team decided to maintain compatibility by actually erasing the generic type information at compile time, meaning that the byte code running in the Java Virtual Machine does not know anything about generics."),(0,r.kt)("p",null,"Example generic type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class AnimalWrapper<T extends Animal> {    \n    private T wrappedAnimal;\n\n    public AnimalWrapper(T wrappedAnimal) {\n        this.wrappedAnimal = wrappedAnimal;\n    }\n    \n    public T getWrappedAnimal() {\n        return this.wrappedAnimal;\n    }\n}\n")),(0,r.kt)("p",null,"The above type is compiled into the following ",(0,r.kt)("em",{parentName:"p"},"raw")," type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class AnimalWrapper {    \n    private Animal wrappedAnimal;\n\n    public AnimalWrapper(Animal wrappedAnimal) {\n        this.wrappedAnimal = wrappedAnimal;\n    }\n    \n    public Animal getWrappedAnimal() {\n        return this.wrappedAnimal;\n    }\n}\n")),(0,r.kt)("p",null,"Before erasing the types, the compiler checks for errors involving generic types. For example, it will forbid wrapping an ",(0,r.kt)("inlineCode",{parentName:"p"},"Animal")," in an ",(0,r.kt)("inlineCode",{parentName:"p"},"AnimalWrapper<Dog>"),". This means that, although the types are erased later on, the type variables are still respected."),(0,r.kt)("h3",{id:"cast-insertion"},"Cast insertion"),(0,r.kt)("p",null,"Although the compiler checks for generic type mismatches, that this in itself is not always enough. An example is the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<Dog> dogList = new ArrayList<Dog>();        \nList rawList = dogList;        \nAnimal animal = new Animal();\nrawList.add(animal);\n")),(0,r.kt)("p",null,"The above code generates warnings, but if you choose to ignore those, you now have an ",(0,r.kt)("inlineCode",{parentName:"p"},"Animal")," sitting inside a ",(0,r.kt)("inlineCode",{parentName:"p"},"List<Dog>"),". This is known as ",(0,r.kt)("em",{parentName:"p"},"heap pollution"),". But what about type safety?"),(0,r.kt)("p",null,"Java handles this in the compiler by inserting a cast whenever the code ",(0,r.kt)("em",{parentName:"p"},"reads")," from an expression with erased type. This means that, while we can add the ",(0,r.kt)("inlineCode",{parentName:"p"},"Animal")," to our ",(0,r.kt)("inlineCode",{parentName:"p"},"List<Dog>"),", we will get a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClassCastException")," if we try to retrieve that ",(0,r.kt)("inlineCode",{parentName:"p"},"Animal")," as a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dog"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<Dog> dogList = new ArrayList<Dog>();  \nList rawList = dogList;\nAnimal animal = new Animal();\nrawList.add(animal);\n\nAnimal retrievedAnimal = dogList.get(0); // works\nDog retrievedDog = dogList.get(0); // ClassCastException\n")),(0,r.kt)("p",null,"Compiled code is equivalent to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List dogList = new ArrayList();  \nList rawList = dogList;\nAnimal animal = new Animal();\nrawList.add(animal);\n\n// note that the erased List.get() method returns an Object\n// cast insertion generates casts based on target type\nAnimal retrievedAnimal = (Animal) dogList.get(0); // works\nDog retrievedDog = (Dog) dogList.get(0); // ClassCastException\n")),(0,r.kt)("p",null,"when we get the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClassCastException")," on the last line, that does not help us to find the actual source of the problem (which is the code where we inserted an ",(0,r.kt)("inlineCode",{parentName:"p"},"Animal")," inside a ",(0,r.kt)("inlineCode",{parentName:"p"},"List<Dog>"),"). When debugging such problem, it can be useful to use a ",(0,r.kt)("em",{parentName:"p"},"checked view")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"List"),". This checks the type of inserted objects as they are inserted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<Dog> dogList = \n    Collections.checkedList(new ArrayList<Dog>(), Dog.class);\n\nList rawList = dogList;\nAnimal animal = new Animal();\nrawList.add(animal); // ClassCastException\n")),(0,r.kt)("p",null,"Note the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"Dog.class"),", a ",(0,r.kt)("inlineCode",{parentName:"p"},"Class<Dog>")," instance which is needed to know the actual value of the type parameter for the ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," at runtime. "),(0,r.kt)("h3",{id:"bridge-methods"},"Bridge methods"),(0,r.kt)("p",null,"In some cases, basic type erasure would lead to problems with method overriding. In order to prevent this, the Java compiler sometimes generates ",(0,r.kt)("em",{parentName:"p"},"bridge methods"),"."),(0,r.kt)("p",null,"Example class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class GoodBoyList extends ArrayList<Dog>{\n    @Override\n    public boolean add(Dog dog) {\n        dog.pet():\n        return super.add(dog);\n    }\n}\n")),(0,r.kt)("p",null,"Now, let's say we use it this way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"GoodBoyList goodBoyList = new GoodBoyList();\nArrayList<Dog> dogList = goodBoyList;\ndogList.add(new Dog());\n")),(0,r.kt)("p",null,"After erasure, we have ",(0,r.kt)("inlineCode",{parentName:"p"},"add(Dog)")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"GoodBoyList")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"add(Object)")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayList"),". The last line of the code above calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," method on ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayList"),". We expect the ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," method from ",(0,r.kt)("inlineCode",{parentName:"p"},"GoodBoyList")," to override this, but the problem is the method signatures are different."),(0,r.kt)("p",null,"The compiler solves this by inserting a bridge method ",(0,r.kt)("inlineCode",{parentName:"p"},"add(Object)")," into the ",(0,r.kt)("inlineCode",{parentName:"p"},"GoodBoyList")," class. That method looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// overrides ArrayList.add(Object)\npublic boolean add(Object dog) { \n    return this.add((Dog) dog); // calls add(Dog) \n}\n")),(0,r.kt)("p",null,"Bridge methods can also be used when the return type varies. For example, imagine that our ",(0,r.kt)("inlineCode",{parentName:"p"},"GoodBoyList")," also overrides the ",(0,r.kt)("inlineCode",{parentName:"p"},"get(int)")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"public class GoodBoyList extends ArrayList<Dog>{\n    @Override\n    public Dog get(int i) {\n        Dog dog = super.get(i);\n        dog.pet():\n        return dog;\n    }\n}\n")),(0,r.kt)("p",null,"Note: inside the Java Virtual Machine, a method is defined by its name, the number and types of its arguments ",(0,r.kt)("em",{parentName:"p"},"and")," by its return type. This means that, after erasure, we again need a bridge method to make overriding work here. This way, we get two ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," methods in ",(0,r.kt)("inlineCode",{parentName:"p"},"GoodBoyList"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Dog get(int)"),": this is the actual method as defined in ",(0,r.kt)("inlineCode",{parentName:"li"},"GoodBoyList")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Object get(int)"),": this is a generated bridge method that overrides the ",(0,r.kt)("inlineCode",{parentName:"li"},"Object get(int)")," method in ",(0,r.kt)("inlineCode",{parentName:"li"},"ArrayList"),".")),(0,r.kt)("p",null,"The compiler takes care of the generation of bridge methods, so in principle you don\u2019t have to worry about them. However, they may show up in stack traces or explain why the compiler complains about certain pieces of code."),(0,r.kt)("h2",{id:"the-class-class"},"The Class class"),(0,r.kt)("p",null,"The Java language has a ",(0,r.kt)("inlineCode",{parentName:"p"},"Class<T>")," class. A ",(0,r.kt)("inlineCode",{parentName:"p"},"Class<T>")," object represent the class ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),". This class object can directly be obtained from the class ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),". It is also possible to to get a ",(0,r.kt)("inlineCode",{parentName:"p"},"Class")," object from an instance of a class, but in that case you are getting the actual run-time type of that instance, which may be a subclass of its compile-time type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Class<Dog> test = Dog.class; // ok\nClass<Dog> test2 = new Dog().getClass(); // error\nClass<? extends Dog> test3 = new Dog().getClass(); // ok\n")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Class")," class to get more information regarding the value of a type variable at run-time (so after type erasure). Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Test<T> {    \n    Test(T object, Class<T> objectClass) {}\n}\n\npublic class Main {\n    public static void main(String[] args) {            \n        Dog dog = new Dog();\n        new Test<Animal>(dog, Animal.class);\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"T")," is erased, but we can still have a look at ",(0,r.kt)("inlineCode",{parentName:"p"},"objectClass")," to check what kind of object we received."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Class<T>")," object is also very useful when using ",(0,r.kt)("inlineCode",{parentName:"p"},"reflection"),". For example, it can help you access the constructor(s) for the class."),(0,r.kt)("h2",{id:"generics-restrictions"},"Generics restrictions"),(0,r.kt)("p",null,"Type arguments cannot be primitives"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A type parameter must always be Object or a subclass of Object. This means that, for example, it is not possible to define an ",(0,r.kt)("inlineCode",{parentName:"li"},"ArrayList<int>"),".")),(0,r.kt)("p",null,"At runtime, all types are raw"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reason: type erasure"),(0,r.kt)("li",{parentName:"ul"},"Something like ",(0,r.kt)("inlineCode",{parentName:"li"},"if (object instanceof ArrayList<Dog>"),") will not compile because this check is impossible to execute at runtime."),(0,r.kt)("li",{parentName:"ul"},"The Class instances that you get are also always raw types. There is no ",(0,r.kt)("inlineCode",{parentName:"li"},"ArrayList<Dog>.class"),", only ",(0,r.kt)("inlineCode",{parentName:"li"},"ArrayList.class"),".")),(0,r.kt)("p",null,"Type variables cannot be instantiated"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you have a type variable T, you cannot do ",(0,r.kt)("inlineCode",{parentName:"li"},"new T(...)")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"new T[...] (array)"),". "),(0,r.kt)("li",{parentName:"ul"},"Reason: type erasure (you would be instantiating the erased value for T, not T itself)."),(0,r.kt)("li",{parentName:"ul"},"If you want to construct objects of type T or arrays of type T inside a generic method, you will have to ask the caller for the right object or array constructor or for a Class object."),(0,r.kt)("li",{parentName:"ul"},"While you cannot instantiate an array of type T, you can easily create an ",(0,r.kt)("inlineCode",{parentName:"li"},"ArrayList<T>"),". This is because ArrayList is a generic type itself, while in order to create an array of type T we would need the exact type T at runtime.")),(0,r.kt)("p",null,"It\u2019s impossible to create arrays of parameterized types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can declare arrays of a parameterized type (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"AnimalWrapper<Dog>[]"),")"),(0,r.kt)("li",{parentName:"ul"},"You cannot instantiate an array of a parameterized type. "),(0,r.kt)("li",{parentName:"ul"},"Reason: type erasure. At runtime, we would just get an ",(0,r.kt)("inlineCode",{parentName:"li"},"AnimalWrapper[]")," array that allows any kind of ",(0,r.kt)("inlineCode",{parentName:"li"},"AnimalWrapper")," without throwing an ",(0,r.kt)("inlineCode",{parentName:"li"},"ArrayStoreException"),". If that is what you want, you can create an ",(0,r.kt)("inlineCode",{parentName:"li"},"AnimalWrapper[]")," and then cast it to ",(0,r.kt)("inlineCode",{parentName:"li"},"AnimalWrapper<Dog>[]")," (this will generate compiler warnings though)."),(0,r.kt)("li",{parentName:"ul"},"The simplest solution is often to just create an ",(0,r.kt)("inlineCode",{parentName:"li"},"ArrayList<AnimalWrapper<Dog>>")," instead.")),(0,r.kt)("p",null,"Class type variables are not valid in static contexts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type variables defined at the level of the class cannot be used in static contexts (static variables and static methods). "),(0,r.kt)("li",{parentName:"ul"},"Example: if you have a class with type parameter T, you cannot have a static variable of type T. "),(0,r.kt)("li",{parentName:"ul"},"Reason: type erasure. You can use a class multiple times with different values for T but a static variable only exists once (on the raw type), so it\u2019s impossible to have a static variable with the exact type T for each of those values."),(0,r.kt)("li",{parentName:"ul"},"Remember that you can still use type variables in static contexts if they are not defined at the level of the class. For example, you can have a static method parameterized with type T if that type parameter is declared at the level of the method.")),(0,r.kt)("p",null,"Methods may not clash after erasure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You are not allowed to declare methods that would clash after erasure (meaning that, after erasure, there would be two methods with the same signature)."),(0,r.kt)("li",{parentName:"ul"},"This includes bridge methods! If you get a compiler error about methods clashing after erasure, it\u2019s possible that the clash is generated by the bridge methods generated by the compiler. This is why it\u2019s important to have some understanding of what these bridge methods are.")),(0,r.kt)("p",null,"Exceptions: it is not possible to throw objects of a generic class. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reason: type erasure. Catching instances of a generic class with a specific type parameter would require information that is not available at runtime."),(0,r.kt)("li",{parentName:"ul"},"It is still allowed to have a type variable in your throws declaration, as this is checked by the compiler.")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Core Java SE 9 for the Impatient (book by Cay S. Horstmann)")))}u.isMDXComponent=!0}}]);