import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap";
import "react-bootstrap";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "react-bootstrap";
import App from "./App";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider
      dir="ltr"
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
