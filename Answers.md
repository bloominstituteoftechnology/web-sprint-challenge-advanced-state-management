1. What problem does the context API help solve?

Context API helps solve having to pass down props through multiple components and can help clean up code by storing values needed in a separate file that can be used globally.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are events that changes state while reducers are created to set the state according to each action. This all is important because in redux, state is centralized in one location and cannot be changed unless there was an action that invoked the reducer to set a new state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is when state is held at a global level that can be accessed by all components while component state dictates that state can only be used at it's own component level only. The difference of efficiency between holding state on either level relies on the scale of the application and data.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows the application to render functions knowing that it has to rerender when the function inside the thunk has completed. Instead of the usual function format, a second return is put in place to signify a thunk needs to run. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I would have definitely said state management a few days ago, but after learning the benefits of redux and not keeping state at the component level, it leaves room for cleaner looking code and easier to read components.
