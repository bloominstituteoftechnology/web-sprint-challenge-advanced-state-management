import {
  FETCHING_API_START,
  FETCHING_API_SUCCESS,
  ADD_SMURF,
  ADD_ERROR,
} from "../actions/index";

export const initialState = {
  smurfs: [
    {
      id: 1,
      name: "Loca Smurf",
      position: "Smurf Warlord",
      nickname: "Old One Eye",
      description: " Don't mess with loca... and don't feed the bears",
    },
  ],
  isLoading: true,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case { FETCHING_API_START }:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case { FETCHING_API_SUCCESS }:
      return {
        ...state,
        isLoading: false,
        error: "",
        smurf: action.payload,
      };
    case { ADD_SMURF }:
      return {
        ...state,
        loading: false,
        smurf: action.payload,
        error: "",
      };
    case { ADD_ERROR }:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accommodate the start of a smurf fetch.
//4. Add in a reducer case to accommodate the successful smurf api fetch.
//5. Add in a reducer cases to accommodate the failed smurf api fetch.
//6. Add in a reducer case to accommodate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
