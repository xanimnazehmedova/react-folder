import React from 'react'


const WeatherData = ({data, city}) => {
    if(!data){
        return <p>loading..</p>
    }
   
  return (
    <div>
        <div>
            <h2>{city}</h2>
            <p>{data.FeelsLikeC}</p>
        </div>
    </div>
  )
}

export default WeatherData