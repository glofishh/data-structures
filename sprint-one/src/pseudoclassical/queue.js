var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0
};


  Queue.prototype.enqueue = function(value){
    this[this.count] = value
    this.count++
  }
  Queue.prototype.dequeue = function(){
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
  }
  Queue.prototype.size = function(){
    return this.count
  }

  debugger
  var queue = new Queue() // {count: 0, instance:{}}
  queue.enqueue('thing')
  console.log(queue.dequeue())
