import axios from 'axios';

export const SMURFS_LOADING = 'SMURFS_LOADING'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL'

// export const fetchSmurfs = () => (dispatch) => {
//     dispatch({type: SMURFS_LOADING})
//     axios
//         .get('/smurfs')
//         .then(res =>
//             dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
//         )
//         .catch(err =>
//             dispatch({type: FETCH_SMURFS_FAIL, payload: err})
//         )
// }

axios.get('http://localhost:3333/smurfs')
.then(res => console.log(res.data.name))
.catch(err => console.log(err))