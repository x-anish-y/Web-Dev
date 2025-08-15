import { useState, useEffect } from 'react'
import './App.css'
import './index.css'
import logo from './LOGO.png'
import bg from './Bg.png'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [showfinished, setshowfinished] = useState(false)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos")) 
      settodos(todos)
    }
  }, [])
  
  const savetoLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const togglefinished=(e) =>{
    setshowfinished(!showfinished)
  }




  const handleedit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    settodo(t[0].todo)
    let newtodos = todos.filter(item => {
      return item.id !== id;
    })
    settodos(newtodos)
    savetoLS()
  }
  const handledelete = (e, id) => {
    let newtodos = todos.filter(item => {
      return item.id !== id;
    })
    const deltodo = todos.find(item => item.id === id);
    if (deltodo.isCompleted) {
      settodos(newtodos)
      savetoLS()
    }
    else {
      if (window.confirm("Are you sure you want to delete this task?")) {
        settodos(newtodos)
        savetoLS()
      }
      else {
        console.log("Cancelled!");
      }
    }
  }
  const handleaddtask = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    settodo("")
    savetoLS()
  }
  const handlechange = (e) => {
    settodo(e.target.value)
  }
  const handlecheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newtodos = [...todos];
    newtodos[index].isCompleted = !newtodos[index].isCompleted;
    settodos(newtodos)
    savetoLS()
  }


  return (
    <>
      <div
        className="back"
        style={{ backgroundImage: `url(${bg})` }}>
        <div style={{ height: '200vh' }}>
        </div>
      </div>

      <header className='text-[#eeb426] m-auto p-3 flex items-center justify-between container'>
        <div className='text-2xl'>
          <b>Thunder Breathing:</b> Task no Kokyū
        </div>
        <img src={logo} width={200} alt="" />
      </header>

      <div className="taskarea bg-[#f0b946] m-auto container p-3 rounded-3xl text-[#302118] h-[80vh]">
        <div className="addtask bg-[#fce3b5] gap-3 m-2 p-4 flex items-center justify-around rounded-2xl">
          <div className='w-[2%] text-xl flex items-center'>😴</div>
          <input onChange={handlechange} value={todo} type="text" className='w-full outline-0' placeholder='Add Task' />
          <button onClick={handleaddtask} disabled={todo.length<3} className='w-[15%] flex items-center bg-[#e5ac29] gap-3 p-2 rounded-2xl'><span class="material-symbols-outlined">add_task</span> Add Task</button>
        </div>

        <div className="showfinishedtodo m-2 p-4 flex items-center gap-3">
          <input onChange={togglefinished} checked={showfinished} type="checkbox" name="" id="" />
          <span className='text-sm'>Show Finished Tasks</span>
        </div>

        <div className="line bg-[#302118] h-0.5 mx-auto rounded-2xl w-[75vw]"></div>

        <div className="urtodos">
          <h1 className='text-xl m-2 my-0 p-4'>Your Tasks</h1>

          <div className="tasks rounded-2xl space-y-3 overflow-auto h-[53vh]">
            {todos.length === 0 && <div className='text-xs mx-11 p-1'>No Task to Display</div>}
            {todos.map(item => {
              return (!item.isCompleted || showfinished) && <div key={item.id} className="task bg-[#fce3b5] rounded-2xl m-2 p-4 flex gap-3 items-center">
                <input onChange={handlecheckbox} checked={item.isCompleted} type="checkbox" name={item.id} id="" />
                <div className={item.isCompleted ? "line-through w-full" : "w-full"}>{item.todo}</div>
                <button onClick={(e) => { handleedit(e, item.id) }} className='flex items-center bg-[#e5ac29] p-2 rounded-2xl'><span class="material-symbols-outlined">edit</span></button>
                <button onClick={(e) => { handledelete(e, item.id) }} className='flex items-center bg-[#e5ac29] p-2 rounded-2xl'><span class="material-symbols-outlined">delete</span></button>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
