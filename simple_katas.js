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


