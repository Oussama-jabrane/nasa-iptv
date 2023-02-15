import React from "react";
// CSS File
import "./index.css";
// Import Local Files for Components
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Features from "./Components/Features.jsx";
import Plans from "./Components/Plans.jsx";
import FAQ from "./Components/FAQ.jsx";
import Catalog from "./Components/Catalog.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Features />
      <Plans />
      <Catalog />
      <FAQ />
      <Footer />
      <div className="contact-support">
        <a href="">
          <HeadSet className="headset" />
        </a>
      </div>
    </div>
  );
}

function HeadSet() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="bi bi-headset headset"
      viewBox="0 0 16 16"
    >
      <path d="M8 1a5 5 0 00-5 5v1h1a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1V6a6 6 0 1112 0v6a2.5 2.5 0 01-2.5 2.5H9.366a1 1 0 01-.866.5h-1a1 1 0 110-2h1a1 1 0 01.866.5H11.5A1.5 1.5 0 0013 12h-1a1 1 0 01-1-1V8a1 1 0 011-1h1V6a5 5 0 00-5-5z"></path>
    </svg>
  );
}

export default App;
