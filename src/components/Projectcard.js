import "./Procard.css";
import React from 'react';
import { NavLink } from "react-router-dom";
import ProjectData from "./Projectdata";



const Pro = (props) => {
  return <div className= "project-container">
      <h1 className="pro-heading"></h1>
      <div className="pro-container">
          <div className="pro-card">
              <img src={props.imgsrc} alt="Image of website that compiles movies with drinks" />
              <h2 className="pro-title">{props.title}</h2>
              <div className="pro-details">{props.text}</div>
              <div className="pro-btns">
                  <NavLink to={props.view}  className="btn">View</NavLink>
                  <a href="https://github.com/Jnbanks/Project1-Movie-Beverage" className="btn">GITHUB</a>
              </div>
          </div>
      </div>
  </div>
  
};

export default Pro