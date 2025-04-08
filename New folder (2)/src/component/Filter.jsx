// import React, { useEffect, useState } from 'react'
// import { use } from 'react'

// const Filter = () => {
//     const [data, setData] = useState([])
//     const [filtered, setFiltered] = useState([])
//     const [inputValue, setInputValue] = useState("")

//     useEffect(()=>{
//         const fetchData = async ()=>{
//         try {
//             const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//             const data = await response.json()
//             setData(data)
//             setFiltered(data)
//         }
//          catch (error) {
//             console.log(error);
            
//         }
//     }
//             fetchData()
//     },[])

//     useEffect(()=>{
//         if(inputValue){
//             const filtered = data.filter(post=>
//             post.title.toLowerCase().includes(inputValue.toLowerCase())
//             )
//             setFiltered(filtered)
//         }
//         else{
//             setFiltered(data)
//         }
//     }, [inputValue, data])
//   return (
//     <>
//     <h1>filter title</h1>
//     <input type="search" placeholder='search' value={inputValue} onChange={(e)=>{
//         setInputValue(e.target.value)
//     }}/>
//     <div>
//         {filtered.length > 0 ? (filtered.map(post =>(
//             <div key={post.id}> 
//                 <p>{post.title}</p>
//                 <p>{post.body}</p>
//             </div>
//         ))): (<p>not found</p>) }
//     </div>
//     </>
//   )
// }

// export default Filter


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useEffect, useState } from 'react'

// const Filter = () => {

//     const [data, setData]= useState([])
//     const [inputValue, setInputValue] = useState("")
//     useEffect(()=>{
//            const fetchData = async ()=>{
//            try {
//                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${inputValue}`)
//                const data = await response.json()
//                setData(data)
       
//            }
//             catch (error) {
//                console.log(error)        
//            }
//        }
//         if(inputValue)fetchData()
//         else setData([])
//        },[inputValue, data])
//   return (
//     <>
//       <input type="search" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
//       {data.map(post=>(
//          <div key={post.id}> 
//               <p>{post.title}</p>
//               <p>{post.body}</p>
//           </div>

//       ))}
//     </>
//   )
// }

// export default Filter


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from 'react'

const Filter = () => {

    const [data, setData] = useState([])
    const [inputValue, setInputValue] = useState("")
    
    useEffect(()=>{
    const fetchData = async ()=>{
        try {
            const response = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${inputValue}`)
            const data = await response.json()
            setData(data.data)
        } catch (error) {
         console.log(error);
        }
      }
         if(inputValue){
           fetchData()
      }else{
        setData([])
      }

    }, [inputValue])

  return (
    <>
    <input type="search" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
    {data.map(post=>(  
        <div>
            <p>{post.title}</p>
            <p>{post.artist_display}</p>
        </div>
        ))}

    </>
  )
}

export default Filter