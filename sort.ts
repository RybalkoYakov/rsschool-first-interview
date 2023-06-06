const arr = [-22, 1, 2, 3, -23, 3, 0, 0, -1, 4, 5, 5, 6, -7, -8, 9, 0, 11, -12, 13, 14, 15, 15, 15];

function mergeSort(arr: number[]): number[] {
  if (arr.length < 2) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  function merge(left, right) {
    const result = []
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return [...result,...left, ...right]
  }

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(arr));
console.log(mergeSort(arr).length === arr.length)
