import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Cart4 } from "react-bootstrap-icons";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
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

  // const clientId =
  //   "ARKMS99qJXPfsM0yW1Y5AmeQgORkZN-cksNaRcNy7Zhfueh0ohjp_WYNuVkcXvoePjW4K4qxJduEejPg";

  let slidesPerView = 3;
  if (window.innerWidth <= 1024) {
    slidesPerView = 2;
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
          spaceBetween={50}
          slidesPerView={slidesPerView}
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
                <div className="btn">
                  <Cart4 />
                  Purchase
                </div>
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
                <div className="btn btn-popular">
                  <Cart4 />
                  Purchase
                </div>
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
                <div className="btn">
                  <Cart4 />
                  Purchase
                </div>
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
                <div className="btn">
                  <Cart4 />
                  Purchase
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Plans;
