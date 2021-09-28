import React, { FunctionComponent } from 'react';
import Title from '../Title';
import './PageTitle.scss';

interface PageTitleProps {
  title?: string,
  description?: string
}

const defaultProps: PageTitleProps = {
  title: undefined,
  description: undefined,
};

const PageTitle: FunctionComponent<PageTitleProps> = ({ title, description }) => (
  <div className="page-title">
    <Title>{title}</Title>
    <p>{description}</p>
  </div>
);

PageTitle.defaultProps = defaultProps;

export default PageTitle;
