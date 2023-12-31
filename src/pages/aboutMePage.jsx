import React from "react";
import DataLine from "../components/dataLine";
import SkillCard from "../components/skillCard";
import { FrontEndData, BackEndData, DesignData } from "../components/icons";
import profile2 from "../assets/img/profile2.png";
import profile2webp from "../assets/img/profile2.webp";
function AboutMePage(props) {
  const aboutMeDics =
    "Hello there! 👋 I'm a passionate and results-driven full-stack developer with a keen interest in crafting robust, user-centric solutions. I thrive on turning complex problems into elegant, intuitive, and efficient solutions.";

  return (
    <>
      <section className="about-me-section container" id={props.id}>
        <div className="about-title">
          <h2>Who am i?</h2>
        </div>
        <div className="about-page container grid">
          <div className="grid about-img">
            <picture>
              <source srcSet={profile2webp} type="image/webp" />
              <source srcSet={profile2} type="image/png" />
              <img
                src={profile2}
                className="about-img--profile"
                alt="The picture of the developer"
              />
            </picture>

            <div className="about-adress  about-adress--sm">
              <DataLine name="Age" data="24" />
              <DataLine name="Residence" data="UK" />
              <DataLine name="Freelance" data="Available" />
              <DataLine name="Address" data="Reading, UK" />
            </div>
          </div>

          <div className="grid about-content">
            <div className=" grid about-text">
              <div className="about-disc">
                <p>{aboutMeDics}</p>
              </div>

              <div className="about-adress grid about-adress--lg">
                <DataLine name="Age" data="24" />
                <DataLine name="Residence" data="UK" />
                <DataLine name="Freelance" data="Available" />
                <DataLine name="Address" data="Reading, UK" />
              </div>
            </div>

            <div className="about-skills grid">
              <SkillCard data={FrontEndData} />
              <SkillCard data={BackEndData} />
              <SkillCard data={DesignData} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMePage;
