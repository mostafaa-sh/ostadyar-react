import React from "react";
import "./Category.css";
import CategoryHeader from "../../Components/template/Category/CategoryHeader/CategoryHeader";
import SingleCourse from "../../Components/modules/SingleCourse/SingleCourse";
import Pagination from "../../Components/modules/Pagination/Pagination";
function Category() {
  return (
    <section className="courses">
      <div className="container">
        <CategoryHeader />
        <div className="courses-content">
          <div className="container">
            <div className="row">
              <SingleCourse bootstrapClass />
              <SingleCourse bootstrapClass />
              <SingleCourse bootstrapClass />
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </section>
  );
}

export default Category;
