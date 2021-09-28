import React, { FunctionComponent, ReactNode } from 'react';

interface PageWrapperProps {
  children?: ReactNode
}

const defaultProps: PageWrapperProps = {
  children: undefined,
};

const PageWrapper: FunctionComponent<PageWrapperProps> = ({ children }) => (
  <div className="container container-lg">
    {children}
  </div>
);

PageWrapper.defaultProps = defaultProps;

export default PageWrapper;
