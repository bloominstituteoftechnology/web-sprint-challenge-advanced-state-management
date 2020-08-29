import { FETCH_SMURF_START,
FETCH_SMURF_SUCCESS,
FETCH_SMURF_FAIL } from '../actions'


const initialState = {
    smurfs: [],
    error: '',
    isfetching: false
}

const smurfReducer = ( state = initialState, action) => {
    console.log('reducer', action);
    switch (action.type) {
        case FETCH_SMURF_START: 
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SMURF_SUCCESS: 
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_SMURF_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default smurfReducer;