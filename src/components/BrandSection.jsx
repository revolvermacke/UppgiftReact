import React from "react";
import Logo1 from "../assets/images/logo1.svg";
import Logo2 from "../assets/images/logo2.svg";
import Logo3 from "../assets/images/logo3.svg";
import Logo4 from "../assets/images/logo4.svg";
import Logo5 from "../assets/images/logo5.svg";
import Logo6 from "../assets/images/logo6.svg";

const BrandSection = () => {
  return (
    <section id="brand-section">
      <div className="container">
        <div id="brand-1" className="brands">
          <img src={Logo1} />
        </div>

        <div id="brand-2" className="brands">
          <img src={Logo2} />
        </div>

        <div id="brand-3" className="brands">
          <img src={Logo3} />
        </div>

        <div id="brand-4" className="brands">
          <img src={Logo4} />
        </div>

        <div id="brand-5" className="brands">
          <img src={Logo5} />
        </div>

        <div id="brand-6" className="brands">
          <img src={Logo6} />
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
