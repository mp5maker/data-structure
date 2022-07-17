## Arrays

Two types of array
* Static Array
* Dynamic Array


For Java you need mention the size of the array.
They are static, their size cannot be changed
Fixed number of memory slots

For Javascript or Python, we do not need to mention the size of the array
Flexible number of memory slots.


### Common Operations for Static Arrays
* Access
* Search
* Insert
* Delete

| Type | Access | Search | Insertion | Deletion |
| -- | -- | -- | -- | -- |
| Static | O(1) | O(n) | O(n) | O(n) or O(1) |
| Dynamic | O(1) | O(1) | O(1) or O(n) | O(n) or O(1) |

### Access
* StartingAddress + Index * 4
* Time Complexity: O(1)

### Traveral
* Go the each element
* Time Complexity: O(n)

### Update / Insert
* StartingAddress + Index * 4
* Update the index position

### Copy
* Copying complete array to new memory address
* Takes a lot of space
* Time Complexity: O(n)

### Insertion
* Start, End, Middle

### Deletion
* Time Complexity: O(n) for start, middle
* Time Complexity: O(1) for end


### In Dynamic Array
* It reserves the extra spaces for the array in the memory

* 2<sup>1</sup> = 2
* 2<sup>2</sup> = 4
* 2<sup>3</sup> = 8
* 2<sup>4</sup> = 16
* 2<sup>5</sup> = 32
* 2<sup>6</sup> = 64
* 2<sup>7</sup> = 128

```javascript
const vooc  = [100, 200, 300, 400, 500]
// It will reserve 8 space
```