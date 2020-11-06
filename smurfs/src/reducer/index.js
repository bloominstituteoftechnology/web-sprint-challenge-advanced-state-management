
const initialState = { 
    something: []
}
export const rootReducer = (state = initialState, action) => { 
    switch(action.type) { 

        case "Something": 
            return 'Do something'

        default: 
            return state
    }
}