import React, { FunctionComponent, useEffect, useState } from 'react';
import cn from 'classnames';

import './ButtonGroup.scss';

const ns = 'button-group';
export type ActionButtons = {
  key: string;
  value: string;
}

interface ButtonGroupProps {
  buttons?: ActionButtons[],
  onClick?: Function,
  select?: string
}

const defaultProps: ButtonGroupProps = {
  buttons: undefined,
  onClick: undefined,
  select: undefined,
};

const ButtonGroup: FunctionComponent<ButtonGroupProps> = ({ select, buttons, onClick }) => {
  const [selected, setSelected] = useState('');
  useEffect(() => {
    if (select) {
      setSelected(select);
    }
  });
  return (
    <div className="button-group">
      {buttons?.map((button: ActionButtons) => (
        <button
          className={cn(`${ns}-item`, { 'selected-button': selected === button.key })}
          type="button"
          key={button.key}
          // @ts-ignore
          onClick={() => {
            setSelected(button.key);
            // @ts-ignore
            onClick(button.key);
          }}
        >
          {button.value}
        </button>
      ))}
    </div>
  );
};

ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
