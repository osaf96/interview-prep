---
tree_title: Depth First Search
description: This will cover the most of the topics that will be part of the Depth First Search.
last_modified: 2022-06-08T15:36:32.3632
---

# DFS (Depth First Search)

## Contents

-   [Introduction](#introduction)
-   [Implementation of DFS](#implementation-of-dfs)
-   [Application of DFS](#application-of-dfs)
    -   [Question on LeetCode with Tag - DFS](#question-on-leetcode-with-tag---dfs)

## Introduction

➡️ Depth–first search (DFS) is an algorithm for traversing or searching tree or graph data structures.
➡️ One starts at the root (selecting some arbitrary node as the root for a graph) and explore as far as possible along each branch before backtracking.

## Implementation of DFS

➡️ Both the below implementations are same. ➡️ The only difference is, the first one uses Stack which you can visualize better and for the second case, how the internal stack is used. ➡️ Both are the post order traversal of a Binary Tree.

```java showLineNumbers
public class Solution{
    public void dfs(Node root){
        Stack<Node> stack = new Stack<>();
        Node current = root;
        while(current != null || !stack.isEmpty()){
            if(current != null){
                stack.push(current);
                current = current.left;
            }else{
                current = stack.pop();
                System.out.println(current.data);
                current = current.right;
            }
        }
    }
}
```

```java showLineNumbers
public class Solution{
    public void dfs(Node root){
        if(root == null) return;
        System.out.println(root.data);
        dfs(root.left);
        dfs(root.right);
    }
}
```

## Application of DFS

### Question on LeetCode with Tag - DFS

| Question |
| -------- |

Binary Tree Inorder Traversal
Validate Binary Search Tree
Recover Binary Search Tree
Same Tree
Symmetric Tree
Maximum Depth of Binary Tree
Balanced Binary Tree
Minimum Depth of Binary Tree
Path Sum
Path Sum II
Flatten Binary Tree to Linked List
Populating Next Right Pointers in Each Node
Populating Next Right Pointers in Each Node II
Binary Tree Maximum Path Sum
Sum Root to Leaf Numbers
Surrounded Regions
Clone Graph
Binary Tree Preorder Traversal
Binary Tree Postorder Traversal
Binary Tree Upside Down
Binary Tree Right Side View
Number of Islands
Course Schedule
Course Schedule II
Design Add and Search Words Data Structure
Count Complete Tree Nodes
Invert Binary Tree
Kth Smallest Element in a BST
Lowest Common Ancestor of a Binary Search Tree
Lowest Common Ancestor of a Binary Tree
Count Univalue Subtrees
Binary Tree Paths
Graph Valid Tree
Alien Dictionary
Closest Binary Search Tree Value
Closest Binary Search Tree Value II
Inorder Successor in BST
Serialize and Deserialize Binary Tree
Binary Tree Longest Consecutive Sequence
Smallest Rectangle Enclosing Black Pixels
Minimum Height Trees
Binary Tree Vertical Order Traversal
Number of Connected Components in an Undirected Graph
Longest Increasing Path in a Matrix
Reconstruct Itinerary
Largest BST Subtree
House Robber III
Nested List Weight Sum
Flatten Nested List Iterator
Nested List Weight Sum II
Water and Jug Problem
Find Leaves of Binary Tree
Mini Parser
Lexicographical Numbers
Longest Absolute File Path
Evaluate Division
Sum of Left Leaves
Pacific Atlantic Water Flow
Battleships in a Board
Path Sum III
Serialize and Deserialize BST
Island Perimeter
Concatenated Words
The Maze
The Maze III
Find Mode in Binary Search Tree
The Maze II
Most Frequent Subtree Sum
All Paths from Source Lead to Destination
Find Bottom Left Tree Value
Freedom Trail
Find Largest Value in Each Tree Row
Minesweeper
Minimum Absolute Difference in BST
Construct Binary Tree from String
Convert BST to Greater Tree
Diameter of Binary Tree
Boundary of Binary Tree
Number of Provinces
Binary Tree Longest Consecutive Sequence II
Binary Tree Tilt
Array Nesting
Subtree of Another Tree
Kill Process
Construct String from Binary Tree
Merge Two Binary Trees
Add One Row to Tree
Average of Levels in Binary Tree
Find Duplicate Subtrees
Two Sum IV - Input is a BST
Print Binary Tree
Maximum Width of Binary Tree
Equal Tree Partition
Path Sum IV
Trim a Binary Search Tree
Second Minimum Node In a Binary Tree
Bulb Switcher II
Redundant Connection
Redundant Connection II
Longest Univalue Path
Employee Importance
Number of Distinct Islands
Max Area of Island
Number of Distinct Islands II
Accounts Merge
Flood Fill
Sentence Similarity II
Closest Leaf in a Binary Tree
Network Delay Time
Contain Virus
Cracking the Safe
Pyramid Transition Matrix
Convert Binary Search Tree to Sorted Doubly Linked List
Serialize and Deserialize N-ary Tree
Flatten a Multilevel Doubly Linked List
Couples Holding Hands
Encode N-ary Tree to Binary Tree
Maximum Depth of N-ary Tree
N-ary Tree Preorder Traversal
N-ary Tree Postorder Traversal
Swim in Rising Water
Minimum Distance Between BST Nodes
Is Graph Bipartite?
Cheapest Flights Within K Stops
All Paths From Source to Target
Find Eventual Safe States
Binary Tree Pruning
Making A Large Island
Sum of Distances in Tree
Similar String Groups
Keys and Rooms
Loud and Rich
All Nodes Distance K in Binary Tree
Smallest Subtree with all the Deepest Nodes
Leaf-Similar Trees
Possible Bipartition
Increasing Order Search Tree
Minimize Malware Spread
Minimize Malware Spread II
Shortest Bridge
Range Sum of BST
Most Stones Removed with Same Row or Column
Flip Equivalent Binary Trees
Regions Cut By Slashes
Univalued Binary Tree
Binary Tree Cameras
Flip Binary Tree To Match Preorder Traversal
Distribute Coins in Binary Tree
Vertical Order Traversal of a Binary Tree
Smallest String Starting From Leaf
Cousins in Binary Tree
Number of Enclaves
Sum of Root To Leaf Binary Numbers
Maximum Average Subtree
Maximum Difference Between Node and Ancestor
Recover a Tree From Preorder Traversal
Path With Maximum Minimum Value
Coloring A Border
Escape a Large Maze
Binary Search Tree to Greater Sum Tree
Maximum Level Sum of a Binary Tree
Flower Planting With No Adjacent
Two Sum BSTs
Insufficient Nodes in Root to Leaf Paths
Tree Diameter
Smallest Common Region
Delete Tree Nodes
Delete Nodes And Return Forest
Lowest Common Ancestor of Deepest Leaves
Sum of Nodes with Even-Valued Grandparent
Binary Tree Coloring Game
Deepest Leaves Sum
Web Crawler
Validate Binary Tree Nodes
Balance a Binary Search Tree
Kth Ancestor of a Tree Node
Critical Connections in a Network
Smallest String With Swaps
Sort Items by Groups Respecting Dependencies
Where Will the Ball Fall
Distance to a Cycle in Undirected Graph
Web Crawler Multithreaded
Number of Closed Islands
Find Elements in a Contaminated Binary Tree
Count Servers that Communicate
All Elements in Two Binary Search Trees
Jump Game III
All Ancestors of a Node in a Directed Acyclic Graph
Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree
Number of Operations to Make Network Connected
Delete Leaves With a Given Value
Maximum Product of Splitted Binary Tree
Longest ZigZag Path in a Binary Tree
Maximum Sum BST in Binary Tree
Linked List in Binary Tree
Time Needed to Inform All Employees
Frog Position After T Seconds
Find a Corresponding Node of a Binary Tree in a Clone of That Tree
Check if There is a Valid Path in a Grid
Count Good Nodes in Binary Tree
Minimum Time to Collect All Apples in a Tree
Course Schedule IV
Pseudo-Palindromic Paths in a Binary Tree
Reorder Routes to Make All Paths Lead to the City Zero
Find All The Lonely Nodes
Clone Binary Tree With Random Pointer
Clone N-ary Tree
Number of Nodes in the Sub-Tree With the Same Label
Find Root of N-Ary Tree
Number of Good Leaf Nodes Pairs
Move Sub-Tree of N-Ary Tree
Detect Cycles in 2D Grid
Diameter of N-Ary Tree
Minimum Number of Days to Disconnect Island
Throne Inheritance
Check If Two Expression Trees are Equivalent
Path With Minimum Effort
Lowest Common Ancestor of a Binary Tree II
Correct a Binary Tree
Change the Root of a Binary Tree
Lowest Common Ancestor of a Binary Tree IV
Minimize Hamming Distance After Swap Operations
Tree of Coprimes
Find Distance in a Binary Tree
Shortest Path in a Hidden Grid
Minimum Path Cost in a Hidden Grid
Longest Word With All Prefixes
Count Sub Islands
Merge BSTs to Create Single BST
Last Day Where You Can Still Cross
Find All Groups of Farmland
Operations on Tree
Find if Path Exists in Graph
Count Nodes Equal to Sum of Descendants
Smallest Missing Genetic Value in Each Subtree
Count Nodes With the Highest Score
Valid Arrangement of Pairs
Detonate the Maximum Bombs
Find All People With Secret
Step-By-Step Directions From a Binary Tree Node to Another
Maximum Employees to Be Invited to a Meeting
Create Binary Tree From Descriptions
Count Nodes Equal to Average of Subtree
Longest Path With Different Adjacent Characters
Closest Node to Path in Tree
