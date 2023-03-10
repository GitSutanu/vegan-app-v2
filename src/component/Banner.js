import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Banner({ ban_img, ban_head, ban_title }) {
  return (
    <>
      {/* Banner */}
      <div
        className="banner"
        style={{
          background: `url(${ban_img}) center center no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div className="bnr-social-link">
          <p>Stay socially Connected</p>
          <span />
          <ul>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={["fab", "instagram-square"]} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
              </a>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="bnr-content">
            <h1>{ban_head}</h1>
            <p>{ban_title}</p>
            {/*<a href="#" class="cmn-btn">Donate Today</a>*/}
            <div>
              <a href="#sec1" className="scoll-btn">
                <img src={require("../assets/images/sroll-btn.png")} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Banner-end */}
    </>
  );
}

export default Banner;
