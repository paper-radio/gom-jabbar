/**
 * The turn file
 */

export const types = {
    START_TURN: "START_TURN"
};

/**
 * The default state of a turn.
 */
const DEFAULT_STATE = {
    turnNumber: 0
};

export function reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.START_TURN:
            return {
                turnNumber: [...state, action.payload]
            };

        default:
            return state;
    }
}

export const actions = {
    startTurn(turnNumber) {
        return {
            type: types.START_TURN,
            payload: turnNumber
        };
    }
};
