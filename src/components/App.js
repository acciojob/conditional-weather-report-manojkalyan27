import React from "react";
import WeatherDisplay from "./Assignments/weatherReport/WeatherDisplay.jsx";

const App = () => {
  return (
    <div>
      <WeatherDisplay
        data={{
          temperature: 15,
          conditions: "Sunny",
        }}
      />
    </div>
  );
};

export default App;
