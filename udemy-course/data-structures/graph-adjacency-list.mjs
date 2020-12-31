// Undirected graph
import Queue from './queue.mjs'

export default class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = []
  }

  addVertices(...vertices) {
    vertices.forEach(vertex => this.addVertex(vertex))
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
    return this
  }

  removeEdge(vertex1, vertex2) {
    // Remove vertex2 value from vertex1 array
    let v2pos = this.adjacencyList[vertex1].findIndex(element => element === vertex2)
    let v1pos = this.adjacencyList[vertex2].findIndex(element => element === vertex1)
    this._swapAndPop(vertex1, v2pos)
    this._swapAndPop(vertex2, v1pos)
  }

  removeVertex(vertex) {
    const vertexConnections = this.adjacencyList[vertex]
    while (vertexConnections.length) {
      this.removeEdge(vertex, vertexConnections[0])
    }
    delete this.adjacencyList[vertex]
  }

  _swapAndPop(vertex, a) {
    // A shorter way of doing this would be with filter() but it's not as efficient
    let array = this.adjacencyList[vertex]
    if (a === array.length - 1) {
      array.pop()
    } else {
      array[a] = array.pop()
    }
  }

  depthFirstRecursive(start) {
    if (!this.adjacencyList[start]) return null
    let results = {}
    
    const crawl = (vertex) => {
      results[vertex] = true
      this.adjacencyList[vertex].forEach(vertex => {
        if (!results[vertex]) crawl(vertex)
      })
    }

    crawl(start)
    return results
  }

  depthFirstIterative(start) {
    if (!this.adjacencyList[start]) return null
    let results = {}
    let stack = [start]
    let vertex

    while(stack.length > 0) {
      vertex = stack.pop()
      results[vertex] = true
      this.adjacencyList[vertex].forEach(connection => {
        if (!results[connection]) stack.push(connection)
      })
    }
    
    return results
  }

  breadthFirstIterative(start) {
    if (!this.adjacencyList[start]) return null
    let results = {}
    let queue = new Queue
    queue.enqueue(start)
    let vertex
    
    while(queue.size > 0) {
      vertex = queue.dequeue()
      results[vertex] = true
      this.adjacencyList[vertex].forEach(connection => {
        if (!results[connection]) queue.enqueue(connection)
      })
    }

    return results
  }
}

// let graph = new Graph() 
// graph.addVertex('Battersea')
// graph.addVertex('Putney')
// graph.addVertex('Wandsworth')
// graph.addVertex('Richmond')
// graph.addEdge('Putney', 'Wandsworth')
// graph.addEdge('Putney', 'Richmond')
// graph.addEdge('Wandsworth', 'Battersea')
// graph.removeVertex('Wandsworth')
// graph.removeEdge('Richmond', 'Putney')
