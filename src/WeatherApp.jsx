import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox.jsx";

import { useState } from "react";

export default function WeatherApp() {
    
    const [WeatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 305.48,
        humidity: 51,
        temp: 30.86,
        tempMax: 30.86,
        tempMin: 25.86,
        weather: "clear sky",
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    };

    return (
        <div style={{textAlign: "center"}}>
            <h3>Weather App </h3>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}/>
        </div>
    );
}