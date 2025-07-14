console.log("Anish is a Hacker")
console.log("Harry is a Hecker")

setTimeout(() => {
    console.log("I am inside settimeout")
}, 0)
setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 2000)

console.log("The END")

const fn = () => {
    console.log("Nothing")
}
const callback = (arg, fn) =>{
    console.log(arg)
    fn()
}
const loadscript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Anish", fn);
    document.head.append(sc)
}
  
loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )