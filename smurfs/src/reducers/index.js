import {FETCH_SMURF,SMURF_FETCHED,FETCH_FAILED} from '../actions/index';

const initialState=[
    {
        smurf:'',
        isFetching:false,
        error:''
    }
];
export const smurfReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_SMURF:
        return {...state,
            isFetching:true,
        error:''}
        case SMURF_FETCHED:
            return {...state,
                smurf: action.payload,
                isFetching: false
            }
        case FETCH_FAILED:
            return {...state,
            error:action.payload
            }
    }
}