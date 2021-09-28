// eslint-disable-next-line max-len
/* eslint-disable jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,react/jsx-props-no-spreading,jsx-a11y/no-noninteractive-element-interactions */
import React, { FunctionComponent, useEffect, useState } from 'react';

import cn from 'classnames';
import './Dropdown.scss';

const ns = 'dropdown';
export type OptionsType = {
  key: string;
  value: string;
}

interface DropdownProps {
  options?: OptionsType[],
  selected?: string,
  onSelect?: Function,
  label?: string
}

const defaultProps: DropdownProps = {
  options: [],
  selected: undefined,
  onSelect: undefined,
  label: undefined,
};
const Dropdown: FunctionComponent<DropdownProps> = ({
  options, selected, onSelect, label,
}) => {
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState('');
  useEffect(() => {
    if (selected) {
      setSelect(selected);
    }
  }, []);
  return (
    <div className={cn(ns)}>
      <a
        className={cn(`${ns}__label`)}
        onClick={() => {
          setShow(!show);
        }}
      >
        {`${label} `}
        <span>{select !== '' ? select : 'Any'}</span>
      </a>
      {show && (
        <div
          className={cn(`${ns}__list-container`)}
        >
          <ul>
            {options?.map(({ key, value }: any) => (
              <li
                key={key}
                onClick={() => {
                  setSelect(key);
                  setShow(false);
                  // @ts-ignore
                  onSelect(key);
                }}
                className={cn((select === key) ? 'selected-option' : '')}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
Dropdown.defaultProps = defaultProps;

export default Dropdown;
