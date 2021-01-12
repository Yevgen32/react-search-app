import { SET_SEARCH_HISTORY, MAX_ELEMENT_HISTORY } from './search-history.const'

export const setSearchHistory = (searchWorld: string) => {
    const localStorageHistory = localStorage?.getItem('searchHistoryList');
    const searchHistoryItem = localStorageHistory ? JSON.parse(localStorageHistory) : [];
    const searchHistoryList = [...new Set(searchHistoryItem.concat(searchWorld))];

    if (searchHistoryList.length > MAX_ELEMENT_HISTORY) {
        const searchHistory = searchHistoryList.slice(1, searchHistoryList.length)

        localStorage.setItem('searchHistoryList', JSON.stringify(searchHistory));
    } else {
        localStorage.setItem('searchHistoryList', JSON.stringify(searchHistoryList));
    }

    return ({
        type: SET_SEARCH_HISTORY,
        payload: searchHistoryList
    })

};