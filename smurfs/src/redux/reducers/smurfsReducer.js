import * as actions from '../actions/types'

const initalState = {
    loading: false,
    users: [],
    error: ''
}

export const smurfsReducer = (state = initalState, action) => {

    switch (action.type) {
        case actions.FETCHING_USER:
            return {
                ...state,
                loading: true
            }
        case actions.USER_FETCH_SUCCESS:
            return {
                ...state,
                users: action.data
            }
        case actions.USER_FETCH_FAILED:
            return {
                ...state,
                error: action.error
            }
        case actions.USER_DELETE_SUCCESS:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            }


        default: return state
    }
}