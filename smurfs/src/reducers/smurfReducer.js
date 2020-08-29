const initialState = {
  smurfs: [],
  isFetching: false,
  isPosting: false,
  error: "",
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_SMURFS_START":
      return { ...state, isFetching: true };
    case "FETCHING_SMURFS_SUCCESS":
      const newSmurfs = action.payload;
      return { ...state, smurfs: newSmurfs, isFetching: false, error: "" };
    case "FETCHING_SMURFS_ERROR":
      return { ...state, error: action.payload };

    case "POSTING_SMURFS_START":
      return { ...state, isPosting: true };
    case "POSTING_SMURFS_SUCCESS":
      return { ...state, isPosting: false, smurfs: action.payload, error: "" };
    case "POSTING_SMURFS_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
