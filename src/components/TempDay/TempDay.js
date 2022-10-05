import React from "react";

export default function TempDay() {
  return (
    <div className="container bg-red-600 h-80 w-1/3 rounded-xl">
      <div className="flex flex-col justify-around  h-full">
        <div className="ml-7">
          <p className="p-5">{}</p>
          <p className="p-5">{}</p>
        </div>
        <div className="p-5  flex justify-around"></div>
      </div>
    </div>
  );
}
