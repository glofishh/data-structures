var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  let size = 0
  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value
    size ++
    Object.assign(someInstance, storage)
  };

  someInstance.pop = function() {
    if(size === 0){
      return undefined
    }
    size--
    let popped = storage[size]

    delete someInstance[size]
    delete storage[size]

    return popped

  };

  someInstance.size = function() {
    return size
  };

  return someInstance;
};
