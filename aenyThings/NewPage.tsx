import "bootstrap";
import "react-bootstrap";
import "./NewPage.css";
import "../App.css";
import "../index.css";
import React, { useState } from "react";
// import * as React from 'react'

import {
  FaTachometerAlt,
  FaSun,
  FaMoon,
  FaBars,
  FaLanguage,
  FaUserSecret,
  FaYoutube,

} from "react-icons/fa";
import { Navbar, Nav, Col, Row, Container } from "react-bootstrap";

const NewPage: React.FC = () => {
  const [language, setLanguage] = useState(true);
  const [toggled, setToggled] = useState(false);
  const [myName, setMyName] = useState(true);
  const [direction, setDirection] = useState<"ltr" | "rtl">("rtl");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const handleToggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setToggled(!toggled);
    setLanguage(true);
  };

 

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
    
    
    <div className={theme}>
      <div id="wrapper" className={toggled ? "toggled" : ""}>
        {/* Sidebar */}
        <div id="sidebar-wrapper" className={theme} dir={direction}>
          <ul className="sidebar-nav">
            <li className="sidebar-brand">
              <a href="#">
                <FaTachometerAlt /> Dashboard
              </a>
            </li>
            <li>
              <a href="#">
                <FaTachometerAlt /> Dashboard
              </a>
            </li>
          </ul>
        </div>
    
        <div className={` layout-page ${theme} `} >
            <nav
              className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme"
              id="layout-navbar"
            >
              <div className="container-fluid">
               

                <div
                  className="navbar-nav-right d-flex align-items-center"
                  id="navbar-collapse"
                >
                 
                  <ul className="navbar-nav flex-row align-items-center ms-auto">


                  <li className="nav-item navbar-dropdown dropdown-user dropdown">
                      <a
                        className="nav-link dropdown-toggle hide-arrow"
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                      >
                        <div className="avatar avatar-online">
                          <img
                            src="../../public/vite.svg"
                            alt=""
                            className="rounded-circle"
                          />
                        </div>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a
                            className="dropdown-item"
                            href="pages-account-settings-account.html"
                          >
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar avatar-online">
                                  <img
                                    src="../../public/vite.svg"
                                    alt=""
                                    className="rounded-circle"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <span className="lh-1 d-block fw-semibold">
                                  مختار حميد
                                </span>
                                <small>مشرف</small>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <div className="dropdown-divider"></div>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="pages-profile-user.html"
                          >
                            <i className="bx bx-user me-2"></i>
                            <span className="align-middle">من أنا </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="pages-account-settings-account.html"
                          >
                            <i className="bx bx-cog me-2"></i>
                            <span className="align-middle">الضبط</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="pages-account-settings-billing.html"
                          >
                            <span className="d-flex align-items-center align-middle">
                              <i className="bx bx-credit-card flex-shrink-0 me-2"></i>
                              <span className="flex-grow-1 align-middle">
                                الفواتير
                              </span>
                              <span className="badge badge-center rounded-pill w-px-20 h-px-20 flex-shrink-0 bg-danger">
                                4
                              </span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <div className="dropdown-divider"></div>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="pages-help-center-landing.html"
                          >
                            <i className="bx bx-support me-2"></i>
                            <span className="align-middle">مساعدة</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="pages-faq.html">
                            <i className="bx bx-help-circle me-2"></i>
                            <span className="align-middle">
                              الأسئلة الشائعة{" "}
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="pages-pricing.html"
                          >
                            <i className="bx bx-dollar me-2"></i>
                            <span className="align-middle">التسعير</span>
                          </a>
                        </li>
                        <li>
                          <div className="dropdown-divider"></div>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="auth-login-cover.html"
                            target="_blank"
                          >
                            <i className="bx bx-power-off me-2"></i>
                            <span className="align-middle">المغادرة</span>
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
                      <a
                        className="nav-link dropdown-toggle hide-arrow"
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                      >
                       {language ? <i className="flag-icon flag-icon-ye flag-icon-squared fs-3 rounded-circle me-1"></i> : <i className="flag-icon flag-icon-us flag-icon-squared fs-3 rounded-circle me-1"></i>} 
                    
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                            data-language="ar"
                            onClick={()=>{setLanguage(true);
                              setDirection("rtl");
                              setMyName(true);
                            }}
                          >
                            <i className="flag-icon flag-icon-ye flag-icon-squared fs-4 rounded-circle me-1"></i>
                            <span className="align-middle"> العربية</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                            data-language="en"
                            onClick={()=>{setLanguage(false);
                              setDirection("ltr");
                              setMyName(false);
                            }}
                          >
                            <i className="flag-icon flag-icon-us flag-icon-squared fs-4 rounded-circle me-1"></i>
                            <span className="align-middle">
                               الانجليزي
                            </span>
                          </a>
                        </li>
                      
                      </ul>
                    </li>

                    <li className="nav-item me-2 me-xl-0">
                      <a
                        className="nav-link style-switcher-toggle hide-arrow"
                        href="javascript:void(0);"
                        onClick={toggleTheme}
                      >
                        {theme === "dark" ? <FaSun /> : <FaMoon />}
                    
                      </a>
                    </li>

                    <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
                      <a
                        className="nav-link dropdown-toggle hide-arrow"
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        <i className="bx bx-grid-alt bx-sm"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end py-0">
                        <div className="dropdown-menu-header border-bottom">
                          <div className="dropdown-header d-flex align-items-center py-3">
                            <h5 className="text-body me-auto mb-0">أختصارات</h5>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-shortcuts-add text-body"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Add shortcuts"
                            >
                              <i className="bx bx-sm bx-plus-circle"></i>
                            </a>
                          </div>
                        </div>
                        <div className="dropdown-shortcuts-list scrollable-container">
                          <div className="row row-bordered overflow-visible g-0">
                            <div className="dropdown-shortcuts-item col">
                              <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                <i className="bx bx-calendar fs-4"></i>
                              </span>
                              <a
                                href="app-calendar.html"
                                className="stretched-link"
                              >
                                {" "}
                                التقويم{" "}
                              </a>
                              <small className="text-muted mb-0">الموعد</small>
                            </div>
                            <div className="dropdown-shortcuts-item col">
                              <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                <i className="bx bx-help-circle fs-4"></i>
                              </span>
                              <a
                                href="pages-help-center-landing.html"
                                className="stretched-link"
                              >
                                مساعدة{" "}
                              </a>
                              <small className="text-muted mb-0">
                                مساعدة من جوجل{" "}
                              </small>
                            </div>
                          </div>
                          <div className="row row-bordered overflow-visible g-0">
                            <div className="dropdown-shortcuts-item col">
                              <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                <i className="bx bx-user fs-4"></i>
                              </span>
                              <a
                                href="app-user-list.html"
                                className="stretched-link"
                              >
                                المستخدم
                              </a>
                              <small className="text-muted mb-0">
                                {" "}
                                مدير المستخدمين
                              </small>
                            </div>
                            <div className="dropdown-shortcuts-item col">
                              <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                <i className="bx bx-cog fs-4"></i>
                              </span>
                              <a
                                href="pages-account-settings-account.html"
                                className="stretched-link"
                              >
                                الضبط
                              </a>
                              <small className="text-muted mb-0">
                                ضبط الاعدادات{" "}
                              </small>
                            </div>
                          </div>
                          <div className="row row-bordered overflow-visible g-0"></div>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-2">
                      <a
                        className="nav-link dropdown-toggle hide-arrow"
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        <i className="bx bx-bell bx-sm"></i>
                        <span className="badge rounded-pill badge-notifications bg-danger">
                          2
                        </span>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end py-0">
                        <li className="dropdown-menu-header border-bottom">
                          <div className="dropdown-header d-flex align-items-center py-3">
                            <h5 className="text-body me-auto mb-0">الرسائل </h5>
                            <a
                              href="javascript:void(0)"
                              className="dropdown-notifications-all text-body"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Mark all as read"
                            >
                              <i className="bx fs-4 bx-envelope-open"></i>
                            </a>
                          </div>
                        </li>
                        <li className="dropdown-notifications-list scrollable-container">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item list-group-item-action dropdown-notifications-item">
                              <div className="d-flex">
                                <div className="flex-shrink-0 me-3">
                                  <div className="avatar">
                                    <img
                                      src="../../public/vite.svg"
                                      alt=""
                                      className="w-px-40 h-auto rounded-circle"
                                    />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h6 className="mb-1"> هاشم الريمي</h6>
                                  <p className="mb-0">كيفك ياشيخ مختار </p>
                                  <small className="text-muted">
                                    صديق الجامعة
                                  </small>
                                </div>
                                <div className="dropdown-notifications-actions flex-shrink-0">
                                  <a
                                    href="javascript:void(0)"
                                    className="dropdown-notifications-read"
                                  >
                                    <span className="badge badge-dot"></span>
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="dropdown-notifications-archive"
                                  >
                                    <span className="bx bx-x"></span>
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item list-group-item-action dropdown-notifications-item">
                              <div className="d-flex">
                                <div className="flex-shrink-0 me-3">
                                  <div className="avatar">
                                    <img
                                      src="../../public/vite.svg"
                                      alt=""
                                      className="w-px-40 h-auto rounded-circle"
                                    />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h6 className="mb-1"> محسن رسام </h6>
                                  <p className="mb-0">كيفك ياشيخ مختار </p>
                                  <small className="text-muted">
                                    صديق الجامعة
                                  </small>
                                </div>
                                <div className="dropdown-notifications-actions flex-shrink-0">
                                  <a
                                    href="javascript:void(0)"
                                    className="dropdown-notifications-read"
                                  >
                                    <span className="badge badge-dot"></span>
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="dropdown-notifications-archive"
                                  >
                                    <span className="bx bx-x"></span>
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item" style={{justifyContent:"end"}}>
                    <Nav.Link href="#" onClick={handleToggle}>
                        <FaBars />
                      </Nav.Link>
                      </li>
                  </ul>
                </div>

              </div>
            </nav>
          
            <div className="content-wrapper" dir={direction}>
    
                <div className="row my-4">
                    <div className="content-wrapper">
                        <div>
                           
                        {myName ? <div>  مختارحميد  </div> :  <div>  Mokhtar Hameed  </div>}
                        </div>
    
                        <div className="row my-4">
    
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    
  );
};

export default NewPage;
