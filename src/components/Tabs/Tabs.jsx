import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setActiveTab } from '../Redux/actions';
import './Tabs.scss';

export default function Tabs() {
  const activeTab = useSelector((state) => state.tabsReducer.activeTab);
  const dispatch = useDispatch();

  return (
    <ul className='tabs'>
      <li className='tabs__tab'>
        <button
          type='button'
          onClick={() => dispatch(setActiveTab(0))}
          className={`tabs__button ${activeTab === 0 ? 'active' : ''}`}
        >
          САМЫЙ ДЕШЕВЫЙ
        </button>
      </li>
      <li className='tabs__tab'>
        <button
          type='button'
          onClick={() => dispatch(setActiveTab(1))}
          className={`tabs__button ${activeTab === 1 ? 'active' : ''}`}
        >
          САМЫЙ БЫСТРЫЙ
        </button>
      </li>
      <li className='tabs__tab'>
        <button
          type='button'
          onClick={() => {
            dispatch(setActiveTab(2));
          }}
          className={`tabs__button ${activeTab === 2 ? 'active' : ''}`}
        >
          ОПТИМАЛЬНЫЙ
        </button>
      </li>
    </ul>
  );
}
