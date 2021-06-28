# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

The context API helps for prop drilling. It also allows us to share state with appropriate components without having to pass it from the top down

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions carry information about the type and the payload. they are dispatched by redcuers
reducers accept and test actions the associated action types.
the store is a immutable source of truth for out apps

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

thunk is the middleware that lets us set up async logic for apps when we use redux. we use them for api calls.

4. What is your favorite state management system you've learned and this sprint? Please explain why!
context apis because they are so easy to set up. simplicity is the way to go.