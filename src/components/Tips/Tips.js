import React from "react";

export default function Tips() {
  return (
    <>
      <div
        className="container bg-white border h-80 w-1/4 rounded-xl shadow"
        style={{
          backgroundImage: `url(https://media.istockphoto.com/vectors/road-to-mountains-vector-id1336320163?b=1&k=20&m=1336320163&s=612x612&w=0&h=_-pjf0NizOrDwUAIrJgSv2TF0dA-9JQcl0j0XhxHQeA=)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-evenly h-full">
          <div className="ml-7">
            <p className="text-2xl">Tips para tu rodada</p>
          </div>
          <div className="flex flex-col text-white text-lg p-7 gap-2 justify-around">
            <p>Llevar protector solar</p>
            <p>Utilizar casco y guantes</p>
            <p>Llevar hidratación y snacks</p>
            <p>Cámaras y parches además de herramientas</p>
          </div>
        </div>
      </div>
    </>
  );
}
