---
tree_title: Math
description: This will cover the most of the topics that will be part of the Math.
last_modified: 2022-06-08T16:35:30.3530
---

# Math

## Contents

-   [Counting Number of digits in a Number](#counting-number-of-digits-in-a-number)

## Counting Number of digits in a Number

```java showLineNumbers
class Solution {
    public static void main(String[] args){
        int number = 200;
        int digits = (int)Math.ceil(Math.log10(number+1));
    }
}
```
