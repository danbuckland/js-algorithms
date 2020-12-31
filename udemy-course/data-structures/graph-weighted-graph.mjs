import './min-binary-heap-priority-queue.mjs'
import PriorityQueue from './min-binary-heap-priority-queue.mjs'

export default class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addVertices(...vertices) {
    vertices.forEach(vertex => this.addVertex(vertex))
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({node: vertex2, weight})
    this.adjacencyList[vertex2].push({node: vertex1, weight})
    return this
  }

  depthFirstRecursive(start) {
    if (!this.adjacencyList[start]) return null
    let results = {}
    results[start] = true
    const crawl = (vertex) => {
      this.adjacencyList[vertex].forEach(connection => {
        if (!results[connection.node]) {
          results[connection.node] = Infinity
          crawl(connection.node)
        } 
      })
    }

    crawl(start)
    results[start] = null
    return results
  }

  getVertices(start) {
    if (!this.adjacencyList[start]) return null
    let results = {}
    let vertices = [start]
    results[start] = true
    const crawl = (vertex) => {
      this.adjacencyList[vertex].forEach(connection => {
        let node = connection.node
        if (!results[node]) {
          results[node] = true
          vertices.push(node)
          crawl(node)
        } 
      })
    }

    crawl(start)
    return vertices
  }

  getShortestDistance(start, end) {
    // create an object to track shortest path to each node from start
    let distances = {}
    let previous = {}
    let queue = new PriorityQueue()
    this.getVertices(start).forEach(node => {
      distances[node] = Infinity
      queue.enqueue(Infinity, node)
      previous[node] = null
    })
    distances[start] = 0
    // loop while there are still items in the queue
    while(queue.values.length) {
      // dequeue the vertex
      let vertex = queue.dequeue()
      if (vertex.value !== end) {
        this.adjacencyList[vertex.value].forEach(connection => {
          let connectedNode = connection.node
          let distanceFromNode = connection.weight
          // calculate the distance to that vertex from the start
          let calculatedDistance = distanceFromNode + distances[vertex.value]
          // if calculatedDistance is < distances object 
          if (calculatedDistance < distances[connectedNode]) {
            // update distances object with calculatedDistance
            distances[connectedNode] = calculatedDistance
            // update previous to contain vertex
            previous[connectedNode] = vertex.value
            // enqueue the vertex with the new distance as priority
            queue.enqueue(calculatedDistance, connectedNode)
          }
        })
      }
    }
    
    return distances[end]
  }
}