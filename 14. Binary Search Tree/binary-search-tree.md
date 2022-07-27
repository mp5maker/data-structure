## Binary Search Tree

* Maximum of two nodes
* All the data on the left will be lesser
* All the data on the right will be greater


### There are types of binary search tree
* Balanced BST => O(logn) // difference between left height and right height no more than 1
* Unbalanced BST => O(n)


### Deletion can be three types
* O child => O(logn)
* 1 child => O(logn)
* 2 child => O(logn) => This is little bit complicated


#### For  2 child Deletion
We have two options
* Highest value from the left subtree
* Lowest value from the right subtree


## Automatic Balancing the unbalanced tree
* Adelson-Vekskii Landis (AVL)
* Red Black Tree