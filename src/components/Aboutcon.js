import "./Aboutcon.css";
import React from 'react'
import {Link} from "react-router-dom"
import Note1 from "../assets/note-taker.jpg"
import Readme from "../assets/readme-gen.jpg"


const Aboutcon = () => {
  return <div className="about">
      <div className="left">
          <h1>Who Am I?</h1>
          <p>I am a Full-Stack Developer out of the Seattle Area. Since the end of 2021 i have dedicated all my time and effort into learning and full understanding the dynamic industry that is coding through UW Bootcamp. I have been in a few industries in my life and none compare to this arena. Utilizing my mind, problem solving coding solutions and fixing bugs have greatly prepared me for life in this field of work. While I don't know and will not know everything there is to this industry, i can honestly say i truly enjoy the process of learning and understanding every component that goes into it. In my free time i love to play with my two dogs and travel with my wonderful fiance.</p>
          <Link to="/contact">
              <button className="btn">Contact Me</button>
          </Link>
      </div>
      <div className="right">
          <div className="img-container">
              <div className="img-stack top">

                  <img src={Note1}
                  className="img" alt="Note taker project"/>
              </div>
              <div className="img-stack bottom">
                  <img src={Readme}
                  className="img" alt="Read me project"/>
              </div>
          </div>
      </div>
  </div>
  
};

export default Aboutcon