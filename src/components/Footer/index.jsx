import React from "react";
import { socials } from "../../data/social";
import { images } from "../../data/images";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <div className="px-20 mt-32">
      <div className="flex">
        <div className="w-1/2 flex">
          {images.map((i) => (
            <img
              src={`assets/${i}`}
              alt="img"
              className="rounded-full h-24 w-24 mx-3"
            />
          ))}
        </div>
        <div className="w-1/2 flex justify-center">
          <ul>
            {socials.map((s) => (
              <li className="links text-xl">
                <a href={s.link}>{s.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <h1 className="year">{currentYear}</h1>
      </div>
    </div>
  );
};
