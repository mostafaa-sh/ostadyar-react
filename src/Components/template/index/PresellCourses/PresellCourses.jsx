import React from "react";
import SectionHeader from "../../../modules/SectionHeader/SectionHeader";
import CourseSlider from "../../../modules/CourseSlider/CourseSlider";
function PresellCourses() {
  return (
    <div className="presell">
      <div className="container">
        <SectionHeader
          title="دوره های در حال پیش فروش"
          desc="این دوره ها به زودی عرضه می شوند."
        />
        <CourseSlider />
      </div>
    </div>
  );
}

export default PresellCourses;
