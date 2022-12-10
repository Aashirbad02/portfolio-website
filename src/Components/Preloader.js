import React from "react";
import "../css/main.css";
import "../css/responsive.css";

const Preloader = () => {
  return (
    <div>
      <div class="preloader">
        <div class="loader">
          <div class="bar1 bar"></div>
          <div class="bar2 bar"></div>
          <div class="bar3 bar"></div>
          <div class="bar4 bar"></div>
          <div class="bar5 bar"></div>
          <div class="bar6 bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
