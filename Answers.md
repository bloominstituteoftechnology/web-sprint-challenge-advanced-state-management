1. What problem does the context API help solve?

 - The Context API helps solve the issue of prop drilling in complex, multi-leveled applications. Like Redux, it globalizes the state of the application and allows components that may be several layers deep to pull from the state based on a 'context' so that it doesn't have to be 'drilled' down from the top like it does in vanilla React.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-actions - Actions are essentially functions tha package up information that can be called from anywhere in the app that send data directly to a reducer.

reducers - Reducers...reduce. Similar to the array reduce method in js, it takes a current state and an action and returns a new state. In short, a reducer decides how each action affects the state.

Store - in Redux, the store is the globalized state of the entire application. Any component, no matter how many layers deep, can directly access the state of the application through the store.


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is the state of the entire application and usually sits at the top level (index.js/App.js). In Redux, this would be the store. Component state is unique to each individual component and is only accessible by that component.


4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- redux-thunk is a middleware that allows for asynchronous actions. It is most commonly used to execute API calls and Posts during the Redux flow.



5. What is your favorite state management system you've learned and this sprint? Please explain why!


- ContextAPI, for the simple fact that it is less far less complex. Less complexity leaves less room for error, easier app maintenance, and overall cleaner code. Redux is extremely over-engineered. From a pure business standpoint, I would want clean applications with low overhead and upkeep costs. The clear winner in that regard would be ContextAPI. 