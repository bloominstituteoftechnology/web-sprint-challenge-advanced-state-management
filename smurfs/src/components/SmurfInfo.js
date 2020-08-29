import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions/smurfActions";

const SmurfInfo = ({ smurfs, getSmurfs, isFetching }) => {
  useEffect(() => {
    getSmurfs();
  }, [getSmurfs]);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">
              Our Smurf Village
            </h2>
            <p className="text-xl leading-7 text-gray-500">
              At our smurf village, we are happy to welcome any new smurfs that
              wish to join us!
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:col-gap-8 lg:space-y-0">
              {smurfs.map((smurf) => {
                return (
                  <li key={smurf.id} className="sm:py-8">
                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                      <div className="relative pb-2/3 sm:pt-2/3">
                        <img
                          className="absolute inset-0 object-cover h-full w-full shadow-lg rounded-lg"
                          src="https://source.unsplash.com/collection/12230364"
                          alt=""
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <div className="space-y-4">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h4>Name: {smurf.name}</h4>
                            <h4>Age: {smurf.age}</h4>
                            <h4>Height: {smurf.height}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
  };
};

const mapDispatchToProps = { getSmurfs };

export default connect(mapStateToProps, mapDispatchToProps)(SmurfInfo);
