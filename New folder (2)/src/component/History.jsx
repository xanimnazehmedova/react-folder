import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Todayshistory from './Todayshistory'

const History = () => {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate("/todayshistory")
    }
  return (

    <div>
        <div>
            <h2>see what happened</h2>
            <button onClick={handleClick}>get</button>
        </div>
        <Routes>
            <Route path='/'/>
            <Route path='/todayshistory' element={<Todayshistory/>}/>
            <Route path='/*' element={<div>not found</div>}/>
        </Routes>

    </div>
  )
}

export default History