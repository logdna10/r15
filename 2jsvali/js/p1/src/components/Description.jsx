import React from "react";

const Description = ({ description }) => {
  return (
    <div>
      <p style={{ lineHeight: "2.5rem", fontSize: "1.5rem" , color: "blue",}}>{description}</p>
    </div>
  );
};

export default Description;
