import React from 'react'
import Approach from '../components/about/Approach'
import Banner from '../components/about/Banner'
import Contact from '../components/about/Contact'
import ImageGrid from '../components/about/ImageGrid'
import Timeline from '../components/about/Timeline'
import Blog from '../components/general/Blog'
import Footer from '../components/general/Footer'
import Navbar from '../components/general/Navbar'

const About = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <ImageGrid />
      <Timeline />
      <Approach />
      <Contact />
      <Blog />
      <Footer />
    </div>
  )
}

export default About