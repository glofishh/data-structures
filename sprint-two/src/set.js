var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me

  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if(!this.contains(item)){
    this._storage[this.size()] = item
  }
};

setPrototype.contains = function(item) {
  for(let key in this._storage){
    if(this._storage[key] === item){
      return true
    }
  }
  return false
};

//adding index to remove = can remove by index
setPrototype.remove = function(item, index) {
  if(index){
    delete this._storage[index]
  }
  for(let key in this._storage){
    if(this._storage[key] === item){
      delete this._storage[key]
    }
  }
};

setPrototype.size = function(){
  return Object.keys(this._storage).length
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

 let set = Set()

 debugger
set.add('Susan Sarandon');
set.add('Danny Glover');
set.contains('Danny Glover')
set.contains('Susan Sarandon')
