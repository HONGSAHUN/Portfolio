import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Index from "./Component/Index";
import Introduction from "./Component/Introduction";
import Skill from "./Component/Skill";
import Story from "./Component/Story";
import Career from "./Component/Career";
import Gallery from './Component/Gallery';
import Activity from "./Component/Activity";
import Guestbook from "./Component/Guestbook";
import PP from "./Component/PP";
import "./App.css";


export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">홈</Link>
        <span className="nav-divider">|</span>
        <Link to="/introduction">나의 소개</Link>
        <Link to="/skill">기술 스택</Link>
        <Link to="/career">타임라인</Link>
        <Link to="/story">나의 스토리</Link>
        <Link to="/activity">나의 활동</Link>
        <span className="nav-divider">|</span>
        <Link to="/pp">제작 과정</Link>
      </nav>
      
      <header>
          PORTFOLIO
      </header>

      <section className="gallery-wrapper">
        <Gallery /> 
      </section>

       <div className="container">

        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/career" element={<Career />} />
            <Route path="/story" element={<Story />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/pp" element={<PP />} />
          </Routes>
        </main>
      </div>

      <div className="guestbook-section">
        <h2 style={{textAlign: 'center', marginBottom: '20px'}}>Guestbook</h2>
        <Guestbook />
      </div>


      <footer>
        <i>
          Some images used in this portfolio are sourced from Grox
          <br />
          The other images are sourced from my own photography.
          <br /><br />
          Copyright 2026. 홍사훈 all rights reserved.
        </i>
      </footer>
    </BrowserRouter>
  );
}
