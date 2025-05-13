import "./bar.css";
// import '../assets/vendor/libs/swiper/swiper.css';
// import '../assets/vendor/css/pages/ui-carousel.css';
// import '../assets/vendor/libs/swiper/swiper.js';
import { useState } from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import React from "react";
import Image from "react-bootstrap/Image";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

function Bar() {
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

  // const toggleSidebar = () => {
  //   const sidebar = document.querySelector('.sidebar');
  //   sidebar?.classList.toggle('collapsed');
  // };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.querySelector(".toggle-btn") as HTMLElement;

    if (sidebar) {
      sidebar.classList.toggle("collapsed");
    }

    if (toggleBtn) {
      toggleBtn.classList.toggle("collapsed");
    }
  };

  return (
    <>
      <div className="layout-wrapper layout-content-navbar " >
        <div className="layout-container">
          <aside
            id="layout-menu"
            className="layout-menu menu-vertical menu bg-menu-theme"
          >
            <div className="app-brand demo">
              <button
                className="btn rounded-pill me-2 btn-info toggle-btn shadow-sm"
                onClick={toggleSidebar}
              >
                <i className="bi bi-list fs-5"></i>
              </button>

              <div className="sidebar" id="sidebar">
                <div className="sidebar-header p-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className="mb-0"> القائمة </h5>
                    <div className="d-flex gap-2">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-info position-relative"
                      >
                        <i className="bi bi-bell"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          3
                          <span className="visually-hidden">
                            {" "}
                            رسائل غير مقروءة{" "}
                          </span>
                        </span>
                      </button>
                      <button className="btn btn-sm btn-outline-info btn-light">
                        <i className="bi bi-gear"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-info"
                        data-bs-toggle="popover"
                        data-bs-offset="0,14"
                        data-bs-placement="bottom"
                        data-bs-custom-className="popover-info"
                        data-bs-content="This is a very beautiful popover, show some love."
                        title="Popover title"
                      >
                        Info
                      </button>

                      <button className="btn btn-sm btn-outline-info btn-light">
                        <i className="flag-icon flag-icon-ye flag-icon-squared fs-3 rounded-circle me-1"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-3 border-bottom">
                  <div className="d-flex align-items-center">
                    <div className="avatar me-2">
                      <img
                        src="../public/my4.jpg"
                        alt="Avatar"
                        className="rounded"
                      />
                    </div>{" "}
                    <div>
                      <h6 className="mb-0"> مختار اليعري </h6>
                      <small className="text-muted">
                        <span className="user-status"></span> متصل
                      </small>
                    </div>
                  </div>
                </div>

                <nav className="nav flex-column mt-2">
                  <a href="#" className="nav-link active">
                    <i className="bi bi-house me-2"></i>
                    الرئيسية
                  </a>
                  <a href="#" className="nav-link">
                    <i className="bi bi-person me-2"></i>
                    الخصوصية
                  </a>
                  <a
                    href="#"
                    className="nav-link d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <i className="bi bi-chat me-2"></i>
                      الدردشات
                    </div>
                    <button
                      type="button"
                      className="btn text-nowrap d-inline-block me-3"
                    >
                      <span className="tf-icons bx bx-envelope"></span>
                      <span className="badge bg-primary badge-notifications">
                        6
                      </span>
                    </button>
                  </a>
                  <a href="#" className="nav-link">
                    <i className="bi bi-calendar me-2"></i>
                    الآلة الحاسبة
                  </a>
                  <a href="#" className="nav-link">
                    <i className="bi bi-graph-up me-2"></i>
                    التحليل
                  </a>
                  <a href="#" className="nav-link">
                    <i className="bi bi-folder me-2"></i>
                    الأدارة
                  </a>
                </nav>

                <div className="p-3 mt-3">
                  <h6 className="text-muted mb-3"> الأنشطة </h6>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-light rounded p-2 me-2">
                      <i className="bi bi-file-text"></i>
                    </div>
                    <div>
                      <small className="d-block"> الملفات المرفوعة </small>
                      <small className="text-muted">2 من الساعات</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="bg-light rounded p-2 me-2">
                      <i className="bi bi-people"></i>
                    </div>
                    <div>
                      <small className="d-block"> المستخدمون </small>
                      <small className="text-muted">4 من الساعات</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="layout-page w-100">
            <nav
              className="layout-navbar navbar navbar-expand-xl align-items-start bg-navbar-theme w-100"
              id="layout-navbar"
              style={{ backgroundColor: "#1f2937", color: "white" }}
            >
              <div className="container-fluid">
                <div className="app-brand">
                  <div className="avatar avatar-xs me-2">
                    <img
                      src="../public/my4.jpg"
                      alt="Avatar"
                      className="rounded-circle"
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-info"
                    data-bs-toggle="popover"
                    data-bs-offset="0,14"
                    data-bs-placement="bottom"
                    data-bs-custom-className="popover-info"
                    data-bs-content="This is a very beautiful popover, show some love."
                    title="Popover title"
                  >
                    Info
                  </button>
                </div>
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="javascript:void(0)">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <button
                        type="button"
                        className="btn text-nowrap d-inline-block me-3"
                      >
                        <span className="tf-icons bx bx-envelope"></span>
                        <span className="badge bg-primary badge-notifications">
                          6
                        </span>
                      </button>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="javascript:void(0)">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="content-wrapper">
              <div className="row my-4">
                {myName ? <div> مختارحميد </div> : <div> Mokhtar Hameed </div>}
              </div>
            </div>

            <footer className="content-footer footer bg-footer-theme">
              <div className="container-fluid d-flex flex-column flex-md-row flex-wrap justify-content-between py-2">
                <div className="mb-2 mb-md-0">
                  ©<script>document.write(new Date().getFullYear());</script>
                  مختار حميد ❤️ يرحب بكم &nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    href="https://google.com"
                    target="_blank"
                    className="footer-link fw-semibold"
                  >
                    <img
                      src="./../imgs/Animated Gifs/B.gif"
                      width="65px"
                      height="40px"
                      alt=""
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://facebook.com"
                    className="footer-link me-4"
                    target="_blank"
                  >
                    <img
                      src="./../imgs/Animated Gifs/facebook.svg"
                      width="30px"
                      height="30px"
                    />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    className="footer-link me-4"
                  >
                    <img
                      src="./../imgs/Animated Gifs/twitter.svg"
                      width="30px"
                      height="30px"
                    />
                  </a>

                  <a
                    href="https://.com"
                    target="_blank"
                    className="footer-link me-4"
                  >
                    <img
                      src="./../imgs/Animated Gifs/youtube.svg"
                      width="30px"
                      height="30px"
                    />
                  </a>

                  <a
                    href="https://google.com/"
                    target="_blank"
                    className="footer-link d-none d-sm-inline-block"
                  >
                    <img
                      src="./../imgs/Animated Gifs/google.png"
                      width="30px"
                      height="30px"
                    />
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bar;
