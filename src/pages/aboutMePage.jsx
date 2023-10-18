import React from "react";
import DataLine from "../components/dataLine";
import SkillCard from "../components/skillCard";

function AboutMePage() {
  const aboutMeDics =
    "Hello there! 👋 I'm a passionate and results-driven full-stack developer with a keen interest in crafting robust, user-centric solutions. I thrive on turning complex problems into elegant, intuitive, and efficient solutions.";

  return (
    <>
      <section className="about-me-section">
        <div className="about-page container grid">
          <div className="grid about-img">
            <img
              src="src\assets\img\gosia-logo.jpg"
              className="about-img--profile"
              alt="Another picture of developer"
            />
          </div>

          <div className="grid about-content">
            <div className=" grid about-text">
              <div className="about-disc">
                <h3>Who am i?</h3>
                <p>{aboutMeDics}</p>
              </div>

              <div className="about-adress grid">
                <DataLine name="Age" data="24" />
                <DataLine name="Residence" data="UK" />
                <DataLine name="Freelance" data="Available" />
                <DataLine name="Address" data="Reading, UK" />
              </div>
            </div>

            <div className="about-skills grid">
              <SkillCard />
              <SkillCard />
              <SkillCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMePage;