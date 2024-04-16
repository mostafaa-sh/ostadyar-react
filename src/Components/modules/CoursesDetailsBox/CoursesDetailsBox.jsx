import React from "react";
import "./CoursesDetailsBox.css";
function CoursesDetailsBox({ boxTitle, boxDesc, icon }) {
  return (
    <div className="col-4">
      <div className="course-boxes__box">
        <div className="course-boxes__box-right">
          <i className={icon}></i>
        </div>
        <div className="course-boxes__box-left">
          <span className="course-boxes__box-left-title">{boxTitle}</span>
          <span className="course-boxes__box-left--subtitle">{boxDesc}</span>
        </div>
      </div>
    </div>
  );
}

export default CoursesDetailsBox;
