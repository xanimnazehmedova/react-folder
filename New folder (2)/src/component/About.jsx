import React, { useState } from 'react'

const About = () => {
    const [inputValue, setInputValue] = useState("")
    const [toDos, setToDos] = useState([])
    const addTask = ()=>{
        setToDos([...toDos, inputValue])
        setInputValue("")
    }


  return (
    <div>
        <h1>To-Do list</h1>
        <input type="text" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
        <button onClick={addTask}>add task</button>
        <div>
            {toDos.map((toDo) =>(
               <ul>
                 <li>{toDo}</li>
               </ul>
            ))}
        </div>


    </div>
  )
}

export default About