class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{ 
  constructor(){
    this.root = null;
  }

  add(data){
    const newNode = new Node(data);

    if(this.root === null){
      this.root = newNode;
    } else {
      
    }
  }

  preOrder() {

  }

  inOrder() {

  }

  postOrder() {

  }
}

module.exports = BinarySearchTree;
