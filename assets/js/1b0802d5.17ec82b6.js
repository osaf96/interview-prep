"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[8248],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return c}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(t),c=a,m=h["".concat(s,".").concat(c)]||h[c]||d[c]||o;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function c(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1461:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={title:"Tree",description:"This will cover the most of the topics that will be part of the tree.",last_modified:new Date("2022-06-08T15:36:32.363Z"),sidebar_label:"Tree"},s=void 0,u={unversionedId:"data-structures/tree",id:"data-structures/tree",title:"Tree",description:"This will cover the most of the topics that will be part of the tree.",source:"@site/docs/data-structures/tree.md",sourceDirName:"data-structures",slug:"/data-structures/tree",permalink:"/interview-prep/data-structures/tree",draft:!1,tags:[],version:"current",frontMatter:{title:"Tree",description:"This will cover the most of the topics that will be part of the tree.",last_modified:"2022-06-08T15:36:32.363Z",sidebar_label:"Tree"},sidebar:"docs",previous:{title:"Sorting Algorithms",permalink:"/interview-prep/data-structures/sorting-algorithms"},next:{title:"Concurrency",permalink:"/interview-prep/java/concurrency"}},p={},d=[{value:"Tree Traversal - Inorder, Preorder and Postorder",id:"tree-traversal---inorder-preorder-and-postorder",level:2},{value:"Pre-order Traversal",id:"pre-order-traversal",level:3},{value:"In-order Traversal",id:"in-order-traversal",level:3},{value:"Post-order Traversal",id:"post-order-traversal",level:3},{value:"Level Order Traversal of Binary Tree",id:"level-order-traversal-of-binary-tree",level:2},{value:"Implementation using DFS",id:"implementation-using-dfs",level:3},{value:"Implementation using BFS",id:"implementation-using-bfs",level:3},{value:"Height (Maximum Depth) of a Tree",id:"height-maximum-depth-of-a-tree",level:2},{value:"Minimum Depth of a Tree",id:"minimum-depth-of-a-tree",level:2},{value:"Deepest Leaves",id:"deepest-leaves",level:2},{value:"Binary Tree Paths",id:"binary-tree-paths",level:2},{value:"Binary Search Tree Paths",id:"binary-search-tree-paths",level:2},{value:"Resources",id:"resources",level:2}],h={toc:d};function c(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This will cover the most of the topics that will be part of the tree."),(0,o.kt)("h2",{id:"tree-traversal---inorder-preorder-and-postorder"},"Tree Traversal - Inorder, Preorder and Postorder"),(0,o.kt)("h3",{id:"pre-order-traversal"},"Pre-order Traversal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'class Solution {\n    void preorder(Node node) {\n        if (node == null) return;\n        // Traverse root\n        System.out.print(node.item + "->");\n        // Traverse left\n        preorder(node.left);\n        // Traverse right\n        preorder(node.right);\n    }\n}\n')),(0,o.kt)("h3",{id:"in-order-traversal"},"In-order Traversal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'class Solution {\n    void inorder(Node node) {\n        if (node == null) return;\n        // Traverse left\n        inorder(node.left);\n        // Traverse root\n        System.out.print(node.item + "->");\n        // Traverse right\n        inorder(node.right);\n    }\n}\n')),(0,o.kt)("h3",{id:"post-order-traversal"},"Post-order Traversal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'class Solution {\n    void postorder(Node node) {\n        if (node == null) return;\n        // Traverse left\n        postorder(node.left);\n        // Traverse right\n        postorder(node.right);\n        // Traverse root\n        System.out.print(node.item + "->");\n    }\n}\n')),(0,o.kt)("h2",{id:"level-order-traversal-of-binary-tree"},"Level Order Traversal of Binary Tree"),(0,o.kt)("h3",{id:"implementation-using-dfs"},"Implementation using DFS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"class Solution {\n\n    public List<List<Integer>> levelOrder(TreeNode root) {\n    List<List<Integer>> res = new ArrayList<List<Integer>>();\n    levelHelper(res, root, 0);\n    return res;\n    }\n\n    public void levelHelper(List<List<Integer>> res, TreeNode root, int height) {\n    if (root == null) return;\n    if (height == res.size()) {\n        res.add(new LinkedList<Integer>());\n    }\n    res.get(height).add(root.val);\n    levelHelper(res, root.left, height + 1);\n    levelHelper(res, root.right, height + 1);\n    }\n}\n")),(0,o.kt)("h3",{id:"implementation-using-bfs"},"Implementation using BFS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n\n    public List<List<Integer>> levelOrder(TreeNode root) {\n    Queue<TreeNode> queue = new LinkedList<TreeNode>();\n    List<List<Integer>> wrapList = new LinkedList<List<Integer>>();\n\n    if (root == null) return wrapList;\n\n    queue.offer(root);\n    while (!queue.isEmpty()) {\n        int levelNum = queue.size();\n        List<Integer> subList = new LinkedList<Integer>();\n        for (int i = 0; i < levelNum; i++) {\n        if (queue.peek().left != null) queue.offer(queue.peek().left);\n        if (queue.peek().right != null) queue.offer(queue.peek().right);\n        subList.add(queue.poll().val);\n        }\n        wrapList.add(subList);\n    }\n    return wrapList;\n    }\n}\n")),(0,o.kt)("h2",{id:"height-maximum-depth-of-a-tree"},"Height (Maximum Depth) of a Tree"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"class Solution {\n    public static int height(Node root) {\n    // base case: empty tree has a height of 0\n    if (root == null) {\n        return 0;\n        }\n\n    // recur for the left and right subtree and consider maximum depth\n    return 1 + Math.max(height(root.left), height(root.right));\n    }\n}\n\n// Time Complexity: O(N)\n// Auxiliary Space: O(1)\n")),(0,o.kt)("h2",{id:"minimum-depth-of-a-tree"},"Minimum Depth of a Tree"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"class Solution {\n    public static int minDepth(Node root) {\n        if (root == null)    return 0;\n        if (root.left == null)    return minDepth(root.right) + 1;\n        if (root.right == null) return minDepth(root.left) + 1;\n        return 1 + Math.min(minDepth(root.left),minDepth(root.right));\n    }\n}\n\n// Time Complexity: O(N)\n// Auxiliary Space: O(1)\n")),(0,o.kt)("h2",{id:"deepest-leaves"},"Deepest Leaves"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"class Solution {\n    private int maxLevel = 0;\n\n    public void deepestLeaves(TreeNode root) {\n    if (root == null) return 0;\n    helper(root, 0);\n    }\n\n    private void helper(TreeNode root, int level) {\n    if (root == null) return;\n    if (level > maxLevel) {\n        maxLevel = level;\n    }\n    if (level == maxLevel) {\n        // root.val is the deepest level's nodes.\n    }\n    helper(root.left, level + 1);\n    helper(root.right, level + 1);\n    }\n}\n// Output 7 and 8.\n\n// Time Complexity: O(N)\n// Auxiliary Space: O(1)\n")),(0,o.kt)("h2",{id:"binary-tree-paths"},"Binary Tree Paths"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public void printPathsRecur(Node node, int path[], int pathLen) {\n    if (node == null) return;\n\n    /* append this node to the path array */\n    path[pathLen] = node.data;\n    pathLen++;\n\n    /* it's a leaf, so print the path that lead to here  */\n    if (node.left == null && node.right == null) {\n        printArray(path, pathLen);\n    } else {\n        /* otherwise try both subtrees */\n        printPathsRecur(node.left, path, pathLen);\n        printPathsRecur(node.right, path, pathLen);\n    }\n}\n")),(0,o.kt)("h2",{id:"binary-search-tree-paths"},"Binary Search Tree Paths"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public List<String> binaryTreePaths(TreeNode root) {\n    List<String> answer = new ArrayList<String>();\n    if (root != null) searchBT(root, "", answer);\n    return answer;\n}\nprivate void searchBT(TreeNode root, String path, List<String> answer) {\n    if (root.left == null && root.right == null) answer.add(path + root.val);\n    if (root.left != null) searchBT(root.left, path + root.val + "->", answer);\n    if (root.right != null) searchBT(root.right, path + root.val + "->", answer);\n}\n')),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://leetcode.com/problems/binary-tree-paths/",target:"_blank",rel:"nofollow noopener noreferrer"},"LeetCode ",(0,o.kt)("svg",{class:"embedded-fa-icon"},(0,o.kt)("use",{href:"#external-link-alt"}))))))}c.isMDXComponent=!0}}]);