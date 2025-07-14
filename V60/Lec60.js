// Strings***************************

let a = "Anish";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);
console.log(a.length)

let real_name = "Anish"
let nick_name = "Babu"
console.log("His name is " +real_name+ " and his nick name is "+nick_name)
console.log(`His real name is ${real_name} and his nick name is ${nick_name}`)

let b = "NOobOo"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(1, 4))
console.log(b.slice(2))
console.log(b.replace("Oo", "@@"))
console.log(b.concat(a))
console.log(b.concat(a, "BOOM"))
console.log(b.concat(a, "BOOM", "WOW"))