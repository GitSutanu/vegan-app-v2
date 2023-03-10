import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Banner from "../../component/Banner";
import Footer from "../../component/Footer";
import Header from "../../component/Header";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Each_Product from "../../component/Each_Product";
import Prd_list_filter from "../../component/Prd_list_filter";

function Vegan_Product_Listing() {
  /*Product Dynamic*/
  const [all_Product, set_Product] = useState([]);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://registration-b9a56-default-rtdb.firebaseio.com/Website_Project/veganinfo/All_Product.json`,
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
        set_Product(data);
      })
      .catch((error) => console.log("error", error));
  }, []);
  /*Product Dynamic*/

  /*Grid  And List Function*/
  function list() {
    document.body.classList.add("list_view");
  }
  function grid() {
    document.body.classList.remove("list_view");
  }
  /*Grid And List End*/

  /*Slick Setting for Footer Slider*/
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="main_site">
      <Header />
      <Banner
        ban_img={require("../../assets/images/bnr7.png")}
        ban_head={"All vegan-friendly Products"}
        ban_title={
          "You can purchase animal-free, vegan clothing, groceries and accessories the next time you shop."
        }
      />
      <section className="product-listing-sec" id="sec1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Prd_list_filter />
            </div>
            <div className="col-lg-9">
              <div className="products-sec">
                <div className="product-hedaing">
                  <div className="product-headng-lft">
                    <p>
                      <img
                        src={require("../../assets/images/bunny-img.png")}
                        alt=""
                      />
                      Cruelty free products
                    </p>
                  </div>
                  <div className="product-headng-right">
                    <p> Showing 1–9 of 2667 results</p>
                    <div id="btnContainer">
                      <button className="btn" onClick={() => list()}>
                        <FontAwesomeIcon icon="fa-solid fa-list" />
                      </button>
                      <button className="btn active" onClick={() => grid()}>
                        <FontAwesomeIcon icon="fa-solid fa-table-cells-large" />
                      </button>
                    </div>
                    <form>
                      <select className="form-select">
                        <option>Short By: Popularity</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </form>
                  </div>
                </div>
                <div className="product-sec-bttm">
                  <div className="row prd_row">
                    {all_Product.map((item) => {
                      return <Each_Product item={item} />;
                    })}
                  </div>
                  <div className="pagination">
                    <ul>
                      <li className="prv">
                        <a href="#">
                          <FontAwesomeIcon icon="fa-solid fa-arrow-left-long" />
                          previous{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">...</a>
                      </li>
                      <li>
                        <a href="#">200</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          Next
                          <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
                  and may label it suitable for vegans (Danny pitch in US
                  experience).
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
                    src={require("../../assets/images/shopping-img3.jpg")}
                    alt=""
                  />
                </div>
                <h4>drinks</h4>
                <p>
                  If you drink alcohol, some drinks aren’t vegan due to
                  ingredients such as carmine, eggs, etc. Another non vegan
                  component is the filtration system which can include
                  processing aids such as isinglass.
                </p>
                <a href="#" className="cmn-btn">
                  Beauty Brands
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-listing-slider">
        <div className="container">
          <div className="cmn-h2 text-center">
            <h2>Related Vegan products</h2>
          </div>
          <div className="product-slider">
            <Slider {...settings}>
              {all_Product.map((item) => {
                return <Each_Product item={item} />;
              })}
            </Slider>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Vegan_Product_Listing;
