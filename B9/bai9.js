function zipArrays(...arrays) {
  
    if (!arrays.every(arr => arr.length === arrays[0].length)) {
        throw new Error("Tất cả các mảng phải có độ dài bằng nhau.");
    }

   
    return arrays[0].map((_, i) => arrays.map(arr => arr[i]));
}


const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
const arr3 = [true, false, true];

const result = zipArrays(arr1, arr2, arr3);
console.log(result);

