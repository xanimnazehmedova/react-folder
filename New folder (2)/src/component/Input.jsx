import React, { useState } from 'react'

const Input = () => {
    const [text, setText]= useState(" ")
  return (
    <div>
        <input type="text" onChange={(e)=>setText(e.target.value)}/>
        <p>yazi: {text}</p>
    </div>
  )
}

export default Input