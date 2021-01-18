import type { ReduxState } from "../../@types/state.types"

export const isProgressSelectors = (state: ReduxState) => state.ui.isLoading;
export const messageSelectors = (state: ReduxState) => state.ui.message;