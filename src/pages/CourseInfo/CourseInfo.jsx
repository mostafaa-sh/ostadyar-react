import React from "react";
import "./CourseInfo.css";
import Breadcrumb from "../../Components/modules/Breadcrumb/Breadcrumb";
import CoursesInfo from "../../Components/template/Course/CoursesInfo/CoursesInfo";
import CoursesDetailsBox from "../../Components/modules/CoursesDetailsBox/CoursesDetailsBox";
import CoursesProgress from "../../Components/modules/CoursesProgress/CoursesProgress";
import CourseIntroduction from "../../Components/template/Course/CourseIntroduction/CourseIntroduction";
import CourseAccordion from "../../Components/modules/CourseAccordion/CourseAccordion";
import TeacherDetails from "../../Components/template/Course/TeacherDetails/TeacherDetails";
import CourseUserRegisterInfo from "../../Components/template/Course/CourseUserRegisterInfo/CourseUserRegisterInfo";
import CourseStudentCount from "../../Components/template/Course/CourseStudentCount/CourseStudentCount";
import ShortLink from "../../Components/modules/ShortLink/ShortLink";
import RelatedCourse from "../../Components/modules/RelatedCourse/RelatedCourse";
import AddComment from "../../Components/modules/AddComment/AddComment";
function CourseInfo() {
  return (
    <>
      <Breadcrumb />
      <CoursesInfo />
      <main className="main">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="course">
                <div className="course-boxes">
                  <div className="row">
                    {/* Courses Box details */}
                    <CoursesDetailsBox
                      boxTitle={"وضعیت دوره:"}
                      icon="course-boxes__box-right-icon fas fa-graduation-cap"
                      boxDesc="به اتمام رسیده"
                    />
                    <CoursesDetailsBox
                      boxTitle={"مدت زمان دوره:"}
                      icon="course-boxes__box-right-icon fas fa-clock"
                      boxDesc="19 ساعت"
                    />
                    <CoursesDetailsBox
                      boxTitle={"آخرین بروزرسانی"}
                      icon="course-boxes__box-right-icon fas fa-calendar-alt"
                      boxDesc="1401/03/02"
                    />
                    <CoursesDetailsBox
                      boxTitle={"وضعیت دوره:"}
                      icon="course-boxes__box-right-icon fas fa-graduation-cap"
                      boxDesc="به اتمام رسیده"
                    />
                    <CoursesDetailsBox
                      boxTitle={"مدت زمان دوره:"}
                      icon="course-boxes__box-right-icon fas fa-clock"
                      boxDesc="19 ساعت"
                    />
                    <CoursesDetailsBox
                      boxTitle={"آخرین بروزرسانی"}
                      icon="course-boxes__box-right-icon fas fa-calendar-alt"
                      boxDesc="1401/03/02"
                    />
                  </div>
                </div>
                <CoursesProgress />
                <CourseIntroduction />
                <CourseAccordion />
                <TeacherDetails />
                <AddComment />
              </div>
            </div>
            {/* Courseinfo sidebar */}
            <div className="col-4">
              <div className="courses-info">
                <CourseUserRegisterInfo />
                <CourseStudentCount />
                <ShortLink />
                <div className="course-info">
                  <span className="course-info__topic-title">
                    سرفصل های دوره
                  </span>
                  <span className="course-info__topic-text">
                    برای مشاهده و یا دانلود دوره روی کلمه
                    <a href="#" style={{ color: "blue", fontWeight: "bold" }}>
                      لینک
                    </a>
                    <br />
                    کلیک کنید
                  </span>
                </div>
                <RelatedCourse />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CourseInfo;
