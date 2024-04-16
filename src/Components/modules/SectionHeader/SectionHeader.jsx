import React from "react";
import "./SectionHeader.css";
function SectionHeader({ title, desc, isBtn, btnText }) {
  return (
    <div className="courses-header">
      <div className="courses-header__right">
        <span className="courses-header__title title">{title}</span>
        <span className="courses-header__text">{desc}</span>
      </div>
      <div className="courses-header__left">
        {isBtn && (
          <a href="#" className="courses-header__link">
            {btnText}
            <i className="fas fa-arrow-left courses-header__icon"></i>
          </a>
        )}
      </div>
    </div>
  );
}

export default SectionHeader;
