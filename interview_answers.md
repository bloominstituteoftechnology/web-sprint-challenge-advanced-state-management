# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

- Context API is a great state communication tool that gets slices of state where they need to go by wrapping the dependent components in a Provider with the applicable data.
- It helps solve the issue of the boilerplate code we have to write with redux.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- actions: a group of functions that dispatch the necessary object to the reducer, depending on the scenario.
- reducers: a switch statement with different cases that update state according to the action/case.
- store: the place that holds data and functions that need to be used at an App level.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

- redux-thunk allows us to make asynchronous calls.
- It changes our action-creators, because now we have to account for promises.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

- Without a doubt, it's Context API. It's just so clean and simple and makes sense to use instead of redux.
