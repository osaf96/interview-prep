(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{170:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(1),i=t(9),a=(t(0),t(231)),o={title:"Sorting Algorithms",description:"This will cover the most of the topics that will be part of the Sorting Algorithms.",last_modified:new Date("2022-06-08T16:35:30.353Z"),sidebar_label:"Sorting Algorithms"},l={id:"preparation/sorting-algorithms",title:"Sorting Algorithms",description:"This will cover the most of the topics that will be part of the Sorting Algorithms.",source:"@site/docs\\preparation\\sorting-algorithms.md",permalink:"/preparation/sorting-algorithms",sidebar_label:"Sorting Algorithms",sidebar:"docs",previous:{title:"Snippets",permalink:"/preparation/snippets"},next:{title:"Tree",permalink:"/preparation/tree"}},c=[{value:"Bubble Sort",id:"bubble-sort",children:[]},{value:"Quick Sort",id:"quick-sort",children:[]},{value:"Merge Sort",id:"merge-sort",children:[]},{value:"Insertion Sort",id:"insertion-sort",children:[]},{value:"Selection Sort",id:"selection-sort",children:[]}],s={rightToc:c};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This will cover the most of the topics that will be part of the Sorting Algorithms."),Object(a.b)("h2",{id:"bubble-sort"},"Bubble Sort"),Object(a.b)("p",null,"Repeatedly swapping the adjacent elements if they are in the wrong order."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    void bubbleSort(int arr[])\n    {\n        int n = arr.length;\n        for (int i = 0; i < n - 1; i++)\n            for (int j = 0; j < n - i - 1; j++)\n                if (arr[j] > arr[j + 1]) {\n                    // swap arr[j+1] and arr[j]\n                    int temp = arr[j];\n                    arr[j] = arr[j + 1];\n                    arr[j + 1] = temp;\n                }\n    }\n}\n")),Object(a.b)("h2",{id:"quick-sort"},"Quick Sort"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"QuickSort is a ",Object(a.b)("strong",{parentName:"em"},"Divide and Conquer")," algorithm. It picks an element as pivot and partitions the given array around the picked pivot.")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"There are many different versions of quickSort that ",Object(a.b)("strong",{parentName:"em"},"pick pivot in different ways"),".")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("em",{parentName:"li"},"Always pick first element as pivot.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"Always pick last element as pivot (implemented below)"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("em",{parentName:"li"},"Pick a random element as pivot.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("em",{parentName:"li"},"Pick median as pivot."))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    void quickSort(int[] arr, int low, int high) {\n            if (low < high) {\n                int pi = partition(arr, low, high);\n                        quickSort(arr, low, pi - 1);\n                quickSort(arr, pi + 1, high);\n            }\n        }\n        int partition(int[] arr, int low, int high) {\n                int pivot = arr[high];\n            int i = (low - 1);\n            for(int j = low; j <= high - 1; j++) {\n                if (arr[j] < pivot) {\n                    i++;\n                    swap(arr, i, j);\n                }\n            }\n            swap(arr, i + 1, high);\n            return (i + 1);\n        }\n}\n")),Object(a.b)("h2",{id:"merge-sort"},"Merge Sort"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Merge Sort is a ",Object(a.b)("strong",{parentName:"em"},"Divide and Conquer")," algorithm.\nIt divides the input array into two halves, calls itself for the two halves, and then it merges the two sorted halves.\nThe merge() function is used for merging two halves.\nThe merge(arr, l, m, r) is a key process that assumes that arr","[l..m]"," and arr","[m+1..r]"," are sorted and merges the two sorted sub-arrays into one.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    void merge(int arr[], int l, int m, int r) {\n        int n1 = m - l + 1;\n        int n2 = r - m;\n\n        int L[] = new int[n1];\n        int R[] = new int[n2];\n    \n        for (int i = 0; i < n1; ++i)\n            L[i] = arr[l + i];\n        for (int j = 0; j < n2; ++j)\n            R[j] = arr[m + 1 + j];\n\n        int i = 0, j = 0;\n                int k = l;\n        while (i < n1 && j < n2) {\n            if (L[i] <= R[j]) {\n                arr[k] = L[i];\n                i++;\n            }\n            else {\n                arr[k] = R[j];\n                j++;\n            }\n            k++;\n        }\n\n        while (i < n1) {\n            arr[k] = L[i];\n            i++;\n            k++;\n        }\n                while (j < n2) {\n            arr[k] = R[j];\n            j++;\n            k++;\n        }\n    }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"void sort(int arr[], int l, int r) {\n    if (r > l) {\n        // Find the middle point\n        int m =l+ (r-l)/2;\n\n        // Sort first and second halves\n        sort(arr, l, m);\n        sort(arr, m + 1, r);\n\n        // Merge the sorted halves\n        merge(arr, l, m, r);\n    }\n}\n")),Object(a.b)("h2",{id:"insertion-sort"},"Insertion Sort"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time.\nIt is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"SELECT EVERY ELEMENT FROM EACH ITERATION AND PUT IT AT THE CORRECT POSITION.\nREPEAT THE SAME PROCESS FOR THE FURTHER ELEMENTS."))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    void sort(int arr[])\n    {\n        int n = arr.length;\n        for (int i = 1; i < n; ++i) {\n            int key = arr[i];\n            int j = i - 1;\n    \n            /* Move elements of arr[0..i-1], that are\n                greater than key, to one position ahead\n                of their current position */\n            while (j >= 0 && arr[j] > key) {\n                arr[j + 1] = arr[j];\n                j = j - 1;\n            }\n            arr[j + 1] = key;\n        }\n    }\n}\n")),Object(a.b)("h2",{id:"selection-sort"},"Selection Sort"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Selection sort is an in-place comparison sorting algorithm. It has an O(n\xb2) time complexity,\nwhich makes it inefficient on large lists, and generally performs worse than the similar insertion sort.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"SELECT THE MIN FROM EACH ITERATION AND PUT IT AT THE FIRST POSITION.\nREPEAT THE SAME PROCESS FOR THE FURTHER INDEXES."))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"class Solution {\n    void sort(int arr[])\n    {\n        int n = arr.length;\n        for (int i = 0; i < n-1; i++)\n        {\n            // Find the minimum element in unsorted array\n            int min_idx = i;\n            for (int j = i+1; j < n; j++)\n                if (arr[j] < arr[min_idx])\n                    min_idx = j;\n    \n            // Swap the found minimum element with the first\n            // element\n            int temp = arr[min_idx];\n            arr[min_idx] = arr[i];\n            arr[i] = temp;\n        }\n    }\n}\n")))}p.isMDXComponent=!0},231:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return j}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},b=function(e){var n=p(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(t),u=r,j=b["".concat(o,".").concat(u)]||b[u]||m[u]||a;return t?i.a.createElement(j,l({ref:n},s,{components:t})):i.a.createElement(j,l({ref:n},s))}));function j(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);