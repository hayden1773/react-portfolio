import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Secondary from '../components/Secondary';
import Gitcard from '../components/Gitcard';
import Procard from '../components/Procard'

const Project = () => {
  return (
    <div>
      <Navbar />
      <Secondary heading= "Projects" text="Lists of some of my projects"/>
      <Procard />
      <Gitcard />
      <Footer />
    </div>
  )
}

export default Project