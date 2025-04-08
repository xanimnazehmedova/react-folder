import React, { useState } from 'react'

const GuessNum = () => {

    const [inputValue, setInputValue] = useState("")
    const [num] = useState(
         Math.floor(Math.random() * 100 ) +1
    )
    const [message, setMessage] = useState("Guess the number between 1 and 100!")
    const guess = ()=>{
    if(!inputValue || inputValue<1 || inputValue>100 ){
    setMessage("invalid number!")
    return
    }

        if(inputValue<num){
            setMessage("artir!")
        } else if(num<inputValue){
            setMessage("azalt")
        }else {
            setMessage("Win!!")
        }
    }
  return (
    <>
    <h1>
        Guess
    </h1>
    <p>
        {message}
    </p>
<input value={inputValue} type="number" onChange={(e)=> setInputValue(e.target.value)} />
<button onClick={guess}> guess</button>
    </>
  )
}

export default GuessNum