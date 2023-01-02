## Memory

* It is used to store everything in a program
* Memory is divided into different memory slot
* 1 Memory Slot is 8 bit
* 8 bit = 1 Byte
* Therefore, 1 memory slot = 1 byte


## 32 Bit PC
* Initialize an integer, it will take 32 bit
* 32 bit = 4 byte
* It is stored back to back
* Therefore for a varible, if it is saved in 601 address, then it will take, 602, 603, 604


## Memory Allocation
```javascript
const vooc = [2,3]
```

* 2 = 0000 0010 => 601
* 3 = 0000 0011 => that help us to track each of our value

| 601 | 602 | 603 | 604 | 605 | 606 | 607 | 608 |
| -- | -- | -- | -- | -- | -- | -- | -- |
| 0000 00010 | 0 | 0 | 0 | 0000 0011 | 0 | 0 | 0 |

## Memory Pointers
```javascript
const vooc = [2, 3, 4]
```

609 points to 633 as pointer.
When there is no consecutive space

| 601 | 602 | 603 | 604 | 605 | 606 | 607 | 608 | 609 | 610 | 611 | 612 | 613 | 614 | 615 | 616 |
| -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
| 0000 00010 | 0 | 0 | 0 | 0000 0011 | 0 | 0 | 0 | 633 | --  | -- | -- | x | x | x | x |

