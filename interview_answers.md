# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
    making prop drilling easier to access. can also substitute redux if used with a useReducer

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    actions passes information into the store. reducers are used to change state, and the store is an object that holds the state 

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
    redux thunk is a middleware that can let you write action-creators that returns functions instead of an action

4. What is your favorite state management system you've learned and this sprint? Please explain why!    
    i only really know how to manage state in redux, but i feel like context api is far easier once i leanr how to use it with a useReducer.