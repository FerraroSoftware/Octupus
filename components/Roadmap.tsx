import React from "react";

export default class Roadmap extends React.Component {
  state = { showing: false };
  
  render() {
    const { showing } = this.state;
    return (
      <>  
        <section className="py-12  sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-7xl font-bold text-white">
            Roadmap
          </h2>
        </div>

        <div className="mt-16 lg:mt-20">
          <ul className="max-w-lg mx-auto space-y-12">
            <li className="sm:flex sm:items-start">
              <p className="w-20 text-3xl font-bold shrink-0 sm:text-right text-rose-500">
                0%
              </p>

              <div className="mt-3 sm:mt-0 sm:ml-10">
                <p className="text-lg font-bold text-white">
                  Launch
                </p>
                <p className="mt-5 text-base font-medium text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, id porttitor sed in ultricies ultrices
                  cursus nulla.
                  Interdum vitae platea quam et. Et sit pellentesque sociis pretium bibendum. Est placerat nulla sed ac
                  vitae justo id
                  nulla duis.
                </p>
              </div>
            </li>

            <li className="sm:flex sm:items-start">
              <p className="w-20 text-3xl font-bold shrink-0 sm:text-right text-rose-500">
                25%
              </p>

              <div className="mt-3 sm:mt-0 sm:ml-10">
                <p className="text-lg font-bold text-white">
                  Getting Investments
                </p>
                <p className="mt-5 text-base font-medium text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, id porttitor sed in ultricies ultrices
                  cursus nulla.
                  Interdum vitae platea quam et. Et sit pellentesque sociis pretium bibendum. Est placerat nulla sed ac
                  vitae justo id
                  nulla duis.
                </p>
              </div>
            </li>

            <li className="sm:flex sm:items-start">
              <p className="w-20 text-3xl font-bold shrink-0 sm:text-right text-rose-500">
                50%
              </p>

              <div className="mt-3 sm:mt-0 sm:ml-10">
                <p className="text-lg font-bold text-white">
                  Opening Collections
                </p>
                <p className="mt-5 text-base font-medium text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, id porttitor sed in ultricies ultrices
                  cursus nulla.
                  Interdum vitae platea quam et. Et sit pellentesque sociis pretium bibendum. Est placerat nulla sed ac
                  vitae justo id
                  nulla duis.
                </p>
              </div>
            </li>

            <li className="sm:flex sm:items-start">
              <p className="w-20 text-3xl font-bold shrink-0 sm:text-right text-rose-500">
                100%
              </p>

              <div className="mt-3 sm:mt-0 sm:ml-10">
                <p className="text-lg font-bold text-white">
                  Getting Investments
                </p>
                <p className="mt-5 text-base font-medium text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, id porttitor sed in ultricies ultrices
                  cursus nulla.
                  Interdum vitae platea quam et. Et sit pellentesque sociis pretium bibendum. Est placerat nulla sed ac
                  vitae justo id
                  nulla duis.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
      </>
    );
  }
}
