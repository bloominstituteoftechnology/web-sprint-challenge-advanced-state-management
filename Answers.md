1. What problem does the context API help solve?
It solves the problem with prop drilling

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions:defines functions.
Reducers: tells actions what they do.
Store: stores state and passes around data.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
App State: refers to the global state (whole app).
Component State: refers to one single component.
Small apps usually need app states and larger apps need component states (manipulation becomes managable).

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk allows us to have multiple types of actions. It passes information to action-creators.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
Context API is my favorite because it makes code cleaner.
