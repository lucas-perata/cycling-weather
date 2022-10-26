import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex justify-center w-full gap-10">
      <button className="bg-white">
        <Link to="/">Home</Link>
      </button>
      <button className="bg-white">
        <Link to="/forecast">Próximos días</Link>
      </button>
      <button className="bg-white">
        <Link to="/wind-map">Mapa de viento</Link>
      </button>
      <button className="bg-white">
        <Link to="/tips">Tips</Link>
      </button>
    </div>
  );
};

export default Navigation;
