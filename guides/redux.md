# Redux

## What is Redux?

Redux is not a framework. It's almost not even a library

### What is Flux?

Flux came before Redux.

### Flux Vs. Redux

Redux has a single store.

## Data flow

## Actions

Actions are **objects** that describe which operation the reducer has to perform. Actions are simple objects. At the bare minimum they must contain at least one property called `type`. The type property is essentially the name of the reducer that will be called to transform the application state. Actions can optionally contain a property called payload. Payload can deliver optional data to the reducer. Actions are dispatched from the UI layer. How does the UI layer respond to changes in the store? The UI can subscribe to the store and be notified by subscription call back.

### Types and payloads

Types are strings.
Types follow the following conventions…
1 They are in all uppercase
2 Spaces are underscores
3 Usually start with a verb

### Example

A basic action...

```javascript
const anAction = {
    type: "INCREASE_COUNT"
};
```

Here is the same action with a payload...

```javascript
const anAction = {
    type: "INCREASE_COUNT",
    payload: 3
};
```

### Take Away

1 Actions are objects
2 Actions must contain a `type`
3 They can also contain a payload

## Action Creators

It is boring to create action objects each time we need them. _Action creators_ solve the problem by being a helper function that returns an action object.

```javascript
function actionCreator() {
    return { ... };
}
```

Action creator function names are usually derived from the action name.

```javascript
function increaseCount(amount) {
    return {
        type: INCREASE_COUNT,
        payload: amount
    };
}
```

You can use the es6 default parameter syntax to define a default value...

```javascript
function increaseCount(amount = 1) {
    return {
        type: INCREASE_COUNT,
        payload: amount
    };
}
```

## Store

Redux has a **single** store that holds all of the application state.
The store has one **root reducer**. The root reducer is _either_ a simple function or a combination of functions that transform the application state given an action.

## Reducers

Reducers are in charge of changing the state
Reducers take an action and the state to produce a new state. (The new state could be identical).

Reducers are like higher order function reduce. Reduce takes an array of values and an initial state and **reduce** it to a single value. In redux, a reducer transforms a list of **actions** and an initial **state** to the next state.

1 Reducers are _pure_ functions.
2 They always return a new object
3 Return given state when nothing changes

## State

## Thunk

## Links
