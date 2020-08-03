import {FETCH_DATA, FETCH_SUCCESS, FETCH_FAILURE } from '../actions/actions'

const initialState = {
    smurfs: [],
    isFetching: true,
    err: ''
}

const smurfReducer = (state = initialState, actions ) =>{

    switch(actions.type){
        case FETCH_DATA:
            return {...state, 
                isFetching: true}
        case FETCH_SUCCESS:
            return{
                ...state,
                isFetching: false,
                smurfs: actions.payload
            }
        case FETCH_FAILURE:
            return{
                ...state,
                isFetching: false,
                err: actions.payload
            }
        default:
            return state
    }

}

export default smurfReducer;