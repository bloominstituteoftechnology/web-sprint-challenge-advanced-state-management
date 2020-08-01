import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_ERROR,
} from "../actions/index";

const initialState = [{
  name: "",
  age: "",
  height: "",
  id: ""
}];

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
          age: action.paylaod.age,
          height: action.payload.heigth
      }
      case FETCH_SMURF_ERROR:
        return {}
  }
}