import { addPlayer } from "../actions/game";
import reducer from "./game";

describe("Game reducer", function() {
    it("should store the player name in the state", function() {
        const newState = reducer(undefined, addPlayer("Gabe"));
        expect(newState.players).toEqual("Gabe");
    });
});
