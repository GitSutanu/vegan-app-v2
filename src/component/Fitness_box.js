import React from "react";

function Fitness_box({ trainer_img, trainer_name }) {
  return (
    <div>
      <div class="slider-box">
        <div class="thumb">
          <img src={trainer_img} alt="" />
          <div class="thumb-hvr">
            <a href="https://www.instagram.com/nimai_delgado/" target="blank">
              <img src={require("../assets/images/instagram.png")} alt="" />
            </a>
          </div>
        </div>
        <h4>{trainer_name}</h4>
      </div>
    </div>
  );
}

export default Fitness_box;
