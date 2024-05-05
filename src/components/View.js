import React from "react";
import videoBackground from "./images/6.mp4"; // Import the video file
import './view.css';
import { useNavigate } from "react-router-dom";
const View = () => {

    const navigate = useNavigate();
    const login = () => {
        navigate('/Login');
    }

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "25%",
          width: "50%",
          textAlign: "center",
          color: "#ffffff",
        }}
      >

        <h2>Welcome to Our Website</h2> 
       <br/><br/><br/><br/><br/><br/><br/><br/>
        <p>Please login or register to continue</p>
        <div style={{ display: "flex", justifyContent: "space-between"}}
        >
          <button onClick={login} style={{ color: "#ffffff", backgroundColor: "transparent", border: "2.5px solid #ffffff", padding: "10px 20px", cursor: "pointer" }}>Login</button>
          <button style={{ color: "#ffffff", backgroundColor: "transparent", border: "2.5px solid #ffffff", padding: "10px 20px", cursor: "pointer" }}>Register</button>
          </div>
      </div>
    </div>
  );
};

export default View;
