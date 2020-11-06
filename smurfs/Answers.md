# What problem does the context API help solve?

The context API allows us to create and use a global state without having to import another library such as react-redux to reduce the need of prop drilling.

# In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is a place where we can store global data that can be accessed anywhere in our application. A reducer is the logic behind the application such as logging in, fetching data, bascially anything you want to do that may affect your state. Actions are just as they sound like an action. They let us define an instance such as fetch success and send a payload "data" to our reducer who can then update state.

# What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is = to global state of the application. Can be accessed by any component.

Component state is state local to that component and can be passed via prop drilling.

You may want to use application state if the state affects more than one component espcially when you are 3-4 child components deep in your tree.

# Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

Redux thunk allows us to preform async calls, it changes our action-creators via currying I believe.

# What is your favorite state management system you've learned and this sprint? Please explain why!

Context!! Redux is cool once you get the hang of it, but there is a lot of magic that can confuse me, espcially working with complex state. I think Context is cool because it is super easy, can be set up with a few lines of code and gives you global state management.
