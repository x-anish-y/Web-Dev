let a = [1, 93, 5, 6, 88]

for (let i = 0; i < a.length; i++) {
    const element = a[i];
    console.log(element);
}

a.forEach((value, i, a) => {
    console.log(value, i, a);
})

let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element)
    }
}
   
for (const element of a) {
    console.log(element);
}

let arr = [1, 13, 5, 7, 11];
// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newArr.push(element ** 2)
// }
//            OR
let newArr = arr.map((e)=>{
    return e**2;
})
console.log(newArr);

const greaterthan30 = (e)=>{
    if(e>30){
        return true;
    }
    return false;
}
console.log(newArr.filter(greaterthan30))

const red = (a,b) => {
    return a*b;
}
console.log(arr.reduce(red)) 