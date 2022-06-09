(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),i=n(9),o=(n(0),n(231)),a={title:"Compiler API (TypeScript)",description:"An overview of how you can use the TypeScript Compiler API to process TypeScript code programmatically",last_modified:new Date("2020-10-18T09:56:36.951Z"),sidebar_label:"Compiler API"},c={id:"javascript/typescript/compiler-api",title:"Compiler API (TypeScript)",description:"An overview of how you can use the TypeScript Compiler API to process TypeScript code programmatically",source:"@site/docs\\javascript\\typescript\\compiler-api.md",permalink:"/javascript/typescript/compiler-api",sidebar_label:"Compiler API",sidebar:"docs",previous:{title:"The this keyword (JavaScript)",permalink:"/javascript/this-keyword"},next:{title:"Conditional types (TypeScript)",permalink:"/javascript/typescript/conditional-types"}},s=[{value:"Basic idea",id:"basic-idea",children:[]},{value:"SourceFiles and the abstract syntax tree (AST)",id:"sourcefiles-and-the-abstract-syntax-tree-ast",children:[{value:"Getting SourceFile for code",id:"getting-sourcefile-for-code",children:[]},{value:"Printing AST for SourceFile",id:"printing-ast-for-sourcefile",children:[]}]},{value:"Turning code into a Program",id:"turning-code-into-a-program",children:[]},{value:"Transpiling code",id:"transpiling-code",children:[]},{value:"Getting diagnostics",id:"getting-diagnostics",children:[]},{value:"Getting type information",id:"getting-type-information",children:[]},{value:"Creating a custom linter",id:"creating-a-custom-linter",children:[]},{value:"Extracting type documentation",id:"extracting-type-documentation",children:[]},{value:"Altering or creating code programmatically",id:"altering-or-creating-code-programmatically",children:[{value:"Parsing and string processing",id:"parsing-and-string-processing",children:[]},{value:"Programmatically creating AST nodes",id:"programmatically-creating-ast-nodes",children:[]},{value:"Walking the AST and replacing nodes using a transformer",id:"walking-the-ast-and-replacing-nodes-using-a-transformer",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"An overview of how you can use the TypeScript Compiler API to process TypeScript code programmatically"),Object(o.b)("h2",{id:"basic-idea"},"Basic idea"),Object(o.b)("p",null,"When writing an application using TypeScript, you typically use the \u201ctypescript\u201d module as a build tool to transpile your TypeScript code into JavaScript. This is usually all you need. However, if you import the \u201ctypescript\u201d module in your application code, you get access to the compiler API. This compiler API provides some very powerful tools for interacting with TypeScript code. Some of its features are documented on the TypeScript wiki: ",Object(o.b)("a",{href:"https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API",target:"_blank",rel:"nofollow noopener noreferrer"},"Using the Compiler API ",Object(o.b)("svg",{class:"embedded-fa-icon"},Object(o.b)("use",{href:"#external-link-alt"}))),"."),Object(o.b)("h2",{id:"sourcefiles-and-the-abstract-syntax-tree-ast"},"SourceFiles and the abstract syntax tree (AST)"),Object(o.b)("p",null,"SourceFile contains a representation of the source code itself, from which you can extract the ",Object(o.b)("em",{parentName:"p"},"abstract syntax tree (AST)")," for the code (",Object(o.b)("a",{href:"https://en.wikipedia.org/wiki/Abstract_syntax_tree",target:"_blank",rel:"nofollow noopener noreferrer"},"Abstract syntax tree ",Object(o.b)("svg",{class:"embedded-fa-icon"},Object(o.b)("use",{href:"#external-link-alt"}))),")"),Object(o.b)("p",null,"AST:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Represents the syntactical structure of the program as a tree, starting from the SourceFile itself and drilling down into the statements and their building blocks"),Object(o.b)("li",{parentName:"ul"},"In general, ASTs are used by compilers or interpreters as an initial step in the processing of the source code")),Object(o.b)("p",null,"Interactively exploring TypeScript AST: ",Object(o.b)("a",{href:"https://ts-ast-viewer.com/",target:"_blank",rel:"nofollow noopener noreferrer"},"TypeScript AST Viewer ",Object(o.b)("svg",{class:"embedded-fa-icon"},Object(o.b)("use",{href:"#external-link-alt"})))),Object(o.b)("h3",{id:"getting-sourcefile-for-code"},"Getting SourceFile for code"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import * as ts from "typescript";\n\nconst filename = "test.ts";\nconst code = `const test: number = 1 + 2;`;\n\nconst sourceFile = ts.createSourceFile(\n    filename, code, ts.ScriptTarget.Latest\n);\n')),Object(o.b)("h3",{id:"printing-ast-for-sourcefile"},"Printing AST for SourceFile"),Object(o.b)("p",null,"Code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'function printRecursiveFrom(\n    node: ts.Node, indentLevel: number, sourceFile: ts.SourceFile\n) {\n    const indentation = "-".repeat(indentLevel);\n    const syntaxKind = ts.SyntaxKind[node.kind];\n    const nodeText = node.getText(sourceFile);\n    console.log(`${indentation}${syntaxKind}: ${nodeText}`);\n\n    node.forEachChild(child =>\n        printRecursiveFrom(child, indentLevel + 1, sourceFile)\n    );\n}\n\nprintRecursiveFrom(sourceFile, 0, sourceFile);\n')),Object(o.b)("p",null,"Output:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"SourceFile: const test: number = 1 + 2;\n-VariableStatement: const test: number = 1 + 2;\n--VariableDeclarationList: const test: number = 1 + 2\n---VariableDeclaration: test: number = 1 + 2\n----Identifier: test\n----NumberKeyword: number\n----BinaryExpression: 1 + 2\n-----FirstLiteralToken: 1\n-----PlusToken: +\n-----FirstLiteralToken: 2\n-EndOfFileToken:\n")),Object(o.b)("p",null,"Note: Starting from TypeScript 4, the output will specify ",Object(o.b)("inlineCode",{parentName:"p"},"FirstStatement")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"VariableStatement"),". This is just an alias for ",Object(o.b)("inlineCode",{parentName:"p"},"VariableStatement"),". See also ",Object(o.b)("a",{href:"https://stackoverflow.com/questions/59463751/what-is-the-difference-between-ts-syntaxkind-variablestatement-and-ts-syntaxk",target:"_blank",rel:"nofollow noopener noreferrer"},"What is the difference between ts.SyntaxKind.VariableStatement and ts.SyntaxKind.FirstStatement ",Object(o.b)("svg",{class:"embedded-fa-icon"},Object(o.b)("use",{href:"#external-link-alt"}))),"."),Object(o.b)("p",null,"Here, we used ",Object(o.b)("inlineCode",{parentName:"p"},"ts.Node.forEachChild()")," to get the children for a node in the AST. There is an alternative to this, ",Object(o.b)("inlineCode",{parentName:"p"},"ts.Node.getChildren(sourceFile).forEach()"),", which creates a more detailed AST:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"SourceFile: const test: number = 1 + 2;\n-SyntaxList: const test: number = 1 + 2;\n--VariableStatement: const test: number = 1 + 2;\n---VariableDeclarationList: const test: number = 1 + 2\n----ConstKeyword: const\n----SyntaxList: test: number = 1 + 2\n-----VariableDeclaration: test: number = 1 + 2\n------Identifier: test\n------ColonToken: :\n------NumberKeyword: number\n------FirstAssignment: =\n------BinaryExpression: 1 + 2\n-------FirstLiteralToken: 1\n-------PlusToken: +\n-------FirstLiteralToken: 2\n---SemicolonToken: ;\n-EndOfFileToken:\n")),Object(o.b)("h2",{id:"turning-code-into-a-program"},"Turning code into a Program"),Object(o.b)("p",null,"SourceFiles are very limited. Programs allow you to do more interesting things like getting diagnostics or using the type checker."),Object(o.b)("p",null,"Note: obtaining a Program is much more resource-heavy than obtaining a simple SourceFile!"),Object(o.b)("p",null,"Getting a Program from a file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'const program = ts.createProgram(["src/test.ts"], {});\n')),Object(o.b)("p",null,"Getting a Program from a string of code (needs custom CompilerHost):"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import * as ts from "typescript";\n\nconst filename = "test.ts";\nconst code = `const test: number = 1 + 2;`;\n\nconst sourceFile = ts.createSourceFile(\n    filename, code, ts.ScriptTarget.Latest\n);\n\nconst defaultCompilerHost = ts.createCompilerHost({});\n\nconst customCompilerHost: ts.CompilerHost = {\n    getSourceFile: (name, languageVersion) => {\n        console.log(`getSourceFile ${name}`);\n\n        if (name === filename) {\n            return sourceFile;\n        } else {\n            return defaultCompilerHost.getSourceFile(\n                name, languageVersion\n            );\n        }\n    },\n    writeFile: (filename, data) => {},\n    getDefaultLibFileName: () => "lib.d.ts",\n    useCaseSensitiveFileNames: () => false,\n    getCanonicalFileName: filename => filename,\n    getCurrentDirectory: () => "",\n    getNewLine: () => "\\n",\n    getDirectories: () => [],\n    fileExists: () => true,\n    readFile: () => ""\n};\n\nconst program = ts.createProgram(\n    ["test.ts"], {}, customCompilerHost\n);\n\n// getSourceFile test.ts\n// getSourceFile lib.d.ts\n')),Object(o.b)("p",null,"Note:",Object(o.b)("inlineCode",{parentName:"p"},"getSourceFile")," method of the CompilerHost is called twice:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"once for getting the actual code we want to compile"),Object(o.b)("li",{parentName:"ul"},"once for getting ",Object(o.b)("inlineCode",{parentName:"li"},"lib.d.ts"),", the default library specifying the JavaScript/TypeScript features that are available to the code")),Object(o.b)("h2",{id:"transpiling-code"},"Transpiling code"),Object(o.b)("p",null,"Directly from code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import * as ts from "typescript";\n\nconst code = `const test: number = 1 + 2;`;\nconst transpiledCode = ts.transpileModule(code, {}).outputText;\nconsole.log(transpiledCode); // var test = 1 + 2;\n')),Object(o.b)("p",null,"It is also possible to transpile files from disk using the compiler API. Note: if the file you transpile imports other TypeScript files, those will also be transpiled if the compiler can find them."),Object(o.b)("p",null,"Code (file test.ts):"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import * as ts from "typescript";\n\nconst program = ts.createProgram(["src/test.ts"], {});\nprogram.emit();\n')),Object(o.b)("p",null,"The test.js file created by the above code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'"use strict";\nexports.__esModule = true;\nvar ts = require("typescript");\nvar program = ts.createProgram(["src/test.ts"], {});\nprogram.emit();\n')),Object(o.b)("h2",{id:"getting-diagnostics"},"Getting diagnostics"),Object(o.b)("p",null,"If you have a Program, you can use that Program to obtain diagnostics for the code. In order to get the compiler errors or warnings, use the ",Object(o.b)("inlineCode",{parentName:"p"},"getPreEmitDiagnostics()"),"method. As an example, take a look at the following code which prints its own diagnostics."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import * as ts from "typescript";\n\nlet test: number = "test"; // compiler error\n\nconst program = ts.createProgram(["src/test.ts"], {});\nconst diagnostics = ts.getPreEmitDiagnostics(program);\n\nfor (const diagnostic of diagnostics) {\n    const message = diagnostic.messageText;\n    const file = diagnostic.file;\n    const filename = file.fileName;\n\n    const lineAndChar = file.getLineAndCharacterOfPosition(\n        diagnostic.start\n    );\n\n    const line = lineAndChar.line + 1;\n    const character = lineAndChar.character + 1;\n\n    console.log(message);\n    console.log(`(${filename}:${line}:${character})`);\n}\n\n// Type \'"test"\' is not assignable to type \'number\'.\n// (src/test.ts:3:5)\n')),Object(o.b)("h2",{id:"getting-type-information"},"Getting type information"),Object(o.b)("p",null,"Another thing that a Program allows you to do is to obtain a TypeChecker for extracting type information from nodes in the AST. The following code obtains a TypeChecker for itself and uses the checker to emit the types of all variable declarations in the code."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import * as ts from "typescript";\n\nconst filename = "src/test.ts";\nconst program = ts.createProgram([filename], {});\nconst sourceFile = program.getSourceFile(filename);\nconst typeChecker = program.getTypeChecker();\n\nfunction recursivelyPrintVariableDeclarations(\n    node: ts.Node, sourceFile: ts.SourceFile\n) {\n    if (node.kind === ts.SyntaxKind.VariableDeclaration)  {\n        const nodeText = node.getText(sourceFile);\n        const type = typeChecker.getTypeAtLocation(node);\n        const typeName = typeChecker.typeToString(type, node);\n\n        console.log(nodeText);\n        console.log(`(${typeName})`);\n    }\n\n    node.forEachChild(child =>\n        recursivelyPrintVariableDeclarations(child, sourceFile)\n    );\n}\n\nrecursivelyPrintVariableDeclarations(sourceFile, sourceFile);\n\n// filename = "src/test.ts"\n// ("src/test.ts")\n// program = ts.createProgram([filename], {})\n// (ts.Program)\n// sourceFile = program.getSourceFile(filename)\n// (ts.SourceFile)\n// typeChecker = program.getTypeChecker()\n// (ts.TypeChecker)\n// nodeText = node.getText(sourceFile)\n// (string)\n// type = typeChecker.getTypeAtLocation(node)\n// (ts.Type)\n// typeName = typeChecker.typeToString(type, node)\n// (string)\n')),Object(o.b)("h2",{id:"creating-a-custom-linter"},"Creating a custom linter"),Object(o.b)("p",null,"The TypeScript compiler API makes it pretty straightforward to create your own custom linter that generates errors or warnings if it finds certain things in the code. For an example, see this part of the compiler API documentation: ",Object(o.b)("a",{href:"https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API#traversing-the-ast-with-a-little-linter",target:"_blank",rel:"nofollow noopener noreferrer"},"Traversing the AST with a little linter ",Object(o.b)("svg",{class:"embedded-fa-icon"},Object(o.b)("use",{href:"#external-link-alt"}))),". Note that the code uses the SyntaxKind of the node (",Object(o.b)("inlineCode",{parentName:"p"},"node.kind"),") to determine the kind of node and then casts the node to its specific type, allowing for convenient access to certain child nodes."),Object(o.b)("p",null,"The example above doesn\u2019t create a Program, because there is no need to create one. If the information in the AST suffices for your linter, it is easier and more efficient to just create a SourceFile directly. More advanced linters may need type checking, which means you will need to generate a Program for the code to be linted in order to obtain a TypeChecker."),Object(o.b)("h2",{id:"extracting-type-documentation"},"Extracting type documentation"),Object(o.b)("p",null,"The documentation for the compiler API includes an example that uses a TypeChecker to extract and emit type documentation for the code: ",Object(o.b)("a",{href:"https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API#using-the-type-checker",target:"_blank",rel:"nofollow noopener noreferrer"},"Using the Type Checker ",Object(o.b)("svg",{class:"embedded-fa-icon"},Object(o.b)("use",{href:"#external-link-alt"})))),Object(o.b)("h2",{id:"altering-or-creating-code-programmatically"},"Altering or creating code programmatically"),Object(o.b)("p",null,"Note: the code examples below include different code depending on TS version. For more details regarding what changed in 4.0, see ",Object(o.b)("a",{href:"https://github.com/microsoft/TypeScript/pull/35282",target:"_blank",rel:"nofollow noopener noreferrer"},"this PR ",Object(o.b)("svg",{class:"embedded-fa-icon"},Object(o.b)("use",{href:"#external-link-alt"}))),"."),Object(o.b)("h3",{id:"parsing-and-string-processing"},"Parsing and string processing"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Traverse the AST and generate a list of changes you want to perform on the code (e.g., remove 2 characters starting from position 11 and insert the string \u201ctest\u201d instead). "),Object(o.b)("li",{parentName:"ul"},"Then, take the source code as a string and apply the changes in reverse order (starting from the end of the source code, so your changes don\u2019t affect the positions where the other changes need to happen).")),Object(o.b)("h3",{id:"programmatically-creating-ast-nodes"},"Programmatically creating AST nodes"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import * as ts from "typescript";\n\n// before TS 4.0\nconst statement = ts.createVariableStatement(\n    [],\n    ts.createVariableDeclarationList(\n        [ts.createVariableDeclaration(\n            ts.createIdentifier("testVar"),\n            ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),\n            ts.createStringLiteral("test")\n        )],\n        ts.NodeFlags.Const\n    )\n);\n\n// starting from TS 4.0\nconst statement = ts.factory.createVariableStatement(\n    [],\n    ts.factory.createVariableDeclarationList(\n        [ts.factory.createVariableDeclaration(\n            ts.factory.createIdentifier("testVar"),\n            undefined,\n            ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),\n            ts.factory.createStringLiteral("test")\n        )],\n        ts.NodeFlags.Const\n    )\n);\n\nconst printer = ts.createPrinter();\n\nconst result = printer.printNode(\n    ts.EmitHint.Unspecified,\n    statement,\n    undefined\n);\n\nconsole.log(result); // const testVar: string = "test";\n')),Object(o.b)("h3",{id:"walking-the-ast-and-replacing-nodes-using-a-transformer"},"Walking the AST and replacing nodes using a transformer"),Object(o.b)("p",null,"The following code finds all identifiers in the ",Object(o.b)("inlineCode",{parentName:"p"},"SourceFile")," and adds a suffix ",Object(o.b)("inlineCode",{parentName:"p"},"suffix")," to them."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import * as ts from "typescript";\n\nconst filename = "test.ts";\nconst code = `const test: number = 1 + 2;`;\n\nconst sourceFile = ts.createSourceFile(\n    filename, code, ts.ScriptTarget.Latest\n);\n\nconst transformerFactory: ts.TransformerFactory<ts.Node> = (\n    context: ts.TransformationContext\n) => {\n    return (rootNode) => {\n        function visit(node: ts.Node): ts.Node {\n            node = ts.visitEachChild(node, visit, context);\n\n            if (ts.isIdentifier(node)) {\n                // before TS 4.0\n                return ts.createIdentifier(node.text + "suffix");\n\n                // starting from TS 4.0\n                return context.factory.createIdentifier(node.text + "suffix");\n            } else {\n                return node;\n            }\n        }\n\n        return ts.visitNode(rootNode, visit);\n    };\n};\n\nconst transformationResult = ts.transform(\n    sourceFile, [transformerFactory]\n);\n\nconst transformedSourceFile = transformationResult.transformed[0];\nconst printer = ts.createPrinter();\n\nconst result = printer.printNode(\n    ts.EmitHint.Unspecified,\n    transformedSourceFile,\n    undefined\n);\n\nconsole.log(result); // const testsuffix: number = 1 + 2;\n')))}p.isMDXComponent=!0},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(a,".").concat(u)]||d[u]||b[u]||o;return n?i.a.createElement(m,c({ref:t},l,{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);