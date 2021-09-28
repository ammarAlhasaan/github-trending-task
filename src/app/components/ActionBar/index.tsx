import React, { FunctionComponent, useEffect, useState } from 'react';

import './ActionBar.scss';
import ButtonGroup, { ActionButtons } from '../ButtonGroup';

interface ActionBarProps {
  buttons?: ActionButtons[],
  onClick?: Function,
  select?: string,
  moreFilters?: any,
}

const defaultProps: ActionBarProps = {
  buttons: undefined,
  onClick: undefined,
  select: undefined,
  moreFilters: undefined,
};

const ActionBar: FunctionComponent<ActionBarProps> = ({
  select, buttons, onClick, moreFilters,
}) => {
  const [selected, setSelected] = useState('');
  useEffect(() => {
    if (select) {
      setSelected(select);
    }
  });
  return (
    <div className="action-bar">
      <ButtonGroup select={select} buttons={buttons} onClick={onClick} />
      {moreFilters && <div className="d-flex more-filters">{moreFilters}</div>}
    </div>
  );
};

ActionBar.defaultProps = defaultProps;

export default ActionBar;
