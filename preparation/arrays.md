---
tree_title: Arrays
description: This will cover the most of the topics that will be part of the Arrays.
last_modified: 2022-06-08T16:35:30.3530
---

# Arrays

## Contents

-   [Array Creation/Initialization](#array-creationinitialization)
    -   [Arrays Initialized with a Size](#arrays-initialized-with-a-size)
    -   [Dynamic Array](#dynamic-array)
    -   [Convert Collection (List, ArrayList) to Array](#convert-collection-list-arraylist-to-array)
        -   [Method - Iterative Method](#method---iterative-method)
        -   [Method - In-built Function](#method---in-built-function)
    -   [Convert Map to Array](#convert-map-to-array)
        -   [Converting a Map's Keys and Values to an Array](#converting-a-maps-keys-and-values-to-an-array)
    -   [Convert Set to Array](#convert-set-to-array)
        -   [Method - Iterative Method](#method---iterative-method-1)
        -   [Method - In-built Function](#method---in-built-function-1)
    -   [Convert Stack to Array](#convert-stack-to-array)
        -   [Method - Iterative Method](#method---iterative-method-2)
        -   [Method - In-built Function](#method---in-built-function-2)
    -   [Convert Queue to Array](#convert-queue-to-array)
        -   [Method - Iterative Method](#method---iterative-method-3)
        -   [Method - In-built Function](#method---in-built-function-3)
        -   [Covers](#covers)
    -   [Convert String of Digits to an Array](#convert-string-of-digits-to-an-array)
        -   [Method 1](#method-1)
        -   [Method 2](#method-2)
        -   [Covers](#covers-1)
-   [Reverse an Array](#reverse-an-array)
    -   [Using Another Array](#using-another-array)
    -   [In-place Reverse](#in-place-reverse)
        -   [Method 1 - Cutting to middle and reverse two halves.](#method-1---cutting-to-middle-and-reverse-two-halves)
        -   [Method 2 - Two Pointers](#method-2---two-pointers)
    -   [Covers](#covers-2)
-   [Find the Maximum and Minimum Values in an Array](#find-the-maximum-and-minimum-values-in-an-array)
    -   [Method 1 - Using a Loop](#method-1---using-a-loop)
    -   [Method 2 - In-built Function](#method-2---in-built-function)
    -   [Method 3 - In-built Function - Collections.max() and Collections.min()](#method-3---in-built-function---collectionsmax-and-collectionsmin)
    -   [Covers](#covers-3)
-   [Sorting an Array](#sorting-an-array)

## Array Creation/Initialization

### Arrays Initialized with a Size

```java
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[5];
        arr[0] = 1;
        arr[1] = 2;
    }
}
```

### Dynamic Array

```java
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[]{1,2,3,4,5};
    }
}
```

### Convert Collection (List, ArrayList) to Array

#### Method - Iterative Method

```java
public class Solution {
    public static void main(String[] args){
        List<Integer> list = new ArrayList<Integer>();
        list.add(1); list.add(2); list.add(3); list.add(4);
        int[] arr = new int[list.size()];
        for(int i = 0; i < list.size(); i++){
            arr[i] = list.get(i);
        }
    }
}
```

#### Method - In-built Function

```java
public class Solution {
    public static void main(String[] args){
        List<Integer> list = new ArrayList<Integer>();
        list.add(1); list.add(2); list.add(3); list.add(4);
        Integer[] arr = list.toArray(new Integer[list.size()]);
    }
}
```

### Convert Map to Array

#### Converting a Map's Keys and Values to an Array

```java
public class Solution {
    public static void main(String[] args){
        Map<Integer, String> map = new HashMap<Integer, String>();
        map.put(1, "One");
        map.put(2, "Two");
        map.put(3, "Three");

        Integer[] keys = map.keySet().toArray(new Integer[map.keySet().size()]);
        String[] values = map.values().toArray(new String[map.values().size()]);
    }
}

```

### Convert Set to Array

#### Method - Iterative Method

```java
public class Solution {
    public static void main(String[] args){
        Set<Integer> set = new HashSet<Integer>();
        set.add(1); set.add(2); set.add(3); set.add(4);
        int[] arr = new int[set.size()];
        int i = 0;
        for(Integer num : set){
            arr[i] = num;
            i++;
        }
    }
}

```

#### Method - In-built Function

```java
public class Solution {
    public static void main(String[] args){
        Set<Integer> set = new HashSet<Integer>();
        set.add(1); set.add(2); set.add(3); set.add(4);
        Integer[] arr = set.toArray(new Integer[set.size()]);
    }
}

```

### Convert Stack to Array

#### Method - Iterative Method

```java
public class Solution {
    public static void main(String[] args){
        Stack<Integer> stack = new Stack<Integer>();
        stack.push(1); stack.push(2); stack.push(3); stack.push(4);
        int[] arr = new int[stack.size()];
        int i = 0;
        while(!stack.isEmpty()){
            arr[i] = stack.pop();
            i++;
        }
    }
}

```

#### Method - In-built Function

```java
public class Solution {
    public static void main(String[] args){
        Stack<Integer> stack = new Stack<Integer>();
        stack.push(1); stack.push(2); stack.push(3); stack.push(4);
        Integer[] arr = stack.toArray(new Integer[stack.size()]);
    }
}

```

### Convert Queue to Array

#### Method - Iterative Method

```java
public class Solution {
    public static void main(String[] args){
        Queue<Integer> queue = new LinkedList<Integer>();
        queue.add(1); queue.add(2); queue.add(3); queue.add(4);
        int[] arr = new int[queue.size()];
        int i = 0;
        while(!queue.isEmpty()){
            arr[i] = queue.remove();
            i++;
        }
    }
}

```

#### Method - In-built Function

```java
public class Solution {
    public static void main(String[] args){
        Queue<Integer> queue = new LinkedList<Integer>();
        queue.add(1); queue.add(2); queue.add(3); queue.add(4);
        Integer[] arr = queue.toArray(new Integer[queue.size()]);
    }
}

```

#### Covers

✅ Iterating over List.
✅ Creating an array of integers.
✅ <code>List.size()</code>, <code>List.get()</code>, <code>List.toArray()</code> methods.
✅ <code>Map.keySet()</code>, <code>Map.values()</code>, <code>Map.entrySet()</code> methods.
✅ <code>Set.toArray()</code> method.
✅ <code>Stack.pop()</code>, <code>Stack.isEmpty()</code>, <code>Stack.toArray()</code> methods.
✅ <code>Queue.remove()</code>, <code>Queue.isEmpty()</code>, <code>Queue.toArray()</code> methods.

### Convert String of Digits to an Array

#### Method 1

```java
public class Solution {
    public static void main(String[] args){
        String str = "12345";
        int[] arr = new int[str.length()];
        for(int i = 0; i < str.length(); i++){
            arr[i] = str.charAt(i) - '0';
        }
    }
}
```

#### Method 2

```java
public class Solution {
    public static void main(String[] args){
        String str = "12345";
        String[] arr = str.toCharArray();
    }
}
```

#### Covers

✅ Iterating over String.
✅ Creating an array of characters.
✅ <code>String.length()</code>, <code>String.toCharArray()</code>, <code>String.charAt()</code> methods.

## Reverse an Array

### Using Another Array

```java
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[]{1,2,3,4,5};
        int[] arr2 = new int[arr.length];
        for(int i = 0; i < arr.length; i++){
            arr2[i] = arr[arr.length - i - 1];
        }
    }
}
// Time Complexity: O(n)
// Space Complexity: O(n)

```

### In-place Reverse

#### Method 1 - Cutting to middle and reverse two halves.

```java
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[]{1,2,3,4,5};
        for(int i = 0; i < arr.length / 2; i++){
            int temp = arr[i];
            arr[i] = arr[arr.length - i - 1];
            arr[arr.length - i - 1] = temp;
        }
    }
}
// Time Complexity: O(n)
// Space Complexity: O(1)

```

#### Method 2 - Two Pointers

```java
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[]{1,2,3,4,5};
        int i = 0;
        int j = arr.length - 1;
        while(i < j){
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
}
// Time Complexity: O(n)
// Space Complexity: O(1)

```

### Covers

✅ Iterating over array.
✅ Swapping elements.

## Find the Maximum and Minimum Values in an Array

### Method 1 - Using a Loop

```java
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[]{1,2,3,4,5};
        int max = arr[0];
        int min = arr[0];
        for(int i = 1; i < arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
            if(arr[i] < min){
                min = arr[i];
            }
        }
    }
}
// Time Complexity: O(n)
// Space Complexity: O(1)
```

### Method 2 - In-built Function

```java
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[]{1,2,3,4,5};
        int max = Arrays.stream(arr).max().getAsInt();
        int min = Arrays.stream(arr).min().getAsInt();
    }
}
// Time Complexity: O(n)
// Space Complexity: O(1)

```

### Method 3 - In-built Function - Collections.max() and Collections.min()

```java
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[]{1,2,3,4,5};
        int max = Collections.max(Arrays.asList(arr));
        int min = Collections.min(Arrays.asList(arr));
    }
}
// Time Complexity: O(n)
// Space Complexity: O(1)

```

### Covers

✅ Iterating over array.
✅ Using <code>Collections.max()</code> and <code>Collections.min()</code> methods.
✅ <code>Arrays.stream().max().getAsInt()</code> and <code>Arrays.stream().min().getAsInt()</code> methods.

## Sorting an Array

[Sorting Algorithms](https://shyamzzp.github.io/interview-prep/preparation/sorting-algorithms)
