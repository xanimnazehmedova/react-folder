import React, { useEffect, useState } from 'react'

const UserList = () => {
    const [users, setUsers]= useState([])
    const [loading, setLoading] = useState(true)
    
    const fetchUser = async ()=>{
        setLoading(true)
    try {
       const response = await fetch("https://jsonplaceholder.typicode.com/users")
       const data = await response.json()
        setUsers(data)
    } catch (error) {
        console.log(error);
    }finally{
       setLoading(false)
        
    }

}
useEffect(()=>{fetchUser()},[])
  return (
    <>
    <h2>users list</h2>
     { loading ?( <p>loadingg...</p>) : (<ul>{users.map(user=>(
        <li>{user.name}</li>
    ))}</ul>)  }

    </>
  )
}

export default UserList