import Activity1 from "../Activity/Activity1";
import Activity2 from "../Activity/Activity2";
import Activity3 from "../Activity/Activity3";
import Activity4 from "../Activity/Activity4";

const activities = [
  { tab: "Coding Study", content: <Activity1 />, img: "/image/study.jpeg"},
  { tab: "Bio-Med Study", content: <Activity2 />, img: "/image/kbesa.jpg" },
  { tab: "Band Habbit", content: <Activity3 />, img: "/image/bass3.jpeg" },
  { tab: "Donation", content: <Activity4 />, img: "/image/donating.jpeg" },
];

export default activities;