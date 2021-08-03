import React, { useState, useEffect } from 'react'
import './weather.css'
import DisplayWeather from './DisplayWeather'

export default function Weather() {

    const APIKEY = '&appid=a565e52fcc30456984fa9b7447b89b23'
    // 
    const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q='

    // STORE THE INPUT VALUE
    const [city, setCity] = useState('Belgrade')
    // STORE THE WEATHER DATA
    const [weather, setWeather] = useState('')

    // SET DEFAULT CITY - it's got to be a better way to do this.
    useEffect(() => {
        const inputCityName = document.querySelector('#city')
        const inputButton = document.querySelector('.getweather')
        // console.log(inputCityName)
        // console.log(inputButton)
        inputCityName.value = 'Belgrade'
        inputButton.click()
        inputCityName.value = ''
    }, [])

    // SET THE INPUT VALUE TO CITY STATE
    function handleCityChange(e) {
        setCity(e.target.value)
    }

    // GET THE WEATHER DATA FOR ENTERED CITY
    async function weatherData(e) {
        e.preventDefault()

        if (city === '') alert('Please enter City name')
        // https://openweathermap.org/current#name
        const res = await fetch(weatherURL + city + '&units=metric' + APIKEY)
        const data = await res.json()

        setWeather(data)

        // CLEAR INPUT AUTOMATICALLY WHEN DATA IS FETCHED
        setTimeout(() => {
            const inputCityName = document.querySelector('#city')
            inputCityName.value = ''
        }, 1000);
    }

    // console.log(weather)
    // console.log(weather.cod)

    // RESET ALL IF CITY NOT FOUND
    if (weather.cod === '404') {
        const inputCityName = document.querySelector('#city')
        // console.log(inputCityName)
        inputCityName.value = ''

        setTimeout(() => {
            setCity('')
            setWeather('')
        }, 1500)

        return (
            <div className="weather">
                <h1 className="main">Try again</h1>
                <br />

                <form action="" >
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        onChange={handleCityChange}
                    />
                    <button className="getweather" onClick={weatherData}>Submit</button>
                </form>
                {/* ERROR MESSAGE */}
                <h1>{weather.message}</h1>
            </div>
        )
    }

    return (
        <div className="weather">
            <span className="main">Weather Today</span>
            <br />

            <form action="" >
                <label htmlFor="city">City</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    onChange={handleCityChange}
                />
                <button className="getweather" onClick={weatherData}>Submit</button>
            </form>
            {/* IF DATA EXISTS, SEND DATA TO DISPLAYWEATHER COMPONENT */}
            {weather && <DisplayWeather data={weather} />}
        </div>
    )


}



