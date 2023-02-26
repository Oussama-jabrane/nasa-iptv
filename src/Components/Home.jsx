import React, { useState, useEffect } from "react";
import Channels from "../assets/channels.png";
import VOD from "../assets/VOD.png";
import Users from "../assets/users.png";
import Orders from "../assets/orders.png";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        maxHeight: "150vh",
        backgroundPosition: `center ${scrollPosition * 0.4}px`,
        backgroundSize: "cover",
      }}
      id="home"
      className="home"
    >
      <div className="first-section">
        <h2>
          We are Nasa IPTV. We <br className="breakline" />
          provide{" "}
          <span className="typewriting">
            <TypeAnimation
              className="typewriting"
              sequence={[
                "Stable IPTV",
                2000,
                "Strong IPTV",
                2000,
                "Huge IPTV",
                2000,
              ]}
              wrapper="b"
              cursor={true}
              repeat={Infinity}
            />
          </span>
        </h2>
      </div>

      <div className="second-section">
        <div className="second-section-one">
          <div className="section channels">
            <img src={Channels} className="image-section" />
          </div>
          <div className="section VOD">
            <img src={VOD} className="image-section" />
          </div>
        </div>

        <div className="second-section-two">
          <div className="section users">
            <img src={Users} className="image-section" />
          </div>
          <div className="section orders">
            <img src={Orders} className="image-section" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
