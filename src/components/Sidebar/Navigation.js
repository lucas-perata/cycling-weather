import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex justify-center text-slate-300 w-full gap-10 p-4 border border-slate-700 shadow-2xl">
      <button className="hover:text-slate-500">
        <Link to="/">Home</Link>
      </button>
      <button className="hover:text-slate-500">
        <Link to="/forecast">Próximos días</Link>
      </button>
      <button className="hover:text-slate-500">
        <Link to="/tips">Tips</Link>
      </button>
    </div>
  );
};

export default Navigation;
