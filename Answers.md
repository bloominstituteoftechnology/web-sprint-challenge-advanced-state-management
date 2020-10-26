1. What problem does the context API help solve?

A:The Context API was created to solve a specific problem in react, sharing state down a component tree. Similar to the solution that Redux and React-Redux libraries solve, this solution prevents prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

A: when Redux is a single source of truth, it means that the only way to change your data in UI is to dispatch redux action which will change state within redux reducer.
reducers is a pure function with no side effects that alwasy returs the same thing for the same input. it takes to arguments an initial state and an action type and changes the state based on the action type. it return an object with the updated state
store = a container that holds the state for a react redux application
actions = types/informetion fom the ui that goes to the reducer and tell it when and how to update the state
 
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

A: Your application state is global, and your component state is local. Flux or a flux-like library like Redux, use what they call "stores" to hold application state. That means any component, anywhere in the app can access it (kind of like a database) so long as they hook into it.

Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children via props.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

A: redux-thunk allowes us to have asyncronouse logic going in our action creators like fetchning data from an api and it updates the state by going to the reducer only after grabing that response back from the async call by running a middleware library that returns an inner function whithin an outer function. and now our action creator are not just action objects anymore but a dispatch of actions.
the way it works: whats an just an action type from the ui can go streight to the reducer whats an async call can be latter dispatched to the reducer after the response was recived

1. What is your favorite state management system you've learned and this sprint? Please explain why!

A: redux because is so organised and the sycle makes sens and its easy to use. i love connected the components to the store and keeping my top tree parent component app free of any logic, now the reducers and the action creators take care of all that no more prop passing, no more going back and forth in between components. each component has access to all the data it needs from the store. really awesome.