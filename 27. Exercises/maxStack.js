class MaxStack {
  constructor() {
    this.arr = []
    this.max = []
  }

  push(val) {
    this.arr.push(val)
    const maxLength = this.max.length
    if (maxLength === 0 || this.max[maxLength - 1] <= val) {
      this.max.push(val)
    }
  }

  pop() {
    const value =  this.arr.pop()
    if (this.max[this.max.length - 1] === value) {
      this.max.pop()
    }
    return value
  }

  top() {
    return this.arr[0]
  }

  getMax() {
    return this.max[this.max.length - 1]
  }
}


const max = new MaxStack()
max.push(2)
max.push(9)
max.push(7)
max.push(111)
max.push(11)
console.log(max.getMax())
max.pop()
max.pop()
console.log(max.getMax())