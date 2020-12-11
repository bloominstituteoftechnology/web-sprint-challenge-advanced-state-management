import {
  FOUND_SMURF,
  SMURF_NOT_FOUND,
  MAKE_SMURF,
  SMURF_NOT_MADE,
  IS_POSTING,
  IS_LOADING,
} from "../actions";

const initialState = {
  smurf: {
    name: "",
    age: "",
    height: "",
    error: "",
  },
  smurfs: [],
  isLoading: false,
  isPosting: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FOUND_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
      };

    case SMURF_NOT_FOUND:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case MAKE_SMURF:
      return {
        ...state,
        isPosting: false,
      };
    case SMURF_NOT_MADE:
      return {
        ...state,
        error: action.payload,
        isPosting: false,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case IS_POSTING:
      return {
        ...state,
        isPosting: true,
      };

    default:
      return state;
  }
};
