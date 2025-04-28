import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import apiInstance from './Instance'

const RegisterApprove = () => {
    const {id} = useParams()
    const [values, setValues] = useState({})
    const navigate = useNavigate()

    const changeValue = (e)=>{
     setValues({
         ...values, [e.target.name] : e.target.value
     })
     console.log(values);
     
    }


    const ApproveFunc = async (e)=>{
        try {
            e.preventDefault()
            await apiInstance.post(`register/approve/${id}`, values)
            navigate('/login')
            
        } catch (error) {
            console.log(error);
            
            
        }
    }




  return (
    <div>
       <form action="" onSubmit={ApproveFunc}>
       <input type="number" placeholder='enter code' name='code' value={values.code || ""} onChange={changeValue}  />
       <button >Approve</button>
       </form>

    </div>
  )
}

export default RegisterApprove