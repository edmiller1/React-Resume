import React from "react";
import { about } from "../../data/about";
import { stack } from "../../data/stack";
import { emojis } from "../../data/emojis";

const emoji = emojis[Math.floor(Math.random() * emojis.length)];

export const About = () => {
  return (
    <div className="px-5 mt-20 md:px-8 md:flex xl:px-20">
      <div className="about-text md:w-5/12 xl:w-1/2">
        <p className="my-3 md:text-lg xl:text-xl xl:my-10">
          {about.currentWork}
        </p>
        <p className="my-3 md:text-lg xl:text-xl xl:my-10">{about.skills}</p>
        <p className="my-3 md:text-lg xl:text-xl xl:my-5">
          {about.currentStack}
        </p>
        <ul className="ml-3 xl:mb-10">
          {stack.map((s) => (
            <li key={s} className="flex">
              - {s}
            </li>
          ))}
        </ul>
        <p className="my-3 md:text-lg xl:text-xl  xl:my-10 ">
          {about.currentProjects}
        </p>
        <p className="my-3 md:text-lg xl:text-xl xl:my-10">
          {about.hobbies}&nbsp;{emoji}
        </p>
      </div>
      <div className="mt-16 flex justify-center md:w-7/12 md:mr-12 xl:w-1/2 md:justify-end">
        <img
          src={`assets/${about.image}`}
          alt="profile"
          className="profile-image rounded-3xl"
        />
      </div>
    </div>
  );
};
