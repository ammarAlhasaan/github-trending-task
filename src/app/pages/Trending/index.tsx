import React from 'react';
import { Helmet } from 'react-helmet-async';
import Routes from './routes';

export const Trending = () => (
  <div>
    <Helmet>
      <title>Trending</title>
      <meta
        name="description"
        content="A React Github Trending application"
      />

    </Helmet>

    <Routes />

  </div>
);
