import "./Login.scss";

import 'bootstrap-select';
const bsValidationForms = document.querySelectorAll<HTMLFormElement>(".needs-validation");

// Loop over them and prevent submission
Array.from(bsValidationForms).forEach((form) => {
  form.addEventListener(
    "submit",
    (event: Event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        // Submit your form
        alert("Submitted!!!");
      }

      form.classList.add("was-validated");
    },
    false
  );
});






interface IEvent{
    theme:string;
    direction:string;
}

const Login = ({theme,direction}:IEvent) => {


  return (
    <>
       <div
        className={`authentication-wrapper authentication-cover  
      ${theme == "dark" ? "bodyDark" : "bodyLight"}
       ${direction == "ltr" ? "english dirLeft" : "arabic dirRight"}
      `}
      >
        <div className="authentication-inner row m-0">
          <div className="d-none d-lg-flex col-lg-7 col-xl-8 align-items-center">
            <div className="flex-row text-center mx-auto">
              <img
                src="~/images/img/my.ico"
                alt="Auth Cover Bg color"
                width="520"
                className="img-fluid authentication-cover-img  img"
                data-app-light-img="../../assets/img/my.jpg"
                data-app-dark-img="../../assets/img/my.jpg"
              />
            </div>
          </div>
          <div className="authentication-bg d-flex col-12 align-items-center ">
            <div className="w-px-700 mx-auto">
              <a href="/" className="app-brand-link gap-2 mb-2">
                <span className="app-brand-text demo h3 fw-bold mb-0 ">
                  <b>تسجيل الدخول</b>
                </span>
                <span className="app-brand-logo demo">
                  <img
                    src="~/images/img/my1.jpg"
                    className="img"
                    alt="Auth Cover Bg color"
                  />
                </span>
              </a>

              <h4 className="mb-2 fontstyle">أهلاً وسهلاُ بك 👋</h4>
              <p className="mb-4">
                فضلاُ يرجاء تسجيل الدخول بحسابك لكي تستطيع أستخدام النظام
              </p>

              <form
                id="formAuthentication"
                className="mb-3"
                action="index.html"
                method="POST"
              >
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    {" "}
                    أسم المستخدم أو الأيميل{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email-username"
                    placeholder=" يرجاء أدخال أسم المستخدم أو الأيميل"
                    autoFocus
                  />
                </div>
                <div className="form-password-toggle mb-3">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" htmlFor="password">
                      كلمة السر
                    </label>
                    <a href="auth-forgot-password-cover.html">
                      <small>نسيت كلمة السر ؟</small>
                    </a>
                  </div>
                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                    />
                    <span className="input-group-text cursor-pointer">
                      <i className="bx bx-hide"></i>
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="remember-me"
                    />
                    <label className="form-check-label" htmlFor="remember-me">
                      {" "}
                      ذكرني{" "}
                    </label>
                  </div>
                </div>
                <button
                  className="btn btn-primary Backlogin fontstyle d-grid w-100"
                  asp-area="default"
                  asp-controller="Home"
                  asp-action=""
                >
                  دخول
                </button>
              </form>

              <p className="text-center">
                <span>هل انت جديد ؟</span>
                <a href="/">
                  <span>أنشاء حساب</span>
                </a>
              </p>

              <div className="divider my-4">
                <div className="divider-text">أو</div>
              </div>

              <div className="d-flex justify-content-center">
                <a
                  href="javascript:;"
                  className="btn btn-icon btn-label-facebook me-3"
                >
                  <i className="tf-icons bx bxl-facebook"></i>
                </a>

                <a
                  href="javascript:;"
                  className="btn btn-icon btn-label-google-plus me-3"
                >
                  <i className="tf-icons bx bxl-google-plus"></i>
                </a>

                <a
                  href="javascript:;"
                  className="btn btn-icon btn-label-twitter"
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
