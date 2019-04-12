//

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me
  Object.assign(newTree, treeMethods)

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  this.children.push(Tree(value))
};

treeMethods.contains = function(target) {
  //if contains, return true
  //should correctly detect nested children
    //--> if has children, recursive call on each child
    // else, return false
    let result = false

    function search (tree){
    if(tree.value === target){
      result = true
    } else if(tree.children.length > 0){
      for(let i = 0; i < tree.children.length; i++){
        search(tree.children[i])
      }
    }
  }
  search(this)

  return result

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
var tree = Tree()

debugger
tree.addChild(5);
console.log(tree.contains(5));