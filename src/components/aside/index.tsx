interface IEvent{

  theme : string ;
  myName : boolean;
  direction : string;
  isAsideVisible : boolean;
  
}

const Aside = ({theme,myName,direction,isAsideVisible}:IEvent) =>{
 
    const MenuParantAr="الرئيسية",MenuChiledAr1="التــرفـيـــة",MenuChiledAr2=" أستكشاف ";

    const MenuParantEn="Home",MenuChiledEn1="Entertainment",MenuChiledEn2=" Explore ";
 
 
 
 return <>
  <aside
            id="layout-menu"
            className={` menu-vertical   ${isAsideVisible ? "" : "d-none"}
            ${theme == "dark" ? "myDark borderColorLight" : "myLight borderColorDark"}

             ${direction == "ltr" ? "english dirLeft" : "arabic dirRight"}
           
            `}
          >
            <div className="app-brand demo">
              <div className={`   sidebar `}>
                <div className="sidebar-header p-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <h6 className="mb-0"> {myName ? " القائمة" : " Menu "} </h6>
                    <div className="d-flex gap-2">
                      <button
                        type="button"
                        className="btn text-nowrap d-inline-block me-3"
                      >
                        <span className="badge bg-primary badge-notifications  text-danger">
                          6
                        </span>
                        <span
                          className={` tf-icons bx bx-envelope ${
                            theme == "dark" ? "text-white" : "text-black"
                          } `}
                        ></span>
                      </button>
                      <button
                        type="button"
                        className="btn text-nowrap d-inline-block me-3"
                      >
                        <span className="badge bg-primary badge-notifications  text-danger">
                          3
                        </span>
                        <i
                          className={` bi bi-gear ${
                            theme == "dark" ? "text-white" : "text-black"
                          } `}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-3 border-bottom">
                  <div className="d-flex align-items-center">
                    <div className="avatar me-2">
                      <img
                        src="../images/my4.jpg"
                        alt="Avatar"
                        className="rounded"
                      />
                    </div>{" "}
                    <div>
                      <h6 className="mb-0">
                        {" "}
                        <small>
                          {" "}
                          <small>
                            {myName ? "مختار اليعري " : "Mokhtar AL-Yara'a "}
                          </small>
                        </small>
                      </h6>
                      <small className="text-info">
                        <span className="user-status"></span>{" "}
                        <small>
                          {" "}
                          <small> {myName ? "متصل " : "  Connected "}</small>
                        </small>
                      </small>
                    </div>
                  </div>
                </div>

                <div
                  id="vertical-example"
                  style={{
                    position: "relative",
                    height: "300px",
                    overflow: "hidden",
                  }}
                >
                  {/* محتوى قابل للتمرير */}
                  <div style={{ height: "600px" }}>
                    <div className="accordion" id="accordionExample">
                      {/* @*   Start     ادارة الرئيسية     *@ */}
          <div className="card accordion-item  " >
                

                <a className="accordion-header bgAndColor" id="headingOne">
                  <button
                    type="button"
                    className="accordion-button theMenuAsideStyle"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordionOne"
                    aria-expanded="true"
                    aria-controls="accordionOne"
                    role="tabpanel"
                  >
                    
                    <i className="menu-icon tf-icons bx bx-home-circle  text-info"></i>{" "}
                      &nbsp;&nbsp;   <small>{myName ? MenuParantAr: MenuParantEn} </small>
                  </button>
                </a>

                <div
               
                  id="accordionOne"
                  className="accordion-collapse collapse  bgAndColor"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body" >
                    <button
                      type="button"
                      className="btn btn-xs btn-sm asideStyle"
                    >
                      {" "}
                      <i className="menu-icon tf-icons fa fa-play text-white"></i>{" "}
                      &nbsp; <small>{myName ? MenuChiledAr1 : MenuChiledEn1} </small>
                    </button>
                    <button
                      type="button"
                      className="btn btn-xs btn-sm asideStyle"
                    >
                      {" "}
                      <i className="menu-icon tf-icons fa fa-book text-white"></i>{" "}
                      &nbsp; <small> {myName ? MenuChiledAr2 : MenuChiledEn2} </small>
                    </button>
                  </div>
                </div>
              </div>
           
{/* @*   end     ادارة الرئيسية     *@ */}
                      {/* @*  start   أدارة المستخدمين  *@ */}
                      <div className="card accordion-item  ">
                        <a
                          className="accordion-header bgAndColor"
                          id="headingTow"
                        >
                          <button
                            type="button"
                            className="accordion-button theMenuAsideStyle"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordionTow"
                            aria-expanded="true"
                            aria-controls="accordionTow"
                            role="tabpanel"
                          >
                            <i className="menu-icon tf-icons fa fa-users text-info"></i>{" "}
                            &nbsp;&nbsp;{" "}
                            <small>{myName ? " المستخدمون " : " Users "}</small>
                          </button>
                        </a>

                        <div
                          id="accordionTow"
                          className="accordion-collapse collapse  bgAndColor"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <button
                              type="button"
                              className="btn btn-xs btn-sm asideStyle"
                            >
                              {" "}
                              <i className="menu-icon tf-icons fa fa-user text-white"></i>{" "}
                              &nbsp;
                              <small>
                                {" "}
                                {myName
                                  ? "  إدارة المستـخـــدميــن "
                                  : " User Management "}
                              </small>
                            </button>
                            <button
                              type="button"
                              className="btn btn-xs btn-sm asideStyle"
                            >
                              {" "}
                              <i className="menu-icon tf-icons fa fa-user text-white"></i>{" "}
                              &nbsp;
                              <small>
                                {" "}
                                {myName
                                  ? " عمليات المستخدمين "
                                  : " User Operations  "}
                              </small>
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* @*   end    أدارة المستخدمين  *@ */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
  
  
  </>;
};
export default Aside;
