var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = {}
  instance.count= 0

  Object.assign(instance, queueMethods)

  return instance
};

var queueMethods = {
  enqueue : function(value){
    this[this.count] = value
    this.count++
  },
  dequeue : function(){
    if(this.count === 0){
      return undefined
    }
    this.count--
    let dequeued = this[0]

    for(let key in this){
      //typeof NaN === number, but NaN doens't equal itself; filters out non-number keys
      if(key !== '0' && Number(key) === Number(key)){
      this[Number(key) - 1] = this[key]
      delete this[key]
      }
    }
    return dequeued

  },
  size : function(){
    return this.count
  }
};

debugger
let queue = Queue()

queue.enqueue('a');
queue.enqueue('b');
queue.dequeue();
console.log(queue.size()) // 1
console.log(queue)


