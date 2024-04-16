import React from "react";
import "./CoursesProgress.css";
function CoursesProgress() {
  return (
    <div className="course-progress">
      <div className="course-progress__header">
        <i className="fas fa-chart-line course-progress__icon"></i>
        <span className="course-progress__title">درصد پیشرفت دوره: 100%</span>
      </div>
      <div className="progress course-progress__bar">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-label="Animated striped example"
          aria-valuenow="70"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "75%" }}
        ></div>
      </div>
    </div>
  );
}

export default CoursesProgress;
