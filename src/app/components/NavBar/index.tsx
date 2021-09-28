import React, { FunctionComponent, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './NavBar.scss';
import { GithubIcon } from '../../icons';
import PageWrapper from '../PageWrapper';
import { ThemeContext } from '../../../context/ThemeContext';
import ButtonGroup from '../ButtonGroup';

export type NavLinkType = {
  to: string;
  value: string;
}

interface NavBarProps {
  navLinks?: NavLinkType[]
  subNavLinks?: NavLinkType[]
}

const defaultProps: NavBarProps = {
  navLinks: undefined,
  subNavLinks: undefined,
};

const NavBar: FunctionComponent<NavBarProps> = ({ navLinks, subNavLinks }) => {
  const context = useContext(ThemeContext);
  const themeMode = context.themeMode === 'light' ? 'light' : 'dark';
  // @ts-ignore
  const changeTheme = () => context.changeTheme(themeMode === 'light' ? 'dark' : 'light');

  return (
    <>
      <div className="navbar">
        <a href="https://github.com/" className="logo">
          <GithubIcon />
        </a>
        <ul>
          {navLinks?.map(({ to, value }, index) => (
            <li key={String(index)}>
              <Link to={to}>{value}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sub-navbar-container">
        <PageWrapper>
          <div className="sub-navbar">
            <ul>
              {subNavLinks?.map(({ to, value }, index) => (
                <li key={String(index)}>
                  <NavLink to={to} activeClassName="active">{value}</NavLink>
                </li>
              ))}
            </ul>
            <ButtonGroup
              select={themeMode}
              buttons={[{ key: 'dark', value: 'Dark' }, { key: 'light', value: 'Light' }]}
              onClick={changeTheme}
            />
          </div>
        </PageWrapper>
      </div>
    </>
  );
};

NavBar.defaultProps = defaultProps;

export default NavBar;
