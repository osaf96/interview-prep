"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[1129],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,m=c["".concat(o,".").concat(h)]||c[h]||d[h]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5348:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],u={title:"Deque",description:"This will cover the most of the topics that will be part of the Dequeu",last_modified:new Date("2022-06-08T15:36:32.363Z"),sidebar_label:"Deque"},o=void 0,p={unversionedId:"preparation/dequeue",id:"preparation/dequeue",title:"Deque",description:"This will cover the most of the topics that will be part of the Dequeu",source:"@site/docs/preparation/dequeue.md",sourceDirName:"preparation",slug:"/preparation/dequeue",permalink:"/interview-prep/preparation/dequeue",draft:!1,tags:[],version:"current",frontMatter:{title:"Deque",description:"This will cover the most of the topics that will be part of the Dequeu",last_modified:"2022-06-08T15:36:32.363Z",sidebar_label:"Deque"},sidebar:"docs",previous:{title:"Comparators",permalink:"/interview-prep/preparation/comparators"},next:{title:"Graph",permalink:"/interview-prep/preparation/graph"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Operations &amp; Complexities",id:"operations--complexities",level:2},{value:"Implementation of Deque",id:"implementation-of-deque",level:2},{value:"Using Circular Array",id:"using-circular-array",level:3},{value:"Using Linked List",id:"using-linked-list",level:3}],c={toc:d};function h(e){var t=e.components,u=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This will cover the most of the topics that will be part of the Dequeu"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"A double-ended queue (abbreviated to deque) is an abstract data type that generalizes a queue, for which elements can be added to or removed from either the front (head) or back (tail). It has four principal operations:"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"addFirst: add an element to the head"),(0,a.kt)("li",null,"addLast: add an element to the tail"),(0,a.kt)("li",null,"removeFirst: remove the first element"),(0,a.kt)("li",null,"removeLast: remove the last element")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dequeue",src:n(697).Z,width:"1748",height:"694"})),(0,a.kt)("h2",{id:"operations--complexities"},"Operations & Complexities"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Operation"),(0,a.kt)("th",{parentName:"tr",align:null},"Complexity"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"addFirst"),(0,a.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"addLast"),(0,a.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"removeFirst"),(0,a.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"removeLast"),(0,a.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"peekFirst"),(0,a.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"peekLast"),(0,a.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isEmpty"),(0,a.kt)("td",{parentName:"tr",align:null},"O(1)")))),(0,a.kt)("h2",{id:"implementation-of-deque"},"Implementation of Deque"),(0,a.kt)("h3",{id:"using-circular-array"},"Using Circular Array"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class CircularArrayDeque {\n    private int head; // the first node in deque, not the first item in array\n    private int tail; // the last node in deque, not the first item in array\n    private int[] arr;\n    private int size;\n \n    public CircularArrayDeque(int capacity) {\n        arr = new int[capacity];\n        head = 0;\n        tail = 0;\n        size = 0;\n    }\n \n    // Add item to the head of the deque\n    public void addFirst(int value) {\n        // check if deque is full\n        if (isFull()) {\n            return;\n        }\n \n        head = head - 1;\n        if (head < 0) {\n            head = arr.length - 1;\n        }\n        arr[head] = value;\n        size += 1;\n    }\n \n    // Remove the first item from the deque and return its value\n    public int removeFirst() throws Exception {\n        if (isEmpty()) {\n            throw new Exception("Circular Array Deque is empty when dequeue!");\n        }\n        int value = arr[head];\n        head = (head + 1) % arr.length;\n        size -= 1;\n        return value;\n    }\n \n    // Get the first item\n    public int peekFirst() throws Exception {\n        if (isEmpty()) {\n            throw new Exception("Circular Array Deque is empty when peek!");\n        }\n        return arr[head];\n    }\n \n    // Add item to the end of the deque\n    public void addLast(int value) {\n        // check if deque is full\n        if (isFull()) {\n            return;\n        }\n        tail = (head + size) % arr.length;\n        arr[tail] = value;\n        size += 1;\n    }\n \n    // Remove the last item from the deque and return its value\n    public int removeLast() throws Exception {\n        if (isEmpty()) {\n            throw new Exception("Circular Array Deque is empty when dequeue!");\n        }\n \n        int value = arr[tail];\n        tail = tail - 1;\n        if (tail < 0) {\n            tail = arr.length - 1;\n        }\n        size -= 1;\n        return value;\n    }\n \n    // Get the last item\n    public int peekLast() throws Exception {\n        if (isEmpty()) {\n            throw new Exception("Circular Array Deque is empty when peek!");\n        }\n        return arr[tail];\n    }\n \n    // Return whether the queue is full\n    public boolean isFull() {\n        return size == arr.length;\n    }\n \n    // Return whether the queue is empty\n    public boolean isEmpty() {\n        return size == 0;\n    }\n}\n')),(0,a.kt)("h3",{id:"using-linked-list"},"Using Linked List"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"\npublic class ListNode {\n    public int val;\n    public ListNode prev;\n    public ListNode next;\n    public ListNode(int val) {\n        this.val = val;\n        this.prev = null;\n        this.next = null;\n    }\n}\n\npublic class LinkedListDeque {\n    private ListNode head; // the first node\n    private ListNode tail; // the last node\n \n    public LinkedListDeque() {\n        head = null;\n        tail = null;\n    }\n \n    // Add item to the head of the list\n    public void addFirst(int value) {\n        if (head == null) {\n            head = new ListNode(value);\n            tail = head;\n        } else {\n            head.prev = new ListNode(value);\n            head.prev.next = head;\n            head = head.prev;\n        }\n    }\n \n    // Remove the head from the list and return its value\n    public int removeFirst() throws Exception {\n        if (head == null) {\n            throw new Exception();\n        }\n        int value = head.val;\n        head = head.next;\n        if (head != null) {\n            head.prev = null;\n        } else {\n            tail = null;\n        }\n        return value;\n    }\n \n    // Get the value of the head\n    public int peekFirst() throws Exception {\n        if (head == null) {\n            throw new Exception();\n        }\n        return head.val;\n    }\n \n    // Add item to the tail of the list\n    public void addLast(int value) {\n        if (tail == null) {\n            tail = new ListNode(value);\n            head = tail;\n        } else {\n            tail.next = new ListNode(value);\n            tail.next.prev = tail;\n            tail = tail.next;\n        }\n    }\n \n    // Remove the tail from the list and return its value\n    public int removeLast() throws Exception {\n        if (tail == null) {\n            throw new Exception();\n        }\n        int value = tail.val;\n        tail = tail.prev;\n        if (tail != null) {\n            tail.next = null;\n        } else {\n            head = null;\n        }\n        return value;\n    }\n \n    // Get the value of the tail\n    public int peekLast() throws Exception {\n        if (tail == null) {\n            throw new Exception();\n        }\n        return tail.val;\n    }\n \n    // Return whether the deque is empty\n    public boolean isEmpty() {\n        return head == null || tail == null;\n    }\n}\n")))}h.isMDXComponent=!0},697:function(e,t,n){t.Z=n.p+"assets/images/2022-06-14-11-02-19-e156245e40b56884ceac40d50a5ae114.png"}}]);