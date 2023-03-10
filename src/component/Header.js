import React from "react";
import { NavLink } from "react-router-dom";


function Header() {

  var body = document.body;
  body.classList.remove("open-nav");
  
  function navtoggle(toggle_check) {
    if(toggle_check){
      document.body.classList.toggle("open-nav");
      document.getElementById("navbarSupportedContent").classList.toggle("show");
    }
    else{
      document.body.classList.toggle("open-nav");
      document.getElementById("navbarSupportedContent").classList.toggle("show");
    }
    
  }


  return (
    <header className="main-head">
      <div className="container">
        <div className="header-area">
          <div className="logo">
            <a href="/Home">
              <img src={require("../assets/images/logo2.png")} alt="logo" />
            </a>
          </div>
          <div className="navigation">
            <nav className="navbar navbar-expand-lg">
              <button
                onClick={() => navtoggle(true)}
                className="navbar-toggler navbar-toggler-main"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="stick" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <button
                onClick={() => navtoggle(false)}
                  className="navbar-toggler navbar-toggler-main"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="stick" />
                </button>
                <ul className="navbar-nav ms-auto">
                  <li>
                    <NavLink to="/home">Why Go Vegan?</NavLink>
                  </li>
                  <li>
                    <NavLink to="/vegan-veganism">
                      Arguments Against Veganism
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/nutrition-fitness">
                      Nutrition &amp; Fitness
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/vegan-shop">Vegan Shopping</NavLink>
                  </li>
                  <li>
                    <NavLink to="/eating-resturent">
                      Eating Out At Restaurants
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            <button
              className="navbar-toggler"
              id="navoverlay"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
