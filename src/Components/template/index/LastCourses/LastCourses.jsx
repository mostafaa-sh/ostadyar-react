import React from "react";
import "./LastCourses.css";
import SectionHeader from "../../../modules/SectionHeader/SectionHeader";
import CoursesBox from "../../../modules/CoursesBox/CoursesBox";
function LastCourses() {
  return (
    <div className="courses">
      <div className="container">
        <SectionHeader
          title="جدید ترین دوره ها"
          desc="سکوی پرتاپ شما به سمت موفقیت
"
          isBtn
          btnText="تمامی دوره ها"
        />
        <CoursesBox />
      </div>
    </div>
  );
}
export default LastCourses;
