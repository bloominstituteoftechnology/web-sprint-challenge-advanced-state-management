import { ACTIONS } from '../actions'

const initialState = {
    smurf: {
        name: '',
        age: '',
        height: '5cm',
        id: ''
    },
    smurfData: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.AXIOS_GET_START:
            return {
                ...state,
                isLoading: true
            }
        case ACTIONS.AXIOS_GET_SUCCESS:
            return {
                ...state,
                smurfData: action.payload,
                isLoading: false
            }
        case ACTIONS.AXIOS_GET_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }

}