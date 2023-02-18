import React from "react";

function Footer() {
  return (
    <div
      id="footer"
      className="footer"
      style={{ maxHeight: "15vh", minWidth: "100vw" }}
    >
      <div className="payment-methods">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_Western_Union.svg/1200px-Logo_Western_Union.svg.png"
          alt="Western Union"
          width="100vw"
        />
        <img
          src="http://nova-iptv.net/media/pay.png"
          alt="E-Payments"
          height="40px"
          width="300px"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Ria_Main_Logo_Descriptor_Color_RGB.png"
          alt="RIA"
          width="150vw"
        />
      </div>
      <div className="copyright" style={{ marginBottom: "1.3rem" }}>
        <span style={{ fontSize: "1.2rem" }}>
          <a href="">Space IPTV</a>
        </span>
        © 2023. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
