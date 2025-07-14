import fs from "fs/promises"

let a = await fs.readFile("Anish.txt") 
let b = await fs.writeFile("Anish.txt", "\n\n\nThis is an amazing promise")

console.log(a.toString()) // tostring manuser porar vasay transfer kore ota