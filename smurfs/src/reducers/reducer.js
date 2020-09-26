import { 
  FETCH_DATA_START, 
  FETCH_DATA_SUCCESS, 
  FETCH_DATA_FAIL,
  POST_SMURF_START,
  POST_SMURF,
  POST_SMURF_FAIL 
} from '../actions/actionTypes'

const initialState = {
  loading: false,
  error: '',
  smurfs: [{
    name: '',
    age: 0,
    height: ''
  }]
}

export const reducer = ( state = initialState, action ) => {

  switch ( action.type ){

    case FETCH_DATA_START:
      return {
        ...state,
        loading: true
      }

    case FETCH_DATA_SUCCESS:
      return{
        ...state,
        loading: false,
        error: '',
        smurfs: action.payload
      }

    case FETCH_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case POST_SMURF_START:
      return{
        ...state,
        loading: true
      }

    case POST_SMURF:
      
      const newSmurf = action.payload

      return{
        ...state,
        smurfs: [...state.smurfs, newSmurf]
      }

    case POST_SMURF_FAIL:
      return{
        ...state,
        loading: false,
        error: action.payload
      }

    default: return state;
  }

}