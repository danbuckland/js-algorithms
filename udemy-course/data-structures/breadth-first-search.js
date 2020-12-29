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

const dfsPreOrder = (tree) => {
  let visited = []
  if (!tree.root) return visited
  
  const traverse = (node) => {
    visited.push(node.value)
    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)
  }

  traverse(tree.root)
  return visited
}

const dfsPostOrder = (tree) => {
  let visited = []
  if (!tree.root) return visited
  
  const traverse = (node) => {
    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)
    visited.push(node.value)
  }

  traverse(tree.root)
  return visited
}

const dfsInOrder = (tree) => {
  let visited = []
  if (!tree.root) return visited
  
  const traverse = (node) => {
    if (node.left) traverse(node.left)
    visited.push(node.value)
    if (node.right) traverse(node.right)
  }

  traverse(tree.root)
  return visited
}


console.log(bfs(tree))          // [10, 1, 15, -2, 8, 14, 200, 13]
console.log(dfsPreOrder(tree))  // [10, 1, -2, 8, 15, 14, 13, 200]
console.log(dfsPostOrder(tree)) // [-2, 8, 1, 13, 14, 200, 15, 10]
console.log(dfsInOrder(tree))   // [-2, 1, 8, 13, 14, 200, 15, 10]
//         10
//       /    \
//      1      15
//     / \    /  \
//    -2  8  14  200
//          /
//         13

