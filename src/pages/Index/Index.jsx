import React, { useContext, useEffect } from "react";
import "./Index.css";
import LastCourses from "../../Components/template/index/LastCourses/LastCourses";
import Landing from "../../Components/template/index/Landing/Landing";
import AboutUs from "../../Components/template/index/AboutUs/AboutUs";
import PopularCourses from "../../Components/template/index/PopularCourses/PopularCourses";
import PresellCourses from "../../Components/template/index/PresellCourses/PresellCourses";
import LastArticle from "../../Components/template/index/LastArticle/LastArticle";
function Index() {
  useEffect(() => {
    document.title = "صفحه اصلی";
  }, []);
  return (
    <>
      <Landing />
      <LastCourses />
      <AboutUs />
      <PopularCourses />
      <PresellCourses />
      <LastArticle />
    </>
  );
}

export default Index;
