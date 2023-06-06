var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr = [-22, 1, 2, 3, -23, 3, 0, 0, -1, 4, 5, 5, 6, -7, -8, 9, 0, 11, -12, 13, 14, 15, 15, 15];
function mergeSort(arr) {
    if (arr.length < 2)
        return arr;
    var middle = Math.floor(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);
    function merge(left, right) {
        var result = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                result.push(left.shift());
            }
            else {
                result.push(right.shift());
            }
        }
        return __spreadArray(__spreadArray(__spreadArray([], result, true), left, true), right, true);
    }
    return merge(mergeSort(left), mergeSort(right));
}
console.log(mergeSort(arr));
console.log(mergeSort(arr).length === arr.length);
