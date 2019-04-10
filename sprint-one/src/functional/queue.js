var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  let size = 0
  someInstance.enqueue = function(value) {
    //enqueue from the back
    storage[size] = value
    size ++
    _.extend(someInstance, storage)
  };

  someInstance.dequeue = function() {
    //dequeue from front
    if(size === 0){
      return undefined
    }
    size--
    let dequeued = storage[0]

    for(let key in storage){
      storage[Number(key) - 1] = storage[key]
      someInstance[Number(key) - 1] = someInstance[key]
    }

    return dequeued

  };

  someInstance.size = function() {
    return size
  };

  return someInstance;
};
