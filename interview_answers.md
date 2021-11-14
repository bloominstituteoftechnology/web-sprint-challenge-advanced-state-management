# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

The context API is used to share data among multiple components with out having to do it manually using props.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions carry payloads of information from applications to store. 

Reducers are pure functions that takes an action and the previous state of the application and returns the new state

A store is an immutable object tree which holds the application's state. Redux can only ave one store. 

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware which allows the returning of functions, rather than just actions. This allows for delayed actions. 

The 'action-creator" is changed by returning a fucntion that performs a conditional dispatch 

4. What is your favorite state management system you've learned and this sprint? Please explain why!

Favorite is context-API because it can access all data provided by the Provider Component at any level. 