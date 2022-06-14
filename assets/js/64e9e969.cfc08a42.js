"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[1129],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,h=m["".concat(o,".").concat(c)]||m[c]||s[c]||i;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5348:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],u={title:"Deque (Doubly Ended Queue)",description:"This will cover the most of the topics that will be part of the Deque.",last_modified:new Date("2022-06-08T15:36:32.363Z"),sidebar_label:"Deque"},o=void 0,d={unversionedId:"preparation/dequeue",id:"preparation/dequeue",title:"Deque (Doubly Ended Queue)",description:"This will cover the most of the topics that will be part of the Deque.",source:"@site/docs/preparation/dequeue.md",sourceDirName:"preparation",slug:"/preparation/dequeue",permalink:"/interview-prep/preparation/dequeue",draft:!1,tags:[],version:"current",frontMatter:{title:"Deque (Doubly Ended Queue)",description:"This will cover the most of the topics that will be part of the Deque.",last_modified:"2022-06-08T15:36:32.363Z",sidebar_label:"Deque"},sidebar:"docs",previous:{title:"Comparators",permalink:"/interview-prep/preparation/comparators"},next:{title:"Depth First Search",permalink:"/interview-prep/preparation/dfs"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Operations &amp; Complexities",id:"operations--complexities",level:2},{value:"Implementation of Deque",id:"implementation-of-deque",level:2},{value:"Using Circular Array",id:"using-circular-array",level:3},{value:"Using Linked List",id:"using-linked-list",level:3},{value:"ArrayDeque Demo",id:"arraydeque-demo",level:2}],m={toc:s};function c(e){var t=e.components,u=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This will cover the most of the topics that will be part of the Deque."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"A double-ended queue (abbreviated to deque) is an abstract data type that generalizes a queue, for which elements can be added to or removed from either the front (head) or back (tail)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dequeue-dequeue.md",src:n(697).Z,width:"1748",height:"694"})),(0,i.kt)("h2",{id:"operations--complexities"},"Operations & Complexities"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Deque<Integer> deque = new ArrayDeque<>();")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Operation"),(0,i.kt)("th",{parentName:"tr",align:null},"Complexity"),(0,i.kt)("th",{parentName:"tr",align:null},"Snippet"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"addFirst"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"O(1)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"deque.addFirst(element)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"addLast"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"O(1)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"deque.addLast(element)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"removeFirst"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"O(1)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"deque.removeFirst()"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"removeLast"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"O(1)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"deque.removeLast()"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"peekFirst"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"O(1)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"deque.peekFirst()"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"peekLast"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"O(1)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"deque.peekLast()"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"isEmpty"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"O(1)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"deque.isEmpty()"))))),(0,i.kt)("h2",{id:"implementation-of-deque"},"Implementation of Deque"),(0,i.kt)("h3",{id:"using-circular-array"},"Using Circular Array"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class CircularArrayDeque {\n    private int head; // the first node in deque, not the first item in array\n    private int tail; // the last node in deque, not the first item in array\n    private int[] arr;\n    private int size;\n \n    public CircularArrayDeque(int capacity) {\n        arr = new int[capacity];\n        head = 0;\n        tail = 0;\n        size = 0;\n    }\n \n    // Add item to the head of the deque\n    public void addFirst(int value) {\n        // check if deque is full\n        if (isFull()) {\n            return;\n        }\n \n        head = head - 1;\n        if (head < 0) {\n            head = arr.length - 1;\n        }\n        arr[head] = value;\n        size += 1;\n    }\n \n    // Remove the first item from the deque and return its value\n    public int removeFirst() throws Exception {\n        if (isEmpty()) {\n            throw new Exception("Circular Array Deque is empty when dequeue!");\n        }\n        int value = arr[head];\n        head = (head + 1) % arr.length;\n        size -= 1;\n        return value;\n    }\n \n    // Get the first item\n    public int peekFirst() throws Exception {\n        if (isEmpty()) {\n            throw new Exception("Circular Array Deque is empty when peek!");\n        }\n        return arr[head];\n    }\n \n    // Add item to the end of the deque\n    public void addLast(int value) {\n        // check if deque is full\n        if (isFull()) {\n            return;\n        }\n        tail = (head + size) % arr.length;\n        arr[tail] = value;\n        size += 1;\n    }\n \n    // Remove the last item from the deque and return its value\n    public int removeLast() throws Exception {\n        if (isEmpty()) {\n            throw new Exception("Circular Array Deque is empty when dequeue!");\n        }\n \n        int value = arr[tail];\n        tail = tail - 1;\n        if (tail < 0) {\n            tail = arr.length - 1;\n        }\n        size -= 1;\n        return value;\n    }\n \n    // Get the last item\n    public int peekLast() throws Exception {\n        if (isEmpty()) {\n            throw new Exception("Circular Array Deque is empty when peek!");\n        }\n        return arr[tail];\n    }\n \n    // Return whether the queue is full\n    public boolean isFull() {\n        return size == arr.length;\n    }\n \n    // Return whether the queue is empty\n    public boolean isEmpty() {\n        return size == 0;\n    }\n}\n')),(0,i.kt)("h3",{id:"using-linked-list"},"Using Linked List"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"\npublic class ListNode {\n    public int val;\n    public ListNode prev;\n    public ListNode next;\n    public ListNode(int val) {\n        this.val = val;\n        this.prev = null;\n        this.next = null;\n    }\n}\n\npublic class LinkedListDeque {\n    private ListNode head; // the first node\n    private ListNode tail; // the last node\n \n    public LinkedListDeque() {\n        head = null;\n        tail = null;\n    }\n \n    // Add item to the head of the list\n    public void addFirst(int value) {\n        if (head == null) {\n            head = new ListNode(value);\n            tail = head;\n        } else {\n            head.prev = new ListNode(value);\n            head.prev.next = head;\n            head = head.prev;\n        }\n    }\n \n    // Remove the head from the list and return its value\n    public int removeFirst() throws Exception {\n        if (head == null) {\n            throw new Exception();\n        }\n        int value = head.val;\n        head = head.next;\n        if (head != null) {\n            head.prev = null;\n        } else {\n            tail = null;\n        }\n        return value;\n    }\n \n    // Get the value of the head\n    public int peekFirst() throws Exception {\n        if (head == null) {\n            throw new Exception();\n        }\n        return head.val;\n    }\n \n    // Add item to the tail of the list\n    public void addLast(int value) {\n        if (tail == null) {\n            tail = new ListNode(value);\n            head = tail;\n        } else {\n            tail.next = new ListNode(value);\n            tail.next.prev = tail;\n            tail = tail.next;\n        }\n    }\n \n    // Remove the tail from the list and return its value\n    public int removeLast() throws Exception {\n        if (tail == null) {\n            throw new Exception();\n        }\n        int value = tail.val;\n        tail = tail.prev;\n        if (tail != null) {\n            tail.next = null;\n        } else {\n            head = null;\n        }\n        return value;\n    }\n \n    // Get the value of the tail\n    public int peekLast() throws Exception {\n        if (tail == null) {\n            throw new Exception();\n        }\n        return tail.val;\n    }\n \n    // Return whether the deque is empty\n    public boolean isEmpty() {\n        return head == null || tail == null;\n    }\n}\n")),(0,i.kt)("h2",{id:"arraydeque-demo"},"ArrayDeque Demo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class ArrayDequeDemo {\n  public static void main(String[] args) {\n    Deque<Integer> deque = new ArrayDeque<>();\n\n    for (int i = 0; i < 8; i++) {\n      int element = ThreadLocalRandom.current().nextInt(10, 100);\n      if (ThreadLocalRandom.current().nextBoolean()) {\n        deque.offerFirst(element);\n        System.out.println("deque.offerFirst(" + element + ") --\x3e deque = " + deque);\n      } else {\n        deque.offerLast(element);\n        System.out.println("deque.offerLast(" + element + ")  --\x3e deque = " + deque);\n      }\n    }\n\n    System.out.println();\n    System.out.println("deque.isEmpty()   = " + deque.isEmpty());\n    System.out.println("deque.peekFirst() = " + deque.peekFirst());\n    System.out.println("deque.peekLast()  = " + deque.peekLast());\n    System.out.println();\n\n    while (!deque.isEmpty()) {\n      if (ThreadLocalRandom.current().nextBoolean()) {\n        System.out.println("deque.pollFirst() = " + deque.pollFirst()\n            + " --\x3e deque = " + deque);\n      } else {\n        System.out.println("deque.pollLast()  = " + deque.pollLast()\n            + " --\x3e deque = " + deque);\n      }\n    }\n\n    System.out.println();\n    System.out.println("deque.isEmpty()   = " + deque.isEmpty());\n    System.out.println("deque.peekFirst() = " + deque.peekFirst());\n    System.out.println("deque.peekLast()  = " + deque.peekLast());\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"deque.offerLast(25)  --\x3e deque = [25]\ndeque.offerFirst(15) --\x3e deque = [15, 25]\ndeque.offerFirst(26) --\x3e deque = [26, 15, 25]\ndeque.offerFirst(39) --\x3e deque = [39, 26, 15, 25]\ndeque.offerLast(25)  --\x3e deque = [39, 26, 15, 25, 25]\ndeque.offerLast(50)  --\x3e deque = [39, 26, 15, 25, 25, 50]\ndeque.offerFirst(95) --\x3e deque = [95, 39, 26, 15, 25, 25, 50]\ndeque.offerLast(66)  --\x3e deque = [95, 39, 26, 15, 25, 25, 50, 66]\n\ndeque.isEmpty()   = false\ndeque.peekFirst() = 95\ndeque.peekLast()  = 66\n\ndeque.pollFirst() = 95 --\x3e deque = [39, 26, 15, 25, 25, 50, 66]\ndeque.pollLast()  = 66 --\x3e deque = [39, 26, 15, 25, 25, 50]\ndeque.pollLast()  = 50 --\x3e deque = [39, 26, 15, 25, 25]\ndeque.pollLast()  = 25 --\x3e deque = [39, 26, 15, 25]\ndeque.pollFirst() = 39 --\x3e deque = [26, 15, 25]\ndeque.pollLast()  = 25 --\x3e deque = [26, 15]\ndeque.pollFirst() = 26 --\x3e deque = [15]\ndeque.pollLast()  = 15 --\x3e deque = []\n\ndeque.isEmpty()   = true\ndeque.peekFirst() = null\ndeque.peekLast()  = null\n")))}c.isMDXComponent=!0},697:function(e,t,n){t.Z=n.p+"assets/images/2022-06-14-11-02-19-e156245e40b56884ceac40d50a5ae114.png"}}]);