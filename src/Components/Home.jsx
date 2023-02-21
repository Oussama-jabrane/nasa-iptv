import React, { useState, useEffect } from "react";
import Channels from "../assets/channels.png";
import VOD from "../assets/VOD.png";
import Users from "../assets/users.png";
import Orders from "../assets/orders.png";
import Typical from "react-typical";

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
        maxHeight: "200vh",
        backgroundPosition: `center ${scrollPosition * 0.4}px`,
        backgroundSize: "cover",
      }}
      id="home"
      className="home"
    >
      <div className="first-section">
        <h2>
          We are Nasa IPTV. We <br />
          provide{" "}
          <span className="typewriting">
            <Typical
              className="typewriting"
              loop={Infinity}
              wrapper="b"
              steps={[
                "Stable IPTV.",
                1000,
                "Strong IPTV.",
                1000,
                "Huge IPTV.",
                1000,
              ]}
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
