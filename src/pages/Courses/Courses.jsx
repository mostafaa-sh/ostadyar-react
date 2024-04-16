import React from "react";
import "./Cources.css";
import Breadcrumb from "../../Components/modules/Breadcrumb/Breadcrumb";
import SingleCourse from "../../Components/modules/SingleCourse/SingleCourse";
import Pagination from "../../Components/modules/Pagination/Pagination";
function Courses() {
  return (
    <>
      <Breadcrumb />
      <section className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="row">
                <SingleCourse bootstrapClass />
                <SingleCourse bootstrapClass />
                <SingleCourse bootstrapClass />
                <SingleCourse bootstrapClass />
                <SingleCourse bootstrapClass />
                <SingleCourse bootstrapClass />
                <SingleCourse bootstrapClass />
                <SingleCourse bootstrapClass />
                <SingleCourse bootstrapClass />
              </div>
            </div>
            <Pagination />
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;
