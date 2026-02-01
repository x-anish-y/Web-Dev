"use client"
import Image from "next/image";

export default function Home() {
  const HandleClick = async()=>{
    let data = {
      name: "Anish",
      role: "Coder"
    }
    let a = await fetch("/api/add", {method: "POST", headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),})
    let res = await a.json()
    console.log(res)
  }

  return (
    <div>
      <h1>Next.js Api routes demo</h1>
      <button onClick={HandleClick}>Click Me</button>
    </div>
  );
}
