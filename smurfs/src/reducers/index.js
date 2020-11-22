const initialState = {
    isLoading: false,
    error: "",
    name: "",
    age: "",
    height: "",
    smurfs: []

}

const smurfReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOADING": 
        return {
            ...state,
            isLoading: true,
        }
      case "SUCCESS":{
        return {
            ...state,
            isLoading: false,
            smurfs: action.payload

        }
    }
    case "ERROR": {
        return {
            ...state,
            isLoading: false,
            error: action.payload

        }
    }


        default:
            return state
    }
}

export default smurfReducer