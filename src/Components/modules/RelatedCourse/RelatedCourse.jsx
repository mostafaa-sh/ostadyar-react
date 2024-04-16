import React from "react";
import "./RelatedCourse.css";
function RelatedCourse() {
  return (
    <div className="course-info">
      <span className="course-info__courses-title">دوره های مرتبط</span>
      <ul className="course-info__courses-list">
        <li className="course-info__courses-list-item">
          <a href="#" className="course-info__courses-link">
            <img
              src="/images/courses/js_project.png"
              alt="Course Cover"
              className="course-info__courses-img"
            />
            <span className="course-info__courses-text">
              پروژه های تخصصی با جاوا اسکریپت
            </span>
          </a>
        </li>
        <li className="course-info__courses-list-item">
          <a href="#" className="course-info__courses-link">
            <img
              src="/images/courses/fareelancer.png"
              alt="Course Cover"
              className="course-info__courses-img"
            />
            <span className="course-info__courses-text">
              تعیین قیمت پروژه های فریلنسری
            </span>
          </a>
        </li>
        <li className="course-info__courses-list-item">
          <a href="#" className="course-info__courses-link">
            <img
              src="/images/courses/nodejs.png"
              alt="Course Cover"
              className="course-info__courses-img"
            />
            <span className="course-info__courses-text">دوره Api نویسی</span>
          </a>
        </li>
        <li className="course-info__courses-list-item">
          <a href="#" className="course-info__courses-link">
            <img
              src="/images/courses/jango.png"
              alt="Course Cover"
              className="course-info__courses-img"
            />
            <span className="course-info__courses-text">متخصص جنگو</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default RelatedCourse;
