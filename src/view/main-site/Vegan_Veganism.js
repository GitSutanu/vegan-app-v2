import React, { useEffect, useState } from "react";
import AgniastVenLeft from "../../component/AgniastVenLeft";
import Banner from "../../component/Banner";
import Footer from "../../component/Footer";
import Header from "../../component/Header";

function Vegan_Veganism() {
  /*Aginast Venda Dynamic*/
  const [all_AgniastVenLeft, set_AgniastVenLeft] = useState([]);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://registration-b9a56-default-rtdb.firebaseio.com/Website_Project/veganinfo/againts_vandalism.json",
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
        set_AgniastVenLeft(data);
      })
      .catch((error) => console.log("error", error));
  }, []);
  /*Aginast Venda Dynamic*/

  return (
    <div className="main_site">
      <Header />
      <Banner
        ban_img={require("../../assets/images/bnr5.png")}
        ban_head={"Every Argument Against Veganism"}
        ban_title={
          "We aim to end the abuse of animals raised for exploitation. But we can't do it without you."
        }
      />

      <section id="against-vegan-sec" className="against-vegan-sec cmn-gap">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-5">
              <div className="against-vegan-lft-sec">
                <div className=" s1-right">
                  <figure>
                    <img
                      src={require("../../assets/images/cow-poster-img.png")}
                      alt=""
                    />
                  </figure>
                </div>
                <div className="against-vegan-lft-sec-txt">
                  <div className="cmn-h3">
                    <h3>
                      Debunking Every Argument Against Veganism With Logic And
                      Reason
                    </h3>
                  </div>
                  <div className="d-flex justify-content-between dwnload-sec">
                    <div className="cmn-h3 green-h3">
                      <h3>PRICE: $9.99</h3>
                    </div>
                    <div className="cmn-h3 green-h3">
                      <h3>
                        <a href="#">
                          <img
                            src={require("../../assets/images/dwnld-btn.png")}
                            alt=""
                          />
                          PDF (2MB) file
                        </a>
                      </h3>
                    </div>
                  </div>
                  <p>
                    When identifying as an ethical vegan, whether you are just
                    an ethical vegan or vegan activist, you will often be
                    subject to questioning by non-vegans. Such a situation
                    offers the opportunity to represent veganism as a robust and
                    logical position. In an effort to help ensure vegans have
                    some of the most airtight responses to common anti-vegan
                    arguments, I have decided to put together this book. This
                    book is meant for new vegans, experienced vegans, and vegan
                    activists who possess the goal of refining their ability to
                    respond to anti-vegan arguments.{" "}
                  </p>
                  <a href="#" className="cmn-btn">
                    buy now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="against-vegan-right-sec">
                {all_AgniastVenLeft.map((item) => {
                  return <AgniastVenLeft item={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Vegan_Veganism;
