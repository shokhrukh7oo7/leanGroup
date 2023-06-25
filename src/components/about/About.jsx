import React, { Component } from "react";
import video from "../../assets/images/video-player.png";
import "./About.scss";

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <h1 className="about-header">
            О компании <span>LEANGROUP</span>
          </h1>
          <div className="about-start">
            <div className="player">
              <img src={video} alt="" />
            </div>
            <div className="player-title">
              Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на
              сегодняшний день является ведущей компанией по производству
              ламинатных и экструзионных туб. <br /> <br /> Имея две технологии
              – для производства ламинатных и экструзионных туб, мы предлагаем
              вам широкий спектр возможностей. Большим преимуществом является
              собственный печатный цех в ламинате и in-line печать в экструзии с
              возможностью различных дополнительных опций декора. Особое
              внимание уделяется работе с поставщиками для контроля и
              поддержания качества производимой нами продукции. <br /> <br /> С
              января 2018 года компания стала членом Европейской Ассоциации
              производителей туб (ETMA), что подтверждает сильную позицию бренда
              и на рынке Европы.
            </div>
          </div>
        </div>
      </section>
    );
  }
}
