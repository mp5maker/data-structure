## Binary Heap

* Node can have maximum of two child
* Max Heap and Min Heap

1. We follow a structure arrangement in ascending or descending
2. Complete Binary Tree
3. h = log(n)
4. Balanced Binary Tree

#### Two Types of heap
2. Max Heap (Maximum to minimum)
3. Min Heap (Minimum to maximum)

Search is not recommended in Heap
Add in the end, from left and then swap

### Insert in Max Heap (nlog(n))
* Insert it at the very end on left tree.
* Then swap it with its intermediate parent by comparing which one is greater
* Number of swap log(n)


### Delete in Max Heap (nlog(n)) [Heap Sort]
* Swap last element and root node
* Compare childs which one is greater and swap