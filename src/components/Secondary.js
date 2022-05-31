import "./Secondary.css"

import React, { Component } from 'react'

class Secondary extends Component {
    render(){
        return (
            <div className="second-img">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
          );

    }

}

export default Secondary