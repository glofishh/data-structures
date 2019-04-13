

var HashTable = function() {
  this._limit = 8;
  this.count = 0
  this._storage = LimitedArray(this._limit);
  //          {[ [ [k, v] ], []]}
  //[key, value], [key, value]
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  if(!this._storage.get(index)){
    this._storage.set(index, [[key, value]])
    this.count++
  } else {
    let thisBucket = this._storage.get(index)
    for(let i = 0; i < thisBucket.length; i++){
      if(thisBucket[i][0] === key){
        thisBucket[i][1] = value
        return undefined
      }
    }

    thisBucket.push([key, value])
    this.count++
    if(this.count > this._limit * .75){
      this._resize(this._limit * 2)
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(index)){
    let thisBucket = this._storage.get(index)
    if(thisBucket.length > 1){
      for(let i = 0; i < thisBucket.length; i++){
        if(thisBucket[i][0] === k){
          return thisBucket[i][1]
        }
      }
    }
    if(this._storage.get(index).length > 0){
      return this._storage.get(index)[0][1]
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let thisBucket = this._storage.get(index)
  for(let i = 0; i < thisBucket.length; i++){
    if(thisBucket[i][0] === k){
      this.count--
      let val = thisBucket.splice(i, 1)[1]
      if(this.count < this._limit * .25){
        this._resize(this._limit / 2)
      }
      return val
    }
  }
  // [     [[k1, undefined], [k2,v], [k3, undefined]]      ]
};
HashTable.prototype._resize = function(newLimit){
  var oldStorage = this._storage
  this._limit = newLimit
  this._storage = LimitedArray(newLimit)
  this.count = 0
  let context = this;

  oldStorage.each(function(bucket){
    if(!bucket){
      return undefined
    }
    for (var i = 0; i < bucket.length; i++){
      var tuple = bucket[i]
      context.insert(tuple[0], tuple[1])
    }
  })
  };



/*
 * Complexity: What is the time complexity of the above functions?
 */
