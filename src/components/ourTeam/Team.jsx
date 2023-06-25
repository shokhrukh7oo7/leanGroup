import React, { Component } from "react";
import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team3.png";
import team4 from "../../assets/images/team4.png";
import team5 from "../../assets/images/team5.png";
import "./Team.scss";

export default class Team extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="team-header">
          Наша <span>команда</span>
        </h1>
        <div className="team-cards">
          <div className="team-card">
            <img src={team1} alt="logo" />
            <h3 className="team-name">Войнич Дарья</h3>
            <p className="team-paragraph">Заместитель директора по продажам</p>
            <p className="number">+375 (17) 270-53-77 (317)</p>
          </div>

          <div className="team-card">
            <img src={team2} alt="logo" />
            <h3 className="team-name">Мисько Екатерина</h3>
            <p className="team-paragraph">Начальник отдела сопровождения</p>
            <p className="number">+375 (17) 270-53-77 (115)</p>
            <p className="number"> +375 29 112-73-48</p>
            <p className="email">k.melnichenko@leangroup.by</p>
          </div>

          <div className="team-card">
            <img src={team3} alt="logo" />
            <h3 className="team-name">Дмитроченко Дмитрий</h3>
            <p className="team-paragraph">
              Начальник отдела допечатной подготовки
            </p>
            <p className="number">+375 (17) 270-53-77 (333)</p>
            <p className="number"> +375 29 360-32-26</p>
            <p className="email">dmitrochenko@leangroup.by</p>
          </div>

          <div className="team-card">
            <img src={team4} alt="logo" />
            <h3 className="team-name">Антух Евгений</h3>
            <p className="team-paragraph">Начальник отдела снабжения</p>
            <p className="number">+375 (17) 270-53-77 (148)</p>
            <p className="number"> +375 44 764-16-28</p>
            <p className="email"> j.antuh@leangroup.by</p>
          </div>

          <div className="team-card">
            <img src={team5} alt="logo" />
            <h3 className="team-name">Мисник Елена</h3>
            <p className="team-paragraph">Специалист по работе с клиентами</p>
            <p className="number">+375 (17) 270-53-77 (322)</p>
            <p className="number"> +375 29 329-34-03</p>
            <p className="email">e.misnik@leangroup.by</p>
          </div>
        </div>

        <button className="team-btn">Наша команда</button>
      </div>
    );
  }
}
