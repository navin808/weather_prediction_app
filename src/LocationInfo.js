import React, { useEffect, useState } from "react";
import SevereColdTwoToneIcon from '@mui/icons-material/SevereColdTwoTone';
import TsunamiTwoToneIcon from '@mui/icons-material/TsunamiTwoTone';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import WbTwilightTwoToneIcon from '@mui/icons-material/WbTwilightTwoTone';

const LocationInfo = (props) => {
  const [sunSetRise, setSunSetRise] = useState([]);

  useEffect(
    () =>
      convertFromEcho(props.location.sys.sunrise, props.location.sys.sunset),
    [props.location]
  );

  const getDegreeFormat = () => (props.degreeFormat ? "°F" : "°C");

  const convertToFarenheits = (v) => Math.round((v * 9) / 5) + 32;

  const convertFromEcho = (rise, set) => {
    setSunSetRise([
      new Date(rise * 1000).toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
      }),
      new Date(set * 1000).toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
      }),
    ]);
  };

  return (
    <div className="location-info">
      <div
        className="align-center"
        style={{
          gap: "20px",
          fontSize: "40px",
          margin: "0px",
        }}
      >
        <p style={{ margin: 0 }}>
          {props.location.name}, {props.location.sys.country}
        </p>
       
      </div>
      <div>
        <p
          className="align-center"
          style={{
            fontSize: "50px",
            color:"#fff"
          }}
        >
          {props.degreeFormat
            ? convertToFarenheits(Math.round(props.location.main.temp))
            : Math.round(props.location.main.temp)}
          {props.degreeFormat ? "°F" : "°C"}

         
        </p>
        <p style={{
            
            color:"black", fontSize:"20px"
          }}>
         <SevereColdTwoToneIcon  style={{fontSize:"30px"}}/> Feels like{" "}
          {props.degreeFormat
            ? convertToFarenheits(Math.round(props.location.main.feels_like))
            : Math.round(props.location.main.feels_like)}
          {getDegreeFormat()}&nbsp; |  {props.location.weather[0].description} |&nbsp;
          <TsunamiTwoToneIcon  style={{fontSize:"30px"}}/> Humidity: {props.location.main.humidity}%
        </p>
        <p style={{
            color:"black", fontSize:"20px"
          }}>
          <WbSunnyTwoToneIcon  style={{fontSize:"30px"}}/> Sunrise: {sunSetRise[0]}&nbsp; &nbsp;| &nbsp;  <WbTwilightTwoToneIcon  style={{fontSize:"30px"}}/> Sunset: {sunSetRise[1]}
        </p>
        <p></p>
        <br></br>
      </div>
    </div>
  );
};

export default LocationInfo;