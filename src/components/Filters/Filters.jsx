import './Filters.scss';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleAll, toggleCheckbox } from '../Redux/actions';

export default function Filters() {
  const checkboxState = useSelector((state) => state.checkboxReducer);
  const dispatch = useDispatch();
  return (
    <div className='filters'>
      <h1 className='filters__title'>КОЛЛИЧЕСТВО ПЕРЕСАДОК</h1>
      <label>
        <input
          type='checkbox'
          checked={checkboxState.all}
          onChange={() => dispatch(toggleAll())}
        />
        <span className='checkmark' />
        Все
      </label>
      <label>
        <input
          type='checkbox'
          checked={checkboxState.withoutTransfers}
          onChange={() => dispatch(toggleCheckbox('withoutTransfers'))}
        />
        <span className='checkmark' />
        Без пересадок
      </label>
      <label>
        <input
          type='checkbox'
          checked={checkboxState.oneTransfer}
          onChange={() => dispatch(toggleCheckbox('oneTransfer'))}
        />
        <span className='checkmark' />1 пересадка
      </label>
      <label>
        <input
          type='checkbox'
          checked={checkboxState.twoTransfers}
          onChange={() => dispatch(toggleCheckbox('twoTransfers'))}
        />
        <span className='checkmark' />2 пересадки
      </label>
      <label>
        <input
          type='checkbox'
          checked={checkboxState.threeTransfers}
          onChange={() => dispatch(toggleCheckbox('threeTransfers'))}
        />
        <span className='checkmark' />3 пересадки
      </label>
    </div>
  );
}
