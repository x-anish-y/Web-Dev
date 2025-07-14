//Functions***********************

// console.log("Hey Anish u r nice!")
// console.log("Hey Anish u r good!")
// console.log("Hey Anish ur tshirt is nice!")
// console.log("Hey Anish ur course is good too!")

function nice(name) {
    console.log("Hey " +name+ " u r nice!");
    console.log("Hey " +name+ " u r good!");
    console.log("Hey " +name+ " ur tshirt is nice!");
    console.log("Hey " +name+ " ur course is good too!");
    console.log("\n")
}
nice("Anish");
nice("Harry");

function sum(a, b) {
    console.log(a+b);
}
sum(5,4)

function sum1(a, b) {
    return a+b;
}
result = sum1(5,4)
console.log("The sum of the two numbers is: " +result)
console.log("The sum of the two numbers is: ", result)

function sum2(a, b, c=3) {
    console.log(a,b,c)
    return a+b+c;
}
result0 = sum2(5)
result1 = sum2(5,4)
result2 = sum2(5,4,6)
console.log("The sum of the two numbers is: ", result0)
console.log("The sum of the two numbers is: " +result1)
console.log("The sum of the two numbers is: ", result2)



//Arrow Functions******************

const func1 = (x)=>{
    console.log("I am an arrow function", x);
}
func1(22);
func1(33);
func1(44);
//iha func1 ek variable bhi hai jo ki ek function bhi hai