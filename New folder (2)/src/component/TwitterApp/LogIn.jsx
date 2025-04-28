import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import apiInstance from './Instance'

const LogIn = () => {

    const [loginData, setLoginData] = useState({})
    const navigate = useNavigate()

    const handleChange = (e)=>{
        setLoginData({
            ...loginData, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e)=>{

        try {
            e.preventDefault()
           const data = await apiInstance.post(`/login`, loginData)
            const token = data?.data?.data?.token
            console.log(token);
             
            localStorage.setItem("token", token)
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    
  return (
    <div>
         <form action="" onSubmit={handleSubmit}>

         <input 
         onChange={handleChange} 
         value={loginData.email} 
         name='email' type="email" 
         placeholder='enter email'/>

         <input 
         onChange={handleChange} 
         value={loginData.password} 
         name='password' type="password" 
         placeholder='enter password' />

         <button type='submit'>login</button>

         </form>
    </div>
  )
}

export default LogIn