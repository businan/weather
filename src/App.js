import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CityCard from "./components/CityCard";

//action
import { getWeather } from "./actions/getWeather";

import "./App.css";

function App() {
    //set city
    const [city, setCity] = useState("");

    const weatherSelector = useSelector((state) => state.WeatherInfo);
    console.log(weatherSelector);
    console.log(weatherSelector.weatherinfolist);
    const dispatch = useDispatch();
    const getWeatherInfoAction = (city) => dispatch(getWeather(city));

    useEffect(() => {
        getWeatherInfoAction("antalya");
    },[]);

    const getWeatherInfo = (e) => {
        e.preventDefault();
        if (city === "") {
        } else {
            getWeatherInfoAction(city);
        }
    };

    return (
        <React.Fragment>
            <div className="App">
                <header>
                    <h1>Weather App</h1>
                </header>
            </div>

            <main>
                <form>
                    <div className="control">
                        <input
                            type="text"
                            name="name"
                            placeholder="City to check weather, Ex. Paris"
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <button type="submit" onClick={getWeatherInfo}>
                        Check Weather
                    </button>
                </form>
                <div>
                    {weatherSelector.weatherinfolist.map((city) => (
                        <CityCard key={city.id} {...city} />
                    ))}
                </div>
            </main>
        </React.Fragment>
    );
}

export default App;
