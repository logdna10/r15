import React from "react";

import "./../App.css";

const Education = ({ education }) => {
  return (
    <div>
      <h2 className="hColor">Education</h2>
      <table style={{ borderWidth: "1px" }}>
        <thead>
          <tr>
            <th>Education</th>
            <th>College Name</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        {education.map((edu, index) => (
          <tbody key={index}>
            <tr>
              <td>{edu.stage}</td>
              <td>{edu.clg}</td>
              <td>{edu.start}</td>
              <td>{edu.end}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Education;
