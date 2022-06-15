"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[9452],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(t),h=i,p=c["".concat(l,".").concat(h)]||c[h]||m[h]||a;return t?r.createElement(p,o(o({ref:n},d),{},{components:t})):r.createElement(p,o({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8956:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],s={title:"Arrays",description:"This will cover the most of the topics that will be part of the Arrays.",last_modified:new Date("2022-06-08T16:35:30.353Z"),sidebar_label:"Arrays"},l=void 0,u={unversionedId:"preparation/arrays",id:"preparation/arrays",title:"Arrays",description:"This will cover the most of the topics that will be part of the Arrays.",source:"@site/docs/preparation/arrays.md",sourceDirName:"preparation",slug:"/preparation/arrays",permalink:"/interview-prep/preparation/arrays",draft:!1,tags:[],version:"current",frontMatter:{title:"Arrays",description:"This will cover the most of the topics that will be part of the Arrays.",last_modified:"2022-06-08T16:35:30.353Z",sidebar_label:"Arrays"},sidebar:"docs",previous:{title:"Algorithms",permalink:"/interview-prep/preparation/algorithms"},next:{title:"Bit Manipulation",permalink:"/interview-prep/preparation/bit-manipulation"}},d={},m=[{value:"Array Creation/Initialization",id:"array-creationinitialization",level:2},{value:"Arrays Initialized with a Size",id:"arrays-initialized-with-a-size",level:3},{value:"Arrays Initialized with a Size and Values",id:"arrays-initialized-with-a-size-and-values",level:3},{value:"Method 1 - Using a Loop",id:"method-1---using-a-loop",level:4},{value:"Method 2 - In-built Function",id:"method-2---in-built-function",level:4},{value:"Dynamic Array",id:"dynamic-array",level:3},{value:"Convert Collection (List, ArrayList) to Array",id:"convert-collection-list-arraylist-to-array",level:3},{value:"Method - Iterative Method",id:"method---iterative-method",level:4},{value:"Method - In-built Function",id:"method---in-built-function",level:4},{value:"Convert Map to Array",id:"convert-map-to-array",level:3},{value:"Converting a Map&#39;s Keys and Values to an Array",id:"converting-a-maps-keys-and-values-to-an-array",level:4},{value:"Convert Set to Array",id:"convert-set-to-array",level:3},{value:"Method - Iterative Method",id:"method---iterative-method-1",level:4},{value:"Method - In-built Function",id:"method---in-built-function-1",level:4},{value:"Convert Stack to Array",id:"convert-stack-to-array",level:3},{value:"Method - Iterative Method",id:"method---iterative-method-2",level:4},{value:"Method - In-built Function",id:"method---in-built-function-2",level:4},{value:"Convert Queue to Array",id:"convert-queue-to-array",level:3},{value:"Method - Iterative Method",id:"method---iterative-method-3",level:4},{value:"Method - In-built Function",id:"method---in-built-function-3",level:4},{value:"Convert Deque to Array",id:"convert-deque-to-array",level:3},{value:"Method - Iterative Method",id:"method---iterative-method-4",level:4},{value:"Method - In-built Function",id:"method---in-built-function-4",level:4},{value:"Covers",id:"covers",level:4},{value:"Convert String of Digits to an Array",id:"convert-string-of-digits-to-an-array",level:3},{value:"Method 1",id:"method-1",level:4},{value:"Method 2",id:"method-2",level:4},{value:"Covers",id:"covers-1",level:4},{value:"Reverse an Array",id:"reverse-an-array",level:2},{value:"Using Another Array",id:"using-another-array",level:3},{value:"In-place Reverse",id:"in-place-reverse",level:3},{value:"Method 1 - Cutting to middle and reverse two halves.",id:"method-1---cutting-to-middle-and-reverse-two-halves",level:4},{value:"Method 2 - Two Pointers",id:"method-2---two-pointers",level:4},{value:"Covers",id:"covers-2",level:3},{value:"Find the Maximum and Minimum Values in an Array",id:"find-the-maximum-and-minimum-values-in-an-array",level:2},{value:"Method 1 - Using a Loop",id:"method-1---using-a-loop-1",level:3},{value:"Method 2 - In-built Function",id:"method-2---in-built-function-1",level:3},{value:"Method 3 - In-built Function - Collections.max() and Collections.min()",id:"method-3---in-built-function---collectionsmax-and-collectionsmin",level:3},{value:"Covers",id:"covers-3",level:3},{value:"Sorting an Array",id:"sorting-an-array",level:2},{value:"Sorting with Comparator - Anonymous Class",id:"sorting-with-comparator---anonymous-class",level:3},{value:"Sorting with Custom Comparator Class",id:"sorting-with-custom-comparator-class",level:3},{value:"Searching in an Array",id:"searching-in-an-array",level:2},{value:"Method 1 - Linear Search (No Order)",id:"method-1---linear-search-no-order",level:3},{value:"Method 2 - Binary Search (Sorted Ordered)",id:"method-2---binary-search-sorted-ordered",level:3},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"Kth Smallest Element in an Array",id:"kth-smallest-element-in-an-array",level:3},{value:"Method 1 - Using Priority Queue",id:"method-1---using-priority-queue",level:4},{value:"Method 2 - Using Sorting",id:"method-2---using-sorting",level:4},{value:"Sort an array of 0s, 1s and 2s",id:"sort-an-array-of-0s-1s-and-2s",level:3},{value:"Method 1 - Using 3 pointers",id:"method-1---using-3-pointers",level:4},{value:"Method 2 - Using Counters",id:"method-2---using-counters",level:4},{value:"Sub-array with given sum",id:"sub-array-with-given-sum",level:3},{value:"Method 1 - Brute Force",id:"method-1---brute-force",level:4},{value:"Move all negative elements to end of array",id:"move-all-negative-elements-to-end-of-array",level:3},{value:"Method 1 - Dequeue",id:"method-1---dequeue",level:4},{value:"Method 2 - Using Priority Queue",id:"method-2---using-priority-queue",level:4},{value:"Method 3 - Using Sorting",id:"method-3---using-sorting",level:4},{value:"Method 4 - Using Extra Space.",id:"method-4---using-extra-space",level:4}],c={toc:m};function h(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This will cover the most of the topics that will be part of the Arrays."),(0,a.kt)("h2",{id:"array-creationinitialization"},"Array Creation/Initialization"),(0,a.kt)("h3",{id:"arrays-initialized-with-a-size"},"Arrays Initialized with a Size"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    public static void main(String[] args){\n        int[] arr = new int[5];\n        arr[0] = 1;\n        arr[1] = 2;\n    }\n}\n")),(0,a.kt)("h3",{id:"arrays-initialized-with-a-size-and-values"},"Arrays Initialized with a Size and Values"),(0,a.kt)("h4",{id:"method-1---using-a-loop"},"Method 1 - Using a Loop"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    public static void main(String[] args){\n        int[] arr = new int[5];\n        arr[0] = 1;\n        arr[1] = 2;\n    }\n}\n")),(0,a.kt)("h4",{id:"method-2---in-built-function"},"Method 2 - In-built Function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    public static void main(String[] args){\n        int defaultValue = 0;\n        int[] arr = new int[5];\n        Arrays.fill(arr, defaultValue);\n    }\n}\n")),(0,a.kt)("h3",{id:"dynamic-array"},"Dynamic Array"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    public static void main(String[] args){\n        int[] arr = new int[]{1,2,3,4,5};\n    }\n}\n")),(0,a.kt)("h3",{id:"convert-collection-list-arraylist-to-array"},"Convert Collection (List, ArrayList) to Array"),(0,a.kt)("h4",{id:"method---iterative-method"},"Method - Iterative Method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    public static void main(String[] args){\n        List<Integer> list = new ArrayList<Integer>();\n        list.add(1); list.add(2); list.add(3); list.add(4);\n        int[] arr = new int[list.size()];\n        for(int i = 0; i < list.size(); i++){\n            arr[i] = list.get(i);\n        }\n    }\n}\n")),(0,a.kt)("h4",{id:"method---in-built-function"},"Method - In-built Function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    public static void main(String[] args){\n        List<Integer> list = new ArrayList<Integer>();\n        list.add(1); list.add(2); list.add(3); list.add(4);\n        Integer[] arr = list.toArray(new Integer[list.size()]);\n    }\n}\n")),(0,a.kt)("h3",{id:"convert-map-to-array"},"Convert Map to Array"),(0,a.kt)("h4",{id:"converting-a-maps-keys-and-values-to-an-array"},"Converting a Map's Keys and Values to an Array"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args){\n        Map<Integer, String> map = new HashMap<Integer, String>();\n        map.put(1, "One");\n        map.put(2, "Two");\n        map.put(3, "Three");\n\n        Integer[] keys = map.keySet().toArray(new Integer[map.keySet().size()]);\n        String[] values = map.values().toArray(new String[map.values().size()]);\n    }\n}\n\n')),(0,a.kt)("h3",{id:"convert-set-to-array"},"Convert Set to Array"),(0,a.kt)("h4",{id:"method---iterative-method-1"},"Method - Iterative Method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    public static void main(String[] args){\n        Set<Integer> set = new HashSet<Integer>();\n        set.add(1); set.add(2); set.add(3); set.add(4);\n        int[] arr = new int[set.size()];\n        int i = 0;\n        for(Integer num : set){\n            arr[i] = num;\n            i++;\n        }\n    }\n}\n\n")),(0,a.kt)("h4",{id:"method---in-built-function-1"},"Method - In-built Function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    public static void main(String[] args){\n        Set<Integer> set = new HashSet<Integer>();\n        set.add(1); set.add(2); set.add(3); set.add(4);\n        Integer[] arr = set.toArray(new Integer[set.size()]);\n    }\n}\n\n")),(0,a.kt)("h3",{id:"convert-stack-to-array"},"Convert Stack to Array"),(0,a.kt)("h4",{id:"method---iterative-method-2"},"Method - Iterative Method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    public static void main(String[] args){\n        Stack<Integer> stack = new Stack<Integer>();\n        stack.push(1); stack.push(2); stack.push(3); stack.push(4);\n        int[] arr = new int[stack.size()];\n        int i = 0;\n        while(!stack.isEmpty()){\n            arr[i] = stack.pop();\n            i++;\n        }\n    }\n}\n\n")),(0,a.kt)("h4",{id:"method---in-built-function-2"},"Method - In-built Function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    public static void main(String[] args){\n        Stack<Integer> stack = new Stack<Integer>();\n        stack.push(1); stack.push(2); stack.push(3); stack.push(4);\n        Integer[] arr = stack.toArray(new Integer[stack.size()]);\n    }\n}\n\n")),(0,a.kt)("h3",{id:"convert-queue-to-array"},"Convert Queue to Array"),(0,a.kt)("h4",{id:"method---iterative-method-3"},"Method - Iterative Method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    public static void main(String[] args){\n        Queue<Integer> queue = new LinkedList<Integer>();\n        queue.add(1); queue.add(2); queue.add(3); queue.add(4);\n        int[] arr = new int[queue.size()];\n        int i = 0;\n        while(!queue.isEmpty()){\n            arr[i] = queue.remove();\n            i++;\n        }\n    }\n}\n\n")),(0,a.kt)("h4",{id:"method---in-built-function-3"},"Method - In-built Function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    public static void main(String[] args){\n        Queue<Integer> queue = new LinkedList<Integer>();\n        queue.add(1); queue.add(2); queue.add(3); queue.add(4);\n        Integer[] arr = queue.toArray(new Integer[queue.size()]);\n    }\n}\n")),(0,a.kt)("h3",{id:"convert-deque-to-array"},"Convert Deque to Array"),(0,a.kt)("h4",{id:"method---iterative-method-4"},"Method - Iterative Method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    public static void main(String[] args){\n        Deque<Integer> deque = new ArrayDeque<Integer>();\n        deque.add(1); deque.add(2); deque.add(3); deque.add(4);\n        int[] arr = new int[deque.size()];\n        int i = 0;\n        while(!deque.isEmpty()){\n            arr[i] = deque.remove();\n            i++;\n        }\n    }\n}\n")),(0,a.kt)("h4",{id:"method---in-built-function-4"},"Method - In-built Function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    public static void main(String[] args){\n        Deque<Integer> deque = new ArrayDeque<Integer>();\n        deque.add(1); deque.add(2); deque.add(3); deque.add(4);\n        Integer[] arr = deque.toArray(new Integer[deque.size()]);\n    }\n}\n")),(0,a.kt)("h4",{id:"covers"},"Covers"),(0,a.kt)("p",null,"\u2705 Iterating over List.\n\u2705 Creating an array of integers.\n\u2705 ",(0,a.kt)("code",null,"List.size()"),", ",(0,a.kt)("code",null,"List.get()"),", ",(0,a.kt)("code",null,"List.toArray()")," methods.\n\u2705 ",(0,a.kt)("code",null,"Map.keySet()"),", ",(0,a.kt)("code",null,"Map.values()"),", ",(0,a.kt)("code",null,"Map.entrySet()")," methods.\n\u2705 ",(0,a.kt)("code",null,"Set.toArray()")," method.\n\u2705 ",(0,a.kt)("code",null,"Stack.pop()"),", ",(0,a.kt)("code",null,"Stack.isEmpty()"),", ",(0,a.kt)("code",null,"Stack.toArray()")," methods.\n\u2705 ",(0,a.kt)("code",null,"Queue.remove()"),", ",(0,a.kt)("code",null,"Queue.isEmpty()"),", ",(0,a.kt)("code",null,"Queue.toArray()")," methods.\n\u2705 ",(0,a.kt)("code",null,"Deque.remove()"),", ",(0,a.kt)("code",null,"Deque.isEmpty()"),", ",(0,a.kt)("code",null,"Deque.toArray()")," methods."),(0,a.kt)("h3",{id:"convert-string-of-digits-to-an-array"},"Convert String of Digits to an Array"),(0,a.kt)("h4",{id:"method-1"},"Method 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    public static void main(String[] args){\n        String str = \"12345\";\n        int[] arr = new int[str.length()];\n        for(int i = 0; i < str.length(); i++){\n            arr[i] = str.charAt(i) - '0';\n        }\n    }\n}\n")),(0,a.kt)("h4",{id:"method-2"},"Method 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args){\n        String str = "12345";\n        Character[] arr = str.toCharArray();\n    }\n}\n')),(0,a.kt)("h4",{id:"covers-1"},"Covers"),(0,a.kt)("p",null,"\u2705 Iterating over String.\n\u2705 Creating an array of characters.\n\u2705 ",(0,a.kt)("code",null,"String.length()"),", ",(0,a.kt)("code",null,"String.toCharArray()"),", ",(0,a.kt)("code",null,"String.charAt()")," methods."),(0,a.kt)("h2",{id:"reverse-an-array"},"Reverse an Array"),(0,a.kt)("h3",{id:"using-another-array"},"Using Another Array"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    public static void main(String[] args){\n        int[] arr = new int[]{1,2,3,4,5};\n        int[] arr2 = new int[arr.length];\n        for(int i = 0; i < arr.length; i++){\n            arr2[i] = arr[arr.length - i - 1];\n        }\n    }\n}\n// Time Complexity: O(n)\n// Space Complexity: O(n)\n\n")),(0,a.kt)("h3",{id:"in-place-reverse"},"In-place Reverse"),(0,a.kt)("h4",{id:"method-1---cutting-to-middle-and-reverse-two-halves"},"Method 1 - Cutting to middle and reverse two halves."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    public static void main(String[] args){\n        int[] arr = new int[]{1,2,3,4,5};\n        for(int i = 0; i < arr.length / 2; i++){\n            int temp = arr[i];\n            arr[i] = arr[arr.length - i - 1];\n            arr[arr.length - i - 1] = temp;\n        }\n    }\n}\n// Time Complexity: O(n)\n// Space Complexity: O(1)\n\n")),(0,a.kt)("h4",{id:"method-2---two-pointers"},"Method 2 - Two Pointers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    public static void main(String[] args){\n        int[] arr = new int[]{1,2,3,4,5};\n        int i = 0;\n        int j = arr.length - 1;\n        while(i < j){\n            int temp = arr[i];\n            arr[i] = arr[j];\n            arr[j] = temp;\n            i++;\n            j--;\n        }\n    }\n}\n// Time Complexity: O(n)\n// Space Complexity: O(1)\n\n")),(0,a.kt)("h3",{id:"covers-2"},"Covers"),(0,a.kt)("p",null,"\u2705 Iterating over array.\n\u2705 Swapping elements."),(0,a.kt)("h2",{id:"find-the-maximum-and-minimum-values-in-an-array"},"Find the Maximum and Minimum Values in an Array"),(0,a.kt)("h3",{id:"method-1---using-a-loop-1"},"Method 1 - Using a Loop"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    public static void main(String[] args){\n        int[] arr = new int[]{1,2,3,4,5};\n        int max = arr[0];\n        int min = arr[0];\n        for(int i = 1; i < arr.length; i++){\n            if(arr[i] > max){\n                max = arr[i];\n            }\n            if(arr[i] < min){\n                min = arr[i];\n            }\n        }\n    }\n}\n// Time Complexity: O(n)\n// Space Complexity: O(1)\n")),(0,a.kt)("h3",{id:"method-2---in-built-function-1"},"Method 2 - In-built Function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    public static void main(String[] args){\n        int[] arr = new int[]{1,2,3,4,5};\n        int max = Arrays.stream(arr).max().getAsInt();\n        int min = Arrays.stream(arr).min().getAsInt();\n    }\n}\n// Time Complexity: O(n)\n// Space Complexity: O(1)\n\n")),(0,a.kt)("h3",{id:"method-3---in-built-function---collectionsmax-and-collectionsmin"},"Method 3 - In-built Function - Collections.max() and Collections.min()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    public static void main(String[] args){\n        int[] arr = new int[]{1,2,3,4,5};\n        int max = Collections.max(Arrays.asList(arr));\n        int min = Collections.min(Arrays.asList(arr));\n    }\n}\n// Time Complexity: O(n)\n// Space Complexity: O(1)\n\n")),(0,a.kt)("h3",{id:"covers-3"},"Covers"),(0,a.kt)("p",null,"\u2705 Iterating over array.\n\u2705 Using ",(0,a.kt)("code",null,"Collections.max()")," and ",(0,a.kt)("code",null,"Collections.min()")," methods.\n\u2705 ",(0,a.kt)("code",null,"Arrays.stream().max().getAsInt()")," and ",(0,a.kt)("code",null,"Arrays.stream().min().getAsInt()")," methods."),(0,a.kt)("h2",{id:"sorting-an-array"},"Sorting an Array"),(0,a.kt)("a",{href:"https://shyamzzp.github.io/interview-prep/preparation/sorting-algorithms",target:"_blank",rel:"nofollow noopener noreferrer"},"Sorting Algorithms ",(0,a.kt)("svg",{class:"embedded-fa-icon"},(0,a.kt)("use",{href:"#external-link-alt"}))),(0,a.kt)("h3",{id:"sorting-with-comparator---anonymous-class"},"Sorting with Comparator - Anonymous Class"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    public static void main(String[] args){\n        int[] arr = new int[]{1,2,3,4,5};\n        Arrays.sort(arr, new Comparator<Integer>(){\n            public int compare(Integer a, Integer b){\n                return b - a; // Descending order\n                // return a - b; // Ascending order\n            }\n        });\n    }\n}\n// return value of compare() method is used to determine the order of elements in the array.\n// if return value is negative, then a is less than b.\n// if return value is positive, then a is greater than b.\n// if return value is zero, then a is equal to b.\n\n// Time Complexity: O(n^2)\n// Space Complexity: O(1)\n\n")),(0,a.kt)("h3",{id:"sorting-with-custom-comparator-class"},"Sorting with Custom Comparator Class"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class CustomComparator implements Comparator<Integer> {\n    public int compare(Integer a, Integer b) {\n        return b - a; // Descending order\n        // return a - b; // Ascending order\n    }\n}\npublic class Solution {\n    public static void main(String[] args){\n        int[] arr = new int[]{1,2,3,4,5};\n        Arrays.sort(arr, new CustomComparator());\n    }\n}\n// Time Complexity: O(n^2)\n// Space Complexity: O(1)\n\n")),(0,a.kt)("h2",{id:"searching-in-an-array"},"Searching in an Array"),(0,a.kt)("h3",{id:"method-1---linear-search-no-order"},"Method 1 - Linear Search (No Order)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args){\n        int[] arr = new int[]{1,2,3,4,5};\n        int target = 5;\n        for(int i = 0; i < arr.length; i++){\n            if(arr[i] == target){\n                System.out.println("Found at index: " + i);\n                break;\n            }\n        }\n    }\n}\n// Time Complexity: O(n)\n// Space Complexity: O(1)\n')),(0,a.kt)("h3",{id:"method-2---binary-search-sorted-ordered"},"Method 2 - Binary Search (Sorted Ordered)"),(0,a.kt)("a",{href:"https://shyamzzp.github.io/interview-prep/preparation/search-algorithms",target:"_blank",rel:"nofollow noopener noreferrer"},"Searching Algorithms ",(0,a.kt)("svg",{class:"embedded-fa-icon"},(0,a.kt)("use",{href:"#external-link-alt"}))),(0,a.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,a.kt)("h3",{id:"kth-smallest-element-in-an-array"},"Kth Smallest Element in an Array"),(0,a.kt)("p",null,"\u2705 Elements in the array might not be sorted. \u2705 All the elements in the array are distinct.\n\u2705 Elements is not null, empty or of zero length. \u2705 There is at least one element in the array."),(0,a.kt)("h4",{id:"method-1---using-priority-queue"},"Method 1 - Using Priority Queue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args){\n        int[] arr = new int[]{10,22,13,42,15};\n        PriorityQueue<Integer> pq = new PriorityQueue<Integer>();\n        for(int i = 0; i < arr.length; i++){\n            pq.add(arr[i]);\n        }\n        for(int i = 0; i < arr.length; i++){\n            if(i == arr.length - k){\n                System.out.println("Kth smallest element: " + pq.poll());\n            }\n        }\n    }\n}\n// Time Complexity: O(nlog(n))\n// Space Complexity: O(n)\n')),(0,a.kt)("h4",{id:"method-2---using-sorting"},"Method 2 - Using Sorting"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args){\n        int[] arr = new int[]{10,22,13,42,15};\n        Arrays.sort(arr);\n        System.out.println("Kth smallest element: " + arr[arr.length - k]);\n    }\n}\n// Time Complexity: O(nlog(n))\n// Space Complexity: O(1)\n')),(0,a.kt)("h3",{id:"sort-an-array-of-0s-1s-and-2s"},"Sort an array of 0s, 1s and 2s"),(0,a.kt)("h4",{id:"method-1---using-3-pointers"},"Method 1 - Using 3 pointers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"// Sort an array of 0s, 1s and 2s\npublic class Solution {\n    public static void main(String[] args){\n        int[] arr = new int[]{0,1,2,0,1,2,0,1,2};\n        int i = 0;\n        int j = n - 1;\n        int lengthCounter = 0;\n        while(lengthCounter < arr.length){\n            if(arr[i] == 0){\n                i++;\n            }\n            else if(arr[j] == 2){\n                j--;\n            }\n            else{\n                arr[lengthCounter] = arr[i];\n                i++;\n                lengthCounter++;\n            }\n        }\n        System.out.println(Arrays.toString(arr));\n    }\n}\n// Time Complexity: O(n)\n// Space Complexity: O(1)\n")),(0,a.kt)("h4",{id:"method-2---using-counters"},"Method 2 - Using Counters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"// Sort an array of 0s, 1s and 2s\npublic class Solution {\n    public static void main(String[] args){\n        int[] arr = new int[]{0,1,2,0,1,2,0,1,2};\n        int zeroCounter = 0;\n        int oneCounter = 0;\n        int twoCounter = 0;\n        for(int i = 0; i < arr.length; i++){\n            if(arr[i] == 0){\n                zeroCounter++;\n            }\n            else if(arr[i] == 1){\n                oneCounter++;\n            }\n            else{\n                twoCounter++;\n            }\n        }\n        int lengthCounter = 0;\n        for(int i = 0; i < zeroCounter; i++){\n            arr[lengthCounter] = 0;\n            lengthCounter++;\n        }\n        for(int i = 0; i < oneCounter; i++){\n            arr[lengthCounter] = 1;\n            lengthCounter++;\n        }\n        for(int i = 0; i < twoCounter; i++){\n            arr[lengthCounter] = 2;\n            lengthCounter++;\n        }\n        System.out.println(Arrays.toString(arr));\n    }\n}\n// Time Complexity: O(n)\n// Space Complexity: O(1)\n\n")),(0,a.kt)("h3",{id:"sub-array-with-given-sum"},"Sub-array with given sum"),(0,a.kt)("h4",{id:"method-1---brute-force"},"Method 1 - Brute Force"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args){\n        int[] arr = new int[]{1,2,3,4,5,6,7,8,9,10};\n        int sum = 15;\n        for(int i = 0; i < arr.length; i++){\n            for(int j = i; j < arr.length; j++){\n                int sumOfSubArray = 0;\n                for(int k = i; k <= j; k++){\n                    sumOfSubArray += arr[k];\n                }\n                if(sumOfSubArray == sum){\n                    System.out.println("Sub-array found at index: " + i + " to " + j);\n                }\n            }\n        }\n    }\n}\n// Time Complexity: O(n^2)\n// Space Complexity: O(1)\n')),(0,a.kt)("h3",{id:"move-all-negative-elements-to-end-of-array"},"Move all negative elements to end of array"),(0,a.kt)("h4",{id:"method-1---dequeue"},"Method 1 - Dequeue"),(0,a.kt)("code",null,"\u2705 Using Dequeue method, iterate over the elements and keep a count of the number of negative elements. \u2705 Once the elements are pushed to Dequeue and then push them to the array. \u2705With the count of the negative values, reverse the array from end."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    void segregateElements(int arr[],int n){\n        // \n        Deque<Integer> deque = new LinkedList<Integer>();\n        // If negative move to end of array and remove that element.\n        for(int i = 0; i < n; i++){\n            if(arr[i] < 0){\n                deque.add(arr[i]);\n                arr[i] = 0;\n            }\n        }\n        // Move all negative elements to end of array.\n        int i = 0;\n        while(!deque.isEmpty()){\n            arr[i] = deque.remove();\n            i++;\n        }\n    }\n}\n// Time Complexity: O(n)\n// Space Complexity: O(n)\n")),(0,a.kt)("h4",{id:"method-2---using-priority-queue"},"Method 2 - Using Priority Queue"),(0,a.kt)("code",null,"\u2705 This method is not recommended as it is `O(nlog(n))`. \u2705 But it is a good method to understand how Min-Heap works on array. \u2705 Also if the problem is asking not to change the respective positions of the elements of the array, then this method is not the choice."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    void segregateElements(int arr[],int n){\n        PriorityQueue<Integer> pq = new PriorityQueue<Integer>();\n        for(int i = 0; i < n; i++){\n            if(arr[i] < 0){\n                pq.add(arr[i]);\n            }\n        }\n        for(int i = 0; i < n; i++){\n            if(arr[i] >= 0){\n                arr[i] = pq.poll();\n            }\n        }\n    }\n}\n// Time Complexity: O(nlog(n))\n// Space Complexity: O(n)\n")),(0,a.kt)("h4",{id:"method-3---using-sorting"},"Method 3 - Using Sorting"),(0,a.kt)("code",null,"\u2705 This method is not recommended as it is `O(nlog(n))`. \u2705 But it is a good method to understand how to sort an array. \u2705 Also if the problem is asking not to change the respective positions of the elements of the array, then this method is not the choice."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    void segregateElements(int arr[],int n){\n        Arrays.sort(arr);\n        for(int i = 0; i < n; i++){\n            if(arr[i] < 0){\n                arr[i] = arr[n - 1];\n                arr[n - 1] = -1;\n                n--;\n            }\n        }\n    }\n}\n// Time Complexity: O(nlog(n))\n// Space Complexity: O(1)\n")),(0,a.kt)("h4",{id:"method-4---using-extra-space"},"Method 4 - Using Extra Space."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    void segregateElements(int arr[],int n){\n        // Step 1: Create an array to store the negative values.\n        int[] negativeArray = new int[n];\n        int negativeArrayCounter = 0;\n        // Step 2: Create an array to store the positive values.\n        int[] positiveArray = new int[n];\n        int positiveArrayCounter = 0;\n        // Step 3: Iterate over the array and store the negative values in the negativeArray.\n        for(int i = 0; i < n; i++){\n            if(arr[i] < 0){\n                negativeArray[negativeArrayCounter] = arr[i];\n                negativeArrayCounter++;\n            }\n            else{\n                positiveArray[positiveArrayCounter] = arr[i];\n                positiveArrayCounter++;\n            }\n        }\n        // Step 4: Iterate over the positiveArray and store the values in the array.\n        int i = 0;\n        for(int j = 0; j < positiveArrayCounter; j++){\n            arr[i] = positiveArray[j];\n            i++;\n        }\n        // Step 5: Iterate over the negativeArray and store the values in the array.\n        \n        for(int j = 0; j < negativeArrayCounter; j++){\n            arr[i] = negativeArray[j];\n            i++;\n        }\n    }\n}\n// Time Complexity: O(n)\n// Space Complexity: O(n)\n")))}h.isMDXComponent=!0}}]);