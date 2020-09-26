import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL,
} from "../actions/viewSmurfs";
import { ADD_SMURF } from "../actions/addSmurf";

const initialState = {
  smurfs: [],
  error: "",
  isFetching: false,
};

function reducer(state = initialState, action) {
  console.log("smurfs array state from reducer", state.smurfs);
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        error: "",
        isFetching: true,
      };
    case FETCH_SMURFS_SUCCESS:
      console.log("action payload", action.payload);
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };

    default: {
      return state;
    }
  }
}

export default reducer;
