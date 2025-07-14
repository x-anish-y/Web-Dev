let button = document.getElementById("btn")

// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener(/*"click"*/ "dblclick", ()=>{
    // alert("I was clicked YAYY!!!!")
    document.querySelector(".box").innerHTML = "<b>BOOB</b>ies"
})

button.addEventListener("contextmenu", ()=>{
    alert("Don't hack us by right click")
})

document.addEventListener("keydown", (e)=>{
    // console.log(e)
    console.log(e, e.key, e.keyCode)
})