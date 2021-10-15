/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    // childs are left and right 
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  /* Traverse the binary tree */ 

  // alternative solution using a QUEUE for BFS 
  minDepth() {

    // initialize minDepth at 0
    // initialize empty queue and push the root 
    let minDepth = 0
    let queue = [] 
    queue.push(this.root) 

    // check if the root is null; if so return 0
    if(this.root === null) return 0 

    // while the queue has elements inside
    while(queue.length) {
      // increase depth 
      minDepth += 1
      // keep track of each level of the tree
      let level = queue.length 

      // loop each level 
      for(let i = 0; i < level; i++) {
        // remove item from the start 
        let current = queue.shift() 
        if(!current.left && !current.right) {
          return minDepth
        }

        if(current.left) queue.push(current.left) 
        if(current.right) queue.push(current.right) 
        
      }
    }
    return minDepth; 
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // use STACK for DFS
  maxDepth() {
    // initialize maxDepth at 0
    // initialize stack and push root to the stack
    let maxDepth = 0
    let stack = []
    stack.push(this.root) 

    // check if there's no root node; if so return 0
    if(this.root === null) return 0 

    // while the stack is not empty 
    while(stack.length) {
      // increase depth 
      maxDepth += 1 
      // keep track of each level of the tree
      let level = stack.length 

      for(let i = 0; i < level; i++) {
        let current = stack.pop() 
        if(current.left) stack.push(current.left)
        if(current.right) stack.push(current.right)
      }
    }
    return maxDepth;   
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. 

   let node100 = new BinaryTreeNode(100);
   let node8 = new BinaryTreeNode(8);
   let nodeNeg4 = new BinaryTreeNode(-4);
   let node2 = new BinaryTreeNode(2, nodeNeg4);
   let nodeNeg3 = new BinaryTreeNode(-3, node8, node100);
   let root = new BinaryTreeNode(10, node2, nodeNeg3);
   let tree = new BinaryTree(root);

        10
      /   \
     2    -3
    /     / \
  -4     8   100

  */ 

  // maxSum() {
  //   // initialize max as 0
  //   let max = 0 
  //   // helper function 
  //   const maxSumFn = (node) => {
  //     if(node === null) return 0 

  //     const left = maxSumFn(node.left) 
  //     const right = maxSumFn(node.right) 
  //     max = Math.max(max, node.val + left + right) 
      
  //     return Math.max(0, left + node.val, right + node.val) 
  //   }

  //   maxSumFn(this.root) 
  //   return max; 
  // }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  // nextLarger(lowerBound) {
  //   let result = null 
  //   // helper function 
  //   const nextLargerFn = (lowerBound, node) => {
  //     if(node === null) return 

  //     if(node.val > lowerBound) {
  //       if(result === null || result > node.val) {
  //         result = node.val 
  //       }
  //     }

  //     nextLargerFn(lowerBound, node.left)
  //     nextLargerFn(lowerBound, node.right)
  //   }
  //   nextLargerFn(lowerBound, this.root) 
  //   return result 
  // }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
