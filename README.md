# Render react on the server

This is a simple react app which displays 3 todo items using redux. We want to use server side rendering so that the initial page load comes with the full html.

# Setup

```javascript
  yarn 
  yarn dev
```
This will launch the react / redux app with webpack dev server.

```javascript
  yarn start
```
Will launch express so we can play with server side rendering

The tests can be run with `yarn test` - there is one skipped test for checking if the three li elements from the react app are served on page load.

### Step 1: Return the html of the react app on the GET '/' express route

### Step 2: Embed the redux state in the returned html

### Step 3: Randomise the initial tasks when it starts up

### Step 4: Build the ability to add a task in React

### Step 5: Save a copy of the state on the server so it is maintained on page reload

## Resources

* [Redux server rendering docs](http://redux.js.org/docs/recipes/ServerRendering.html)
* [Security considerations](http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations)
* [Create React App](https://github.com/facebookincubator/create-react-app/)
