# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

    Context API solves the problem of having to pass data down to  from parent to child components via props, aka props drilling.  Props drilling becomes a cumbersome task especially in larger apps, or apps with a particular UI theme. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    **actions**:
    Actions are JS objects that describes the possible actions that can be performed  in an app. 

    **reducers**: 
    Reducers are functions that take  state and actions as arguments and returns new state results 

    **store**: 
    The Redux store is where all of the state, actions, reducers are brought together.  The store holds and permits access to the current state. It allows the state to be updated. This is a key concept of Redux everything it done within the store making it the 'single source of truth'. 

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

    Redux-Thunk takes the basic synchronous Redux store and makes it able handle async logic.  It turns an action-creator into a thunk, a function that is returned by another function.  

4. What is your favorite state management system you've learned and this sprint? Please explain why!

    Context API, compared to other state management methods like Redux its, super easy to work with. 