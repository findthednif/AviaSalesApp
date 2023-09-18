import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setActiveTab } from '../Redux/actions';
import './Tabs.scss';

export default function Tabs() {
  const tabs = [
    { id: 0, label: 'САМЫЙ ДЕШЕВЫЙ' },
    { id: 1, label: 'САМЫЙ БЫСТРЫЙ' },
    { id: 2, label: 'ОПТИМАЛЬНЫЙ' },
  ];

  const activeTab = useSelector((state) => state.tabsReducer.activeTab);
  const dispatch = useDispatch();

  return (
    <ul className='tabs'>
      {tabs.map((tab) => (
        <li key={tab.id} className='tabs__tab'>
          <button
            type='button'
            onClick={() => dispatch(setActiveTab(tab.id))}
            className={`tabs__button ${activeTab === tab.id ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
