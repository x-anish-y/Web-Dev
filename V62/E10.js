/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

let num1 = "Crazy";
let num2 = "Amazing";
let num3 = "Fire";

let num4 = "Engine";
let num5 = "Foods";
let num6 = "Garments";

let num7 = "Bros";
let num8 = "Limited";
let num9 = "Hub";

const randomNum1 = Math.random() < 0.33 ? num1 : Math.random() < 0.66 ? num2 : num3;
const randomNum2 = Math.random() < 0.33 ? num4 : Math.random() < 0.66 ? num5 : num6;
const randomNum3 = Math.random() < 0.33 ? num7 : Math.random() < 0.66 ? num8 : num9;


console.log(`Your Business Name is ${randomNum1} ${randomNum2} ${randomNum3}`);