import { GET_DATA,GET_DATA_NO,GET_DATA_YES } from '../actions'

const initalState = {
    smurfData: [],
    loading: false,
    error: ''
}

export default (state = initalState, action) => {
    switch(action.type){
        case GET_DATA:
            return {
                ...state,
                loading:true
            }
        case GET_DATA_YES:
            return {
                ...state,
                smurfData: action.payload,
                loading: false
            }
        case GET_DATA_NO:
            return{
                ...state,
                loading: false,
                error: action.payload.message
            }
        default:
            return state
    }
}