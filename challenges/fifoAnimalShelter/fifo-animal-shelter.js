class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class AnimalShelter {
  constructor(){
    this.front = null,
    this.back = null;
  }

  enqueue(animal) {
    const node = new Node(animal, null);
    if(this.front === null) {
      this.front = node;
    } else {
      this.back.next = node;
    }
    this.back = node;
  }

  dequeue(animal){
    let current = this.front;
    let old;
    while(current.value !== animal){
      old = current;
      current = current.next;
    }
    old.next = current.next;

    return current;
  }
}

