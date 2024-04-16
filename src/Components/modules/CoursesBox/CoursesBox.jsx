import React from "react";
import "./CoursesBox.css";
import SingleCourse from "../SingleCourse/SingleCourse";
function CoursesBox() {
  return (
    <div className="courses-content">
      <div className="container">
        <div className="row">
          <SingleCourse bootstrapClass />
          <SingleCourse bootstrapClass />
          <SingleCourse bootstrapClass />
          <SingleCourse bootstrapClass />
          <SingleCourse bootstrapClass />
          <SingleCourse bootstrapClass />
        </div>
      </div>
    </div>
  );
}

export default CoursesBox;
