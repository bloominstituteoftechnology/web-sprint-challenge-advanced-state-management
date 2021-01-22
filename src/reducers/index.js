import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL,
  ADD_SMURF,
} from '../actions/index';

export const initialState = {
  smurfs: [],
  newSmurf: {
    id: Math.floor(Math.random()),
    name: '',
    nickname: '',
    position: '',
    description: '',
  },
  isLoading: false,
  error: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return { ...state };
    case FETCH_SMURF_SUCCESS:
      return { ...state, smurfs: action.payload };
    case FETCH_SMURF_FAIL:
      return { ...state, error: action.payload };
    case ADD_SMURF:
      const newSmurf = action.payload;
      return {
        ...state,
        smurfs: [...state.smurfs, newSmurf],
      };
    default:
      return state;
  }
};

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
