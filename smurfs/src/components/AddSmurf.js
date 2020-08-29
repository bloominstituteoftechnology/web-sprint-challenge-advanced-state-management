import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions/smurfActions";

const AddSmurf = ({ postSmurf, isPosting, error }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    age: "",
    height: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postSmurf(formValues);
    console.log(formValues);
    setFormValues({
      name: "",
      age: "",
      height: "",
    });
  };

  return (
    <div>
      <div className="mt-8 mb-2 sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900">
          Add A Smurf To Your Village
        </h2>
        {error && <p class="text-red-500 text-xs italic">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mt-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Name
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                onChange={handleChange}
                value={formValues.name}
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="age"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Age
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                onChange={handleChange}
                value={formValues.age}
                name="age"
                id="age"
                type="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="height"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Height
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                onChange={handleChange}
                value={formValues.height}
                name="height"
                id="height"
                type="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="mt-6">
            <span className="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Add smurf
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isPosting: state.isPosting,
    error: state.error,
  };
};

const mapDispatchToProps = { postSmurf };

export default connect(mapStateToProps, mapDispatchToProps)(AddSmurf);
