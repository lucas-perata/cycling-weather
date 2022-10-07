import React from "react";

function Card({
  type,
  img,
  subtype,
  data,
  subdata,
  box1,
  box2,
  box3,
  box1Title,
  box2Title,
  box3Title,
  subData,
}) {
  return (
    <>
      <div
        className="container bg-red-600 h-80 w-1/4 rounded-xl xs:w-full"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-around h-full xs:w-full">
          <div className="ml-7">
            <p className=" text-2xl">{type}</p>
            <p className="">{subtype}</p>
          </div>
          <div className="ml-7">
            <p className=" text-2xl">{data}°C</p>
            <p className="">{subData}</p>
          </div>
          <div className=" flex justify-around text-center">
            <div className="bg-white w-24 h-20 rounded-xl flex justify-center flex-col">
              <p className="text-xs p-1">{box1Title}</p>
              <p>{box1}</p>
            </div>
            <div className="bg-yellow-100 w-24 h-20 rounded-xl flex justify-center flex-col">
              <p className="text-xs p-1">{box2Title}</p>
              <p>{box2}</p>
            </div>
            <div className="bg-yellow-200 w-24 h-20 rounded-xl flex justify-center flex-col">
              <p className="text-xs p-1">{box3Title}</p>
              <p>{box3}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
