import React from 'react'
import AboutMe from '../components/About/AboutMe';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import HeroFooter from '../components/HeroFooter/HeroFooter';
import Projects from '../components/Projects/Projects'
import FixSocialIcon from '../components/SocialIcon/FixSocialIcon';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Projects />
      <HeroFooter />
      <AboutMe />
      <Contact />
      <Footer />
      <FixSocialIcon />
    </div>
  )
}

export default Home