import PriorityQueue from './min-binary-heap-priority-queue.mjs'
import SinglyLinkedList from './singly-linked-list.mjs'

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
    const distances = {}
    const bestRoute = {}
    const queue = new PriorityQueue()
    this.getVertices(start).forEach(node => {
      distances[node] = Infinity
      queue.enqueue(Infinity, node)
      bestRoute[node] = null
    })
    distances[start] = 0
    // loop while there are still items in the queue
    while(queue.values.length) {
      // get the nearest node from the queue
      const smallest = queue.dequeue().value
      if (smallest !== end) {
        // loop through each connection of the nearest node
        this.adjacencyList[smallest].forEach(connection => {
          let connectedNode = connection.node
          let distanceFromNode = connection.weight
          // calculate the distance of each connection from the start
          let calculatedDistance = distanceFromNode + distances[smallest] 
          if (calculatedDistance < distances[connectedNode]) {
            // update distances object with calculatedDistance
            distances[connectedNode] = calculatedDistance
            // update previous to contain vertex
            bestRoute[connectedNode] = smallest
            // enqueue the vertex with the new distance as priority
            queue.enqueue(calculatedDistance, connectedNode)
          }
        })
      }
    }
    
    return distances[end]
  }

  getShortestRoute(start, end) {
    // create an object to track shortest path to each node from start
    const distances = {}
    const bestRoute = {}
    const queue = new PriorityQueue()
    const path = new SinglyLinkedList()
    this.getVertices(start).forEach(node => {
      distances[node] = Infinity
      queue.enqueue(Infinity, node)
      bestRoute[node] = null
    })
    distances[start] = 0
    // loop while there are still items in the queue
    while(queue.values.length) {
      // get the nearest node from the queue
      let smallest = queue.dequeue().value
      if (smallest !== end) {
        // loop through each connection of the nearest node
        this.adjacencyList[smallest].forEach(connection => {
          let connectedNode = connection.node
          let distanceFromNode = connection.weight
          // calculate the distance of each connection from the start
          let calculatedDistance = distanceFromNode + distances[smallest] 
          if (calculatedDistance < distances[connectedNode]) {
            // update distances object with calculatedDistance
            distances[connectedNode] = calculatedDistance
            // update previous to contain vertex
            bestRoute[connectedNode] = smallest
            // enqueue the vertex with the new distance as priority
            queue.enqueue(calculatedDistance, connectedNode)
          }
        })
      } else { // found the end, build the path
        // while bestRoute object key is not null, i.e. it's not the start
        while(bestRoute[smallest]) {
          path.unshift(smallest)
          // set smallest to the previous stop in the route
          smallest = bestRoute[smallest]
        }
        path.unshift(smallest)
        path.print()
        break
      }
    }
  }
}