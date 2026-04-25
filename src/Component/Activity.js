import { useState } from "react";
import activities from "./Data/activities";

export default function Activity() {
  const [tabIndex, setTabIndex] = useState(0);
  const contentChange = (e) => setTabIndex(Number(e.currentTarget.value));
  return (
    <div id="activity">
      <h1>My Activity</h1>
      {activities.map((project, i) => (
        <button key={project.tab} onClick={contentChange} value={i} 
        className={`img-btn ${tabIndex === i ? "active" : ""}`}>
          <img src={project.img} alt={project.tab} />
          <span className="btn-label">{project.tab}</span>
        </button>
      ))}
      <div style={{ marginTop: "1em" }}>{activities[tabIndex].content}</div>
    </div>
  );
}