import React, { Component } from "react";
import NavLogo from "../../assets/images/nav-logo.svg";
import "./Nav.scss";

export default class Nav extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <section id="navbar-nav">
        <div className="container">
          <div className="navbar">
            <nav>
              <a href="index.html">
                <img src={NavLogo} alt="" />
              </a>
            </nav>

            <div>
              <ul
                id="navbar"
                className={this.state.clicked ? "#navbar active" : "#navbar"}
              >
                <li>
                  <a className="active" href="index.html">
                    Продукция
                  </a>
                </li>
                <li>
                  <a href="index.html">Сертификаты</a>
                </li>
                <li>
                  <a href="index.html">Наша команда</a>
                </li>
                <li>
                  <a href="index.html">О нас</a>
                </li>
                <li>
                  <a href="index.html">Новости</a>
                </li>
                <li>
                  <a href="index.html">Вакансии</a>
                </li>
                <li>
                  <a href="index.html">Контакты</a>
                </li>
              </ul>
            </div>

            <div id="mobile" onClick={this.handleClick}>
              <i
                id="bar"
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
