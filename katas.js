function reverseInBase(n, b){
  return BigInt(n.toString(b).split('').reverse().join('')).toString(b);
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

function span(arr, predicate) {
  let i;
  for (i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) {
      break;
    }
  }
  return [arr.slice(0, i), arr.slice(i)];
}

function sortByArea(array) {
  return  [...array].sort((a, b) => {
    let squareA, squareB;
    typeof a === "number" ? squareA = Math.PI * a ** 2 : squareA = a[0] * a[1];
    typeof b === "number" ? squareB = Math.PI * b ** 2 : squareB = b[0] * b[1];
    return squareA - squareB;
  })
}

function dropWhile(arr, pred) {
  for (let i = 0; i < arr.length; i++) {
    if (!pred(arr[i])) {
      return arr.slice(i, arr.length);
    }
  }
  return []
}

function removeConsecutiveDuplicates(string) {
  const arr = string.split(/\s+/g);
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) result.push(arr[i]);
  }
  return result.join(' ');
}

function fusc(n){
  if(n === 0) return 0;
  if(n === 1) return 1;
  if(n % 2 === 0) return fusc(n/2);
  return fusc((n - 1) / 2) + fusc(( n + 1 ) / 2);
}

function bubblesortOnce(a) {
  const copy = [...a];

  for (let i = 1; i < copy.length; i++) {
    if (copy[i] < copy[i - 1]) {
      [copy[i], copy[i - 1]] = [copy[i - 1], copy[i]]
    }
  }

  return copy;
}

function lastChair(N) {
  let lastSeat = 1;
  lastSeat = N;
  for (let i = 2; i < N; i++) {
    if (N % 2 === 1) {
      lastSeat = Math.round(N / 2);
    } else if (lastSeat <= N / 2) {
      lastSeat = N;
    } else {
      lastSeat = 1;
    }
  }
  return lastSeat - 1;
}

function maxRot(n) {
  // your code
}

function collatz(n) {
  let result = []

  while (result[result.length - 1] !== 1) {
    result.push(n);
    if (n % 2 === 0) {
      n = Math.floor(n / 2);
    } else {
      n = Math.floor(n * 3 + 1)
    }
  }

  return result.length
}

const fibsFizzBuzz = function(n) {
  if (n === 1) return 1;

  const arrFizzBuzz = [1, 1];

  while (arrFizzBuzz.length < n) {
    const number = arrFizzBuzz[arrFizzBuzz.length - 1] + arrFizzBuzz[arrFizzBuzz.length - 2];
    arrFizzBuzz.push(number);
  }

  return  arrFizzBuzz.map(value => {
    const dividedByThree = value % 3 === 0;
    const dividedByFive = value % 5 === 0;

    if (dividedByThree && dividedByFive) return 'FizzBuzz';
    else if (dividedByThree) return 'Fizz';
    else if (dividedByFive) return 'Buzz';
    else return value;
  })
}

function racePodium(blocks) {
  let firstPlace = Math.ceil(blocks / 3);
  let secondPlace = firstPlace - 1
  let thirdPlace = blocks - (firstPlace + secondPlace);

  if (thirdPlace >= firstPlace) firstPlace++
  if (thirdPlace >= secondPlace) secondPlace++
  if (secondPlace >= firstPlace) firstPlace++;

  thirdPlace = blocks - (firstPlace + secondPlace);

  return [secondPlace, firstPlace, thirdPlace];
}

function partlist(arr) {
  let result = [];
  for (let i = 1; i < arr.length; i++) result.push([arr.slice(0, i).join(' '), arr.slice(i, arr.length).join(' ')]);
  return result;
}

const vertMirror = (strng) => {
  return strng.split('\n').map(word => word.split('').reverse().join('')).join('\n');
}
const horMirror = (strng) => {
  return strng.split('\n').reverse().join('\n');
}
const oper = (fct, s) => {
  return fct(s);
}

function twoOldestAges(ages){
  return [ages.sort((a, b) => b - a)[1], ages.sort((a, b) => b - a)[0]]
}

function breakChocolate(n,m) {
  if (!n || !m || !m * n || n * m === 1) return 0;
  return n * m - 1;
}

function doINeedHouseboat(x,y){
  const annualErosionGrowth = 50;
  const areaSquareRadius = x ** 2 + y ** 2;
  const squareToDie = Math.PI * areaSquareRadius / 2
  let currentErosionSquare = 0;
  let year = 0;

  while (currentErosionSquare < squareToDie) {
    currentErosionSquare += annualErosionGrowth;
    year++;
  }

  return year;
}

function validParentheses(parenStr) {
  const braces = {
    open:'(',
    close:')'
  }
  const stack = [];

  for (let i = 0; i < parenStr.length; i++) {
    const stackLastElement = stack[stack.length - 1];
    if (stackLastElement === braces.open && parenStr[i] === braces.close) {
      stack.pop();
    } else {
      stack.push(parenStr[i]);
    }

  }
  return stack.length === 0;
}

function maxSumBetweenTwoNegatives(a) {
  return [6,-2,3,5].reduce((acc, cur) => {
    return acc += cur
  }, 0)
}

console.log(maxSumBetweenTwoNegatives());
