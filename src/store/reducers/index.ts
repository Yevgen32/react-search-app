import { combineReducers } from 'redux';

import { repositories } from './repositories.reducers';
import { searchHistory } from './search-history.reducers';
import { ui } from './ui.reducers';

const rootReducer = combineReducers({
    ui,
    repositories,
    searchHistory,
});

export default rootReducer;