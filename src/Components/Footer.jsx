import React from "react";

function Footer() {
  return (
    <div
      id="footer"
      className="footer"
      style={{ maxHeight: "15vh", minWidth: "100vw" }}
    >
      <div
        className="copyright"
        style={{ marginBottom: "1.3rem", fontSize: "1.3rem" }}
      >
        <span style={{ fontSize: "2rem" }}>
          <a href="">Nasa IPTV</a>
        </span>
        © 2023. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
