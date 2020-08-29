const smurfList = [
  {
    name: "placeholder name",
    age: 0,
    height: "placeholder height",
    id: 0
  }
];

export const initialState = {
  smurfs: smurfList
}

export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_SMURF":
      return [ ...state, action.payload ];
    default:
      return state;
  }
};

export default smurfReducer;