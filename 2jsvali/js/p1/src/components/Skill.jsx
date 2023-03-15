import React from "react";

import "./../App.css";

const Skill = ({ skills }) => {
  return (
    <div>
      <h2 className="hColor">Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
