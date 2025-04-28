import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import WeatherData from './WeatherData'




const WeatherProps = () => {
    const [data, setData] = useState(null)
    const [city, setCity] = useState("London")

    useEffect( ()=>{
        fetchData(`https://wttr.in/${city}?format=j1`)
    }, [city])

    const fetchData =  async (url)=>{
        try {
           const response = await fetch(url)
           const data = await response.json()
           setData(data.current_condition[0])

        } catch (error) {
           console.log(error);
        }
    }


  return (
    <div>

      <div>
      <SearchBar setCity={setCity} />
      <WeatherData city={city} data={data}/>
      </div>
    </div>
  )
}

export default WeatherProps