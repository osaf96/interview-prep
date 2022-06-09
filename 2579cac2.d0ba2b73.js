(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{159:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return l})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return c}));var n=t(1),a=t(9),o=(t(0),t(231)),i={title:"Tree",description:"This will cover the most of the topics that will be part of the tree.",last_modified:new Date("2022-06-08T15:36:32.363Z"),sidebar_label:"Tree"},l={id:"preparation/tree",title:"Tree",description:"This will cover the most of the topics that will be part of the tree.",source:"@site/docs\\preparation\\tree.md",permalink:"/preparation/tree",sidebar_label:"Tree",sidebar:"docs",previous:{title:"Sorting Algorithms",permalink:"/preparation/sorting-algorithms"},next:{title:"Branch By Abstraction and application strangulation",permalink:"/processes-techniques/branch-by-abstraction-application-strangulation"}},s=[{value:"Tree Traversal - Inorder, Preorder and Postorder",id:"tree-traversal---inorder-preorder-and-postorder",children:[{value:"Pre-order Traversal",id:"pre-order-traversal",children:[]},{value:"In-order Traversal",id:"in-order-traversal",children:[]},{value:"Post-order Traversal",id:"post-order-traversal",children:[]}]},{value:"Level Order Traversal of Binary Tree",id:"level-order-traversal-of-binary-tree",children:[{value:"Implementation using DFS",id:"implementation-using-dfs",children:[]},{value:"Implementation using BFS",id:"implementation-using-bfs",children:[]}]},{value:"Height (Maximum Depth) of a Tree",id:"height-maximum-depth-of-a-tree",children:[]},{value:"Minimum Depth of a Tree",id:"minimum-depth-of-a-tree",children:[]},{value:"Deepest Leaves",id:"deepest-leaves",children:[]},{value:"Binary Tree Paths",id:"binary-tree-paths",children:[]},{value:"Binary Search Tree Paths",id:"binary-search-tree-paths",children:[]},{value:"Resources",id:"resources",children:[]}],p={rightToc:s};function c(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This will cover the most of the topics that will be part of the tree."),Object(o.b)("h2",{id:"tree-traversal---inorder-preorder-and-postorder"},"Tree Traversal - Inorder, Preorder and Postorder"),Object(o.b)("h3",{id:"pre-order-traversal"},"Pre-order Traversal"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'class Solution {\n    void preorder(Node node) {\n        if (node == null) return;\n        // Traverse root\n        System.out.print(node.item + "->");\n        // Traverse left\n        preorder(node.left);\n        // Traverse right\n        preorder(node.right);\n    }\n}\n')),Object(o.b)("h3",{id:"in-order-traversal"},"In-order Traversal"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'class Solution {\n    void inorder(Node node) {\n        if (node == null) return;\n        // Traverse left\n        inorder(node.left);\n        // Traverse root\n        System.out.print(node.item + "->");\n        // Traverse right\n        inorder(node.right);\n    }\n}\n')),Object(o.b)("h3",{id:"post-order-traversal"},"Post-order Traversal"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'class Solution {\n    void postorder(Node node) {\n        if (node == null) return;\n        // Traverse left\n        postorder(node.left);\n        // Traverse right\n        postorder(node.right);\n        // Traverse root\n        System.out.print(node.item + "->");\n    }\n}\n')),Object(o.b)("h2",{id:"level-order-traversal-of-binary-tree"},"Level Order Traversal of Binary Tree"),Object(o.b)("h3",{id:"implementation-using-dfs"},"Implementation using DFS"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n\n    public List<List<Integer>> levelOrder(TreeNode root) {\n    List<List<Integer>> res = new ArrayList<List<Integer>>();\n    levelHelper(res, root, 0);\n    return res;\n    }\n\n    public void levelHelper(List<List<Integer>> res, TreeNode root, int height) {\n    if (root == null) return;\n    if (height == res.size()) {\n        res.add(new LinkedList<Integer>());\n    }\n    res.get(height).add(root.val);\n    levelHelper(res, root.left, height + 1);\n    levelHelper(res, root.right, height + 1);\n    }\n}\n")),Object(o.b)("h3",{id:"implementation-using-bfs"},"Implementation using BFS"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"public class Solution {\n\n    public List<List<Integer>> levelOrder(TreeNode root) {\n    Queue<TreeNode> queue = new LinkedList<TreeNode>();\n    List<List<Integer>> wrapList = new LinkedList<List<Integer>>();\n\n    if (root == null) return wrapList;\n\n    queue.offer(root);\n    while (!queue.isEmpty()) {\n        int levelNum = queue.size();\n        List<Integer> subList = new LinkedList<Integer>();\n        for (int i = 0; i < levelNum; i++) {\n        if (queue.peek().left != null) queue.offer(queue.peek().left);\n        if (queue.peek().right != null) queue.offer(queue.peek().right);\n        subList.add(queue.poll().val);\n        }\n        wrapList.add(subList);\n    }\n    return wrapList;\n    }\n}\n")),Object(o.b)("h2",{id:"height-maximum-depth-of-a-tree"},"Height (Maximum Depth) of a Tree"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    public static int height(Node root) {\n    // base case: empty tree has a height of 0\n    if (root == null) {\n        return 0;\n        }\n\n    // recur for the left and right subtree and consider maximum depth\n    return 1 + Math.max(height(root.left), height(root.right));\n    }\n}\n\n// Time Complexity: O(N)\n// Auxiliary Space: O(1)\n")),Object(o.b)("h2",{id:"minimum-depth-of-a-tree"},"Minimum Depth of a Tree"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    public static int minDepth(Node root) {\n        if (root == null)    return 0;\n        if (root.left == null)    return minDepth(root.right) + 1;\n        if (root.right == null) return minDepth(root.left) + 1;\n        return 1 + Math.min(minDepth(root.left),minDepth(root.right));\n    }\n}\n\n// Time Complexity: O(N)\n// Auxiliary Space: O(1)\n")),Object(o.b)("h2",{id:"deepest-leaves"},"Deepest Leaves"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    private int maxLevel = 0;\n\n    public void deepestLeaves(TreeNode root) {\n    if (root == null) return 0;\n    helper(root, 0);\n    }\n\n    private void helper(TreeNode root, int level) {\n    if (root == null) return;\n    if (level > maxLevel) {\n        maxLevel = level;\n    }\n    if (level == maxLevel) {\n        // root.val is the deepest level's nodes.\n    }\n    helper(root.left, level + 1);\n    helper(root.right, level + 1);\n    }\n}\n// Output 7 and 8.\n\n// Time Complexity: O(N)\n// Auxiliary Space: O(1)\n")),Object(o.b)("h2",{id:"binary-tree-paths"},"Binary Tree Paths"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"public void printPathsRecur(Node node, int path[], int pathLen) {\n    if (node == null) return;\n\n    /* append this node to the path array */\n    path[pathLen] = node.data;\n    pathLen++;\n\n    /* it's a leaf, so print the path that lead to here  */\n    if (node.left == null && node.right == null) {\n        printArray(path, pathLen);\n    } else {\n        /* otherwise try both subtrees */\n        printPathsRecur(node.left, path, pathLen);\n        printPathsRecur(node.right, path, pathLen);\n    }\n}\n")),Object(o.b)("h2",{id:"binary-search-tree-paths"},"Binary Search Tree Paths"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'public List<String> binaryTreePaths(TreeNode root) {\n    List<String> answer = new ArrayList<String>();\n    if (root != null) searchBT(root, "", answer);\n    return answer;\n}\nprivate void searchBT(TreeNode root, String path, List<String> answer) {\n    if (root.left == null && root.right == null) answer.add(path + root.val);\n    if (root.left != null) searchBT(root.left, path + root.val + "->", answer);\n    if (root.right != null) searchBT(root.right, path + root.val + "->", answer);\n}\n')),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{href:"https://leetcode.com/problems/binary-tree-paths/",target:"_blank",rel:"nofollow noopener noreferrer"},"LeetCode ",Object(o.b)("svg",{class:"embedded-fa-icon"},Object(o.b)("use",{href:"#external-link-alt"}))))))}c.isMDXComponent=!0},231:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),c=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l({},r,{},e)),t},u=function(e){var r=c(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},h=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),h=n,b=u["".concat(i,".").concat(h)]||u[h]||d[h]||o;return t?a.a.createElement(b,l({ref:r},p,{components:t})):a.a.createElement(b,l({ref:r},p))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=h;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);