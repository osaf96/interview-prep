(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var r=a(1),n=a(9),o=(a(0),a(231)),i={title:"Data schema migration",description:"Some techniques for migrating the structure of your data",last_modified:new Date("2020-06-14T16:51:13.000Z")},l={id:"data/data-schema-migration",title:"Data schema migration",description:"Some techniques for migrating the structure of your data",source:"@site/docs\\data\\data-schema-migration.md",permalink:"/data/data-schema-migration",sidebar:"docs",previous:{title:"CAP theorem",permalink:"/data/cap-theorem"},next:{title:"SQL, NoSQL, NewSQL",permalink:"/data/sql-nosql-newsql"}},c=[{value:"Big Bang",id:"big-bang",children:[]},{value:"Code First or Data First",id:"code-first-or-data-first",children:[{value:"Complication: rolling code deploys",id:"complication-rolling-code-deploys",children:[]},{value:"Schemaless databases and delayed data schema migration",id:"schemaless-databases-and-delayed-data-schema-migration",children:[]}]},{value:"Expand-Contract migrations",id:"expand-contract-migrations",children:[]},{value:"Resources",id:"resources",children:[]}],s={rightToc:c};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Some techniques for migrating the structure of your data"),Object(o.b)("h2",{id:"big-bang"},"Big Bang"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Stop system"),Object(o.b)("li",{parentName:"ul"},"Deploy new code and migrate DB schema"),Object(o.b)("li",{parentName:"ul"},"Start system")),Object(o.b)("p",null,"Simple approach but not doable if system needs to keep running!"),Object(o.b)("h2",{id:"code-first-or-data-first"},"Code First or Data First"),Object(o.b)("p",null,"Code First:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Deploy new code code that is compatible with both old and new schema"),Object(o.b)("li",{parentName:"ul"},"Migrate DB schema"),Object(o.b)("li",{parentName:"ul"},"Later on, you could remove support for the old schema from the code")),Object(o.b)("p",null,"Data First:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Migrate DB schema in a way that is compatible with both old and new code"),Object(o.b)("li",{parentName:"ul"},"Deploy new code"),Object(o.b)("li",{parentName:"ul"},"Later on, you could remove support for the old code from the DB schema")),Object(o.b)("h3",{id:"complication-rolling-code-deploys"},"Complication: rolling code deploys"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In order to reduce deployment risk, new code is typically deployed using a rolling approach where not all instances of the running code are upgraded at the same time",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If something is wrong with the new code, it can be detected before all requests are affected by it"))),Object(o.b)("li",{parentName:"ul"},"This means that part of the system is running new code and part of the system is still running old code"),Object(o.b)("li",{parentName:"ul"},"Challenges for the migration:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Need to make sure that different versions of the code running at the same time are able to read each other's written data",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Example: old code reading an object saved by new code"))),Object(o.b)("li",{parentName:"ul"},"Need to make sure that different versions of the code running at the same time don't accidentally throw away each other's written data",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Example: old code retrieving an object saved by new code and saving it again"))))),Object(o.b)("li",{parentName:"ul"},"In some cases, it might be useful to deploy the code in more than one step, especially when performing Data First migrations:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Deploy new code that still writes according to old structure but is aware of new structure (and can write according to new structure if that is needed to prevent data loss)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"During this step, all data is still in old structure, including data written by the new code"))),Object(o.b)("li",{parentName:"ol"},"Once that code runs everywhere, deploy new code that writes according to new structure but is still aware of old structure",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"During this step, some data will already have new structure (but code from the previous step can handle that)"))),Object(o.b)("li",{parentName:"ol"},"Migrate all data with old structure to new structure"),Object(o.b)("li",{parentName:"ol"},"Later on, support for the old structure could be removed from the code (once you're sure that you won't need to roll back to a version of the database that has the old structure in it)")))),Object(o.b)("h3",{id:"schemaless-databases-and-delayed-data-schema-migration"},"Schemaless databases and delayed data schema migration"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In case of schemaless databases, you can have data with different structures sitting together"),Object(o.b)("li",{parentName:"ul"},"This means you're not forced to migrate the structure of your existing data at all. However, if you have different structures in the database, your code must be able to deal with the different structures."),Object(o.b)("li",{parentName:"ul"},"This is more or less a mix of Code First and Data First",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The database schema is already compatible with both old and new code (similar to Data First)"),Object(o.b)("li",{parentName:"ul"},"After you the new code is deployed, you might want to adjust the structure of existing data to match the new structure (similar to Code first)"))),Object(o.b)("li",{parentName:"ul"},"The step of migrating existing data can be delayed for as long as you like, or even doesn't need to happen at all",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"In this case need to make a tradeoff between the cost and risk associated with migrating the data versus the cost and risk associated with having data with different structures sitting together and thus making code maintenance harder")))),Object(o.b)("h2",{id:"expand-contract-migrations"},"Expand-Contract migrations"),Object(o.b)("p",null,"Very useful with ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/processes-techniques/feature-flags"}),"feature flags"),", where two versions of code may be running alongside each other for quite some time or the code might switch back and forth between the old and new version."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Expand database schema to support both the old and new version"),Object(o.b)("li",{parentName:"ul"},"Once code settles on a specific fixed version, contract the database schema to only support that version")),Object(o.b)("p",null,"Example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"System has orders"),Object(o.b)("li",{parentName:"ul"},"Data for each order contains the specific address information for that order (potentially duplicated across many different orders for the same customer)"),Object(o.b)("li",{parentName:"ul"},"New approach toggled by feature flag: separate management of customer addresses, and orders referring to those addresses")),Object(o.b)("p",null,"Approach for example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Keep current address column in Order table"),Object(o.b)("li",{parentName:"ul"},"Add nullable column in Order table which references Address table (current code will ignore this column)"),Object(o.b)("li",{parentName:"ul"},"Change code so it still fills the old address information columns on Order but also creates Address records and links to them from Order. This concept is called ",Object(o.b)("em",{parentName:"li"},"Duplicate Writes"),"."),Object(o.b)("li",{parentName:"ul"},"Perform a one-time data migration, using the existing data in the address information columns to link each Order to an Address. Once this migration is done, the reference from Order to Address can be made non-nullable."),Object(o.b)("li",{parentName:"ul"},"At this point, we can support both states of the feature flag.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Code for old behavior will look at the original address column in the Order table"),Object(o.b)("li",{parentName:"ul"},"Code for new behavior will look at new Address table and the new column in the Order table that references these addresses"))),Object(o.b)("li",{parentName:"ul"},"Once the feature has been permanently turned on, we can remove the old address information columns from Order (and the code writing to them) as they are not used anymore.")),Object(o.b)("p",null,"Verifying correctness of migration: ",Object(o.b)("em",{parentName:"p"},"Dark Reads")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"When reading data (example: getting address info for a specific order), you read from both places where the data is available"),Object(o.b)("li",{parentName:"ul"},"Trigger an alert if data is not identical")),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{href:"https://try.split.io/oreilly-feature-flag-best-practices",target:"_blank",rel:"nofollow noopener noreferrer"},"Feature Flag Best Practices ebook ",Object(o.b)("svg",{class:"embedded-fa-icon"},Object(o.b)("use",{href:"#external-link-alt"})))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{href:"https://stripe.com/blog/online-migrations",target:"_blank",rel:"nofollow noopener noreferrer"},"Online migrations at scale ",Object(o.b)("svg",{class:"embedded-fa-icon"},Object(o.b)("use",{href:"#external-link-alt"}))))))}d.isMDXComponent=!0},231:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),d=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},u=function(e){var t=d(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,p=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return a?n.a.createElement(p,l({ref:t},s,{components:a})):n.a.createElement(p,l({ref:t},s))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);