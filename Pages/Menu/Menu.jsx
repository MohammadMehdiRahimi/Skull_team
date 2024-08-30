import React from "react";
import style from "./Menu.module.css";
export default function Menu() {
  return (
    <div className={" " + style.wrapper}>
      <i className="fa-solid fa-house menu-active "></i>
      <i className="fa-solid fa-list-check"></i>
      <i className="fa-solid fa-users"></i>
    </div>
  );
}
