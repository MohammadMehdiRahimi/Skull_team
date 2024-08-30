import React from "react";
import style from "./Tasks.module.css";
import TaskItem from "../../Components/item/TaskItem.jsx";
export default function Tasks() {
  const taskArray = [
    {
      taskTitle: "Skull Socials",
      taskNumber: 3,
      taskId: 1,
      taskText:
        "Join SKULL comunity.Be aware of new and following updates.Find your tribe in SKULL ",
      taskBody: [
        {
          title: "BOOST SKULL",
          gift: "500",
          id: 1,
        },
        {
          title: "SKULL ON X",
          gift: "200",
          id: 2,
        },
        {
          title: "SKULL ON  INSTAGRAM",
          gift: "200",
          id: 3,
        },
      ],
    },
  ];
  return (
    <div
      className={
        "d-flex flex-column justify-content-center align-items-center " +
        style.container
      }
    >
      <h1>TASKS</h1>
      <div
        className={
          "d-flex flex-column  justify-content-start align-items-start align-self-start mt-3 w-100 " +
          style.wrapper
        }
      >
        {taskArray.length > 0
          ? taskArray.map((item) => <TaskItem key={item.taskId} data={item} />)
          : ""}
      </div>
    </div>
  );
}
