console.log("Hey this is lecture 55")

let a=5;  //'let' is a global variable
var b=6;
let c="Anish"; 
let _a = 7;
// let 55a = 7; /* invalid name */
// names are case sensitive- Anish and anish are different name.

// console.log(a+b+8)
// console.log(typeof a, typeof b, typeof c)
{
    let a = 66;
    console.log(a)
}
console.log(a)

//but

{
    var b = 77;
    console.log(b)
}
console.log(b)

// const a1 = 6;
// a1 = a1+1;   /* not allowed bcoz a1 is a constant */

let x = "Anish Bhai";
let y = 22;
let z = 3.55;
let p = true;
let q = undefined;
let r = null;
// Typeof Null = Object*********

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)

let o = {
    name : "Anish",
    "registration number" : 5481,
    is_handsome : true
}
console.log(o)
o.marks = 93
console.log(o)
o.marks = 100
console.log(o)