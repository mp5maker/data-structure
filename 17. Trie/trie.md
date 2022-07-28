## Trie

* Has any number of nodes
* For characters we have ascii
* For insert, it is O(k), where k is the length of the word
* For delete, it is O(k)
* We also need to set `word end` to show whether thats the end of a word

### For Delete
We will just turn word end to 0