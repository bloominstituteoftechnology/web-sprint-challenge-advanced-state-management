import { SMURF_LOADING, SMURF_SUCCESS, SMURF_FAILURE, ADD_SMURF } from '../actions'

const initialState = {
  village: [],
  loading: '',
  error: ''
}

export const smurfReducer = (state = initialState, action) => {
  switch (action.type){
    case SMURF_LOADING:
      return{
        ...state,
        loading: true
      }
    case SMURF_SUCCESS:
      return{
        ...state,
        village: action.payload,
        loading: false
      }
    case SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case ADD_SMURF:
      return {
        ...state,
        loading: false,
        village: [...state.village, action.payload]
      }
    default:
      return state
  }
}