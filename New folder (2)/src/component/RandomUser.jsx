import React, { useEffect, useState } from 'react'

const RandomUser = () => {
const [loading, setLoading] = useState(true)
const [users, setUsers]= useState(null)
const fetchUser = async ()=>{ 
setLoading(true)
try {
    const response = await fetch("https://randomuser.me/api/")
    const data = await response.json()
    setUsers(data.results[0])

} catch (error) {
    console.log(error);
} finally{
   setLoading(false);
}
} 
useEffect(()=>{fetchUser()}, [])
  return (
    <>
        <h2>Random User</h2>
     { loading ? (<p>loading...</p>)
     : users ? (<div>
        <img src={users.picture.medium}></img>
        <p>name: {users.name.first}</p>
        <p>city: {users.location.city}</p>
        <p>email:{users.email}</p>
        <button onClick={fetchUser}>random</button>
     </div>) : (<p>failed fetch</p>)}
    </>
  )
}

export default RandomUser