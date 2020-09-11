import axios from 'axios'

export const GET_DATA = 'GET_DATA'
export const GET_DATA_YES = 'GET_DATA_YES'
export const GET_DATA_NO = 'GET_DATA_NO'


export const smurfAction = () => {
    return (dispatch) => {
        dispatch({type: GET_DATA})
        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res)
                dispatch({type: GET_DATA_YES, payload: []})
            })
            .catch(err => {
                console.log('UhOh')
                dispatch({type: GET_DATA_NO, payload: "OH NO, the smurfs were caught by Gargamel"})
            })
    }
}