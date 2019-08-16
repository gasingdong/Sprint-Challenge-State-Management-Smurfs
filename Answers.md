1. What problem does the context API help solve?

1a. The Context API solves the problem of prop-drilling, where we have to pass down props from component to component. Instead, we can just use the context directly in any component that needs it, as long as the context is accessible.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

2a. `actions` describe the state change, `reducers` respond to actions and implement those changes to state, and the `store` holds the state data.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

3a. Application state is visible to the entire application and component state is only visible to that component. Application state is useful for data that needs to be accessed by multiple components at the same top-level while component state is useful for data that does not need to be used by any other component.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

4a. `redux-thunk` is a library that allows us to use middleware to intercept the normal Redux flow and make asynchronous API calls from action creators. Our `action-creators` can now return a function instead of an action and this will be given `dispatch` as an argument, which allows us to run async functions with dispatch within the action creator.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

5a. I'm pretty into the combination of Context API and the reducer pattern. When set up right, it's very powerful and clean without a lot of boilerplate code throughout the app.