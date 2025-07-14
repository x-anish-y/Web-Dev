async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}
// let a = await sleep()
// console.log(a)
// let b = await sleep()
// console.log(b)               // It will show error, it will say ki hame ek async function banana padega iye execute karne keliye

(async function main() {
    
    console.log(a1)

    // IIFE (Immediately invoke function expression***************
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b)

    // Destructuring***********************
    // let x, y = [1, 5]    // It is wrong
    // let [x, y] = [1, 5]   // It is correct
    // console.log(x, y)
    // let [x, y] = [1, 5, 7, 9, 11]   // 7, 9, 11 will not be allocated
    // console.log(x, y)   
    // let [x, y, ...rest] = [1, 5, 7, 9, 11]  // Now they are allocated
    // console.log(x, y, rest)   
    // Destructuring in Array*********
    let obj = {
        a: 1,
        b: 2,
        c: 3
    }
    let {a,b} = obj
    console.log(a, b)

    // Spread Syntax**************
    function sum(a, b, c){
        return a+b+c;
    }
    let arr = [1,4,8]
    console.log(arr[0]+arr[1]+arr[2])
    console.log(sum(arr[0],arr[1],arr[2]))
    console.log(sum(...arr))   // Spread Operator

    // Hoisting****************
    // Only var ei hoi, let and const e hoi na.
    var a1 = 6
})()