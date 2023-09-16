import React from 'react';
import ReactLoading from 'react-loading';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Ticket from '../Ticket/Ticket';
import { showMoreTickets } from '../Redux/actions';
import MoreTicketsButton from '../MoreTicketsButton/MoreTicketsButton';
import './TicketsList.scss';

export default function TicketsList() {
  const dispatch = useDispatch();
  const { ticketsData, limitation, loading, loadingComplete } = useSelector(
    (state) => state.ticketsReducer,
  );
  const { all, withoutTransfers, oneTransfer, twoTransfers, threeTransfers } =
    useSelector((state) => state.checkboxReducer);
  const { activeTab } = useSelector((state) => state.tabsReducer);
  let ticketsList;
  let noTickets = false;
  if (ticketsData) {
    const filteredTickets = ticketsData.filter((ticket) => {
      const transfers =
        ticket.segments[0].stops.length + ticket.segments[1].stops.length;

      if (all) {
        return true;
      }

      if (withoutTransfers && transfers === 0) {
        return true;
      }

      if (oneTransfer && transfers === 1) {
        return true;
      }

      if (twoTransfers && transfers === 2) {
        return true;
      }

      if (threeTransfers && transfers === 3) {
        return true;
      }
      return false;
    });
    if (filteredTickets.length === 0) noTickets = true;
    if (noTickets && !loading) {
      ticketsList = (
        <div className='no-tickets-message'>
          Нет билетов, удовлетворяющих выбранным фильтрам
        </div>
      );
    } else {
      if (activeTab === 0) {
        filteredTickets.sort((a, b) => a.price - b.price);
      }
      if (activeTab === 1) {
        filteredTickets.sort((a, b) => {
          const flyTime1 = a.segments[0].duration + a.segments[1].duration;
          const flyTime2 = b.segments[0].duration + b.segments[1].duration;
          return flyTime1 - flyTime2;
        });
      }
      if (activeTab === 2) {
        filteredTickets.sort((a, b) => {
          const optimus1 =
            a.segments[0].duration + a.segments[1].duration + a.price;
          const optimus2 =
            b.segments[0].duration + b.segments[1].duration + b.price;
          return optimus1 - optimus2;
        });
      }
      ticketsList = filteredTickets.map((ticket, index) => {
        if (index < limitation) {
          return (
            <Ticket
              key={uuidv4()}
              price={ticket.price}
              airline={ticket.carrier}
              to={ticket.segments[0]}
              back={ticket.segments[1]}
            />
          );
        }
        return null;
      });
    }
  }
  return (
    <div className='ticketsList'>
      {!loadingComplete && (
        <div className='ticketsList__loading'>
          Загрузка билетов...
          <ReactLoading type='bars' color='#2196F3' />
        </div>
      )}
      {ticketsList}
      {!noTickets && (
        <MoreTicketsButton onClick={() => dispatch(showMoreTickets())} />
      )}
    </div>
  );
}
