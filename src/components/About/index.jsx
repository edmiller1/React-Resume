import React from "react";
import { about } from "../../data/about";
import { stack } from "../../data/stack";

export const About = () => {
  return (
    <div className="flex mt-20 px-20">
      <div className="w-1/2 about-text">
        <p className="my-10 text-xl">{about.currentWork}</p>
        <p className="my-10 text-xl">{about.skills}</p>
        <p className="my-5 text-xl">{about.currentStack}</p>
        <ul className="ml-3 mb-10">
          {stack.map((s) => (
            <li className="flex">- {s}</li>
          ))}
        </ul>
        <p className="my-10 text-xl">{about.currentProjects}</p>
        <p className="my-10 text-xl">{about.hobbies}</p>
      </div>
      <div className="w-1/2 flex justify-end">
        <img
          src={`assets/${about.image}`}
          alt="cats in bag"
          className="profile-image rounded-3xl"
        />
      </div>
    </div>
  );
};
