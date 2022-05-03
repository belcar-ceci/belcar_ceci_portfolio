import React from 'react';
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutMeStyled";

const AboutMe = () => {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src={require('../../assets/frontend_developer2.png')}
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Cecilia Carbajal</strong> With more than 1 year of professional experience as a UI & Front Developer,
            I have strong skills in HTML5 Markup, CSS3, Responsive Web and Semantic Web Analysis.
            In my training process, I addressed front-end processes with Javascript using React,
            and back-end in Node JS, Spring Boot, Java, Php and Laravel, focused on REST API with Express and MySQL.
            Find in my profile skills such as: problem solving, attentive to indications, teamwork,
            analytical and curious, with a focus on continuous learning and keeping up to date with new technologies.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default AboutMe