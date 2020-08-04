1. What problem does the context API help solve?

Context API can help to keep state clean when global data is shared between lots of components.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is known as a ‘single source of truth’ because this is where all the global state is held for the entire application.
Actions receive the call for state change from a component function which prompts the action to call the corresponding case in the reducer. The reducer then changes the state according to the case directions and passes that state to the store which will then update the UI with any new data within the state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the global state for the entire application (used when many components need to share the same data).  Component state is the local state for a single component (used when only 1 components needs the data).

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware that gives us the ability to use promises by extending our actions to more than 1 at a time.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I’m now most comfortable with the Redux state management system because although it requires more files to create, it reduces the amount of code in components making them cleaner and easier to read without losing valuable state data needed for maximum functionality and style.
