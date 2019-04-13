

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //          {[ [ [k, v] ], []]}
  //[key, value], [key, value]
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  if(!this._storage.get(index)){
    this._storage.set(index, [[key, value]])
  } else {
    let thisBucket = this._storage.get(index)
    for(let i = 0; i < thisBucket.length; i++){
      if(thisBucket[i][0] === key){
        thisBucket[i][1] = value
        return undefined
      }
    }
    thisBucket.push([key, value])
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
    console.log(thisBucket[i])
    if(thisBucket[i][0] === k){
      return thisBucket.splice(i, 1)
    }
  }
  // [     [[k1, undefined], [k2,v], [k3, undefined]]      ]
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
var LimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index) {
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};


let hashTable = new HashTable()

 debugger
 hashTable.insert('Steven', 'Tyler');
 hashTable.remove('Steven');
console.log(hashTable.retrieve('Steven'))
