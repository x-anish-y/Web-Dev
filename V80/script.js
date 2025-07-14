// let obj = {
//     a: 1,
//     b: "Anish"
// }

// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };
// rabbit.__proto__ = animal   // sets rabbit.[[prototype]] = animal

class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created...")
    }
    eats(){
        console.log("Kha raha hu")
    }
    jumps(){
        console.log("Kood raha hu")
    }
}

let a = new Animal("Anish");
console.log(a)

class lion extends Animal{
    constructor(name){
        super(name)
        console.log("Object is created and he is a lion...")
    }
    // eats(){
    //     console.log("Kha raha hu (ek insaan ko)")
    // }
    eats(){
        super.eats()
        console.log("Kha raha hu (ek insaan ko)")
    }
}

let l = new lion("Shera")
console.log(l)