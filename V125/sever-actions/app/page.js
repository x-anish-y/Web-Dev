"use client"
import { submitAction } from "@/action/form";
import { useRef } from "react";

export default function Home() {
  let ref = useRef()
  return (
    <div>
      <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="add">Adress</label>
          <input type="text" name="add" id="add" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
