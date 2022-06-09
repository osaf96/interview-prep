"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[1502],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(a),p=n,h=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5706:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],l={title:"Data schema migration",description:"Some techniques for migrating the structure of your data",last_modified:new Date("2020-06-14T16:51:13.000Z")},s=void 0,d={unversionedId:"data/data-schema-migration",id:"data/data-schema-migration",title:"Data schema migration",description:"Some techniques for migrating the structure of your data",source:"@site/docs/data/data-schema-migration.md",sourceDirName:"data",slug:"/data/data-schema-migration",permalink:"/interview-prep/data/data-schema-migration",draft:!1,tags:[],version:"current",frontMatter:{title:"Data schema migration",description:"Some techniques for migrating the structure of your data",last_modified:"2020-06-14T16:51:13.000Z"},sidebar:"docs",previous:{title:"CAP theorem",permalink:"/interview-prep/data/cap-theorem"},next:{title:"SQL, NoSQL, NewSQL",permalink:"/interview-prep/data/sql-nosql-newsql"}},c={},u=[{value:"Big Bang",id:"big-bang",level:2},{value:"Code First or Data First",id:"code-first-or-data-first",level:2},{value:"Complication: rolling code deploys",id:"complication-rolling-code-deploys",level:3},{value:"Schemaless databases and delayed data schema migration",id:"schemaless-databases-and-delayed-data-schema-migration",level:3},{value:"Expand-Contract migrations",id:"expand-contract-migrations",level:2},{value:"Resources",id:"resources",level:2}],m={toc:u};function p(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Some techniques for migrating the structure of your data"),(0,o.kt)("h2",{id:"big-bang"},"Big Bang"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Stop system"),(0,o.kt)("li",{parentName:"ul"},"Deploy new code and migrate DB schema"),(0,o.kt)("li",{parentName:"ul"},"Start system")),(0,o.kt)("p",null,"Simple approach but not doable if system needs to keep running!"),(0,o.kt)("h2",{id:"code-first-or-data-first"},"Code First or Data First"),(0,o.kt)("p",null,"Code First:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deploy new code code that is compatible with both old and new schema"),(0,o.kt)("li",{parentName:"ul"},"Migrate DB schema"),(0,o.kt)("li",{parentName:"ul"},"Later on, you could remove support for the old schema from the code")),(0,o.kt)("p",null,"Data First:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Migrate DB schema in a way that is compatible with both old and new code"),(0,o.kt)("li",{parentName:"ul"},"Deploy new code"),(0,o.kt)("li",{parentName:"ul"},"Later on, you could remove support for the old code from the DB schema")),(0,o.kt)("h3",{id:"complication-rolling-code-deploys"},"Complication: rolling code deploys"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In order to reduce deployment risk, new code is typically deployed using a rolling approach where not all instances of the running code are upgraded at the same time",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If something is wrong with the new code, it can be detected before all requests are affected by it"))),(0,o.kt)("li",{parentName:"ul"},"This means that part of the system is running new code and part of the system is still running old code"),(0,o.kt)("li",{parentName:"ul"},"Challenges for the migration:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Need to make sure that different versions of the code running at the same time are able to read each other's written data",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Example: old code reading an object saved by new code"))),(0,o.kt)("li",{parentName:"ul"},"Need to make sure that different versions of the code running at the same time don't accidentally throw away each other's written data",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Example: old code retrieving an object saved by new code and saving it again"))))),(0,o.kt)("li",{parentName:"ul"},"In some cases, it might be useful to deploy the code in more than one step, especially when performing Data First migrations:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Deploy new code that still writes according to old structure but is aware of new structure (and can write according to new structure if that is needed to prevent data loss)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"During this step, all data is still in old structure, including data written by the new code"))),(0,o.kt)("li",{parentName:"ol"},"Once that code runs everywhere, deploy new code that writes according to new structure but is still aware of old structure",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"During this step, some data will already have new structure (but code from the previous step can handle that)"))),(0,o.kt)("li",{parentName:"ol"},"Migrate all data with old structure to new structure"),(0,o.kt)("li",{parentName:"ol"},"Later on, support for the old structure could be removed from the code (once you're sure that you won't need to roll back to a version of the database that has the old structure in it)")))),(0,o.kt)("h3",{id:"schemaless-databases-and-delayed-data-schema-migration"},"Schemaless databases and delayed data schema migration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In case of schemaless databases, you can have data with different structures sitting together"),(0,o.kt)("li",{parentName:"ul"},"This means you're not forced to migrate the structure of your existing data at all. However, if you have different structures in the database, your code must be able to deal with the different structures."),(0,o.kt)("li",{parentName:"ul"},"This is more or less a mix of Code First and Data First",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The database schema is already compatible with both old and new code (similar to Data First)"),(0,o.kt)("li",{parentName:"ul"},"After you the new code is deployed, you might want to adjust the structure of existing data to match the new structure (similar to Code first)"))),(0,o.kt)("li",{parentName:"ul"},"The step of migrating existing data can be delayed for as long as you like, or even doesn't need to happen at all",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In this case need to make a tradeoff between the cost and risk associated with migrating the data versus the cost and risk associated with having data with different structures sitting together and thus making code maintenance harder")))),(0,o.kt)("h2",{id:"expand-contract-migrations"},"Expand-Contract migrations"),(0,o.kt)("p",null,"Very useful with ",(0,o.kt)("a",{parentName:"p",href:"/processes-techniques/feature-flags"},"feature flags"),", where two versions of code may be running alongside each other for quite some time or the code might switch back and forth between the old and new version."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Expand database schema to support both the old and new version"),(0,o.kt)("li",{parentName:"ul"},"Once code settles on a specific fixed version, contract the database schema to only support that version")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"System has orders"),(0,o.kt)("li",{parentName:"ul"},"Data for each order contains the specific address information for that order (potentially duplicated across many different orders for the same customer)"),(0,o.kt)("li",{parentName:"ul"},"New approach toggled by feature flag: separate management of customer addresses, and orders referring to those addresses")),(0,o.kt)("p",null,"Approach for example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Keep current address column in Order table"),(0,o.kt)("li",{parentName:"ul"},"Add nullable column in Order table which references Address table (current code will ignore this column)"),(0,o.kt)("li",{parentName:"ul"},"Change code so it still fills the old address information columns on Order but also creates Address records and links to them from Order. This concept is called ",(0,o.kt)("em",{parentName:"li"},"Duplicate Writes"),"."),(0,o.kt)("li",{parentName:"ul"},"Perform a one-time data migration, using the existing data in the address information columns to link each Order to an Address. Once this migration is done, the reference from Order to Address can be made non-nullable."),(0,o.kt)("li",{parentName:"ul"},"At this point, we can support both states of the feature flag.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Code for old behavior will look at the original address column in the Order table"),(0,o.kt)("li",{parentName:"ul"},"Code for new behavior will look at new Address table and the new column in the Order table that references these addresses"))),(0,o.kt)("li",{parentName:"ul"},"Once the feature has been permanently turned on, we can remove the old address information columns from Order (and the code writing to them) as they are not used anymore.")),(0,o.kt)("p",null,"Verifying correctness of migration: ",(0,o.kt)("em",{parentName:"p"},"Dark Reads")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When reading data (example: getting address info for a specific order), you read from both places where the data is available"),(0,o.kt)("li",{parentName:"ul"},"Trigger an alert if data is not identical")),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://try.split.io/oreilly-feature-flag-best-practices",target:"_blank",rel:"nofollow noopener noreferrer"},"Feature Flag Best Practices ebook ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"})))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://stripe.com/blog/online-migrations",target:"_blank",rel:"nofollow noopener noreferrer"},"Online migrations at scale ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"}))))))}p.isMDXComponent=!0}}]);