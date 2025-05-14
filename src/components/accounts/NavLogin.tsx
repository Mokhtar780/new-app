import { FaUserTie } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import { FaMoon, FaSun } from "react-icons/fa";

interface IEvent {
  theme: string;
  myName: boolean;
  language: boolean;
  setTheme: (val: string) => void;
  setLanguage: (val: boolean) => void;
  setMyName: (val: boolean) => void;
  setDirection: (val: string) => void;
  direction: string;
}

const NavLogin = ({
  theme,
  myName,
  language,
  setTheme,
  setLanguage,
  setMyName,
  setDirection,
  direction
}: IEvent) => {
    return (
            

            <div
        className={` layout-navbar navbar navbar-expand-xl align-items-center m  
                ${
                  theme == "dark"
                    ? "myDark borderColorLight"
                    : "myLight borderColorDark"
                }
             ${direction == "ltr" ? "english dirLeft" : "arabic dirRight"}
            `}
      >
        <div className="container-fluid">
          <div
            className="navbar-nav-left d-flex align-items-center"
            id="navbar-collapse"
          >
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              <Row style={{ alignItems: "center" }}>
                <Col>
                  <li className="nav-item navbar-dropdown dropdown-user dropdown">
                    <a
                      className="nav-link dropdown-toggle hide-arrow"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                    >
                      <div className={`avatar avatar-online ${
                              theme == "dark" ? "bodyDark" : "bodyLight"
                            } `}  style={{border:"1px solid blue",borderRadius:"50%",textAlign:"center"} }>
                       
                     
                          <FaUserTie className={` me-2 rounded-circle ${
                              theme == "dark" ? "text-white" : "text-black"
                            } `} />
                      </div>
                    </a>
                    <ul
                      className={`dropdown-menu dropdown-menu-center ${
                        theme == "dark" ? "myDark" : "myLight"
                      }
             
            `}
                    >
                      <li>
                        <a
                          className="dropdown-item"
                          href="pages-account-settings-account.html"
                        >
                          <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                            <div className={`avatar avatar-online ${
                              theme == "dark" ? "bodyDark" : "bodyLight"
                            } `}  style={{border:"1px solid blue",borderRadius:"50%",textAlign:"center"} }>
                       
                     
                          <FaUserTie className={` me-2 rounded-circle ${
                              theme == "dark" ? "text-white" : "text-black"
                            } `} />
                      </div>
                            </div>
                            <div className="flex-grow-1">
                              <span
                                className={`lh-1 d-block fw-semibold ${
                                  theme == "dark" ? "text-white" : "text-black"
                                }  `}
                              >
                                {myName
                                  ? " مستخدم "
                                  : " User "}
                              </span>
                              <small
                                className={`  ${
                                  theme == "dark" ? "text-white" : "text-black"
                                } `}
                              >
                                {" "}
                                {myName ? " غير معروف " : " unknown "}
                              </small>
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
                          href="pages-help-center-landing.html"
                        >
                          <i
                            className={` bx bx-support me-2  ${
                              theme == "dark" ? "text-white" : "text-black"
                            } `}
                          ></i>
                          <span
                            className={` align-middle  ${
                              theme == "dark" ? "text-white" : "text-black"
                            } `}
                          >
                            {" "}
                            {myName ? " مساعدة " : " Help "}
                          </span>
                        </a>
                      </li>
                      <li>
                        <div className="dropdown-divider"></div>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href=""
                          target="_blank"
                        >
                          <i
                            className={` bx bx-power-off me-2 ${
                              theme == "dark" ? "text-white" : "text-black"
                            } `}
                          ></i>
                          <span
                            className={` align-middle ${
                              theme == "dark" ? "text-white" : "text-black"
                            } `}
                          >
                            {" "}
                            {myName ? " الخروج من النظام" : " Exit the system "}
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </Col>
                <Col>
                  <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
                    <a
                      className="nav-link dropdown-toggle hide-arrow"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                    >
                      {language ? (
                        <i
                          className={`flag-icon flag-icon-ye flag-icon-squared fs-4 rounded-circle   ${
                            theme == "dark" ? "text-white" : "text-black"
                          } `}
                        ></i>
                      ) : (
                        <i
                          className={`flag-icon flag-icon-us flag-icon-squared fs-4 rounded-circle  ${
                            theme == "dark" ? "text-white" : "text-black"
                          } `}
                        ></i>
                      )}
                    </a>
                    <ul
                      className={` dropdown-menu dropdown-menu-center  ${
                        theme == "dark"
                          ? "myDark text-white"
                          : "myLight text-black"
                      } `}
                    >
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0);"
                          data-language="ar"
                          onClick={() => {
                            setLanguage(true);
                            setDirection("rtl");
                            setMyName(true);
                          }}
                        >
                          <span className="align-middle">
                            <small
                              className={`  ${
                                theme == "dark" ? "text-white" : "text-black"
                              } `}
                            >
                              {myName ? "  الـعـــربيـــة  " : "  Arabic    "}
                            </small>
                          </span>
                          <i className="flag-icon flag-icon-ye flag-icon-squared fs-5 rounded-circle me-3"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0);"
                          data-language="en"
                          onClick={() => {
                            setLanguage(false);
                            setDirection("ltr");
                            setMyName(false);
                          }}
                        >
                          <span className="align-middle">
                            <small
                              className={`  ${
                                theme == "dark" ? "text-white" : "text-black"
                              } `}
                            >
                              {" "}
                              {myName ? "الانـجليـزيـة" : "English"}{" "}
                            </small>
                          </span>
                          <i className="flag-icon flag-icon-us flag-icon-squared fs-5 rounded-circle me-3"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                </Col>
                <Col>
                  <li className="nav-item me-2 me-xl-0">
                    <a
                      className="nav-link style-switcher-toggle hide-arrow"
                      href="javascript:void(0);"
                      onClick={() => {
                        if (theme === "dark") {
                          setTheme("light");
                        } else {
                          setTheme("dark");
                        }
                      }}
                    >
                      {theme === "dark" ? (
                        <FaSun
                          className={`${
                            theme == "dark" ? "text-white" : "text-black"
                          } `}
                        />
                      ) : (
                        <FaMoon
                          className={`${
                            theme == "light" ? "text-black" : "text-white"
                          } `}
                        />
                      )}
                    </a>
                  </li>
                </Col>
              </Row>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default NavLogin;
