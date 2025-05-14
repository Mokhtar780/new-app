import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navber";
import Aside from "./components/aside";
import { Col } from "react-bootstrap";
import CardHomePag from "./components/CardHomePag";
import Login from "./components/accounts/Login";

const App = () => {
  const [language, setLanguage] = useState(true);
  const [login, setLogin] = useState(false);
  const [myName, setMyName] = useState(true);
  const [direction, setDirection] = useState("rtl");
  const [theme, setTheme] = useState("dark");
  const [isAsideVisible, setIsAsideVisible] = useState(false);



  return (
    <>
      <div
        className={` layout-wrapper layout-content-navbar ${
          theme == "dark" ? "bodyDark" : "bodyLight"
        } `}
      >
        <div className="layout-container">
          {login ? (
            <>
              <Aside
                theme={theme}
                myName={myName}
                direction={direction}
                isAsideVisible={isAsideVisible}
              />

              <div className={`main-content`}>
                <Navbar
                  theme={theme}
                  setTheme={setTheme}
                  myName={myName}
                  setMyName={setMyName}
                  setDirection={setDirection}
                  direction={direction}
                  language={language}
                  setLanguage={setLanguage}
                  isAsideVisible={isAsideVisible}
                  setIsAsideVisible={setIsAsideVisible}
                  setLogin={setLogin}
                />

                <div className="content-wrapper" dir={direction}>
                  <div className="row my-4">
                    <Col>
                      <CardHomePag myName={myName} theme={theme} />
                    </Col>
                    <Col></Col>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="content-wrapper" dir={direction}>
              <div className="row my-4">
                {" "}
                <Login
                   theme={theme}
                   setTheme={setTheme}
                   myName={myName}
                   setMyName={setMyName}
                   setDirection={setDirection}
                   direction={direction}
                   language={language}
                   setLanguage={setLanguage}
                  setLogin={setLogin}
                />{" "}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default App;
