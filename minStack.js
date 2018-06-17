/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.storage = [];
  this.min = null;
  this.top = this.storage[this.storage.length - 1];
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {
  var tempMin = this.getMin();
  if (tempMin > x) {
    tempMin = x;
  }

  this.storage.push([x, tempMin]);
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  this.storage.splice(this.storage.lengh - 1, 1);
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  return this.storage[this.storage.length - 1][0];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
  return this.storage[this.storage.length - 1][1];
};
