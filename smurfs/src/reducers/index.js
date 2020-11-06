import { FOUND_SMURF, SMURF_NOT_FOUND, MAKE_SMURF, SMURF_NOT_MADE } from '../actions'

const initialState = {
    smurf: {
        name: '',
        age: '',
        height: '',
        error: ''

    },
    smurfs: [],
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FOUND_SMURF:
            return {
                ...state,
                smurfs: action.payload,
                smurf: action.payload
            }

        case SMURF_NOT_FOUND:
            return {
                ...state,
                error: action.payload
            }
        case MAKE_SMURF:
            return {
                ...state,
                smurfs: action.payload
            }
        case SMURF_NOT_MADE:
            return {
                ...state,
                error: action.payload
            }



        default:
            return state;
    }
}