import React from "react";
import logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <div className="py-3">
      <img src={logo} alt="logo" className="w-16" />
    </div>
  );
};
