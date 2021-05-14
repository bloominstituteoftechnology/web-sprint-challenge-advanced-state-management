# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

sharing state without having to prop drill

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are an event that describes happening, reducers take the current state and actions and return new state, store brings together state, actions, and reducers and holds them in one place.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

middleware that allows the action creators to return functions instead of objects

4. What is your favorite state management system you've learned and this sprint? Please explain why!

context, very simplified compared to redux