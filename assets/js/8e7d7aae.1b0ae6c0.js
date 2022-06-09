"use strict";(self.webpackChunkinterview_prep=self.webpackChunkinterview_prep||[]).push([[7955],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,g=u["".concat(s,".").concat(h)]||u[h]||c[h]||a;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2333:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={title:"Sorting Algorithms",description:"This will cover the most of the topics that will be part of the Sorting Algorithms.",last_modified:new Date("2022-06-08T16:35:30.353Z"),sidebar_label:"Sorting Algorithms"},s=void 0,p={unversionedId:"preparation/sorting-algorithms",id:"preparation/sorting-algorithms",title:"Sorting Algorithms",description:"This will cover the most of the topics that will be part of the Sorting Algorithms.",source:"@site/docs/preparation/sorting-algorithms.md",sourceDirName:"preparation",slug:"/preparation/sorting-algorithms",permalink:"/interview-prep/preparation/sorting-algorithms",draft:!1,tags:[],version:"current",frontMatter:{title:"Sorting Algorithms",description:"This will cover the most of the topics that will be part of the Sorting Algorithms.",last_modified:"2022-06-08T16:35:30.353Z",sidebar_label:"Sorting Algorithms"},sidebar:"docs",previous:{title:"Snippets",permalink:"/interview-prep/preparation/snippets"},next:{title:"Tree",permalink:"/interview-prep/preparation/tree"}},m={},c=[{value:"Bubble Sort",id:"bubble-sort",level:2},{value:"Quick Sort",id:"quick-sort",level:2},{value:"Merge Sort",id:"merge-sort",level:2},{value:"Insertion Sort",id:"insertion-sort",level:2},{value:"Selection Sort",id:"selection-sort",level:2}],u={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This will cover the most of the topics that will be part of the Sorting Algorithms."),(0,a.kt)("h2",{id:"bubble-sort"},"Bubble Sort"),(0,a.kt)("p",null,"Repeatedly swapping the adjacent elements if they are in the wrong order."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    void bubbleSort(int arr[])\n    {\n        int n = arr.length;\n        for (int i = 0; i < n - 1; i++)\n            for (int j = 0; j < n - i - 1; j++)\n                if (arr[j] > arr[j + 1]) {\n                    // swap arr[j+1] and arr[j]\n                    int temp = arr[j];\n                    arr[j] = arr[j + 1];\n                    arr[j + 1] = temp;\n                }\n    }\n}\n")),(0,a.kt)("h2",{id:"quick-sort"},"Quick Sort"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"QuickSort is a ",(0,a.kt)("strong",{parentName:"em"},"Divide and Conquer")," algorithm. It picks an element as pivot and partitions the given array around the picked pivot.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"There are many different versions of quickSort that ",(0,a.kt)("strong",{parentName:"em"},"pick pivot in different ways"),".")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Always pick first element as pivot.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Always pick last element as pivot (implemented below)"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Pick a random element as pivot.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Pick median as pivot."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    void quickSort(int[] arr, int low, int high) {\n            if (low < high) {\n                int pi = partition(arr, low, high);\n                        quickSort(arr, low, pi - 1);\n                quickSort(arr, pi + 1, high);\n            }\n        }\n        int partition(int[] arr, int low, int high) {\n                int pivot = arr[high];\n            int i = (low - 1);\n            for(int j = low; j <= high - 1; j++) {\n                if (arr[j] < pivot) {\n                    i++;\n                    swap(arr, i, j);\n                }\n            }\n            swap(arr, i + 1, high);\n            return (i + 1);\n        }\n}\n")),(0,a.kt)("h2",{id:"merge-sort"},"Merge Sort"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Merge Sort is a ",(0,a.kt)("strong",{parentName:"em"},"Divide and Conquer")," algorithm.\nIt divides the input array into two halves, calls itself for the two halves, and then it merges the two sorted halves.\nThe merge() function is used for merging two halves.\nThe merge(arr, l, m, r) is a key process that assumes that arr","[l..m]"," and arr","[m+1..r]"," are sorted and merges the two sorted sub-arrays into one.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    void merge(int arr[], int l, int m, int r) {\n        int n1 = m - l + 1;\n        int n2 = r - m;\n\n        int L[] = new int[n1];\n        int R[] = new int[n2];\n    \n        for (int i = 0; i < n1; ++i)\n            L[i] = arr[l + i];\n        for (int j = 0; j < n2; ++j)\n            R[j] = arr[m + 1 + j];\n\n        int i = 0, j = 0;\n                int k = l;\n        while (i < n1 && j < n2) {\n            if (L[i] <= R[j]) {\n                arr[k] = L[i];\n                i++;\n            }\n            else {\n                arr[k] = R[j];\n                j++;\n            }\n            k++;\n        }\n\n        while (i < n1) {\n            arr[k] = L[i];\n            i++;\n            k++;\n        }\n                while (j < n2) {\n            arr[k] = R[j];\n            j++;\n            k++;\n        }\n    }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"void sort(int arr[], int l, int r) {\n    if (r > l) {\n        // Find the middle point\n        int m =l+ (r-l)/2;\n\n        // Sort first and second halves\n        sort(arr, l, m);\n        sort(arr, m + 1, r);\n\n        // Merge the sorted halves\n        merge(arr, l, m, r);\n    }\n}\n")),(0,a.kt)("h2",{id:"insertion-sort"},"Insertion Sort"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time.\nIt is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"SELECT EVERY ELEMENT FROM EACH ITERATION AND PUT IT AT THE CORRECT POSITION.\nREPEAT THE SAME PROCESS FOR THE FURTHER ELEMENTS."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    void sort(int arr[])\n    {\n        int n = arr.length;\n        for (int i = 1; i < n; ++i) {\n            int key = arr[i];\n            int j = i - 1;\n    \n            /* Move elements of arr[0..i-1], that are\n                greater than key, to one position ahead\n                of their current position */\n            while (j >= 0 && arr[j] > key) {\n                arr[j + 1] = arr[j];\n                j = j - 1;\n            }\n            arr[j + 1] = key;\n        }\n    }\n}\n")),(0,a.kt)("h2",{id:"selection-sort"},"Selection Sort"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Selection sort is an in-place comparison sorting algorithm. It has an O(n\xb2) time complexity,\nwhich makes it inefficient on large lists, and generally performs worse than the similar insertion sort.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"SELECT THE MIN FROM EACH ITERATION AND PUT IT AT THE FIRST POSITION.\nREPEAT THE SAME PROCESS FOR THE FURTHER INDEXES."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    void sort(int arr[])\n    {\n        int n = arr.length;\n        for (int i = 0; i < n-1; i++)\n        {\n            // Find the minimum element in unsorted array\n            int min_idx = i;\n            for (int j = i+1; j < n; j++)\n                if (arr[j] < arr[min_idx])\n                    min_idx = j;\n    \n            // Swap the found minimum element with the first\n            // element\n            int temp = arr[min_idx];\n            arr[min_idx] = arr[i];\n            arr[i] = temp;\n        }\n    }\n}\n")))}h.isMDXComponent=!0}}]);