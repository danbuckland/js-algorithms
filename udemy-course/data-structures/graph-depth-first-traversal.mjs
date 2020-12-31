import Graph from './graph-adjacency-list.mjs'

let graph = new Graph()



graph.addVertices('A','B','C','D','E','F')  
graph.addEdge('A', 'B') //          (A)
graph.addEdge('A', 'C') //        /     \
graph.addEdge('B', 'D') //      (B)     (C)
graph.addEdge('C', 'E') //       |       |
graph.addEdge('D', 'E') //      (D)_____(E)
graph.addEdge('D', 'F') //        \     /
graph.addEdge('E', 'F') //          (F)

console.log(graph.depthFirstRecursive('A'))
console.log(graph.depthFirstIterative('A'))
console.log(graph.breadthFirstIterative('A'))
debugger
