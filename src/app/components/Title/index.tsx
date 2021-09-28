import React, { FunctionComponent, ReactNode } from 'react';

interface TitleProps {
  children?: ReactNode,
}

const defaultProps: TitleProps = {
  children: undefined,
};

const Title: FunctionComponent<TitleProps> = ({ children }) => (
  <h1>
    {children}
  </h1>
);

Title.defaultProps = defaultProps;

export default Title;
