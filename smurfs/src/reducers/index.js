import {POST_DATA, FETCH_COMPLETE} from '../actions/index'

export const initialState = {
    isLoading: false,
    smurfData: [],
}
export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_COMPLETE:
            console.log('reducer');
            return {
                ...state,
            }
        case POST_DATA:
            return {
                ...state,
                smurfData: action.payload
            }    
        default:
            return state    
    }
}