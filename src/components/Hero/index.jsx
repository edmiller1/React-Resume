import React from "react";
import { info } from "../../data/info";

export const Hero = () => {
  return (
    <div className="mt-20 px-20">
      <h1 className="hero-text tracking-tighter">{info.description}</h1>
      <div className="pt-3">
        <a href="https://github.com/edmiller1">
          <i class="social-link fab fa-github text-4xl cursor-pointer"></i>
        </a>
      </div>
    </div>
  );
};
