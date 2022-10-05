import React from "react";

function Card({ img }) {
  return (
    <>
      <div
        className="container bg-red-600 h-80 w-1/4 rounded-xl"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-around  h-full">
          <div className="ml-7">
            <p className="p-5">{}</p>
            <p className="p-5">{}</p>
          </div>
          <div className="p-5 flex justify-around">
            <div className="bg-black w-24 h-20 rounded-xl">asd</div>
            <div className="bg-black w-24 h-20 rounded-xl">asd</div>
            <div className="bg-black w-24 h-20 rounded-xl">asd</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
