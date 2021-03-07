Documentation - RECIPE_BOOK

PREP_LIST: 

*Ignore Server Warnings* 


secret: 727c263d80994e0aa46b65a9cdc493140c82fb5c0bcfd873f3ebbd2d49e535fb


-In the reducers/index.js file

1. add needed state and reducer cases to hold and modify smurf error messages, loading status, smurf data
**COMPLETE**
 This adds the following state values into the initialState
  - smurfs: [{name: 'loca smurf...}],     array of smurfs
  - isLoading: true,   boolean on state of loading
  - error: '',  indicative of a possible error message
**COMPLETE**
  Reducer will take in ( state = initialState, action ) as an arrow function handling..
  -switch(action.type)
  *Add arguments to complete standard reducer function
  *add a case to accommodate the FETCHING_API_START of a smurf fetch
    that returns { ...state, loading: true }
  *add a case to accommodate FETCHING_API_SUCCESS of smurf fetch
    that returns { ...state, loading: false, smurf: action.payload }
  *add a case to accommodate FETCHING_API_FAILURE of smurf fetch
    that returns { ...state, loading: false, error: action.payload }
  *add a reducer to accommodate ADD_SMURF to include: 
    return { ...state, loading: false, smurf: action.payload, error: ''}
  *add a reducer to accommodate ADD_SMURF_ERROR to include: 
   return {...state, error: action.payload}
  *as well as default returning state
**COMPLETE**
  since both are error messages - making the decision to have one error handler

**COMPLETE**

-In the index.js file
connect application to reducer through redux with thunk and logger middleware packages already included
**COMPLETE**
1. import { createStore and applyMiddleware} from 'redux'
2. import Provider from react-redux
3. import thunk from 'redux-thunk'
4. import reducer from reducers/index 
**COMPLETE**
create store to equal createStore function taking in reducer and applyMiddleware(thunk)
**COMPLETE**
wrap the app in a provider taking in the store ={store}
**COMPLETE**

-In the actions/index.js file
add action creators and constants needed to add a smurf to state and fetch from server
**COMPLETE**

1. import axios from axios
2. export all const
FETCHING_API_START = 'FETCHING_API_START'
FETCHING_API_SUCCESS = 'FETCHING_API_SUCCESS'
FETCHING_API_FAILURE = 'FETCHING_API_FAILURE'
ADD_SMURF = 'ADD_SMURF'
ADD_SMURF_ERROR = 'ADD_SMURF_ERROR'
**COMPLETE**

3. include an export fetchSmurfs = () => (dispatch) => {}     //tricky bit to remember double arrows

    this function performs an axios request with 
    .get('http://localhost:3333/smurfs')
    .then((data) => { 
        dispatches type: FETCHING_API_SUCCESS with a payload: data
    })
    .catch that takes in error dispatching type: FETCHING_API_FAILURE with a payload: error
**COMPLETE**
4. include an export addSmurf = () => (dispatch) => {}        // Don't Forget about me... don't don't don't don't

    this function performs an axios request with 
    .post('http://localhost:3333/smurfs')
    .then((data) => {
        dispatches type: ADD_SMURF as well as payload: data
    })
    .catch that takes in error dispatching type: FETCHING_API_FAILURE with a payload: error
**COMPLETE**
5. ADD a conditional that allows us to set the value of error messages if an error is made on the form
**COMPLETE**

-In App.js file
connect to redux passing in fetchSmurfs action only

1. connect fetchSmurfs to App components
2. call the fetchSmurfs action when the component first loads


-In the components/SmurfList.js file

1. Connect Smurf and and loading state values to the smurf list component
 using 
 * variable mapStateToProps that takes in state => returns smurf: state.smurf 
 * variable mapDispatchToProps = (dispatch) => returns smurf: (smurf) => dispatch(addMember(smurf))

export default connect(mapStateToProps, {smurf})(SmurfList)
2. replace the single smurf component instance with 

3. replace the static isLoading variable with FETCHING_API_SUCCESS

-FORM COMPONENT/SMURF DO NOT MODIFY-

-In AddForm.js

1. connect this component to redux passing in 
const [ error, setError ] = useState(errorMessage)
2. replace all instances or error message with state value of error
3. inside of the handleSubmit function replace static errorMessage with a call to error => {setError(error)} 
4. inside the handleSubmit function call addSmurf action with 
name: value,
position: value,
nickname: value,
summary: value passed as arguments. 

5. test to make sure it's all working, submit, and celebrate! 

## Answer Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. Add your answers to the questions within `interview_answers.md` file. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
Context API is designed to solve the issue of prop drilling. By allowing the developer to share props or state with an indirect parent or child

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
        1. actions are events that describe what is happening in the application. These actions are constants to ensure predictability
        2. reducers take in info and action, put them together and spit out a result. they serve as switchboard for all actions happening within the app
        3. store is the repository of information. no information passes through a stateful handling without going through the store first. 
3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
    1. redux-thunk is a middleware that lets developers call actions returning function instead of an action object. it receives the stores dispatch method which 
    becomes it's tool to dispatch regular synchronous actions inside the function body once async functions have been complete. much like a barista grinding beans before placing beans in the coffee maker. 
4. What is your favorite state management system you've learned and this sprint? Please explain why!
    1.  They're both fairly complex and wieldy to manage. But if I have my choice i would pick redux because it's consistent, it's highly stable. once the pattern has been learned its basically the same with each implementation. It's downsides are the complexity, the amount of time needed to set it up for small amounts of state management makes it overkill on small builds. But if managing your state and having a strong framework to do so redux is something consistent that can be run through dev teams without much side to side in how state gets managed. 







