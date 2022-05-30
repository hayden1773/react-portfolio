import "./Navbar.css"

import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const[drop, setDrop] = useState(false);
    const handleDrop = () => setDrop(!drop);

    const[color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >=100 ){
            setColor(true);

        }else {
            setColor(false)
        }
    };

    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1>Hayden Kiltoff</h1>
            </Link>
            <ul className={drop ? "nav-menu active" : "nav-menu"}>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/project">Projects</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleDrop}>
                {drop ? (<FaTimes size={20} style={{color: "white"}} />) : (<FaBars size={20} style={{color: "white"}} />)}
              
                
            </div>
        </div>
    )
}

export default Navbar