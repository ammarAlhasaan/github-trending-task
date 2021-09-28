import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { MainLayout } from './components';

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Helmet
          titleTemplate="%s | Github Trending"
          defaultTitle="Github Trending"
        >
          <meta name="description" content="A React Github Trending application" />
        </Helmet>
        <MainLayout
          navLinks={[{ to: '/home', value: 'Home' }]}
          subNavLinks={[{ to: '/home', value: 'Explore' }, { to: '/trending', value: 'Trending' }]}
        >
          <Routes />
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}
