/**
 * The game file.
 */

/**
 * The game action types.
 */
export const types = {
    START_GAME: "START_GAME",
    END_GAME: "END_GAME"
};

/**
 * The default state of a game.
 */
const DEFAULT_STATE = {
    active: false,
    winner: null,
    turns: []
};
