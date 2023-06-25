import React, { Component } from "react";
import Slider from "react-slick";
import "./Header.scss";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section id="header">
        <div className="container">
          <div className="header">
            <div>
              <Slider {...settings}>
                <div className="owl-intro">
                  <p className="owl-start">LEANGROUP - тубы и этикетки</p>
                  <h1 className="owl-header">Ламинатные тубы</h1>
                  <p className="owl-paragraph">
                    Используются для производства зубных паст. Широко
                    применяются в сегменте косметики, пищевой индустрии,
                    парафармацевтике, бытовой химии и DIY (Do-it-Yourself).
                  </p>
                  <button className="btn">Каталог</button>
                </div>
                <div>
                  <div className="owl-intro">
                    <p className="owl-start">LEANGROUP - тубы и этикетки</p>
                    <h1 className="owl-header">Экструзионные тубы</h1>
                    <p className="owl-paragraph">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Id labore pariatur explicabo et placeat architecto facilis
                      nisi eos commodi blanditiis. (Do-it-Yourself).
                    </p>
                    <button className="btn">Каталог</button>
                  </div>
                </div>
                <div>
                  <div className="owl-intro">
                    <p className="owl-start">LEANGROUP - тубы и этикетки</p>
                    <h1 className="owl-header">Другая упаковка</h1>
                    <p className="owl-paragraph">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ut et ipsam esse, alias dolore ipsa eius. Eos recusandae
                      quisquam reprehenderit optio. (Do-it-Yourself).
                    </p>
                    <button className="btn">Каталог</button>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
