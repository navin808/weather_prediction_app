import React from "react";
import FmdGoodTwoToneIcon from '@mui/icons-material/FmdGoodTwoTone';
import ThunderstormTwoToneIcon from '@mui/icons-material/ThunderstormTwoTone';

const Header = (props) => {
  return (
    <div>
      <div
        className="align-center"
        style={{
          gap: "20px",
          fontSize: "50px",
          color:"white"
        }}
      >
        <ThunderstormTwoToneIcon style={{fontSize:"70px",marginleft:"-500px"}}/>
        
        <p><b>WEATHER PREDICTOR</b></p>
      </div>
      <br></br>
      <div
        className="align-center"
        style={{
          gap: "20px",
        }}
      >
        
        
        <input
          style={{width:"300px",height:"25px", borderRadius: "10px", padding: "5px", marginLeft:"40px", borderColor:"black" , backgroundColor:"#b3E8FF"}}
          placeholder="Get weather for your city"
          onKeyPress={(e) =>
            e.key === "Enter" && e.target.value !== ""
              ? props.getLocation(e)
              : null
          }
        ></input><FmdGoodTwoToneIcon style={{fontSize:"50px",marginleft:"-500px"}}/>
      </div>
      <p className="not-found">
        {props.errorLoading ? "Ops, something went wrong" : null}
      </p>
    </div>
  );
};

export default Header;