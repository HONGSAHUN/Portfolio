import { useState } from "react";
import stories from "./Data/stories";

export default function Story() {
  const [tabIndex, setTabIndex] = useState(0);
  const contentChange = (e) => setTabIndex(Number(e.currentTarget.value));
  return (
    <div id="story">
      <h1>My Story</h1>
      {stories.map((story, i) => (
        <button key={story.tab} onClick={contentChange} value={i} 
        className={`img-btn ${tabIndex === i ? "active" : ""}`}>
          <img src={story.img} alt={story.tab} />
          <span className="btn-label">{story.tab}</span>
        </button>
      ))}
      <div style={{ marginTop: "1em" }}>{stories[tabIndex].content}</div>
    </div>
  );
}