1. What problem does the context API help solve?

---It allows you to share values across components not just from parent to child.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

---Store allows components to share state as a state container. Actions tell reducers how state should change then reducers dictate changes to a applications state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

---Component state is stored in a component locally and can only be passed via props and Application state can be shared across components. Perhaps smaller applications, and ones that dont need state across the board component state can be used. Otherwise Application state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

---A function returned by another function, redux-thunk allows us to run asynchronous operations. We can run some data before actions make it to the reducer.


1. What is your favorite state management system you've learned and this sprint? Please explain why!

---I enjoyed context api because of its simple use but I will probably stick with redux because its used more in the job field.
