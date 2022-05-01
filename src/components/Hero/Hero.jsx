import React, {useState} from 'react'
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";

import {
    HeroContainer,
    HeroWrappers,
    HeroLeft,
    HeroRight,
    Image,
    ScrollDown,
    ScrollLink,
} from "./HeroStyled";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
      setIsOpen(!isOpen)
  }
  return (
    <main>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Header toggle={toggle}/>
        <HeroContainer>
            <HeroWrappers>
                <HeroLeft>
                    <h1>Hi, I'm Cecilia Carbel </h1>
                    <h2>Frontend Developer</h2>
                    <p>Design in code, beautiful and simple ideas.</p>
                </HeroLeft>
                <HeroRight>
                <Image
                    src={require('../../assets/frontend_Developer.png')} 
                    alt="carbel-svgrepo"
                />
                </HeroRight>
            </HeroWrappers>
            <ScrollDown to="projects">{/*scrolldow funciona porque redigirimos a proyectos */}
                <ScrollLink>
                 Scroll down
                <img
                  src={require('../../assets/scrollDownn.png')} 
                  alt="scroll-down"
                />   
                </ScrollLink>
            </ScrollDown>
        </HeroContainer>
    </main>
  )
}

export default Hero