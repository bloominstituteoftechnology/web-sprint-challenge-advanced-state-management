export const SUBMIT_SMURF = 'SUBMIT_SMURF'
export const ADD_SMURF = 'FETCH_SMURF'

export const initialState = {
    name: '',
    age: 0,
    height: ''
}

export const smurfFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_SMURF:
            return({
                ...state,
                name: action.payload
            })
    }
}