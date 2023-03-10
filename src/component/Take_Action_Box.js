import React from "react";

function Take_Action_Box() {
  return (
    <div className="col-md-4">
      <div className="nutritionbox1">
        <div className="thumb">
          <img src={require("../../assets/images/shopping-img1.png")} alt="" />
        </div>
        <h4>Cosmetics</h4>
        <p>
          Animals have been used to test cosmetics across the board. Luckily,
          the practice has been met with negative feedback in recent years,
          meaning that many cosmetic brands make it clear that their product is
          vegan.
        </p>
        <a href="javascript:void(0)" className="cmn-btn">
          Beauty Brands
        </a>
      </div>
    </div>
  );
}

export default Take_Action_Box;
