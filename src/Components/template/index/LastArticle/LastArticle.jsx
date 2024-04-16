import React from "react";
import "./LastArticle.css";
import SectionHeader from "../../../modules/SectionHeader/SectionHeader";
import ArticleBox from "../../../modules/ArticleBox/ArticleBox";
function LastArticle() {
  return (
    <section className="articles">
      <div className="container">
        <SectionHeader
          title="آخرین مقالات"
          desc={"جدید ترین مقالات"}
          isBtn
          btnText={"مشاهده همه"}
        />

        <div className="articles__content">
          <div className="row">
            <ArticleBox />
            <ArticleBox />
            <ArticleBox />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LastArticle;
