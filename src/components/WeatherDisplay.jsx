import styles from "./WeatherDisplay.module.css";
import { useState } from "react";

const WeatherDisplay = (props) => {
  const [report, setReport] = useState(false);
  const [location, setLocation] = useState("");
  const { data } = props;
  const { temperature, conditions } = data;

  const GetLocation = (e) => {
    setLocation(e.target.value);
  };

  const GetData = () => {
    setReport(!report);
  };

  return (
    <>
      <div className={styles.WeatherInput}>
        <input
          value={location}
          onChange={GetLocation}
          placeholder="Enter location"
        />
        <button onClick={GetData}>Get Weather report</button>
      </div>

      {report && (
        <div className={styles.WeatherOutput}>
          <p>
            Temparature at {location} is <span style={{ color: temperature > 20 ? "red" : "blue" }}>{temperature} </span>degrees.
            </p>
            <p>
            Weather conditions at {location} are  <span style={{ color: temperature > 20 ? "red" : "blue" }}>{conditions}</span>.
          </p>
        </div>
      )}
    </>
  );
};

export default WeatherDisplay;

