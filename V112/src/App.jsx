import { useState } from 'react'
import './App.css'

function App() {
  // const [name, setname] = useState("Anish")
  // const [form, setform] = useState({email:"", phn:""})
  const [form, setform] = useState()
  
  const handleclick = ()=>{
    alert("I am clicked")
  }
  const handlemouse = ()=>{
    alert("I am moused")
  }
  const handletype =(e)=>{
    setform({...form, [e.target.name]:e.target.value})
    console.log(form)
  }

  return (
    <>
      <button onClick={handleclick}>Cliick me</button>
      <button onMouseMove={handlemouse}>Mouse me</button>
      {/* <input type="text" name='email' value={form.email} onChange={handletype}/> */}
      <input type="text" name='email' value={form.email?form.email:""} onChange={handletype}/>
      {/* <input type="text" name='phn' value={form.phn} onChange={handletype}/> */}
      <input type="text" name='phn' value={form.phn?form.phn:""} onChange={handletype}/>
    </>
  )
}

export default App
