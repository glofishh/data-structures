class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0
  }

  enqueue (value){
    this[this.count] = value
    this.count++
  }
  dequeue(){
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
  size(){
    return this.count
  }
}

let queue = new Queue()

console.log(queue)