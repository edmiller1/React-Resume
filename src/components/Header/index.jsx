import React from "react";
import { info } from "../../data/info";

export const Header = () => {
  return (
    <div className="px-5 md:py-3 md:px-8 xl:py-3 xl:px-20">
      <img src={`assets/${info.logo}`} alt="logo" className="w-12 xl:w-16" />
    </div>
  );
};
