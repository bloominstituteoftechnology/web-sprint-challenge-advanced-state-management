
import { FETCH_SMURFS_START,FETCH_SMURFS_SUCCESS,ADD_SMURF_START,ADD_SMURF_SUCCESS ,FETCH_SMURFS_FAILURE,ADD_SMURF_FAILURE} from "../actions"

export const initialState = {
       
        isLoading: false,
        smurfData : [{
            id:"",
            name:"",
            position:"",
            nickname:"",
            description:""

        }],
        error:"There is an error in Fetching Smurfs",
        isAddingSmurf:false,
        newSmurfData:[{
            id:"",
            name:"",
            position:"",
            nickname:"",
            description:""
        }],
     
        
        }
        




export const reducer = (state = initialState,action) =>{
                switch(action.type){
         case FETCH_SMURFS_START:
                  return{
                    ...state,
                    isLoading:true,
                    error:""
                }
        case FETCH_SMURFS_SUCCESS:
                return{
                    ...state,
                    isLoading:false,
                    smurfData:action.payload
                }
        case FETCH_SMURFS_FAILURE:
            return{
                ...state,
                isLoading:false,
                error:action.payload
            }
                
        case ADD_SMURF_START:
            return{
                ...state,
                isAddingSmurf:false,
                error:""
            }
        case ADD_SMURF_SUCCESS:
            return{
                ...state,
                isAddingSmurf:true,
                error: ""
            }
        case ADD_SMURF_FAILURE:
            return{
                ...state,
                isAddingSmurf:false,
                addingError:""
            }
                    default:
                    return state



    }
}

export default reducer;



//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary