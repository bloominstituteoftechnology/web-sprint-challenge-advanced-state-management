import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURF,
  ADD_SMURF_FAILURE,
} from "../actions";

export const initialState = {
  smurfs: [],
  isLoading: false,
  errorMessage: "",
};

const reducer = (state = initialState, action) => {
  //   dispatch({ type: FETCH_SMURFS_START });
  switch (action.type) {
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case FETCH_SMURFS_START:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Add in the initialState needed to hold:
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary
