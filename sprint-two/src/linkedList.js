var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // takes value and adds to end of list
  // add a new Node
  // link that Node to tail
  // if empty link that node to head
  // if the list was not empty change the 'next' property of the last added node to point to the newly added node
  //

  list.addToTail = function(value) {
    var newKey = Math.random().toFixed(4).toString().replace(/^0./, '')
                     //randomly-generated number, cut to 4, convert to string to use as key later, .replace to remove decimal to get a string of 4 completely random numbers
                     //what the key will be everytime
    //if first thing being added
    if(list.tail === null) {
      list.tail = new Node(value)
      list.head = list.tail
    } else if (list.head.next === null) {
      //then only one thing in list
      list.tail = new Node(value)
      list.head.next = 'tail'
    } else if(Object.keys(list).length === 5) {
      //we have head, tail, adding next thing
      list[newKey] = list.tail //bumps tail back to newKey
      list[newKey].next = 'tail'
      list.tail = new Node(value) //regular case once head and tail are established; pushing to one side
      list.head.next = newKey //makes head -> new node we added to list
    } else{
      //when adding a 4+ item to list (after head, tail, methods)
      //same as above, except next value of head node is not changed
      list[newKey] = list.tail
      list[newKey].next = 'tail'
      list.tail = new Node(value)
    }


  };

  //removes first node from list and returns its value
  list.removeHead = function() {
    let removed = list.head.value //saves value of node at head
    list.head = list[list.head.next] // goes into head, look at next, and make new head next
    return removed
  };

  //returns boolean reflecting whether or not the passed-in value is in the linked list
  list.contains = function(target) {
    //starts i at head, then do in loop as long i isn't null, keeps setting i to wahtever it was looking at's next value (whatever holding in next value); when it hits tail, next val not set yet, so it stops
      //if list.head value is the target, return true
      //if you managed to make through loop without triggering true, return false
    for(i = 'head'; i !== null; i = list[i].next){
      if(list[i].value === target){
        return true
      }
    }
    return false
  };



  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
debugger

let list = new LinkedList
list.addToTail('1')
list.addToTail('2')
list.addToTail('3')
list.contains('2')
console.log(list)
console.log(list.head)

list.addToTail(4);
list.addToTail(5);
console.log(list.contains(4))
console.log(list.contains(5))
console.log(list.contains(6))
