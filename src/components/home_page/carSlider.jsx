import React from "react";
import "../../css/home_page/Cars.css";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";

const settings = {
  fade: true,
  speed: 3000,
  autoplaySpeed: 4000,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
};

export default function CarSlider() {
  return (
    <section className="p-0 hero__slider-section">
      <Slider {...settings} className="hero__slider">
        <div className="slider__item slider__item-01 mt0">
          <Container>
            <div className="slider__content ">
              <h1 class="display-3 q-1">الاستاذ / هشام سلطان </h1>
              <h1 class="display-3 q-1">المحامي بالنقض</h1>
              <button className="btn reserve__btn mt-4">
              <a href="tel:01000192918" >  رقم الهاتف </a>  </button>
              <br />
          
            </div>
          </Container>
        </div>
        <div className="slider__item slider__item-02 mt0">
          <Container>
            <div className="slider__content ">
            <h1 class="display-3 q-1">الاستاذ / هشام سلطان </h1>
              <h1 class="display-3 q-1">المحامي بالنقض</h1>
              <button className="btn reserve__btn mt-4">
              <a href="tel:01000192918" >  رقم الهاتف </a>  </button>
             
            </div>
          </Container>
        </div>
  
      </Slider>
    </section>
  );
}
