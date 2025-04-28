import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Todayshistory = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const axiosData = async ()=>{
        setLoading(true)
        try {
            const response = await axios.get("https://history.muffinlabs.com/date")
            
            setData(response.data.data)
            
            
            
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{axiosData()}, [])

    if(loading){
       return <p>loading...</p>
    }
    if(!data){
        return <p>asdasdasd</p>
    }

    const renderData = (item)=>(        
        <div>  
          <ul>
          {item.map((item, index) =>(
              <li key={index}>
                <strong>{item.year}:</strong>{item.text}
              </li>
            ))}
          </ul>
        </div>
    )


  return (
    <div>
        <h1>
            todays calendar :
        </h1>
        {  renderData( data.Events)  }
        {/* {  renderData("Births", data.Births)  } */}
        {/* {  renderData("Deaths", data.Deaths)  } */}

    </div>
  )
}

export default Todayshistory