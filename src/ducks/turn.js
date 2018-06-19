/**
 * The turn file
 */

export const types = {
    START_TURN: "START_TURN",
    END_TURN: "END_TURN",
    CALCULATE_SCORE: "CALCULATE_SCORE",
    ROLL_HAND: "ROLL_HAND"
};

/**
 * The default state of a turn.
 */
const DEFAULT_STATE = {
    player: null,
    turnNumber: 1,
    rolls: []
};
