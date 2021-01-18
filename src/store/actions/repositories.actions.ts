import api from '../../api/api';

import { GET_REPOSITORIES } from '../constants/repositories.conts';

import { setLoading, setMessage } from './ui.action'

import type { repositorieTypes } from '../../@types/repositories/repositories'

export const getItem = (search: string) => {
    return async (dispatch: (payload: unknown) => unknown) => {
        try {
            dispatch(setLoading(true))
            dispatch(setMessage(''))

            const result = await api<{ total_count: number, items: repositorieTypes }>(`https://api.github.com/search/repositories?q={${search}}`)

            if (result.total_count) {
                dispatch(({
                    type: GET_REPOSITORIES,
                    payload: result.items
                }));

            } else {
                dispatch(({
                    type: GET_REPOSITORIES,
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