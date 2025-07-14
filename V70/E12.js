// My Soln (Totally Trash)

// document.body.childNodes[3].firstElementChild.style.backgroundColor="red"
// 'red'
// document.body.childNodes[3].childNodes[3].style.backgroundColor="green"
// 'green'
// document.body.childNodes[3].childNodes[5].style.backgroundColor="yellow"
// 'yellow'
// document.body.childNodes[3].childNodes[7].style.backgroundColor="brown"
// 'brown'
// document.body.childNodes[3].lastElementChild.style.backgroundColor="blue"
// 'blue'

// Actual Solution

console.log("Script.js initializing")
// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children 


function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);  //Actual Concept: a + r*(b-a)   ;   here a is the lowest value, b is the highest value and r is the random generated number
    let val2 = Math.ceil(0 + Math.random()* 255);  // Math.ceil gives the greater integer value 
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})