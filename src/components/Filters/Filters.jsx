import './Filters.scss';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleAll, toggleCheckbox } from '../Redux/actions';

export default function Filters() {
  const checkboxState = useSelector((state) => state.checkboxReducer);
  const dispatch = useDispatch();
  const checkboxes = [
    { id: 'all', label: 'Все' },
    { id: 'withoutTransfers', label: 'Без пересадок' },
    { id: 'oneTransfer', label: '1 пересадка' },
    { id: 'twoTransfers', label: '2 пересадки' },
    { id: 'threeTransfers', label: '3 пересадки' },
  ];

  return (
    <div className='filters'>
      <h1 className='filters__title'>КОЛЛИЧЕСТВО ПЕРЕСАДОК</h1>
      {checkboxes.map((checkbox) => (
        <label key={checkbox.id}>
          <input
            type='checkbox'
            checked={
              checkbox.id === 'all'
                ? checkboxState.all
                : checkboxState[checkbox.id]
            }
            onChange={() => {
              if (checkbox.id === 'all') {
                dispatch(toggleAll());
              } else {
                dispatch(toggleCheckbox(checkbox.id));
              }
            }}
          />
          <span className='checkmark' />
          {checkbox.label}
        </label>
      ))}
    </div>
  );
}
