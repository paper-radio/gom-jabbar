/**
 * The player file...
 *
 * Come up with a better doc string...
 */

/**
 * The player action types.
 */
export const types = {
    ADD_PLAYER: "ADD_PLAYER"
};

/**
 * The default state of players.
 */
const DEFAULT_STATE = {
    players: ["Jpr"]
};

/**
 * The players reducer.
 *
 * @param {*} state
 * @param {*} action
 */
export function reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.ADD_PLAYER:
            return {
                players: [...state, action.payload]
            };

        default:
            return state;
    }
}

/**
 * The players action creators.
 */
export const actions = {
    addPlayer(name) {
        return {
            type: types.ADD_PLAYER,
            payload: name
        };
    }
};
