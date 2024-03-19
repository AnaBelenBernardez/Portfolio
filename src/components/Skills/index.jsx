import React from "react";
import "./style.css";
import { SkillsData } from "../data/skills.jsx";
import SkillCard from "./Skillcard";
import { useTranslation } from "react-i18next";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

function Skills() {
  const data = SkillsData;
  const { t } = useTranslation();

  return (
    // <CarouselProvider
    //   totalSlides={data.length}
    //   naturalSlideWidth={40}
    //   naturalSlideHeight={45}
    //   infinite="true"
    //   interval={1000}
    //   isPlaying={true}
    //   visibleSlides={4}
    //   id="carousel"
    //   orientation="vertical"
    // >
    //   <div className="slider-container">
    //     <Slider className="slider">
    //       {data.map((skill, index) => (
    //         <Slide index={index} key={index}>
    //           <SkillCard skill={skill} />
    //         </Slide>
    //       ))}
    //     </Slider>
    //     <ButtonBack id="buttonback">Back</ButtonBack>
    //     <ButtonNext id="buttonnext">Next</ButtonNext>
    //   </div>
    // </CarouselProvider>

    <div className="skills-container">
      {data.map((skill, index) => (
        <div className="skill-item" key={index}>
          <SkillCard skill={skill} />
        </div>
      ))}
    </div>
  );
}

export default Skills;
