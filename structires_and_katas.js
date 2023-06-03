function reverseInBase(n, b) {
  let reversedNum = 0;
  let multiplier = 1;
  while (n > 0) {
    reversedNum = reversedNum * b + (n % b);
    n = Math.floor(n / b);
    multiplier *= 10;
  }
  return reversedNum;
}

function reverseNumber(n, b){

  function fromDecimalToBase(n, b) {
    let result = ''
    while (n > 0) {
      result += n % b;
      n = Math.floor(n / b);
    }
    return parseInt(result.split('').reverse().join(''));
  }

  function fromBaseToDecimal(n, b) {

  }

  return fromBaseToDecimal(n, b);
}

function maxProduct(a) {
  let max = a[0];
  let almost = a[1];

  if (max < almost) [max, almost] = [almost, max];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > max) {
      almost = max;
      max = a[i];
    } else if (a[i] > almost){
      almost = a[i];
    }
  }

  return max * almost;
}

const sequenceSum = (begin, end, step) => {
  let sum = 0;
  for(let i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
};

function setReducer(input) {
  if (input.length < 2) {
    return input[0]
  }

  let result = {};

  for (let i = 0; i < input.length; i++) {
    console.log(result)
    if (!result[input[i]]) {
      result[input[i]] = 1;
      continue;
    }
    result[input[i]]++;
  }

  return setReducer(Object.values(result))
}

function age(x, y){
  return x * y / (y - 1);
}

function calc_ms(n) {
  return 20 ** n;
}

function likeOrDislike(buttons) {
  const state = {
    like: 'Like',
    dislike: 'Dislike',
    nothing: 'Nothing'
  }

  let currentState = state.nothing;

  if (buttons.length) {
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] !== currentState) currentState = buttons[i];
      else  currentState = state.nothing;
    }
  }

  return currentState;
}

Array.prototype.remove_ = function(integer_list, values_list){
  return integer_list.filter(value => !values_list.includes(value))
}

const sing = function () {
  let result = []

  for (let i = 10; i >= 0; i--) {
    result.push(`${i === 0 ? 'No more' : i} bottle${i === 1 ? '' : 's'} of beer on the wall, ${i === 0 ? 'no more' : i} bottle${i === 1 ? '' : 's'} of beer.`)
    result.push(`${i !== 0 ? 'Take one down and pass it around' : 'Go to the store and buy some more'}, ${i - 1 === 0 ? 'no more' : i === 0 ? 99 : i - 1} bottle${i - 1 === 1 ? '' : 's'} of beer on the wall.`)
  }

  return result
};

function isEven (x) {
  return Math.abs(x) % 2 === 0;
}

const arr = [2,4,6,1,8,10];

function span(arr, predicate) {

}

// STRUCTURES //

class Node {
  data
  next = null

  constructor(data) {
    this.data = data;
  }
}

class LinkedList {
  rootNode = null;

  getListTail(node, value = null) {
    if (!node) return null;

    if (node.next === null) {
      return node;
    }

    if (value && node.data === value) return node;

    return this.getListTail(node.next);
  }

  add(value) {
    const node = new Node(value);
    if (this.rootNode === null) this.rootNode = node;
    else if (this.getListTail(this.rootNode, value)){
      this.getListTail(this.rootNode, value).next = node;
    }
  }

  has(value) {
    if (this.rootNode === null) return false;

    let currentNode = this.rootNode;

    while (currentNode) {
      if (currentNode.data === value) return true;
      currentNode = currentNode.next;
    }

    return false;
  }

  remove() {

  }
}

class Stack {
  stack = []

  constructor(arr) {
    this.stack = [...this.stack, ...arr];
  }

  push(value) {
    this.stack[this.stack.length] = value;
    return this.stack.length;
  }

  pop() {
    const element =  this.stack[this.stack.length - 1];
    this.stack.length = this.stack.length - 1;
    return element;
  }
}

class Queue {
  queue = []

  enqueue(value) {
    this.queue[this.queue.length] = value;
  }

  dequeue() {
    const element = this.queue[0];
    this.queue = this.queue.filter((value, index) => index !== 0);
    return element;
  }
}
