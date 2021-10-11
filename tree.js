/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */
  /* QUEUE/STACK WORKS */ 

  // sumValues() {
  //   // initialize total and empty queue 
  //   let total = 0
  //   let queue = []
  //   // push root node to the queue 
  //   queue.push(this.root)

  //   // while queue is not empty 
  //   while(queue.length) {
  //     let current = queue.shift() 
  //     // if currrent 
  //     if(current) {
  //       total += current.val 
  //       // for each child node push to queue 
  //       for(let child of current.children) {
  //         queue.push(child) 
  //       }
  //     }
  //   }
  //   return total 
  // }

  sumValues() {
    // initialize total and empty stack []
    let total = 0 
    let stack = [] 
    // push root node to the stack 
    stack.push(this.root) 

    // while loop, stack is NOT empty 
    while(stack.length) {
      let current = stack.pop() 
      if(current) {
        total += current.val 
        for(let child of current.children) {
          stack.push(child) 
        }
      }
    }
    return total; 
  }

  /** countEvens(): count all of the nodes in the tree with even values. */
  /* QUEUE/STACK WORKS */ 

  // countEvens() {
  //   // initialize count and empty queue 
  //   let count = 0 
  //   let queue = [] 
  //   // push root node to the queue 
  //   queue.push(this.root) 

  //   while(queue.length) {
  //     const current = queue.shift() 
  //     // check if current
  //     if(current) {
  //       if(current.val % 2 === 0) {
  //         count++
  //       }
  //       for(let child of current.children) {
  //         queue.push(child)
  //       }
  //     } 
  //   }
  //   return count
  // }

  countEvens() {
    // initialize count and stack [] 
    let count = 0 
    let stack = [] 
    // push root node to the stack 
    stack.push(this.root) 

    // while loop, stack is NOT empty 
    while(stack.length) {
      const current = stack.pop() 
      if(current) {
        if(current.val % 2 === 0) {
          count += 1 
        }
        for(let child of current.children) {
          stack.push(child) 
        }
      }
    }
    return count; 
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    // initialize count and empty queue 
    let count = 0 
    let queue = [] 
    // push root node to the queue 
    queue.push(this.root) 

    while(queue.length) {
      const current = queue.shift() 
      if(current) {
        if(current.val > lowerBound) {
          count++ 
        }
        for(let child of current.children) {
          queue.push(child)
        }
      }
    }
    return count 
  }
}

module.exports = { Tree, TreeNode };
