/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    if (n === 0) return arr;

    let result = [];

    for (let num of arr) {
        if (Array.isArray(num)) {
            result.push(...flat(num, n - 1));
        } else {
            result.push(num);
        }
    }

    return result;
};
