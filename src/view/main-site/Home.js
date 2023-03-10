import React from "react";
import Banner from "../../component/Banner";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import CustomHomeSlider from "../../component/CustomHomeSlider";


function Home() {
  return (
    <div className="main_site">
      <Header />
      <Banner
        ban_img={require("../../assets/images/bnr.png")}
        ban_head={"Join us to help change the lives of animals!"}
        ban_title={
          "Every day trillions of animals are experiencing unbearable cruelty. We tackle the root causes of their suffering so that we make the biggest difference to their lives."
        }
      />

      <section
        className="sec1"
        id="sec1"
        style={{
          background: `url(${require("../../assets/images/s1-bg.png")}) center center no-repeat`,
          backgroundSize: "100%",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 s1-left">
              <h2>Why Go Vegan?</h2>
              <p>
                With the growing discourse concerning veganism, there seems to
                be many reasons to adopt the philosophy - from reasons related
                to health, zoonotic disease prevention, the environment, and
                animal rights. Though, fundamentally, veganism has always been a
                movement designed to promote the rights of non-human animals.
              </p>
              <p>
                Presently and throughout history, non-human animals have been
                viewed as commodities and resources for the human species to
                exploit for our own benefit, whether it be for food consumption,
                clothing, entertainment, animal experimentation, etc. The
                largest threat to animal rights today is the mass breeding,
                exploitation and killing of animals for food consumption,
                amounting to trillions of animals being slaughtered every year.
                We must ask ourselves, what reasons do we have to inflict such
                exploitation upon non-human animals? If it can be demonstrated
                that the human species can survive, if not thrive, without the
                consumption and use of animals and their byproducts, (covered in
                the nutrition section below) what justification do we have to
                perpetuate the mass slaughter of trillions of sentient beings?
              </p>
              <p>
                <b>
                  Most notable arguments in favor of using animals for our
                  benefit will be comprehensively covered in the section below
                  titled, “Arguments Against Veganism.” However, below we will
                  highlight the most compelling reason to go vegan today.
                </b>
              </p>
            </div>
            <div className="col-md-5 s1-right">
              <figure>
                <img src={require("../../assets/images/img1.jpg")} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="sec2">
        <div className="container">
          <CustomHomeSlider />
        </div>
      </section>

      <section
        className="sec3"
        style={{
          background: `url(${require("../../assets/images/s3-bg.png")}) center center no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>Animal Rights As a Logical Extension of human rights</h2>
              <p>
                Imagine a world in which humans are bred for the purposes that
                animals are bred for today. For example, humans nonconsensually
                being used for food consumption, clothing, entertainment,
                experimentation, etc. Presumably, most human beings would take
                moral issue with such practices. If we take issue with these
                acts against humans exclusively, there must be a difference or
                set of differences between humans and animals such that the
                practice is justifiable in the human context, but not the animal
                context. Assuming one holds this differential attitude, what are
                some differences between humans and animals which could justify
                this difference in treatment?
              </p>
              <h4>
                Some may say that animals possess lower intelligence than human
                beings. What follows from this?
              </h4>
              <p>
                Well, that will depend on what a person means by intelligence.
                For example, one may define intelligence in this case as the
                capacity to understand right from wrong. There exist people with
                specific cognitive conditions inhibiting their ability to
                understand right from wrong. If this is how a person chooses to
                define intelligence, in order to be logically consistent, they
                must view it as morally permissible to treat humans with such
                inhibitions in the way that we treat animals today. This would
                mean that this person finds it ethical to breed, exploit, and
                slaughter humans with such inhibitions for food, clothing,
                experimentation etc. Most would find this view abhorrent and
                incompatible with a general concept of human rights.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="sec4"
        style={{
          background: `url(${require("../../assets/images/s4-bg.png")}) center center no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="s4-content">
            <h2>This logical consistency test can be applied</h2>
            <p>
              to any trait or set of traits one names in trying to morally
              differentiate between humans and non-human animals. Here lies the
              most compelling reason to go vegan. Assuming one values human
              rights, it is remarkably difficult to give reasons for oppressing
              animals, which we would accept when applied to a human context.
              Therefore, in an effort to avoid hypocrisy, one should view animal
              rights as a logical extension of human rights.
            </p>
            <a href="#" className="cmn-btn">
              Take action
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
