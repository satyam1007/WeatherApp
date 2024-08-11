import React, { useEffect, useState } from "react";
import Temp from "./components/Temp";
import Highlights from "./components/Highlights";
import { FaWind } from "react-icons/fa";
import { FaCloudMoonRain } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaThermometerHalf } from "react-icons/fa";

function App() {
  const [city, setCity] = useState("New Delhi");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiURL = `https://api.weatherapi.com/v1/current.json?key=9bd5b060b06e41fba1863741240408&q=${city}&aqi=no`;

    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  if (!weatherData) {
    return <div className="text-white text-2xl h-screen">Loading...</div>;
  }

  return (
    <div className="p-10 mt-5 mb-5 bg-gray-900 rounded-lg shadow-lg max-w-md mx-auto text-white">
      <>
        <Temp
          setCity={setCity}
          stats={{
            temp: weatherData.current.temp_c,
            condition: weatherData.current.condition.text,
            location: weatherData.location.name,
            precip: weatherData.current.precip_mm,
          }}
        />
      </>

      <div>
        <span className="block text-lg font-medium">Air Condition</span>
        <Highlights
          stats={{
            title: "Real Feel",
            icon: <FaThermometerHalf />,
            value: weatherData.current.feelslike_c,
            unit: "°",
          }}
        />
        <Highlights
          stats={{
            title: "Wind",
            icon: <FaWind />,
            value: weatherData.current.wind_kph,
            unit: "km/h",
          }}
        />
        <Highlights
          stats={{
            title: "Chance of rain",
            icon: <FaCloudMoonRain />,
            value: weatherData.current.precip_mm > 0 ? "Yes" : "No",
          }}
        />
        <Highlights
          stats={{
            title: "UV Index",
            icon: <FaSun />,
            value: weatherData.current.uv,
          }}
        />
        <Highlights
          stats={{
            title: "Humidity",
            icon: <WiHumidity />,
            value: weatherData.current.humidity,
            unit: "%",
          }}
        />
      </div>
    </div>
  );
}

export default App;
