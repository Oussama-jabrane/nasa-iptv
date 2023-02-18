import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/swiper.min.css";
import TV from "../assets/tv.png";
import Medal from "../assets/medal.png";
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

  let slides;
  const [width, setWidth] = useState(window.innerWidth);
  const updateWindowDimensions = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
    console.log("updating width");
  };
  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
    console.log("give width", width);
  }, []);

  if (width <= 10000) {
    slides = 3;
  }
  if (width <= 1024) {
    slides = 2;
  }
  if (width <= 800) {
    slides = 1;
  }
  console.log(width);

  let slidesBetween;
  if (window.innerWidth <= 1000) {
    slidesBetween = 40;
  }
  if (window.innerwidth <= 600) {
    slidesBetween = 30;
  } else {
    slidesBetween = 50;
  }

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
        <Swiper
          spaceBetween={slidesBetween}
          slidesPerView={slides}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          <div className="first-cards">
            <SwiperSlide>
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
                    <PayPal />
                    Pay using PayPal
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="plans-card popular">
                <div className="plan-name">
                  <h1>12 MONTHS</h1>
                </div>
                <div className="plans-image">
                  <img src={Medal} className="my-40 plan-image" />
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
                  ✓ XXX Contents <br />
                  ✓ 24/7 Live Support <br />✓ Space IPTV Premium Apps
                </div>
                <Link to="checkout/3">
                  <div className="btn btn-popular">
                    <PayPal />
                    Pay using PayPal
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="plans-card">
                <div className="plan-name">
                  <h1>24 MONTHS</h1>
                </div>
                <div className="plans-image">
                  <img src={Trophy} className="my-40 plan-image" />
                </div>
                <div className="plan-price">
                  <h3>
                    <s className="old-price">$80</s>
                  </h3>
                  <h1 className="current-price">$65</h1>
                </div>
                <div className="no_connections">1 CONNECTION.</div>
                <div className="plan-outline"></div>
                <div className="caracteritics-plans">
                  ✓ 4K & FHD & HD Channels <br />
                  ✓ +19000 Channels <br />
                  ✓ +90000 Movies/Series <br />
                  ✓ XXX Contents <br />
                  ✓ 24/7 Live Support <br />
                  ✓ Space IPTV Premium Apps <br />✓ Premium VPN
                </div>
                <Link to="/checkout/2">
                  <div className="btn">
                    <PayPal />
                    Pay using PayPal
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="last-card">
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
                  ✓ XXX Contents <br />
                  ✓ 24/7 Live Support <br />✓ Space IPTV Premium Apps
                </div>
                <Link to="/checkout/4">
                  <div className="btn">
                    <PayPal />
                    Pay using PayPal
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

function PayPal() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-paypal"
      viewBox="0 0 16 16"
    >
      <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 00-.691.59L2.005 13.509a.42.42 0 00.415.486h2.756l-.202 1.28a.628.628 0 00.62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 01.348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 00.88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 00-.76-.59l-.094-.061zM6.543 8.82a.695.695 0 01.321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 00-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 01-.348.296H5.595a.106.106 0 01-.105-.123l.208-1.32.845-5.214z"></path>
    </svg>
  );
}

export default Plans;
