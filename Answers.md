1. What problem does the context API help solve?
    It helps with statemanagmet 
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? 

        actions - are a way for you to dispatch commands and collect data, ect
        reducer- is where you pass data from your disdpatched
        store-  this is where you data lives and how you can disperese it through your project 

Why is the store known as a 'single source of truth' in a redux application?

            Becuase it's where all your data lives

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
        App state is your overall state for the project - usually has to do with data you are rendering to the screen
        Component state is data that only lives in a component, I would think you would use this for form values 


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

        redux-thunk allows you to return a function instead of an object from your action-creators. best used for asychronous data.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    Redux - it is hard but once you get the hang of it the bigger picture of data flow starts to make sense. I can really see where my data comes from and how it is despersed throughout my project
