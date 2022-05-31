import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Secondary from "../components/Secondary"
import Aboutcon from "../components/Aboutcon"

const About = () => {
  return (
    <div>
      <Navbar />
      <Secondary heading="About me"/>
      <Aboutcon/>
      <Footer />
    </div>
  )
}

export default About