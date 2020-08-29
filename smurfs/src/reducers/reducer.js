const initialState =[];

export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case "FETCH_SMURFS_SUCCESS":
      return [ ...state, action.payload ];
    default:
      return state;
  }
};

export default smurfReducer;