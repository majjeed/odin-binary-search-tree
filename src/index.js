import { Tree } from "./tree.js";

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

//const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
//const tree = new Tree(array);
//prettyPrint(tree.root);

//tree.insert(6);

//prettyPrint(tree.root);

//console.log(tree.minValue(tree.root.left.right));

//tree.deleteItem(8);

//prettyPrint(tree.root);

//console.log(tree.find(324));

//tree.levelOrder((node) => console.log(node.data));

//console.log(tree.levelOrder());

//tree.inOrder((node) => console.log(node.data));

//console.log(tree.postOrder());

//console.log(tree.height(tree.root));

//console.log(tree.depth(tree.root.right.right.right));

//console.log(tree.isBalanced(tree.root));

//Rebalance testing
/*
tree.insert(6);
tree.insert(6);
tree.insert(6);
tree.insert(6);
console.log(tree.isBalanced(tree.root));
prettyPrint(tree.root);

tree.rebalance();
console.log(tree.isBalanced(tree.root));
prettyPrint(tree.root);
*/

// DRIVER SCRIPT
let randArr = [];

for (let i = 0; i < 100; i++) {
  randArr.push(Math.floor(Math.random() * 100));
}

let tree = new Tree(randArr);

console.log("is the Tree balanced: " + tree.isBalanced());

// console.log("LEVEL ORDER TRAVERSAL: ");
// tree.levelOrder((node) => console.log(node.data));

// console.log("IN ORDER TRAVERSAL: ");
// tree.inOrder((node) => console.log(node.data));

// console.log("PRE ORDER TRAVERSAL: ");
// tree.preOrder((node) => console.log(node.data));

// console.log("POST ORDER TRAVERSAL: ");
// tree.postOrder((node) => console.log(node.data));

prettyPrint(tree.root);

let newRandArr = [];
for (let i = 0; i < 200; i++) {
  newRandArr.push(Math.floor(Math.random() * 300));
}

newRandArr.forEach((element) => tree.insert(element));

console.log("is the Tree balanced: " + tree.isBalanced());

console.log("...Rebalancing: ");
tree.rebalance();
console.log("is the Tree balanced NOW?: " + tree.isBalanced());

// console.log("LEVEL ORDER TRAVERSAL: ");
// tree.levelOrder((node) => console.log(node.data));

// console.log("IN ORDER TRAVERSAL: ");
// tree.inOrder((node) => console.log(node.data));

// console.log("PRE ORDER TRAVERSAL: ");
// tree.preOrder((node) => console.log(node.data));

// console.log("POST ORDER TRAVERSAL: ");
// tree.postOrder((node) => console.log(node.data));

prettyPrint(tree.root);
