import React, { useState } from 'react'

const Home = () => {
    const [count, setCount] = useState(0)
    const Plus = ()=>{
        setCount(count + 1)
     }
    const Minus = ()=>{
        setCount(count - 1)
    }



  return (
    <div>
        <h1>Counter</h1>
        <button onClick={Plus}>artir</button>
        {count}
        <button onClick={Minus}>azalt</button>
    </div>
  )
}

export default Home