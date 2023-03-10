import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row ftr-top">
          <div className="col-lg-2 text-center text-lg-start">
            <a href="/Home" className="ftr-logo">
              <img src={require("../assets/images/logo2.png")} alt="" />
            </a>
          </div>
          <div className="col-lg-7 col-md-12 ftr-top-mdl">
            <div className="row">
              <div className="col-md-4">
                <h4>About Us</h4>
                <ul>
                  <li>
                    <a href="javascript:void(0)">Our Mission</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Impact</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Discover</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">All Articles</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Eating Veg</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Work With Us</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h4>Take Action</h4>
                <ul>
                  <li>
                    <a href="javascript:void(0)">End Corporate Animal Abuse</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Volunteer</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Our Campaigns</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Chickens Deserve Better</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Fast Action Network</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Fundraise</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 cont-col">
                <h4>Contact us</h4>
                <ul>
                  <li>2553 E Musgrove Hwy Lake Odessa, Michigan(MI)</li>
                  <li>
                    <a href="tel:6165668212">Tollfree: (616) 566-8212</a>
                  </li>
                  <li>
                    <a href="mailto:info123@veganinfo.org">
                      info123@veganinfo.org
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 ftr-top-end">
            <h4>Join our global community</h4>
            <p>
              Sign up to our mailing list and connect with us on social media.
            </p>
            <form className="nw-latter">
              <input type="email" placeholder="Enter Your Email Here" />
              <input type="submit" defaultValue="Sign up" />
            </form>
          </div>
        </div>
        <div className="row ftr-btm align-items-center">
          <div className="col-lg-4">
            <p>© 2022 vegan.info | All rights reserved</p>
          </div>
          <div className="col-lg-4 ftr-social-link">
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
          <div className="col-lg-4">
            <ul>
              <li>
                <a href="javascript:void(0)">Cookies and privacy policy</a>
              </li>
              <li>
                <a href="javascript:void(0)">Suppliers</a>
              </li>
              <li>
                <a href="javascript:void(0)">Back to top</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
