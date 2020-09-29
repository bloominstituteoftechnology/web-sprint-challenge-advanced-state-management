1. What problem does the context API help solve?

Context API saves you from the horror of prop drilling aka you don't have to share state down a component tree anymore.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are your transitions. They allow you to communicate different payloads/types (commands) in order to change your state in the store

Reducers are functions that combine actions with previous state to spit out your new state.

The store is your bank safe that holds all your state in an immutable way.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is accessable from anywhere, while component state is only accessable within a component, unless it is manually passed down as a prop. Application state is better when state is going to be used all over the place, which would require lots of prop drilling. Component state is better when it is only needed within that component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk allows us to return a function from an action creator. I assume this is for reuseability. It also allows you to delay dispatches, which comes into play for API calls

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux seems better, but the ease of context brought me too much relief that I find mtself compelled to pick it.
