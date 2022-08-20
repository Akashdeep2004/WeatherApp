import React from 'react'
import './Weather.css'
import {NavLink} from 'react-router-dom'

const Weather = ({country,state, cityname, temperature, humidity, temp_feels,pressure,wind,valuepassed}) => {
  return (
    <div>
      <div className='container'>  
       
       <main className='main'>
       <h2 className='cityname'>{cityname} , {country} </h2>
           <div className='values'>
               <span>Tempertaure <p>{temperature}°C </p> </span>
               <span>Humidity<p> {humidity}% </p>  </span>
           </div>
           <div className='values'>
               <span>Wind Speed <p>{wind} km/h</p> </span>
               <span>Temp. Feel  <p> {temp_feels} °C </p> </span>
           </div>
           <div className='values'>
               <span>Pressure <p> {pressure} atm </p> </span>
               
           </div>
           
       </main>
   </div> 
    </div>
  )
}

export default Weather
