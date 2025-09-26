import React from 'react';
import scrolldwn from '../assets/Mouse Scroll Icon.gif';

export default function Header() {
  return (
    <div className="hero bg-base-200 min-h-screen relative">
      {/* Change 'items-center' to 'items-start' to align content to the left */}
      <div className="hero-content w-screen flex flex-col h-screen relative items-start">
        <div className="max-w-lg md:max-w-xl lg:max-w-2xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">Storybook</h1>
          <p className="py-6 text-xl text-justify">
            Hello, and welcome. Storybook is a place I made for sharing my writing with the world. I believe a good story can change your day, challenge your mind, or simply give you a moment of escape. Thank you for visiting.
          </p>
        </div>

        <div className="absolute bottom-12">
          {/* <button className="btn btn-primary">Get Started</button> */}
          {/* <img src={scrolldwn} alt="Scroll Down" /> */}
        </div>

      </div>
    </div>
  );
}