import React from "react";
import style from "./TaskItem.module.css";
export default function TaskItem({ data }) {
  const { taskTitle, taskNumber, taskText, taskBody } = data;
  return (
    <div className={"w-100 fs-14  " + style.wrapper}>
      <div
        className={
          "d-flex justify-content-between align-items-center " + style.title
        }
      >
        <h3 className="fs-18">{taskTitle}</h3>
        <span>{taskNumber} Tasks</span>
      </div>
      <div className={"fs-14  " + style.describtion}>
        <p>{taskText}</p>
      </div>
      <div className={"  " + style.items}>
        {taskBody.length > 0
          ? taskBody.map((item) => (
              <div
                key={item.id}
                className={
                  "d-flex justify-content-between align-items-center  " +
                  style.item
                }
              >
                <p>{item.title}</p>
                <p>{item.gift} SP</p>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
