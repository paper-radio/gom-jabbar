import { types, reducer, actions } from "../../turn";

describe("startTurn()", function() {
    it("should contain the correct action type", function() {
        const action = actions.startTurn();
        expect(action.type).toEqual(types.START_TURN);
    });
});
