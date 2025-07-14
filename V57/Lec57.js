console.log("All about Loops in JS")

let a = 1;

// For Loop
for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

// For-in Loop
let obj = {
    name: "Anish",
    role: "Programmer"
}
for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
    
    console.log(key)

    const element1 = obj[key];
    console.log(element1)
}

// For-of Loop
for (const char of "ANISH") {
    console.log(char)
}

// While loop
let i = 0;
while(i<6){
    console.log(i);
    i++;
}

// Do-While Loop
let x = 0;
do {
    console.log(x);
    x++;
} while (x<6);