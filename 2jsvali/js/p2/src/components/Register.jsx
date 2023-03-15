import React, { useState } from "react";

import "../App.css";

const Register = () => {
  const [sName, setSname] = useState("");
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");
  const [email, setemail] = useState("");
  const [result, setResult] = useState({});

  const nameChangeHandler = (e) => {
    setSname(e.target.value);
  };
  const numberChangeHandler = (e) => {
    setNumber(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setemail(e.target.value);
  };

  const handleClick = () => {
    if (sName === "") {
      alert("Please enter student name");
      return;
    } else if (sName.length >= 10) {
      alert("Name should be less than 10 characters");
      return;
    } else if (sName.length <= 4) {
      alert("Name should be greater than 4 characters");
      return;
    }

    if (number === "") {
      alert("Please enter mobile number");
      return;
    } else if (number.length != 10) {
      alert("Moblie number must be 10");
      return;
    }

    if (age < 18 || age > 60) {
      alert("Age must be between 18 and 60");
      return;
    }

    if (email === "") {
      alert("Please enter email");
      return;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Email formate is wrong");
      return;
    }

    const temp = {
      sName: sName,
      number: number,
      age: age,
      email: email,
    };
    setResult(temp);
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Register for College</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          height: "20rem",
          width: "15rem",
          margin: 10,
          padding: 20,
          border: "1px solid black",
          borderRadius: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          onChange={nameChangeHandler}
          value={sName}
        />
        <input
          type="text"
          placeholder="Enter your Number"
          onChange={numberChangeHandler}
          value={number}
        />
        <input
          type="number"
          placeholder="Enter your age"
          onChange={ageChangeHandler}
          value={age}
        />
        <input
          type="email"
          placeholder="Enter your email"
          onChange={emailChangeHandler}
          value={email}
        />
        <button onClick={handleClick}>Register</button>
      </div>
      <div
        style={{
          textAlign: "center",
          border: "1px solid black",
          padding: "2rem",
          borderRadius: "1rem",
        }}
      >
        <h2>Student Registered</h2>
        <p>{result.sName && `Name is ${result.sName}`}</p>
        <p>{result.number && `Number is ${result.number}`}</p>
        <p>{result.age && `Age is ${result.age}`}</p>
        <p>{result.email && `Date of joining is ${result.email}`}</p>
      </div>
    </div>
  );
};

export default Register;
