/**
 * The game file.
 */

/**
 * The game action types.
 */
export const types = {
    START_GAME: "START_GAME"
};

/**
 * The default state of a game.
 */
const DEFAULT_STATE = {
    active: false
};

export function reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.START_GAME:
            return {
                active: true
            };

        default:
            return state;
    }
}

export const actions = {
    startGame() {
        return {
            type: types.START_GAME
        };
    }
};
