import React, { useState } from 'react'
import clear_icons from "../Assetes/clear.png";
import cloud_icons from "../Assetes/cloud.png";
import drizzle_icons from "../Assetes/drizzle.png";
import humidity_icons from "../Assetes/humidity.png";
import rain_icons from "../Assetes/rain.png";
import search_icons from "../Assetes/search.png";
import snow_icons from "../Assetes/snow.png";
import wind_icons from "../Assetes/wind.png";
import "./WeatherApp.css"

const WeatherApp = () => {
    let Api_Key = "c050e1b54962ff9288ff6940230079d3";
    const [wicon, setWicon] = useState(cloud_icons)

    const search = async () => {

        const element = document.getElementsByClassName("city__input");
        if (element[0].value === "") {
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${Api_Key}`;
        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("Humidity__percent");
        const wind = document.getElementsByClassName("Wind__rate");
        const temprature = document.getElementsByClassName("Weather__temp");
        const location = document.getElementsByClassName("Weather__location")

        humidity[0].innerHTML = data.main.humidity;
        wind[0].innerHTML = data.wind.speed;
        temprature[0].innerHTML = data.main.temp;
        location[0].innerHTML = data.name;
        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
            setWicon(clear_icons);
        } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {

            setWicon(cloud_icons);
        }
        else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {

            setWicon(drizzle_icons);
        }
        else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {

            setWicon(drizzle_icons);
        }
        else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {

            setWicon(rain_icons);
        }
        else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {

            setWicon(rain_icons);
        }
        else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {

            setWicon(snow_icons);
        }
        else {
            setWicon(clear_icons);
        }
    }

    return (



        <div className='container'>
            <div className='Top__bar'>
                <input type='text' className='city__input' placeholder='search' />
                <div className='search__icons' onClick={() => { search() }}>
                    <img src={search_icons} alt='' />
                </div>
            </div>
            <div className='Weather__image'>

                <img src={wicon} alt='' />

            </div>
            <div className='Weather__temp'>24°C</div>
            <div className='Weather__location'>TamilNadu</div>
            <div className='data__container'>
                <div className='element'>
                    <img src={humidity_icons} alt='' className='icons' />
                    <div className='data'>
                        <div className='Humidity__percent'>64%</div>
                        <div className='text'>Humidity</div>
                    </div>
                </div>
                <div className='element'>
                    <img src={wind_icons} alt='' className='icons' />
                    <div className='data'>
                        <div className='Wind__rate'>18Km/hr</div>
                        <div className='text'>Windspeed</div>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default WeatherApp
