import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAIL
  } from '../actions/index';
  
  const initialState = {
    smurf: [],
    error: '',
    isFetching: false
  };
  
  function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
      case FETCH_SMURF_START:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case FETCH_SMURF_SUCCESS:
        return {
          ...state,
          smurf: action.payload,
          isFetching: false,
          error: ''
        };
      case FETCH_SMURF_FAIL:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  }
  
  export default reducer;