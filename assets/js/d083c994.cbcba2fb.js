"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[1187],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),k=r,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||l;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4031:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={title:"Static analysis",description:"Checking your code without running it",last_modified:new Date("2022-03-26T14:43:03.368Z")},s=void 0,c={unversionedId:"processes-techniques/static-analysis",id:"processes-techniques/static-analysis",title:"Static analysis",description:"Checking your code without running it",source:"@site/docs/processes-techniques/static-analysis.md",sourceDirName:"processes-techniques",slug:"/processes-techniques/static-analysis",permalink:"/interview-prep/processes-techniques/static-analysis",draft:!1,tags:[],version:"current",frontMatter:{title:"Static analysis",description:"Checking your code without running it",last_modified:"2022-03-26T14:43:03.368Z"},sidebar:"docs",previous:{title:"Small commits and pull requests",permalink:"/interview-prep/processes-techniques/small-commits-pull-requests"},next:{title:"Team decision-making",permalink:"/interview-prep/processes-techniques/team-decision-making"}},p={},u=[{value:"Basic idea",id:"basic-idea",level:2},{value:"Formatting and coding style",id:"formatting-and-coding-style",level:2},{value:"Common bugs and code smells",id:"common-bugs-and-code-smells",level:2},{value:"Technical debt and duplication",id:"technical-debt-and-duplication",level:2},{value:"Third-party dependencies",id:"third-party-dependencies",level:2},{value:"Internal dependencies",id:"internal-dependencies",level:2},{value:"Type checking",id:"type-checking",level:2},{value:"Resources",id:"resources",level:2}],d={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Checking your code without running it"),(0,l.kt)("h2",{id:"basic-idea"},"Basic idea"),(0,l.kt)("p",null,"Static analysis = checking codebase by looking at the source code without running it"),(0,l.kt)("p",null,"Great addition to automated testing and code reviews"),(0,l.kt)("h2",{id:"formatting-and-coding-style"},"Formatting and coding style"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Automated checking of formatting rules",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Example (multi-language): ",(0,l.kt)("a",{href:"https://prettier.io/",target:"_blank",rel:"nofollow noopener noreferrer"},"Prettier ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"})))),(0,l.kt)("li",{parentName:"ul"},"Example (Java): ",(0,l.kt)("a",{href:"https://checkstyle.sourceforge.io/",target:"_blank",rel:"nofollow noopener noreferrer"},"CheckStyle ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"})))))),(0,l.kt)("li",{parentName:"ul"},"Automated formatting",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Example (multi-language): ",(0,l.kt)("a",{href:"https://prettier.io/",target:"_blank",rel:"nofollow noopener noreferrer"},"Prettier ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"})))),(0,l.kt)("li",{parentName:"ul"},"Example (Java): Eclipse Code Formatter"))),(0,l.kt)("li",{parentName:"ul"},"Automated coding style checks",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Example (JavaScript): ",(0,l.kt)("a",{href:"https://eslint.org/",target:"_blank",rel:"nofollow noopener noreferrer"},"ESLint ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"})))),(0,l.kt)("li",{parentName:"ul"},"Example (Java): ",(0,l.kt)("a",{href:"https://checkstyle.sourceforge.io/",target:"_blank",rel:"nofollow noopener noreferrer"},"CheckStyle ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"})))),(0,l.kt)("li",{parentName:"ul"},"Example (Java): ",(0,l.kt)("a",{href:"https://spotbugs.github.io/",target:"_blank",rel:"nofollow noopener noreferrer"},"SpotBugs ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"}))))))),(0,l.kt)("h2",{id:"common-bugs-and-code-smells"},"Common bugs and code smells"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Example (JavaScript): ",(0,l.kt)("a",{href:"https://eslint.org/",target:"_blank",rel:"nofollow noopener noreferrer"},"ESLint ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"})))),(0,l.kt)("li",{parentName:"ul"},"Example (Java): ",(0,l.kt)("a",{href:"https://checkstyle.sourceforge.io/",target:"_blank",rel:"nofollow noopener noreferrer"},"CheckStyle ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"})))),(0,l.kt)("li",{parentName:"ul"},"Example (Java): ",(0,l.kt)("a",{href:"https://spotbugs.github.io/",target:"_blank",rel:"nofollow noopener noreferrer"},"SpotBugs ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"})))),(0,l.kt)("li",{parentName:"ul"},"Example (multi-language): ",(0,l.kt)("a",{href:"https://www.sonarqube.org/",target:"_blank",rel:"nofollow noopener noreferrer"},"SonarQube ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"}))),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ESLint plugin with some relevant rules: ",(0,l.kt)("a",{href:"https://github.com/SonarSource/eslint-plugin-sonarjs",target:"_blank",rel:"nofollow noopener noreferrer"},"eslint-plugin-sonarjs ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"})))))),(0,l.kt)("li",{parentName:"ul"},"Example (multi-language): ",(0,l.kt)("a",{href:"https://semgrep.dev/",target:"_blank",rel:"nofollow noopener noreferrer"},"Semgrep ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"}))),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Very straightforward way to add own rules on top of community rules")))),(0,l.kt)("h2",{id:"technical-debt-and-duplication"},"Technical debt and duplication"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Example (multi-language): ",(0,l.kt)("a",{href:"https://www.sonarqube.org/",target:"_blank",rel:"nofollow noopener noreferrer"},"SonarQube ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"}))))),(0,l.kt)("p",null,"Note: stay practical about this!"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The technical debt reported by tools like this is just an indication. Set your own priorities and see where the cost of paying off the debt is worth the benefits.")),(0,l.kt)("h2",{id:"third-party-dependencies"},"Third-party dependencies"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Check if third-party dependencies used by the code are properly defined",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Example (JavaScript): ",(0,l.kt)("a",{href:"https://www.npmjs.com/package/dependency-cruiser",target:"_blank",rel:"nofollow noopener noreferrer"},"dependency-cruiser ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"})))," (check for dependencies missing in ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json"),", production code relying on ",(0,l.kt)("inlineCode",{parentName:"li"},"devDependencies")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"optionalDependencies"),", ...)"))),(0,l.kt)("li",{parentName:"ul"},"Check for known vulnerabilities in third-party dependencies",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Example (JavaScript): ",(0,l.kt)("inlineCode",{parentName:"li"},"npm audit")),(0,l.kt)("li",{parentName:"ul"},"Example (multi-language): GitHub dependency vulnerability checks (see ",(0,l.kt)("a",{href:"https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security",target:"_blank",rel:"nofollow noopener noreferrer"},"About supply chain security ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"}))),")"))),(0,l.kt)("li",{parentName:"ul"},"Check licenses for third-party dependencies",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Example (JavaScript): ",(0,l.kt)("a",{href:"https://www.npmjs.com/package/license-checker",target:"_blank",rel:"nofollow noopener noreferrer"},"NPM License Checker ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"}))))))),(0,l.kt)("h2",{id:"internal-dependencies"},"Internal dependencies"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Check for circular dependencies, unused code, ...",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Example (JavaScript): ",(0,l.kt)("a",{href:"https://www.npmjs.com/package/dependency-cruiser",target:"_blank",rel:"nofollow noopener noreferrer"},"dependency-cruiser ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"})))),(0,l.kt)("li",{parentName:"ul"},"Example (JavaScript): ",(0,l.kt)("a",{href:"https://eslint.org/",target:"_blank",rel:"nofollow noopener noreferrer"},"ESLint ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"})))," (",(0,l.kt)("a",{href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md",target:"_blank",rel:"nofollow noopener noreferrer"},"import/no-cycle ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"}))),")"),(0,l.kt)("li",{parentName:"ul"},"Example (Java): ",(0,l.kt)("a",{href:"https://github.com/clarkware/jdepend",target:"_blank",rel:"nofollow noopener noreferrer"},"JDepend ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"})))," (see example code below)"),(0,l.kt)("li",{parentName:"ul"},"Example (TypeScript): ",(0,l.kt)("a",{href:"https://www.npmjs.com/package/ts-unused-exports",target:"_blank",rel:"nofollow noopener noreferrer"},"ts-unused-exports ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"})))))),(0,l.kt)("li",{parentName:"ul"},"Enforce monorepo boundaries",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Example (JavaScript): ",(0,l.kt)("a",{href:"https://www.npmjs.com/package/eslint-plugin-monorepo-cop",target:"_blank",rel:"nofollow noopener noreferrer"},"eslint-plugin-monorepo-cop ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"})))))),(0,l.kt)("li",{parentName:"ul"},"Enforce custom boundaries",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Example (JavaScript): ",(0,l.kt)("a",{href:"https://www.npmjs.com/package/dependency-cruiser",target:"_blank",rel:"nofollow noopener noreferrer"},"dependency-cruiser ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"})))," (see example code below)"),(0,l.kt)("li",{parentName:"ul"},"Example (Java): ",(0,l.kt)("a",{href:"https://github.com/clarkware/jdepend",target:"_blank",rel:"nofollow noopener noreferrer"},"JDepend ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"})))," (see example code below)")))),(0,l.kt)("p",null,"Example dependency-cruiser rule for enforcing custom boundary:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  name: 'component-a',\n  severity: 'error',\n  comment: 'Do not reach into component A',\n  from: {\n    pathNot: '^src/componentA/'\n   },\n  to: {\n    path: '^src/componentA/',\n    pathNot: '^src/componentA/index',\n  }\n}\n")),(0,l.kt)("p",null,"Example automated test code for circular dependency checking with JDepend:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Collection packages = jdepend.analyze();\nassertEquals("Cycles found", false, jdepend.containsCycles());\n')),(0,l.kt)("p",null,"Example automated test code for checking direction of imports using JDepend:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'DependencyConstraint constraint = new DependencyConstraint();\nJavaPackage ejb = constraint.addPackage("com.xyz.ejb");\nJavaPackage web = constraint.addPackage("com.xyz.web");\nJavaPackage util = constraint.addPackage("com.xyz.util");\n\nejb.dependsUpon(util);\nweb.dependsUpon(util);\n\njdepend.analyze();\nassertEquals("Dependency mismatch", true, jdepend.dependencyMatch(constraint));\n')),(0,l.kt)("h2",{id:"type-checking"},"Type checking"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A programming language's type system can be seen as a form of static analysis"),(0,l.kt)("li",{parentName:"ul"},"It's possible to add type checking to a language that doesn't have it built in",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Example: using TypeScript to add type checking to a JavaScript codebase")))),(0,l.kt)("h2",{id:"resources"},"Resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{href:"https://blog.logrocket.com/how-to-use-static-code-analysis-to-write-quality-javascript-typescript/",target:"_blank",rel:"nofollow noopener noreferrer"},"How to use static code analysis to write quality JavaScript/TypeScript ",(0,l.kt)("svg",{class:"embedded-fa-icon"},(0,l.kt)("use",{href:"#external-link-alt"}))))))}k.isMDXComponent=!0}}]);