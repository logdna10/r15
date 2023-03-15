import React from "react";

import "./../App.css";

const Hobby = ({ hobbies }) => {
  return (
    <div>
      <h2 className="hColor">Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hobby;
