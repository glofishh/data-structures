var BinarySearchTree = function(value) {
  this.value = value
  this.left
  this.right

};




/*
 * Complexity: What is the time complexity of the above functions?
 */

BinarySearchTree.prototype.insert = function(value){
  if(value > this.value){
    if(this.right){
      this.right.insert(value)
    } else {
      this.right = new BinarySearchTree(value)
    }
  } else {
    if(this.left){
      this.left.insert(value)
    } else{
      this.left = new BinarySearchTree(value)
    }
  }
};

BinarySearchTree.prototype.contains = function(value){
  if(this.value === value){
    return true
  }
  if((value > this.value) && this.right){
    return this.right.contains(value)
  }
  if((value < this.value) && this.left){
    return this.left.contains(value)
  }

  return false

};

BinarySearchTree.prototype.depthFirstLog = function(iterator){
  iterator(this.value)

  if(this.left){
    this.left.depthFirstLog(iterator)
  }
  if(this.right){
    this.right.depthFirstLog(iterator)
  }
};

