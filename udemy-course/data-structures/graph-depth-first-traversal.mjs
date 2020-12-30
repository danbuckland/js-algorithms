import Graph from './graph-adjacency-list.mjs'

let graph = new Graph()

//          (A)
//        /     \
//      (B)     (C)
//       |       |
//      (D)_____(E)
//        \     /
//          (F)
graph.addVertices('A','B','C','D','E','F')
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'E')
graph.addEdge('D', 'E')
graph.addEdge('D', 'F')
graph.addEdge('E', 'F')

console.log(graph.depthFirstTraversal('A'))
debugger
