import React, { useState } from "react";
import SectionHeader from "../../../modules/SectionHeader/SectionHeader";
import AboutUsBox from "../../../modules/AboutUsBox/AboutUsBox";
import "./AboutUs.css";
function AboutUs() {
  const aboutUsBoxData = [
    {
      id: 1,
      title: "دوره های اختصاصی",
      desc: "باپشتیبانی و کیفیت بالا ارائه میده!",
      icon: "far fa-copyright about-us__icon",
    },
    {
      id: 2,
      title: "اجازه تدریس ",
      desc: "به هر مدرسی رو نمیده چون کیفیت براش مهمه",
      icon: "fas fa-leaf about-us__icon",
    },
    {
      id: 3,
      title: "دوره پولی و رایگان براش مهم نیست",
      desc: "به مدرسینش پول میده تا بهترین کیفیت و آپدیت رو داشته باشن",
      icon: "fas fa-gem about-us__icon",
    },
    {
      id: 4,
      title: "اهمیت به کاربر",
      desc: "اولویت اول و آخر آکادمی آموزش برنامه نویسی سبزلرن اهمیت به کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار هست",
      icon: "fas fa-crown about-us__icon",
    },
  ];
  return (
    <div className="about-us">
      <div className="container">
        <SectionHeader
          title="ما چه کمکی بهتون میکنیم؟"
          desc="از اونجایی که آکادمی آموزشی سبز لرن یک آکادمی خصوصی هست"
        />
        <div className="container">
          <div className="row">
            {aboutUsBoxData.map((item) => (
              <AboutUsBox key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
