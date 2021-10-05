import React from "react";
import { work } from "../../data/work";

export const Work = () => {
  return (
    <div className="mt-32 pb-10 px-20">
      <h1 className="text-6xl font-bold">My Work</h1>
      <div className="mt-32">
        {work.map((w) => (
          <div className="my-16 flex">
            <div className="w-1/3 flex flex-col justify-center">
              <div className="my-10">
                <h1 className="text-4xl font-extrabold">{w.name}</h1>
              </div>
              <p className="my-5 text text-xl">{w.description}</p>
              <p className="my-5 text text-xl">{w.additional}</p>
              <div className="my-10">
                <a href={w.link} className="flex items-center">
                  <span className="secondary-text-color text-2xl font-extrabold">
                    {w.name}
                    &nbsp;
                    <i class="fas fa-long-arrow-alt-right relative top-1"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="w-2/3 flex justify-center relative left-20 top-20">
              <img
                src={`assets/${w.image}`}
                alt="screenshot"
                className="work-image rounded-3xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
