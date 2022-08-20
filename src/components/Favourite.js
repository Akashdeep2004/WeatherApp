import React, { useState } from 'react'
import Weather from './Weather';
import {NavLink} from 'react-router-dom'
import './Favourite.css'

const Favourite = () => {

    const fetch = JSON.parse(localStorage.getItem("items"))
  
    
  return (
      <div className='container2'>
        <h2 className='header'>Weather App &#127749;</h2>
        <div id='search-button2'>
          <NavLink id='search' to='/search'>
           Add City
          </NavLink>
        </div>

        <div className='favourite'>
        <Weather 
          country={fetch?.sys?.country}
          cityname={fetch?.name} 
          temperature={parseInt(fetch?.main?.temp) - 273}
          humidity={fetch?.main?.humidity}
          wind={fetch?.wind?.speed} 
          temp_feels={parseInt(fetch?.main?.feels_like) - 273}
          pressure={(fetch?.main?.pressure) / 1000}
        
        />
      </div>      
</div>
  )
}

export default Favourite
