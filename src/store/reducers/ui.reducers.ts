import { LOADING, SET_MESSAGE } from '../constants/ui.const'


export const ui = (
    state = [],
    action: {
        type: string;
        payload: unknown;
    },
) => {
    switch (action.type) {
        case LOADING:
            return ({ ...state, isLoading: action.payload });
        case SET_MESSAGE:
            return ({ ...state, message: action.payload })
        default:
            return state;
    }
};