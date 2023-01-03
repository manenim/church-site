import React from 'react'
import Banner from '../components/contact/Banner'
import Card from '../components/contact/Card'
import Form from '../components/contact/Form'
import Footer from '../components/general/Footer'
import Navbar from '../components/general/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar />
          <Banner />
          <Form />
      <Card />
      <Footer />
    </div>
  )
}

export default Contact