---
tree_title: Linked List
description: This will cover the most of the topics that will be part of the linked list.
last_modified: 2022-06-08T15:36:32.3632
---

# Linked List

## Contents

-   [Sorting a Linked List using Heap Sort.](#sorting-a-linked-list-using-heap-sort)
-   [Inserting element at the end of the Linked List.](#inserting-element-at-the-end-of-the-linked-list)
-   [Reverse Linked List.](#reverse-linked-list)
-   [Remove Duplicates from Sorted List. Sentinel + Predecessor](#remove-duplicates-from-sorted-list-sentinel--predecessor)

## Sorting a Linked List using Heap Sort.

```java
class Solution {
    public ListNode sortList(ListNode head) {
        ListNode curr = head;
        Queue<ListNode> queue = new PriorityQueue<>((n1, n2) -> n1.val - n2.val); 
        while (curr != null) {
            queue.add(curr);
            curr = curr.next;
        }
        
        ListNode dummy = new ListNode();
        ListNode prev = dummy;
        while (!queue.isEmpty()) {
            curr = queue.poll();
            curr.next = null;
            prev.next = curr;
            prev = curr;
        }
        return dummy.next;
    }
}
```

## Inserting element at the end of the Linked List.

```java
class Solution {
    public ListNode insert(ListNode root, int item)
    {
        ListNode temp = new ListNode(item);
        temp.next = null;
        if (root == null)
            root = temp;
        else {
            ListNode ptr = root;
            while (ptr.next != null)
                ptr = ptr.next;
            ptr.next = temp;
        }
        return root;
    }
}
```

## Reverse Linked List.

```java
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        
        while(curr!=null){
            ListNode temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
            
        }
        return prev;
    }
}
```

| Operation   | Time Complexity |
| ----------- | --------------- |
| reverseList | O(n)            |

## Remove Duplicates from Sorted List. [Sentinel + Predecessor]

```java
class Solution {

    public ListNode deleteDuplicates(ListNode head) {
    // sentinel
    ListNode sentinel = new ListNode(0, head);

    // predecessor = the last node
    // before the sublist of duplicates
    ListNode pred = sentinel;

    while (head != null) {
        // if it's a beginning of duplicates sublist
        // skip all duplicates
        if (head.next != null && head.val == head.next.val) {
        // move till the end of duplicates sublist
        while (head.next != null && head.val == head.next.val) {
            head = head.next;
        }
        // skip all duplicates
        pred.next = head.next;
        // otherwise, move predecessor
        } else {
        pred = pred.next;
        }

        // move forward
        head = head.next;
    }
    return sentinel.next;
    }
}
```
