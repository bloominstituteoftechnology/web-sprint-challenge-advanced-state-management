1. What problem does the context API help solve?

Context API helps solve the problem of prop drilling so that components do not need unnecessary props just so that child components may receive those props.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are events that take place from the user which correlates to the corresponding reducer to change the state in store. This is the single source of truth in a redux application because the store is where all of the app's state is held globally. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is when your state is held globally and can be accessed by all of your components while component state is held at it's individual component level. Application state starts to become more efficient than component state the bigger the scale of the app and features are that need to share state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk let's the function it's used in know that it needs to rerender which makes it have two separate returns in our action-creators.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I used to like redux before I realized how complicated it can be when using it in practice compared to context API. Reducers and action creators can get a lot more complicated than using plain context API for small scale projects.
