import type { repositoriesTypes } from '../repositories/repositories'

export type ReduxState = {
    repositories: repositoriesTypes,
    searchHistory: Array<string>,
    ui: {
        isLoading: boolean,
        message: string
    }
}