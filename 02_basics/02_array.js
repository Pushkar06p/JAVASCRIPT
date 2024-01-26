const marvel = ["thor", "Ironman","spiderman"]
const dc =  ["superman", " flash", "batman"]

// marvel.push(dc)
// console.log(marvel); //[ 'thor', 'Ironman', 'spiderman', [ 'superman', ' flash', 'batman' ] ]
// console.log(marvel[3][1]); // flash

// allHeros = marvel.concat(dc)
// console.log(allHeros);  // [ 'thor', 'Ironman', 'spiderman', 'superman', ' flash', 'batman' ]

// //  spread operator (...)
// const allNewHeros = [...marvel, ...dc] // [ 'thor', 'Ironman', 'spiderman', 'superman', ' flash', 'batman' ]
// console.log(allNewHeros);

// flat operator
const anotherArray = [1, 2, 3, [4,5,6], 7, [6, 7, [4,5]]]
const realAnotherArray = anotherArray.flat(Infinity) // instead of Infinity you can write the depth to which you want to flat the array
console.log(realAnotherArray);//[
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

// console.log(Array.isArray("Pushkar")); // false
// console.log(Array.from("Pushkar")); // [
// //     'P', 'u', 's',
// //     'h', 'k', 'a',
// //     'r'
// //   ]
// console.log(Array.from({name : "Pushkar"})); // intresting, here we have to specify that we have to make array of key elemnets or constants

// s1 = 100
// s2 = 200 
// s3 = 300
// console.log(Array.of(s1, s2, s3)); // [ 100, 200, 300 ]