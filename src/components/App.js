import React from "react";
import WeatherDisplay from "./WeatherDisplay.jsx";

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
