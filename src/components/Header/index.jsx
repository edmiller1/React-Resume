import React from "react";
import { info } from "../../data/info";

export const Header = () => {
  return (
    <div className="py-3 px-20">
      <img src={`assets/${info.logo}`} alt="logo" className="w-16" />
    </div>
  );
};
