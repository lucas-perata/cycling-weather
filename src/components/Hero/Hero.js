import React from "react";
import { GoMarkGithub } from "react-icons/go";

export default function Hero() {
  return (
    <div className="p-10 flex justify-between bg-gray-100 h-40 shadow">
      <div className="w-fit">
        <p className="text-2xl">Bienvenido a Cyclist Weather</p> <br />
        <p>Una aplicación diseñada para acompañar a los ciclistas día a día</p>
      </div>
      <div className="">
        <a
          href="https://github.com/lucas-perata/cycling-weather"
          target="blank"
        >
          <GoMarkGithub className="mt-3" style={{ fontSize: "2.5rem" }} />
        </a>
      </div>
    </div>
  );
}
