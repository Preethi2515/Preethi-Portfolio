import React from "react";
import './Skills.css';

const skillsData = [
      {
    name: "C",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
  },
  { name: "Java", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
  { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
  { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
  { name: "Express JS", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
  { name: "React JS", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  
{ name: "Mongo DB", logo: "https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg" },
  // replace with actual image URL or import
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills & Expertise</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <h3 className="skill-name">{skill.name.toUpperCase()}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
