
import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR, ADD_GUEST, SET_ERROR} from './../actions'

export const initialState = {
    guests: [],
    isLoading: false,
    errorMessage: ''
}

const reducer = (state = initialState, action)=>{
    switch (action.type){
        case(FETCH_START):
        return({
            ...state,
            isLoading: true
        })
        case(FETCH_SUCCESS):
        return({
            ...state,
            guests: action.payload,
            errorMessage: '',
            isLoading: false
        })
        case(FETCH_ERROR):
        return({
            ...state,
            errorMessage: action.payload,
            isLoading: false
        })
        case(ADD_GUEST):
        return({
            ...state,
            guests: [...state.guests, action.payload],
            errorMessage: ''
        })
        case(SET_ERROR):
        return({
            ...state,
            errorMessage: action.payload
        })
        default:
            return state
    }
}

export default reducer;
