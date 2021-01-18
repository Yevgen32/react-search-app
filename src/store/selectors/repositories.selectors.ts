
import type { ReduxState } from "../../@types/state/state.types"
import type { repositoriesTypes } from '../../@types/repositories/repositories'

export const repositoriesSelector = (state: ReduxState): repositoriesTypes => state.repositories;
