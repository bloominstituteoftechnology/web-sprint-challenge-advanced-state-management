import {onType} from "../actions/SmurfFormActions"


let initialsmurf = {
    name: "",
    age: "",
    height: ""
    
}

let SmurfFormReducer = function(state = initialsmurf,action){
    switch(action.type){
            case onType:
                return {
                    ...state,
                    name: action.payload
                }
        default:return state
    }
}

export default SmurfFormReducer