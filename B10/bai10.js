function sumArrays(...arrays) {
    
    return arrays.map(arr => arr.reduce((sum, num) => sum + num, 0));
}


const arr1 = [1, 2];
const arr2 = [6, 7, 8];
const arr3 = [12, 8];

const result = sumArrays(arr1, arr2, arr3);
console.log(result);

