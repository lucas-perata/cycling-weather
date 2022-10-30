import React from "react";

const TipsCard = ({ content, icon }) => {
  return (
    <div className="bg-slate-800 hover:bg-slate-700 w-1/4 h-52 mb-5 rounded-xl flex flex-col gap-4 text-center justify-center xs:w-11/12">
      <i style={{ fontSize: "4rem" }} className="self-center">
        {icon}
      </i>
      <p>{content}</p>
    </div>
  );
};

export default TipsCard;
