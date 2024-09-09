function findLargest(arr) {
    let max = arr[0];

    for (let n = 1; n < arr.length; n++) {
        if (arr[n] > max) {
            max = arr[n];
        }
    }

    return max;
}

let numbers = [10, 25, 15];
let largest = findLargest(numbers);

console.log(`Number: ${largest}`);