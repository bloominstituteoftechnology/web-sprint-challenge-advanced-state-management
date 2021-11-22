# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

You are able to pass props and state around more easily with context API not having to share own through the component tree

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: the only source of information for the store, they carry paload info from the application to the store. 

Reducers: are functions that determine changes to the applications state. It uses the action to determine this change.

Store: It stores the whole state of the app in an immutable tree.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that allows you to call action creators. It changes action creators as it allows them to return a function instead of an action object.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux. I have enjoyed lerning how to pass around data with component state.