import React from "react";

export default class Feature extends React.Component {
  state = { showing: false };

  render() {
    const { showing } = this.state;
    return (
      <>
       <section className="py-12 sm:py-16 lg:py-20">
<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
  <div className="max-w-md mx-auto text-center">
    <h2 className="font-bold text-white text-7xl">
      Creative members
    </h2>
    <p className="mt-4 text-base font-medium text-gray-300">
      In a creative workplace, employees responsibly try different
      solutions
    </p>
  </div>

  <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto mt-12 text-center sm:mt-16 sm:grid-cols-3">
    <div>
      <img
        className="object-cover mx-auto rounded-full w-60 h-60 sm:w-40 sm:h-40 lg:w-60 lg:h-60"
        src="/teammember1.svg"
        alt=""
      />
      <p className="mt-8 text-lg font-bold text-white">
        Guy Hawkins
      </p>
      <p className="text-base font-medium text-rose-500 mt-1.5">
        CEO & Founder
      </p>
    </div>

    <div>
      <img
        className="object-cover mx-auto rounded-full w-60 h-60 sm:w-40 sm:h-40 lg:w-60 lg:h-60"
        src="/teammember2.svg"
        alt=""
      />
      <p className="mt-8 text-lg font-bold text-white">
        Esther Howard
      </p>
      <p className="text-base font-medium text-rose-500 mt-1.5">
        CTO
      </p>
    </div>

    <div>
      <img
        className="object-cover mx-auto rounded-full w-60 h-60 sm:w-40 sm:h-40 lg:w-60 lg:h-60"
        src="/teammember1.svg"
        alt=""
      />
      <p className="mt-8 text-lg font-bold text-white">
        Bessie Cooper
      </p>
      <p className="text-base font-medium text-rose-500 mt-1.5">
        Art Director
      </p>
    </div>
  </div>

  
</div>
</section>
      </>
    );
  }
}
