import React, { FunctionComponent, ReactNode } from 'react';

interface TitleProps {
  header?: ReactNode,
  items?: ReactNode,
}

const defaultProps: TitleProps = {
  header: undefined,
  items: undefined,
};

const ListItem: FunctionComponent<TitleProps> = ({ header, items }) => (
  <div className="list-item">
    <div className="list-item__header">
      {header}
    </div>
    <div className="list-item__items">
      {items}
    </div>
  </div>
);

ListItem.defaultProps = defaultProps;

export default ListItem;
