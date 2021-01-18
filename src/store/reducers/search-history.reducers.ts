import { SET_SEARCH_HISTORY } from '../constants/search-history.const'

export const searchHistory = (
    state = [],
    action: {
        type: string;
        payload: unknown
    },
) => {
    switch (action.type) {
        case SET_SEARCH_HISTORY:
            return action.payload;
        default:
            return state;
    }
};