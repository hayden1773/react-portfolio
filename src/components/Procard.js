import "./Procard.css";
import Projectcard from "./Projectcard"
import Projectdata from './Projectdata'
import React from 'react'



const Procard = () => {
  return <div className= "project-container">
      
      <div className="pro-container">
        {Projectdata.map((val, ind) => {
            return(
                <Projectcard 
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                />
            )
        } )}
      </div>
  </div>
  
};

export default Procard