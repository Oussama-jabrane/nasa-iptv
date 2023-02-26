import React from "react";
import Navbar from "./Navbar.jsx";

function ThankYouPage() {
  return (
    <div className="thank-you-container">
      <Navbar />
      <div className="thank-you">
        <h1>Thank you for buying one of our services!</h1>
        <h3>
          We hope you liked our service and you'll come to us as soon as
          possible.
        </h3>
      </div>
    </div>
  );
}

export default ThankYouPage;
