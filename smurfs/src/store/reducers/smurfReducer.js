import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_ERROR,
} from "../actions";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: "",
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        isLoading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        error: "",
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        error: "",
      };
    case ADD_SMURF_ERROR:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
