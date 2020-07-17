1. What problem does the context API help solve?

state management, it helps provide state to components without the need for props.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

the store is the object that will contain your states for the app.

reducers are the way in which you modify the store it reduces the flow to a single path.

actions are snippets of code that deliver commands, and data or 'payloads' to your reducer

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state would be on a higher level than component state, and so all components should be able to inherit/access application state where as component state would be specific to a certain component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

thunk is 'middleware' software that operates between the program, and client presumably, and it allows our 'action-creators' to return a function instead of an action, aswell as perform asynchronous actions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I think I enjoy redux the most because it allows you to simplify your data stream, and seems to give more structure to underlying react. 