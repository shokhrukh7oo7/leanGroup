import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Products.scss";
import tab1 from "../../assets/images/tab-1.png";
import tab2 from "../../assets/images/tab-2.png";
import tab3 from "../../assets/images/tab-3.png";
import tab4 from "../../assets/images/tab-4.png";
import tab5 from "../../assets/images/tab-5.png";
import name from "../../assets/images/inputName.svg";
import tel from "../../assets/images/inputTel.svg";
import React, { Component } from "react";

export default class Products extends Component {
  render() {
    return (
      <div className="container">
        <div className="tabs-section">
          <h1 className="tabs-header">
            Наша <span>продукция</span>
          </h1>
          <Tabs>
            <TabList>
              <Tab>
                <button>Ламинатные тубы</button>
              </Tab>
              <Tab>
                <button>Экструзионные тубы</button>
              </Tab>
              <Tab>
                <button>Другая упаковка</button>
              </Tab>
            </TabList>

            <TabPanel className="tab-img">
              <img src={tab1} alt="" />
              <img src={tab2} alt="" />
              <img src={tab3} alt="" />
              <img src={tab4} alt="" />
              <img src={tab5} alt="" />
            </TabPanel>
            <TabPanel className="tab-img">
              <img src={tab3} alt="" />
              <img src={tab5} alt="" />
              <img src={tab1} alt="" />
              <img src={tab2} alt="" />
              <img src={tab4} alt="" />
            </TabPanel>
            <TabPanel className="tab-img">
              <img src={tab5} alt="" />
              <img src={tab4} alt="" />
              <img src={tab3} alt="" />
              <img src={tab2} alt="" />
              <img src={tab1} alt="" />
            </TabPanel>
          </Tabs>

          <button className="tab-btn">Перейти в каталог</button>

          <div className="form-contact">
            <div className="form-title">
              <div className="form-header">
                Получить подробную <span>информацию</span>
              </div>
              <p className="form-paragraph">
                Просто заполните форму, наш менеджер свяжется с вами в ближайшее
                время
              </p>
            </div>

            <form>
              <div className="form-section">
                <div class="form-group">
                  <span>
                    <img src={name} alt="img" />
                  </span>
                  <input
                    type="text"
                    className="form-field"
                    placeholder="Ваше имя"
                  />
                </div>

                <div class="form-group form-group2">
                  <span>
                    <img src={tel} alt="img" />
                  </span>
                  <input
                    type="tel"
                    className="form-field"
                    placeholder="+375 (29) 0000000"
                  />
                </div>
              </div>
              <textarea
                name="Комментарий"
                cols="66"
                rows="7"
                placeholder="Комментарий"
              ></textarea>
            </form>

            <button className="form-btn">Получить информацию</button>
          </div>
        </div>
      </div>
    );
  }
}
