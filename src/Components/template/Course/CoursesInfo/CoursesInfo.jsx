import React from "react";
import "./CoursesInfo.css";
function CoursesInfo() {
  return (
    <section className="course-info">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <a href="#" className="course-info__link">
              آموزش برنامه نویسی فرانت اند
            </a>
            <h1 className="course-info__title">
              آموزش 20 کتابخانه جاوااسکریپت برای بازار کار
            </h1>
            <p className="course-info__text">
              امروزه کتابخانه‌ها کد نویسی را خیلی آسان و لذت بخش تر کرده اند. به
              قدری که حتی امروزه هیچ شرکت برنامه نویسی پروژه های خود را با
              Vanilla Js پیاده سازی نمی کند و همیشه از کتابخانه ها و فریمورک های
              موجود استفاده می کند. پس شما هم اگه میخواید یک برنامه نویس عالی
              فرانت اند باشید، باید کتابخانه های کاربردی که در بازار کار استفاده
              می شوند را به خوبی بلد باشید
            </p>
            <div className="course-info__social-media">
              <a href="#" className="course-info__social-media-item">
                <i className="fab fa-telegram-plane course-info__icon"></i>
              </a>
              <a href="#" className="course-info__social-media-item">
                <i className="fab fa-twitter course-info__icon"></i>
              </a>
              <a href="#" className="course-info__social-media-item">
                <i className="fab fa-facebook-f course-info__icon"></i>
              </a>
            </div>
          </div>

          <div className="col-6">
            <video
              src=""
              poster="/images/courses/js_project.png"
              className="course-info__video"
              controls
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoursesInfo;
