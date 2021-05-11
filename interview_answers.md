# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
it solves the sharing state down the component tree issue

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

the action is what initializes the reducer and the reducer takes multiple pices of information and reduces it to one output 
. the store is the single source of truth where the data is held

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
it lets our action creators return a function instead of an object

4. What is your favorite state management system you've learned and this sprint? Please explain why!

context API and redux, context because it has less overhead and get the job done and redux because it gets the job done as well and stops all the prop drilling neccessary 