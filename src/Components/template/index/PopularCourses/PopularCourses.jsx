import React from "react";
import SectionHeader from "../../../modules/SectionHeader/SectionHeader";
import "./PopularCourses.css";
import CourseSlider from "../../../modules/CourseSlider/CourseSlider";
function PopularCourses() {
  return (
    <>
      <div className="popular">
        <div className="container">
          <SectionHeader
            title="محبوبترین دوره ها"
            desc={"دوره های پر امتیاز بر اساس امتیاز دانشجویان"}
          />
          <CourseSlider />
        </div>
      </div>
    </>
  );
}

export default PopularCourses;
