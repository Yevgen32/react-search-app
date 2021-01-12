import React from 'react';

import { useSelector } from 'react-redux';

// selectors
import { repositoriesSelector } from '../repositories/repositories.selectors';
import { isProgressSelectors, messageSelectors } from '../ui/ui.selectors';

// components
import SearchHistory from './search-history';
import SearchInput from './search-input';
import SearchItem from './search-items';
import LoaderScreen from '../loader/loader-screen';

import './search.css';

const Search = () => {
  const repositories = useSelector(repositoriesSelector);
  const isProgress = useSelector(isProgressSelectors);
  const message = useSelector(messageSelectors);

  return (
    <div className="wrapper">
      <div>
        <SearchInput />
        <SearchHistory />
      </div>

      {isProgress ? <LoaderScreen /> : null}

      <div className="search-list">
        {message ? <div className="message-info">{message}</div> : null}

        {repositories.length
          ? repositories.map(
              (repositorie: {
                description: string;
                full_name: string;
                id: string;
                language: string;
              }) => {
                const { id, description, full_name, language } = repositorie;

                return (
                  <SearchItem
                    id={id}
                    key={id}
                    name={full_name}
                    language={language}
                    description={description}
                  />
                );
              },
            )
          : null}
      </div>
    </div>
  );
};

export default Search;
