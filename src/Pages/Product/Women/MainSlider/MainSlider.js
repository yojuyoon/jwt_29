import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import "./MainSlider.scss";

class MainSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
    };

    return (
      <div className="MainSlider">
        <Slider {...settings}>
          <div>
            <img
              src="http://img.29cm.co.kr/next-product/2020/07/24/c7b154eb4ff94dd5b60ee5c186971998_20200724171412.jpg?width=2000"
              alt="slide"
            />
          </div>
          <div>
            <img
              src="http://img.29cm.co.kr/next-product/2020/07/24/113795129129428baa588ec8440b7073_20200724171543.jpg?width=2000"
              alt="slide"
            />
          </div>
          <div>
            <img
              src="http://img.29cm.co.kr/next-product/2020/07/24/156d0117d6a242be988d2a4a2fe71a4a_20200724164951.jpg?width=2000"
              alt="slide"
            />
          </div>
          <div>
            <img
              src="http://img.29cm.co.kr/next-product/2020/07/24/5b14e73c829741e492eed7ef3c361e57_20200724171437.jpg?width=2000"
              alt="slide"
            />
          </div>
          <div>
            <img
              src="http://img.29cm.co.kr/next-product/2020/07/24/8ff53e8a913040a6aed67cbd691fc65d_20200724171353.jpg?width=2000"
              alt="slide"
            />
          </div>
          <div>
            <img
              src="http://img.29cm.co.kr/next-product/2020/07/24/7dc53d82d9d241e08d33366bfdbf376a_20200724165143.jpg?width=2000"
              alt="slide"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default MainSlider;
