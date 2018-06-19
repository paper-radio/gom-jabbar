import { types, reducer, actions } from "../../game";

describe("Game Reducer", function() {
    it("should store the game in the state", function() {
        const newState = reducer(undefined, actions.startGame());
        expect(newState.active).toEqual(true);
    });
});
