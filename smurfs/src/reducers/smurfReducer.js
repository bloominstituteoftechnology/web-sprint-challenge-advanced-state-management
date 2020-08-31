import {
  FETCH_SMURFS,
  //FETCH_ERROR,
  FETCH_SUCCESS,
  UPDATE_SMURFS,
  FETCH_NEW,
} from "../actions";

const initialState = {
  smurfs: [],
  name: "",
  age: "",
  height: "",
  isLoading: false,
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
      };

    case FETCH_NEW:
      return {
        ...state,
        smurfs: action.payload,
      };
    case UPDATE_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
      };
    default:
      return state;
  }
};
