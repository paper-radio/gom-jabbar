import { types, reducer, actions } from "../../players";

describe("Players reducer", function() {
    it("should store a player in the state", function() {
        const newState = reducer(undefined, actions.addPlayer("Bob"));
        expect(newState["players"]).toEqual(["Bob"]);
    });
});
