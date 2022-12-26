import React from 'react'
import Approach from '../components/about/Approach'
import Banner from '../components/about/Banner'
import Contact from '../components/about/Contact'
import ImageGrid from '../components/about/ImageGrid'
import Timeline from '../components/about/Timeline'
import Blog from '../components/general/Blog'

const About = () => {
  return (
    <div>
      <Banner />
      <ImageGrid />
      <Timeline />
      <Approach />
      <Contact />
      <Blog />
    </div>
  )
}

export default About