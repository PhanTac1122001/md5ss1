const hopNhatDoiTuong = (...objects) => {
    
    return Object.assign({}, ...objects);
};

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5, a: 6 };

const ketQua = hopNhatDoiTuong(obj1, obj2, obj3);
console.log('Đối tượng sau khi hợp nhất:', ketQua);