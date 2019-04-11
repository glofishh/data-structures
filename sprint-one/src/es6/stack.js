class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0
  }
  push(value){
    this[this.count] = value
    this.count++
  }

  pop(){
    if(this.count === 0){
      return undefined
    }
    this.count--
    let popped = this[this.count]

    delete this[this.count]
    return popped
  }

  size(){
    return this.count
  }

}