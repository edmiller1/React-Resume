import React from "react";
import { work } from "../../data/work";

export const Work = () => {
  return (
    <div className="px-5 md:px-8 mt-32 pb-10 xl:px-20">
      <h1 className="text-5xl font-bold md:text-6xl md:tracking-tighter">
        My Work
      </h1>
      <div className="md:mt-32">
        {work.map((w) => (
          <div key={w.name} className="my-16 md:flex">
            <div className="flex flex-col md:w-1/3 md:mr-20 xl:justify-center">
              <div className="my-10">
                <h1 className="text-4xl font-extrabold">{w.name}</h1>
              </div>
              <p className="description-text my-3 md:my-5 md:text-lg xl:text-xl">
                {w.description}
              </p>
              <p className="description-text my-3 md:my-5 md:text-lg xl:text-xl">
                {w.additional}
              </p>
              <div className="my-5 xl:my-10 flex items-center">
                <a
                  href={w.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mr-5"
                >
                  <i class="social-link fab fa-github text-3xl xl:cursor-pointer"></i>
                </a>
                <a href={w.link} target="_blank" rel="noreferrer">
                  <span className="secondary-text-color font-extrabold md:text-xl xl:text-2xl">
                    {w.name}
                    &nbsp;
                    <i class="fas fa-long-arrow-alt-right relative top-1"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="md:w-2/3 flex justify-center md:relative md:top-28 xl:top-20 xl:left-20">
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
