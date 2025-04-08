import React, { useEffect, useState } from 'react'

const Weather = () => {
   const [data, setData]= useState(null)
   const[loading, setLoading] = useState(false)
   const [inputValue, setInputValue] = useState("")

    const fetchData= async ()=>{
        if(!inputValue) {
            console.log("input bosdur") 
            return 
        }
        setLoading(true)
        try {
            const response = await fetch(`https://wttr.in/${inputValue}?format=j1`)
            const data= await response.json()
            setData(data)
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false)
        }
    }
  return (
    <>
<input type="search" placeholder='search' value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
<button onClick={fetchData}>get weather</button>
{loading ? (<p>loading...</p>) : data && (
    <div> 
        <h1>{data.current_condition[0].FeelsLikeC}</h1>
        <p>{data.current_condition[0].weatherDesc[0].value}</p>
        <p>{data.nearest_area[0].areaName[0].value}</p>
        <p>{data.request[0].type}</p>
    </div>
)}
    </>
  )
}

export default Weather