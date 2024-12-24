import React, {useState, useEffect} from "react";
import './../styles/App.css';
function WeatherDisplay({temperature, conditions}) {
    return <div>
        <p>Temperature: <span style={{color: temperature > 20 ? 'red' : 'blue'}}>{temperature}</span></p>
        <p>Conditions: {conditions}</p>
    </div>
}
const App = () => {
  const [weatherState, setWeatherState] = useState({ temperature: 25, conditions: "Sunny" });
    
    useEffect(() => {
        const updatedWeatherState = weatherState;
        setWeatherState(updatedWeatherState);
    }, [])
    
    return <>
        <WeatherDisplay 
            temperature={weatherState.temperature} 
            conditions={weatherState.conditions} 
        />
    </>
}