import React, { useState } from 'react'

const Add = () => {
    const [sentence, setSentence] = useState("Xos geldiniz")
    const setting = ()=> {setSentence("sagol") }  

  return (
    <div>
    <p>{sentence}</p>
        <button onClick={setting}>deyis</button>
    </div>
  )
}

export default Add