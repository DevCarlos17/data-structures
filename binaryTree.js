class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.addNodeRecursively(this.root, newNode);
    }
  }

  addNodeRecursively(currentNode, newNode) {
    if (newNode.value < currentNode.value) {
      if (currentNode.left) {
        this.addNodeRecursively(currentNode.left, newNode);
      } else {
        currentNode.left = newNode;
      }
    } else {
      if (currentNode.right) {
        this.addNodeRecursively(currentNode.right, newNode);
      } else {
        currentNode.right = newNode;
      }
    }
  }


}

