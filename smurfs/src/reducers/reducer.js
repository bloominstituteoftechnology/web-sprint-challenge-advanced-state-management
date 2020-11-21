import {UPDATE_SMURFS} from '../actions/actions';

const initialState = {
    smurfs: []
  };

  function reducer(state = initialState, action) {
    switch(action.type) {
      case UPDATE_SMURFS:
          return {
            ...state,
            smurfs: action.payload
          }
      default:
        return state;
    }
  }
  
  export default reducer;