import React from "react";
import Tabs from "react-responsive-tabs";
import "react-responsive-tabs/styles.css";
import Banner from "../../component/Banner";
import Fitness_box from "../../component/Fitness_box";
import Footer from "../../component/Footer";
import Header from "../../component/Header";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

/*Slick Setting for Footer Slider*/
var fintess_trainer_slider = {
  dots: false,
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const services = [
  {
    name: "Torre Washington", img: `${require("../../assets/images/tab-nav-img.png")}`, content_title: "AVITALITY guide for FREE", content_subtitle: "This bodybuilding guide is the PRIMING tool to help you build a solid foundation in your quest for a great physique.", content_property: `
  <ul class="cmn-list">
  <li>Introduction To Veganism</li>
  <li>45+ Simple Vegan Meals</li>
  <li>Fire-up Your Metabolism</li>
  <li>Reshape Your Physique</li>
  <li>8 Week Training Plan</li>
  <li>Videos For Every Exercise</li>
  <li>Built For Men &amp; Women</li>
</ul>`, sub_text: "Let's dig in, eat up, and go vegan with ease!"
  },
  {
    name: "Naturally Stefanie", img: "images/tab-nav-img.png", content_title: "GET STRONGER WITH NATURALLY STEFANIE", content_subtitle: "This bodybuilding guide is the PRIMING tool to help you build a solid foundation in your quest for a great physique.", content_property: `
<ul class="cmn-list">
<li>Introduction To Veganism</li>
<li>45+ Simple Vegan Meals</li>
<li>Fire-up Your Metabolism</li>
<li>Reshape Your Physique</li>
<li>8 Week Training Plan</li>
<li>Videos For Every Exercise</li>
<li>Built For Men &amp; Women</li>
</ul>`, sub_text: "Let's dig in, eat up, and go vegan with ease!"
  },
];
function getTabs() {
  return services.map((service, index) => ({
    title: (
      <div className="tab-nav-outer">
        <img src="images/tab-nav-img.png" alt="" />
        <h6>{service.name}</h6>
      </div>
    ),
    getContent: () => {
      return (
        <div className="resp-tabs-container hor_1">
          <div className="right_area_tab">
            <div className="coching-srvc-box">
              <div className="thumb">
                <img src={service.img} alt="" />
              </div>
              <h3>{service.content_title}</h3>
              <p>{service.content_subtitle}</p>
              <div className="row justify-content-center">
                <div className="col-md-10" dangerouslySetInnerHTML={{__html: service.content_property}}>
              </div>
              </div>
              <a href="https://linktr.ee/Torrelink" className="cmn-btn mb-3">
                GET Started
              </a>
              <p>{service.sub_text}</p>
            </div>
          </div>
        </div>
      );
    },
    /* Optional parameters */
    key: index,
    tabClassName: "tab",
    panelClassName: "panel",
  }));
}

function Nutrition_Fitness() {
  return (
    <div className="main_site">
      <Header />
      <Banner
        ban_img={require("../../assets/images/bnr2.png")}
        ban_head={"VEGAN NUTRITION FOR HEALTH & FITNESS"}
        ban_title={
          "We exist to end the abuse of animals raised for exploitation. But we cannot do it without you."
        }
      />

      <section
        className="sec1 nutrition-sec1"
        id="sec1"
        style={{
          background: `url(${require("../../assets/images/s1-bg.png")}) center center no-repeat`,
          backgroundSize: "100%",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 s1-left">
              <h2>Nutrition Following the Vegan Lifestyle</h2>
              <p>
                Though veganism is representative of a moral philosophy,
                applying it to your everyday life will entail dietary changes.
                Between plant and animal-based food, there is variety in
                nutrient composition. With this in mind, it is important to
                adopt a nutritionally adequate diet within the vegan lifestyle.
              </p>
              <p>
                There are particular nutrients that vegans are advised to pay
                close attention to in order to consume them at their RDA
                (recommended daily allowance). Some of these nutrients are
                Vitamin B12, D3 and iodine. The easiest way to guarantee enough
                of these nutrients is to consume a daily multivitamin. There are
                many vegan multivitamins you can find.
              </p>
            </div>
            <div className="col-md-5 s1-right">
              <figure>
                <img
                  src={require("../../assets/images/nutrition-img1.jpg")}
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section
        className="sec3 nutrition-sec3"
        style={{
          background: `url(${require("../../assets/images/nutrition-bg.jpg")}) center center no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>When transitioning to a vegan lifestyle</h2>
              <p>
                Aside from getting enough micronutrients such as the ones
                discussed above, getting enough macronutrients (protein,
                carbohydrates, and fat) must also be tended to. Whole plant
                foods come in many forms, some of which can be very high in
                volume, but very low in calories. Others can be low in volume
                but high in calories. If you find that your current non-vegan
                diet is sufficient in regards to bloodwork and overall
                wellbeing, match your micronutrient and macronutrient
                consumption to your original diet, using plant-based sources.
                For more information on vegan nutrition, please visit{" "}
                <a
                  className="inline-link"
                  href="https://veganhealth.org/"
                  target="_blank"
                >
                  https://veganhealth.org/
                </a>
              </p>
              <h4>
                If available, seek out a plant-based dietician to assist you in
                this process.
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className="nutrition-sec4">
        <div className="container">
          <h2>Vegan Fitness Inspirations</h2>
          <p>
            There is a misconception that vegans cannot gain or maintain muscle.
            Here are some excellent examples of vegan bodybuilders:
          </p>
          <div class="fitness-slider">
            {
              <Slider {...fintess_trainer_slider}>
                {
                  <Fitness_box
                    trainer_img={require("../../assets/images/fitness2.jpg")}
                    trainer_name={"Torre Washingtons"}
                  />
                }
                {
                  <Fitness_box
                    trainer_img={require("../../assets/images/fitness3.jpg")}
                    trainer_name={"Naturally Stefanie"}
                  />
                }
                {
                  <Fitness_box
                    trainer_img={require("../../assets/images/fitness4.jpg")}
                    trainer_name={"Brian Turner"}
                  />
                }
                {
                  <Fitness_box
                    trainer_img={require("../../assets/images/fitness5.jpg")}
                    trainer_name={"Jehina Malik"}
                  />
                }
                {
                  <Fitness_box
                    trainer_img={require("../../assets/images/fitness6.jpg")}
                    trainer_name={"Liliane Aguilar"}
                  />
                }
                {
                  <Fitness_box
                    trainer_img={require("../../assets/images/fitness7.jpg")}
                    trainer_name={"Conscious Muscle"}
                  />
                }
                {
                  <Fitness_box
                    trainer_img={require("../../assets/images/fitness8.jpg")}
                    trainer_name={"Hench Herbivore"}
                  />
                }
                {
                  <Fitness_box
                    trainer_img={require("../../assets/images/fitness1.jpg")}
                    trainer_name={"Nimai Delgado"}
                  />
                }
              </Slider>
            }
          </div>
        </div>
      </section>

      <section
        className="sec4 nutrition-sec5"
        style={{
          background: `url(${require("../../assets/images/s4-bg.png")}) center center no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div id="parentVerticalTab">
            <div className="row">
              <div className="col-lg-5 mb-4 mb-lg-0">
                <div className="top-content mb-4">
                  <h2>Vegan Coaching Services</h2>
                  <p>
                    Transitioning to a plant-based vegan diet can be challenging
                    and if you are struggling to make a lifestyle shift, let's
                    talk.
                  </p>
                </div>
              </div>
              <Tabs items={getTabs()}  tabsWrapperClass="resp-tabs-list hor_1" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Nutrition_Fitness;
