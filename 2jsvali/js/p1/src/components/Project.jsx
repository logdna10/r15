import React from "react";

import "./../App.css";

const Project = ({ projects }) => {
  return (
    <div>
      <h2 className="hColor">Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <div>
            <b>
              <li key={index}>{project.name}</li>
            </b>
            <p>{project.desc}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Project;
