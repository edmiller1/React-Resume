import React from "react";
import { socials } from "../../data/social";
import { images } from "../../data/images";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <div className="mt-24 md:mt-32 md:px-8 xl:px-20">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 pl-4">
          {images.map((i) => (
            <img
              key={i}
              src={`assets/${i}`}
              alt="img"
              className="rounded-3xl w-20 h-24 ml-10 md:mx-3 md:h-24 md:w-20 xl:h-28 xl:w-24"
            />
          ))}
        </div>
        <hr className="mx-5 my-5 md:hidden" />
        <div className="w-1/2 flex justify-center">
          <ul>
            {socials.map((s) => (
              <li key={s.title} className="links text-lg md:text-lg xl:text-xl">
                <a href={s.link}>{s.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-12 md:mt-20 pb-2">
        <h1 className="year">{currentYear}</h1>
      </div>
    </div>
  );
};
