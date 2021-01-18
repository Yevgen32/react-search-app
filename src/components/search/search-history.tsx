import React from 'react';

import './styles/search-history.css';

const SearchHistory = () => {
  const localStorageHistory = localStorage?.getItem('searchHistoryList');
  
  const searchHistory = localStorageHistory ? JSON.parse(localStorageHistory) : [];

  return (
    <div className="search-history-wrapper">
      <p>Search history:</p>
      <div className="search-history-list">
      {searchHistory?.length
        ? searchHistory.map((historyItem: string, i: number) => (
            <div key={historyItem + i} className="search-history-item">
              {historyItem}
            </div>
          ))
        : 'Don`t have search result...'}
      </div>

    </div>
  );
};

export default SearchHistory;
