import { types, reducer, actions } from "../../players";

describe("addPlayer()", function() {
    it("should contain the correct action type", function() {
        const action = actions.addPlayer("John");
        expect(action.type).toEqual(types.ADD_PLAYER);
    });
});
