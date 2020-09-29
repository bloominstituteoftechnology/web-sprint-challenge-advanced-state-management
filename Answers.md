1. What problem does the context API help solve?

Context API solves the problem where you wouldn't have to pass props down. With context you are able to share the same values between components.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

A store is a JavaScript object, the store contains our application's state. Actions contain action types and associated data. Actions update the state. Reducers are how we manage our application's state. You could write functions to manage state changes. These all work together to help maintain the application's state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and the component state is local. A store would be an application state becuase it could be accessed across components. A component state lives within that specific component. This means that the state can only be updated in that component and the state can be passed down to children via props

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a type of middleware that lets you call action creators that return a function instead of an action object. The function receives a store's dispatch method, which is used to dispathc regular synchronous action. Redux-thunk are commonly used for APIs.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I def like the store. I think it's pretty cool how you can use global state across components!
