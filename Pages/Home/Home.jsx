import React from "react";
import style from "./Home.module.css";
export default function Home() {
  return (
    <div
      className={
        "d-flex flex-column justify-content-center align-items-center " +
        style.container
      }
    >
      <h1>SKULL COIN</h1>
      <div
        className={
          "d-flex  justify-content-center align-items-center    " +
          style.wrapper
        }
      >
        <span>1,000</span>
        <i className="fa-solid fa-coins"></i>
      </div>
    </div>
  );
}
