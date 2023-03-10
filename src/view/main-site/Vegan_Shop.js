import React, { useEffect, useState } from "react";
import Banner from "../../component/Banner";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import Non_Vegan_Ingridience from "../../component/Non_Vegan_Ingridience";

function Vegan_Shop() {
  /*Non_Vegan_Ingridience Dynamic*/
  const [all_Nonveganitem, set_Nonveganitem] = useState([]);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://registration-b9a56-default-rtdb.firebaseio.com/Website_Project/veganinfo/Non_Vegan_Ingridience.json",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        let data = [];
        for (const key in result) {
          data.push({
            ...result[key],
            id: key,
          });
        }
        set_Nonveganitem(data);
      })
      .catch((error) => console.log("error", error));
  }, []);
  /*Non_Vegan_Ingridience Dynamic*/

  return (
    <div className="main_site">
      <Header />
      <Banner
        ban_img={require("../../assets/images/bnr3.png")}
        ban_head={"Information For VEGAN shopping"}
        ban_title={
          "Once you become familiar with what ingredients are vegan, shopping for groceries becomes second nature."
        }
      />
      <section
        className="sec1 nutrition-sec1 shopping-sec2"
        id="sec1"
        style={{
          background: `url(${require("../../assets/images/s1-bg.png")}) center center no-repeat`,
          backgroundSize: "100%",
        }}
      >
        <div className="container">
          <div className="nutrition-sec4">
            <h2>Non-vegan ingredients</h2>
            <p>
              There are clear ingredients to avoid that are easy to spot, as
              well as helpful labeling listed on packaging. Though,
              <br /> there are some non-vegan ingredients occasionally found in
              products, or even items that are vegan, <br />
              but just haven't included the label.
            </p>
            <div className="fitness-slider row">
              {all_Nonveganitem.map((item) => {
                return <Non_Vegan_Ingridience item={item} />;
              })}
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-7 s1-left">
              <h2>Cruelty-free doesn't necessarily mean vegan</h2>
              <p>
                This label just means that the product hasn't been tested on
                animals. Lactose-free doesn't mean vegan. Some brands will
                remove lactose from dairy products, but this doesn't remove the
                process enforced upon a non-human animal.
              </p>
              <p>
                "May contain" or "produced in a facility that processes milk"
                doesn't mean that the product is not vegan. This is to legally
                protect a manufacturer in terms of allergens. Processing errors
                in facilities can happen, but if it says "may contain milk" it
                is not an ingredient that is part of the product.
              </p>
            </div>
            <div className="col-md-5 s1-right">
              <figure>
                <img
                  src={require("../../assets/images/shopping-img4.jpg")}
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
                    src={require("../../assets/images/shopping-img1.jpg")}
                    alt=""
                  />
                </div>
                <h4>Cosmetics</h4>
                <p>
                  Animals have been used to test cosmetics across the board.
                  Luckily, the practice has been met with negative feedback in
                  recent years, meaning that many cosmetic brands make it clear
                  that their product is vegan.
                </p>
                <a href="#" className="cmn-btn">
                  Beauty Brands
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="nutritionbox1">
                <div className="thumb">
                  <img
                    src={require("../../assets/images/shopping-img2.jpg")}
                    alt=""
                  />
                </div>
                <h4>Cleaning Products</h4>
                <p>
                  There are brands that have a fully vegan line. In the UK for
                  example, grocery stores will have their own line of products
                  and may label it suitable for vegans.
                </p>
                <a href="#" className="cmn-btn">
                  View Brands
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="nutritionbox1">
                <div className="thumb">
                  <img
                    src={require("../../assets/images/shopping-img3.jpg")}
                    alt=""
                  />
                </div>
                <h4>drinks</h4>
                <p>
                  If you drink alcohol, some drinks are not vegan due to
                  ingredients such as carmine, eggs, etc. Another non-vegan
                  component is the filtration system which can include
                  processing aids such as isinglass.
                </p>
                <a href="#" className="cmn-btn">
                  visit Barnivore
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="sec3 nutrition-sec3 shopping-sec3"
        style={{
          background: `url(${require("../../assets/images/shopping-bnr.png")}) center center no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>There are some toiletries that are not always vegan</h2>
              <ul className="cmn-list2">
                <li>
                  A lot of toiletries are made by companies who test on animals.
                  Look for the cruelty-free/vegan labels when shopping.
                </li>
                <li>
                  Condoms are not always vegan, as they can include casein.
                  There are many alternatives available, just search for
                  specifically vegan ones.
                </li>
                <li>
                  Floss. Occasionally in the ingredients, it can include
                  beeswax.
                </li>
                <li>
                  Shampoo/Conditioner. All body or hair wash can potentially
                  include ingredients like milk and honey.
                </li>
                <li>
                  Soap. This can also sometimes include honey or milk. Including
                  this, some soap incorporates animal fats.
                </li>
              </ul>
              <p>
                To make shopping easier, find vegan brands in your area, or
                grocery stores that clearly label their products. All toiletries
                including razors could be sold by companies who still test their
                formulas on animals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Vegan_Shop;
