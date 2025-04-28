import React, { useState } from 'react'

const Contact = () => {
    const users = [
        {id: 1, name: 'xanimnaz', age: 21, email: 'xanimnaz@gmail.com'},
        {id: 2, name: 'ulviyye', age: 21, email: 'ulviyye@gmail.com'},
        {id: 3, name: 'aysu', age: 21, email: 'aysu@gmail.com'}
    ]

    const [user, setUser] = useState(null)
const getRandomUser = ()=>{
    const random = Math.floor(Math.random() * users.length)
    setUser(users[random])
}



  return (
    <div>
        <h1>get random user</h1>
        <button onClick={getRandomUser}>get user</button>
      <div>
      {user && (
           <div>
              <h4>{user.name}</h4>
              <p>{user.age}</p>
              <p>{user.email}</p>
           </div>
      )
        
        }
      </div>
       
    </div>
  )
}

export default Contact