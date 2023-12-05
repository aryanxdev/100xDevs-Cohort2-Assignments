/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let t = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > t) {
            t = numbers[i];
        }
    }
    return t;
}

module.exports = findLargestElement;

console.log(findLargestElement([1,3,65,2,36,45,63]));