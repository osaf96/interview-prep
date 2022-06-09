"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[2356],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1536:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],l={title:"Algorithms",description:"This will cover the most of the topics that will be part of the Algorithms.",last_modified:new Date("2022-06-08T16:35:30.353Z"),sidebar_label:"Algorithms"},s=void 0,c={unversionedId:"preparation/algorithms",id:"preparation/algorithms",title:"Algorithms",description:"This will cover the most of the topics that will be part of the Algorithms.",source:"@site/docs/preparation/algorithms.md",sourceDirName:"preparation",slug:"/preparation/algorithms",permalink:"/interview-prep/preparation/algorithms",draft:!1,tags:[],version:"current",frontMatter:{title:"Algorithms",description:"This will cover the most of the topics that will be part of the Algorithms.",last_modified:"2022-06-08T16:35:30.353Z",sidebar_label:"Algorithms"},sidebar:"docs",previous:{title:"Work-life balance",permalink:"/interview-prep/mindset/work-life-balance"},next:{title:"Bit Manipulation",permalink:"/interview-prep/preparation/bit-manipulation"}},u={},p=[{value:"0-1 Knapsack Problem",id:"0-1-knapsack-problem",level:2},{value:"Knapsack Recursive",id:"knapsack-recursive",level:3},{value:"Knapsack Recursive + Memoization",id:"knapsack-recursive--memoization",level:3},{value:"Unbounded Knapsack (Repetition of items allowed)",id:"unbounded-knapsack-repetition-of-items-allowed",level:2},{value:"LRU Cache Implementation.",id:"lru-cache-implementation",level:2},{value:"Longest Common Subsequence.",id:"longest-common-subsequence",level:2},{value:"Merge K Sorted Linked List.",id:"merge-k-sorted-linked-list",level:2},{value:"Breadth-First Search (BFS) in 2D Matrix",id:"breadth-first-search-bfs-in-2d-matrix",level:2},{value:"Kadane\u2019s Algorithm (Largest Sum of Contiguous Subarray)",id:"kadanes-algorithm-largest-sum-of-contiguous-subarray",level:2},{value:"Boyer-Moore Voting Algorithm (Majority Element)",id:"boyer-moore-voting-algorithm-majority-element",level:2},{value:"Brian Kernighan\u2019s Algorithm (Count set bits in an integer)",id:"brian-kernighans-algorithm-count-set-bits-in-an-integer",level:2}],m={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This will cover the most of the topics that will be part of the Algorithms."),(0,r.kt)("h2",{id:"0-1-knapsack-problem"},"0-1 Knapsack Problem"),(0,r.kt)("p",null,"Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack.\nYou cannot break an item, either pick the complete item or don\u2019t pick it (0-1 property)."),(0,r.kt)("h3",{id:"knapsack-recursive"},"Knapsack Recursive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class KnapsackRecursive {\n    static int knapSack(int W, int wt[], int val[], int n) {\n    // Base Case\n    if (n == 0 || W == 0) return 0;\n\n    // If weight of the nth item is\n    // more than Knapsack capacity W,\n    // then this item cannot be included\n    // in the optimal solution\n    if (wt[n - 1] > W) return knapSack(W, wt, val, n - 1);\n    // Return the maximum of two cases:\n    // (1) nth item included\n    // (2) not included\n    else return max(\n        val[n - 1] + knapSack(W - wt[n - 1], wt, val, n - 1),\n        knapSack(W, wt, val, n - 1)\n    );\n    }\n\n    // Driver code\n    public static void main(String args[]) {\n    int val[] = new int[] { 60, 100, 120 };\n    int wt[] = new int[] { 10, 20, 30 };\n    int W = 50;\n    int n = val.length;\n    System.out.println(knapSack(W, wt, val, n));\n    }\n}\n\n// Time Complexity : O(2^n)\n// Auxiliary Space : O(1)\n")),(0,r.kt)("h3",{id:"knapsack-recursive--memoization"},"Knapsack Recursive + Memoization"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class KnapsackRecursiveMemoization{\n    static int knapSackRec(int W, int wt[], int val[], int n, int[][] dp) {\n    // Base condition\n    if (n == 0 || W == 0) return 0;\n\n    if (dp[n][W] != -1) return dp[n][W];\n\n    if (wt[n - 1] > W) // Store the value of function call\n    // stack in table before return\n    return (\n        dp[n][W] = knapSackRec(W, wt, val, n - 1, dp)\n    ); else // Return value of table after storing\n    return (\n        dp[n][W] =\n        max(\n            (val[n - 1] + knapSackRec(W - wt[n - 1], wt, val, n - 1, dp)),\n            knapSackRec(W, wt, val, n - 1, dp)\n        )\n    );\n    }\n\n    static int knapSack(int W, int wt[], int val[], int N) {\n    int dp[][] = new int[N + 1][W + 1];\n    // Loop to initially filled the table with -1\n    for (int i = 0; i < N + 1; i++) for (int j = 0; j < W + 1; j++) dp[i][j] = -1;\n    return knapSackRec(W, wt, val, N, dp);\n    }\n\n    // Driver Code\n    public static void main(String[] args) {\n    int val[] = { 60, 100, 120 };\n    int wt[] = { 10, 20, 30 };\n    int W = 50;\n    int N = val.length;\n    System.out.println(knapSack(W, wt, val, N));\n    }\n}\n\n// Time Complexity: O(N*W). \n// Auxiliary Space: O(N*W).\n")),(0,r.kt)("h2",{id:"unbounded-knapsack-repetition-of-items-allowed"},"Unbounded Knapsack (Repetition of items allowed)"),(0,r.kt)("p",null,"Given a knapsack weight W and a set of n items with certain value vali and weight wti, we need to calculate the maximum amount that could make up this quantity exactly.\nThis is different from classical Knapsack problem, here we are allowed to use unlimited number of instances of an item."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nclass KnapsackDP {\n    private static int unboundedKnapsack(int W, int n, int[] val, int[] wt) {\n    // dp[i] is going to store maximum value\n    // with knapsack capacity i.\n    int dp[] = new int[W + 1];\n\n    // Fill dp[] using above recursive formula\n    for (int i = 0; i <= W; i++) {\n        for (int j = 0; j < n; j++) {\n        if (wt[j] <= i) {\n            dp[i] = max(dp[i], dp[i - wt[j]] + val[j]);\n        }\n        }\n    }\n    return dp[W];\n    }\n\n// int W = 100;\n// int val[] = { 10, 30, 20 };\n// int wt[] = { 5, 10, 15 };\n// int n = val.length;\n// unboundedKnapsack(W, n, val, wt);\n\n// Time Complexity: O(N*W). \n// Auxiliary Space: O(W).\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n// dp[i] = 0\n// dp[i] = max(dp[i], dp[i-wt[j]] + val[j] \n//                    where j varies from 0 \n//                    to n-1 such that:\n//                    wt[j] <= i\n// result = d[W]\n")),(0,r.kt)("h2",{id:"lru-cache-implementation"},"LRU Cache Implementation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    int capacity;\n    Queue<Integer> q = new ArrayDeque<>();\n    Map<Integer, Integer> map = new LinkedHashMap<>();\n\n    public LRUCache(int capacity) {\n    this.capacity = capacity;\n    }\n\n    public int get(int key) {\n    if (map.containsKey(key)) {\n        q.remove(key); //O(n)\n        q.offer(key); //O(1)\n        return map.get(key); //O(1)\n    } else return -1;\n    }\n\n    public void put(int key, int value) {\n    if (map.containsKey(key)) {\n        q.remove(key); //O(n)\n        q.offer(key); //O(1)\n        map.put(key, value); //O(1)\n    } else {\n        if (q.size() < capacity) q.offer(key); else { //q.size() == capacity\n        map.remove(q.poll());\n        q.offer(key);\n        }\n        map.put(key, value);\n    }\n    }\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Here are some additional properties and implementation methods :")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"LRU cache is can also be implemented by\npairing a ",(0,r.kt)("strong",{parentName:"em"},"doubly linked list")," with a ",(0,r.kt)("strong",{parentName:"em"},"hash map"),".")),(0,r.kt)("li",{parentName:"ul"},"Space Complexity : ",(0,r.kt)("inlineCode",{parentName:"li"},"O(n)")),(0,r.kt)("li",{parentName:"ul"},"Time Complexity :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"get least recently used item")," ",(0,r.kt)("inlineCode",{parentName:"li"},"O(1)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"access item")," ",(0,r.kt)("inlineCode",{parentName:"li"},"O(n)")))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'class LRUCache {\n    Set<Integer> cache;\n    int capacity;\n\n    public LRUCache(int capacity) {\n    this.cache = new LinkedHashSet<Integer>(capacity);\n    this.capacity = capacity;\n    }\n\n    public boolean get(int key) {\n    if (!cache.contains(key)) return false;\n    cache.remove(key);\n    cache.add(key);\n    return true;\n    }\n\n    public void put(int key) {\n    if (cache.size() == capacity) {\n        int firstKey = cache.iterator().next();\n        cache.remove(firstKey);\n    }\n    cache.add(key);\n    }\n\n    public void display() {\n    LinkedList<Integer> list = new LinkedList<>(cache);\n    Iterator<Integer> itr = list.descendingIterator();\n    while (itr.hasNext()) System.out.print(itr.next() + " ");\n    }\n}\n')),(0,r.kt)("h2",{id:"longest-common-subsequence"},"Longest Common Subsequence."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'class Solution {\n\n    void lcs(String S1, String S2, int m, int n) {\n    int[][] LCS_table = new int[m + 1][n + 1];\n\n    // Building the mtrix in bottom-up way\n    for (int i = 0; i <= m; i++) {\n        for (int j = 0; j <= n; j++) {\n        if (i == 0 || j == 0) LCS_table[i][j] = 0; else if (\n            S1.charAt(i - 1) == S2.charAt(j - 1)\n        ) LCS_table[i][j] = LCS_table[i - 1][j - 1] + 1; else LCS_table[i][j] =\n            Math.max(LCS_table[i - 1][j], LCS_table[i][j - 1]);\n        }\n    }\n        // If you just want to get the length of the longest \n        // subsequence you can return LCS_table[m][n];\n        // For printing the sequence.\n    int index = LCS_table[m][n];\n    int temp = index;\n\n    char[] lcs = new char[index + 1];\n    lcs[index] = \'\\0\';\n\n    int i = m, j = n;\n    while (i > 0 && j > 0) {\n        if (S1.charAt(i - 1) == S2.charAt(j - 1)) {\n        lcs[index - 1] = S1.charAt(i - 1);\n\n        i--;\n        j--;\n        index--;\n        } else if (LCS_table[i - 1][j] > LCS_table[i][j - 1]) i--; else j--;\n    }\n\n    // Printing the sub sequences\n    System.out.print("S1 : " + S1 + "\\nS2 : " + S2 + "\\nLCS: ");\n    for (int k = 0; k <= temp; k++) System.out.print(lcs[k]);\n    System.out.println("");\n    }\n}\n\n// Time Complexity : O(n*m)\n// Auxiliary Space : O(n*m + lengthOfLongestSequence)\n')),(0,r.kt)("h2",{id:"merge-k-sorted-linked-list"},"Merge K Sorted Linked List."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ListNode merge(ListNode[] heads) {\nListNode resultHead = null;\nListNode current = null;\n\nPriorityQueue<ListNode> pq = new PriorityQueue<>(\n    new Comparator<ListNode>() {\n\n    @Override\n    public int compare(ListNode o1, ListNode o2) {\n        return o1.data - o2.data;\n    }\n    }\n);\n\n//insert all heads into priority queue\nfor (int i = 0; i < heads.length; i++) {\n    if (heads[i] != null) {\n    pq.offer(heads[i]);\n    }\n}\n\nwhile (!pq.isEmpty()) {\n    //extract the min from priority queue\n    ListNode node = pq.poll();\n\n    //add it to result Head\n    if (resultHead == null) {\n    resultHead = node;\n    current = node;\n    } else {\n    current.next = node;\n    current = current.next;\n    }\n\n    //add next List Node to priority queue\n    if (node.next != null) {\n    pq.add(node.next);\n    }\n}\nreturn resultHead;\n}\n")),(0,r.kt)("h2",{id:"breadth-first-search-bfs-in-2d-matrix"},"Breadth-First Search (BFS) in 2D Matrix"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'class Solution {\n\n  public void BFS(int[][] grid) {\n    int h = grid.length;\n    if (h == 0) return;\n    int l = grid[0].length;\n\n    boolean[][] visited = new boolean[h][l];\n\n    Queue<String> queue = new LinkedList<>();\n\n    queue.add(0 + "," + 0);\n\n    System.out.println("Breadth-First Traversal: ");\n    while (queue.isEmpty() == false) {\n      String x = queue.remove();\n      int row = Integer.parseInt(x.split(",")[0]);\n      int col = Integer.parseInt(x.split(",")[1]);\n\n      if (\n        row < 0 || col < 0 || row >= h || col >= l || visited[row][col]\n      ) continue;\n\n      visited[row][col] = true;\n      System.out.print(grid[row][col] + " ");\n      queue.add(row + "," + (col - 1)); //go left\n      queue.add(row + "," + (col + 1)); //go right\n      queue.add((row - 1) + "," + col); //go up\n      queue.add((row + 1) + "," + col); //go down\n    }\n  }\n}\n\n')),(0,r.kt)("h2",{id:"kadanes-algorithm-largest-sum-of-contiguous-subarray"},"Kadane\u2019s Algorithm (Largest Sum of Contiguous Subarray)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class KadaneAlgo{\n    int maxSubArraySum(int a[]) {\n    int max_so_far = a[0], max_ending_here = a[0];\n\n    for (int i = 0; i < a.length; i++) {\n        max_ending_here = max_ending_here + a[i];\n        max_so_far = Math.max(max_so_far,max_ending_here);\n        if (max_ending_here < 0) max_ending_here = 0;\n    }\n    return max_so_far;\n    }\n}\n")),(0,r.kt)("h2",{id:"boyer-moore-voting-algorithm-majority-element"},"Boyer-Moore Voting Algorithm (Majority Element)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int majorityElement(int[] nums) {\n        int count = 0;\n        Integer candidate = null;\n        for (int num : nums) {\n            if (count == 0) {\n                candidate = num;\n            }\n            count += (num == candidate) ? 1 : -1;\n        }\n        return candidate;\n    }\n}\n// Time complexity : O(n)\n// Space complexity : O(1)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"The\xa0",(0,r.kt)("strong",{parentName:"em"},"Boyer-Moore voting")," algorithm is one of the popular optimal\nalgorithms which is used to find the majority element among the\ngiven elements that have more than N/ 2 occurrences. This works\nperfectly fine for finding the majority element which takes 2 traversals\nover the given elements, which works in O(N) time complexity\nand O(1) space complexity."),"\n",(0,r.kt)("em",{parentName:"p"},"Returns you the majority candidate not the\nactual count of the element. For that you\nhave to use another algorithm."))),(0,r.kt)("h2",{id:"brian-kernighans-algorithm-count-set-bits-in-an-integer"},"Brian Kernighan\u2019s Algorithm (Count set bits in an integer)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    int countSetBits(int n) {\n        int count = 0;\n        while (n > 0) {\n            n &= (n - 1);\n            count++;\n        }\n        return count;\n    }\n}\n// Time complexity : O(log n)\n// Space complexity : O(1)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"The\xa0",(0,r.kt)("strong",{parentName:"em"},"Boyer-Moore voting")," algorithm is one of the popular optimal\nalgorithms which is used to find the majority element among the\ngiven elements that have more than N/ 2 occurrences. This works\nperfectly fine for finding the majority element which takes 2 traversals\nover the given elements, which works in O(N) time complexity\nand O(1) space complexity."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Returns you the majority candidate not the\nactual count of the element. For that you\nhave to use another algorithm."))))}d.isMDXComponent=!0}}]);