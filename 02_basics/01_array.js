//  array

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr);

// const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr2);

//  Array Methods

// myArr.push(6);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

myArr.unshift(9);
console.log(myArr); // 9, 0, 1, 2, 3, 4, 5
myArr.shift();
console.log(myArr); // 0, 1, 2, 3, 4, 5  (9 is removed from the array)