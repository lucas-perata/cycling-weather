import React from "react";
import "./Card.css";

const BigCard = ({ title, info, details, icon }) => {
  return (
    <div className="bg-blue-400 h-64 p-10 gap-5 card-width rounded-xl text-center flex justify-center flex-col">
      <h3 className="">{title}</h3>
      <p style={{ fontSize: "3rem" }}>{info}</p>
      <div
        style={
          title === "Viento"
            ? {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
              }
            : { display: "block" }
        }
      >
        <p>{details}</p> <i>{icon}</i>
      </div>
    </div>
  );
};

export default BigCard;
