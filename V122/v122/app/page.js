// "use client"
// import { useState, useEffect } from "react";
import fs from "fs/promises" // server side
import Navbar from "@/components/Navbar"

export default function Home() {
  // const [count, setCount] = useState(0)
  console.log("ANISH")
  let a = fs.readFile(".gitignore")         // server side
  a.then(e=>{console.log(e.toString())})
  return (
    <div>
      <Navbar/>
      I am a component 
      {/* {count} */}
      {/* <button onClick={()=>setCount(count+1)}>Touch me</button> */}
    </div>
  );
}
