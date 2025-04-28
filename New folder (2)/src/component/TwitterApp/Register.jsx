import React, { useState } from 'react'
import apiInstance from './Instance'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [formData, setFormData] = useState({})
    const [message, setMessage] = useState("")
    const navigate= useNavigate()
    
    const  handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
        
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(formData);
            const response = await apiInstance.post('/register', formData)
            const userId = response?.data?.data?.userId

            if(userId){
                return  navigate(`/register/approve/${userId}`)
               
            }
        
        setMessage("success")
        } catch (error) {
            console.log(error);
        }
    }




  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
        <div>
        <h1>Register</h1>
        <input value={formData.name} onChange={handleChange} name='name' type="text" placeholder='name'/>
        <input value={formData.username} onChange={handleChange} name='username'type="text" placeholder='username'/>
        <input value={formData.email} onChange={handleChange} name='email'type="email" placeholder='email'/>
        <input value={formData.password} onChange={handleChange} name='password'type="password" placeholder='password'/>
        </div>
        <button type='submit'>submit</button>
        </form>
        {message && <p>{message}</p>}


    </div>
  )
}

export default Register