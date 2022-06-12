import React, { useState, useEffect } from "react";
import "./PublicTransport.css";
import axios from "axios";
const TRANSPORT_API_KEY = process.env.REACT_APP_TRANSPORT_API_KEY


export const PublicTransport = () => {
  const [departures, setDepartures] = useState([]);

  const [error, setError] = useState("");

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
  }, []);

  return (
    <div className="PublicTransport">
      <div className="trackPlace" style={{ display: "flex" }}>
        <div className="textTrack">
          <div>
            <p>Tunnel-Bana</p>
            {departures
              .filter((departure) =>  departure.code == 5)
              .map((departure, index) => {
                return (
                  <p key={index}>
                    {departure.line} towards {departure.direction} departs at
                    {departure.time.slice(0, -3)}
                  </p>
                );
              })}
          </div>
          <div>
            <p>Bus</p>
            {departures
              .filter((departure) =>  departure.code == 6)
              .map((departure, index) => {
                return (
                  <p key={index}>
                    {departure.line} towards {departure.direction} departs at
                    {departure.time.slice(0, -3)}
                  </p>
                );
              })}
          </div>
          <div>
            <p>Tram</p>
            {departures
              .filter((departure) =>  departure.code == 7)
              .map((departure, index) => {
                return (
                  <p key={index}>
                    {departure.line} towards {departure.direction} departs at
                    {departure.time.slice(0, -3)}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
      <div className="trackPlace" style={{ display: "flex" }}>
        <div className="textTrack"></div>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
