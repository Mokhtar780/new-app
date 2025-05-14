import "./Login.scss";
import { useState } from "react";
import "bootstrap-select";
import "bootstrap";
import { Form } from "react-bootstrap";
import NavLogin from "./NavLogin";

interface IEvent{
  direction:string;
  theme:string;
  myName:boolean;
  language:boolean;
  setLogin :(val :boolean)=>void;
  setLanguage :(val :boolean)=>void;
  setTheme: (val: string) => void;
  setMyName: (val: boolean) => void;
  setDirection: (val: string) => void;
  
}
const Login = ({ theme, myName, direction,language,setLanguage,  setTheme, setMyName, setDirection,setLogin }: IEvent) => {
  const [valueUserName, setValueUserName] = useState<string>("");
  const [valuePassword, setValuePassword] = useState<string>("");

  return (
    <>
      <div
        className={`authentication-wrapper authentication-cover  
      ${
              theme == "dark"
                ? "myDark borderColorLight"
                : "myLight borderColorDark"
            }

             ${direction == "ltr" ? "english dirLeft" : "arabic dirRight"}
           
            `}
      >
        <div className="authentication-inner row m-0">
          <div className="d-none d-lg-flex col-lg-7 col-xl-8 align-items-center">
            <div className="flex-row text-center mx-auto">
           
            </div>
          </div>
          <div className={`main-content`}>
                <NavLogin
                  theme={theme}
                  myName={myName}
                  language={language}
                  direction={direction}
                  setLanguage={setLanguage}
                  setTheme={setTheme}
                  setMyName={setMyName}
                  setDirection={setDirection}
                  />
                </div>
          <div className={` authentication-bg d-flex col-12 align-items-center ScreenPosition
           
            `}>
            <div className="w-px-700 mx-auto">
              <div  className="app-brand-link gap-2 mb-2">
                <span className="app-brand-text demo h4 fw-bold mb-1 ">
                  <b> {myName ? " تسجيل الدخول"  : " Log in " }  </b>
                </span>
              </div>
              <h6 className="mb-2">
              {myName ? " فضلاً ــ تسجيل الدخول لكي تستطيع أستخدام النظام . "  : " Please ــ Log In To Use The System . " } 
                
              </h6>

              <Form.Floating className="mb-2">
                <Form.Control
                className={`${direction == "ltr" ? "english dirLeft" : "arabic dirRight"}`}
                  id="floatingInputCustom"
                  type="email"
                  placeholder=""
                  value={valueUserName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setValueUserName(e.target.value)
                  }
                />
                <label htmlFor="floatingInputCustom"  className={`text-black `}>  {myName ? " أســم المستخدم أو الإيميل  "  : " UserName or Email " } </label>
              </Form.Floating>
              <div className="d-flex justify-content-between">
                <label className="form-label" htmlFor="password"></label>
                <a href="">
                  <small>  {myName ? " نسيت كلمة المرور ؟  "  : " Forgot Your Password ? " } </small>
                </a>
              </div>
               
              <Form.Floating>
                <Form.Control
                  className={`${direction == "ltr" ? "english dirLeft" : "arabic dirRight"} `}
                  id="floatingPasswordCustom"
                  type="password"
                  placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                  value={valuePassword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setValuePassword(e.target.value)
                  }
                  
                />
                <label htmlFor="floatingPasswordCustom" className={`text-black `}>{myName ? " كلمة المرور  "  : " Password " }  </label>
              </Form.Floating>

              <div className="mb-2">
                <div className="card flex flex-wrap justify-content-center gap-3"></div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="remember-me"
                  />
                  <label className="form-check-label" htmlFor="remember-me">
                  {myName ? " ذكرني "  : " Remind Me " }  
                  </label>
                </div>
              </div>
              <button
                className="btn btn-primary Backlogin fontstyle d-grid w-100"
                
                onClick={()=> {
                  if (valueUserName=="123" && valuePassword =="123") {
                    setLogin(true);
                  }else{
                      alert(myName ? " يوجد خطأ في أسم المستخدم أو كلمة المرور . " :" There is an error in the username or password.");
                      setValuePassword("");
                      setValueUserName("");
                  }
                }}
              >
               {myName ? " تسجيل الدخول "  : " Log In " } 
               
              </button>
              <hr />
              <p className="text-center">
                <span>
                  <b>
                    <small>{myName ? " لا يـــوجـد حســاب ؟ "  : " No account? " } </small>
                  </b>
                </span>
                <a href="/">
                  <span>
                    {" "}
                    <b>
                      <small> {myName ? " أنشـــاء حسـاب "  : " Create an account " } </small>
                    </b>
                  </span>
                </a>
              </p>

              <div className="divider my-4">
                <div className="divider-text text-primary">
                  <b>  {myName ? " أو "  : " Or " }  </b>
                </div>
              </div>

              <div className="d-flex justify-content-center mb-3">
                <a
                  href="javascript:;"
                  className="btn btn-icon btn-label-facebook me-3 text-white text-cenetr bg-primary"
                >
                  <i className="tf-icons bx bxl-facebook"></i>
                </a>

                <a
                  href="javascript:;"
                  className="btn btn-icon btn-label-google-plus me-3 text-white text-cenetr bg-danger"
                >
                  <i className="tf-icons bx bxl-google-plus"></i>
                </a>

                <a
                  href="javascript:;"
                  className="btn btn-icon btn-label-twitter  me-3  text-white text-cenetr bg-info"
                >
                  <i className="tf-icons bx bxl-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

