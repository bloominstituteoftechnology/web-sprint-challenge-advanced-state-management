import axios from "axios";
export const GET_DATA_START = "GET_DATA_START";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAIL = "GET_DATA_FAIL";
export const ADD_NEW_SMURF = "ADD_NEW_SMURF";

export const getData = () => (dispatch) => {
  dispatch({ type: GET_DATA_START });

  setTimeout(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        dispatch({
          type: GET_DATA_SUCCESS,
          payload: {
            name: res.data.name,
            age: res.data.age,
            height: res.data.height,
            id: res.data.id,
          },
        });
        console.log(res);
      })
      .catch((error) => {
        console.error("error from api, error.message");
        dispatch({
          type: GET_DATA_FAIL,
          payload: `error from api', ${error.message}`,
        });
      });
  }, 3000);
};
