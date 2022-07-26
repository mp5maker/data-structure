## Hash Tables

**Search Complexity: O(1)**
This is a game changes.
Constant time


* Hashes are pre-built in the languages
* Python: Dictionary
* Javascript: Objects
* Java: Maps
* Ruby: Hashes


* Hash tables are quite complicated.
* Most key-value pair
* It is dependent on key value only
* No traversal

```javascript
const obj = {
  key1: 1,
  key2: 2
}
```

blue => [Hash Function] => generated index 0
red => [Hash Function] => generated index 1
green => [Hash Function] => generated index 2
pink => [Hash Function] => generated index 3

## Collisions

blue => 0
red => 3
green => 1
yellow => 0

| no | value |
| -- | -- |
| 0 | blue value, yellow value
| 1 | green value
| 2 |
| 3 | red value

* blue value and yellow value are saved in linked list
* Then it becomes O(n) for blue and yellow key