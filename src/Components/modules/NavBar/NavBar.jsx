import React, { useContext, useEffect, useState } from "react";
import "./NavBar.css";
import AuthContext from "../../../context/AuthContext";
import { Link } from "react-router-dom";
function NavBar() {
  const authContext = useContext(AuthContext);
  return (
    <div className="main-header">
      <div className="container-fluid">
        <div className="main-header__content">
          <div className="main-header__right">
            <img
              src="/images/logo/Logo.png"
              className="main-header__logo"
              alt="لوگوی سبزلرن"
            />

            <ul className="main-header__menu">
              <li className="main-header__item">
                <a href="#" className="main-header__link">
                  صفحه اصلی
                </a>
              </li>

              <li className="main-header__item">
                <a href="#" className="main-header__link">
                  فرانت اند
                  <i className="fas fa-angle-down main-header__link-icon"></i>
                  <ul className="main-header__dropdown">
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        آموزش Html
                      </a>
                    </li>
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        آموزش Css
                      </a>
                    </li>
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        آموزش جاوا اسکریپت
                      </a>
                    </li>
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        آموزش FlexBox
                      </a>
                    </li>
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        آموزش جامع ری‌اکت
                      </a>
                    </li>
                  </ul>
                </a>
              </li>
              <li className="main-header__item">
                <a href="#" className="main-header__link">
                  امنیت
                  <i className="fas fa-angle-down main-header__link-icon"></i>
                  <ul className="main-header__dropdown">
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        آموزش کالی لینوکس
                      </a>
                    </li>
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        آموزش پایتون سیاه
                      </a>
                    </li>
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        آموزش جاوا اسکریپت سیاه
                      </a>
                    </li>
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        آموزش شبکه
                      </a>
                    </li>
                  </ul>
                </a>
              </li>
              <li className="main-header__item">
                <a href="#" className="main-header__link">
                  مقالات
                  <i className="fas fa-angle-down main-header__link-icon"></i>
                  <ul className="main-header__dropdown">
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        توسعه وب
                      </a>
                    </li>
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        جاوا اسکریپت
                      </a>
                    </li>
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        فرانت اند
                      </a>
                    </li>
                  </ul>
                </a>
              </li>
              <li className="main-header__item">
                <a href="#" className="main-header__link">
                  پایتون
                  <i className="fas fa-angle-down main-header__link-icon"></i>
                  <ul className="main-header__dropdown">
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        دوره متخصص پایتون
                      </a>
                    </li>
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        دوره هوش مصنوعی با پایتون
                      </a>
                    </li>
                    <li className="main-header__dropdown-item">
                      <a href="#" className="main-header__dropdown-link">
                        دوره متخصص جنگو
                      </a>
                    </li>
                  </ul>
                </a>
              </li>
              <li className="main-header__item">
                <a href="#" className="main-header__link">
                  مهارت های نرم
                </a>
              </li>
            </ul>
          </div>

          <div className="main-header__left">
            <a href="#" className="main-header__search-btn">
              <i className="fas fa-search main-header__search-icon"></i>
            </a>
            <a href="#" className="main-header__cart-btn">
              <i className="fas fa-shopping-cart main-header__cart-icon"></i>
            </a>
            <a href="#" className="main-header__profile">
              {!authContext.isLoggedIn ? (
                <Link to="/login">ثبت نام/ورود</Link>
              ) : (
                <span className="main-header__profile-text">
                  {authContext.userInfos.name}
                </span>
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
