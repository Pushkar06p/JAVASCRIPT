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

// myArr.unshift(9);
// console.log(myArr); // 9, 0, 1, 2, 3, 4, 5
// myArr.shift();
// console.log(myArr); // 0, 1, 2, 3, 4, 5  (9 is removed from the array)

// console.log(myArr.includes(2));
// console.log(myArr.indexOf(2));

// const newArr = myArr.join();
// console.log(myArr); // [0,1,2,3,4,5]
// console.log(typeof myArr);// object
// console.log(newArr); // 0,1,2,3,4,5
// console.log(typeof newArr);// string

// // slice, splice
// let a1 = myArr.slice(1,3) 
// console.log(a1);// [1,2]
// console.log("A", myArr);// A [0,1,2,3,4,5]

// const a2 = myArr.splice(1,3); // deletes the given index positions's elements and return nthe deleted part 
// console.log(a2); //[1,2,3]
// console.log("B",myArr); // B [0,4,5]