var MinStack = function () {
  this.minIndex = 0;
  this.minStack = [];
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  if (this.minIndex === 0 || x <= this.minStack[this.minIndex - 1]) {
    this.minIndex += 1;
    this.minStack.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const value = this.stack.pop();
  if (value === this.minStack[this.minIndex - 1]) {
    this.minIndex -= 1;
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minIndex - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
