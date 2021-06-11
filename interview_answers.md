# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

The context API helps solve the burden of prop drilling. It allows us to share state with appropriate components without having to pass it from the top down.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects that carry information about the type of action and the payload of associated data. They are dispatched to our reducers. 
Reducers accept actions and evaluate the associated action types. Logic is built into reducers to make actions on copies of state based on the action type and pay load that is received. These copies of state are transmitted to the store. 
The store is the immutable source of truth for our applications. It is an object that holds the application's state tree. 


3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

Thunk is middleware that allows us to set up asynchronous logic for applications using Redux. We can intercept and manage action-creators before they hit our reducer. We can use them to make API calls.  

4. What is your favorite state management system you've learned and this sprint? Please explain why!

I like the context API due to how easy it is to setup and how simple it is to use. I appreciate Redux and all the things it is capable of, but I prefer the simpler approach of using the context API if the application I'm building doesn't require something more robust like Redux. 