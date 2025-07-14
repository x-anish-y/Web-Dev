let a = prompt("Enter your first num")
let b = prompt("Enter your second num")
// let sum = a+b       // here a and b both are string, so sum just appending them 

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Are u dumb mf. We are talking about fucking numbers. Why r u entering string. Cmon bro Just put some fucking integers")
}
let sum = parseInt(a)+parseInt(b)      // here parseInt() chnage the string into integer
// console.log("The sum is ", sum)

// try {
//     console.log("The sum is ", sum*x)
// } catch (error) {
//     console.log("Seriously BRO!!!!! Check your code. There is something wrong.")
//     alert(error.name)
//     alert(error.stack)
// }


// function main(){
//     let x = 2;
//     try {
//         console.log("The sum is ", sum*x)
//         return true
//     } catch (error) {
//         console.log("Seriously BRO!!!!! Check your code. There is something wrong.")
//         return false
//     }
//     // console.log("Files are being closed and db connection is being closed")   // here in a function after returning something function terminates everything after that but
//     finally{
//         console.log("Files are being closed and db connection is being closed")  // if we write it with the help of finally it will still execute after returning anythng. 
//     }
// }
// let c = main()


//Important****************
// If it is not in function then there is no difference in using and not using finally 
let x = 2;
try {
    console.log("The sum is ", sum*x)
} catch (error) {
    console.log("Seriously BRO!!!!! Check your code. There is something wrong.")
}
    // console.log("Files are being closed and db connection is being closed")
finally{
    console.log("Files are being closed and db connection is being closed")
}
