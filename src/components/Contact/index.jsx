import React from "react";

export const Contact = () => {
  return (
    <div className="contact-bg w-full">
      <div className="flex flex-col justify-center md:flex-row md:items-center md:justify-between md:py-20 xl:px-32">
        <h1 className="m-auto text-4xl mt-14 md:mt-0 md:text-6xl font-extrabold md:ml-14">
          Let's work together
        </h1>
        <button className="m-auto button mt-5 md:mt-0 md:mr-20 py-3 px-8 rounded-full text-2xl">
          <a href="mailto:edmiller.me@gmail.com">Email</a>
        </button>
      </div>
    </div>
  );
};
