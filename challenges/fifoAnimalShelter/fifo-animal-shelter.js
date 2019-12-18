class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    const node = new Node(value, null);
    if(this.isEmpty()) {
      this.front = node;
    } else {
      this.back.next = node;
    }
    this.back = node;
  }

  dequeue() {
    if(this.isEmpty()) return null;

    const front = this.front;
    this.front = this.front.next;
    if(this.isEmpty()) this.back = null;

    return front;
  }

  peek() {
    if(this.isEmpty()) return null;
    return this.front.value;
  }

  isEmpty() {
    return !this.front;
  }
}

class AnimalShelter{
  constructor(){
    this.dog = new Queue();
    this.cat = new Queue();
  }
  
  enqueue(animal){
    if(animal === 'cat'){
      this.cat.enqueue('cat');
    } else if(animal === 'dog'){
      this.dog.enqueue('dog');
    } else {
      throw Error('We do not accept this species!');
    }
  }

  dequeue(animal){
    if(animal === 'cat'){
      this.cat.dequeue();
    } else if(animal === 'dog'){
      this.dog.dequeue();
    } else {
      throw Error('We do not accept this species!');
    }
  }
}

module.exports = {
  AnimalShelter
};
