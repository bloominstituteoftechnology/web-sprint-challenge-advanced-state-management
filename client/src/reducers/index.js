

export const initialState = {
    smurfs = [
        {
            id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
            name:'Poppa Smurf',
            position:'Village Leader',
            nickname: 'Pops',
            description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
        },
        {
            id:"JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZ",
            name:'Smurfette',
            position:'Beautician',
            nickname: 'Smurfette',
            description: 'Smurfette\'s role in the village is that of any other smurf; chores, and helping out where she can, but for her specifically, she is often seen to be very active in organizing events.'
        },
        {
            id:"G4gRG9lIiwiaWF0IjoxNTE2MjM5MDIy",
            name:'Brainy Smurf',
            position:'Lab Assistant',
            nickname: 'Brainy',
            description: 'Brainy is the village intellectual who\'s not afraid to share his "wisdom" with his fellow Smurfs, even though it usually results in his being booted to the village limits or whacked in the head with a mallet.'
        }
    ],
    appLoading = false, 
    error = 'Error Message'
}

const reducer = ()=>{
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