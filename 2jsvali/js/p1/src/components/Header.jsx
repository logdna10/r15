import React from "react";
import meliodas from "./../assets/meliodas.jpg";

import "./../App.css";

const Header = ({ name, number, email, github, location }) => {
  return (
    <div>
      <img
        src={meliodas}
        style={{ height: "20em", width: "20em", borderRadius: "2em" }}
      />
      <h1 className="hColor" style={{ textAlign: "center", fontSize: 40 }}>
        {name}
      </h1>
      <p style={{ fontSize: 25 }}>
        <b>Location:</b> <i>{location}</i>
      </p>
      <p style={{ fontSize: 25 }}>
        <b>Mobile:</b> <i>{number}</i>
      </p>
      <p style={{ fontSize: 25 }}>
        <b>Email:</b> <i>{email}</i>
      </p>
      <a
        href={github}
        style={{ fontStyle: "italic", fontSize: 25, textDecoration: "none" }}
      >
        GitHub
      </a>
    </div>
  );
};

export default Header;
