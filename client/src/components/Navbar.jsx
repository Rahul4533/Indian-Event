import React from "react";
import "./navbar.css";
import img from "../assects/image/indian.JPG";
import { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { Bhojpuri, BollyWood, Bengali, Punjabi,videos } from "../Data/data.js";
import Actor from "./Actor.jsx";
const Logo = () => {
  const [actor, setActor] = useState();
  const [video,setvideo]=useState(videos);
  console.log(actor);
  
  const handleSelect = (e) => {
    if (e === "Bhojpuri") {
      setActor(Bhojpuri);
    } else if (e === "Bollywood") {
      setActor(BollyWood);
    } else if (e === "Bengali") {
      setActor(Bengali);
    } else {
      setActor(Punjabi);
      
    }
  };
    
 

  return (
    <>
      <div className="logo">
        <img src={img} alt="logo" />

        <ul className="links">
          <NavDropdown
            className="back"
            title={
              <button
                className="btn btn-primary align-content-center back"
                style={{ borderRadius: "15px", background: "" }}
              >
                Book Now
              </button>
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item
              href="#"
              onClick={() => handleSelect("Bollywood")}
            >
              {
                <button className="button " style={{ fontSize: "1rem" }}>
                  {" "}
                  Bollywood{" "}
                </button>
              }
            </NavDropdown.Item>
            <NavDropdown.Item href="#" onClick={() => handleSelect("Bhojpuri")}>
              {<button className="button">Bhojpuri</button>}
            </NavDropdown.Item>
            <NavDropdown.Item href="#" onClick={() => handleSelect("Bengali")}>
              {<button className="button">Bengali</button>}
            </NavDropdown.Item>
            <NavDropdown.Item href="#" onClick={() => handleSelect("Punjabi")}>
              {<button className="button">Punjabi</button>}
            </NavDropdown.Item>
            {/* add more options here */}
          </NavDropdown>
           <button className="btn btn-btn-primary  rounded-1">Home</button>
           <button className="fs-6 w-auto h-auto">Contact Us</button>
           <button className="btn btn-btn-primary  rounded-1">Home</button>
        </ul>
      </div>
      <Actor data={actor}  video={video}/>
    </>
  );
};

export default Logo;
