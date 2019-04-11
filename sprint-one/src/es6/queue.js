class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {}
  }

  enqueue (value){
    this.storage[this.size()] = value
  }
  dequeue(){
    if(this.size() === 0){
      return undefined
    }

    let dequeued = this.storage[0]

    for(let key in this.storage){
      if(key !== '0'){
        this.storage[Number(key) - 1] = this.storage[key]
      }
      if(Number(key) === this.size() - 1){
        delete this.storage[key]
      }
    }

    return dequeued
  }
  size(){
    return Object.keys(this.storage).length
  }
}
