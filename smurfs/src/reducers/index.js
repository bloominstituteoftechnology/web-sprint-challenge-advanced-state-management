import {
  GET_DATA_FAIL,
  GET_DATA_START,
  GET_DATA_SUCCESS,
} from "../actions/index";

const initialState = {
  smurfData: {
    name: "",
    age: "",
    height: "",
    id: "",
  },
  is_loading_data: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_START:
      return {
        ...state,
        is_loading_data: true,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        is_loading_data: false,
        smurfData: action.payload,
        error: "",
      };
    case GET_DATA_FAIL:
      return {
        ...state,
        is_loading_data: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
