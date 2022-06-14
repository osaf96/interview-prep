"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[5916],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return c}});var l=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=l.createContext({}),m=function(e){var a=l.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},u=function(e){var a=m(e.components);return l.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},p=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=m(t),c=n,k=p["".concat(s,".").concat(c)]||p[c]||d[c]||o;return t?l.createElement(k,r(r({ref:a},u),{},{components:t})):l.createElement(k,r({ref:a},u))}));function c(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,r=new Array(o);r[0]=p;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var m=2;m<o;m++)r[m]=t[m];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2534:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return d}});var l=t(7462),n=t(3366),o=(t(7294),t(3905)),r=["components"],i={title:"Java Platform Module System",description:"An overview of the Java Platform Module System",last_modified:new Date("2022-01-31T10:44:35.263Z")},s=void 0,m={unversionedId:"java/java-platform-module-system",id:"java/java-platform-module-system",title:"Java Platform Module System",description:"An overview of the Java Platform Module System",source:"@site/docs/java/java-platform-module-system.md",sourceDirName:"java",slug:"/java/java-platform-module-system",permalink:"/interview-prep/java/java-platform-module-system",draft:!1,tags:[],version:"current",frontMatter:{title:"Java Platform Module System",description:"An overview of the Java Platform Module System",last_modified:"2022-01-31T10:44:35.263Z"},sidebar:"docs",previous:{title:"Interfaces",permalink:"/interview-prep/java/interfaces"},next:{title:"Lambda expressions",permalink:"/interview-prep/java/lambda-expressions"}},u={},d=[{value:"Basic idea",id:"basic-idea",level:2},{value:"Levels of encapsulation",id:"levels-of-encapsulation",level:2},{value:"Defining a module",id:"defining-a-module",level:2},{value:"Automatic modules and the unnamed module",id:"automatic-modules-and-the-unnamed-module",level:2},{value:"The modular JDK",id:"the-modular-jdk",level:2},{value:"Before modules",id:"before-modules",level:3},{value:"Modular JDK",id:"modular-jdk",level:3},{value:"Adjusting your own applications",id:"adjusting-your-own-applications",level:2},{value:"Alternative for modularizing applications: OSGi",id:"alternative-for-modularizing-applications-osgi",level:2},{value:"Resources",id:"resources",level:2}],p={toc:d};function c(e){var a=e.components,i=(0,n.Z)(e,r);return(0,o.kt)("wrapper",(0,l.Z)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An overview of the Java Platform Module System"),(0,o.kt)("h2",{id:"basic-idea"},"Basic idea"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Introduced in Java 9"),(0,o.kt)("li",{parentName:"ul"},'Also known as "Project Jigsaw"'),(0,o.kt)("li",{parentName:"ul"},"A module encapsulates packages and the classes it contains, choosing what to expose to the outside world"),(0,o.kt)("li",{parentName:"ul"},"Designed to structure the code in the JDK",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Hiding access to internal classes",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Some internal classes are public, because they are used outside of their package, but still shouldn't just be available to everybody"))),(0,o.kt)("li",{parentName:"ul"},"Reducing footprint: ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"JDK is split into several modules, each their own JAR, and you only need to load the modules your application actually uses"),(0,o.kt)("li",{parentName:"ul"},"Huge benefit for IoT applications running on limited hardware"))),(0,o.kt)("li",{parentName:"ul"},"Maintainability:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Modules are explicit about how they depend on each other, making them easier to reason about than just a huge number of packages"),(0,o.kt)("li",{parentName:"ul"},"Deprecation: ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Functionality can now be deprecated at the module level"),(0,o.kt)("li",{parentName:"ul"},"Explicit dependencies between modules make impact of deprecation more clear"))))))),(0,o.kt)("li",{parentName:"ul"},"Supported by the Java compiler and virtual machine, does not rely on class loaders like other module systems (such as OGSi)")),(0,o.kt)("h2",{id:"levels-of-encapsulation"},"Levels of encapsulation"),(0,o.kt)("p",null,"Lowest level of encapsulation: classes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Private members only accessible within class itself"),(0,o.kt)("li",{parentName:"ul"},"Package private (default access level) members: also accessible from same package"),(0,o.kt)("li",{parentName:"ul"},"Protected members: also accessible to subclasses"),(0,o.kt)("li",{parentName:"ul"},"Public members: accessible from everywhere")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Access modifiers",src:t(8026).Z,width:"632",height:"192"})),(0,o.kt)("p",null,"(",(0,o.kt)("a",{href:"https://www.programcreek.com/2011/11/java-access-level-public-protected-private/",target:"_blank",rel:"nofollow noopener noreferrer"},"image source ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"}))),")"),(0,o.kt)("p",null,"Higher level of encapsulation: packages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Package can make some classes public to expose them and keep the rest package private"),(0,o.kt)("li",{parentName:"ul"},"Limitation: Java has no concept of nested packages!",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you have package top and package top.nested, code in top cannot access package private code in top.nested or vice versa")))),(0,o.kt)("p",null,"Modules provide an even higher level of encapsulation!"),(0,o.kt)("h2",{id:"defining-a-module"},"Defining a module"),(0,o.kt)("p",null,"Module declaration sits in module-info.java file in base directory. This file is compiled into a JAR in order to make the JAR a modular JAR."),(0,o.kt)("p",null,"Example module-info.java file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"module java.sql {\n    exports java.sql;\n    exports javax.sql;\n    exports javax.transaction.xa;\n    \n    requires java.logging;\n    requires java.xml;\n}\n")),(0,o.kt)("p",null,"Possible contents of module declaration:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"module ",(0,o.kt)("em",{parentName:"li"},"module.name"),": define the name of the module (by convention, the same as the main package name)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Note: module names are only used in module declarations! In normal code, you still just import packages and classes"))),(0,o.kt)("li",{parentName:"ul"},"exports ",(0,o.kt)("em",{parentName:"li"},"package.name"),": this module exports public members in package ",(0,o.kt)("em",{parentName:"li"},"package.name"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Note: you cannot have two packages with the same name in different modules, even if they are not exported"))),(0,o.kt)("li",{parentName:"ul"},"exports ",(0,o.kt)("em",{parentName:"li"},"package.name")," to ",(0,o.kt)("em",{parentName:"li"},"module.name"),": this module exports public members in package ",(0,o.kt)("em",{parentName:"li"},"package.name"),", but only to module ",(0,o.kt)("em",{parentName:"li"},"module.name")),(0,o.kt)("li",{parentName:"ul"},"opens ",(0,o.kt)("em",{parentName:"li"},"package.name"),": this module allows reflective access to members of package ",(0,o.kt)("em",{parentName:"li"},"package.name"),", including private members",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Reflective access is used by things like ORMs, XML or JSON object mappers, ..."),(0,o.kt)("li",{parentName:"ul"},"You can also declare an entire module as open to make it open all of its packages"))),(0,o.kt)("li",{parentName:"ul"},"opens ",(0,o.kt)("em",{parentName:"li"},"package.name")," to ",(0,o.kt)("em",{parentName:"li"},"module.name"),": this module allows reflective access to members of package ",(0,o.kt)("em",{parentName:"li"},"package.name"),", including private members"),(0,o.kt)("li",{parentName:"ul"},"requires ",(0,o.kt)("em",{parentName:"li"},"module.name"),": this module depends on ",(0,o.kt)("em",{parentName:"li"},"module.name")),(0,o.kt)("li",{parentName:"ul"},"requires transitive ",(0,o.kt)("em",{parentName:"li"},"module.name"),": this module depends on ",(0,o.kt)("em",{parentName:"li"},"module.name")," and any module requiring this module implicitly also requires ",(0,o.kt)("em",{parentName:"li"},"module.name"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This is not the case for a normal require! In that case, a module requiring this module would also need to explicitly require ",(0,o.kt)("em",{parentName:"li"},"module.name")," in order to be able to use it"),(0,o.kt)("li",{parentName:"ul"},"Use case: module A depends on module B and has classes that return instances of module B -> code using those classes in module A also needs module B"),(0,o.kt)("li",{parentName:"ul"},"Extreme use case: aggregator modules",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Aggregator modules consist of nothing more than transitive requires, making it easy to require a bunch of related modules within one requires statement"),(0,o.kt)("li",{parentName:"ul"},"Example: the java.se module"))))),(0,o.kt)("li",{parentName:"ul"},"provides ",(0,o.kt)("em",{parentName:"li"},"class.name")," with ",(0,o.kt)("em",{parentName:"li"},"class.name.implementation"),": this module provides an implementation of ",(0,o.kt)("em",{parentName:"li"},"class.name")," that others can consume",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Designed for use with ",(0,o.kt)("em",{parentName:"li"},"service loaders"),", a Java feature where there is an interface defining a service and one or more implementations of that service that can be obtained from the ",(0,o.kt)("inlineCode",{parentName:"li"},"ServiceLoader")," class"))),(0,o.kt)("li",{parentName:"ul"},"uses ",(0,o.kt)("em",{parentName:"li"},"class.name"),": the module declares itself as a consumer of service ",(0,o.kt)("em",{parentName:"li"},"class.name"))),(0,o.kt)("h2",{id:"automatic-modules-and-the-unnamed-module"},"Automatic modules and the unnamed module"),(0,o.kt)("p",null,"When executing a program, you can now also specify a module path (path where modules can be found) in addition to the class path"),(0,o.kt)("p",null,"Every JAR that is placed on the module path and does not contain a module-info.class file becomes an ",(0,o.kt)("em",{parentName:"p"},"automatic module"),". "),(0,o.kt)("p",null,"Properties of an automatic module:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Implicitly requires all other modules"),(0,o.kt)("li",{parentName:"ul"},"Exports and opens all of its packages"),(0,o.kt)("li",{parentName:"ul"},"Module name:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If the JAR manifest contains an entry with key ",(0,o.kt)("inlineCode",{parentName:"li"},"Automatic-Module-Name"),", than that name is used"),(0,o.kt)("li",{parentName:"ul"},"Otherwise, the module name is obtained from the JAR file name by dropping any trailing version numbers and then replacing each sequence of non-alphanumeric characters with a dot",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Example: commons-csv-1.4.jar gets the module name commons.csv")))))),(0,o.kt)("p",null,"Every class that is not on the module path is part of the ",(0,o.kt)("em",{parentName:"p"},"unnamed module")),(0,o.kt)("p",null,"Properties of the unnamed module:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Implicitly requires all other modules"),(0,o.kt)("li",{parentName:"ul"},"Cannot be accessed by any named module",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This means that, if you want to make your own application code modular as well, you must make sure all of your dependencies are named modules (potentially by turning them into automatic modules)")))),(0,o.kt)("h2",{id:"the-modular-jdk"},"The modular JDK"),(0,o.kt)("h3",{id:"before-modules"},"Before modules"),(0,o.kt)("p",null,"JDK: one huge library with all functionality spread across a huge number of packages and without a clear structure in the way things depend on each other"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"JDK JAR before modules",src:t(8062).Z,width:"486",height:"132"})),(0,o.kt)("h3",{id:"modular-jdk"},"Modular JDK"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"More than 90 modules"),(0,o.kt)("li",{parentName:"ul"},"Clearly defined and acyclic dependencies between the modules"),(0,o.kt)("li",{parentName:"ul"},"All modules directly or indirectly depend on java.base which contains the most basic functionality",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Note: Every user-defined module also implicitly depends on java.base")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"JDK JARs after modules",src:t(1378).Z,width:"541",height:"426"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"JDK modules dependencies",src:t(7670).Z,width:"753",height:"391"})),(0,o.kt)("p",null,"(",(0,o.kt)("a",{href:"https://dzone.com/articles/the-java-platform-module-system",target:"_blank",rel:"nofollow noopener noreferrer"},"image source ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"}))),")"),(0,o.kt)("h2",{id:"adjusting-your-own-applications"},"Adjusting your own applications"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You are not required to make your own applications modular (see the part about the unnamed module above)"),(0,o.kt)("li",{parentName:"ul"},"You may run into trouble with older applications that access internal classes that are no longer exported from the modules that contain them",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"By default, Java 9 only gives you a warning about illegal access. However, it is recommended to run your applications with the ",(0,o.kt)("inlineCode",{parentName:"li"},"--illegal-access=deny")," flag which blocks all illegal access and will be the default in newer Java versions"),(0,o.kt)("li",{parentName:"ul"},"You can still allow your code to access some internal classes by using the ",(0,o.kt)("inlineCode",{parentName:"li"},"--add-exports")," flag",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Syntax: ",(0,o.kt)("inlineCode",{parentName:"li"},"--add-exports module.name/package.name=module.to.export.it.to")),(0,o.kt)("li",{parentName:"ul"},"Example, exporting to the unnamed module: ",(0,o.kt)("inlineCode",{parentName:"li"},"--add-exports java.sql.rowset/com.sun.rowset=ALL_UNNAMED")))),(0,o.kt)("li",{parentName:"ul"},"There is a similar ",(0,o.kt)("inlineCode",{parentName:"li"},"--add-opens")," flag for reflective access"))),(0,o.kt)("li",{parentName:"ul"},"Some modules in the Java SE platform are not accessible from the unnamed module by default:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Modules: ",(0,o.kt)("em",{parentName:"li"},"java.activation, java.corba, java.transaction, java.xml.bind, java.xml.ws, java.xml.ws.annotation")),(0,o.kt)("li",{parentName:"ul"},"These modules are deprecated and may be removed from the Java SE platform in the future"),(0,o.kt)("li",{parentName:"ul"},"Can access them using ",(0,o.kt)("inlineCode",{parentName:"li"},"--add-module")," command line flag, example ",(0,o.kt)("inlineCode",{parentName:"li"},"--add-module java.xml.bind")),(0,o.kt)("li",{parentName:"ul"},"The packages are included in Java EE servers",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Would lead to conflicts if these packages were also required from the Java platform")))))),(0,o.kt)("h2",{id:"alternative-for-modularizing-applications-osgi"},"Alternative for modularizing applications: OSGi"),(0,o.kt)("p",null,"Things that OSGi supports that the Java Platform Module System does not offer:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Versioning:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Specifying which version of another module your module needs"),(0,o.kt)("li",{parentName:"ul"},"Multiple versions of a module being used in the same program",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'This solves "JAR hell", where you run into issues because dependency A and dependency B each depend on a different version of dependency C'))))),(0,o.kt)("li",{parentName:"ul"},"Dynamic loading, unloading and updating of modules at runtime",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Very useful for IoT: perform on-the-fly updates by sending only modules that have actually changed"))),(0,o.kt)("li",{parentName:"ul"},"Potentially cyclic dependencies between modules")),(0,o.kt)("p",null,"Because of these kinds of advantages, OSGi could be a better choice for modularizing your own applications (while still getting the benefits of the modularized Java JDK as well)"),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Core Java SE 9 for the Impatient (book by Cay S. Horstmann)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://dzone.com/articles/the-java-platform-module-system",target:"_blank",rel:"nofollow noopener noreferrer"},"The Java Platform Module System ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"})))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://www.jrebel.com/blog/java-9-modules-cheat-sheet",target:"_blank",rel:"nofollow noopener noreferrer"},"Java Platform Module System Cheat Sheet ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"})))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://stackoverflow.com/questions/46502453/whats-the-difference-between-requires-and-requires-transitive-statements-in-jav",target:"_blank",rel:"nofollow noopener noreferrer"},"What's the difference between requires and requires transitive statements in Java 9? ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"})))),(0,o.kt)("li",{parentName:"ul"},"Java 9, OSGi and the Future of Modularity ",(0,o.kt)("a",{href:"https://www.infoq.com/articles/java9-osgi-future-modularity/",target:"_blank",rel:"nofollow noopener noreferrer"},"part 1 ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"})))," ",(0,o.kt)("a",{href:"https://www.infoq.com/articles/java9-osgi-future-modularity-part-2/",target:"_blank",rel:"nofollow noopener noreferrer"},"part 2 ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"}))))))}c.isMDXComponent=!0},8026:function(e,a,t){a.Z=t.p+"assets/images/access-modifiers-329e9dcaca3a47a65e02e0ad8eae7703.png"},8062:function(e,a,t){a.Z=t.p+"assets/images/jdk-jar-before-modules-4dd8a2ef40412c7dcdd254eab1de6c48.png"},1378:function(e,a,t){a.Z=t.p+"assets/images/jdk-jars-after-modules-6102461ece5e825b1f15c48e7d3ee38c.png"},7670:function(e,a,t){a.Z=t.p+"assets/images/jdk-modules-dependencies-b36e3fc27a2ae9c6bc4326fce4d98f04.png"}}]);