# Redux

## What is Redux?

### What is Flux?

### Flux Vs. Redux

## Data flow

## Actions

Actions are **objects** that describe which operation the reducer has to perform. Actions are simple objects. At the bare minimum they must contain at least one property called `type`. The type property is essentially the name of the reducer that will be called to transform the application state. Actions can optionally contain a property called payload. Payload can deliver optional data to the reducer.

### Take Away

1 Actions are objects
2 Actions must contain a type
3 They can also contain a payload

## Action Creators

It is boring to create action objects each time we need them. _Action creators_ solve the problem by being a helper function that returns an action object.

## Store

Redux has a **single** store that holds all of the application state.
The store has one **root reducer**. The root reducer is _either_ a simple function or a combination of functions that transform the application state given an action.

## Reducers

## State

## Thunk

## Links
