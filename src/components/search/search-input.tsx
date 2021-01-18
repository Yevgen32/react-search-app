import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SearchInput as SearchInputComponent } from 'evergreen-ui';

// actions
import { setSearchHistory } from '../../store/actions/search-history.action';
import { getItem } from '../../store/actions/repositories.actions';

import './styles/search-input.css';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  return (
    <SearchInputComponent
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
      }}
      value={searchValue}
      className="search-input"
      name="search-input"
      placeholder="for search please enter ..."
      onKeyPress={(e: React.KeyboardEvent) => {
        if (e.charCode === 13) {
          if (searchValue.length) {
            dispatch(getItem(searchValue));
            dispatch(setSearchHistory(searchValue));
          }
        }

        return;
      }}
    />
  );
};

export default SearchInput;
