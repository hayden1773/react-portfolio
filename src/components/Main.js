import React from "react"
import "./Main.css"
import mainBack from "../assets/mainback.jpg"
import { Link } from "react-router-dom";

const Main = () => {
    return <div className="main">
        <div className="anchor">
        <img className="main-image" src={mainBack} alt="Star wars space"/>
        </div>
        <div className="content">
            <p>Welcome to my React Portfolio</p>
            <h1>Full-stack Developer</h1>
        
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
        </div>
    </div>;
};

export default Main;