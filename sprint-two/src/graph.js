

// Instantiate a new graph
var Graph = function() {
};


// some other neat methods
Graph.prototype.size = function(){
  return Object.keys(this).length
}
Graph.prototype.viewEdges = function(node){
  return this[JSON.stringify(node)]
}
Graph.prototype.check = function(node){
  return [node, this[JSON.stringify(node)]]
}
Graph.prototype.getEdges = function(node, includeNode){
  if(includeNode === undefined){
    includeNode = true
  }
  let parseNodes = this[JSON.stringify(node)].map((edge) =>{
    return JSON.parse(edge)
  })
  if(includeNode){
    parseNodes.unshift(node)
  }
  return parseNodes
}
Graph.prototype.edgeTo = function(target, edges){
  if(Array.isArray(edges)){
    edges.forEach((edge) =>{
      this.addEdge(target, edge)
    })
  } else{
    this.addEdge(target, edge)
  }
}

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[JSON.stringify(node)] = []
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for(let key in this){
    if(key === JSON.stringify(node)){
      return true
    }
  }
  return false
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  let removedEdges = this[JSON.stringify(node)]
  this[JSON.stringify(node)]
    .forEach((edge) =>{ this[edge] = this[edge]
      .filter((item) => item !== JSON.stringify(node))
    })

  delete this[JSON.stringify(node)]

  return removedEdges

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  return this[JSON.stringify(fromNode)].includes(JSON.stringify(toNode))
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if(!this[JSON.stringify(fromNode)].includes(JSON.stringify(toNode))){
    this[JSON.stringify(fromNode)].push(JSON.stringify(toNode))

    this[JSON.stringify(toNode)].push(JSON.stringify(fromNode))
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //reassigning key to new filter array and get rid of toNode<->fromNode

  this[JSON.stringify(fromNode)] = this[JSON.stringify(fromNode)].filter((item) => item !== JSON.stringify(toNode))

  this[JSON.stringify(toNode)] = this[JSON.stringify(toNode)].filter((item) => item !== JSON.stringify(fromNode))
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  let keys = Object.keys(this)

  for(let i = 0; i < keys.length; i++){
    cb(JSON.parse(keys[i]))
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

debugger
let graph = new Graph()




graph.addNode('this');
graph.addNode(true);
graph.addNode(1);
graph.addNode([1, 2, 3]);
graph.forEachNode(console.log);
console.log(graph.size())
graph.edgeTo(1, ['this', true, [1,2 ,3]])
console.log(graph)
console.log(graph.check(1))
console.log(graph.viewEdges(1))
console.log(graph.getEdges(1))

