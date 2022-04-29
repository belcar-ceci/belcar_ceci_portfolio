import React from 'react'
import AboutMe from '../components/About/AboutMe';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects'
import FixSocialIcon from '../components/SocialIcon/FixSocialIcon';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
      <FixSocialIcon />
    </div>
  )
}

export default Home