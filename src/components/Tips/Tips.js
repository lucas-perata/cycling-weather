import React from "react";
import TipsCard from "./TipsCard";
import {
  GiWaterFlask,
  GiFlatTire,
  GiAstronautHelmet,
  GiEyepatch,
} from "react-icons/gi";
import { BsEmojiSunglasses } from "react-icons/bs";
import { MdOutlineFastfood } from "react-icons/md";

export default function Tips() {
  return (
    <>
      <section className="flex text-white flex-col bg-slate-900 w-3/4 xs:flex-col xs:w-full xs:pb-4">
        <div className="flex flex-col justify-evenly h-full xs:w-screen">
          <div className="ml-7 text-center">
            <h2 style={{ fontSize: "3rem" }} className="text-white">
              Tips para tu rodada
            </h2>
          </div>
          <div className="flex flex-row text-white text-lg p-7 gap-2 justify-evenly flex-wrap">
            <TipsCard
              content={"Utilizar protector solar"}
              icon={<BsEmojiSunglasses />}
            />
            <TipsCard content={"Llevar hidratación"} icon={<GiWaterFlask />} />
            <TipsCard
              content={"Comprobar presión de las cubiertas"}
              icon={<GiFlatTire />}
            />
            <TipsCard content={"Llevar casco"} icon={<GiAstronautHelmet />} />
            <TipsCard
              content={"Llevar algo dulce y/o salado"}
              icon={<MdOutlineFastfood />}
            />
            <TipsCard
              content={"Equipar repuesto de cámara y parches"}
              icon={<GiEyepatch />}
            />
          </div>
        </div>
      </section>
    </>
  );
}
