import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setActiveTab } from '../Redux/actions';
import './Tabs.scss';

export default function Tabs() {
  const activeTab = useSelector((state) => state.tabsReducer.activeTab);
  const dispatch = useDispatch();

  return (
    <ul className='tabs'>
      <li className={`tabs__tab ${activeTab === 0 ? 'active' : ''}`}>
        <button
          type='button'
          onClick={() => dispatch(setActiveTab(0))}
          className='tabs__link'
        >
          САМЫЙ ДЕШЕВЫЙ
        </button>
      </li>
      <li className={`tabs__tab ${activeTab === 1 ? 'active' : ''}`}>
        <button
          type='button'
          onClick={() => dispatch(setActiveTab(1))}
          className='tabs__link'
        >
          САМЫЙ БЫСТРЫЙ
        </button>
      </li>
      <li className={`tabs__tab ${activeTab === 2 ? 'active' : ''}`}>
        <button
          type='button'
          onClick={() => {
            dispatch(setActiveTab(2));
          }}
          className='tabs__link'
        >
          ОПТИМАЛЬНЫЙ
        </button>
      </li>
    </ul>
  );
}
