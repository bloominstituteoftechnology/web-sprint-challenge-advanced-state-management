import { ACTIONS } from '../actions'

const initialState = {
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
        case ACTIONS.UPDATE_SMURF_START:
            return {
                ...state,
                isLoading: true,
            }
        case ACTIONS.UPDATE_SMURF_SUCESS:
                return {
                    ...state,
                    isLoading: false,
                }
        case ACTIONS.UPDATE_SMURF_FAIL:
                return {
                    ...state,
                    isLoading: false,
                    error: action.payload
                }
        default:
            return state;
    }

}