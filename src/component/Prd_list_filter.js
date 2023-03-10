import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Prd_list_filter() {
  return (
    <div className="product-filter-sec">
      <div className="filter-headng">
        <h4>
          <FontAwesomeIcon icon="fa-solid fa-eye-slash" />
          Hide Filter{" "}
        </h4>
      </div>
      <div className="shop-by-inner">
        <h4>Shop by Category </h4>
        <div className="shop-frm">
          <label className="chck-box">
            All Products
            <input type="checkbox" defaultChecked="checked" />
            <span className="checkmark" />
            <a href="javascript:void(0)" class="plus-icon">
              <img src={require("../assets/images/plus-icon.png")} alt="" />
            </a>
          </label>
          <label className="chck-box">
            Lifestyle
            <input type="checkbox" />
            <span className="checkmark" />
            <a href="javascript:void(0)" class="plus-icon">
              <img src={require("../assets/images/plus-icon.png")} alt="" />
            </a>
          </label>
          <label className="chck-box">
            Munchies
            <input type="checkbox" />
            <span className="checkmark" />
            <a href="javascript:void(0)" class="plus-icon">
              <img src={require("../assets/images/plus-icon.png")} alt="" />
            </a>
          </label>
          <label className="chck-box">
            Pantry
            <input type="checkbox" />
            <span className="checkmark" />
            <a href="javascript:void(0)" class="plus-icon">
              <img src={require("../assets/images/plus-icon.png")} alt="" />
            </a>
          </label>
          <label className="chck-box">
            Fruits &amp; Vegetables
            <input type="checkbox" />
            <span className="checkmark" />
            <a href="javascript:void(0)" class="plus-icon">
              <img src={require("../assets/images/plus-icon.png")} alt="" />
            </a>
          </label>
          <label className="chck-box">
            Clothes
            <input type="checkbox" />
            <span className="checkmark" />
            <a href="javascript:void(0)" class="plus-icon">
              <img src={require("../assets/images/plus-icon.png")} alt="" />
            </a>
          </label>
        </div>
      </div>
      <div className="shop-by-inner">
        <h4>Shop by Brand</h4>
        <div className="shop-frm">
          <label className="chck-box">
            All Clothing Brands
            <input type="checkbox" />
            <span className="checkmark" />
            <a href="javascript:void(0)" class="plus-icon">
              <img src={require("../assets/images/plus-icon.png")} alt="" />
            </a>
          </label>
          <label className="chck-box">
            All Grocery Brands
            <input type="checkbox" />
            <span className="checkmark" />
            <a href="javascript:void(0)" class="plus-icon">
              <img src={require("../assets/images/plus-icon.png")} alt="" />
            </a>
          </label>
          <label className="chck-box">
            Sprouts Farmers Market
            <input type="checkbox" />
            <span className="checkmark" />
            <a href="javascript:void(0)" class="plus-icon">
              <img src={require("../assets/images/plus-icon.png")} alt="" />
            </a>
          </label>
          <label className="chck-box">
            Mollie Stone's Markets
            <input type="checkbox" />
            <span className="checkmark" />
            <a href="javascript:void(0)" class="plus-icon">
              <img src={require("../assets/images/plus-icon.png")} alt="" />
            </a>
          </label>
          <label className="chck-box">
            Rainbow Grocery
            <input type="checkbox" />
            <span className="checkmark" />
            <a href="javascript:void(0)" class="plus-icon">
              <img src={require("../assets/images/plus-icon.png")} alt="" />
            </a>
          </label>
          <label className="chck-box">
            Farmogo
            <input type="checkbox" />
            <span className="checkmark" />
            <a href="javascript:void(0)" class="plus-icon">
              <img src={require("../assets/images/plus-icon.png")} alt="" />
            </a>
          </label>
          <label className="chck-box">
            bb Combo
            <input type="checkbox" />
            <span className="checkmark" />
            <a href="javascript:void(0)" class="plus-icon">
              <img src={require("../assets/images/plus-icon.png")} alt="" />
            </a>
          </label>
          <label className="chck-box">
            Gus's Community Market
            <input type="checkbox" />
            <span className="checkmark" />
            <a href="javascript:void(0)" class="plus-icon">
              <img src={require("../assets/images/plus-icon.png")} alt="" />
            </a>
          </label>
          <label className="chck-box">
            Organic
            <input type="checkbox" />
            <span className="checkmark" />
            <a href="javascript:void(0)" class="plus-icon">
              <img src={require("../assets/images/plus-icon.png")} alt="" />
            </a>
          </label>
          <label className="chck-box">
            Simply Fresh
            <input type="checkbox" />
            <span className="checkmark" />
            <a href="javascript:void(0)" class="plus-icon">
              <img src={require("../assets/images/plus-icon.png")} alt="" />
            </a>
          </label>
          <label className="chck-box">
            Gus's Community Market
            <input type="checkbox" />
            <span className="checkmark" />
            <a href="javascript:void(0)" class="plus-icon">
              <img src={require("../assets/images/plus-icon.png")} alt="" />
            </a>
          </label>
          <label className="chck-box">
            Lucky Supermarkets
            <input type="checkbox" />
            <span className="checkmark" />
            <a href="javascript:void(0)" class="plus-icon">
              <img src={require("../assets/images/plus-icon.png")} alt="" />
            </a>
          </label>
          <label className="chck-box">
            SV Agri Carisma
            <input type="checkbox" />
            <span className="checkmark" />
            <a href="javascript:void(0)" class="plus-icon">
              <img src={require("../assets/images/plus-icon.png")} alt="" />
            </a>
          </label>
          <label className="chck-box">
            Tadaa
            <input type="checkbox" />
            <span className="checkmark" />
            <a href="javascript:void(0)" class="plus-icon">
              <img src={require("../assets/images/plus-icon.png")} alt="" />
            </a>
          </label>
        </div>
        <a href="#">
          <p>Show more brands</p>
        </a>
      </div>
    </div>
  );
}

export default Prd_list_filter;
