// import actions
import {
  ADD_SMURF,
  FETCH_SMURFS
} from "../actions/index";

const initialState = {
  smurfs: []
}
export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SMURF:
      return {
        ...state,
      };
    case FETCH_SMURFS:
      return {
        ...state,
        smurfs: action.payload
      }
      default:
        return state;
  }
};