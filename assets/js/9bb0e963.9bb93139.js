"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[9369],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var d=2;d<l;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1099:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var r=n(7462),i=n(3366),l=(n(7294),n(3905)),a=["components"],o={title:"Linked List",description:"This will cover the most of the topics that will be part of the linked list.",last_modified:new Date("2022-06-08T15:36:32.363Z"),sidebar_label:"Linked List"},s=void 0,d={unversionedId:"preparation/linked-list",id:"preparation/linked-list",title:"Linked List",description:"This will cover the most of the topics that will be part of the linked list.",source:"@site/docs/preparation/linked-list.md",sourceDirName:"preparation",slug:"/preparation/linked-list",permalink:"/interview-prep/preparation/linked-list",draft:!1,tags:[],version:"current",frontMatter:{title:"Linked List",description:"This will cover the most of the topics that will be part of the linked list.",last_modified:"2022-06-08T15:36:32.363Z",sidebar_label:"Linked List"},sidebar:"docs",previous:{title:"Graph",permalink:"/interview-prep/preparation/graph"},next:{title:"Map",permalink:"/interview-prep/preparation/map"}},p={},u=[{value:"Node Class",id:"node-class",level:2},{value:"Traversing a Linked List",id:"traversing-a-linked-list",level:2},{value:"Removing Last Node of Linked List",id:"removing-last-node-of-linked-list",level:2},{value:"Getting End of Linked List",id:"getting-end-of-linked-list",level:2},{value:"Inserting element at the end of the Linked List.",id:"inserting-element-at-the-end-of-the-linked-list",level:2},{value:"Reverse Linked List.",id:"reverse-linked-list",level:2},{value:"Sorting a Linked List using Heap Sort.",id:"sorting-a-linked-list-using-heap-sort",level:2},{value:"Remove Duplicates from Sorted List. Sentinel + Predecessor",id:"remove-duplicates-from-sorted-list-sentinel--predecessor",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This will cover the most of the topics that will be part of the linked list."),(0,l.kt)("h2",{id:"node-class"},"Node Class"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Class Node{\n    int data;\n    Node next;\n    public Node(int d){\n        data = d;\n        next = null;\n    }\n}\n")),(0,l.kt)("h2",{id:"traversing-a-linked-list"},"Traversing a Linked List"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public void traverseLinkedList(Node head) {\n    Node temp = head;\n    while (temp != null) {\n        System.out.print(temp.data + " ");\n        temp = temp.next;\n    }\n}\n\n## Removing First Node of Linked List\n\n```java\npublic void removeFirstNodeLinkedList(Node head) {\n    if (head == null) {\n        return;\n    }\n    head = head.next;\n}\n')),(0,l.kt)("h2",{id:"removing-last-node-of-linked-list"},"Removing Last Node of Linked List"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public ListNode removeLastNodeLinkedList(Node head) {\n    if (head == null || head.next == null) {\n        return null;\n    }\n    Node temp = head;\n    while (temp.next.next != null) {\n        temp = temp.next;\n    }\n    temp.next = null;\n    return temp;\n}\n")),(0,l.kt)("h2",{id:"getting-end-of-linked-list"},"Getting End of Linked List"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public void getLastNodeOfLinkedList(Node head) {\n    //edge-case - if head is null\n    if (head == null) {\n        return;\n    }\n    Node temp = head;\n    while (temp.next != null) {\n        temp = temp.next;\n    }\n    System.out.println(temp.data);\n}\n")),(0,l.kt)("h2",{id:"inserting-element-at-the-end-of-the-linked-list"},"Inserting element at the end of the Linked List."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public ListNode insert(ListNode root, int item)\n    {\n        ListNode temp = new ListNode(item);\n        temp.next = null;\n        if (root == null)\n            root = temp;\n        else {\n            ListNode ptr = root;\n            while (ptr.next != null)\n                ptr = ptr.next;\n            ptr.next = temp;\n        }\n        return root;\n    }\n}\n")),(0,l.kt)("h2",{id:"reverse-linked-list"},"Reverse Linked List."),(0,l.kt)("ul",null,(0,l.kt)("li",null,"3 Variables : [prev, curr, temp]"),(0,l.kt)("li",null,"prev will be used to return from the function and the store the current node"),(0,l.kt)("li",null,"curr will be used to store the current node and will be updated every time to temp."),(0,l.kt)("li",null,"temp will be used to store the next node and will be updated every time to curr.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public ListNode reverseList(ListNode head) {\n        ListNode prev = null;\n        ListNode curr = head;\n        \n        while(curr!=null){\n            ListNode temp = curr.next;\n            curr.next = prev;\n            prev = curr;\n            curr = temp;\n            \n        }\n        return prev;\n    }\n}\n")),(0,l.kt)("h2",{id:"sorting-a-linked-list-using-heap-sort"},"Sorting a Linked List using Heap Sort."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public ListNode sortList(ListNode head) {\n        ListNode curr = head;\n        Queue<ListNode> queue = new PriorityQueue<>((n1, n2) -> n1.val - n2.val); \n        while (curr != null) {\n            queue.add(curr);\n            curr = curr.next;\n        }\n        \n        ListNode dummy = new ListNode();\n        ListNode prev = dummy;\n        while (!queue.isEmpty()) {\n            curr = queue.poll();\n            curr.next = null;\n            prev.next = curr;\n            prev = curr;\n        }\n        return dummy.next;\n    }\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operation"),(0,l.kt)("th",{parentName:"tr",align:null},"Time Complexity"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reverseList"),(0,l.kt)("td",{parentName:"tr",align:null},"O(n)")))),(0,l.kt)("h2",{id:"remove-duplicates-from-sorted-list-sentinel--predecessor"},"Remove Duplicates from Sorted List. ","[Sentinel + Predecessor]"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n\n    public ListNode deleteDuplicates(ListNode head) {\n    // sentinel\n    ListNode sentinel = new ListNode(0, head);\n\n    // predecessor = the last node\n    // before the sublist of duplicates\n    ListNode pred = sentinel;\n\n    while (head != null) {\n        // if it's a beginning of duplicates sublist\n        // skip all duplicates\n        if (head.next != null && head.val == head.next.val) {\n        // move till the end of duplicates sublist\n        while (head.next != null && head.val == head.next.val) {\n            head = head.next;\n        }\n        // skip all duplicates\n        pred.next = head.next;\n        // otherwise, move predecessor\n        } else {\n        pred = pred.next;\n        }\n\n        // move forward\n        head = head.next;\n    }\n    return sentinel.next;\n    }\n}\n")))}m.isMDXComponent=!0}}]);