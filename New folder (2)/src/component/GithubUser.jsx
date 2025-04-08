import React, { useState } from 'react'

const GithubUser = () => {
    const [inputValue, setInputValue] = useState("")
    const [data, setData] = useState([])
    const [total, setTotal] = useState(0)

    const fetchData = async ()=>{
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${inputValue}`)
            const data = await response.json()
            console.log(data);
            
            setData(data.items)
            setTotal(data.total_count)
        } catch (error) {
            console.log(error);
        } 
   
    }

  return (
    <>
    <input type="search" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
    <button onClick={fetchData}>get user data</button>
      <div>
        {
          total && (<p> {total}</p>)
        }
      {data.map((user) =>(
        <div>
            <p>{user.id}</p>
            <p>{user.url}</p>
            <p> user login: {user.login}</p>
          
        </div>

    ) )}
      </div>

    </>
  )
}

export default GithubUser