import React from "react";

import "./components/index";
import "./App.css";
import { Education, Header, Hobby, Project, Skill } from "./components/index";
import Description from "./components/Description";

function App() {
  const data = {
    name: "Vaibhav Hathwar",
    number: "9767356214",
    location: "Kundapura, Udupi",
    email: "vaibhav@rvce.edu.in",
    github: "https://github.com/photonwings",
    desc: `Technology enthusiast seeking position in reputed company to gain 
    practical experience, expand my knowledge, learn new things everyday and 
    contribute to the growth of the company.`,
    education: [
      {
        stage: "MCA",
        clg: "RVCE",
        start: 2021,
        end: 2023,
      },
      {
        stage: "BSc",
        clg: "BASCK",
        start: 2018,
        end: 2021,
      },
      {
        stage: "PUC",
        clg: "Viveka PU College, Kota",
        start: 2016,
        end: 2018,
      },
      {
        stage: "SSLC",
        clg: "Viveka High School, Kota",
        start: 2013,
        end: 2016,
      },
    ],
    projects: [
      {
        name: "Decentralized Crowdfunding",
        desc: "Application on blockchain to perform crowdfunding",
      },
      {
        name: "Portfolio",
        desc: "Website describing about education, projects",
      },
      {
        name: "Expression Convertion",
        desc: "Converts Infix expression to postfix and prefix",
      },
    ],
    skills: ["JavaScript", "React", "BlockChain", "Linux"],
    hobbies: ["Reading", "Cycling", "Running", "Watching Anime"],
  };
  return (
    <div className="App">
      <div className="Container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "30%",
            backgroundColor: "lightblue",
            paddingTop: "3rem",
            paddingBottom: "3rem",
            borderRadius: "20px",
          }}
        >
          <Header
            name={data.name}
            number={data.number}
            email={data.email}
            github={data.github}
            location={data.location}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "10rem",
            backgroundColor: "#cbe1f4",
            width: "70%",
            borderRadius: "1rem",
            marginLeft: "1rem"
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "30%",
                padding: "2rem",
                paddingTop: "2rem",
                paddingBottom: 0,
                backgroundColor: "#rgb(219 232 255)",
                borderRadius: "1rem",
                marginRight: "2rem",
              }}
            >
              <Description description={data.desc} />
            </div>
            <div style={{ width: "70%" }}>
              <Education education={data.education} />
            </div>
          </div>
          <Project projects={data.projects} />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Skill skills={data.skills} />
            <Hobby hobbies={data.hobbies} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
