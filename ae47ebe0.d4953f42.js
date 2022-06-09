(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{205:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(1),r=a(9),l=(a(0),a(231)),i={title:"Transaction isolation levels",description:"An overview of the transaction isolation levels offered by relational databases",last_modified:new Date("2020-05-30T13:54:15.000Z")},o={id:"data/sql/transaction-isolation-levels",title:"Transaction isolation levels",description:"An overview of the transaction isolation levels offered by relational databases",source:"@site/docs\\data\\sql\\transaction-isolation-levels.md",permalink:"/interview-prep/data/sql/transaction-isolation-levels",sidebar:"docs",previous:{title:"Optimistic and pessimistic locking in SQL",permalink:"/interview-prep/data/sql/optimistic-pessimistic-locking-sql"},next:{title:"Concurrency (Java)",permalink:"/interview-prep/java/concurrency"}},c=[{value:"Basic idea",id:"basic-idea",children:[]},{value:"Concurrency phenomena",id:"concurrency-phenomena",children:[]},{value:"Isolation levels",id:"isolation-levels",children:[{value:"Read uncommitted",id:"read-uncommitted",children:[]},{value:"Read committed",id:"read-committed",children:[]},{value:"Repeatable read",id:"repeatable-read",children:[]},{value:"Serializable",id:"serializable",children:[]}]},{value:"Resources",id:"resources",children:[]}],s={rightToc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"An overview of the transaction isolation levels offered by relational databases"),Object(l.b)("h2",{id:"basic-idea"},"Basic idea"),Object(l.b)("p",null,"Goal: Limiting the ways that concurrently executing transactions can affect each other"),Object(l.b)("p",null,"SQL standard defines phenomena that need to be prevented at different isolation levels."),Object(l.b)("p",null,"Note that different implementations may behave in widely different ways, even if they comply with the standard!"),Object(l.b)("h2",{id:"concurrency-phenomena"},"Concurrency phenomena"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Dirty Read"),": A transaction reads data written by a concurrent uncommitted transaction."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Non-repeatable Read"),": A transaction re-reads data it has previously read and finds that data has been modified by another transaction (that committed since the initial read)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Phantom Read"),": A transaction re-executes a query returning a set of rows that satisfy a search condition and finds that the set of rows satisfying the condition has changed due to another recently-committed transaction."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Serialization Anomaly"),": The result of successfully committing a group of transactions is inconsistent with all possible orderings of running those transactions one at a time.")),Object(l.b)("h2",{id:"isolation-levels"},"Isolation levels"),Object(l.b)("p",null,"(table according to SQL standard)"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Isolation Level"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Dirty Read"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Non-repeatable Read"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Phantom Read"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Serialization Anomaly"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Read uncommitted"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Possible"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Possible"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Possible"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Possible")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Read committed"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not possible"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Possible"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Possible"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Possible")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Repeatable read"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not possible"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not possible"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Possible"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Possible")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Serializable"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not possible"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not possible"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not possible"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not possible")))),Object(l.b)("h3",{id:"read-uncommitted"},"Read uncommitted"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Least restrictive",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Even allows Dirty Reads")))),Object(l.b)("h3",{id:"read-committed"},"Read committed"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Typical default transaction isolation level"),Object(l.b)("li",{parentName:"ul"},"Prevents dirty reads"),Object(l.b)("li",{parentName:"ul"},"Can cause statements to block if they depend on data that another transaction has changed but not committed yet"),Object(l.b)("li",{parentName:"ul"},"Identical SELECT statements within the same transaction might still return different data if other transactions have committed in the meantime")),Object(l.b)("h3",{id:"repeatable-read"},"Repeatable read"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Forbids ",Object(l.b)("em",{parentName:"li"},"Dirty Reads")," "),Object(l.b)("li",{parentName:"ul"},"Forbids ",Object(l.b)("em",{parentName:"li"},"Non-repeatable Reads"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Only applies to the ",Object(l.b)("em",{parentName:"li"},"contents")," of rows that were previously read")))),Object(l.b)("p",null,"Implementations:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"SQL Server",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Implemented using DB-level locking (basically pessimistic locking)"),Object(l.b)("li",{parentName:"ul"},"Obtains read lock on rows that you read, causing other transactions attempting to update the row to block until you commit or roll back your transaction"))),Object(l.b)("li",{parentName:"ul"},"PostgreSQL",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Transaction sees a snapshot of the database taken at the start of your transaction (this also prevents ",Object(l.b)("em",{parentName:"li"},"Phantom Reads"),")",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"No read locks needed"),Object(l.b)("li",{parentName:"ul"},"All data within the snapshot is consistent with each other"))),Object(l.b)("li",{parentName:"ul"},"Does not guarantee that the data has not changed in the meantime",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Still allows other transactions to change the data"),Object(l.b)("li",{parentName:"ul"},"Snapshot might get stale if other transactions are changing the data while your transaction is running"),Object(l.b)("li",{parentName:"ul"},"Protection mechanism: PostgreSQL fails your transaction if it tries to update data after another transaction has also changed it (basically optimistic locking)"))),Object(l.b)("li",{parentName:"ul"},"Note: SQL Server also offers a Snapshot isolation level which behaves similarly to the PostgreSQL Repeatable Read isolation level")))),Object(l.b)("h3",{id:"serializable"},"Serializable"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Forbids ",Object(l.b)("em",{parentName:"li"},"Dirty Reads"),", ",Object(l.b)("em",{parentName:"li"},"Non-repeatable Reads")," and ",Object(l.b)("em",{parentName:"li"},"Phantom Reads")),Object(l.b)("li",{parentName:"ul"},"Also requires concurrent transactions to behave in a serializable fashion",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"When a set of transactions execute concurrently, there must be some possible sequential execution of the transactions that yields the same results as the results of the concurrent execution"),Object(l.b)("li",{parentName:"ul"},"Very strong guarantee, which essentially prevents all phenomena caused by concurrent execution")))),Object(l.b)("p",null,"Implementations:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"SQL Server",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Implemented using DB-level locking (basically pessimistic locking)"),Object(l.b)("li",{parentName:"ul"},"Simple row locks not sufficient for preventing ",Object(l.b)("em",{parentName:"li"},"Phantom Reads")," -> can also acquire ",Object(l.b)("em",{parentName:"li"},"key-range locks")," which are specifically aimed at preventing the insertion of rows that would match a query previously executed by an active Serializable transaction",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Example: if a Serializable transaction queries for an order and its order lines, the database will prevent other transactions from inserting order lines for the order until the transaction is completed"))))),Object(l.b)("li",{parentName:"ul"},"PostgreSQL",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Similar to ",Object(l.b)("em",{parentName:"li"},"Repeatable Read")," (still basically optimistic locking)"),Object(l.b)("li",{parentName:"ul"},"Checks for all situations that prevent the results of the executed transactions to match some sequential order of execution. If such a situation is detected, the transaction fails."),Object(l.b)("li",{parentName:"ul"},"Even the results of SELECT queries are not guaranteed to be valid until the transaction is successfully committed",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"As an alternative, a Serializable Read-only Deferrable transaction can be used. In that case, SELECT statements block until they can return a result that is guaranteed to be valid.")))))),Object(l.b)("h2",{id:"resources"},"Resources"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{href:"https://www.postgresql.org/docs/current/static/transaction-iso.html",target:"_blank",rel:"nofollow noopener noreferrer"},"PostgreSQL Transaction Isolation ",Object(l.b)("svg",{class:"embedded-fa-icon"},Object(l.b)("use",{href:"#external-link-alt"})))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{href:"https://docs.microsoft.com/en-us/sql/t-sql/statements/set-transaction-isolation-level-transact-sql?view=sql-server-2017",target:"_blank",rel:"nofollow noopener noreferrer"},"SQL Server SET TRANSACTION ISOLATION LEVEL ",Object(l.b)("svg",{class:"embedded-fa-icon"},Object(l.b)("use",{href:"#external-link-alt"})))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{href:"https://docs.microsoft.com/en-us/sql/relational-databases/sql-server-transaction-locking-and-row-versioning-guide?view=sql-server-2017",target:"_blank",rel:"nofollow noopener noreferrer"},"SQL Server Transaction Locking and Row Versioning Guide ",Object(l.b)("svg",{class:"embedded-fa-icon"},Object(l.b)("use",{href:"#external-link-alt"})))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{href:"https://github.com/ept/hermitage",target:"_blank",rel:"nofollow noopener noreferrer"},"Hermitage: Testing transaction isolation levels ",Object(l.b)("svg",{class:"embedded-fa-icon"},Object(l.b)("use",{href:"#external-link-alt"}))))))}b.isMDXComponent=!0},231:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(a),d=n,p=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return a?r.a.createElement(p,o({ref:t},s,{components:a})):r.a.createElement(p,o({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);