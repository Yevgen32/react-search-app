import api from '../../api/api';

import { GET_REPOSITORIES } from '../constants/repositories.conts';

import { setLoading, setMessage } from './ui.action'

export const getItem = (search: string) => {
    return async (dispatch: (payload: unknown) => unknown) => {
        try {
            dispatch(setLoading(true))
            dispatch(setMessage(''))

            // TODO CREATE RIGHT TYPES FOR API. DONT HAVE status: 'ok' | 'error';code: number; data: T;
            const result = await api(`https://api.github.com/search/repositories?q={${search}}`)
            // @ts-ignore
            if (result.total_count) {
                dispatch(({
                    type: GET_REPOSITORIES,
                    // @ts-ignore
                    payload: result.items
                }));

            } else {
                dispatch(({
                    type: GET_REPOSITORIES,
                    // @ts-ignore
                    payload: result.items
                }));

                dispatch(setMessage('nothing found for your request :crying_cat_face:'))
            }

        } catch (error) {
            dispatch(setMessage(error))
        } finally {
            dispatch(setLoading(false))
        }
    }
}