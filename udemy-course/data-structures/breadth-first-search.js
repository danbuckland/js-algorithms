const { BinarySearchTree, Queue } = require('./binary-search-tree')

let tree = new BinarySearchTree()
tree.insert(10).insert(15).insert(14).insert(1).insert(-2).insert(200).insert(8).insert(13)

const bfs = (tree) => {
  let queue = new Queue
  let visited = []

  if (!tree.root) return visited

  let node = tree.root
  queue.enqueue(node)

  while(queue.size > 0) {
    node = queue.dequeue()
    visited.push(node.value)
    if (node.left) queue.enqueue(node.left)
    if (node.right) queue.enqueue(node.right)
  }

  return visited
}

console.log(bfs(tree)) // [10, 1, 15, -2, 8, 14, 200, 13]

//         10
//       /    \
//      1      15
//     / \    /  \
//    -2  8  14  200
//          /
//         13

