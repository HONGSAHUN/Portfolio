import { useState } from "react";
import skills from "./Data/skills";

export default function Skill() {
  const [tabIndex, setTabIndex] = useState(0);
  const contentChange = (e) => setTabIndex(Number(e.currentTarget.value));
  return (
    <div id="skill">
      <h1>My Skills</h1>
      {skills.map((skill, i) => (
        <button key={skill.tab} onClick={contentChange} value={i} 
        className={`img-btn ${tabIndex === i ? "active" : ""}`}>
          <img src={skill.img} alt={skill.tab} />
          <span className="btn-label">{skill.tab}</span>
        </button>
      ))}
      <div style={{ marginTop: "1em" }}>{skills[tabIndex].content}</div>
    </div>
  );
}

