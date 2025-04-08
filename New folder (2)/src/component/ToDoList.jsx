// import React, { useState } from 'react'

// const ToDoList = () => {
//     const [inputValue, setInputValue] =useState("")
//     const [todo, setTodo] = useState([])
//     const [filtered, setFiltered] = useState([])

//     const addTodo = ()=>{
//         if(inputValue){
//             const newId = todo.length+1
//             setTodo([...todo, { id: newId ,text: inputValue }])
//             setInputValue("")
//         }
//     }

//     const deleteTodo = (id)=>{
//         const deleteTodo = todo.filter( (todo)=> todo.id!== id)
//         const renderTodo = deleteTodo.map((elements, index)=>(
//             {...elements, id: index + 1 }

//         ))
//         setTodo(renderTodo)

//     }


//   return (
//     <>
//         <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />

//         <button onClick={addTodo}>add</button>

//         <input type="search" value={filtered} onChange={(e)}/>
//         <ul>
//             {todo.map( (task) => (
//                 <li>
//                      <span>{task.text} (id: {task.id})</span>
//                      <button onClick={()=>{deleteTodo(task.id)}}>delete</button>
//                 </li>
//             ))}
//         </ul>


//     </>
//   )
// }

// export default ToDoList



import React, { useState } from 'react'

const ToDoList = () => {

    const [inputValue, setInputValue] = useState("")
    const [todos, setTodos] = useState([])
    const [filtered, setFiltered] = useState("")

    const addTodo = ()=>{
        if(inputValue){
            const newId = todos.length + 1
            setTodos([...todos, { id: newId, text: inputValue} ])
            setInputValue("")
            // console.log(todos);
        }
    }

    const deleteTodo = (id)=>{
        const deleted =todos.filter((todo)=>todo.id !== id)
        const render = deleted.map((todo, index)=>(
            {...todo, id: index + 1}
        ))
        setTodos(render)        

    }

    const filteredTodo = todos.filter((todo)=>
    todo.text.toLowerCase().includes(filtered.toLowerCase()))



  return (
    <>
       <input type="text" placeholder='add task' value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
       <button onClick={addTodo}>Add</button>
       <br />
       <input type="search" placeholder='search' value={filtered} onChange={(e)=>setFiltered(e.target.value)}/>
   

       <ul>
         
     {filteredTodo.map((task)=>(
            <li> 
                <span>{task.id}) {task.text} </span>
                <button onClick={()=>deleteTodo(task.id)}>delete</button>
            </li>
        ) )}
     </ul>
     
       
    </>
  )
}

export default ToDoList























