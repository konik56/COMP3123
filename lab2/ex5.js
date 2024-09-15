function calculateSum(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function calculateProduct(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

var array = [1, 2, 3, 4];

const sum = calculateSum(array);
console.log(sum);

const product = calculateProduct(array);
console.log(product); 
