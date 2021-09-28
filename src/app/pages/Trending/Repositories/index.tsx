// eslint-disable-next-line max-len
/* eslint-disable jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,react/jsx-props-no-spreading,jsx-a11y/no-noninteractive-element-interactions,no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  ActionBar, Dropdown, ListItem, ListItemLoader, PageTitle, PageWrapper,
} from '../../../components';
import api from '../../../api';
import './Repositories.scss';
import ItemRepository from './ItemRepository';

const allLang = require('../languages.json');

export const Repositories = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const [languages, setLanguages] = useState<any[]>([]);
  const [selectedLang, setSelectedLang] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [error, setError] = useState(false);

  const history = useHistory();

  const getRepos = (q: string = '') => {
    api.get(`/repositories${q}`).then((response: any) => {
      setError(false);
      const { data } = response;
      setRepositories(data);
      setShowLoader(false);
    }).catch((e: any) => {
      setError(true);
      setShowLoader(false);
    });
  };
  useEffect(() => {
    setLanguages(allLang);
    setShowLoader(true);
    getRepos();
  }, []);
  useEffect(() => {
    setShowLoader(true);
    let q = '';
    if (selectedLang !== '') {
      q = `/${selectedLang}`;
      if (dateRange !== '') {
        q = `${q}?since=${dateRange}`;
      }
    } else if (dateRange !== '') {
      q = `?since=${dateRange}`;
    }
    getRepos(q);
  }, [selectedLang, dateRange]);
  const selectType = (type: string) => {
    history.push(type === 'repositories' ? '/trending' : '/trending/developers');
  };
  const items = repositories?.length === 0 ? (<h3>Not Found, Please Try Again</h3>)
    : repositories.map((repo: any, index) => (
      <ItemRepository
        key={String(index)}
        {...repo}
      />
    ));
  const filters = (
    <>
      <Dropdown
        options={languages}
        onSelect={setSelectedLang}
        selected={selectedLang}
        label="Languages:"
      />
      <Dropdown
        options={[{ key: 'daily', value: 'Today' }, { key: 'weekly', value: 'This week' }, {
          key: 'monthly',
          value: 'This month',
        }]}
        selected={dateRange}
        onSelect={setDateRange}
        label="Date range:"
      />
    </>
  );
  return (
    <div>
      <PageTitle title="Trending" description="See what the GitHub community is most excited about today." />
      <PageWrapper>

        <ListItem
          header={(
            <ActionBar
              buttons={[{ key: 'repositories', value: 'Repositories' }, { key: 'developers', value: 'Developers' }]}
              onClick={selectType}
              select="repositories"
              moreFilters={filters}
            />
          )}
          items={showLoader ? <ListItemLoader />
            : (error ? (<h3>Something wont wrong please try again</h3>) : items)}
        />
      </PageWrapper>
    </div>
  );
};
