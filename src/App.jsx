import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home.jsx";
import Menu from "../Pages/Menu/Menu.jsx";
import Tasks from "../Pages/Tasks/Tasks.jsx";
import Frens from "../Pages/Frens/Frens.jsx";

import "../public/css/bootstrap.css";
import "../public/css/_reset.css";
import style from "./App.module.css";

function App() {
  return (
    <div className="container">
      <div className="row ">
        <div
          className={
            " col-12  vh-100 col-sm-12  col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3  " +
            style.wrapper
          }
        >
          <Router>
            <Menu />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/frens" element={<Frens />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
