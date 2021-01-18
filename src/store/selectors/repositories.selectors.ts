
import type { ReduxState } from "../../@types/state.types"

export const repositoriesSelector = (state: ReduxState): Array<{ description: string; full_name: string; id: string; language: string }> => state.repositories;
