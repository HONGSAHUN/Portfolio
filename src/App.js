import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Index from "./Component/Index";
import Introduction from "./Component/Introduction";
import Project from "./Component/Project";
import Contest from "./Component/Contest";
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
        <Link to="/project">프로젝트</Link>
        <Link to="/contest">공모전</Link>
        <Link to="/career">나의 경력</Link>
        <Link to="/activity">나의 활동</Link>
        <span className="nav-divider">|</span>
        <Link to="/pp">제작 과정</Link>
      </nav>
      
      <header>
          홍사훈의 포트폴리오 (초안)
      </header>

      <section className="gallery-wrapper">
        <Gallery /> 
      </section>

       <div className="container">

        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contest" element={<Contest />} />
            <Route path="/career" element={<Career />} />
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
          Copyright 2026. 지은이 all rights reserved.
        </i>
      </footer>
    </BrowserRouter>
  );
}
