import { GET_REPOSITORIES } from '../constants/repositories.conts';

export const repositories = (
    state = {},
    action: {
        type: string;
        payload: unknown
    },
) => {
    switch (action.type) {
        case GET_REPOSITORIES:
            return action.payload;
        default:
            return state;
    }
};