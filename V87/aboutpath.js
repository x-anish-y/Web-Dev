import path from "path"

console.log(path)

let mypath = "C:\\Users\\Anish\\Downloads\\WebDev\\V87\\Anish.txt"
console.log(path.extname(mypath)) // ki dhoroner file
console.log(path.dirname(mypath)) // directory path bole
console.log(path.basename(mypath)) // file name bole
console.log(path.join("c:/", "programs\\Anish.txt"))  // "c:/" ekhane "/" ke "\" change kore daye nije thekei