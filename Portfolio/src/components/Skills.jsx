import React from "react";

const skills = {
  Frontend: ["React", "HTML", "CSS", "JS"],
  Language: ["Python"],
  Backend: ["PHP", "SQL"],
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="skills-column">
            <h3>{group}</h3>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
