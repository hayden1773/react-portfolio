import "./Footer.css"
import React from 'react'
import { FaGithubSquare, FaLinkedin, FaFilePdf } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="github"><FaGithubSquare size={20} style={{color: "whitesmoke", marginRight: "2rem"}} />
                    <div>
                        <p>Check out my Github!</p>
                    </div>
                    </div>
                    <div className="linkedIn">
                        <h4><FaLinkedin size={20} style={{color: "whitesmoke", marginRight: "2rem"}} /></h4>
                    <p>See my LinkedIn!</p>
                    </div>
                    <div className="resume">
                        <h4><FaFilePdf size={20} style={{color: "whitesmoke", marginRight: "2rem"}} /></h4>
                    <p>See my Resume here</p>
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