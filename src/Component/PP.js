import { useState } from "react";
import pps from "./Data/pps";

export default function Career() {
  const [tabIndex, setTabIndex] = useState(0);
  const contentChange = (e) => setTabIndex(Number(e.currentTarget.value));
  return (
    <div id="pp">
      <h1>Production Process</h1>
      <img src="/image/port.png" alt="portfolio" />
      <buttonarea>
      {pps.map((c, i) => (
        <button key={c.tab} onClick={contentChange} value={i}>
          {c.tab}
        </button>
      ))}
      </buttonarea>
      <div style={{ marginTop: "1em" }}>{pps[tabIndex].content}</div>
    </div>
  );
}