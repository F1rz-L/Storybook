import React from 'react';
import scrolldwn from '../assets/Mouse Scroll Icon.gif'

export default function Header() {
  return (
    <div className="hero bg-base-200 min-h-screen relative">
      <div className="hero-content text-center flex flex-col items-center justify-center h-screen relative">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Storybook</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>

        {/* New button container */}
        <div className="absolute bottom-12">
          {/* <button className="btn btn-primary">Get Started</button> */}
          {/* <img src="{scrolldwn}" alt="" /> */}
        </div>

      </div>
    </div>
  );
}