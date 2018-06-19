import { types, reducer, actions } from "../../game";

describe("startGame()", function() {
    it("should contain the correct action type", function() {
        const action = actions.startGame();
        expect(action.type).toEqual(types.START_GAME);
    });
});
