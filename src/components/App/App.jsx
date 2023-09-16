import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.scss';
import Filters from '../Filters/Filters';
import Logo from '../Logo/Logo';
import Tabs from '../Tabs/Tabs';
import TicketsList from '../TicketsList/TicketsList';
import { fetchTickets } from '../Redux/actions';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);
  return (
    <>
      <Logo />
      <div className='main'>
        <Filters />
        <div>
          <Tabs />
          <TicketsList />
        </div>
      </div>
    </>
  );
}
