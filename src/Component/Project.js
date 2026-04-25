import { useState } from "react";
import projects from "./Data/projects";

export default function Project() {
  const [tabIndex, setTabIndex] = useState(0);
  const contentChange = (e) => setTabIndex(Number(e.currentTarget.value));
  return (
    <div id="project">
      <h1>Project</h1>
      {projects.map((project, i) => (
        <button key={project.tab} onClick={contentChange} value={i} 
        className={`img-btn ${tabIndex === i ? "active" : ""}`}>
          <img src={project.img} alt={project.tab} />
          <span className="btn-label">{project.tab}</span>
        </button>
      ))}
      <div style={{ marginTop: "1em" }}>{projects[tabIndex].content}</div>
    </div>
  );
}

