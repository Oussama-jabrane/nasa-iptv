import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import "swiper/swiper.min.css";
import TV from "../assets/tv.png";
import Star from "../assets/star.png";
import Trophy from "../assets/trophy.png";

function Plans() {
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
        backgroundColor: "#010221",
        backgroundPosition: `center ${-scrollPosition * 0.7}px`,
        backgroundSize: "cover",
      }}
      id="plans"
      className="plans"
    >
      <div className="title">
        <h1>Choose Your Plan</h1>
      </div>
      <div className="description">
        <h3>
          With 1 Connection You Can Use Multiple Devices With Multiple View. But
          In Order To Avoid Buffering You Must Use Only 1 Connection At The Same
          Time.
        </h3>
      </div>
      <div className="plans-list">
        <div className="first-cards">
          <div className="plans-card">
            <div className="plan-name">
              <h1>3 MONTHS</h1>
            </div>
            <div className="plans-image">
              <img src={TV} className="my-40 plan-image" />
            </div>
            <div className="plan-price">
              <h3>
                <s className="old-price">$20</s>
              </h3>
              <h1 className="current-price">$15</h1>
            </div>
            <div className="no_connections">1 CONNECTION.</div>
            <div className="plan-outline"></div>
            <div className="caracteritics-plans">
              ✓ 4K & FHD & HD Channels <br />
              ✓ +19000 Channels <br />
              ✓ +90000 Movies/Series <br />
              ✓ XXX Contents <br />✓ 24/7 Live Support
            </div>
            <Link to="checkout/1">
              <div className="btn">
                <BsCart3 />
                Purchase
              </div>
            </Link>
          </div>
          <div className="plans-card popular">
            <div className="plan-name">
              <h1>12 MONTHS</h1>
            </div>
            <div className="plans-image">
              <img src={Trophy} className="my-40 plan-image" />
            </div>
            <div className="plan-price">
              <h3>
                <s className="old-price">$55</s>
              </h3>
              <h1 className="current-price">$40</h1>
            </div>
            <div className="no_connections">1 CONNECTION.</div>
            <div className="plan-outline"></div>
            <div className="caracteritics-plans">
              ✓ 4K & FHD & HD Channels <br />
              ✓ +19000 Channels <br />
              ✓ +90000 Movies/Series <br />
              ✓ XXX Contents <br />✓ 24/7 Live Support
            </div>
            <Link to="checkout/3">
              <div className="btn btn-popular">
                <BsCart3 />
                Purchase
              </div>
            </Link>
          </div>
          <div className="plans-card">
            <div className="plan-name">
              <h1>6 MONTHS</h1>
            </div>
            <div className="plans-image">
              <img src={Star} className="my-40 plan-image" />
            </div>
            <div className="plan-price">
              <h3>
                <s className="old-price">$30</s>
              </h3>
              <h1 className="current-price">$25</h1>
            </div>
            <div className="no_connections">1 CONNECTION.</div>
            <div className="plan-outline"></div>
            <div className="caracteritics-plans">
              ✓ 4K & FHD & HD Channels <br />
              ✓ +19000 Channels <br />
              ✓ +90000 Movies/Series <br />
              ✓ XXX Contents <br />✓ 24/7 Live Support
            </div>
            <Link to="/checkout/4">
              <div className="btn">
                <BsCart3 />
                Purchase
              </div>
            </Link>
          </div>
        </div>
        <div className="last-cards">
          <div className="plans-card">
            <div className="plan-name">
              <h1>TEST</h1>
            </div>
            <div className="plans-image">
              <img src={TV} className="my-40 plan-image" />
            </div>
            <div className="plan-price">
              <h1 style={{ marginTop: "-10px" }} className="current-price">
                $0.01
              </h1>
            </div>
            <div className="no_connections">1 CONNECTION.</div>
            <div className="plan-outline"></div>
            <div className="caracteritics-plans">
              ✓ 4K & FHD & HD Channels <br />
              ✓ +19000 Channels <br />
              ✓ +90000 Movies/Series <br />
              ✓ XXX Contents <br />✓ 24/7 Live Support
            </div>
            <Link to="checkout/2">
              <div className="btn">
                <BsCart3 />
                Purchase
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
