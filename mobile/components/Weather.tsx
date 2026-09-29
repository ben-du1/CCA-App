import React from "react";
// import { fetchWeatherApi } from 'openmeteo';
import { useEffect, useState } from "react";
import { Text } from "react-native";

const Weather = () => {
  const [Temp, setTemp] = useState(0);

  const getTemp = async () => {
    try {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=32.9593&longitude=-117.1887&current=temperature_2m&temperature_unit=fahrenheit"
      );
      const json = await response.json();
      setTemp(json.current.temperature_2m);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTemp();
  }, []);

  return <Text>{Temp.toFixed(0)}°</Text>;
};

export default Weather;

//see https://open-meteo.com/

// async function fetchWeatherData(url: string, params: any): Promise<any> {

//     const responses = await fetchWeatherApi(url, params);

//     const response = responses[0];

//     const current = response.current()!;

//     return current.variables(0)!.value();
//   }

// export class Weather extends React.Component {

// temperature = -1;

// render()
// {
//     const params = {
//         "latitude": 32.9593,
//         "longitude": -117.1887,
//         "current": "temperature_2m",
//         "timezone": "GMT",
//         "temperature_unit": "fahrenheit"
//     };
//     const url = "https://api.open-meteo.com/v1/forecast";

//     //TODO: fix this
//     if(this.temperature !== -1)
//         return (<Text>{(this.temperature).toFixed(0)}°</Text>);

//     fetchWeatherData(url, params).then((tmp) => {

//         this.temperature = tmp;
//     });

//     return (<Text>{((this.temperature) > 0) ?  this.temperature.toFixed(0) : ''}°</Text>);
// }

// }
