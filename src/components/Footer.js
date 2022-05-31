import "./Footer.css"
import React from 'react'
import { FaGithubSquare, FaLinkedin, FaFilePdf } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="github">
                        <a href="https://github.com/hayden1773"><FaGithubSquare size={60} style={{ color: "whitesmoke", marginRight: "2rem" }} /></a>
                        </div>
                    <div className="linkedIn">
                       <a href="https://www.linkedin.com/in/hayden-kiltoff-997b4623b/"><FaLinkedin size={60} style={{ color: "whitesmoke", marginRight: "2rem" }} /></a>
                        </div>
                    <div className="resume">
                        <a href="https://docs.google.com/document/d/1xtNp4vPpL9j4b3hkEs8Gma9f4n7i3LF_AgZVOT8NyuI/edit?usp=sharing"><FaFilePdf size={60} style={{ color: "whitesmoke", marginRight: "2rem" }} /></a>
                        </div>
                </div>
                <div className="right">
                    <h4>Thank you!</h4>
                    <p>I appriciate you taking the time to view my React Portfolio. I have gained so much knowledge throughout by UW Bootcamp experience and with all the information ive digested, I look forward to continuing my education. Please use the contact form to reach out if you have any questions. I hope you have a wonderful day</p>
                </div>

            </div>
        </div>
    )
}

export default Footer