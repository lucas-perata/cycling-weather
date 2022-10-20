import React from "react";
import "./Card.css";

const BigCard = ({ title, info, details }) => {
  return (
    <div className="bg-blue-400 h-64 card-width rounded-xl">
      <h3>{title}</h3>
      <p>{info}</p>
      <p>{details}</p>
    </div>
  );
};

export default BigCard;
