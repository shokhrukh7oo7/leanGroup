import React, { Component } from "react";
import new1 from "../../assets/images/news1.png";
import new2 from "../../assets/images/news2.png";
import new3 from "../../assets/images/news3.png";
import logo from "../../assets/images/nav-logo.svg";
import vk from "../../assets/images/vk.svg";
import facebook from "../../assets/images/footer-facebook.svg";
import linkedin from "../../assets/images/footer-in.svg";
import "./Footer.scss";

export default class news extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="news-header">Новости</h1>

        <div className="news-cards">
          <div className="news-card">
            <img src={new1} alt="logo" />
            <p className="data">28.01.2022</p>
            <p className="new-paragraph">
              "ЛеанГрупп" серебряный призер EcoVadis!
            </p>
          </div>

          <div className="news-card">
            <img src={new2} alt="logo" />
            <p className="data">21.01.2022</p>
            <p className="new-paragraph">
              "ЛеанГрупп" серебряный призер EcoVadis!
            </p>
          </div>

          <div className="news-card">
            <img src={new3} alt="logo" />
            <p className="data">16.12.2021</p>
            <p className="new-paragraph">Туба, как вид упаковки</p>
          </div>
        </div>

        <button className="news-btn">Все новости</button>

        <div className="footer-header">
          <div className="footer-left">
            <img src={logo} alt="logo" />
          </div>

          <div className="footer-right">
            <img src={vk} alt="logo" />
            <img src={facebook} alt="logo" />
            <img src={linkedin} alt="logo" />
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-text">
            <h2 className="head">Продукция</h2>
            <p>Ламинатные тубы</p>
            <p>Экструзионные тубы</p>
            <p>Другая упаковка</p>
          </div>

          <div className="footer-text">
            <h2 className="head">Компания</h2>
            <p>О нас</p>
            <p>Наша команда</p>
            <p>Сертификаты</p>
          </div>

          <div className="footer-text">
            <h2 className="head">Разделы</h2>
            <p>Контакты</p>
            <p>Новости</p>
            <p>Вакансии</p>
          </div>

          <div className="footer-text">
            <div className="footer-top">
              <h2 className="head">Беларусь</h2>
              <p>+375 (17) 270 53 77</p>
              <p>+375 (17) 270 53 78</p>
            </div>
            <div className="footer-bottom">
              <h2 className="head">Москва</h2>
              <p>+7 (495) 280 73 44</p>
              <p>+7 (495) 280 73 44</p>
            </div>
          </div>

          <div className="footer-text">
            <div className="footer-top">
              <h2 className="head">Европа</h2>
              <p>+48 73 1111 044</p>
            </div>
            <div className="footer-bottom">
            <h2 className="head">Екатеринбург</h2>
              <p>+7 (343) 346 82 06</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
