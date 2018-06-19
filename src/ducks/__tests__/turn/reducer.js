import { types, reducer, actions } from "../../turn";

describe("Turn reducer", function() {
    it("should store a turn in the state", function() {
        const newState = reducer(undefined, actions.startTurn(1));
        expect(newState.payload).toEqual();
    });
});
