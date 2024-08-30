import React from "react";
import style from "./Frens.module.css";

export default function Frens() {
  const frensArray = [
    {
      name: "The UPX",
      img: "../../public/Image/OIP.jpg",
      frens: 0,
      sp: "40,956 SP",
      id: 1,
    },
  ];
  return (
    <div
      className={
        "d-flex flex-column justify-content-center align-items-center " +
        style.container
      }
    >
      <h1>Invite Frens</h1>
      <div
        className={
          "d-flex flex-column  justify-content-start align-items-start align-self-start mt-3 w-100 " +
          style.wrapper
        }
      >
        <div className={"  " + style.totalSp}>
          <p>1,500 SP</p>
          <button className="btn bg-success p-2 my-2">Claim</button>
        </div>
        <div
          className={
            "mt-3 w-100 p-3 d-flex flex-column justify-content-between  " +
            style.frens
          }
        >
          <h3 className="fs-18 mb-3 ">1 Frens</h3>
          {frensArray.length > 0
            ? frensArray.map((item) => (
                <div
                  key={item.id}
                  className={
                    "d-flex  justify-content-between aling-items.start border-bottom p-2  " +
                    style.frensWrapper
                  }
                >
                  <div
                    className={
                      "d-flex justify-content-between align-items-center  " +
                      style.leftArray
                    }
                  >
                    <div className={"mr-3  " + style.image}>
                      <img src={item.img} alt="" />
                    </div>
                    <div className={"fs-14  " + style.details}>
                      <p>{item.name}</p>
                      <p>{item.frens} Frens</p>
                    </div>
                  </div>
                  <div className={"  " + style.rightArray}>{item.sp}</div>
                </div>
              ))
            : ""}
        </div>
        <button type="btn submit" className={style.inviteButton}>Invite a fren</button>
      </div>
    </div>
  );
}
