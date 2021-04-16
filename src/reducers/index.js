//2. Add in the arguments needed to complete a standard reducer function.
import {
	FETCH_SMURFS_START,
	FETCH_SMURFS_FAIL,
	FETCH_SMURFS_SUCCESS,
	SET_ERROR,
	ADD_SMURF,
} from "../actions";

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message
export const initialState = {
	smurfs: [],
	errorMessage: "",
	isFetching: false,
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		//3. Add in a reducer case to accomidate the start of a smurf fetch.
		case FETCH_SMURFS_START:
			return {
				...state,
				isFetching: true,
				errorMessage: "",
			};

		//4. Add in a reducer case to accomidate the successful smurf api fetch.
		case FETCH_SMURFS_SUCCESS:
			return {
				...state,
				isFetching: false,
				smurfs: payload,
				errorMessage: "",
			};

		//5. Add in a reducer cases to accomidate the failed smurf api fetch.
		case FETCH_SMURFS_FAIL:
			return {
				...state,
				isFetching: false,
				errorMessage: payload,
			};

		//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
		case ADD_SMURF:
			return {
				...state,
				smurfs: [...state.smurfs, payload],
			};

		//7. Add in a reducer case that adds in a value to the error message.
		case SET_ERROR:
			return {
				...state,
				errorMessage: payload,
			};

		default:
			return state;
	}
};

export default reducer;
