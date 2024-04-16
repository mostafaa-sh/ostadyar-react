import React from "react";
import "./ArticleInfo.css";
import Breadcrumb from "../../Components/modules/Breadcrumb/Breadcrumb";
import ArticleContent from "../../Components/template/ArticleInfo/ArticleContent/ArticleContent";
import AddComment from "../../Components/modules/AddComment/AddComment";
function ArticleInfo() {
  return (
    <>
      <Breadcrumb />
      <main className="main">
        <div className="container">
          <div className="row">
            {/* Artile Content */}
            <div className="col-8">
              <ArticleContent />

              {/* {Aricle Proposal} */}
              <div className="suggestion-articles">
                <div className="row">
                  <div className="col-6">
                    <div className="suggestion-articles__right suggestion-articles__content">
                      <a href="#" className="suggestion-articles__icon-link">
                        <i className="fas fa-arrow-right suggestion-articles__icon"></i>
                      </a>
                      <a href="#" className="suggestion-articles__link">
                        سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ |
                        تجربه برنامه نویسان
                      </a>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="suggestion-articles__left suggestion-articles__content">
                      <a href="#" className="suggestion-articles__icon-link">
                        <i className="fas fa-arrow-left suggestion-articles__icon"></i>
                      </a>
                      <a href="#" className="suggestion-articles__link">
                        سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ |
                        تجربه برنامه نویسان
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <AddComment />
            </div>
            <div className="col-4">
              <div className="courses-info">
                <div className="course-info">
                  <span className="course-info__courses-title">
                    پر امتیازترین دوره ها
                  </span>
                  <ul className="course-info__courses-list">
                    <li className="course-info__courses-list-item">
                      <a href="#" className="course-info__courses-link">
                        <img
                          src="/images/courses/js_project.png"
                          alt="Course Cover"
                          className="course-info__courses-img"
                        />
                        <span className="course-info__courses-text">
                          پروژه های تخصصی با جاوا اسکریپت
                        </span>
                      </a>
                    </li>
                    <li className="course-info__courses-list-item">
                      <a href="#" className="course-info__courses-link">
                        <img
                          src="/images/courses/fareelancer.png"
                          alt="Course Cover"
                          className="course-info__courses-img"
                        />
                        <span className="course-info__courses-text">
                          تعیین قیمت پروژه های فریلنسری
                        </span>
                      </a>
                    </li>
                    <li className="course-info__courses-list-item">
                      <a href="#" className="course-info__courses-link">
                        <img
                          src="/images/courses/nodejs.png"
                          alt="Course Cover"
                          className="course-info__courses-img"
                        />
                        <span className="course-info__courses-text">
                          دوره Api نویسی
                        </span>
                      </a>
                    </li>
                    <li className="course-info__courses-list-item">
                      <a href="#" className="course-info__courses-link">
                        <img
                          src="/images/courses/jango.png"
                          alt="Course Cover"
                          className="course-info__courses-img"
                        />
                        <span className="course-info__courses-text">
                          متخصص جنگو
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="course-info">
                  <span className="course-info__courses-title">
                    دسترسی سریع
                  </span>
                  <ul className="sidebar-articles__list">
                    <li className="sidebar-articles__item">
                      <i className="fas fa-angle-left sidebar-articles__icon"></i>
                      <a href="#" className="sidebar-articles__link">
                        صفحه اصلی
                      </a>
                    </li>
                    <li className="sidebar-articles__item">
                      <i className="fas fa-angle-left sidebar-articles__icon"></i>
                      <a href="#" className="sidebar-articles__link">
                        فرانت اند
                      </a>
                    </li>
                    <li className="sidebar-articles__item">
                      <i className="fas fa-angle-left sidebar-articles__icon"></i>
                      <a href="#" className="sidebar-articles__link">
                        امنیت
                      </a>
                    </li>
                    <li className="sidebar-articles__item">
                      <i className="fas fa-angle-left sidebar-articles__icon"></i>
                      <a href="#" className="sidebar-articles__link">
                        پایتون
                      </a>
                    </li>
                    <li className="sidebar-articles__item">
                      <i className="fas fa-angle-left sidebar-articles__icon"></i>
                      <a href="#" className="sidebar-articles__link">
                        مهارت های نرم
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="course-info">
                  <span className="course-info__courses-title">
                    مقاله های جدید
                  </span>
                  <ul className="last-articles__list">
                    <li className="last-articles__item">
                      <a href="#" className="last-articles__link">
                        نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
                      </a>
                    </li>
                    <li className="last-articles__item">
                      <a href="#" className="last-articles__link">
                        نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
                      </a>
                    </li>
                    <li className="last-articles__item">
                      <a href="#" className="last-articles__link">
                        نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
                      </a>
                    </li>
                    <li className="last-articles__item">
                      <a href="#" className="last-articles__link">
                        نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
                      </a>
                    </li>
                    <li className="last-articles__item">
                      <a href="#" className="last-articles__link">
                        نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
                      </a>
                    </li>
                    <li className="last-articles__item">
                      <a href="#" className="last-articles__link">
                        نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="course-info">
                  <span className="course-info__courses-title">
                    دسته بندی مقالات
                  </span>
                  <ul className="sidebar-articles__list">
                    <li className="sidebar-articles__item">
                      <i className="fas fa-angle-left sidebar-articles__icon"></i>
                      <a href="#" className="sidebar-articles__link">
                        صفحه اصلی
                      </a>
                    </li>
                    <li className="sidebar-articles__item">
                      <i className="fas fa-angle-left sidebar-articles__icon"></i>
                      <a href="#" className="sidebar-articles__link">
                        فرانت اند
                      </a>
                    </li>
                    <li className="sidebar-articles__item">
                      <i className="fas fa-angle-left sidebar-articles__icon"></i>
                      <a href="#" className="sidebar-articles__link">
                        امنیت
                      </a>
                    </li>
                    <li className="sidebar-articles__item">
                      <i className="fas fa-angle-left sidebar-articles__icon"></i>
                      <a href="#" className="sidebar-articles__link">
                        پایتون
                      </a>
                    </li>
                    <li className="sidebar-articles__item">
                      <i className="fas fa-angle-left sidebar-articles__icon"></i>
                      <a href="#" className="sidebar-articles__link">
                        مهارت های نرم
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="course-info">
                  <span className="course-info__courses-title">
                    دوره های جدید
                  </span>
                  <ul className="sidebar-articles__list">
                    <li className="sidebar-articles__item">
                      <i className="fas fa-angle-left sidebar-articles__icon"></i>
                      <a href="#" className="sidebar-articles__link">
                        صفحه اصلی
                      </a>
                    </li>
                    <li className="sidebar-articles__item">
                      <i className="fas fa-angle-left sidebar-articles__icon"></i>
                      <a href="#" className="sidebar-articles__link">
                        فرانت اند
                      </a>
                    </li>
                    <li className="sidebar-articles__item">
                      <i className="fas fa-angle-left sidebar-articles__icon"></i>
                      <a href="#" className="sidebar-articles__link">
                        امنیت
                      </a>
                    </li>
                    <li className="sidebar-articles__item">
                      <i className="fas fa-angle-left sidebar-articles__icon"></i>
                      <a href="#" className="sidebar-articles__link">
                        پایتون
                      </a>
                    </li>
                    <li className="sidebar-articles__item">
                      <i className="fas fa-angle-left sidebar-articles__icon"></i>
                      <a href="#" className="sidebar-articles__link">
                        مهارت های نرم
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ArticleInfo;
