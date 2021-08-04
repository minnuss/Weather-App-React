import React from 'react'
import './displayWeather.css'


export default function DisplayWeather(props) {

    // console.log(props)

    const { data } = props
    // IF DATA SOMEHOW HAS AN ERROR OF 404, DISPLAY ERROR MESSAGE
    if (data.cod === '404') {
        // resetCityInput()
        return <h1>{data.message}</h1>
    }

    // WEATHER ICON
    // https://openweathermap.org/weather-conditions
    const iconURL = `http://openweathermap.org/img/wn/` + data.weather[0].icon + '@4x.png'
    // console.log(iconURL)

    return (
        <div className="displayweather">
            <div className="maincard">
                <span className="cardtitle">
                    {data.name}, {data.sys.country}. Weather
                </span>
                <span className="cardsubtitle">
                    As of {new Date().toLocaleTimeString()}
                </span>
                <h1>
                    {data.main.temp.toFixed(1)}C
                    <sup>o</sup>
                </h1>
                <div className="central-box">
                    <span className="weather-main">
                        {data.weather[0].main}
                    </span>
                    <img src={iconURL} alt={data.weather[0].main + ' weather icon'} className="weather-icon" />
                    <span className="weather-description">
                        {data.weather[0].description}
                    </span>
                </div>
            </div>

            <div className="weather-details">
                <div className="weather-details-section">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <h4>High/Low: </h4>
                                </td>
                                <td>
                                    <span>
                                        {data.main.temp_max.toFixed(1)} / {data.main.temp_min.toFixed(1)} C <sup>o</sup>
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h4>Humidity: </h4>
                                </td>
                                <td>
                                    <span>
                                        {data.main.humidity}
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h4>Pressure: </h4>
                                </td>
                                <td>
                                    <span>
                                        {data.main.pressure} hPa
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h4>Visibility: </h4>
                                </td>
                                <td>
                                    <span>
                                        {data.visibility / 1000} Km
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="weather-details-section">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <h4>Wind: </h4>
                                </td>
                                <td>
                                    <span>
                                        {(data.wind.speed * 18 / 5).toFixed(2)} Km/hr
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h4>Wind Direction: </h4>
                                </td>
                                <td>
                                    <span>
                                        {data.wind.deg} <sup>o</sup>deg
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h4>Sunrise: </h4>
                                </td>
                                <td>
                                    <span>
                                        {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h4>Sunset: </h4>
                                </td>
                                <td>
                                    <span>
                                        {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
