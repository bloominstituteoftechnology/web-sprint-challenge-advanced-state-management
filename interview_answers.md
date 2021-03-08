# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

Context API solves the problem of props drilling. It allows us to share information between components in a much less clumbsy way.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Action is a little more literal, it is the information, or action, that is taking place. Reducers are functions that take information and utilize it. The Store is simply an object. It is an object that holds the state of the application in a globally user friendly way.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

Redux Thunk allows us to make the reducer flow asynchronous. It allows us to make API calls from our action creators.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

I prefer Context API due the lack of set up. It is difficult to implement Redux and see the need with the simplicity of our projects, while it makes sense on a much larger, production level application.

Testing code grade!