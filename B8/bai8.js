const chenMang = (mang1, mang2, viTri) => {
  
    if (viTri < 0 || viTri > mang1.length) {
        console.log('Vị trí không hợp lệ!');
        return null;
    }
   
    return [
        ...mang1.slice(0, viTri), 
        ...mang2,                
        ...mang1.slice(viTri)    
    ];
};


let mang1 = [1, 2, 3, 7, 8];
let mang2 = [4, 5, 6];
let viTri = 3;
console.log(chenMang(mang1, mang2, viTri)); 

mang1 = ['a', 'b', 'e', 'f'];
mang2 = ['c', 'd'];
viTri = 2;
console.log(chenMang(mang1, mang2, viTri)); 