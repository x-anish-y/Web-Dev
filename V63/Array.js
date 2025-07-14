// Array*************************************

let arr = [1,2,4,5,7]
// Index   0 1 2 3 4

console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr.toString()) // array --> string
console.log(arr.join(" and ")) // "," --> "and"
console.log(arr.pop()) // Last element ke eliminate kore 
console.log(arr);
console.log(arr.push(100)); // Last element ke add kore
console.log(arr);
console.log(arr.push("Anish"));
console.log(arr);
console.log(arr.shift()) // 1st element ke eliminate kore 
console.log(arr);
console.log(arr.unshift("Noob")); // 1st element ke add kore
console.log(arr);
delete arr[2];
console.log(arr);
arr.splice(1,3)
console.log(arr);


// arr[0] = 5666;
// // It's changing only in array
// console.log(arr[0]);
// console.log(arr);
// console.log(arr[2]); 
// console.log(arr[4]);

// let str = "Anish";
// console.log(str[1]);
// str[1] = "K";
// console.log(str[1]);
// // In case of String, it's not changing

//arr.concat(arr, str) // It's not possible
let arr2 = [8,10,12,11,13]
let arr3 = arr.concat(arr2)
console.log(arr3);