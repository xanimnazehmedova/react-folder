import React from 'react'

const Input = ({inputValue, handleInput}) => {
  return (
    <div>
         <input
          onChange={(e) => handleInput(e.target.value)}
          type="text"
          placeholder="Search movie name"
          value={inputValue}
        />
    </div>
  )
}

export default Input