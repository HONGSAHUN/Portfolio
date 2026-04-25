import { useState } from "react";
import contests from "./Data/contests";

export default function Contest() {
  const [tabIndex, setTabIndex] = useState(0);
  const contentChange = (e) => setTabIndex(Number(e.currentTarget.value));
  return (
    <div id="contest">
      <h1>Contest</h1>
      {contests.map((contest, i) => (
        <button key={contest.tab} onClick={contentChange} value={i} 
        className={`img-btn ${tabIndex === i ? "active" : ""}`}>
          <img src={contest.img} alt={contest.tab} />
          <span className="btn-label">{contest.tab}</span>
        </button>
      ))}
      <div style={{ marginTop: "1em" }}>{contests[tabIndex].content}</div>
    </div>
  );
}