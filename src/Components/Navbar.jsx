import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsListStars, BsHouseDoor, BsCoin, BsBook, BsQuestionSquare } from "react-icons/bs";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3 className="logo">SPACE IPTV</h3>

      <nav ref={navRef}>
        <a href="/#home"><span className="link"><BsHouseDoor className="link-icon" /> Home</span></a>
        <a href="/#features"><span className="link"><BsListStars className="link-icon" /> Features</span></a>
        <a href="/#plans"><span className="link"><BsCoin className="link-icon" /> Plans</span></a>
        <a href="/#catalog"><span className="link"><BsBook className="link-icon" /> Catalog</span></a>
        <a href="/#faq"><span className="link"><BsQuestionSquare className="link-icon" /> FAQ</span></a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
