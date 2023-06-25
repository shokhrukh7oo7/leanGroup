import React, { Component } from "react";
import Slider from "react-slick";
import owl1 from "../../assets/images/owl-1.svg";
import owl2 from "../../assets/images/owl-2.png";
import owl3 from "../../assets/images/owl-3.svg";
import owl4 from "../../assets/images/owl-4.svg";
import owl5 from "../../assets/images/owl-5.svg";
import "./Sertificate.scss";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 845,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section>
        <div className="container">
          <div>
            <h2 className="owl-heading">
              {" "}
              Качество продукции подтверждают{" "}
              <span className="owl-span">сертификаты</span>
            </h2>
            <Slider {...settings}>
              <div>
                <img src={owl1} alt="" />
              </div>
              <div>
                <img src={owl2} alt="" />
              </div>
              <div>
                <img src={owl3} alt="" />
              </div>
              <div>
                <img src={owl4} alt="" />
              </div>
              <div>
                <img src={owl5} alt="" />
              </div>
              <div>
                <img src={owl3} alt="" />
              </div>
              <div>
                <img src={owl5} alt="" />
              </div>
              <div>
                <img src={owl2} alt="" />
              </div>
              <div>
                <img src={owl4} alt="" />
              </div>
              <div>
                <img src={owl1} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
