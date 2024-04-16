import React from "react";
import "./Breadcrumb.css";

function Breadcrumb() {
  return (
    <section className="breadcrumb">
      <div className="container">
        <div className="breadcrumb__content">
          <div className="breadcrumb__home-content-icon">
            <i className="fas fa-home breadcrumb__home-icon"></i>
          </div>
          <ul className="breadcrumb__list">
            <li className="breadcrumb__item">
              <a href="#" className="breadcrumb__link">
                خانه
                <i className="fas fa-angle-left breadcrumb__icon"></i>
              </a>
            </li>
            <li className="breadcrumb__item">
              <a href="#" className="breadcrumb__link">
                آموزش برنامه نویسی فرانت اند
                <i className="fas fa-angle-left breadcrumb__icon"></i>
              </a>
            </li>
            <li className="breadcrumb__item">
              <a href="#" className="breadcrumb__link">
                دوره متخصص جاوا اسکریپت
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Breadcrumb;
