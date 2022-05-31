import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Secondary from "../components/Secondary";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Secondary heading="Contact" text="Please reach out to inquire" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact