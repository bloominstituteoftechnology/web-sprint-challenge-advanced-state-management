import { FETCH_SMURF, UPDATE_SMURF } from "../actions";

const initialState = {
  smurfList: [],
  isFetchingData: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF:
      return {
        ...state,
        isFetchingData: true
      };
    case UPDATE_SMURF:
      return {
        ...state,
        smurfList: action.payload,
        isFetchingData: true
      };
    default:
      return state;
  }
};