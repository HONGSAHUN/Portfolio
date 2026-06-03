import { useState } from "react";
import futures from "./Data/futures";

export default function Future() {
  const [tabIndex, setTabIndex] = useState(0);
  const contentChange = (e) => setTabIndex(Number(e.currentTarget.value));
  return (
    <div id="future">
      <h1>My Future</h1>
      <buttonarea>
      {futures.map((f, i) => (
        <button key={f.tab} onClick={contentChange} value={i}>
          {f.tab}
        </button>
      ))}
      </buttonarea>
      <div style={{ marginTop: "1em" }}>{futures[tabIndex].content}</div>
    </div>
  );
}