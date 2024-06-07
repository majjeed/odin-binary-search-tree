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

  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data + " ");
      this.inorder(node.right);
    }
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
}

export { Tree };
