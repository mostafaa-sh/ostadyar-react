import React from "react";

function AboutUsBox({ title, desc, icon }) {
  return (
    <div className="col-6">
      <div className="about-us__box">
        <div className="about-us__box-right">
          <i className={icon}></i>
        </div>
        <div className="about-us__box-left">
          <span className="about-us__box-title">{title}</span>
          <span className="about-us__box-text">{desc}</span>
        </div>
      </div>
    </div>
  );
}

export default AboutUsBox;
