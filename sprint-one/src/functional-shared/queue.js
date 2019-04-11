var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = {
    storage: {}
  }
  instance.count= 0

  Object.assign(instance, queueMethods)

  return instance
};

var queueMethods = {
  enqueue : function(value){
    this.storage[this.size()] = value

  },
  dequeue : function(){
    if(this.size() === 0){
      return undefined
    }

    let dequeued = this.storage[0]

    for(let key in this.storage){
      //typeof NaN === number, but NaN doens't equal itself; filters out non-number keys
      if(key !== '0'){
      this.storage[Number(key) - 1] = this.storage[key]
      }
      if(Number(key) === this.size() - 1){
        delete this.storage[key]
      }

    }
    return dequeued

  },
  size : function(){
    return Object.keys(this.storage).length
  }
};

debugger
let queue = Queue()

queue.enqueue('a');
console.log(queue.dequeue())
queue.enqueue('b');
console.log(queue.dequeue())


