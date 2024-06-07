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

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(array);

prettyPrint(tree.root);

//tree.insert(6);

//prettyPrint(tree.root);

//tree.inorder(tree.root);

//console.log(tree.minValue(tree.root.left.right));

//tree.deleteItem(8);

//prettyPrint(tree.root);

//console.log(tree.find(324));

// console.log(tree.inOrderLog());

//console.log(tree.levelOrder());
