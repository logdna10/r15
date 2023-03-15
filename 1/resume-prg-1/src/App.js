import './App.css';
import SideHeading from './Components/SideHeading';
import Header from './Components/Header';
import Qualification from './Components/Qualification';
import Project from './Components/Project';
import Description from './Components/Description';
import Skills from './Components/Skills';

function App() {
  let r = {
    name: "Suraj N M",
    place: "Mangaluru",
    state: "Karnataka",
    mobile: "9148477816",
    email: "surajnm.mca21@rvce.edu.in",

    desc: "Self-motivated team oriented person",

    skills: ["Go", "C++", "JavaScript(ReactJS)", "Docker", "Git"],

    quals: [
      {color: [177, 177, 177], institution: "R V College of Engineering", start: "2021", end: "Present", degree:"Master of Computer Applications", result:"9.0 CGPA"},
      {color: [177, 177, 177], institution: "St. Aloysius College", start: "2018", end: "2021", degree: "Bachelor of Computer Applications", result: "7.6 CGPA"},
      {color: [177, 177, 177], institution: "Sharada PU College", start: "2016", end: "2018", degree: "2nd PUC", result: "79%"}
    ],

    projects: [
      {color: [219, 219, 219], title: "ELECT", desc: "Online Election System for College Elections", link: "https://github.com/srjnm/elect"},
      {color: [219, 219, 219], title: "CS:GO WeakSpots", desc: "Analyse CS:GO Match Demos", link: "https://github.com/srjnm/weakspots"},
      {color: [219, 219, 219], title: "DesForm", desc: "Android Learning Platform", link: "https://github.com/srjnm/desform"}
    ]
  };
  

  return (
    <div className="App">
      <div style={{width: "50em", padding: "2em", paddingBottom: "0em", display: "flex", margin: "auto", justifyContent: "center"}}>
        <Header name={r.name} place={r.place} state={r.state} mob={r.mobile} email={r.email}></Header>  
      </div>
      <div style={{width: "50em", height: "4em", display: "flex", margin: "auto", justifyContent: "center"}}>
        <Description content={r.desc} color={[177, 177, 177]}></Description>
      </div>
      <div style={{width: "50em", height: "4em", display: "flex", margin: "auto", justifyContent: "center"}}>
        <SideHeading title="Skills" color={[219, 219, 219]}></SideHeading>
      </div>
      <div style={{width: "50em", height: "4em", display: "flex", margin: "auto", justifyContent: "center"}}>
        <Skills skills={r.skills} color={[219, 219, 219]}></Skills>
      </div>
      <div style={{width: "50em", height: "4em", display: "flex", margin: "auto", justifyContent: "center"}}>
        <SideHeading title="Education" color={[177, 177, 177]}></SideHeading>
      </div>
      {
        r.quals.map((q) => (
          <div style={{width: "50em", display: "flex", margin: "auto", justifyContent: "center"}}>
            <Qualification color={q.color} institution={q.institution} start={q.start} end={q.end} degree={q.degree} result={q.result}></Qualification>
          </div>
        ))
      }
      <div style={{width: "50em", height: "4em", display: "flex", margin: "auto", justifyContent: "center"}}>
        <SideHeading title="Projects" color={[219, 219, 219]}></SideHeading>
      </div>
      {
        r.projects.map((p) => (
          <div style={{width: "50em", display: "flex", margin: "auto", justifyContent: "center"}}>
            <Project color={p.color} title={p.title} desc={p.desc} link={p.link}></Project>
          </div>
        ))
      }
    </div>
  );
}

export default App;
