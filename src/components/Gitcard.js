import "./Gitcard.css";
import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Gitcard = () => {
  return <div className="githubclass">
      <div className="card-container">
          <div className="card">
              <h3>Team Profile Generator</h3>
              <span className="bar"></span>
              <p> This allows the user to view and add team members to their selected category and display on an html site</p>
              <span className="bar"></span>
              <p> Using JEST</p>
              <span className="bar"></span>
              <p> Understanding OOP</p>
            <a href="https://github.com/hayden1773/team-pro-gen"  className="btn">View REPO</a>
            </div>
            <div className="card">
              <h3>Password Generator</h3>
              <span className="bar"></span>
              <p> An application that enables employees to generate random passwords based on criteria that they’ve selected.</p>
              <span className="bar"></span>
              <p> HTML AND CSS</p>
              <a href="https://github.com/hayden1773/Javapass"  className="btn"> View REPO</a>
            </div>
            <div className="card">
              <h3>Ecommerce Back-end</h3>
              <span className="bar"></span>
              <p>The back-end for an e-commerce site </p>
              <span className="bar"></span>
              <p> Configuring</p>
              <span className="bar"></span>
              <p> Express.js API to use Sequelize to interact with a MySQL database</p>
            <a href="https://github.com/hayden1773/Ecom-back-end"  className="btn">View REPO</a>
            </div>
      </div>
  </div>
 
}

export default Gitcard