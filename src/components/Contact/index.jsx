import React from "react";

export const Contact = () => {
  return (
    <div className="contact-bg w-full">
      <div className="flex items-center">
        <h1 className="relative top-20 text-6xl font-extrabold px-20">
          Let's work together
        </h1>
        <button className="button relative top-20 left-72 py-3 px-8 rounded-full text-2xl">
          <a href="mailto:edmiller.me@gmail.com"> Email</a>
        </button>
      </div>
    </div>
  );
};
