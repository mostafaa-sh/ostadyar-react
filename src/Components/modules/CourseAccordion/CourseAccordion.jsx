import React, { useState } from "react";
import "./CourseAccordion.css";
function CourseAccordion() {
  const [isShowAccordion, setIsShowAccordion] = useState(false);
  const changeAccordion = () => {
    setIsShowAccordion((perve) => !perve);
  };
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2
          className="accordion-header"
          id="headingOne"
          onClick={changeAccordion}
        >
          <button
            className={`accordion-button ${
              isShowAccordion ? "notcollapsed" : ""
            }`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            معرفی دوره
          </button>
        </h2>
        {isShowAccordion && (
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body introduction__accordion-body">
              <div className="introduction__accordion-right">
                <span className="introduction__accordion-count">1</span>
                <i className="fab fa-youtube introduction__accordion-icon"></i>
                <a href="#" className="introduction__accordion-link">
                  معرفی دوره + چرا یادگیری کتابخانه ها ضروری است؟
                </a>
              </div>
              <div className="introduction__accordion-left">
                <span className="introduction__accordion-time">18:34</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseAccordion;
