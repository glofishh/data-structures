var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = Object.create(queueMethods)
  instance.count = 0;

  return instance
};

var queueMethods = {
  enqueue : function(value){
    this[this.count] = value
    this.count++
  },
  dequeue: function(){
    if(this.count === 0){
      return undefined
    }
    this.count--
    let dequeued = this[0]

    for(let key in this){
      if(key !== '0' && Number(key) === Number(key)){
        this[Number(key) - 1] = this[key]
      }
    }
    return dequeued

  },
  size : function(){
    return this.count
  }
};


