import React from "react";
import "./Card.css";

const SmallCard = ({ icon, info, title }) => {
  return (
    <div className="bg-blue-400 p-10 gap-5 w-1/2 h-38 card-width rounded-xl text-center flex justify-center flex-col">
      <h3 className="flex justify-center" style={{ fontSize: "2rem" }}>
        {icon}
      </h3>
      <p style={{ fontSize: "2.2rem" }}>{info}</p>
      <p>{title}</p>
    </div>
  );
};

export default SmallCard;
