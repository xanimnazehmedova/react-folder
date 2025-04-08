import React, { useState } from 'react'

const Visbile = () => {

    const [visible, setVisible] = useState(false)
  return (
    <div>
        {visible && <p>salam</p> }
        <button onClick={()=>setVisible(!visible)}> goster/gizlet</button>
    </div>
  )
}

export default Visbile