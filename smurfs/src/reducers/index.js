import {LOADING,SUCCESS,ERROR, ADD_SMURF} from "../actions"

const initialState = {
    isLoading: false,
    error: "",
    smurfs: []

}

export const smurfReducer = (state=initialState, action) => {
    switch(action.type) {
        case LOADING: 
        return {
            ...state,
            isLoading: true,
        }
      case SUCCESS:{
        return {
            ...state,
            isLoading: false,
            smurfs: action.payload

        }
    }
    case ERROR: {
        return {
            ...state,
            isLoading: false,
            error: action.payload

        }
    }

    case ADD_SMURF: {
        return {
            ...state,
            isLoading: false,
            smurfs: action.payload
        }
    }

        default:
            return state
    }
}

// export default smurfReducer