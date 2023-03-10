import React from "react";
import Banner from "../../component/Banner";
import Footer from "../../component/Footer";
import Header from "../../component/Header";

function Eating_resturent() {
  return (
    <div className="main_site">
      <Header />
      <Banner
        ban_img={require("../../assets/images/bnr4.png")}
        ban_head={"Eating Out & Restaurants: How to Order"}
        ban_title={"Worldwide there are many vegan friendly restaurants."}
      />
      <>
        <section id="eating-sec1" className="eating-sec1">
          <div className="container">
            <div className="text-center">
              <h2>List Of Applications</h2>
            </div>
            <div className="row justify-content-center gy-4 gy-md-0">
              <div className="col-md-3">
                <div className="app-box">
                  <img src={require("../../assets/images/app1.png")} alt="" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="app-box">
                  <img src={require("../../assets/images/app2.png")} alt="" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="app-box">
                  <img src={require("../../assets/images/app3.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="eating-sec2">
          <div className="container">
            <div className="content-area text-center">
              <h2>Worldwide vegan friendly restaurants</h2>
              <p>
                Some of these are exclusively vegan, or have options available.
                Happy Cow is an excellent resource showing worldwide
                restaurants.
              </p>
            </div>
            <div className="row justify-content-between gy-4 gy-md-0 text-center text-md-start">
              <div className="col-lg-4 col-md-5">
                <h4>Browse the World</h4>
                <p>
                  Reviews by vegetarians, vegans, and natural food enthusiasts
                  you can trust.
                </p>
                <div className="btn-outer">
                  <a href="javascript:void(0)" className="cmn-btn">
                    North America (64341)
                  </a>
                  <a href="javascript:void(0)" className="cmn-btn">
                    Europe (86375)
                  </a>
                  <a href="javascript:void(0)" className="cmn-btn">
                    Oceania (10849)
                  </a>
                  <a href="javascript:void(0)" className="cmn-btn">
                    Asia &amp; Middle East (22587)
                  </a>
                  <a href="javascript:void(0)" className="cmn-btn">
                    South America (7310)
                  </a>
                  <a href="javascript:void(0)" className="cmn-btn">
                    Africa (1532)
                  </a>
                </div>
              </div>
              <div className="col-md-7">
                <div className="row justify-content-center gx-5 mb-5 gy-3 gy-md-0">
                  <div className="col-md-3">
                    <h4>1,190,654</h4>
                    <p>Reviews</p>
                  </div>
                  <div className="col-md-3">
                    <h4>180</h4>
                    <p>Countries</p>
                  </div>
                  <div className="col-md-3">
                    <h4>193,001</h4>
                    <p>Listings</p>
                  </div>
                </div>
                <div className="map-outer">
                  <img src={require("../../assets/images/map.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="sec4 eating-sec3"
          style={{
            background: `url(${require("../../assets/images/eating-bg.jpg")}) center center no-repeat`,
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="s4-content">
              <h2>How to Get Involved With The Vegan Movement</h2>
              <p>
                Educate yourself about the costs and practices involved in the
                processing of animal products. Determine your reasons for
                turning vegan
              </p>
            </div>
            <div className="eating-slider row">
              <div class="col-lg-2 col-md-4 col-sm-2 mb-3">
                <div className="eating-slider-box">
                  <img
                    src={require("../../assets/images/eating-logo1.png")}
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-2 mb-3">
                <div className="eating-slider-box">
                  <img
                    src={require("../../assets/images/eating-logo2.png")}
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-2 mb-3">
                <div className="eating-slider-box">
                  <img
                    src={require("../../assets/images/eating-logo3.png")}
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-2 mb-3">
                <div className="eating-slider-box">
                  <img
                    src={require("../../assets/images/eating-logo4.png")}
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-2 mb-3">
                <div className="eating-slider-box">
                  <img
                    src={require("../../assets/images/eating-logo5.png")}
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-2 mb-3">
                <div className="eating-slider-box">
                  <img
                    src={require("../../assets/images/eating-logo6.png")}
                    alt=""
                  />
                </div>
              </div>
              {/* <div>
              <div class="eating-slider-box">
                  <img src="images/eating-logo6.png" alt="">
              </div>
          </div> */}
            </div>
            <div className="text-center">
              <a href="#" className="cmn-btn mt-5">
                Take action
              </a>
            </div>
          </div>
        </section>
      </>

      <Footer />
    </div>
  );
}

export default Eating_resturent;
