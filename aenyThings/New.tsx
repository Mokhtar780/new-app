// import "bootstrap";
// import "react-bootstrap";
// import React, { useState } from "react";
// // import * as React from 'react'

// import {
//   FaTachometerAlt,
//   FaSun,
//   FaMoon,
//   FaBars,
//   FaLanguage,
//   FaUserSecret,

// } from "react-icons/fa";
// import { Navbar, Nav, Col, Row, Container } from "react-bootstrap";

// const NewPage: React.FC = () => {
//   const [language, setLanguage] = useState(true);
//   const [toggled, setToggled] = useState(false);
//   const [myName, setMyName] = useState(true);
//   const [direction, setDirection] = useState<"ltr" | "rtl">("rtl");
//   const [theme, setTheme] = useState<"light" | "dark">("dark");

//   const handleToggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     e.preventDefault();
//     setToggled(!toggled);
//     setLanguage(true);
//   };

 

//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   return (
//     <div className="layout-wrapper layout-content-navbar">
//     <div className="layout-container">
    
    
        // <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
        //     <div className="app-brand demo">
        //         <a href="Home Page.html" className="app-brand-link">
        //             <span className="app-brand-logo demo">
        //                 <svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1"
        //                     xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        //                     <title>icon</title>
        //                     <defs>
        //                         <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
        //                             <stop stop-color="#5A8DEE" offset="0%"></stop>
        //                             <stop stop-color="#699AF9" offset="100%"></stop>
        //                         </linearGradient>
        //                         <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="linearGradient-2">
        //                             <stop stop-color="#FDAC41" offset="0%"></stop>
        //                             <stop stop-color="#E38100" offset="100%"></stop>
        //                         </linearGradient>
        //                     </defs>
        //                     <g id="Pages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        //                         <g id="Login---V2" transform="translate(-667.000000, -290.000000)">
        //                             <g id="Login" transform="translate(519.000000, 244.000000)">
        //                                 <g id="Logo" transform="translate(148.000000, 42.000000)">
        //                                     <g id="icon" transform="translate(0.000000, 4.000000)">
        //                                         <path
        //                                             d="M13.8863636,4.72727273 C18.9447899,4.72727273 23.0454545,8.82793741 23.0454545,13.8863636 C23.0454545,18.9447899 18.9447899,23.0454545 13.8863636,23.0454545 C8.82793741,23.0454545 4.72727273,18.9447899 4.72727273,13.8863636 C4.72727273,13.5423509 4.74623858,13.2027679 4.78318172,12.8686032 L8.54810407,12.8689442 C8.48567157,13.19852 8.45300462,13.5386269 8.45300462,13.8863636 C8.45300462,16.887125 10.8856023,19.3197227 13.8863636,19.3197227 C16.887125,19.3197227 19.3197227,16.887125 19.3197227,13.8863636 C19.3197227,10.8856023 16.887125,8.45300462 13.8863636,8.45300462 C13.5386269,8.45300462 13.19852,8.48567157 12.8689442,8.54810407 L12.8686032,4.78318172 C13.2027679,4.74623858 13.5423509,4.72727273 13.8863636,4.72727273 Z"
        //                                             id="Combined-Shape" fill="#4880EA"></path>
        //                                         <path
        //                                             d="M13.5909091,1.77272727 C20.4442608,1.77272727 26,7.19618701 26,13.8863636 C26,20.5765403 20.4442608,26 13.5909091,26 C6.73755742,26 1.18181818,20.5765403 1.18181818,13.8863636 C1.18181818,13.540626 1.19665566,13.1982714 1.22574292,12.8598734 L6.30410592,12.859962 C6.25499466,13.1951893 6.22958398,13.5378796 6.22958398,13.8863636 C6.22958398,17.8551125 9.52536149,21.0724191 13.5909091,21.0724191 C17.6564567,21.0724191 20.9522342,17.8551125 20.9522342,13.8863636 C20.9522342,9.91761479 17.6564567,6.70030817 13.5909091,6.70030817 C13.2336969,6.70030817 12.8824272,6.72514561 12.5388136,6.77314791 L12.5392575,1.81561642 C12.8859498,1.78721495 13.2366963,1.77272727 13.5909091,1.77272727 Z"
        //                                             id="Combined-Shape2" fill="url(#linearGradient-1)"></path>
        //                                         <rect id="Rectangle" fill="url(#linearGradient-2)" x="0" y="0"
        //                                             width="7.68181818" height="7.68181818"></rect>
        //                                     </g>
        //                                 </g>
        //                             </g>
        //                         </g>
        //                     </g>
        //                 </svg>
        //             </span>
        //             <span className="app-brand-text demo menu-text fw-bold ms-2"> القائمة </span>
        //         </a>
    
        //         <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto">
        //             <i className="bx menu-toggle-icon fs-4 d-none d-xl-block align-middle"></i>
        //             <i className="bx bx-x bx-sm d-xl-none d-block align-middle"></i>
        //         </a>
        //     </div>
    
        //     <div className="menu-divider mt-0"></div>
    
        //     <div className="menu-inner-shadow"></div>
    
        //     <ul className="menu-inner py-1">
        //         <li className="menu-item">
        //             <a href="javascript:void(0);" className="menu-link menu-toggle">
        //                 <i className="menu-icon tf-icons bx bx-home-circle"></i>
        //                 <div data-i18n="  قائمة رئيسية    "> قائمة رئيسية </div>
        //             </a>
        //             <ul className="menu-sub">
        //                 <li className="menu-item">
        //                     <a href="Add Date.html" className="menu-link">
        //                         <div data-i18n="  أضافة موظفين "> أضافة موظفين </div>
        //                     </a>
        //                 </li>
        //             </ul>
        //         </li>
    
    
//                 <li className="menu-item open active">
//                     <a href="javascript:void(0);" className="menu-link menu-toggle">
//                         <i className="menu-icon tf-icons bx bx-user"></i>
//                         <div data-i18n="المستخدمين"> المستخدمين </div>
//                     </a>
//                     <ul className="menu-sub">
//                         <li className="menu-item">
//                             <a href="javascript:void(0);" className="menu-link menu-toggle">
//                                 <div data-i18n="  تسجيل الدخول  "> تسجيل الدخول </div>
//                             </a>
//                             <ul className="menu-sub">
//                                 <li className="menu-item">
//                                     <a href="Login information.html" className="menu-link">
//                                         <div data-i18n=" صفحة  تسجيل الدخول "> صفحة تسجيل الدخول
//                                         </div>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </li>
//                     </ul>
//                 </li>
    
    
//             </ul>
//         </aside>
    
//         <div className="layout-page">
    
//             <nav className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme"
//                 id="layout-navbar">
//                 <div className="container-fluid">
//                     <div className="layout-menu-toggle navbar-nav d-xl-none align-items-xl-center me-3 me-xl-0">
//                         <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
//                             <i className="bx bx-menu bx-sm"></i>
//                         </a>
//                     </div>
    
//                     <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                      
//                         <ul className="navbar-nav flex-row align-items-center ms-auto">
    
//                             <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
//                                 <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);"
//                                     data-bs-toggle="dropdown">
//                                     {language ? <i className="flag-icon flag-icon-ye flag-icon-squared fs-3 rounded-circle me-1"></i> : <i className="flag-icon flag-icon-us flag-icon-squared fs-3 rounded-circle me-1"></i>} 
//                                        </a>
//                                 <ul className="dropdown-menu dropdown-menu-end">
    
                                  
//                                 <li>
//                               <a
//                                 className="dropdown-item"
//                                 href="javascript:void(0);"
//                                 data-language="ar"
//                                 onClick={()=>{setLanguage(true);
//                                   setDirection("rtl");
//                                   setMyName(true);
//                                 }}
//                               >
//                                 <i className="flag-icon flag-icon-ye flag-icon-squared fs-4 rounded-circle me-1"></i>
//                                 <span className="align-middle"> العربية</span>
//                               </a>
//                             </li>
//                             <li>
//                               <a
//                                 className="dropdown-item"
//                                 href="javascript:void(0);"
//                                 data-language="en"
//                                 onClick={()=>{setLanguage(false);
//                                   setDirection("ltr");
//                                   setMyName(false);
//                                 }}
//                               >
//                                 <i className="flag-icon flag-icon-us flag-icon-squared fs-4 rounded-circle me-1"></i>
//                                 <span className="align-middle">
//                                    الانجليزي
//                                 </span>
//                               </a>
//                             </li>
                          
    
//                                 </ul>
//                             </li>
                            
    
    
//                             <li className="nav-item me-2 me-xl-0">
//                                 <a className="nav-link style-switcher-toggle hide-arrow" href="javascript:void(0);">
//                                     <i className="bx bx-sm"></i>
//                                 </a>
//                             </li>
                            
    
    
//                             <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
//                                 <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);"
//                                     data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
//                                     <i className="bx bx-grid-alt bx-sm"></i>
//                                 </a>
//                                 <div className="dropdown-menu dropdown-menu-end py-0">
//                                     <div className="dropdown-menu-header border-bottom">
//                                         <div className="dropdown-header d-flex align-items-center py-3">
//                                             <h5 className="text-body me-auto mb-0">أختصارات</h5>
//                                             <a href="javascript:void(0)" className="dropdown-shortcuts-add text-body"
//                                                 data-bs-toggle="tooltip" data-bs-placement="top"
//                                                 title="Add shortcuts"><i className="bx bx-sm bx-plus-circle"></i></a>
//                                         </div>
//                                     </div>
//                                     <div className="dropdown-shortcuts-list scrollable-container">
//                                         <div className="row row-bordered overflow-visible g-0">
//                                             <div className="dropdown-shortcuts-item col">
//                                                 <span
//                                                     className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
//                                                     <i className="bx bx-calendar fs-4"></i>
//                                                 </span>
//                                                 <a href="app-calendar.html" className="stretched-link"> التقويم </a>
//                                                 <small className="text-muted mb-0">الموعد</small>
//                                             </div>
//                                             <div className="dropdown-shortcuts-item col">
//                                                 <span
//                                                     className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
//                                                     <i className="bx bx-help-circle fs-4"></i>
//                                                 </span>
//                                                 <a href="pages-help-center-landing.html"
//                                                     className="stretched-link">مساعدة </a>
//                                                 <small className="text-muted mb-0">مساعدة من جوجل </small>
//                                             </div>
//                                         </div>
//                                         <div className="row row-bordered overflow-visible g-0">
//                                             <div className="dropdown-shortcuts-item col">
//                                                 <span
//                                                     className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
//                                                     <i className="bx bx-user fs-4"></i>
//                                                 </span>
//                                                 <a href="app-user-list.html" className="stretched-link">المستخدم</a>
//                                                 <small className="text-muted mb-0"> مدير المستخدمين</small>
//                                             </div>
//                                             <div className="dropdown-shortcuts-item col">
//                                                 <span
//                                                     className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
//                                                     <i className="bx bx-cog fs-4"></i>
//                                                 </span>
//                                                 <a href="pages-account-settings-account.html"
//                                                     className="stretched-link">الضبط</a>
//                                                 <small className="text-muted mb-0">ضبط الاعدادات </small>
//                                             </div>
//                                         </div>
//                                         <div className="row row-bordered overflow-visible g-0">
//                                         </div>
    
//                                     </div>
//                                 </div>
//                             </li>
                            
    
//                             <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-2">
//                                 <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);"
//                                     data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
//                                     <i className="bx bx-bell bx-sm"></i>
//                                     <span className="badge rounded-pill badge-notifications bg-danger">5</span>
//                                 </a>
//                                 <ul className="dropdown-menu dropdown-menu-end py-0">
//                                     <li className="dropdown-menu-header border-bottom">
//                                         <div className="dropdown-header d-flex align-items-center py-3">
//                                             <h5 className="text-body me-auto mb-0">الرسائل </h5>
//                                             <a href="javascript:void(0)"
//                                                 className="dropdown-notifications-all text-body"
//                                                 data-bs-toggle="tooltip" data-bs-placement="top"
//                                                 title="Mark all as read"><i
//                                                     className="bx fs-4 bx-envelope-open"></i></a>
//                                         </div>
//                                     </li>
//                                     <li className="dropdown-notifications-list scrollable-container">
//                                     <ul className="list-group list-group-flush">
//                                 <li className="list-group-item list-group-item-action dropdown-notifications-item">
//                                   <div className="d-flex">
//                                     <div className="flex-shrink-0 me-3">
//                                       <div className="avatar">
//                                         <img
//                                           src="../../public/vite.svg"
//                                           alt=""
//                                           className="w-px-40 h-auto rounded-circle"
//                                         />
//                                       </div>
//                                     </div>
//                                     <div className="flex-grow-1">
//                                       <h6 className="mb-1"> هاشم الريمي</h6>
//                                       <p className="mb-0">كيفك ياشيخ مختار </p>
//                                       <small className="text-muted">
//                                         صديق الجامعة
//                                       </small>
//                                     </div>
//                                     <div className="dropdown-notifications-actions flex-shrink-0">
//                                       <a
//                                         href="javascript:void(0)"
//                                         className="dropdown-notifications-read"
//                                       >
//                                         <span className="badge badge-dot"></span>
//                                       </a>
//                                       <a
//                                         href="javascript:void(0)"
//                                         className="dropdown-notifications-archive"
//                                       >
//                                         <span className="bx bx-x"></span>
//                                       </a>
//                                     </div>
//                                   </div>
//                                 </li>
//                                 <li className="list-group-item list-group-item-action dropdown-notifications-item">
//                                   <div className="d-flex">
//                                     <div className="flex-shrink-0 me-3">
//                                       <div className="avatar">
//                                         <img
//                                           src="../../public/vite.svg"
//                                           alt=""
//                                           className="w-px-40 h-auto rounded-circle"
//                                         />
//                                       </div>
//                                     </div>
//                                     <div className="flex-grow-1">
//                                       <h6 className="mb-1"> محسن رسام </h6>
//                                       <p className="mb-0">كيفك ياشيخ مختار </p>
//                                       <small className="text-muted">
//                                         صديق الجامعة
//                                       </small>
//                                     </div>
//                                     <div className="dropdown-notifications-actions flex-shrink-0">
//                                       <a
//                                         href="javascript:void(0)"
//                                         className="dropdown-notifications-read"
//                                       >
//                                         <span className="badge badge-dot"></span>
//                                       </a>
//                                       <a
//                                         href="javascript:void(0)"
//                                         className="dropdown-notifications-archive"
//                                       >
//                                         <span className="bx bx-x"></span>
//                                       </a>
//                                     </div>
//                                   </div>
//                                 </li>
//                               </ul>
//                                     </li>
    
//                                 </ul>
//                             </li>
//         <li className="nav-item me-2 me-xl-0">
//                           <a
//                             className="nav-link style-switcher-toggle hide-arrow"
//                             href="javascript:void(0);"
//                             onClick={toggleTheme}
//                           >
//                             {theme === "dark" ? <FaSun /> : <FaMoon />}
                        
//                           </a>
//                         </li>
    
    
//                         <li className="nav-item navbar-dropdown dropdown-user dropdown">
//                           <a
//                             className="nav-link dropdown-toggle hide-arrow"
//                             href="javascript:void(0);"
//                             data-bs-toggle="dropdown"
//                           >
//                             <div className="avatar avatar-online">
//                               <img
//                                 src="../assets/img/my.jpg"
//                                 alt=""
//                                 className="rounded-circle"
//                               />
//                             </div>
//                           </a>
//                           <ul className="dropdown-menu dropdown-menu-end">
//                             <li>
//                               <a
//                                 className="dropdown-item"
//                                 href="pages-account-settings-account.html"
//                               >
//                                 <div className="d-flex">
//                                   <div className="flex-shrink-0 me-3">
//                                     <div className="avatar avatar-online">
//                                       <img
//                                         src="../assets/img/my.jpg"
//                                         alt=""
//                                         className="rounded-circle"
//                                       />
//                                     </div>
//                                   </div>
//                                   <div className="flex-grow-1">
//                                     <span className="lh-1 d-block fw-semibold">
//                                       مختار حميد
//                                     </span>
//                                     <small>مشرف</small>
//                                   </div>
//                                 </div>
//                               </a>
//                             </li>
//                             <li>
//                               <div className="dropdown-divider"></div>
//                             </li>
//                             <li>
//                               <a
//                                 className="dropdown-item"
//                                 href="pages-profile-user.html"
//                               >
//                                 <i className="bx bx-user me-2"></i>
//                                 <span className="align-middle">من أنا </span>
//                               </a>
//                             </li>
//                             <li>
//                               <a
//                                 className="dropdown-item"
//                                 href="pages-account-settings-account.html"
//                               >
//                                 <i className="bx bx-cog me-2"></i>
//                                 <span className="align-middle">الضبط</span>
//                               </a>
//                             </li>
//                             <li>
//                               <a
//                                 className="dropdown-item"
//                                 href="pages-account-settings-billing.html"
//                               >
//                                 <span className="d-flex align-items-center align-middle">
//                                   <i className="bx bx-credit-card flex-shrink-0 me-2"></i>
//                                   <span className="flex-grow-1 align-middle">
//                                     الفواتير
//                                   </span>
//                                   <span className="badge badge-center rounded-pill w-px-20 h-px-20 flex-shrink-0 bg-danger">
//                                     4
//                                   </span>
//                                 </span>
//                               </a>
//                             </li>
//                             <li>
//                               <div className="dropdown-divider"></div>
//                             </li>
//                             <li>
//                               <a
//                                 className="dropdown-item"
//                                 href="pages-help-center-landing.html"
//                               >
//                                 <i className="bx bx-support me-2"></i>
//                                 <span className="align-middle">مساعدة</span>
//                               </a>
//                             </li>
//                             <li>
//                               <a className="dropdown-item" href="pages-faq.html">
//                                 <i className="bx bx-help-circle me-2"></i>
//                                 <span className="align-middle">
//                                   الأسئلة الشائعة{" "}
//                                 </span>
//                               </a>
//                             </li>
//                             <li>
//                               <a
//                                 className="dropdown-item"
//                                 href="pages-pricing.html"
//                               >
//                                 <i className="bx bx-dollar me-2"></i>
//                                 <span className="align-middle">التسعير</span>
//                               </a>
//                             </li>
//                             <li>
//                               <div className="dropdown-divider"></div>
//                             </li>
//                             <li>
//                               <a
//                                 className="dropdown-item"
//                                 href="auth-login-cover.html"
//                                 target="_blank"
//                               >
//                                 <i className="bx bx-power-off me-2"></i>
//                                 <span className="align-middle">المغادرة</span>
//                               </a>
//                             </li>
//                           </ul>
//                         </li>
    
//                         </ul>
//                     </div>
    
    
//                 </div>
//             </nav>
          
//             <div className="content-wrapper">
    
//                 <div className="row my-4">
    
    
    
//                     <div className="content-wrapper">
//                         <div>
                           
//                         {myName ? <div>  مختارحميد  </div> :  <div>  Mokhtar Hameed  </div>}
//                         </div>
    
//                         <div className="row my-4">
    
//     </div>
//     </div>
//     </div>
//     </div>
//     </div>
//     </div>
//     </div>
    
//   );
// };

// export default NewPage;





        // <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
        //   <div className="app-brand demo">
        //     <a href="index.html" className="app-brand-link">
        //       <span className="app-brand-logo demo">
        //         <img src="../public/vite.svg" />
        //       </span>
        //       <span className="app-brand-text demo menu-text fw-bold ms-2">Frest</span>
        //     </a>

        //     <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto">
        //       <i className="bx menu-toggle-icon d-none d-xl-block fs-4 align-middle"></i>
        //       <i className="bx bx-x d-block d-xl-none bx-sm align-middle"></i>
        //     </a>
        //   </div>

        //   <div className="menu-divider mt-0"></div>

        //   <div className="menu-inner-shadow"></div>

        //   <ul className="menu-inner py-1">
        //     <li className="menu-item">
        //       <a href="index.html" className="menu-link">
        //         <i className="menu-icon tf-icons bx bx-home-circle"></i>
        //         <div data-i18n="Email">Page 1</div>
        //       </a>
        //     </li>
        //     <li className="menu-item active">
        //       <a href="page-2.html" className="menu-link">
        //         <i className="menu-icon tf-icons bx bx-detail"></i>
        //         <div data-i18n="Email">Page 2</div>
        //       </a>
        //     </li>
        //   </ul>
        // </aside>