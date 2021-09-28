import React, { FunctionComponent, ReactNode } from 'react';
import NavBar, { NavLinkType } from '../NavBar';

interface MainLayoutProps {
  children?: ReactNode,
  navLinks?: NavLinkType[]
  subNavLinks?: NavLinkType[]
}

const defaultProps: MainLayoutProps = {
  children: undefined,
  navLinks: undefined,
  subNavLinks: undefined,
};

const MainLayout: FunctionComponent<MainLayoutProps> = ({ navLinks, subNavLinks, children }) => (
  <div>
    <NavBar navLinks={navLinks} subNavLinks={subNavLinks} />
    {children}
  </div>
);

MainLayout.defaultProps = defaultProps;

export default MainLayout;
