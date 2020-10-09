// set initial state
import{
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    POST_START,
    POST_SUCCESS,
    POST_FAILURE
  } from '../actions'
  
  
  const initialState = {
    smurfs: [],
    isLoading: false,
    error: "",
  };
  
  // const FETCH_START = "FETCH_START";
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_START:
        return {
          ...state,
          isLoading: true,
          error: "",
        };
        case FETCH_SUCCESS:
          return{
            ...state,
            smurfs: action.payload,
            isLoading: false,
            error: ''
          }
          case FETCH_FAILURE:
          return{
            ...state,
            isLoading: false,
            error: action.payload
          }
          case POST_START:
            return{
              ...state,
              smurfs: [
                ...state.smurfs,
  
              ],
              isLoading: true,
              error: ''
            }
            case POST_SUCCESS:
              return{
                ...state,
                players: action.payload,
                isLoading: false,
                error: action.payload
              
              }
              case POST_FAILURE:
                return {
                  ...state,
                  isLoading: false,
                  error: ''
                }
      default:
        return state;
    }
  };
  
  export default reducer;
  
  // pass our state and action
  