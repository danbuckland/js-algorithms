import Graph from './graph-weighted-graph.mjs'

let graph = new Graph()
graph.addVertices('A', 'B', 'C', 'D', 'E', 'F')
graph.addEdge('A', 'B', 4) //     (A)___4___(B)
graph.addEdge('A', 'C', 2) //     /           \
graph.addEdge('B', 'E', 3) //    2             3
graph.addEdge('C', 'D', 2) //   /               \
graph.addEdge('C', 'F', 4) //  (C)__2__(D)__3__(E)
graph.addEdge('D', 'E', 3) //    \      |      /
graph.addEdge('D', 'F', 1) //      4    1    1
graph.addEdge('E', 'F', 1) //       \   |   /
                           //          (F)

console.log(graph.getShortestDistance('A', 'E')) // 6
console.log(graph.getShortestDistance('A', 'A')) // 0
console.log(graph.getShortestDistance('A', 'D')) // 4
console.log(graph.getShortestDistance('A', 'F')) // 5
console.log(graph.getShortestDistance('F', 'D')) // 1