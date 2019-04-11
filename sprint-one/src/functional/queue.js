var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var _storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //enqueue from the back
    _storage[someInstance.size()] = value
    //_.extend(someInstance, storage)
  };

  someInstance.dequeue = function() {
    //dequeue from front
    if(someInstance.size() === 0){
      return undefined
    }
    let dequeued = _storage[0]

    console.log(someInstance.size())
    console.log(dequeued)
    for(let key in _storage){
      if(key !== '0'){
        _storage[Number(key) - 1] = _storage[key]
      }
      if(Number(key) === someInstance.size() - 1){
        delete _storage[key]
      }
    }
    console.log(someInstance.size())
    console.log(_storage)
    return dequeued

  };

  someInstance.size = function() {
    return Object.keys(_storage).length
  };

  return someInstance;
};

