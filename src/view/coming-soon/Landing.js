import React from "react";

import "../../assets/css/ComeingCss.scss";

function Landing() {
  return (
    <>
      <div className="for_landing">
        <main className="main-content">
          <div className="map" />
          <div className="overlay">
            <div className="pins" />
            <div className="logo">vegan.info</div>
            <div className="soon">coming soon</div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Landing;
