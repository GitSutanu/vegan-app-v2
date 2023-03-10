import React, { Component } from "react";
import Slider from "react-slick";

export default class CustomHomeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div className="tab-slider">
        <div className="slider-for">
          <Slider
            asNavFor={this.state.nav2}
            ref={(slider) => (this.slider1 = slider)}
            arrows={false}
            autoplay={true}
          >
            <div>
              <div className="video-ovarlay">
                <img src={require("../assets/images/slider5.jpg")} alt="" />
              </div>
              <a
                data-fancybox=""
                href="https://youtu.be/yAoLSRbwxL8"
                className="play-btn"
              >
                <img src={require("../assets/images/play.png")} alt="" />
              </a>
              <h2>Dominion (Animal Ethics)</h2>
              <p>
                Video not loading? Watch Dominion on <a href="#">YouTube!</a>
              </p>
              <div className="video-btm-icon">
                <ul>
                  <li>
                    <a data-fancybox="" href="https://youtu.be/yAoLSRbwxL8">
                      <img src={require("../assets/images/ebd.png")} alt="" />
                      <h5>Embed</h5>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        src={require("../assets/images/download.png")}
                        alt=""
                      />
                      <h5>Download</h5>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="video-ovarlay">
                <img src={require("../assets/images/slider4.jpg")} alt="" />
              </div>
              <a
                data-fancybox=""
                href="https://youtu.be/yAoLSRbwxL8"
                className="play-btn"
              >
                <img src={require("../assets/images/play.png")} alt="" />
              </a>
              <h2>Earthlings (Animal Ethics)</h2>
              <p>
                Video not loading? Watch Dominion on <a href="#">YouTube!</a>
              </p>
              <div className="video-btm-icon">
                <ul>
                  <li>
                    <a data-fancybox="" href="https://youtu.be/yAoLSRbwxL8">
                      <img src={require("../assets/images/ebd.png")} alt="" />
                      <h5>Embed</h5>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={require("../assets/images/download.png")} alt="" />
                      <h5>Download</h5>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="video-ovarlay">
                <img src={require("../assets/images/slider3.jpg")} alt="" />
              </div>
              <a
                data-fancybox=""
                href="https://youtu.be/yAoLSRbwxL8"
                className="play-btn"
              >
                <img src={require("../assets/images/play.png")} alt="" />
              </a>
              <h2>The Game Changers (Health)</h2>
              <p>
                Video not loading? Watch Dominion on <a href="#">YouTube!</a>
              </p>
              <div className="video-btm-icon">
                <ul>
                  <li>
                    <a data-fancybox="" href="https://youtu.be/yAoLSRbwxL8">
                      <img src={require("../assets/images/ebd.png")} alt="" />
                      <h5>Embed</h5>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={require("../assets/images/download.png")} alt="" />
                      <h5>Download</h5>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="video-ovarlay">
                <img src={require("../assets/images/slider2.jpg")} alt="" />
              </div>
              <a
                data-fancybox=""
                href="https://youtu.be/yAoLSRbwxL8"
                className="play-btn"
              >
                <img src={require("../assets/images/play.png")} alt="" />
              </a>
              <h2>Cowspiracy (Environment)</h2>
              <p>
                Video not loading? Watch Dominion on <a href="#">YouTube!</a>
              </p>
              <div className="video-btm-icon">
                <ul>
                  <li>
                    <a data-fancybox="" href="https://youtu.be/yAoLSRbwxL8">
                      <img src={require("../assets/images/ebd.png")} alt="" />
                      <h5>Embed</h5>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={require("../assets/images/download.png")} alt="" />
                      <h5>Download</h5>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="video-ovarlay">
                <img src={require("../assets/images/slider1.jpg")} alt="" />
              </div>
              <a
                data-fancybox=""
                href="https://youtu.be/yAoLSRbwxL8"
                className="play-btn"
              >
                <img src={require("../assets/images/play.png")} alt="" />
              </a>
              <h2>Seaspiracy (Environment)</h2>
              <p>
                Video not loading? Watch Dominion on <a href="#">YouTube!</a>
              </p>
              <div className="video-btm-icon">
                <ul>
                  <li>
                    <a data-fancybox="" href="https://youtu.be/yAoLSRbwxL8">
                      <img src={require("../assets/images/ebd.png")} alt="" />
                      <h5>Embed</h5>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src={require("../assets/images/download.png")} alt="" />
                      <h5>Download</h5>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Slider>
        </div>
        <div className="slider-nav">
          <Slider
            asNavFor={this.state.nav1}
            ref={(slider) => (this.slider2 = slider)}
            slidesToShow={5}
            swipeToSlide={true}
            focusOnSelect={true}
            arrows ={false}
            responsive ={
              [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow:3,
                    }
                  },
                  {
                    breakpoint: 991,
                    settings: {
                      slidesToShow: 2,
                    }
                  },
                  {
                    breakpoint: 767,
                    settings: {
                      centerPadding: '0px',
                      slidesToShow: 1,
                      arrows: true,
                    }
                  }
              ]
            }
          >
            <div>
              <div className="slider-nav-img">
                <img src={require("../assets/images/slider5.jpg")} alt="" />
                <img className="nav-play-img" src={require("../assets/images/play.png")} alt="" />
              </div>
              <h5>Dominion (Animal Ethics)</h5>
            </div>
            <div>
              <div className="slider-nav-img">
                <img src={require("../assets/images/slider4.jpg")} alt="" />
                <img className="nav-play-img" src={require("../assets/images/play.png")} alt="" />
              </div>
              <h5>Earthlings (Animal Ethics)</h5>
            </div>
            <div>
              <div className="slider-nav-img">
                <img src={require("../assets/images/slider3.jpg")} alt="" />
                <img className="nav-play-img" src={require("../assets/images/play.png")} alt="" />
              </div>
              <h5>The Game Changers (Health)</h5>
            </div>
            <div>
              <div className="slider-nav-img">
                <img src={require("../assets/images/slider2.jpg")} alt="" />
                <img className="nav-play-img" src={require("../assets/images/play.png")} alt="" />
              </div>
              <h5>Cowspiracy (Environment)</h5>
            </div>
            <div>
              <div className="slider-nav-img">
                <img src={require("../assets/images/slider1.jpg")} alt="" />
                <img className="nav-play-img" src={require("../assets/images/play.png")} alt="" />
              </div>
              <h5>Seaspiracy (Environment)</h5>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
