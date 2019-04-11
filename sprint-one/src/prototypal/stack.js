var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = Object.create(stackMethods)
  instance.count = 0

  return instance
};

var stackMethods = {
  push : function(value) {
    this[this.count] = value;
    this.count++
  },
  pop : function() {
    if(this.count === 0){
      return undefined
    }
    this.count --
    let popped = this[this.count]

    delete this[this.count]
    return popped
  },
  size : function() {
    return this.count
  }
};


