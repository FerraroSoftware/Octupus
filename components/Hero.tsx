import React from "react";

export default class Hero extends React.Component {
  state = { showing: false };
  
  render() {
    const { showing } = this.state;
    return (
      <>  
       <div className="relative pt-48 pb-12 xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
      
      <div className="absolute inset-0 lg:inset-y-0 lg:left-0">
        <img
          className="object-cover w-full h-full opacity-50 md:w-auto lg:opacity-100"
          src="/background.svg"
          alt=""
        />
      </div>
      <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex flex-shrink-0">
              <a
                href="#"
                title="BakerStreet"
                className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-secondary focus:ring-primary"
              >
                <img
                  className="w-auto h-20"
                  src="/logo2.svg"
                  alt="BakerStreet"
                />
              </a>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden">
              <button
                type="button"
                className="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
              <a
                href="#"
                title=""
                className="font-sans  text-2xl font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
              >
                {" "}
                RoadMap{" "}
              </a>

              <a
                href="#"
                title=""
                className="font-sans text-2xl font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
              >
                {" "}
                Team{" "}
              </a>

              <a
                href="#"
                title=""
                className="font-sans text-2xl font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
              >
                {" "}
                Contract{" "}
              </a>
            </div>

            <div className="hidden md:block">
              <button
                type="button"
                className="p-4 -m-2 transition-all
                duration-200
                bg-transparent
                border-2
                rounded-full
                sm:leading-8
                text-white
                border-primary
                hover:bg-white
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                hover:text-black
                sm:text-lg
                focus:ring-offset-secondary"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="flex flex-wrap justify-around">
            <div>
              <img
                className="mx-auto lg:ml-auto sm:max-w-xs rounded-xl"
                src="/octopus.svg"
                alt=""
              />
            </div>

            <div className="w-full lg:w-1/2">
              <p className="mt-6 tracking-tighter text-white">
                <span className="font-serif italic font-normal text-8xl">
                  Swim Into
                </span>
                <br />
                <span className="font-sans font-normal text-7xl">
                  The Consortium
                </span>
              </p>
              <p className="max-w-md mt-5 font-sans text-base font-normal leading-7 text-white text-opacity-70">
                3,333 Octopus have been swimming through the metaverse. They can
                be tough to catch, as they are master escape artist.
              </p>
              <div className="flex items-center mt-8 space-x-3 sm:space-x-4">
                <a
                  href="#"
                  title=""
                  className="
                                inline-flex
                                items-center
                                justify-center
                                px-5
                                py-2
                                font-sans
                                text-base
                                font-semibold
                                transition-all
                                duration-200
                                border-2 border-transparent
                                rounded-full
                                sm:leading-8
                                bg-white
                                sm:text-lg
                                text-black
                                hover:bg-opacity-90
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                            "
                  role="button"
                >
                  OpenSea
                </a>

                <a
                  href="#"
                  title=""
                  className="
                                inline-flex
                                items-center
                                justify-center
                                px-5
                                py-2
                                font-sans
                                text-base
                                font-semibold
                                transition-all
                                duration-200
                                bg-transparent
                                border-2
                                rounded-full
                                sm:leading-8
                                text-white
                                border-primary
                                hover:bg-white
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                                hover:text-black
                                sm:text-lg
                                focus:ring-offset-secondary
                            "
                  role="button"
                >
                  Join Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
       

      </>
    );
  }
}
