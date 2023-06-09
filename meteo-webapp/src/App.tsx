import React, { useEffect, useState } from "react";
import "./App.css";
import { Meteo } from "./models/meteo";
import { format } from "date-fns";
import CardMeteo from "./components/card-meteo";

const URL_METEO =
  "https://api.open-meteo.com/v1/forecast?latitude=40.3555887&longitude=18.1711145&current_weather=true&hourly=temperature_2m,precipitation";

function App() {
  const [meteo, setMeteo] = useState<Meteo>();

  const getMeteo = () => {
    fetch(URL_METEO)
      .then((res) => res.json())
      .then((result: Meteo) => {
        console.log("result", result);
        setMeteo(result);
      });
  };

  useEffect(() => {
    getMeteo();
  }, []);

  return (
    <div className="App">
      {/* <p>{JSON.stringify(meteo)}</p> */}
      {/* <h2>{meteo?.current_weather.temperature}</h2> */}
      {meteo && (
        <div>
          <h2>Meteo Palazzo Vernazza</h2>
          <small>
            lat. {meteo.latitude} long. {meteo.longitude}
          </small>
          <h2>{meteo.current_weather.temperature} °C</h2>
          {/* <h2>
            {new Date(meteo.current_weather.time).getDate() +
              " - " +
              (new Date(meteo.current_weather.time).getMonth() + 1) +
              " - " +
              new Date(meteo.current_weather.time).getFullYear()}
          </h2> */}
          <h2>{format(new Date(meteo.current_weather.time), "dd MM yyyy")}</h2>

          <div style={{ display: 'flex', flexDirection: 'row', overflowX: 'scroll' }}>
            {meteo.hourly.time.map((time, index) => (
              <CardMeteo
                orario={time}
                temperatura={meteo.hourly.temperature_2m[index]}
                temperatura_udm={meteo.hourly_units.temperature_2m}
                precipitazioni={meteo.hourly.precipitation[index]}
                precipitazioni_udm={meteo.hourly_units.precipitation}
              />
            ))}
          </div>

          {/* <table>
            <thead>
              <tr>
                <th>Orario</th>
                <th>Temperatura</th>
                <th>Precipitazioni (mm)</th>
              </tr>
            </thead>
            <tbody>
              {meteo.hourly.time.map((time, index) => (
                <tr>
                  <td>{format(new Date(time), 'dd MMM HH:mm')}</td>
                  <td>{meteo.hourly.temperature_2m[index]} {meteo.hourly_units.temperature_2m}</td>
                  <td>{meteo.hourly.precipitation[index]} {meteo.hourly_units.precipitation}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
          
        </div>
      )}
    </div>
  );
}

export default App;
