import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navber";
import PerfectScrollbar from "perfect-scrollbar";
import Aside from "./components/aside";
import Card from "./components/Card";
import { Col } from "react-bootstrap";
// import Login from "./components/accounts/Login";

const App: React.FC = () => {
  // const [direction, setDirection] = useState<"ltr" | "rtl">("rtl");
  const [language, setLanguage] = useState(true);
  const [myName, setMyName] = useState(true);
  const [direction, setDirection] = useState("rtl");
  const [theme, setTheme] = useState("dark");
  const [isAsideVisible, setIsAsideVisible] = useState(false);

  useEffect(() => {
    const element = document.getElementById("vertical-example") as HTMLElement;
    const ps = new PerfectScrollbar(element, {
      wheelPropagation: false,
    });

    // تنظيف عند فك التركيب
    return () => {
      ps.destroy();
    };
  }, []);

  return (
    <>
      <div
        className={` layout-wrapper layout-content-navbar ${
          theme == "dark" ? "bodyDark" : "bodyLight"
        } `}
      >
        <div className="layout-container">
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
              direction={direction}
              setDirection={setDirection}
              language={language}
              setLanguage={setLanguage}
              isAsideVisible={isAsideVisible}
              setIsAsideVisible={setIsAsideVisible}
            />

            <div className="content-wrapper" dir={direction}>
              <div className="row my-4">
                {/* <Login theme={theme} direction={direction}  /> */}
               <Col>
                <Card  title={myName ? "  أهلاً وسهلاً بك عزيزي المستخدم  " : " Welcome dear user "}   theme={theme}> 💖 </Card>
              </Col>
              <Col></Col>
              <Col></Col>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
