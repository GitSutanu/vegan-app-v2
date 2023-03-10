import React from "react";
import Banner from "../../component/Banner";
import Footer from "../../component/Footer";
import Header from "../../component/Header";

function Vegan_Clothing_Changes() {
  return (
    <div className="main_site">
      <Header />
      <Banner
        ban_img={require("../../assets/images/bnr6.png")}
        ban_head={"vegan-friendly clothes"}
        ban_title={
          "Vegan Clothing, like vegan food, is any garment made without animal products."
        }
      />
      <section
        className="sec1 nutrition-sec1 shopping-sec2"
        id="sec1"
        style={{
          background: `url(${require("../../assets/images/s1-bg-1.png")}) center center no-repeat`,
          backgroundSize: "100%",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 s1-left">
              <h2>High-performing Vegan Fabrics for clothing</h2>
              <p>
                The abuse that animals suffer at human hands is heartbreaking,
                sickening, and infuriating. It's even more so when we realize
                that the everyday choices we make.
              </p>
              <p>
                Vegan Clothing, like vegan food, is any garment made without
                animal products. Some things may seem obvious (like leather and
                suede), but vegan materials also exclude any thing obtained
                through animal exploitation. We've seen a surge of
                high-performing vegan fabrics that are the perfect combination
                of soft and sustainable. Like other vegan fabrics, organic
                cotton is easier to clean than wool, faster drying, and softer
                to the touch.
              </p>
            </div>
            <div className="col-md-5 s1-right">
              <figure>
                <img
                  src={require("../../assets/images/shopping-img9.png")}
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className="sec2 nutrition-sec2">
        <div className="container">
          <div className="row tab-slider gy-4 gy-md-0">
            <div className="col-md-4">
              <div className="nutritionbox1">
                <div className="thumb">
                  <img
                    src={require("../../assets/images/shopping-img10.png")}
                    alt=""
                  />
                </div>
                <h4>Leather and Exotic Skins</h4>
                <p>
                  Snakes, alligators, crocodiles, and other reptiles are
                  considered “exotic” in the fashion industry—they're killed,
                  and their skins are made into handbags, shoes, and other
                  items.
                </p>
                <a href="javascript:void()" className="cmn-btn">
                  Take Action
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="nutritionbox1">
                <div className="thumb">
                  <img
                    src={require("../../assets/images/shopping-img12.png")}
                    alt=""
                  />
                </div>
                <h4>Wool and Shearling</h4>
                <p>
                  Sheep grow just enough wool to protect themselves from
                  temperature extremes. Wool is the hair from a lamb or sheep,
                  while shearling is the skin of a lamb with the fleece still
                  attached.
                </p>
                <a href="javascript:void()" className="cmn-btn">
                  Take Action
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="nutritionbox1">
                <div className="thumb">
                  <img
                    src={require("../../assets/images/shopping-img13.png")}
                    alt=""
                  />
                </div>
                <h4>Silk and Down Feathers</h4>
                <p>
                  Silk is the fiber that silkworms weave to make their
                  cocoons—it's sometimes used to make shirts and dresses. Down
                  is the soft layer of feathers closest to a bird's skin
                </p>
                <a href="javascript:void()" className="cmn-btn">
                  Take Action
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="sec3 nutrition-sec3 shopping-sec3 vegan-shopping-bg"
        style={{
          background: `url(${require("../../assets/images/shopping-bnr-1.png")}) center center no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>The vegan clothing brands you need to know about </h2>
              <p>
                There was a time not so long ago when vegan wardrobes were full
                of plastic-heavy alternatives to leather and wool; it's hard to
                find any material as durable and flexible as leather, and for a
                long time PVC was the best option of a pretty bad bunch.
              </p>
              <p>
                Thankfully, vegan shoppers no longer need to choose between
                sustainability, quality, comfort, and animal rights; the growing
                demand for eco-friendly alternatives to animal products has
                triggered a lot of exciting innovation in the clothing industry.
                Vegan-inspired bio plastics are proliferating, with brands using
                everything from mango, corn, and cactus to create animal-free,
                low carbon alternatives to leather.
              </p>
              <p>
                These days even where brands aren't 100% vegan, pressure from
                the vegan movement has encouraged sustainable brands to be more
                rigorous in the sourcing of their animal-derived materials,
                highlighting sustainability issues beyond animal welfare,
                including the use of carcinogenic metals in leather-tanning,
                over-grazing, and deforestation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Vegan_Clothing_Changes;
