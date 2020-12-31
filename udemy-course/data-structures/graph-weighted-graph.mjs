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
