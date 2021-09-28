import React, { FunctionComponent, ReactNode } from 'react';
import './Item.scss';

interface MainLayoutProps {
  children?: ReactNode,
}

const defaultProps: MainLayoutProps = {
  children: undefined,
};

const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => (
  <div className="item-box">
    {children}
  </div>
);

MainLayout.defaultProps = defaultProps;

export default MainLayout;
