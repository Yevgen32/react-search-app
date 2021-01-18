import React from 'react';

import { useSelector } from 'react-redux';

// selectors
import { repositoriesSelector } from '../../store/selectors/repositories.selectors';
import { isProgressSelectors, messageSelectors } from '../../store/selectors/ui.selectors';

// components
import SearchHistory from '../../components/search/search-history';
import SearchInput from '../../components/search/search-input';
import SearchItem from '../../components/search/search-items';
import Loader from '../../components/ui/loader/loader';
import Messages from '../../components/ui/messages/message'

import './styles/search-screen.css';

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

      {isProgress ? <Loader /> : null}

      <div className="search-list">
      {message ? <Messages message={message}/> : null}

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
