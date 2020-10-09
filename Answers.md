1. What problem does the context API help solve?

We use context API when SOME data needs to be accessed by multiple components at different nesting levels

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions: payloads sending data to the store
reducers: take precious state and an action to return new state
store:

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, where as component state is on the component level

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

opposed to returning and action, thunk returns a function

1. What is your favorite state management system you've learned and this sprint? Please explain why!

component state, because I know where it is contained and what it is affecting
