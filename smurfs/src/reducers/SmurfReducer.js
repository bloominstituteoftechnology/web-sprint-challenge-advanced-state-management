import { ADD_SMURF, FETCHING_SMURFS_START, FETCHING_SMURF_SUCCESS, SMURF_FAILURE, DELETE_SUCCESS } from '../actions/';

const initialState = {
  smurfs: [],
  isFetching: false,
  error: ""
}

export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS_START:
    return {
      ...state,
      isFetching: true,
      error: ""
    };
  case FETCHING_SMURF_SUCCESS:
    return {
      ...state,
      smurfs: action.payload,
      isFetching: false,
      error: ""
    };
    case SMURF_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case ADD_SMURF:
    return {
      ...state,
      smurfs:[
        ...state.smurfs, action.payload
      ]
    };
    case DELETE_SUCCESS:
      return {
        ...state
      };
    default:
      return state;
  }
}