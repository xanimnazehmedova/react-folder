import React, { useState } from 'react'

const count = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=> setCount(count - 1) }>azalt</button>
        <button onClick={()=> setCount(count + 1 )}>artir</button>
    </div>
  )
}

export default count