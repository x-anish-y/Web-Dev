const fs = require("fs")
// const fs = require("fs/promises")

// console.log(fs)

console.log("starting")

// fs.writeFileSync("Anish.txt", "Yo Yo bro, Anish is here")  // 1st er ta file name and then filer moddhe je text ta rakhte chai.

// fs.writeFile("Anish2.txt", "Anish here", () => {
//     console.log("done")
//     fs.readFile("Anish2.txt", (error, data) => {
//         // console.log(error, data)
//         console.log(error, data.toString())
//     })
// })

fs.appendFile("Anish2.txt", ", Yo Yo", (e, d) => {  // add kore
    console.log(d)  
})
console.log("ending")