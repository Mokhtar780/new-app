import Image from 'react-bootstrap/Image';
import { Col, Row } from "react-bootstrap";
import { FaMoon, FaSun } from "react-icons/fa";


interface IEvent{

    theme : string ;
    myName : boolean;
    direction : string;
    language : boolean;
    isAsideVisible : boolean;
    setTheme:(val:string)=>void;
    setLanguage:(val:boolean)=>void;
    setMyName:(val:boolean)=>void;
    setDirection:(val:string)=>void;
    setIsAsideVisible:(val:boolean)=>void;
    
}


const Navbar = ({theme,setTheme,myName,setMyName,direction,setDirection,language,setLanguage,isAsideVisible,setIsAsideVisible}:IEvent) =>{




    return (

        <>
        
        <nav
              className={` layout-navbar navbar navbar-expand-xl align-items-center   
                ${theme == "dark" ? "myDark borderColorLight" : "myLight borderColorDark"}
             ${direction == "ltr" ? "english dirLeft" : "arabic dirRight"}
            `}
            >
              <div className="container-fluid">
                <div
                  className="navbar-nav-left d-flex align-items-center"
                  id="navbar-collapse"
                >
                  <ul className="navbar-nav flex-row align-items-center ms-auto">
                    <Row style={{alignItems:"center"}}>
                      <Col>
                        <li className="nav-item navbar-dropdown dropdown-user dropdown">
                          <a
                            className="nav-link dropdown-toggle hide-arrow"
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                          >
                            <div className="avatar avatar-online">
                              {/* <img
                                src="src/assets/images/my4.jpg"
                                className="rounded-circle"
                              /> */}
                   <Image src="src/assets/images/my4.jpg" alt="Avatar"  className="rounded-circle" roundedCircle />
                            </div>
                          </a>
                          <ul className={`dropdown-menu dropdown-menu-center ${
                theme == "dark" ? "myDark" : "myLight"
              }
             
            `}>
                            <li>
                              <a
                                className="dropdown-item"
                                href="pages-account-settings-account.html"
                              >
                                <div className="d-flex">
                                  <div className="flex-shrink-0 me-3">
                                    <div className="avatar avatar-online">
                                     
               <Image src="src/assets/images/my4.jpg" alt="Avatar" 
                className="rounded-circle" roundedCircle />

                                    </div>
                                  </div>
                                  <div className="flex-grow-1">
                                    <span className={`lh-1 d-block fw-semibold ${
                theme == "dark" ? "text-white" : "text-black" }  `}>
                                      {myName
                                        ? " مختار اليعري "
                                        : "Mokhtar  AL-Yara'a "}
                                    </span>
                                    <small className={`  ${ theme == "dark" ? "text-white" : "text-black"} `}>
                                      {" "}
                                      {myName ? " مشرف " : " Supervisor "}
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
                                href="pages-profile-user.html"
                              >
                                <i  className={` bx bx-user me-2 ${ theme == "dark" ? "text-white" : "text-black"} `}></i>
                                <span  className={` align-middle  ${ theme == "dark" ? "text-white" : "text-black"} `}>  {myName ? " من أنا " : " who I am "}</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="pages-account-settings-account.html"
                              >
                                <i className={`bx bx-cog me-2  ${ theme == "dark" ? "text-white" : "text-black"} `}></i>
                                <span  className={`align-middle  ${ theme == "dark" ? "text-white" : "text-black"} `}>    {myName ? " الضبط" : " Settings "}</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="pages-account-settings-billing.html"
                              >
                                <span className="d-flex align-items-center align-middle">
                                  <i  className={`bx bx-credit-card flex-shrink-0 me-2  ${ theme == "dark" ? "text-white" : "text-black"} `} ></i>
                                  <span className={`flex-grow-1 align-middle  ${ theme == "dark" ? "text-white" : "text-black"} `}>
                                        {myName ? " الفواتير " : " The Bills "}
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
                                <i  className={` bx bx-support me-2  ${ theme == "dark" ? "text-white" : "text-black"} `}></i>
                                <span  className={` align-middle  ${ theme == "dark" ? "text-white" : "text-black"} `}>     {myName ? " مساعدة " : " Help "}</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="pages-faq.html"
                              >
                                <i className={`bx bx-help-circle me-2   ${ theme == "dark" ? "text-white" : "text-black"} `}></i>
                                <span  className={`align-middle   ${ theme == "dark" ? "text-white" : "text-black"} `}>
                                  
                                {myName ? " الأسئلة الشائعة" : " Frequently Asked Questions "}
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="pages-pricing.html"
                              >
                                <i className={`bx bx-dollar me-2    ${ theme == "dark" ? "text-white" : "text-black"} `}></i>
                                <span  className={`align-middle   ${ theme == "dark" ? "text-white" : "text-black"} `}>     {myName ? " التسعير " : " Pricing "} </span>
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
                                <i className={` bx bx-power-off me-2 ${ theme == "dark" ? "text-white" : "text-black"} `}></i>
                                <span  className={` align-middle ${ theme == "dark" ? "text-white" : "text-black"} `}>    {myName ? " المغادرة" : " Logout "}</span>
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
                          <ul className={` dropdown-menu dropdown-menu-center  ${    theme == "dark" ? "myDark text-white" : "myLight text-black"  } `}>
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
                                <small className={`  ${ theme == "dark" ? "text-white" : "text-black"} `} >  
                                  {myName
                                    ? "  الـعـــربيـــة  "
                                    : "  Arabic    "}
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
                                 
                                <small className={`  ${ theme == "dark" ? "text-white" : "text-black"} `} >  {myName ? "الانـجليـزيـة" : "English"} </small>
                                </span>
                                <i className="flag-icon flag-icon-us flag-icon-squared fs-5 rounded-circle me-3"></i>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </Col> 
                      <Col>
                        <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
                          <a
                            className="nav-link dropdown-toggle hide-arrow "
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="false"
                          >
                            <i
                              className={`bx bx-grid-alt  ${
                                theme == "dark" ? "text-white" : "text-black"
                              } `}
                            ></i>
                            
                          </a>
                          <div className={` dropdown-menu dropdown-menu-center py-0   ${theme == "dark" ? "myDark" : "myLight"} `}>
                            <div className="dropdown-menu-header border-bottom">
                              <div className="dropdown-header d-flex align-items-center py-3">
                                <h6 className={` me-auto mb-0 ${
                            theme == "dark" ? "text-white" : "text-black"
                          } `}>
                                  
                                  <small>  {myName ? " أختصارات " : " Abbreviations  "}</small>
                                </h6>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-shortcuts-add text-body"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Add shortcuts"
                                >
                                  <i className={` bx  bx-plus-circle ${
                            theme == "dark" ? "text-white" : "text-black"
                          } `}></i>
                                </a>
                              </div>
                            </div>
                            <div className="dropdown-shortcuts-list scrollable-container">
                              <div className={` row row-bordered overflow-visible g-0  ${theme == "dark" ? "myDark" : "myLight"}  `} >
                                <div className="dropdown-shortcuts-item col">
                                  <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                    <i className={` bx bx-calendar fs-4 ${
                            theme == "dark" ? "text-info" : "text-black"
                          } `}></i>
                                  </span>
                                  <a
                                    href="app-calendar.html"
                                    className="stretched-link"
                                  >

<small className={`  ${ theme == "dark" ? "text-white" : "text-black"} `} >  {myName ? " التقويم " : " Calendar  "}</small>
                                  </a>
                                  <small className="text-muted mb-0">
                                    
                                    <small className={`  ${ theme == "dark" ? "text-white" : "text-black"} `} >  {myName ? " موعد " : "  Appointment "}</small>
                                  </small>
                                </div>
                                <div className="dropdown-shortcuts-item col">
                                  <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                    <i className={` bx bx-help-circle fs-4 ${
                            theme == "dark" ? "text-info" : "text-black"
                          } `}></i>
                                  </span>
                                  <a
                                    href="pages-help-center-landing.html"
                                    className="stretched-link"
                                  >
                                    
                                    <small className={`  ${ theme == "dark" ? "text-white" : "text-black"} `} >  {myName ? " مساعدة " : " Help  "}</small>
                                  </a>
                                  <small className="text-muted mb-0">
                                    
                                  <small className={`  ${ theme == "dark" ? "text-white" : "text-black"} `} >   {myName ? " مساعدة من جوجل " : "  Help from Google "}</small>
                                  </small>
                                </div>
                              </div>
                              <div className="row row-bordered overflow-visible g-0">
                                <div className="dropdown-shortcuts-item col">
                                  <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                    <i className={` bx bx-user fs-4 ${
                           theme == "dark" ? "text-info" : "text-black"
                          } `}></i>
                                  </span>
                                  <a
                                    href="app-user-list.html"
                                    className="stretched-link"
                                  >
                                    
                                    <small className={`  ${ theme == "dark" ? "text-white" : "text-black"} `} >  {myName ? " المستخدم " : " User  "}</small>
                                  </a>
                                  <small className="text-muted mb-0">
                                    {" "}
                                    
                                    <small className={`  ${ theme == "dark" ? "text-white" : "text-black"} `} >   {myName ? " مدير المستخدمين " : "  User Manager "}</small>
                                  </small>
                                </div>
                                <div className="dropdown-shortcuts-item col">
                                  <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                    <i className={` bx bx-cog fs-4 ${
                            theme == "dark" ? "text-info" : "text-black"
                          } `}></i>
                                  </span>
                                  <a
                                    href="pages-account-settings-account.html"
                                    className="stretched-link"
                                  >
                                    
                                    <small className={`  ${ theme == "dark" ? "text-white" : "text-black"} `} >  {myName ? " الضبط " : "  Adjustment "}</small>
                                  </a>
                                  <small className="text-muted mb-0">
                                    
                                  <small className={`  ${ theme == "dark" ? "text-white" : "text-black"} `} >   {myName ? " ضبط الاعدادات " : " Adjust settings  "}</small>
                                  </small>
                                </div>
                              </div>
                              <div className="row row-bordered overflow-visible g-0"></div>
                            </div>
                          </div>
                        </li>
                      </Col>
                      <Col>
                        <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-2">
                          <a
                            className="nav-link dropdown-toggle hide-arrow"
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="false"
                          >
                            
                            <span className="badge rounded-pill badge-notifications bg-danger">
                              3
                            </span>
                            <i
                              className={`bx bx-bell ${
                                theme == "dark" ? "text-white" : "text-black"
                              } `}
                            ></i>
                          </a>
                          <ul className={`dropdown-menu dropdown-menu-center py-0 ${
                                theme == "dark" ?  "myDark text-white" : "myLight text-black"  } `}>
                            <li className="dropdown-menu-header border-bottom">
                              <div className="dropdown-header d-flex align-items-center py-3">
                                <h5 className={` me-auto mb-0 ${
                                theme == "dark" ? "text-white" : "text-black"
                              } `}>
                                  {" "}
                                  {myName
                                        ? "  الرسائل  "
                                        : "  Messages    "}
                                </h5>
                                <a
                                  href="javascript:void(0)"
                                  className="dropdown-notifications-all "
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Mark all as read"
                                >
                                  <i className={`bx fs-4 bx-envelope-open  ${
                                theme == "dark" ? "text-white" : "text-black"
                              } `}></i>
                                </a>
                              </div>
                            </li>
                            
                            <li className={`dropdown-notifications-list scrollable-container  `} >
                              <ul className={`list-group list-group-flush  `} >

                              <div
                                  className={` bs-toast toast fade show  `}
                                  role="alert"
                                  aria-live="assertive"
                                  aria-atomic="true"
                                  style={{borderBottom:"2px solid red"}}
                                >
                                  <div className={`toast-header  ${    theme == "dark" ? "myDark text-white" : "myLight text-black"  } `}>
                                   
                                     <Image src="src/assets/images/ameen.jpg" alt="Avatar" 
                 className="d-block w-px-40 h-auto rounded me-2" roundedCircle />
                                    <div className="me-auto fw-medium">
                                      {" "}
                                      {myName
                                        ? "  أمين اليعري  "
                                        : "  Ameen Al-Yara'a    "}{" "}
                                    </div>
                                    <small>
                                      {" "}
                                      {myName
                                        ? " منذ دقيقة    5"
                                        : "  5 mins ago    "}{" "}
                                    </small>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="toast"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className={`toast-body  ${  theme == "dark" ? "myDark text-white" : "myLight text-black" }`}>
                                    {myName
                                      ? "    يهناك ياقلب أخوك 🤩🎇🎉  "
                                      : "    There is Your Brother's Heart 🤩🎇🎉    "}
                                  </div>
                                </div>

                                <div
                                  className={` bs-toast toast fade show  `}
                                  role="alert"
                                  aria-live="assertive"
                                  aria-atomic="true"
                                  style={{borderBottom:"2px solid red"}}
                                >
                                  <div className={`toast-header  ${   theme == "dark" ? "myDark text-white" : "myLight text-black" } `}>
                                   
                                     <Image src="src/assets/images/Hashem.jpg" alt="Avatar" 
                 className="d-block w-px-40 h-auto rounded me-2" roundedCircle />
                                    <div className="me-auto fw-medium ">
                                      {" "}
                                      {myName
                                        ? "  هاشم الريمي   "
                                        : "  Hashem Al-Rimi  "}{" "}
                                    </div>
                                    <small>
                                      {" "}
                                      {myName
                                        ? " منذ دقيقة    11"
                                        : "  11 mins ago    "}{" "}
                                    </small>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="toast"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className={`toast-body ${  theme == "dark" ? "myDark text-white" : "myLight text-black" }`}>
                                    {myName
                                      ? "   ألف مبروك 🤩🎇🎉  "
                                      : "  Congratulations  🤩🎇🎉   "}
                                  </div>
                                </div>

                                <div
                                  className="bs-toast toast fade show"
                                  role="alert"
                                  aria-live="assertive"
                                  aria-atomic="true"
                                >
                                 <div className={`toast-header  ${   theme == "dark" ? "myDark text-white" : "myLight text-black"  } `}>
                                    
                                     <Image src="src/assets/images/Laith.jpg" alt="Avatar" 
                className="d-block w-px-40 h-auto rounded me-2" roundedCircle />
                                    <div className="me-auto fw-medium">
                                      {" "}
                                      {myName
                                        ? " ليث المهدي  "
                                        : "  Laith Al-Mahdi    "}{" "}
                                    </div>
                                    <small>
                                      {" "}
                                      {myName
                                        ? " منذ دقيقة    30"
                                        : "  30 mins ago    "}{" "}
                                    </small>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="toast"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className={`toast-body ${  theme == "dark" ? "myDark text-white" : "myLight text-black" }`}>
                                    {myName
                                      ? "   يهناك ياسيدي مختار 🤩🎇🎉  "
                                      : "  There , sir , Mokhtar    "}
                                  </div>
                                </div>
                              </ul>
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
                      <Col>
                        <li className="nav-item" /*   style={{position:"absolute",left: "0",top: "30%"}}*/ > 
                          <button
                            className="btn btn-sm sm"
                            onClick={() => {
                              if (isAsideVisible) {
                                setIsAsideVisible(false);
                              } else {
                                setIsAsideVisible(true);
                              }
                            }}
                          >
                            <i  className={`menu-icon tf-icons fa fa-list  ${theme == "dark" ? "text-white" : "text-black" } `}></i>

                          </button>
                        </li>
                      </Col>
                    </Row>
                  </ul>
                </div>
              </div>
            </nav>
        </>
    );
}
export default Navbar;