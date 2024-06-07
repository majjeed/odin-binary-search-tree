import { Node } from "./node.js";

//removes duplicates and sorts in ascending order
function cleanData(arr) {
  let resultArr = [];
  let set = new Set();
  arr.forEach((element) => set.add(element));
  set.forEach((element) => resultArr.push(element));
  return resultArr.sort((a, b) => a - b);
}

class Tree {
  constructor(arr) {
    this.root = this.buildTree(arr);
  }

  buildTree(arr) {
    let cleanArr = cleanData(arr);
    let start = 0;
    let end = cleanArr.length - 1;

    return this.sortedArrayToBST(cleanArr, start, end);
  }

  sortedArrayToBST(arr, start, end) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let node = new Node(arr[mid]);

    node.left = this.sortedArrayToBST(arr, start, mid - 1);
    node.right = this.sortedArrayToBST(arr, mid + 1, end);
    return node;
  }

  insert(value) {
    let newNode = new Node(value);
    let currentNode = this.root;
    let inserted = false;

    while (!inserted) {
      if (value < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          inserted = true;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          inserted = true;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  deleteItem(value) {
    //delete leaf node
    //delete node with one child
    //delete node with two children
    this.root = this.deleteRecursively(this.root, value);
  }

  deleteRecursively(node, value) {
    if (node === null) {
      return node;
    }

    if (value < node.data) {
      node.left = this.deleteRecursively(node.left, value);
    } else if (value > node.data) {
      node.right = this.deleteRecursively(node.right, value);
    } else {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      node.data = this.minValue(node.right);

      node.right = this.deleteRecursively(node.right, node.data);
    }
    return node;
  }

  minValue(node) {
    let minv = node.data;
    while (node.left !== null) {
      minv = node.left.data;
      node = node.left;
    }
    return minv;
  }

  find(value) {
    return this.finderHelper(this.root, value);
  }

  finderHelper(node, value) {
    if (node === null) {
      return null;
    } else if (node.data === value) {
      return node;
    } else if (value < node.data) {
      return this.finderHelper(node.left, value);
    } else if (value > node.data) {
      return this.finderHelper(node.right, value);
    }
  }

  levelOrder(callback) {
    if (this.root === null) return [];

    let result = [];
    this.levelOrderHelper([this.root], result, callback);

    return result;
  }

  levelOrderHelper(queue, result, callback) {
    if (queue.length === 0) return;

    let nextQueue = [];

    for (let node of queue) {
      if (callback) {
        callback(node);
      } else {
        result.push(node.data);
      }

      if (node.left !== null) {
        nextQueue.push(node.left);
      }

      if (node.right !== null) {
        nextQueue.push(node.right);
      }
    }

    this.levelOrderHelper(nextQueue, result, callback);
  }

  inOrder(callback) {
    if (this.root === null) return [];

    let result = [];
    this.inOrderHelper(this.root, result, callback);

    return result;
  }

  inOrderHelper(node, result, callback) {
    if (node === null) return;

    this.inOrderHelper(node.left, result, callback);

    if (callback) {
      callback(node);
    } else {
      result.push(node.data);
    }

    this.inOrderHelper(node.right, result, callback);
  }

  preOrder(callback) {
    if (this.root === null) return [];

    let result = [];
    this.preOrderHelper(this.root, result, callback);

    return result;
  }

  preOrderHelper(node, result, callback) {
    if (node === null) return;

    if (callback) {
      callback(node);
    } else {
      result.push(node.data);
    }

    this.preOrderHelper(node.left, result, callback);

    this.preOrderHelper(node.right, result, callback);
  }

  postOrder(callback) {
    if (this.root === null) return [];

    let result = [];
    this.postOrderHelper(this.root, result, callback);

    return result;
  }

  postOrderHelper(node, result, callback) {
    if (node === null) return;

    this.postOrderHelper(node.left, result, callback);

    this.postOrderHelper(node.right, result, callback);

    if (callback) {
      callback(node);
    } else {
      result.push(node.data);
    }
  }

  height(node) {
    if (node === null) return -1;
    let leftHeight = this.height(node.left);
    let rightHeight = this.height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

export { Tree };
