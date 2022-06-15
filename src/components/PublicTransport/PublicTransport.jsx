import React, { useState, useEffect } from "react";
import "./PublicTransport.css";
import axios from "axios";
const TRANSPORT_API_KEY = process.env.REACT_APP_TRANSPORT_API_KEY


export const PublicTransport = () => {
  const [departures, setDepartures] = useState([]);
  const [error, setError] = useState("");
  const [reload, setReload] = useState(true);

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await axios.get(
          `https://api.resrobot.se/v2.1/departureBoard?id=740004046&duration=10&format=json&accessId=${TRANSPORT_API_KEY}`
        );
        const dep = response.data.Departure.map((train) => ({
          line:train.Product[0].line,
          stop: train.stop,
          direction: train.direction.substring(0, train.direction.indexOf("(")),
          time: train.time,
          code: train.Product[0].catCode,
        }));
        if (dep) {
          setDepartures(dep);
        }
      } catch (err) {
        if (err.message) setError("Something went wrong!!");
      }
    };
    fetchTime();
  }, [reload]);


  useEffect(() =>{
    let interval = setInterval(() => setReload(!reload), (1000*60*10))
    return () => clearInterval(interval)
})

  return (
    <div className="PublicTransport">
      <h3>Departures from Liljeholmen</h3>
        <div className="container">
          <div className="ind-container">
            <h2 className="transport-mode">Tunnel-Bana</h2>
            {departures
              .filter((departure) =>  departure.code == 5)
              .map((departure, index) => {
                return (
                  <p key={index}>
                    {departure.line} - {departure.direction.substring(0,departure.direction.indexOf('T-bana'))} -
                    {departure.time.slice(0, -3)}
                  </p>
                );
              })}
          </div>
          <div className="ind-container">
            <h2 className="transport-mode">Bus</h2>
            {departures
              .filter((departure) =>  departure.code == 6)
              .map((departure, index) => {
                return (
                  <p key={index}>
                    {departure.line} - {departure.direction} -
                    {departure.time.slice(0, -3)}
                  </p>
                );
              })}
          </div>
          <div className="ind-container">
          <h2 className="transport-mode">Tram</h2>
            {departures
              .filter((departure) =>  departure.code == 7)
              .map((departure, index) => {
                return (
                  <p key={index}>
                    {departure.line} - {departure.direction} -
                    {departure.time.slice(0, -3)}
                  </p>
                );
              })}
          </div>
        </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
