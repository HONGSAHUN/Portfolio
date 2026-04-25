import { useState } from "react";
import intros from "./Data/intros";

export default function Introduction() {
  const [tabIndex, setTabIndex] = useState(0);
  const contentChange = (e) => setTabIndex(Number(e.currentTarget.value));
  return (
    <div>
      <h1>Introduction</h1>
      <buttonarea>
      {intros.map((intro, i) => (
        <button key={intro.tab} onClick={contentChange} value={i}>
          {intro.tab}
        </button>
      ))}
      </buttonarea>
      <div style={{ marginTop: "1em" }}>{intros[tabIndex].content}</div>
      {intros[tabIndex].tab === "프로필" && (
        <div className="profile-image-wrapper">
          <img src="/image/gachon.jpeg" alt="프로필" />
        </div>
        )}
      {intros[tabIndex].tab === "목표" && (
        <div className="profile-image-wrapper">
          <img src="/image/ai.jpeg" alt="목표" />
        </div>
        )}
    </div>
  );
}