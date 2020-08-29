import { GET_SMURFS, LOADING_SMURFS, ERROR_LOADING } from '../actions/actions';

const initialState = {
  smurfs: [
    {
    name: '',
    age: '',
    height: '',
    id: 0
    }
  ],
  isLoading: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        smurfs: action.payload.data,
        loading: false
      }
    case LOADING_SMURFS:
      return{
        ...state,
        isLoading: true
      }
    case ERROR_LOADING:
      return{
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state;
  };
}; 