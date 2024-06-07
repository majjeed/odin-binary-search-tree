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
}

export { Tree };
