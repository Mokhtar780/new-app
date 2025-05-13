
import 'bootstrap';
import 'react-bootstrap';
const Statistics=()=>{

    return (

        <>
     <ul className="menu-inner py-1 ">
                      {/* Start قائمة رئيسية  */}
                      <li className="menu-item">
                        <a className="menu-link ">
                          <i className="menu-icon tf-icons bx bx-home-circle text-info"></i>
                          <div datatype="  قائمة رئيسية    ">
                            {" "}
                            قائمة رئيسية{" "}
                          </div>
                        </a>
                      </li>
                      {/* @*   end  قائمة رئيسية     *@ */}

                      {/* @*   Start     ادارة المستخدمين     *@ */}

                      <li className="menu-item ">
                        <a
                          href="javascript:void(0);"
                          className="menu-link menu-toggle "
                        >
                          <i className="menu-icon tf-icons fa fa-users  text-info"></i>
                          <div datatype=" ادارة المستخدمين  ">
                            {" "}
                            ادارة المستخدمين{" "}
                          </div>
                        </a>
                        <ul className="menu-sub">
                          <li className="menu-item ">
                            <a className="menu-link  text-info">
                              <small>
                                {" "}
                                <div datatype="   ادارة المستخدمين  ">
                                  {" "}
                                  ادارة المستخدمين{" "}
                                </div>
                              </small>
                            </a>
                          </li>
                          <li className="menu-item ">
                            <a className="menu-link  text-info">
                              <small>
                                {" "}
                                <div datatype="   العمليات من قبل المستخدمين  ">
                                  {" "}
                                  العمليات من قبل المستخدمين{" "}
                                </div>
                              </small>
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/* @*   end     ادارة المستخدمين     *@ */}

                      {/* @*  start   أدارة الفعاليات  *@ */}
                      <li className="menu-item">
                        <a
                          href="javascript:void(0);"
                          className="menu-link menu-toggle "
                        >
                          <i className="menu-icon tf-icons fa fa-hospital  text-info"></i>
                          <div datatype="  أدارة الفعاليات  ">
                            أدارة الفعاليات{" "}
                          </div>
                        </a>
                        <ul className="menu-sub">
                          {/* @*  start  أنشاء فعالية *@ */}
                          <li className="menu-item">
                            <a className="menu-link  text-info">
                              <small>
                                <div datatype="   أنشاء فعالية  ">
                                  أنشاء فعالية
                                </div>
                              </small>
                            </a>
                          </li>
                          {/* @*   end     أنشاء فعالية *@ */}

                          {/* @*  start  الفرص الأستثمارية  *@ */}
                          <li className="menu-item">
                            <a className="menu-link  text-info">
                              <small>
                                <div datatype="   الفرص الأستثمارية ">
                                  الفرص الأستثمارية
                                </div>
                              </small>
                            </a>
                          </li>
                          {/* @*   end   الفرص الأستثمارية   *@ */}

                          {/* @*  start الفئة المستهدفة  *@ */}
                          <li className="menu-item">
                            <a className="menu-link  text-info">
                              <small>
                                <div datatype="  الفئة المستهدفة ">
                                  الفئة المستهدفة
                                </div>
                              </small>
                            </a>
                          </li>
                          {/* @*   end    الفئة المستهدفة  *@ */}

                          {/* @*   start     أعداد اللجة االتحضيرية   *@ */}
                          <li className="menu-item">
                            <a className="menu-link text-info">
                              <small>
                                {" "}
                                <div datatype="  أعداد اللجة االتحضيرية   ">
                                  {" "}
                                  أعداد اللجة االتحضيرية{" "}
                                </div>
                              </small>
                            </a>
                          </li>
                          {/* @*   end    أعداد اللجة االتحضيرية   *@ */}

                          {/* @*   start     أعداد طاقم العمل   *@ */}
                          <li className="menu-item">
                            <a className="menu-link text-info">
                              <small>
                                {" "}
                                <div datatype="  أعداد طاقم العمل   ">
                                  {" "}
                                  أعداد طاقم العمل{" "}
                                </div>
                              </small>
                            </a>
                          </li>
                          {/* @*   end     أعداد طاقم العمل  *@ */}

                          {/* @*   start      أعداد الموازنة  *@ */}
                          <li className="menu-item">
                            <a className="menu-link text-info">
                              <small>
                                {" "}
                                <div datatype="  أعداد الموازنة   ">
                                  {" "}
                                  أعداد الموازنة{" "}
                                </div>
                              </small>
                            </a>
                          </li>
                          {/* @*   end     أعداد الموازنة  *@ */}

                          {/* @*  start  أعداد  المستلزمات  *@ */}
                          <li className="menu-item">
                            <a
                              href="javascript:void(0);"
                              className="menu-link menu-toggle text-info"
                            >
                              <small> أعداد المستلزمات </small>
                            </a>
                            <ul className="menu-sub">
                              {/* @*  start    طلب المستلزمات   *@ */}
                              <li className="menu-item">
                                <a className="menu-link ">
                                  <small>
                                    <small>
                                      <div datatype="  طلب المستلزمات  ">
                                        طلب المستلزمات
                                      </div>
                                    </small>
                                  </small>
                                </a>
                              </li>
                              {/* @*   end    طلب المستلزمات    *@ */}

                              {/* @*  start   مراجعة طلبات المستلزمات  *@ */}
                              <li className="menu-item">
                                <a className="menu-link ">
                                  <small>
                                    <div datatype=" مراجعة طلبات المستلزمات  ">
                                      مراجعة طلبات المستلزمات
                                    </div>
                                  </small>
                                </a>
                              </li>
                              {/* @*   end     مراجعة طلبات المستلزمات  *@ */}
                            </ul>
                          </li>
                          {/* @*   end   أعداد  المستلزمات    *@ */}

                          {/* @*  start  أعداد التنسيقات *@ */}
                          <li className="menu-item">
                            <a
                              href="javascript:void(0);"
                              className="menu-link menu-toggle text-info"
                            >
                              <small>أعداد التنسيقات</small>
                            </a>
                            <ul className="menu-sub">
                              {/* @*  start      طلب التنسيقات *@ */}
                              <li className="menu-item">
                                <a className="menu-link ">
                                  <small>
                                    <div datatype="      طلب التنسيقات  ">
                                      طلب التنسيقات
                                    </div>
                                  </small>
                                </a>
                              </li>
                              {/* @*   end      طلب التنسيقات    *@ */}

                              {/* @*  start  مراجعة طلبات التنسيقات  *@ */}
                              <li className="menu-item">
                                <a className="menu-link ">
                                  <small>
                                    <div datatype=" مراجعة طلبات التنسيقات  ">
                                      مراجعة طلبات التنسيقات
                                    </div>
                                  </small>
                                </a>
                              </li>
                              {/* @*   end     مراجعة طلبات التنسيقات  *@ */}
                            </ul>
                          </li>
                          {/* @*   end      أعداد التنسيقات   *@ */}

                          {/* @*   start      أعداد الخطة الزمنية  *@ */}
                          <li className="menu-item">
                            <a
                              href="javascript:void(0);"
                              className="menu-link menu-toggle text-info"
                            >
                              <small> أعداد الخطة الزمنية </small>
                            </a>
                            <ul className="menu-sub">
                              {/* @*   start     أعداد الأنشطة     *@ */}
                              <li className="menu-item">
                                <a
                                  asp-controller="Activity"
                                  asp-action="Index"
                                  className="menu-link "
                                >
                                  <small>
                                    <div datatype=" أعداد الأنشطة   ">
                                      أعداد الأنشطة
                                    </div>
                                  </small>
                                </a>
                              </li>
                              {/* @*   end     أعداد الأنشطة    *@ */}

                              {/* @*   start    أعداد المٌخرج    *@ */}
                              <li className="menu-item">
                                <a className="menu-link ">
                                  <small>
                                    <div datatype=" أعداد المٌخرج  ">
                                      أعداد المٌخرج
                                    </div>
                                  </small>
                                </a>
                              </li>
                              {/* @*   end     أعداد المٌخرج  *@ */}

                              {/* @*   start    أعداد تسجيل الحضور    *@ */}
                              <li className="menu-item">
                                <a className="menu-link ">
                                  <small>
                                    <div datatype=" أعداد تسجيل الحضور   ">
                                      أعداد تسجيل الحضور
                                    </div>
                                  </small>
                                </a>
                              </li>
                              {/* @*   end     أعداد تسجيل الحضور   *@ */}

                              {/* @*   start    أعداد التوثيق    *@ */}
                              <li className="menu-item">
                                <a className="menu-link ">
                                  <small>
                                    <div datatype="  أعداد التوثيق   ">
                                      أعداد التوثيق
                                    </div>
                                  </small>
                                </a>
                              </li>
                              {/* @*   end      أعداد التوثيق   *@ */}

                              {/* @*   start      أعداد الحملة الترويجية  *@ */}
                              <li className="menu-item">
                                <a className="menu-link ">
                                  <small>
                                    <div datatype=" أعداد الحملة الترويجية  ">
                                      أعداد الحملة الترويجية
                                    </div>
                                  </small>
                                </a>
                              </li>
                              {/* @*   end     أعداد الحملة الترويجية  *@ */}
                            </ul>
                          </li>
                          {/* @*   end      أعداد الخطة الزمنية   *@ */}

                          {/* @*   start    أعداد قائمة المدعوين     *@ */}
                          <li className="menu-item">
                            <a className="menu-link text-info">
                              <small>
                                {" "}
                                <div datatype="   أعداد قائمة المدعوين  ">
                                  {" "}
                                  أعداد قائمة المدعوين{" "}
                                </div>
                              </small>
                            </a>
                          </li>
                          {/* @*   end    أعداد قائمة المدعوين    *@ */}

                          {/* @*   start     أعداد قائمة المشاركين    *@ */}
                          <li className="menu-item">
                            <a className="menu-link text-info">
                              <small>
                                <div datatype="  أعداد قائمة المشاركين   ">
                                  {" "}
                                  أعداد قائمة المشاركين{" "}
                                </div>
                              </small>
                            </a>
                          </li>
                          {/* @*   end    أعداد قائمة المشاركين    *@ */}

                          {/* @*   start   أعداد قائمة الزوار      *@ */}
                          <li className="menu-item">
                            <a className="menu-link text-info">
                              <small>
                                <div datatype="   أعداد قائمة الزوار   ">
                                  {" "}
                                  أعداد قائمة الزوار{" "}
                                </div>
                              </small>
                            </a>
                          </li>
                          {/* @*   end    أعداد قائمة الزوار    *@ */}
                        </ul>
                      </li>
                      {/* @*   end    أدارة الفعاليات  *@ */}

                      {/* @*  start  إدارة محتوى الموقع  *@ */}
                      <li className="menu-item">
                        <a
                          href="javascript:void(0);"
                          className="menu-link menu-toggle "
                        >
                          <i className="menu-icon tf-icons fa fa-laptop text-info "></i>
                          <div datatype="  إدارة محتوى الموقع    ">
                            {" "}
                            إدارة محتوى الموقع{" "}
                          </div>
                        </a>
                        <ul className="menu-sub">
                          {/* @*  start      أضافة الفعالية الى الموقع *@ */}
                          <li className="menu-item">
                            <a className="menu-link text-info">
                              <small>
                                <div datatype="       أضافة الفعالية الى الموقع  ">
                                  أضافة الفعالية الى الموقع
                                </div>
                              </small>
                            </a>
                          </li>
                          {/* @*   end      أضافة الفعالية الى الموقع   *@ */}

                          {/* @*  start      أضافة الأخبار الى الموقع *@ */}
                          <li className="menu-item">
                            <a className="menu-link text-info">
                              <small>
                                <div datatype="       أضافة الأخبار الى الموقع  ">
                                  أضافة الأخبار الى الموقع
                                </div>
                              </small>
                            </a>
                          </li>
                          {/* @*   end      أضافة الأخبار الى الموقع   *@ */}

                          {/* @*  start  مراجعة التقييمات  *@ */}
                          <li className="menu-item">
                            <a className="menu-link text-info">
                              <small>
                                <div datatype=" مراجعة التقييمات   ">
                                  مراجعة التقييمات
                                </div>
                              </small>
                            </a>
                          </li>
                          {/* @*   end    مراجعة التقييمات  *@ */}
                        </ul>
                      </li>
                      {/* @*   end       إدارة محتوى الموقع *@ */}

                      {/* @*  start  التقارير *@ */}
                      <li className="menu-item">
                        <a className="menu-link">
                          <i className="menu-icon tf-icons fa fa-book-open text-info "></i>
                          <div datatype="  التقارير   ">التقارير</div>
                        </a>
                      </li>
                    </ul>
        </>
    );
}

export default Statistics;