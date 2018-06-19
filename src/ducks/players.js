export const types = {
    ADD_PLAYER: "ADD_PLAYER",
    REMOVE_PLAYER: "REMOVE_PLAYER",
    UPDATE_SCORE: "UPDATE_SCORE"
};

const DEFAULT_STATE = {
    players: null
};

export function reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.ADD_PLAYER:
            break;

        case types.REMOVE_PLAYER:
            break;

        case types.UPDATE_SCORE:
            break;

        default:
            return state;
    }
}

export const actions = {
    addPlayer(name) {
        return {
            type: types.ADD_PLAYER,
            payload: name
        };
    }
};
